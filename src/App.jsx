import Map from './components/Map'
import MobileNav from './components/MobileNav'
import Navbar from './components/Navbar'
import ReportPopUp from './components/ReportPopUp'
import ReportsFeed from './components/ReportsFeed'

function App() {
// GOOGLE MAPS API KEY - AIzaSyDrczC83Gc2EuOJDyCF8nwVwzajUHWt0dc

  return (
    <>
      <div className='relative h-screen overflow-hidden'>
        <Map />
          <Navbar />
          <ReportsFeed />
          <ReportPopUp />
        <MobileNav />
      </div>
    </>
  )
}

export default App
