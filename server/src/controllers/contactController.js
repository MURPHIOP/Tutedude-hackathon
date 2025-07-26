// controllers/contact.controller.js

import Contact from '../modals/contactModal.js';

// POST /api/contact
export const createContact = async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    // Basic validation
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newContact = new Contact({ name, email, message, subject });
    await newContact.save();

    res.status(201).json({ message: 'Your message has been received!' });
  } catch (err) {
    console.error('Contact submission error:', err.message);
    res.status(500).json({ error: 'Failed to send contact message. Please try again.' });
  }
};