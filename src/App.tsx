import DashboardHome from './features/dashboard-home';
import BodyLinkContent from './features/dashboard-link';
import DashboardFooter from './features/dashboard-footer';

function App() {
  return (
    <main>
      <DashboardHome />
      <BodyLinkContent />
      {/* <div style={{backgroundColor: "white", height: "100vh"}}>

      </div> */}
      <DashboardFooter />
    </main>
  )
}

export default App;
