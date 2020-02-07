import React from 'react'
import designComponents from '../../utils/designComponents'

const Jeopardy = () => {

    const { ButtonDiv, CustomText, MarginedButton } = designComponents()

    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <MarginedButton>Deployed Site</MarginedButton>
                <MarginedButton>GitHub</MarginedButton>
            </ButtonDiv>
            <CustomText>
                <p>Jeopardy aims to present an experience similar to actual Jeopardy by feeding random questions scraped from the j-archive.
                </p>
                <p>This project was built using React, semantic-ui and styled-components.</p>

                <p>
                    Feature Roadmap includes the ability to play full episodes, permanent score tracking, multiplayer and more.
                </p>
            </CustomText>
        </div>
    )
}

export default Jeopardy