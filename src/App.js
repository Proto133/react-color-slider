import './App.css';
import Header from './components/header/Header'
import ColorBrowser from './components/colorBrowser/ColorBrowser'

function App() {
    return ( 
    <div className = "App" >
        <Header / >
    <div className="colorBrowser">
        <ColorBrowser />
    </div>
    </div>
    );
}

export default App;