import { useState } from 'react'
import List from './List'

export default function App() {
  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <main className={theme}>
      <section className='flex flex-col items-center w-full h-screen px-8 py-4 text-white transition-all ease-in-out bg-gradient-to-b from-red-600 via-red-600 to-red-800 dark:bg-gradient-to-b dark:from-red-700 dark:via-red-700 dark:to-red-900'>
        <nav className='flex flex-row'>
          <h1 className='text-4xl font-bold'>Christmas Whishlist</h1>
          <button
            onClick={() => handleTheme()}
            className='absolute w-8 h-8 text-xl font-bold rounded-full right-8'>
            {theme === 'light' ? '☀' : '🌑'}
          </button>
        </nav>
        <List />
      </section>
    </main>
  )
}
