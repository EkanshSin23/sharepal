import React from 'react'
import './navbar.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ElderlyWomanOutlinedIcon from '@mui/icons-material/ElderlyWomanOutlined';
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">

                    <span className="logo">🔍</span>
                    <h1 className='logoTitle'>SharePal</h1>
                </div>
                <div className="center">
                    <span className='filter'>
                        <span className='banglore'>Banglore</span>
                        <span><KeyboardArrowDownOutlinedIcon className='banglorelogo' /></span>
                    </span>
                    <div className="tag">
                        <span className="tags">
                            <span className="logo"><ElderlyWomanOutlinedIcon /></span>
                            <span className="text">Trekking</span>
                        </span>
                        <span className="tags">
                            <span className="logo"><TwoWheelerOutlinedIcon /></span>
                            <span className="text">Riding</span>
                        </span>
                        <span className="tags">
                            <span className="logo"><VideoCameraFrontOutlinedIcon /></span>
                            <span className="text">GoPro</span>
                        </span>
                        <span className="tags">
                            <span className="logo"><CameraAltOutlinedIcon /></span>
                            <span className="text">DSLR</span>
                        </span>
                        <span className="tags">
                            <span className="logo"><SportsEsportsOutlinedIcon /></span>
                            <span className="text">PS4/Xbox</span>
                        </span>
                        <span className="tags">
                            <span className="logo"><GamesOutlinedIcon /></span>
                            <span className="text">Games</span>
                        </span>
                    </div>

                    <span className='cart'><ShoppingCartOutlinedIcon /></span>
                </div>
                <div className="right">
                    <div className="button">
                        LOGIN/SIGNUP
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar