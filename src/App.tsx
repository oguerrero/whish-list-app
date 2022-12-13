import { useEffect, useState } from 'react'
import { ItemType } from './Types'
import List from './List'
import Store from './Store'
import data from './data.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Navbar'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [wishList, setWishList] = useState<ItemType[]>([])
  const [page, setPage] = useState('Store')
  
  // ! Use only for fetch data from api
  // const [data, setData] = useState(localData)
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
        <Navbar
          page={page}
          theme={theme}
          handlePage={handlePage}
          handleTheme={handleTheme}
        />
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
