import React from 'react';
import Card from './Components/card';
const App = () => {
  return (
    <div className="Parent">
      <Card user="Sumeet" age={21} img= "https://shorturl.at/io36D" />

      <Card user="Raju" age={7} img="https://shorturl.at/kxRZq"/>

      <Card user="Bheem" age={17} img="https://shorturl.at/A29ul"/>
    </div>
  );
};

export default App;
