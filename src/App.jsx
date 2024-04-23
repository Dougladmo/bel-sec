import Map from './components/Map'
import ReportPopUp from './components/ReportPopUp'

function App() {
// GOOGLE MAPS API KEY - AIzaSyDrczC83Gc2EuOJDyCF8nwVwzajUHWt0dc

  return (
    <>
      <div className='relative'>
        <Map />
        <div>
          <h1 className="absolute mb-4 text-3xl font-bold text-center bg-red-500 top-60">Hello world</h1>
        </div>
        <div className='absolute top-3 right-3'>
          <ReportPopUp />
        </div>
      </div>
    </>
  )
}

export default App
