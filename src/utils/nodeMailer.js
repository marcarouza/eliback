require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configuration du transporteur avec les variables d'environnement
// const transporter = nodemailer.createTransport({
// 	host: process.env.EMAIL_HOST,
// 	port: process.env.EMAIL_PORT,
// 	auth: {
// 		user: process.env.EMAIL_USER,
// 		pass: process.env.EMAIL_PASS,
// 	},
// });

const transporter = nodemailer.createTransport({
	host: 'eliazoura.fr',
	port: 465,
	secure: true,

	user: 'site@eliazoura.fr',
	pass: 'YachaR#398@',

	// auth: {
	// 	user: 'site@eliazoura.fr',
	// 	pass: 'YachaR#398@',
	// },
});

console.log('🚀 ~ transporter:', transporter);

// Route POST pour le formulaire de contact
router.post('/contactForm', (req, res) => {
	const {firstname, lastname, email, code, mobile, subject, message} =
		req.body || undefined;
	console.log('🚀 ~ router.post ~ message:', message);
	console.log('🚀 ~ router.post ~ subject:', subject);
	console.log('🚀 ~ router.post ~ mobile:', mobile);
	console.log('🚀 ~ router.post ~ code:', code);
	console.log('🚀 ~ router.post ~ email:', email);
	console.log('🚀 ~ router.post ~ lastname:', lastname);
	console.log('🚀 ~ router.post ~ firstname:', firstname);

	// Options de l'email
	// const mailOptions = {
	// 	from: email,
	// 	to: 'site@eliazoura.fr',
	// 	code: code,
	// 	mobile: mobile,
	// 	subject: subject,
	// 	message: message,
	// 	text: `Nom: ${lastname}\nPrénom: ${firstname}\nCode: ${code}\nMobile: ${mobile}\n\nMessage:\n${message}`,
	// };

	// Envoi de l'email avec le transporteur configuré
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.status(500).send(error.toString());
		}
		res.status(200).send('Email sent: ' + info.response);
	});
});
console.log('🚀 ~ router.post ~ req.body:', req.body);

// Fonction asynchrone pour envoyer un email (exemple supplémentaire)
const sendmailOne = async (mailOptions) => {
	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent: ' + info.response);
	} catch (error) {
		console.error('Error sending email:', error);
	}
};

sendmailOne();

module.exports = router;
