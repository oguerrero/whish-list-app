import { useEffect, useState } from 'react'
import { ItemType } from './Types'
import List from './List'
import Store from './Store'
import data from './data.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [wishList, setWishList] = useState<ItemType[]>([])
  const [page, setPage] = useState('Store')
  // const [data, setData] = useState(localData)

  // ? Methods for fetching and setting data from api
  // ? Disabled to avoid down times in api provider
  // const getData = async () => {
  //   const res = await fetch('https://fakestoreapi.com/products')
  //   const data = await res.json()
  //   return data
  // }

  // const loadData = async () => {
  //   setData(await getData())
  // }

  useEffect(() => {
    // loadData() // -> fetch data from api
    const initialList: ItemType[] = JSON.parse(
      localStorage.getItem('wishlist')!
    )
    if (initialList) setWishList(initialList)
  }, [])

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const handlePage = (change: String) => {
    change === 'Store' ? setPage('Wishlist') : setPage('Store')
  }

  const deleteItem = (id: number) => {
    let tempList = wishList
    const index = tempList.findIndex((item) => item.id === id)
    tempList.splice(index, 1)

    setWishList([...tempList])
    localStorage.setItem('wishlist', JSON.stringify([...tempList]))
    toast.error('Item Deleted', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  const addToCart = (id: number) => {
    let tempList = wishList
    const index = tempList.findIndex((item) => item.id === id)
    tempList.splice(index, 1)

    setWishList([...tempList])
    localStorage.setItem('wishlist', JSON.stringify([...tempList]))
    toast.info('Item Added to 🛒', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  const addToWishList = (id: number) => {
    let tempList = wishList
    tempList.push(data[id - 1])

    setWishList([...new Map(tempList.map((v) => [v.id, v])).values()])
    localStorage.setItem('wishlist', JSON.stringify([...tempList]))
    toast.success('Item Added to 🎁', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  return (
    <main className={`min-h-screen overflow-hidden ${theme}`}>
      <section className='flex flex-col items-center px-8 py-4 text-black transition-all ease-in-out bg-white dark:bg-gradient-to-b dark:bg-zinc-900'>
        <nav className='flex flex-row gap-4 pt-2 pb-6'>
          <button
            className='px-2 py-1 text-2xl font-bold text-black dark:text-white group'
            onClick={() => handlePage('Whislist')}>
            Store
            {page === 'Store' ? (
              <span className='block max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white'></span>
            ) : (
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white'></span>
            )}
          </button>
          <button
            className='px-2 py-1 text-2xl font-bold text-black dark:text-white group'
            onClick={() => handlePage('Store')}>
            Wishlist
            {page === 'Wishlist' ? (
              <span className='block max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white'></span>
            ) : (
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white'></span>
            )}
          </button>
          <button
            onClick={() => handleTheme()}
            className='absolute w-8 h-8 text-xl font-bold rounded-full right-8'>
            {theme === 'light' ? '☀' : '🌑'}
          </button>
        </nav>
        <div>
          {page === 'Wishlist' && (
            <List
              whistList={wishList}
              addToCart={addToCart}
              deleteItem={deleteItem}
            />
          )}
          {page === 'Store' && (
            <Store
              storeList={data}
              addToWishList={addToWishList}
              addToCart={addToCart}
            />
          )}
        </div>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </section>
    </main>
  )
}
