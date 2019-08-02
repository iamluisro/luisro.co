import React from "react"

export default function Forms() {
  return (
    <div>
      <form method="post" action="#" data-netlify="true" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="your name"
          required
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="your email"
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="your message"
          rows="4"
          required
        />
        <input type="submit" value="Send Message" />
      </form>
    </div>
  )
}
