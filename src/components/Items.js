import React from 'react'
import Item from './Item.js'

export default function Items({ onShowInfo, items, onAdd }) {
  return (
    <main>
      {items.map(el => (
        <Item onShowInfo={onShowInfo} key={el.id} item={el} onAdd={onAdd} />
      ))}
    </main>
  )
}

