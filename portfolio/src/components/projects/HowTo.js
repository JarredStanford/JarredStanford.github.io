import React from 'react'

import designComponents from '../../utils/designComponents'

const HowTo = () => {

    const { ButtonDiv, CustomText, MarginedButton } = designComponents()

    return (
        <div style={{ margin: 'auto' }}>
            <ButtonDiv>
                <MarginedButton href='https://labs15-allegiance.netlify.com/' >Deployed Site</MarginedButton>
                <MarginedButton href='https://github.com/labs15-allegiance' >GitHub</MarginedButton>
            </ButtonDiv>
            <CustomText>
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
            </CustomText>
        </div>
    )
}

export default HowTo