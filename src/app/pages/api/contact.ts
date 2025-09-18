import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  const { name, company, contact, message } = req.body;

  try {
    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",       // or your email SMTP server
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,  // your email
        pass: process.env.EMAIL_PASS,  // app password if Gmail
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "your-email@example.com",   // where you want to receive messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>Contact Form Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error sending email" });
  }
}
