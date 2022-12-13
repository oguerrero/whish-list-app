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
    <div className='flex flex-col items-center justify-around gap-4 px-8 py-4 mb-2 md:flex-row rounded-xl bg-slate-100 dark:text-white dark:bg-zinc-800 border-opacity-60 border-zinc-200 dark:border-zinc-800'>
      <button
        className='md:hidden relative inset-x-40 -inset-y-2'
        onClick={() => deleteItem(id)}>
        ✖
      </button>

      <img src={src} className='w-24 h-20' />
      <p className='text-center truncate md:text-ellipsis md:w-1/2'>{name}</p>
      <p className='py-2 font-semibold md:hidden'>${price}</p>
      <div className='flex flex-row justify-around gap-4'>
        <p className='hidden py-2 font-semibold md:relative '>${price}</p>
        <button
          className='px-4 py-2 text-sm font-bold text-white transition-all ease-in-out bg-blue-700 shadow-sm min-w-fit md:text-lg rounded-xl hover:bg-blue-900'
          onClick={() => addToCart(id)}>
          Buy Now 🛒
        </button>
      </div>
      <button
        className='hidden md:relative md:block inset-x-8 -inset-y-10'
        onClick={() => deleteItem(id)}>
        ✖
      </button>
    </div>
  )
}
