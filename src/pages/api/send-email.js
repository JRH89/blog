import sgMail from "@sendgrid/mail"

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { subject, message, email } = req.body

		if (!subject || !message || !email) {
			return res.status(400).json({ message: "Missing required fields" })
		}

		sgMail.setApiKey("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")

		const msg = {
			to: "hookerhillstudios@gmail.com",
			from: "hookerhillstudios@gmail.com",
			subject: subject,
			text: `${email}\n\n${message}`,
		}

		try {
			await sgMail.send(msg)
			res.status(200).json({ message: "Email sent successfully" })
		} catch (error) {
			console.error("Error sending email:", error)

			if (error.response) {
				console.error("Error response:", error.response.body)
			}

			res.status(500).json({ success: false, error: "Failed to send email" })
		}
	} else {
		res.status(405).json({ message: "Invalid request method" })
	}
}
