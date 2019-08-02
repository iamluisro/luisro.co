import React from "react"
import styled from "styled-components"

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
`

const StyledForm = styled.form`
  margin: 1.7em;
`

const StyledFormInput = styled.input`
  margin: 0 0 0.67em 0;
  padding: 0.3em;
  background: #684a83;
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 45px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  &:focus {
    background: 1px #59c3c3;
  }
`
const DivForm = styled.form`
  margin: 0 0.67em 0em 0em;
  display: grid;
`

const TextArea = styled.textarea`
  margin: 0 0 0.67em 0;
  padding: 0.3em;
  background: #684a83;
  color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  width: 100%;
  &:focus {
    background: 1px #59c3c3;
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
    <FormContainer>
      <StyledForm method="post" action="#" data-netlify="true" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <StyledFormInput
          type="text"
          name="name"
          id="name"
          placeholder="What's your name, friend?"
          required
        />
        <StyledFormInput
          type="text"
          name="email"
          id="email"
          placeholder="And your email?"
          required
        />
        <TextArea
          name="message"
          id="message"
          placeholder="How can I help? You can use this space to share a brief description of your problem."
          rows="4"
          required
        />
        <StyledFormInput type="submit" value="Send Message" />
      </StyledForm>
    </FormContainer>
  )
}
