import React from "react"
import styled from "styled-components"

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.5);
`

const StyledForm = styled.form`
  margin: 1.25em 2.5em 1.25em 2.5em;
`

const StyledFormInput = styled.input`
  margin: 0 0 0.67em 0;
  padding: 1em;
  background: #ebebeb;
  color: #684a83;
  border: 1px solid #684a8380;
  border-radius: 3px;
  width: 100%;
  height: 45px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  &:focus {
    background: 1px #59c3c3;
  }
`

const TextArea = styled.textarea`
  margin: 0 0 0.67em 0;
  padding: 1em;
  background: #ebebeb;
  color: #684a83;
  border: 1px solid #684a8380;
  border-radius: 3px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  width: 100%;
  &:focus {
    background: 1px #59c3c3;
  }
`

const StyledFormInputButton = styled.input`
  margin: 0 0 0.67em 0;
  padding: 1em;
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
        <StyledFormInputButton type="submit" value="Send Message" />
      </StyledForm>
    </FormContainer>
  )
}
