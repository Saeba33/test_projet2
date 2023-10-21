import './styles/index.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Filters from './components/Filters';


function App() {

  return (
    <>
      <Header/>
      <Filters/>
      <Card/>
      <Footer/>
    </>
  )
}

export default App;