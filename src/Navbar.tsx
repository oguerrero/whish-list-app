export default function Navbar({
  page,
  theme,
  handlePage,
  handleTheme
}: {
  page: string
  theme: string
  handlePage: Function
  handleTheme: Function
}) {
  return (
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
  )
}
