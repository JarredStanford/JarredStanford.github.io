import React from 'react'
import designComponents from '../../utils/designComponents'

const OffsiteSales = () => {

    const { ButtonDiv, CustomText, MarginedButton } = designComponents()

    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <MarginedButton href='https://srl887sales.netlify.com/'>Deployed Site</MarginedButton>
                <MarginedButton href='https://github.com/JarredStanford/weeklysales'>GitHub</MarginedButton>
            </ButtonDiv>
            <CustomText>
                <p>Offsite Sales Tracker is an app that allows retail stores to track their sales that take place...well, offsite. This is currently being used in a commercial liquor store which sells items in the supermarket next door.</p>
                <p>
                    This project was built using React, semantic-ui, firebase, styled-components and momentJS.
                </p>
            </CustomText>
        </div>
    )
}

export default OffsiteSales