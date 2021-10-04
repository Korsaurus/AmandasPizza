import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; 
import Header from '../Header/header';
import Landing from '../landing/landing';
import { Footer } from '../location/footer';
import { About } from '../about/about';
import { Nav } from '../nav/menucontainer';
import { MunchiesMenu } from "../menu/munchies"
import { ExtrasMenu } from "../menu/extras"
import { SaladsMenu } from "../menu/salads"
import { DonairMenu } from "../menu/donairs"
import { BurgerMenu } from "../menu/burgers"
import { PizzaMenu } from "../menu/pizza"
import { PastaMenu } from "../menu/pasta"

function App() {
    return (
        <div id="page">
            <Header />
            <Nav />
            <Landing />
            <PizzaMenu />
            <BurgerMenu />
            <DonairMenu />
            <PastaMenu />
            <SaladsMenu />
            <ExtrasMenu />
            <div id="munchies"><MunchiesMenu /></div>
            <About />
            <Footer />
        </div>
  )
}

export default App;
