import { useState } from 'react'
import Item from './Item'

export default function List() {
  const initialState = [
    {
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 1',
      price: '100',
      butLink:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
    },
    {
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 2',
      price: '100',
      butLink:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
    },
    {
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 3',
      price: '100',
      butLink:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
    }
  ]
  const [whistList, setWhistList] = useState(initialState)

  return (
    <section className='py-4'>
      {whistList.map((item) => {
        return (
          <Item
            src={item.image}
            name={item.name}
            price={item.price}
            buyLink={item.butLink}
          />
        )
      })}
    </section>
  )
}
