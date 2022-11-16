import React from 'react'
import styled from 'styled-components'

import { HiOutlineMenu } from 'react-icons/hi'

const Navbar = () => {
    return (
        <Container>
            <a href="">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model Y</a>
                <a href="#">Model X</a>
                <a href="#">Model 3</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <MenuIcon />
            </RightMenu>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    // justify-content: center;
    align-items: center;
    padding: 0 20px;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`

const RightMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const MenuIcon = styled(HiOutlineMenu)`
    font-size: 25px;
`