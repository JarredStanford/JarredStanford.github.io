import React from 'react'

import { Tabs } from 'antd'
import styled from 'styled-components'

import Allegiance from './projects/Allegiance'
import BetterReads from './projects/BetterReads'
import DNDRNG from './projects/DNDRNG'
import HowTo from './projects/HowTo'
import OffsiteSales from './projects/OffsiteSales'
import Jeopardy from './projects/Jeopardy'

const ProjectsTabs = () => {

    const { TabPane } = Tabs;

    return (
        <ProjectHolder defaultActiveKey='1' >
            <TabPane tab='Jeopardy' key='1'>
                <Project>
                    <Jeopardy />
                </Project>
            </TabPane>
            <TabPane tab='Offsite Sales' key='2'>
                <Project>
                    <OffsiteSales />
                </Project>
            </TabPane>
            <TabPane tab='Allegiance' key='3'>
                <Project>
                    <ProjectImage src={'https://i.imgur.com/jf92vhY.png'} alt='Allegiance' />
                    <Allegiance />
                </Project>
            </TabPane>
            <TabPane tab='How To' key='4'>
                <Project>
                    <ProjectImage src={'https://i.imgur.com/XYRHF3K.png'} alt='How To' />
                    <HowTo />
                </Project>
            </TabPane>
            <TabPane tab='DND Random Encounter Generator' key='5'>
                <Project>
                    <ProjectImage src={'https://i.imgur.com/5DLZEXG.png'} alt='DND RNG' />
                    <DNDRNG />
                </Project>
            </TabPane>
            <TabPane tab='Better Reads' key='6'>
                <Project>
                    <BetterReads />
                </Project>
            </TabPane>
        </ProjectHolder>
    )
}

const ProjectImage = styled.img`
height: 50vh;
object-fit: contain;
`

const Project = styled.div`
display: flex;
flex-direction: row;
margin-left: 15%;
@media (max-width: 800px) {
    flex-direction: column;
    margin-left: 0
}`

const ProjectHolder = styled(Tabs)`
        display: flex;
        justify-content: center;
        flex-direction: column;
`

export default ProjectsTabs