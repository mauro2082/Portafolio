
import './App.css';
import Header from './layouts/header';
import Main from './pages/main';
import Seconds from './pages/seconds';
import Third from './pages/third';



function App() {
  return (
    
    <div className="App bg-[#23949D] h-full  flex flex-col ">
      <Header />
      <Main />
      <Seconds />
      <Third />
     
    </div>

  );
}

export default App;
