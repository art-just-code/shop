import React from 'react';
import { GrClose } from 'react-icons/gr';

export default function ShowInformation ({ onAdd, onShowInfo, item }) {
  return (
      <div className='full-item' onClick={() => onShowInfo(item)}>
        <div>
          <GrClose className='close-icon' onClick={() => onShowInfo(item)}/>
          <img src={item.img} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <b>{item.price} ₽</b>
          <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
        </div>
      </div>
    )
}

