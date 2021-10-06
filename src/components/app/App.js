import './App.css'; 
import Header from '../Header/header';
import Landing from '../landing/landing';
import { Footer } from '../location/footer';
import { CollapseMenu } from '../collapsibles/collapsible';

export function App() {
    return (
        <div id="page">
            <div id="content">
            <Header />
            <Landing />
            <CollapseMenu />
            <Footer />
            </div>
        </div>
  )
}

export default App