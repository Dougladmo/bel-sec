import Map from './components/Map'
import ReportPopUp from './components/ReportPopUp'
import ReportsFeed from './components/ReportsFeed'

function App() {
// GOOGLE MAPS API KEY - AIzaSyDrczC83Gc2EuOJDyCF8nwVwzajUHWt0dc

  return (
    <>
      <div className='relative'>
        <Map />
        <div className='absolute top-0 left-0'>
          <ReportsFeed />
        </div>
        <div className='absolute top-2 right-2'>
          <ReportPopUp />
        </div>
      </div>
    </>
  )
}

export default App
