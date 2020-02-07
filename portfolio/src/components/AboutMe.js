import React from 'react'
import styled from 'styled-components'

const AboutMe = () => {
    return (
        <AboutDiv >
            <ProfilePic src={'https://i.imgur.com/1YtoOO8.jpg'} alt={'Me!'} />
            <Holder>
                <p>Hi, I'm Jarred Stanford, a full stack developer specializing in React and Node. I love design and learning how to use new tools & languages. The best code is clean, effective and easy to understand.</p>

                <p>After spending the last 8 years in the retail industry, I have developed strong soft skills like management, customer service, working as part of a team and sales. I decided to finally flip the switch and make the move into the computer science world when I saw the program available at Lambda School. I love working through logic problems, turning small ideas into fully fleshed out projects and learning about the decision making behind all aspects of a web app.</p>

                <p>Outside the software world, you will probably catch me hiking, devouring advanced baseball stats, watching Jeopardy or searching the grocery aisles for strange new snacks. If you would like to know more, please feel free to get in touch!</p>
            </Holder>
        </AboutDiv>
    )
}

const AboutDiv = styled.div`
display: flex;
flex-direction: row;
margin: auto;
max-width: 800px
margin-top: 5%;
@media (max-width: 500px) {
    flex-direction: column;
    margin-top: 2%;
}`

const ProfilePic = styled.img`
width: 45%;
padding: 2%;
@media (max-width: 500px) {
    height: 250px;
    width: auto;
    margin: auto;
}
`

const Holder = styled.div`
text-align: center;
width: 50%;
margin: 0;
padding: 2%
@media (max-width: 500px) {
    width: 90%;
    margin: auto;
}`

export default AboutMe