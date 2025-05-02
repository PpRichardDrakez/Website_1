import { useState } from 'react'
import Card from './Card'

const data = [
    {
      id: 1,
      title: 'Auriculares Inalámbricos',
      image: 'https://png.pngtree.com/png-vector/20230407/ourlarge/pngtree-earphones-wireless-earphones-bluetooth-earphones-transparent-png-image_6687223.png',
      description: 'Sonido envolvente con cancelación de ruido.',
      price: '$59.99',
    },
    {
      id: 2,
      title: 'Smartwatch Deportivo',
      image: 'https://tse4.mm.bing.net/th/id/OIP.rRAN-_-LES4FI3GEOsBj2AHaHa?rs=1&pid=ImgDetMain',
      description: 'Monitorea tu salud con estilo.',
      price: '$129.00',
    },
    {
      id: 3,
      title: 'Teclado Mecánico RGB',
      image: 'https://tse4.mm.bing.net/th/id/OIP.Y8Cvyt-g1EAx1uVZu7HW_QHaE8?rs=1&pid=ImgDetMain',
      description: 'Ideal para gamers y programadores.',
      price: '$89.50',
    },
  ]
  
function Main() {
  const [showCards, setShowCards] = useState(true)
    
return (
    <main className="container mx-auto p-4 flex-1">
      <button
        onClick={() => setShowCards(!showCards)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {showCards ? 'Ocultar' : 'Mostrar'} Cards
      </button>
      {showCards && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <Card
                key={item.id}
                img = {item.image}
                title={item.title}
                description={item.description}
                price={item.price}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Main
