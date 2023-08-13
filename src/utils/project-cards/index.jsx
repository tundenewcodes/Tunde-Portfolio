import React from 'react'
import './ProjectCards.css'
import CardContent from './components/CardContent'





export default function ProjectCards(Props) {
  return (
    <>
      <CardContent
        imgSrc={Props.imgSrc}
        cardTitle={Props.cardTitle}
        cardText={Props.cardText}
        maxHeight={Props.maxHeight}
        minHeight={Props.minHeight}
        projectName={Props.projectName}
        link={Props.link}
      />
    </>
  )
}
