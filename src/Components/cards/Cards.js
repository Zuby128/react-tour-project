import React from 'react'
import { data } from '../../helpers/data'
import './Cards.css'

const Cards = () => {
    return (
        <div className="card-container">
            {
                data.map(item => {
                    return (
                        <div className="cards" key={item.id}>
                            <div className="title">
                                <h2>{item.title}</h2>
                            </div>
                            <img src={item.image} alt={item.title}/>
                            <div className="card-over">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards