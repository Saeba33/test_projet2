import './styles/index.css';
import Header from './components/Header';
import Filters from './components/Filters';
import Card from './components/Card';
import Footer from './components/Footer';
import Array from './components/Array';


function App() {
  return (
    <>
      <Header/>
      <Array/>
      <Filters/>
      <Card/>
      <Footer/>
    </>
  )
}


export default App;