'use server'

import { createTransport } from 'nodemailer';

export async function submitContactForm(formData: {
  name: string
  email: string
  phone: string
  destination: string
  travelDate: string
  message: string
}) {
  try {
    // Validate the form data
    if (!formData.name || !formData.email || !formData.message) {
      return { success: false, error: 'Name, email, and message are required' };
    }
    
    // Validate email format
    const emailRegex = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      return { success: false, error: 'Invalid email format' };
    }
    
    // In a real implementation, you would also:
    // 1. Use Supabase service key to insert into database
    
    // Log the data (temporary until we implement email sending)
    console.log('Contact form submitted:', formData);
    
    // Send email notification to the business email
    await sendContactEmail(formData);
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}

export async function submitNewsletterSubscription(formData: {
  firstName: string
  email: string
}) {
  try {
    // Validate the form data
    if (!formData.email || !formData.firstName) {
      return { success: false, error: 'First name and email are required' }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { success: false, error: 'Invalid email format' }
    }

    // In a real implementation, you would:
    // 1. Add to email list (Mailchimp, SendGrid, etc.)
    // 2. Store in database
    // 3. Send confirmation email
    // 4. Return success/failure status

    // For now, we'll log the subscription and simulate the process
    console.log('Newsletter subscription submitted:', formData);

    // Send email notification to the business email
    await sendNotificationEmail({
      firstName: formData.firstName,
      email: formData.email,
      type: 'newsletter'
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting newsletter subscription:', error);
    return { success: false, error: 'Failed to subscribe to newsletter' };
  }
}

export async function submitDownloadRequest(formData: {
  name: string
  email: string
}) {
  try {
    // Validate the form data
    if (!formData.email || !formData.name) {
      return { success: false, error: 'Name and email are required' }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { success: false, error: 'Invalid email format' }
    }

    // Log the download request
    console.log('Download request submitted:', formData);

    // Send email notification to the business email
    await sendNotificationEmail({
      name: formData.name,
      email: formData.email,
      type: 'download'
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting download request:', error);
    return { success: false, error: 'Failed to submit download request' };
  }
}

// Function to send contact form emails to the business email
async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
  message: string;
}) {
  try {
    const businessEmail = 'info@latanzanieaucoeurdelanature.com';
    
    // Get email credentials from environment variables
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || businessEmail,
      to: businessEmail,
      subject: `Nouvelle demande de contact de ${data.name}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.phone}</p>
        <p><strong>Destination:</strong> ${data.destination}</p>
        <p><strong>Date de voyage:</strong> ${data.travelDate}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log(`Contact form notification sent for ${data.name} (${data.email}) to ${businessEmail}`);
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
}

// Helper function to create email transporter for Zoho Mail
function createTransporter() {
  return createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ZOHO_EMAIL_USER,
      pass: process.env.ZOHO_EMAIL_APP_PASSWORD
    }
  });
}

// Function to send notification emails to the business email
async function sendNotificationEmail(data: {
  firstName?: string;
  name?: string;
  email: string;
  type: 'newsletter' | 'download';
}) {
  try {
    // Email configuration for sending to the business email
    const businessEmail = 'info@latanzanieaucoeurdelanature.com';
    
    // Get email credentials from environment variables
    const transporter = createTransporter();
    
    if (data.type === 'newsletter') {
      const mailOptions = {
        from: process.env.EMAIL_FROM || businessEmail,
        to: businessEmail,
        subject: `Nouvelle inscription à la newsletter de ${data.firstName || 'un visiteur'}`,
        html: `
          <h2>Nouvelle inscription à la newsletter</h2>
          <p><strong>Prénom:</strong> ${data.firstName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
        `
      };
      
      await transporter.sendMail(mailOptions);
      console.log(`Newsletter subscription notification sent for ${data.firstName} (${data.email}) to ${businessEmail}`);
    } else if (data.type === 'download') {
      const mailOptions = {
        from: process.env.EMAIL_FROM || businessEmail,
        to: businessEmail,
        subject: `Nouvelle demande de téléchargement de ${data.name || 'un visiteur'}`,
        html: `
          <h2>Nouvelle demande de téléchargement</h2>
          <p><strong>Nom:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
        `
      };
      
      await transporter.sendMail(mailOptions);
      console.log(`Download request notification sent for ${data.name} (${data.email}) to ${businessEmail}`);
    }
  } catch (error) {
    console.error('Error sending notification email:', error);
  }
}