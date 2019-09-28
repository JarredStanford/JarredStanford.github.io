import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const HowTo = () => {
    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <Button href='https://labs15-allegiance.netlify.com/' style={{ width: '150px' }}>Deployed Site</Button>
                <Button href='https://github.com/labs15-allegiance' style={{ width: '150px' }}>GitHub</Button>
            </ButtonDiv>
            <HowToText>
                <p>
                    Users can post how-to articles with images and step by step
                    instructions. Users can search articles by name, author or tags.
                    Articles are easy to publish, update or delete.
            </p>
                <p>
                    This was a 4 day build week project and I was the lone front end
                    engineer. This app was built using React, Redux, Axios, Material-UI,
                    and Styled Components.
            </p>
            </HowToText>
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

const HowToText = styled.div`
width: 50%;
margin: auto;
@media (max-width: 800px) {
    width: 90%;
    margin-top: 5%;
})`

export default HowTo