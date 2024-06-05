import "../src/index.css"
import Home from '../pages/Home'

function App() {

  return (
    <div className="bg-gradient-to-r from-lime-200 to-cyan-300">
      
      <h1 className="flex justify-center p-5 mb-20 text-3xl font-bold">Countries List</h1>
    <div className="flex justify-center">
    <Home/>
    </div>
    <div className='grid justify-end hidden grid-cols-3 gap-4 card-body card-title hadow-xl card card-compact w-96 bg-base-100 card-actions btn btn-primary '>Ahmad Falah</div>
    </div>
  )
}

export default App
