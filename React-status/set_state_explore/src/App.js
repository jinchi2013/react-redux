import React, { Component } from 'react'
import HeaderComponent from './components/HeaderComponent'


class App extends Component {

  render() {
    return (
      <div className="App" >
        <header>
          <HeaderComponent buttons={this.props.json.headerButton} />
          
        </header>
        
      </div>
    );
  }
}

export default App


// <DateComponent />
// <main>
//           <CalenderComponent />
//           <StockList />
//           <WeatherReport />
//           <TomorrowSchedule />
//         </main>
//         <footer>
//           <copyRight/>
//         </footer>
