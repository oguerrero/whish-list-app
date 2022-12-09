export default function Item({
  id,
  src,
  name,
  price,
  addToCart,
  deleteItem
}: {
  id: number
  src: string
  name: string
  price: string
  addToCart: Function
  deleteItem: Function
}) {
  return (
    <div className='flex flex-row items-center justify-between gap-4 px-8 py-4 mb-1 dark:text-white dark:bg-zinc-800 border-opacity-60 border-zinc-200 dark:border-zinc-800'>
      <img src={src} className='w-24 h-20' />
      <p className="md:text-ellipsis w-1/4  md:w-max">{name}</p>
      <div className='flex flex-row gap-4 w-2/4 md:w-max'>
        <p className="py-2 font-semibold">${price}</p>
        <button
          className='px-4 py-2 text-sm md:text-lg font-bold transition-all ease-in-out bg-blue-500 shadow-sm rounded-xl hover:bg-blue-600'
          onClick={() => addToCart(id)}>
          Buy Now 🛒
        </button>
        <button
          className='p-2 text-sm md:text-lg font-bold transition-all ease-in-out bg-red-500 shadow-sm rounded-xl hover:bg-red-600'
          onClick={() => deleteItem(id)}>
          🗑️
        </button>
      </div>
    </div>
  )
}
