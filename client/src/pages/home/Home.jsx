import React from 'react'
import Card from '../../components/card/Card'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

const Home = () => {
    const cardItem = [
        {
            id: 1,
            title: 'Sports PS4',
            no: 10
        },
        {
            id: 2,
            title: 'RPG PS4',
            no: 22
        },
        {
            id: 3,
            title: 'Shooting', no: 20
        },
        {
            id: 4,
            title: 'Racing', no: 32
        },
        {
            id: 5,
            title: 'Fighting',
            no: 25
        },
        {
            id: 6,
            title: 'Action',
            no: 28
        },

    ]

    return (
        <div className='home'>
            <Navbar />
            <div className="homeContainer">
                <div className="top">
                    <div className="leftTop">
                        <div><ThumbUpOutlinedIcon className="logoTop" /></div>
                        <div className="topTitle">
                            <span>Excellent Quality </span>
                            <br />
                            <span>Products </span>
                        </div>
                    </div>
                    <div className="centerTop">
                        <div ><RedeemOutlinedIcon className="logoTop" /></div>
                        <div className="topTitle">
                            <span>Delivery Date & Returnity </span>
                            <br />
                            <span>Date is FREE!! </span>
                        </div>
                    </div>
                    <div className="rightTop">
                        <div ><PaidOutlinedIcon className="logoTop" /></div>
                        <div className="topTitle">
                            <span>Pay On Delivery </span>

                        </div>
                    </div>
                </div>
                <div className="center">PS4 Games oon Rent</div>
                <div className="bottom">
                    <div className="leftBottom"></div>
                    <div className="centerBottom">
                        {
                            cardItem.map((arr) => {
                                return <Card key={arr.id}
                                    title={arr.title}
                                    no={arr.no}
                                />
                            })
                        }
                    </div>
                    <div className="rightBottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Home