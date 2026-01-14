const nodemailer = require('nodemailer');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Enable CORS
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email } = data;

    if (!name || !email) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Enable CORS
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: 'Name and email are required' })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Enable CORS
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    // Check if required environment variables are set
    const hasEmailConfig = process.env.ZOHO_EMAIL_USER && process.env.ZOHO_EMAIL_APP_PASSWORD;
    
    if (!hasEmailConfig) {
      console.warn('Email configuration missing - download request data will be logged but not sent via email');
    }
    
    if (hasEmailConfig) {
      // Set up transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.ZOHO_EMAIL_USER,
          pass: process.env.ZOHO_EMAIL_APP_PASSWORD
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_FROM || process.env.ZOHO_EMAIL_USER,
        to: process.env.ZOHO_EMAIL_USER,
        subject: `Nouvelle demande de téléchargement: ${name}`,
        html: `
          <h2>Nouvelle demande de téléchargement</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('Download request email sent successfully');
    } else {
      // Log download request data when email config is not available
      console.log('Download request received (email config unavailable):', { name, email });
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Enable CORS
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Error submitting download request:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Enable CORS
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Failed to submit download request' })
    };
  }
};
