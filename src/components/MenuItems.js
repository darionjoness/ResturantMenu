import React from 'react'
import MenuItem from './MenuItem'

const MenuItems = ({ items }) => {
  return (
    <div className='menuItems container'>
        {items.map(item => <MenuItem key={item.id} item={item} />)}
    </div>
  )
}

export default MenuItems