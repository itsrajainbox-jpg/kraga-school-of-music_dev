import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/calendar",
];

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: SCOPES,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID_CONTACT,

      range: "Sheet1!A:N",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [[name, email, subject, message]],
      },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
   from: `"Kraga School of Music" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "Enquiry Confirmation - Kraga School of Music",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 40px 20px;">
            <div
            style="
                max-width: 600px;
                margin: auto;
                border-radius: 18px;
                overflow: hidden;
                border: 2px solid #facc15;
                box-shadow: 0 6px 20px rgba(250, 204, 21, 0.2);
            "
            >
            <!-- Header -->
            <div
                style="
                background: linear-gradient(135deg, #facc15, #eab308);
                padding: 30px;
                text-align: center;
                "
            >
                <h1
                style="
                    margin: 0;
                    color: #111111;
                    font-size: 30px;
                    font-weight: bold;
                "
                >
                ✉️ Enquiry Received
                </h1>

                <p
                style="
                    margin-top: 10px;
                    color: #1f1f1f;
                    font-size: 16px;
                "
                >
                Thank you for contacting Kraga School of Music
                </p>
            </div>

            <!-- Body -->
            <div style="padding: 30px; color: #111;">
                <p style="font-size: 17px;">
                Hello <strong style="color: #eab308;">${name}</strong>,
                </p>

                <p style="line-height: 1.7;">
                We have successfully received your enquiry. Our team will review your message and get back to you as soon as possible.
                </p>

                <!-- Enquiry Details -->
                <div
                style="
                    border: 1px solid #facc15;
                    border-radius: 14px;
                    padding: 20px;
                    margin-top: 25px;
                "
                >
                <h3 style="margin-top: 0; color: #eab308;">
                    Enquiry Details
                </h3>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Subject:</strong> ${subject}</p>

                <div style="margin-top: 15px;">
                    <strong>Message:</strong>
                    <div
                    style="
                        margin-top: 8px;
                        padding: 12px;
                        background: #f9fafb;
                        border-radius: 8px;
                        line-height: 1.6;
                    "
                    >
                    ${message}
                    </div>
                </div>
                </div>

                <p style="margin-top: 25px; line-height: 1.7;">
                We appreciate your interest in Kraga School of Music and look forward to assisting you.
                </p>

                <!-- Footer -->
                <footer
                style="
                    color: black;
                    padding: 20px 10px 0;
                    text-align: center;
                    font-family: Arial, sans-serif;
                "
                >
                <p style="margin: 0; font-size: 14px;">
                    © ${new Date().getFullYear()} All Rights Reserved
                </p>

                <p style="margin: 8px 0 0; font-size: 14px; color: #666;">
                    Designed & Developed by
                    <a
                    href="https://cloudspacedesign.com/"
                    style="
                        color: #f5c542;
                        font-weight: bold;
                        text-decoration: none;
                    "
                    >
                    CloudSpaceDesign
                    </a>
                </p>
                </footer>
            </div>
            </div>
        </div>
  `,
    });

    await transporter.sendMail({
    from: `"New Contact Enquiry" <${process.env.SMTP_EMAIL}>`,

      to: process.env.MANAGEMENT_EMAIL,

      subject: "New Contact Enquiry",

      html: `
        <div
        style="
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            padding: 40px 20px;
        "
        >
        <div
            style="
            max-width: 720px;
            margin: auto;
            background: #ffffff;
            border: 2px solid #f5c542;
            border-radius: 24px;
            overflow: hidden;
            "
        >
            <!-- Header -->
            <div
            style="
                background: #f5c542;
                padding: 45px 30px;
                text-align: center;
            "
            >
            <h1
                style="
                margin: 0;
                font-size: 42px;
                color: #111;
                "
            >
                📩 New Enquiry Received
            </h1>

            <p
                style="
                margin-top: 15px;
                font-size: 20px;
                color: #111;
                "
            >
                A new enquiry has been submitted through the website
            </p>
            </div>

            <!-- Body -->
            <div style="padding: 45px;">
            <p
                style="
                font-size: 20px;
                color: #111;
                margin-top: 0;
                "
            >
                Hello
                <span style="color:#f5c542; font-weight:bold;">
                Admin
                </span>,
            </p>

            <p
                style="
                font-size: 18px;
                line-height: 1.7;
                color: #222;
                "
            >
                Below are the enquiry details submitted by the user.
            </p>

            <!-- Enquiry Details -->
            <div
                style="
                border: 1.5px solid #f5c542;
                border-radius: 20px;
                padding: 30px;
                margin-top: 35px;
                "
            >
                <h2
                style="
                    margin-top: 0;
                    color: #f5c542;
                    font-size: 32px;
                "
                >
                Enquiry Details
                </h2>

                <p style="font-size:18px; color:#111;">
                <strong style="color:#f5c542;">Name:</strong> ${name}
                </p>

                <p style="font-size:18px; color:#111;">
                <strong style="color:#f5c542;">Email:</strong> ${email}
                </p>

                <p style="font-size:18px; color:#111;">
                <strong style="color:#f5c542;">Subject:</strong> ${subject}
                </p>

                <div style="margin-top:20px;">
                <p style="font-size:18px; color:#111;">
                    <strong style="color:#f5c542;">Message:</strong>
                </p>

                <div
                    style="
                    background:#fafafa;
                    border-left:4px solid #f5c542;
                    padding:20px;
                    border-radius:12px;
                    color:#111;
                    line-height:1.7;
                    white-space:pre-wrap;
                    "
                >
                    ${message}
                </div>
                </div>
            </div>

            <!-- Submitted Time -->
            <div
                style="
                margin-top: 35px;
                border-left: 6px solid #f5c542;
                padding: 10px 0 10px 25px;
                "
            >
                <h2
                style="
                    color: #f5c542;
                    font-size: 30px;
                    margin-top: 0;
                "
                >
                Submission Information
                </h2>

                <p style="font-size:18px; color:#111;">
                ${new Date().toLocaleString()}
                </p>
            </div>

            <!-- Footer -->
            <div
                style="
                text-align:center;
                margin-top:55px;
                "
            >
                <p style="margin:0; color:#111; font-size:16px;">
                © ${new Date().getFullYear()} All Rights Reserved
                </p>

                <p
                style="
                    margin-top:10px;
                    color:#b0b0b0;
                    font-size:16px;
                "
                >
                Designed & Developed by
                <a
                    style="
                    color:#f5c542;
                    font-weight:bold;
                    text-decoration:none;
                    "
                    href="https://cloudspacedesign.com/"
                >
                    CloudSpaceDesign
                </a>
                </p>
            </div>
            </div>
        </div>
        </div>
`,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
