import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const DNDRNG = () => {
    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <Button href='https://labs15-allegiance.netlify.com/' style={{ width: '150px' }}>Deployed Site</Button>
                <Button href='https://github.com/labs15-allegiance' style={{ width: '150px' }}>GitHub</Button>
            </ButtonDiv>
            <DNDText>
                <p>This was a 2 day hackathon project built with a team of 3 other engineers. The app generates monsters and initiative rolls for users which they can use to streamline the more tedious parts of playing D&D.</p>
                <p>
                    I designed and implemented the game board and monster cards. I also provided QA and debugged any problems that popped up as the deadline approached.
            </p>
            </DNDText>
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

const DNDText = styled.div`
width: 50%;
margin: auto;
@media (max-width: 800px) {
    width: 90%;
    margin-top: 5%;
})`

export default DNDRNG