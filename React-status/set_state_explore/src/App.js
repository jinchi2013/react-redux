import React, { Component } from 'react'
import HeaderComponent from './components/HeaderComponent'
import DateComponent from './components/DateComponent'
//import FeatureCardsComponent from './containers/FeatureCardsComponent'


class App extends Component {

  render() {
    const appStyle = {
      backgroundColor: "rgb(186, 186, 186)",
      margin: 'auto'
    }

    return (
      <div className="App" style={appStyle}>
        <header>
          <HeaderComponent />
        </header>
        <main>
          <DateComponent />
        </main>
      </div>
    )
  }
}

export default App

//        <main>
    //      <FeatureCardsComponent />
     //   </main>xs

//
//         <main>
//           <FeatureCards/>
//           <Notification />
//         </main>
//         <footer>
//           <copyRight/>
//         </footer>

/**
    Under FeatureCards

           <CalenderComponent />
           <StockList />
           <WeatherReport />
           <TomorrowSchedule />

    Under Notification
          <NotificationList />

*/
