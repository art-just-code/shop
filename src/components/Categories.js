import React from 'react'

export default function Categories({ chooseCategory }) {
  const categories = [
    {
      key: 'all',
      name: 'Всё'
    },
    {
      key: 'supboard',
      name: 'SUP доска'
    },
    {
      key: 'paddle',
      name: 'Весло'
    }
  ]

  return (
    <div className='categories' id='catalog'>
=======
    <div className='categories' id='categories'>
>>>>>>> Stashed changes
      {categories.map(el => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
      ))}
    </div>
  )
}
