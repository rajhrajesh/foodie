import React from 'react'
import { menu_list } from '../../assets/assets'
import './index.css'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Dive into a variety of mouth-watering dishes that cater to all tastes.
        From sizzling appetizers to delightful desserts, we’ve crafted something for everyone.
        Enjoy a culinary journey that is as delicious as it is memorable!
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=> setCategory(prev=> prev===item.menu_name? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name? "active" : ""} src={item.menu_image} alt=''/>
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu