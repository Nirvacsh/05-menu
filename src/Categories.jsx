const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((item) => {
        return (
          <button
            type='button'
            className='btn'
            key={item}
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
