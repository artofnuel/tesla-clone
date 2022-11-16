import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                bkgImg='model-s.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                bkgImg='model-y.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                bkgImg='model-x.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                bkgImg='model-3.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money back guarantee'
                bkgImg='solar-panel.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                bkgImg='solar-roof.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
            <Section
                title='Accessories'
                bkgImg='accessories.jpg'
                leftBtnText='Shop now'
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`