import './App.css'; 
import Header from '../Header/header';
import Landing from '../landing/landing';
import { Footer } from '../location/footer';
import { MunchiesMenu } from "../menu/munchies"
import { ExtrasMenu } from "../menu/extras"
import { SaladsMenu } from "../menu/salads"
import { DonairMenu } from "../menu/donairs"
import { BurgerMenu } from "../menu/burgers"
import { PizzaMenu } from "../menu/pizza"
import { PastaMenu } from "../menu/pasta"
import { Nav } from "../nav/nav"

function App() {
    return (
        <div id="page">
            <div id="content">
            <Header />
            <Nav />
            <Landing />
            <PizzaMenu />
            <BurgerMenu />
            <DonairMenu />
            <PastaMenu />
            <SaladsMenu />
            <ExtrasMenu />
            <MunchiesMenu />
            <Footer />
            </div>
        </div>
  )
}

export default App;
