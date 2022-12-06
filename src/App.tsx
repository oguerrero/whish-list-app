import { useEffect, useState } from 'react'
import { ItemType } from './Types'
import List from './List'
import Store from './Store'

export default function App() {
  const inventory = [
    {
      id: 1,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 1',
      price: '100'
    },
    {
      id: 2,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 2',
      price: '100'
    },
    {
      id: 3,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 3',
      price: '100'
    },
    {
      id: 4,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 4',
      price: '100'
    },
    {
      id: 5,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 5',
      price: '100'
    },
    {
      id: 6,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 5',
      price: '100'
    },
    {
      id: 7,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 5',
      price: '100'
    },
    {
      id: 8,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 5',
      price: '100'
    },
    {
      id: 9,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 5',
      price: '100'
    },
    {
      id: 10,
      image:
        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      name: 'placeholder 5',
      price: '100'
    }
  ]
  
  const [theme, setTheme] = useState('light')
  const [whishList, setWhishList] = useState<ItemType[]>([])
  const [page, setPage] = useState('Store')
  
  useEffect(() => {
    const initialList: ItemType[] = JSON.parse(localStorage.getItem('whishlist')!)
    console.log(initialList)
    if (initialList) setWhishList(initialList)
  }, [])
  
  
  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const handlePage = (change: String) => {
    change === 'Store' ? setPage('Whishlist') : setPage('Store')
  }

  const deleteItem = (id: number) => {
    let tempList = whishList
    const index = tempList.findIndex((item) => item.id === id)
    tempList.splice(index, 1)

    setWhishList([...tempList])
    localStorage.setItem('whishlist', JSON.stringify([...tempList]))
  }

  const addToCart = (id: number) => {
    let tempList = whishList
    const index = tempList.findIndex((item) => item.id === id)
    tempList.splice(index, 1)

    setWhishList([...tempList])
    localStorage.setItem('whishlist', JSON.stringify([...tempList]))

  }

  const addToWhishList = (id: number) => {
    let tempList = whishList
    tempList.push(inventory[id - 1])

    setWhishList([...new Map(tempList.map((v) => [v.id, v])).values()])
    localStorage.setItem('whishlist', JSON.stringify([...tempList]))

  }

  return (
    <main className={`min-h-screen ${theme}`}>
      <section className='flex flex-col items-center w-full px-8 py-4 text-black transition-all ease-in-out bg-gradient-to-b from-red-600 via-red-600 to-red-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:via-zinc-800 dark:to-black'>
        <nav className='flex flex-row gap-4 pt-2 pb-6'>
          <button
            className='px-2 py-1 text-2xl font-bold text-white group'
            onClick={() => handlePage('Whislist')}>
            Store
            {page === 'Store' ? (
              <span className='block max-w-full transition-all duration-500 h-0.5 bg-white'></span>
            ) : (
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
            )}
          </button>
          <button
            className='px-2 py-1 text-2xl font-bold text-white group'
            onClick={() => handlePage('Store')}>
            Whishlist
            {page === 'Whishlist' ? (
              <span className='block max-w-full transition-all duration-500 h-0.5 bg-white'></span>
            ) : (
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
            )}
          </button>
          <button
            onClick={() => handleTheme()}
            className='absolute w-8 h-8 text-xl font-bold rounded-full right-8'>
            {theme === 'light' ? '☀' : '🌑'}
          </button>
        </nav>
        <div>
          {page === 'Whishlist' && (
            <List
              whistList={whishList}
              addToCart={addToCart}
              deleteItem={deleteItem}
            />
          )}
          {page === 'Store' && (
            <Store
              storeList={inventory}
              addToWhishList={addToWhishList}
              addToCart={addToCart}
            />
          )}
        </div>
      </section>
    </main>
  )
}
