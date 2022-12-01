export default function Item({
  src,
  name,
  price,
  buyLink
}: {
  src: string
  name: string
  price: string
  buyLink: string
}) {
  return (
    <div className='flex flex-row items-center justify-center gap-4 py-4'>
      <img src={src} className='w-24 h-20' />
      <p>{name}</p>
      <p>{price}</p>
      <button className='px-4 py-2 text-lg font-bold transition-all bg-green-500 shadow-sm rounded-xl hover:bg-green-800 ease-in-ou'>
        Add to cart 🛒
      </button>
      <button className='p-2 text-lg font-bold transition-all ease-in-out bg-yellow-500 shadow-sm rounded-xl hover:bg-red-600'>🗑️</button>
    </div>
  )
}
