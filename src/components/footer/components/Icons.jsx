import React from "react"
import styled from "styled-components";



const Icons = ({ Icon, link }) => {
  return (
    <a target="_blank" href={link} rel="noreferrer noopener" hrefLang="en-us">
      <IconWrapper>
        <Icon
          style={{
            background: "transparent",
            height: "20px",
            width: "20px",
            color: "white",
            cursor: "pointer",
          }}
        />
      </IconWrapper>
    </a>
  );
};

export default Icons;

const IconWrapper = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 8px 0px 0px;
`;
