import React from "react"
import styled from "styled-components"

const DivForm = styled.form`
  margin: 0 0.67em 0em 0em;
  display: grid;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: #684a83;
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 95%;
  &:focus {
    background: 1px #59c3c3;
  }
  }
`

const TextArea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  background: #684a83;
  color: #fff;
  border: none;
  width: 95%;
  height: 5em;
  border-radius: 3px;
  &:focus {
    background: #59c3c3;
  }
`
const FormButton = styled.button`
  display: grid;
  cursor: default;
  margin: 0 0 1em 0;
  background-color: #684a83;
  justify-self: center;
  color: white;
  width: 30%;
  font-size: 0.9rem;
  padding: 0.6rem;
  font-weight: 500;
  border-radius: 24px;
`
export default function Forms() {
  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="bot-field" />
      <label>
        <input type="text" name="name" placeholder="Your Name" />
      </label>
      <label>
        <input type="email" name="email" placeholder="Your Email" />
      </label>
      <label>
        <textarea
          name="message"
          placeholder="Anything else you'd like to share?"
        ></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  )
}
