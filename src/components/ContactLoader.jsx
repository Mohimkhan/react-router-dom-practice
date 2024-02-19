import { getContact, getContacts } from "../contacts";

export async function ContactLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function IndivitualContactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}
