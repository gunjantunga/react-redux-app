import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
function App() {
  return (
    <div className="App">
      <h3>XCart</h3>
      <HeaderContainer/>
      <HomeContainer />
    </div>
  );
}

export default App;
