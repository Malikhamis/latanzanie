'use server'

// import { createTransport } from 'nodemailer'; // Not currently installed - would be used in production

export async function submitContactForm(formData: {
  name: string
  email: string
  phone: string
  destination: string
  travelDate: string
  message: string
}) {
  try {
    // In a real implementation, you would:
    // 1. Validate the form data
    // 2. Use Supabase service key to insert into database
    // 3. Send confirmation email
    // 4. Return success/failure status
    
    // For now, we'll simulate the process
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Log the data (in real implementation, you would insert into Supabase)
    console.log('Contact form submitted:', formData)
    
    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to submit form' }
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

// Function to send notification emails to the business email
async function sendNotificationEmail(data: {
  firstName?: string;
  name?: string;
  email: string;
  type: 'newsletter' | 'download';
}) {
  try {
    // In a production environment, you would configure your email service here
    // For now, we just log the notification
    // In a real implementation, you would use a service like SendGrid, Mailgun, or AWS SES
    
    // Email configuration for sending to the business email
    const businessEmail = 'info@latanzanieaucoeurdelanature.com';
    
    if (data.type === 'newsletter') {
      console.log(`Newsletter subscription notification sent for ${data.firstName} (${data.email}) to ${businessEmail}`);
      // In a real implementation, you would send an email to businessEmail with the subscription details
    } else if (data.type === 'download') {
      console.log(`Download request notification sent for ${data.name} (${data.email}) to ${businessEmail}`);
      // In a real implementation, you would send an email to businessEmail with the download request details
    }
  } catch (error) {
    console.error('Error sending notification email:', error);
  }
}