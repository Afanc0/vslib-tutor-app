import DashboardHome from './features/dashboard-home';
import BodyLinkContent from './features/dashboard-link';
import DashboardFooter from './features/dashboard-footer';
import React, { useRef } from 'react';

function App() {
  
  const repo = useRef(null)
  const squir = useRef(null)
  const comp = useRef(null)

  return (
    <React.Fragment>
      <DashboardHome refArray={[repo, squir, comp]} />
      <main>
        <BodyLinkContent refArray={[repo, squir, comp]} />
        {/* <div style={{backgroundColor: "white", height: "100vh"}}>

        </div> */}
      </main>
      <DashboardFooter refArray={[repo, squir, comp]} />
    </React.Fragment>
  )
}

export default App;
