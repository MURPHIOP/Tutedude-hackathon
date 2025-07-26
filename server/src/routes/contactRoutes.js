import express from 'express';
import { createContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contact', createContact); // POST /api/contact

export default router;