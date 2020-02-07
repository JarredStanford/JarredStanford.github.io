import React from 'react'

import designComponents from '../../utils/designComponents'

const DNDRNG = () => {
    const { ButtonDiv, CustomText, MarginedButton } = designComponents()

    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <MarginedButton href='https://labs15-allegiance.netlify.com/'>Deployed Site</MarginedButton>
                <MarginedButton href='https://github.com/labs15-allegiance' >GitHub</MarginedButton>
            </ButtonDiv>
            <CustomText>
                <p>This was a 2 day hackathon project built with a team of 3 other engineers. The app generates monsters and initiative rolls for users which they can use to streamline the more tedious parts of playing D&D.</p>
                <p>
                    I designed and implemented the game board and monster cards. I also provided QA and debugged any problems that popped up as the deadline approached.
            </p>
            </CustomText>
        </div>
    )
}

export default DNDRNG