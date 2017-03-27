import React, { Component } from 'react'
import HeaderComponent from './components/HeaderComponent'
import DateComponent from './components/DateComponent'


class App extends Component {

  render() {
    return (
      <div className="App" >
        <header>
          <HeaderComponent buttons={this.props.json.headerButton} />
        </header>
        <main>
          <DateComponent />
        </main>
      </div>
    );
  }
}

export default App


// 
//         <main>
//           <CalenderComponent />
//           <StockList />
//           <WeatherReport />
//           <TomorrowSchedule />
//         </main>
//         <footer>
//           <copyRight/>
//         </footer>
