import Navbar from './Navbar'

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Mi Sitio</h1>
        <Navbar />
      </div>
    </header>
  )
}

export default Header