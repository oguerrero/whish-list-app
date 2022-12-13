import Item from './Item'
import { ItemType } from './Types'

export default function List({
  whistList,
  addToCart,
  deleteItem
}: {
  whistList: ItemType[]
  addToCart: Function
  deleteItem: Function
}) {
  return (
    <section className='h-full min-h-screen overflow-hidden'>
      <div className='mx-8 my-4 p-2'>
        {whistList.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              src={item.image}
              name={item.title}
              price={item.price}
              addToCart={addToCart}
              deleteItem={deleteItem}
            />
          )
        })}
      </div>
    </section>
  )
}
