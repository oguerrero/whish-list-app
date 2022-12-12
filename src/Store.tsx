import StoreItem from './StoreItem'
import { ItemType } from './Types'

export default function Store({
  storeList,
  addToWishList,
  addToCart,
}: {
  storeList: ItemType[]
  addToWishList: Function
  addToCart: Function
}) {
  return (
    <section className='grid md:grid-cols-3 lg:grid-cols-5 mx-8 my-4 rounded-xl gap-4 md:w-fit'>
      {storeList.map((item) => {
        return (
          <StoreItem
            key={item.id}
            id={item.id}
            src={item.image}
            name={item.title}
            price={item.price}
            addToWishList={addToWishList}
            addToCart={addToCart}
          />
        )
      })}
    </section>
  )
}
