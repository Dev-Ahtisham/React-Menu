import React from 'react';
import "./index.css"

const Items = ({itemsList}) => {
  return (
    <div className='itemsList'>
        {itemsList.map((List) => {
            const {id, title, price, img, desc} = List;
            return(
                <div key={id} className="singleItem">
                    <img src={img} alt={title} className="itemImage"/>
                    <div>
                      <div className='itemInfo'>
                        <h3>{title}</h3>
                        <h3>${price}</h3>
                      </div>
                      <p>{desc}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Items