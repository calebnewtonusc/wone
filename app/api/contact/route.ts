import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Captured in Vercel function logs — visible at vercel.com/dashboard → Logs
    // Replace this block with your email service when ready (Resend, Mailchimp, etc.)
    //
    // Example with Resend:
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "Wone Contact <noreply@woneportal.com>",
    //     to: "hello@woneportal.com",
    //     replyTo: email,
    //     subject: `New contact from ${name}`,
    //     html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br>${message}</p>`,
    //   });
    console.log(`[Wone Contact] ${new Date().toISOString()} — ${name} <${email}>: ${message.slice(0, 120)}`);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
