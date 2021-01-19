import Home from './Home';
import Navbar from './Navbar';
import { navStyles, blogStyles } from './styles';

function App() {
  return (
    <div className='App'>
      <Navbar {...navStyles} />
      <div className={navStyles.content}>
        <Home {...blogStyles} />
      </div>
    </div>
  );
}

export default App;
