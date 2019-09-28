import React from 'react'
import { Tabs } from 'antd'
import AboutMe from './AboutMe'
import ProjectsTabs from './ProjectsTabs'
import Footer from './Footer'

const Portfolio = () => {

    const { TabPane } = Tabs;

    return (

        <Tabs defaultActiveKey='1' type='card'>
            <TabPane tab='About Me' key='1'>
                <AboutMe />
            </TabPane>
            <TabPane tab='Projects' key='2'>
                <ProjectsTabs />
            </TabPane>
            <TabPane tab='Contact' key='3'>
                <Footer />
            </TabPane>
        </Tabs>

    )
}

export default Portfolio