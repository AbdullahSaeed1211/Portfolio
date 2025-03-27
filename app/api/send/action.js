'use server';

import { Resend } from 'resend';

// Initialize Resend with your API key (add RESEND_API_KEY to your .env.local file)
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Server action to send contact form emails
 * @param {Object} formData - The form data submitted by the user
 * @returns {Object} - Result of the email sending operation
 */
export async function sendContactEmail(formData) {
  try {
    const { name, email, subject, message, projectType } = formData;
    
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: 'Please fill out all required fields'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Please enter a valid email address'
      };
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@resend.abdullahsaeed.me>',
      to: ['abdullah.saeed1724@gmail.com'],
      reply_to: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType}
        
Message:
${message}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #e11d48; margin-bottom: 20px; }
    h2 { color: #4f46e5; margin-top: 30px; margin-bottom: 10px; }
    .info { margin-bottom: 30px; background-color: #f9fafb; padding: 15px; border-radius: 5px; }
    .info p { margin: 5px 0; }
    .message { background-color: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap; }
  </style>
</head>
<body>
  <h1>New Contact Form Submission</h1>
  
  <div class="info">
    <h2>Contact Information</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Project Type:</strong> ${projectType}</p>
    <p><strong>Subject:</strong> ${subject}</p>
  </div>
  
  <div class="message">
    <h2>Message</h2>
    <p>${message.replace(/\n/g, '<br>')}</p>
  </div>
</body>
</html>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return {
        success: false,
        error: 'Failed to send email. Please try again later.'
      };
    }

    return {
      success: true,
      data
    };

  } catch (error) {
    console.error('Server Error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    };
  }
} 