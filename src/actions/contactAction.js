import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../contacts";

export async function contactAction() {
  const contact = await createContact();
  return { contact };
}

export async function contactUpdateAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function DeleteContactAction({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
