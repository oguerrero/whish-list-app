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
    <section className='h-full min-h-screen'>
      <div className='px-8 py-4  bg-white rounded-2xl opacity-95 shadow-lg'>
        {whistList.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              src={item.image}
              name={item.name}
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
