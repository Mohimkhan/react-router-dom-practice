import { getContacts } from "../contacts";

export async function ContactLoader() {
  const contacts = await getContacts();
  return { contacts };
}
