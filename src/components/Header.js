import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import Order from './Order'

const ShowOrders = ({ orders, onDelete }) => {

  let sum = 0;
  orders.forEach(el => sum += Number.parseFloat(el.price));

  return (
    <div>
      {orders.map(el => (
        <Order onDelete={onDelete} item={el} key={el.id} />
      ))}
      <p className='sum'>Сумма: {sum.toFixed(2)} ₽</p>
    </div>
  )
}
// new Intl.NumberFormat().format(sum) исключает ошибки при вычислении, когда слишком много нулей после точки

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>)
}

export default function Header({ orders, onDelete }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <a href='./'>
          <span className='strong'>SUP Marketplace</span>
        </a>
        <ul className='nav'>
          <a href='#catalog'>Каталог</a>
=======
          <a href='#categories'>Каталог</a>
>>>>>>> Stashed changes
          <a href='./'>О нас</a>
          <a href='./'>Контакты</a>
        </ul>

        <FaShoppingCart 
        className={`shop-cart-button ${cartOpen && 'active'}`}
        onClick={() => setCartOpen(!cartOpen)} 
        />

        {cartOpen && (
          <div className='shop-cart'>
            {orders.length > 0 ? ShowOrders({ orders, onDelete }) : showNothing()}
            <GrClose 
            className='close-icon'
            onClick={() => setCartOpen(!cartOpen)}  
            />
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
