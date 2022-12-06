import StoreItem from './StoreItem'
import { ItemType } from './Types'

export default function Store({
  storeList,
  addToWhishList,
  addToCart
}: {
  storeList: ItemType[]
  addToWhishList: Function
  addToCart: Function
}) {
  return (
    <section className='grid grid-cols-4 gap-4 px-8 py-4 mb-4 bg-white rounded-2xl opacity-95 shadow-lg'>
      {storeList.map((item) => {
        return (
          <StoreItem
            key={item.id}
            id={item.id}
            src={item.image}
            name={item.name}
            price={item.price}
            addToWhishList={addToWhishList}
            addToCart={addToCart}
          />
        )
      })}
    </section>
  )
}
