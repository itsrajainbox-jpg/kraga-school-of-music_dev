# Kraga School of Music

A modern and responsive website built with Next.js and TypeScript for Kraga School of Music. The website showcases music courses, pricing information, contact details, and allows visitors to book a free trial session.

## Features

- Responsive Design
- Course Information Display
- Pricing Plans
- Contact Form
- Free Trial Booking Form
- Google Sheets Integration for Lead Tracking
- SEO Optimized
- Fast Performance with Next.js

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- Google Apps Script
- Google Sheets
- ESLint

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
GOOGLE_CLIENT_EMAIL
GOOGLE_PRIVATE_KEY

GOOGLE_SHEET_ID
GOOGLE_SHEET_ID_CONTACT
GOOGLE_CALENDAR_ID

SMTP_EMAIL
SMTP_PASSWORD

MANAGEMENT_EMAIL
```

## Running the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

```text
src/
├── app/
├── components/
├── hooks/
├── lib/
├── styles/

public/
├── images/
├── icons/

.env.local
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Lead Tracking

Free trial booking submissions are automatically stored in Google Sheets through Google Apps Script integration for easy lead management and follow-up.

## Developed By

Cloud Space Designs

## License

Private Repository – All Rights Reserved.