import './App.css';
import Footer from './componant/Footer/Footer';
//import Footer from './componant/Footer/Footer';
import Hero from './componant/Hero/Hero';
import Join from './componant/Join/Join';
import Plans from './componant/Plans/Plans';
import Programs from './componant/Programs/Programs';
import Reasons from './componant/Reasons/Reasons';
import Testimonials from './componant/Testamonials/Testimonials';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonials/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
