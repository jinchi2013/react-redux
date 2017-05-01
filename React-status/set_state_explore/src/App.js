import React, { Component } from 'react'
import HeaderComponent from './components/HeaderComponent'
import DateComponent from './components/DateComponent'
import FeatureCardsComponent from './components/FeatureCardsComponent'


class App extends Component {

  render() {
    const appStyle = {
      backgroundColor: "rgb(186, 186, 186)",
      width: 400
    }

    const { 
      date,
      featureCards
     } = this.props.json

    return (
      <div className="App" style={appStyle}>
        <header>
          <HeaderComponent buttons={featureCards.headerButton} />
        </header>
        <main>
          <DateComponent date={date} />
          <FeatureCardsComponent featureCards={featureCards} />
        </main>
      </div>
    )
  }
}

export default App


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
