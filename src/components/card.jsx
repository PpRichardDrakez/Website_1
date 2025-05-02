function Card({ title, img,  description, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-sky-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-lg font-bold text-green-600">{price}</span>
      </div>
    </div>
  )
}

export default Card