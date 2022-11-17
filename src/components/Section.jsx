import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'


const Section = ({ title, description, bkgImg, leftBtnText, rightBtnText }) => {
    return (
        <Wrap bgImage={bkgImg}>
            <Fade top>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Fade top>
                <Buttons>
                    <BtnGroup>
                        <LeftBtn>{leftBtnText}</LeftBtn>
                        {rightBtnText &&
                            <RightBtn>{rightBtnText}</RightBtn>
                        }
                    </BtnGroup>
                    <ArrowDwn src='/images/down-arrow.svg' />
                </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    // background: orange;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    
`

const BtnGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftBtn = styled.div`
    background-color: rgba(23,26,32, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 256px;
    color: white;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 10px;
    cursor: pointer;
`

const RightBtn = styled(LeftBtn)`
    background: white;
    color: black;
`

const ArrowDwn = styled.img`
    margin-bottom: 10px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`