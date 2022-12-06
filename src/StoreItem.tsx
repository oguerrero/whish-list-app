export default function StoreItem({
  id,
  src,
  name,
  price,
  addToWhishList,
  addToCart
}: {
  id: number
  src: string
  name: string
  price: string
  addToWhishList: Function
  addToCart: Function
}) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-4 shadow-xl rounded-xl px-4 mb-2'>
      <img src={src} className='w-24 h-20' />
      <p>{name}</p>
      <p>{price} $MXN</p>
      <div className='flex flex-row gap-2'>
        <button
          className='px-4 py-2 text-md font-bold transition-all  bg-green-500 shadow-sm rounded-xl hover:bg-green-600 ease-in-out'
          onClick={() => addToWhishList(id)}>
         Whislist 🎁
        </button>
        <button
          className='px-4 py-2 text-md font-bold transition-all bg-blue-500 shadow-sm rounded-xl hover:bg-blue-600 ease-in-out'
          onClick={() => addToCart(id)}>
          Buy Now 🛒
        </button>
      </div>
    </div>
  )
}
