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
    <div className='flex flex-row items-center justify-center gap-4 py-4 shadow-xl rounded-xl px-4 mb-2'>
      <img src={src} className='w-24 h-20' />
      <p>{name}</p>
      <p>{price}</p>
      <button
        className='px-4 py-2 text-lg font-bold transition-all bg-blue-500 shadow-sm rounded-xl hover:bg-blue-600 ease-in-out'
        onClick={() => addToCart(id)}>
        Add to cart 🛒
      </button>
      <button
        className='p-2 text-lg font-bold transition-all ease-in-out bg-yellow-500 shadow-sm rounded-xl hover:bg-red-600'
        onClick={() => deleteItem(id)}>
        🗑️
      </button>
    </div>
  )
}
