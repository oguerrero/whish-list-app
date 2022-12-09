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
    <section className='grid md:grid-cols-3 lg:grid-cols-5 mx-8 my-4 rounded-xl gap-4'>
      {storeList.map((item) => {
        return (
          <StoreItem
            key={item.id}
            id={item.id}
            src={item.image}
            name={item.title}
            price={item.price}
            addToWhishList={addToWhishList}
            addToCart={addToCart}
          />
        )
      })}
    </section>
  )
}
