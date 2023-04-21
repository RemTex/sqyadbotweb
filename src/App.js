import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import HelloBar from './components/HelloBar';

const App = () => {
  return (
    <div>
      <Header/>
      <HelloBar/>
      <MainContainer/>
  
      <Footer>
        
      </Footer>
    </div>
  );
}

export default App;
