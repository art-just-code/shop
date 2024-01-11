import React from 'react';
import { FaTrash } from 'react-icons/fa'

export default function Order ({ onDelete, item }) {
    return (
      <div className='item'>
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <b>{item.price} ₽</b>
        <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
      </div>
    )
}