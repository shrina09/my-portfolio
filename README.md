# Shrina Patel Portfolio

Personal portfolio website for Shrina Patel, built with Next.js and Tailwind CSS. The site presents my software engineering background, project work, technical skills, work experience, resume, and a contact form.

## Live Site

[https://shrinapatel.netlify.app](https://shrina-patel.netlify.app/)


## Tech Stack

- Next.js
- React
- Tailwind CSS
- JavaScript
- Nodemailer
- React Icons
- Lucide React
- Netlify

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

Create a `.env.local` file for local development:

```env
CONTACT_TO_EMAIL=your_email@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=SMPT_PORT
SMTP_SECURE=true
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password
```

For Gmail, `SMTP_PASS` should be a Gmail App Password, not the regular account password.

## Available Scripts

```bash
npm run dev
```

## Deployment

The site is deployed on Netlify from GitHub.

Recommended Netlify settings:

```text
Build command: npm run build
Publish directory: .next
```

Add the same contact form environment variables in Netlify under:

```text
Project configuration -> Environment variables
```


Keep `SMTP_PASS` protected and never commit it to the repository.
