import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <div>
      <Header/>
      <MainContainer/>
  
      {/* <Fotter>
          <img className='image_fit' src={logo}></img>
          <NavBlock>
  
          </NavBlock>
      </Fotter> */}
    </div>
  );
}

export default App;
