// Contact form storage - uses in-memory logging compatible with Vercel serverless
// Note: For persistent storage, integrate a hosted DB like Neon, PlanetScale, or Supabase.

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// In-memory store (per serverless function instance)
const contactLog: Array<ContactData & { created_at: string }> = [];

export function insertContact(contact: ContactData) {
  const entry = {
    ...contact,
    created_at: new Date().toISOString(),
  };
  contactLog.push(entry);
  // Log to server console (visible in Vercel function logs)
  console.log("[Contact Form Submission]", JSON.stringify(entry, null, 2));
  return { success: true };
}

export function getContacts() {
  return contactLog;
}

export default contactLog;
