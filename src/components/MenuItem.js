import React from 'react'

const MenuItem = ({ item }) => {
  return (
    <div className='menuItem'>
        <div className="menuItemImg">
            <img src={item.img} alt="" />
        </div>
        <div className="menuText">
            <div className="titleAndPrice">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
            </div>
            <p>{item.desc}</p>
        </div>
    </div>
  )
}

export default MenuItem