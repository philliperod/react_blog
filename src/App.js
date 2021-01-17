import Home from './Home';
import Navbar from './Navbar';
import { navStyles } from './styles';

function App() {
  return (
    <div className='App'>
      <Navbar {...navStyles} />
      <div className={navStyles.content}>
        <Home />
      </div>
    </div>
  );
}

export default App;
