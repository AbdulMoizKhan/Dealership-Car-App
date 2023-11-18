import './App.css';
import Nav from './components/nav/Nav';
import Landing from './components/landing_page/Landing';
import Select_vehicle from './components/select_vehicle/Select_vehicle';
import Popular from './components/popular_categories/Popular';
import Top_deal from './components/topdeal/Top_deal';
import BlogCard from './molecules/blog_card/Blogcard';
import BlogSection from './components/blog_section/Blog_section';
import Service from './components/services/Service';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Select_vehicle/>
      <Popular/>
      <Top_deal/>
      <BlogSection/>
      <Service/>
    </div>
  );
}

export default App;
