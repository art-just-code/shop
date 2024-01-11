import React from 'react'

export default function Item({ onShowInfo, item, onAdd }) {
  return (
    <div className='item'>
      <img src={item.img} onClick={() => onShowInfo(item)} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      { item.balance <= 0 ? (
        <b>Временно нет на складе</b>
      ) : (
        <b>{item.price} ₽</b>
      )}
      <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
    </div>
  )
}