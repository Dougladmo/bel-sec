import Map from './components/Map'
import ReportPopUp from './components/ReportPopUp'
import ReportSender from './components/ReportSender'
import ReportsFeed from './components/ReportsFeed'

function App() {
// GOOGLE MAPS API KEY - AIzaSyDrczC83Gc2EuOJDyCF8nwVwzajUHWt0dc

  return (
    <>
      <div className='relative h-screen overflow-hidden'>
        <Map />
          <ReportsFeed />
          <ReportPopUp />
          <ReportSender />
      </div>
    </>
  )
}

export default App

