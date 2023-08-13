import styled from "styled-components";



export default function Right({ bgImage } ) {
  return (
    <BackgroundImageWrapper
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
    </BackgroundImageWrapper>
  )
}


const BackgroundImageWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-width: 100%;
  min-height: 32.5rem;
  max-width: 37.5rem;
  max-height: 32.5rem;
`