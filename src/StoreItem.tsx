export default function StoreItem({
  id,
  src,
  name,
  price,
  addToWishList,
  addToCart
}: {
  id: number
  src: string
  name: string
  price: string
  addToWishList: Function
  addToCart: Function
}) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-4 border-2 rounded-xl bg-slate-100 dark:text-white dark:bg-zinc-800 border-opacity-60 border-zinc-300 dark:border-zinc-800 overflow-hidden'>
      <img src={src} className='w-24 h-20' />
      <p className='block w-4/5 text-lg font-semibold text-center truncate'>
        {name}
      </p>
      <p className='text-xl font-semibold'>${price}</p>
      <div className='flex flex-row gap-2'>
        <button
          className='px-4 py-2 font-bold transition-all ease-in-out bg-green-500 shadow-sm text-md rounded-xl hover:bg-green-600'
          onClick={() => addToWishList(id)}>
          🎁
        </button>
        <button
          className='px-4 py-2 font-bold text-black transition-all ease-in-out bg-blue-500 shadow-sm text-md rounded-xl hover:bg-blue-600 dark:text-white'
          onClick={() => addToCart(id)}>
          Buy Now 🛒
        </button>
      </div>
    </div>
  )
}
