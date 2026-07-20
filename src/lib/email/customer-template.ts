import { COMPANY } from "./branding";

export function customerEmail({
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
  return `<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Thank you</title>
</head>
<body style="margin:0;padding:0;background:#000;font-family:Arial,Helvetica,sans-serif;color:#fff;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#000;padding:40px 16px;">
<tr><td align="center">
<table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;background:#0d0d0d;border:1px solid #222;border-radius:24px;overflow:hidden;">
<tr><td align="center" style="padding:40px 24px 20px;">
<img src="${COMPANY.logo}" alt="${COMPANY.name}" style="max-width:220px;width:100%;height:auto;">
</td></tr>
<tr><td style="padding:0 36px 36px;">
<h1 style="margin:0 0 12px;font-size:30px;">Thanks for getting in touch.</h1>
<p style="color:#cfcfcf;line-height:1.7">Hi ${name}, we've received your enquiry and will be in touch within one business day.</p>

<table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;background:#111;border:1px solid #35b2df;border-radius:18px;">
<tr><td style="padding:24px;">
<h2 style="margin:0 0 14px;color:#35b2df;font-size:20px;">What happens next?</h2>
<ul style="margin:0;padding-left:20px;color:#ddd;line-height:2;">
<li>We'll review your enquiry.</li>
<li>We'll respond within one business day.</li>
<li>We'll discuss ideas, availability and pricing.</li>
<li>We'll arrange your shoot.</li>
</ul>
</td></tr></table>

<table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #222;border-radius:18px;">
<tr><td style="padding:24px;">
<h2 style="margin:0 0 18px;">Your enquiry</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Location:</strong> ${location || "-"}</p>
<div style="margin-top:18px;padding:18px;background:#181818;border-radius:12px;color:#ddd;white-space:pre-line;">${message}</div>
</td></tr></table>

<p style="margin:30px 0;text-align:center;">
<a href="${COMPANY.website}" style="display:inline-block;background:#35b2df;color:#000;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:bold;">Visit our website</a>
</p>

<hr style="border:none;border-top:1px solid #222;margin:32px 0;">

<p style="color:#aaa;line-height:1.8;font-size:14px;">
<strong>${COMPANY.name}</strong><br>
Professional Automotive Photography<br><br>
<a href="mailto:${COMPANY.email}" style="color:#35b2df;">${COMPANY.email}</a><br>
<a href="${COMPANY.website}" style="color:#35b2df;">${COMPANY.website}</a>
</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
