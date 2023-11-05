import './App.css';
import Nav from './components/nav/Nav';
import Landing from './components/landing_page/Landing';
import Select_vehicle from './components/select_vehicle/Select_vehicle';
import Popular from './components/popular_categories/Popular';
import Top_deal from './components/topdeal/Top_deal';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Select_vehicle/>
      <Popular/>
      <Top_deal/>
    </div>
  );
}

export default App;
