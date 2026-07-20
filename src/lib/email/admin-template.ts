export function adminEmail({
  name,
  email,
  location,
  message,
}: {
  name: string;
  email: string;
  location: string;
  message: string;
}) {
  return `
    <h2>New Website Enquiry</h2>

    <p><strong>Name:</strong> ${name}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Location:</strong> ${location}</p>

    <hr>

    <p>${message.replace(/\n/g, "<br>")}</p>
  `;
}