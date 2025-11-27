const Card = ({ quote, author }) => {
  return (
    <div className='p-4 bg-gray-900 text-white rounded-lg shadow-md'>
      <p>{quote}</p>
      <h2 className='mt-2 text-sm text-gray-300'>— {author}</h2>
    </div>
  )
}

export default Card
