import styled from 'styled-components'
import { Button } from 'antd'

const designComponents = () => {

    const ButtonDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2%;
        @media (max-width: 800px) {
            margin-top: 4%;
        }`

    const CustomText = styled.div`
    width: 50%;
    margin: auto;
    @media (max-width: 800px) {
        width: 90%;
        margin-top: 5%;
    })`

    const MarginedButton = styled(Button)`
    margin: 2%;
    width: 150px;`

    return {
        ButtonDiv,
        CustomText,
        MarginedButton
    }
}

export default designComponents


