import { useState } from 'react'
import List from './List'

export default function App() {
  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <main className={theme}>
      <section className='flex flex-col transition-all ease-in-out items-center w-full h-screen text-black bg-zinc-200 dark:bg-zinc-900 dark:text-white py-4 px-8'>
        <nav className='flex flex-row'>
          <h1 className='text-4xl font-bold text-red-600 dark:text-rose-500'>
            Christmas Whishlist
          </h1>
          <button
            onClick={() => handleTheme()}
            className='w-8 h-8 bg-rose-500 text-white font-bold rounded-full right-8 absolute'>
            {theme === 'light' ? '☀' : '🌑'}
          </button>
        </nav>
        <List />
      </section>
    </main>
  )
}
