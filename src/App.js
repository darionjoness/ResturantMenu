import Header from "./components/Header";
import data from './data'
import Button from "./components/Button";
import MenuItems from "./components/MenuItems";
import { useState } from "react";

function App() {
  const [menuItems, setMenuItems] = useState(data)
  
  // Create showAll function
  const showAll = () => {
    // setMenuItems to data
    setMenuItems(data)
  }

  // Create showBreakfast function
  const showBreakfast = () => {
    // Filter through and get only breakfast items
    setMenuItems(data.filter(item => item.category === 'breakfast'))
  }

  // Create showLunch function
  const showLunch = () => {
    // filter through and get only lunch items
    setMenuItems(data.filter(item => item.category === 'lunch'))
  }

  // Create showShakes function
  const showShakes = () => {
    // filter through and get only shakes items
    setMenuItems(data.filter(item => item.category === 'shakes'))
  }



  
  return (
    <div className="app">
      <Header />
      <div className="menuButtons">
        <Button text={'All'} classText={'allBtn'} onClick={showAll} /> 
        <Button text={'Breakfast'} classText={'breakfastBtn'} onClick={showBreakfast} />
        <Button text={'Lunch'} classText={'lunchBtn'} onClick={showLunch} />
        <Button text={'Shakes'} classText={'shakesBtn'} onClick={showShakes} />
      </div>
      <MenuItems items={menuItems} />
    </div>
  );
}

export default App;
