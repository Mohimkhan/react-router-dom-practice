import { getContact, getContacts } from "../contacts";

export async function ContactLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function IndivitualContactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}
