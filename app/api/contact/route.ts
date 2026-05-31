import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, company, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  await resend.emails.send({
    from: "Contact Form <hello@tomkerlin.com>",
    to: "thomas.m.kerlin@gmail.com",
    replyTo: email,
    subject: `New message from ${name}${company ? ` at ${company}` : ""}`,
    text: `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  return NextResponse.json({ success: true });
}
