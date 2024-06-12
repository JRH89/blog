import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Retrieve email address from the request body
    const { email } = req.body;

    sgMail.setApiKey("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");

    const msg = {
      to: email, // Use the email address retrieved from the request body
      from: "hookerhillstudios@gmail.com", // Change to your email address
      subject: "Welcome to my Blog",
      html: `
        <div style="max-width: 600px; margin: 0 auto; text-align: justify; color: black;">
          Thank you for subscribing to my blog. Click the link below if you would like to unsubscribe.
        </div>
        <p>If you wish to unsubscribe from future emails, please click <a href="https://blog.hookerhillstudios.com?email=${email}">here</a>.</p>
      `,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);

      if (error.response) {
        console.error("Error response:", error.response.body);
      }

      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Invalid request method" });
  }
}
