const Button = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
