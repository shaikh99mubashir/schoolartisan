import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data =
  | { success: true }
  | { success: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, phone, message, type } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    type?: "demo" | "contact";
  };

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Name, email and message are required." });
  }

  try {
    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const isSecure = port === 465;

    const transport = nodemailer.createTransport({
      host,
      port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: isSecure
        ? {
            // Helpful for local dev with some providers; remove if not needed in production
            rejectUnauthorized: false,
          }
        : undefined,
    });

    const subjectPrefix = type === "demo" ? "Demo Request" : "Contact Request";

    await transport.sendMail({
      from: `"School Artisan Website" <${process.env.SMTP_FROM || "contact@techvocalz.com"}>`,
      to: "contact@techvocalz.com",
      subject: `${subjectPrefix} from ${name}`,
      replyTo: email,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone || "-"} 
Type: ${type || "contact"}

Message:
${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Failed to send message. Please check SMTP settings.";
    return res
      .status(500)
      .json({ success: false, error: message });
  }
}

