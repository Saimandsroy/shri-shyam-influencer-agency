import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, brand, email, phone, service, budget, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Name, email, and message are required.' 
    });
  }

  try {
    // Log the contact request (replace with nodemailer in production)
    console.log('--- New Contact Request ---');
    console.log(`Name: ${name}`);
    console.log(`Brand: ${brand}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`Budget: ${budget}`);
    console.log(`Message: ${message}`);
    console.log('--------------------------');

    /*
    // Production: Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hello@srisyamcampaign.in',
      subject: `New Lead: ${name} from ${brand}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Brand:</strong> ${brand}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Service:</strong> ${service}</p>
             <p><strong>Budget:</strong> ${budget}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });
    */

    res.status(200).json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact error:', err.message);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

export default router;
