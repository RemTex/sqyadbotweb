import React from 'react';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Servers from './components/MainPage/Servers/Servers';
import About from './components/MainPage/About/About';
import Home from './components/MainPage/HomePage/Home';
import LoginPage from './components/DashBoard/LoginPage/LoginPage';
import { OAuthContextProvider } from './OAuthProvider/OAuthProvider';
import BigData from './components/DashBoard/BigDataPage/BigDataPage';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';

const App = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <OAuthContextProvider>
          <div>
              <Routes>
                <Route path='/' element={<MainPage/>}>
                  <Route index element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/servers' element={<Servers/>}/>
                </Route>
                <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/loginpage' element={<LoginPage/>}/>
              </Routes>
          </div>
        </OAuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>

    // <div>
    //   <BigData></BigData>
    // </div>
  );
}

export default App;
