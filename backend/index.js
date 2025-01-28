const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connection_DB = require("./src/config/db");
// const upload = require('./src/middleware/upload');
// const sendEmail = require('./src/utils/email');

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// Database Connection
connection_DB();

// // Routes
// app.post('/api/send-email', (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             return res.status(400).json({ message: err });
//         }

//         const { email, subject, message } = req.body;
//         const file = req.file;

//         try {
//             await sendEmail(
//                 email,
//                 subject,
//                 message,
//                 file ? [{ path: file.path }] : []
//             );
//             res.status(200).json({ message: 'Email sent successfully' });
//         } catch (error) {
//             res.status(500).json({ message: 'Error sending email', error });
//         }
//     });
// });

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));