import React from 'react'
import './card.scss'
const Card = (props) => {

    // const link = "https://ik.imagekit.io/faskf16pg/sub_category/rpg_pTSAiihUU.png?ik-sdk-version=javascript-1.4.3&updatedAt=16"
    return (
        <div className='card' >

            <div className="textCard">

                <div className="titleCard"><span>{props.title}</span>
                    <br />
                    <span>Games</span>
                </div>
                <div className="button">{props.no}+ Products</div>
            </div>

        </div>
    )
}

export default Card