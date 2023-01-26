import React, {useState} from 'react'
// import useMenuCart from '../hooks/useMenuCart'
//Assets
import '../assets/css/Menu.css';
//Components
import {MenuItem} from './MenuItem'
import {MenuList} from './MenuList'

export const Menu = () => {
  const [categorySel, setcategorySel] = useState(MenuList[0].category);
  const CategoryList = [...new Set(MenuList.map(Item => Item.category))];
  return (
    <div className='container Menu'>
        <h1>Menu</h1>
        <div className='Menu-Filter'>
          <ul>
            {
              CategoryList.map((Cat, id) => 
              <li key={id} onClick={() => setcategorySel(Cat)} className={categorySel === Cat ? 'selected' : undefined}
              style={{ "--id-menu": id }} >
                <button>{Cat}</button>
              </li>)
            }
          </ul>
        </div>
        <div className='Menu-List'>
          {
            MenuList.filter(MItem => MItem.category === categorySel).map((MItem, i) => 
              (<div key={i} className='MenuItem' style={{ "--id-Item": i }}>
                <MenuItem item={MItem}/>
              </div>))
          }
        </div>
    </div>
  )
}
