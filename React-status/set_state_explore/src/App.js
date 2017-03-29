import React, { Component } from 'react'
import HeaderComponent from './components/HeaderComponent'
import DateComponent from './components/DateComponent'
import FeatureCardsComponent from './components/FeatureCardsComponent'


class App extends Component {

  render() {
    const appStyle = {
      backgroundColor: "rgb(186, 186, 186)"
    }

    return (
      <div className="App" style={appStyle}>
        <header>
          <HeaderComponent buttons={this.props.json.headerButton} />
        </header>
        <main>
          <DateComponent date={this.props.json.date} />
          <FeatureCardsComponent />
        </main>
      </div>
    );
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
