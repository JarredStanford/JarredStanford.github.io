import React from 'react'
import designComponents from '../../utils/designComponents'

const BetterReads = () => {

    const { ButtonDiv, CustomText, MarginedButton } = designComponents()

    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <MarginedButton href='https://github.com/labs15-allegiance' >GitHub</MarginedButton>
            </ButtonDiv>
            <CustomText>
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
            </CustomText>
        </div>
    )
}

export default BetterReads