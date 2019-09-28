import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const Allegiance = () => {
    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <Button href='https://labs15-allegiance.netlify.com/' style={{ width: '150px' }}>Deployed Site</Button>
                <Button href='https://github.com/labs15-allegiance' style={{ width: '150px' }}>GitHub</Button>
            </ButtonDiv>
            <AllegianceText>
                <p>Designed for Mobile Use. Progressive Web App.</p>
                <p>Social media project bringing local fans together via their favorite sports teams. This project was built using React, Redux, Node, Express and PostgreSQL over 8 weeks with a team of 3 other web developers. </p>
                <p>My contributions include technical research, most of the front end components, reusable custom hooks, design elements and PWA optimization. Back end contributions include adding compression to optimize network calls, designing the database and assisting with the construction of many of the end points.</p>
            </AllegianceText>
        </div>
    )
}

const ButtonDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2%;
@media (max-width: 800px) {
    margin-top: 4%;
}
`

const AllegianceText = styled.div`
width: 50%;
margin: auto;
@media (max-width: 800px) {
    width: 90%;
    margin-top: 5%;
})`

export default Allegiance