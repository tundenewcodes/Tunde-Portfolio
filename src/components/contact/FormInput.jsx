import React from 'react'
import styled from 'styled-components'

import { Colors } from "../../utils/colors/colors";




const {
  whiteColor
} = Colors();


export default function FormInput(props) {




  return (
    <>
      <FormInputWrapper
        data-aos="fade-up"
        data-aos-once="true"
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        style={{
          ...props.style,
        }}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        
      />

    </>
  )
}


const FormInputWrapper = styled.input`
  border: 0;
  margin: 0 auto 1rem;
  border-bottom: 1px solid #e9e9ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  padding-bottom: 0,
  gap: 10px;
  width: 96%;
  height: 49px;
  min-width: fit-content;
  background-color: transparent;
  color: ${whiteColor};


  ::placeholder {
    color: #e9e9ed;
    font-weight: 500;
  }
`