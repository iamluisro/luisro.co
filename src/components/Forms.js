import React from "react"
import styled from "styled-components"

const FormContainer = styled.div`
  margin: 0;
`

const StyledForm = styled.form`
  display: grid;
  margin: 0;
`

const StyledFormInput = styled.input`
  margin: 1.5em;
`

export default function Forms() {
  return (
    <FormContainer>
      <StyledForm method="post" action="#" data-netlify="true" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <StyledFormInput
          type="text"
          name="name"
          id="name"
          placeholder="your name"
          required
        />
        <StyledFormInput
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
        <StyledFormInput type="submit" value="Send Message" />
      </StyledForm>
    </FormContainer>
  )
}
