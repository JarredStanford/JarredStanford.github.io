import React from 'react'
import designComponents from '../../utils/designComponents'

const Allegiance = () => {

    const { ButtonDiv, CustomText, MarginedButton } = designComponents()

    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <MarginedButton href='https://labs15-allegiance.netlify.com/'>Deployed Site</MarginedButton>
                <MarginedButton href='https://github.com/labs15-allegiance' >GitHub</MarginedButton>
            </ButtonDiv>
            <CustomText>
                <p>Designed for Mobile Use. Progressive Web App.</p>
                <p>Social media project bringing local fans together via their favorite sports teams. This project was built using React, Redux, Node, Express and PostgreSQL over 8 weeks with a team of 3 other web developers. </p>
                <p>My contributions include technical research, most of the front end components, reusable custom hooks, design elements and PWA optimization. Back end contributions include adding compression to optimize network calls, designing the database and assisting with the construction of many of the end points.</p>
            </CustomText>
        </div>
    )
}

export default Allegiance