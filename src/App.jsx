import Map from './components/Map'

function App() {
// GOOGLE MAPS API KEY - AIzaSyDrczC83Gc2EuOJDyCF8nwVwzajUHWt0dc

  return (
    <>
      <div className='relative'>
        <Map />
        <div>
          <h1 className="absolute mb-4 text-3xl font-bold text-center bg-red-500 top-60">Find your place</h1>
        </div>
      </div>
    </>
  )
}

export default App
