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
    <div className='flex flex-row py-4 gap-4 justify-center items-center'>
      <img
        src={src}
        className='w-24 h-20'
      />
      <p>{name}</p>
      <p>{price}</p>
      <a href={buyLink}>Comprar</a>
      <button>Borrar</button>
    </div>
  )
}
