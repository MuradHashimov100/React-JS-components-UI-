import './Assets/main.css';
import Navbar from './Components/Navbar/Navbar';
import Contenta from './Components/content/Contenta';
import Sidebar from './Components/Sidebar/SidebarMain';
import Footer from './Components/footer/Footer';


function App(){
    return (
        <main>
            <div className="box1">
            <Navbar></Navbar>
            <Contenta></Contenta>
            <Footer></Footer>
            </div>
            <Sidebar className="Sidebar"></Sidebar>
        </main>

    ); 
}

export default App;