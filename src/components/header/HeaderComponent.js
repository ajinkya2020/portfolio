import { React, useState} from 'react'
import { Link } from "react-router-dom";
import './HeaderComponent.css'

const listItems = [
  { title: "Home", route: '/'},
  { title: "Projects", route: 'projects'},
  { title: "Contact", route: 'contact'},
];

function HeaderComponent() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='header-main flex justify-between px-20 py-3 sticky top-0 z-10'>
      <span className='text-3xl'>AJ<span className='font-bold text-yellow-600'>.</span></span>
      <nav>
        <ul className='flex item-list text-l py-2 text-gray-500'>
          {listItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
            >
              <Link className={index === activeItem ? 'active px-2' : 'px-2 list-item'} to={item.route}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default HeaderComponent