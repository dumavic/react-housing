import './contact.css'

function Contact() {
    return(
        <div>
            <section id="contact-container">
<section class="info-section">
  <h2>Contact Us</h2>
  <p>Need help? Send us a message!</p>
    <form
      id="contact-form"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input
        type="hidden"
        name="access_key"
        value="d733a534-4e43-4af7-809c-8f56d882327d"
      />

      <p>
        <label for="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="name"
          name="name"
          required
        />
      </p>
      <p>
        <label for="email">Email:</label>
        <input id="email" placeholder="email" type="email" name="email" required />
      </p>
      <p>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </p>
      <input
        type="hidden"
        name="redirect"
        value="https://web3forms.com/success"
      />
      <input
        type="hidden"
        name="subject"
        value="Contact from Victors Website"
      />
      <input type="hidden" name="from_name" value="My Website" />

      <p>
        <button type="submit" id="log">Submit Form</button>
      </p>

      <p id="result"></p>
    </form>
</section>

</section>

        </div>
    )
}

export default Contact;