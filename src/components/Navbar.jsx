import React, { useState } from 'react'
import styled from 'styled-components'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const cars = useSelector(selectCars)

    return (
        <Container>
            <a href="">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) =>
                    <a key={index} href="#">{car}</a>
                )}
            </Menu>
            <RightMenu>
                <RightMenuLinks>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                </RightMenuLinks>
                <MenuIcon onClick={handleNav} />
            </RightMenu>
            <BurgerNav show={nav}>
                <CloseWrapper>
                    <CLoseIcon onClick={handleNav} />
                </CloseWrapper>
                <Account>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                </Account>
                {cars && cars.map((car, index) =>
                    <a key={index} href="#">{car}</a>
                )}
                <a href="#">Existing Inventory</a>
                <a href="#">Used Inventory</a>
                <a href="#">Trade-in</a>
                <a href="#">Cyber Truck</a>
                <a href="#">Roadster</a>
                <a href="#">Semi</a>
                <a href="#">Charging Stations</a>
            </BurgerNav>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    min-height: 60px;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
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

    @media(max-width: 768px) {
        display: none;
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

const RightMenuLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const MenuIcon = styled(HiOutlineMenu)`
    font-size: 25px;
    cursor: pointer;
`

const CLoseIcon = styled(MdOutlineClose)`
    font-size: 25px;
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 300px;
    padding: 20px;
    font-weight: 600;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.35s ease-in;
    
    a {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2)
    }

    @media(max-width: 768px) {
        width: 220px;
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Account = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
    display: none;
    }

`