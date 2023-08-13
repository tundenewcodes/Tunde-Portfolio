import React from "react";
import styled from "styled-components";
import { useExport } from "../../hooks/useExport";


const Wrapper = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 auto;
`;

const Div = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 29px;
  text-align: center;
  color: #e7e7e7;
  margin: 1rem auto;
`;

export default function ContactSuccess() {
  const { thumbsUp } = useExport();

  return (
    <>
      <Wrapper>
        <Div>
          <img src={thumbsUp} alt="Thumbs up icon" />
        </Div>

        <Div>
          Thank you for connecting with me! Your inquiry is very important to me, and
          i'll be in touch with you shortly. I am excited to explore the
          possibilities together!
        </Div>
      </Wrapper>
    </>
  );
}
