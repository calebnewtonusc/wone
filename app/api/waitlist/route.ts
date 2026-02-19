import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body as { email?: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Captured in Vercel function logs — visible at vercel.com/dashboard → Logs
    // Replace this block with your email service when ready (Resend, Mailchimp, etc.)
    //
    // Example with Resend:
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "Wone <noreply@woneportal.com>",
    //     to: email,
    //     subject: "You're on the Wone waitlist!",
    //     html: "<p>Thanks for applying — we'll be in touch when your spot opens up.</p>",
    //   });
    console.log(`[Wone Waitlist] ${new Date().toISOString()} — ${email}`);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
