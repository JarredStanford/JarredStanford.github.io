import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const BetterReads = () => {
    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <Button href='https://github.com/labs15-allegiance' style={{ width: '150px' }}>GitHub</Button>
            </ButtonDiv>
            <BetterText>
                <p>
                    Users search for books and we return recommendations using machine learning. My main contribution to this project was the back end Node server that connects the Flask API and the front end to provide recommendations. My server was also used for authentication, user profile info and user saved book
        lists.
            </p>
                <p>
                    This app was a 4 day build week project. I was the lone back end
                    engineer. I used Node.JS, Express, Jest for testing,
                    JSON webtokens for authorization and bcryptJS for password
                    encryption. The server is hosted using a PostgreSQL database hosted
                    on Heroku.
            </p>
                <p>Sadly, the data science API is no longer hosted so the main function of the app no longer works.</p>
            </BetterText>
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

const BetterText = styled.div`
width: 50%;
margin: auto;
@media (max-width: 800px) {
    width: 90%;
    margin-top: 5%;
})`

export default BetterReads