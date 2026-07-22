/**
 * build-vercel.mjs
 * Post-build script that converts TanStack Start's dist/ output into
 * Vercel's Build Output API v3 format (.vercel/output/).
 *
 * Structure created:
 *   .vercel/output/
 *     config.json          — route config (static then SSR fallback)
 *     static/              — all client assets (JS, CSS, images)
 *     functions/
 *       ssr.func/
 *         server.js + assets/  — the SSR server bundle (copied from dist/server/)
 *         _entry.mjs           — Node.js wrapper that bridges Web API ↔ Node http
 *         .vc-config.json      — tells Vercel: Node 20, use _entry.mjs
 */

import { execSync } from "node:child_process";
import {
  cpSync,
  mkdirSync,
  writeFileSync,
  rmSync,
} from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");

// ── 1. Run the regular Vite build ──────────────────────────────────────────
console.log("🔨  Building app (client + server)…");
execSync("npx vite build", { stdio: "inherit", cwd: root });

// ── 2. Wipe and recreate .vercel/output/ ───────────────────────────────────
const out = join(root, ".vercel/output");
rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, "static"), { recursive: true });

// ── 3. Copy client bundle → static/ ────────────────────────────────────────
console.log("📁  Copying static assets…");
cpSync(join(root, "dist/client"), join(out, "static"), { recursive: true });

// ── 4. Create SSR serverless function ──────────────────────────────────────
console.log("⚡  Packaging SSR function…");
const funcDir = join(out, "functions/ssr.func");
mkdirSync(funcDir, { recursive: true });

// Copy the entire dist/server/ (server.js + assets/) into the function dir
cpSync(join(root, "dist/server"), funcDir, { recursive: true });

// Node.js wrapper: bridges Node http.IncomingMessage → Web API Request → Response
writeFileSync(
  join(funcDir, "_entry.mjs"),
  `import serverModule from "./server.js";

// server.js exports { default: { fetch } } — unwrap it
const server = serverModule?.default ?? serverModule;

export default async function handler(req, res) {
  try {
    const proto = req.headers["x-forwarded-proto"] ?? "https";
    const host  = req.headers["host"] ?? "localhost";

    // Collect request body
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const bodyBuf = Buffer.concat(chunks);

    // Build Headers object
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v == null) continue;
      if (Array.isArray(v)) v.forEach((vi) => headers.append(k, vi));
      else headers.set(k, v);
    }

    const url = \`\${proto}://\${host}\${req.url}\`;
    const hasBody = bodyBuf.length > 0 && !["GET", "HEAD"].includes(req.method ?? "");

    const webRequest = new Request(url, {
      method: req.method,
      headers,
      body: hasBody ? bodyBuf : undefined,
      ...(hasBody ? { duplex: "half" } : {}),
    });

    const webResponse = await server.fetch(webRequest);

    res.statusCode = webResponse.status;
    webResponse.headers.forEach((v, k) => {
      try { res.setHeader(k, v); } catch { /* skip invalid headers */ }
    });

    const buf = Buffer.from(await webResponse.arrayBuffer());
    res.end(buf);
  } catch (err) {
    console.error("[SSR handler error]", err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Internal Server Error: " + (err?.message ?? String(err)));
  }
}
`);

// Tell Vercel: Node 20, entry = _entry.mjs
writeFileSync(
  join(funcDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "_entry.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
    },
    null,
    2
  )
);

// ── 5. Write the route config ───────────────────────────────────────────────
// "handle: filesystem" → serve anything that exists in static/ directly
// fallback → send everything else to /ssr (the SSR function)
writeFileSync(
  join(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/ssr" },
      ],
    },
    null,
    2
  )
);

console.log("✅  .vercel/output/ is ready for deployment!");
