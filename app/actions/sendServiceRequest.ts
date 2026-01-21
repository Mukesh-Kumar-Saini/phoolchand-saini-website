"use server";

import nodemailer from "nodemailer";

export async function sendServiceRequest(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const service = formData.get("service") as string;
  const address = formData.get("address") as string;
  const mobile = formData.get("mobile") as string;

  if (!fullName || !service || !address || !mobile) {
    throw new Error("Invalid form data");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const submissionTime = new Date().toLocaleString();

  await transporter.sendMail({
    from: `"Website Lead" <${process.env.GMAIL_USER}>`,
    to: "Phoolchands008@gmail.com",
    subject: "New Service Request – Phoolchand Saini Website",
    text: `
New customer service request received.

Full Name:
${fullName}

Selected Service / Problem:
${service}

Address:
${address}

Mobile Number:
${mobile}

Submission Time:
${submissionTime}
`,
  });
}
