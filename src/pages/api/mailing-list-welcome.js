
// Import necessary modules
const sgMail = require('@sendgrid/mail')


// Set your SendGrid API key
sgMail.setApiKey("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")

// Function to send the email to multiple recipients
const sendEmails = async (recipient) => {
    try {
        // Send the email using SendGrid
        const msg = {
            to: recipient,
            from: 'hookerhillstudios@gmail.com',
            subject: 'Welcome to my Blog',
            html: `<div style="max-width: 600px; margin: 0 auto; text-align: justify; color: black;">
           Thank you for subscribing to my blog. Click the link below if you would like to unsibscribe.
         </div>
    <p>If you wish to unsubscribe from future emails, please click <a href="https://blog.hookerhillstudios.com?email=${recipient}">here</a>.</p>
</div>`,
        }
        await sgMail.send(msg)
        console.log(`Emails sent to ${recipient} recipients`)
    } catch (error) {
        console.error('Error sending email:', error)
    }
}

// Export the API route handler function
export default async function handler(req, res) {
    try {
        // Retrieve the list of recipients from the request body
        const { recipients } = req.body

        // Loop through the recipients and send an email to each one
        for (const recipient of recipients) {
            await sendEmails(recipient)
        }

        // Respond with a success message
        res.status(200).json({ message: 'Emails sent successfully' })
    } catch (error) {
        console.error('Error sending emails:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
