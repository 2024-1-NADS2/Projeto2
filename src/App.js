import Cabecalho from '../src/components/Cabecalho/Cabecalho.jsx';
import Menu from './components/Menu/Menu.jsx';
import Feed from './pages/Pagina inicial/feed.jsx'
import index from './index.css'
function App() {
  
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <div className='Pag'><Menu></Menu>
      <Feed></Feed>
      </div>

    </div>
  );
}

export default App;
