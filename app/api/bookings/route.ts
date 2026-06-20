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

const TEACHER_TIMEZONE = "Asia/Kolkata";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      age,
      gender,
      instrument,

      email,
      phone,
      country,
      message,

      bookingUTC,
      studentTimezone,
      teacherTimezone,
      studentDateTime,
      teacherDateTime,
    } = body;

    // const fullName = `${firstName} ${lastName}`;

    const start = new Date(bookingUTC);

    const end = new Date(start.getTime() + 30 * 60000);

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,

      range: "Sheet1!A:N",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            fullName,
            age,
            gender,
            instrument,

            email,
            phone,

            studentDateTime,
            studentTimezone,

            teacherDateTime,
            teacherTimezone,

            bookingUTC,

            message,
          ],
        ],
      },
    });

    const calendar = google.calendar({
      version: "v3",
      auth,
    });

    const event = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,

      requestBody: {
        summary: "Kraga Music Trial Class",

        description: `
Student: ${fullName}
Age: ${age}
Gender: ${gender}
Instrument: ${instrument}

Email: ${email}
Phone: ${phone}
Country: ${country}

Student Time:
${studentDateTime}

Your Time:
${teacherDateTime}
    `,

        start: {
          dateTime: start.toISOString(),
          timeZone: teacherTimezone,
        },

        end: {
          dateTime: end.toISOString(),
          timeZone: teacherTimezone,
        },

        conferenceData: {
          createRequest: {
            requestId: `${Date.now()}`,
          },
        },
      },

      conferenceDataVersion: 1,
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

      subject: "Booking Confirmation - Kraga Music",

      html: `
      <div
  style="
    font-family: Arial, sans-serif;
    padding: 40px 20px;
  "
>
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
        🎹 Booking Confirmed
      </h1>

      <p
        style="
          margin-top: 10px;
          color: #1f1f1f;
          font-size: 16px;
        "
      >
        Your music class has been booked successfully
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 30px; color: black;">
      <p style="font-size: 17px;">
        Hello <strong style="color: #facc15;">${fullName}</strong>,
      </p>

      <p style="color: #1a1a1a; line-height: 1.7;">
        Thank you for booking your session. Below are your booking details.
      </p>

      <!-- Student Details -->
      <div
        style="
          border: 1px solid #facc15;
          border-radius: 14px;
          padding: 20px;
          margin-top: 25px;
        "
      >
        <h3 style="margin-top: 0; color: #facc15;">
          Student Details
        </h3>

        <p><strong>Age:</strong> ${age}</p>

        <p><strong>Gender:</strong> ${gender}</p>

        <p><strong>Instrument:</strong> ${instrument}</p>
      </div>

      <!-- Student Time -->
      <div
        style="
          border-left: 5px solid #facc15;
          border-radius: 14px;
          padding: 20px;
          margin-top: 20px;
        "
      >
        <h3 style="margin-top: 0; color: #facc15;">
          Your Time
        </h3>

        <p>${studentDateTime}</p>

        <p style="color: #9ca3af;">
          Timezone: ${studentTimezone}
        </p>
      </div>

      <!-- Teacher Time -->
      <div
        style="
          border-left: 5px solid #eab308;
          border-radius: 14px;
          padding: 20px;
          margin-top: 20px;
        "
      >
        <h3 style="margin-top: 0; color: #facc15;">
          Teacher Time
        </h3>

        <p>${teacherDateTime}</p>

        <p style="color: #9ca3af;">
          Timezone: ${teacherTimezone}
        </p>
      </div>

      <!-- Footer -->
      <footer style="
  color:black;
  padding:20px 10px;
  text-align:center;
  font-family:Arial, sans-serif;
">
  <p style="margin:0; font-size:14px;">
   © ${new Date().getFullYear()} All Rights Reserved
  </p>

  <p style="margin:8px 0 0; font-size:14px; color:#bbb;">
    Designed & Developed by 
    <a  style="
              color:#f5c542;
              font-weight:bold;
              text-decoration:none;
            " href="https://cloudspacedesign.com/"
             >CloudSpaceDesign</a>
  </p>
</footer>
    </div>
  </div>
</div>
      `,
    });

    await transporter.sendMail({
      from: `"Free Trail Booking" <${process.env.SMTP_EMAIL}>`,

      to: process.env.MANAGEMENT_EMAIL,

      subject: "New Free Trial Booking",

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
        🎹 New Trial Booking
      </h1>

      <p
        style="
          margin-top: 15px;
          font-size: 20px;
          color: #111;
        "
      >
        A new music class trial has been booked
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
        Below are the booking details submitted by the student.
      </p>

      <!-- Student Details -->
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
          Student Details
        </h2>

        <p style="font-size:18px; color:#111;">
          <strong style="color:#f5c542;">Name:</strong> ${fullName}
        </p>

        <p style="font-size:18px; color:#111;">
          <strong style="color:#f5c542;">Age:</strong> ${age}
        </p>

        <p style="font-size:18px; color:#111;">
          <strong style="color:#f5c542;">Gender:</strong> ${gender}
        </p>

        <p style="font-size:18px; color:#111;">
          <strong style="color:#f5c542;">Instrument:</strong> ${instrument}
        </p>

        <p style="font-size:18px; color:#111;">
          <strong style="color:#f5c542;">Email:</strong> ${email}
        </p>

        <p style="font-size:18px; color:#111;">
          <strong style="color:#f5c542;">Phone:</strong> ${phone}
        </p>
      </div>

      <!-- Student Time -->
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
          Student Time
        </h2>

        <p style="font-size:18px; color:#111;">
          ${studentDateTime}
        </p>

        <p style="font-size:17px; color:#8b93a5;">
          Timezone: ${studentTimezone}
        </p>
      </div>

      <!-- Teacher Time -->
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
          Your Time
        </h2>

        <p style="font-size:18px; color:#111;">
          ${teacherDateTime}
        </p>

        <p style="font-size:17px; color:#8b93a5;">
          Timezone: ${teacherTimezone}
        </p>
      </div>

      <!-- UTC -->
      <div style="margin-top:35px;">
        <p style="font-size:18px; color:#111;">
          <strong style="color:#f5c542;">UTC:</strong>
          ${bookingUTC}
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
            " href="https://cloudspacedesign.com/"
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

      meetLink: event.data.hangoutLink,
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
