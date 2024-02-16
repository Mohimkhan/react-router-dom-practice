import { createContact } from "../contacts";

export async function contactAction() {
  const contact = await createContact();
  return { contact };
}
