//Named export
import Modal from "./components/Modal";
import Footer  from "./components/Footer";
import AlertList  from "./components/AlertList";
import  Navbar  from "./components/Navbar";
import Drawer from "./components/Drawer";

export default function Home(){
    return(
        <>
            {/* nav component*/}
            <Navbar/>
            {/* drawer */}
            {/* <Drawer/> */}
            <main>
                <p>Main content</p>
                {/* Left sidebar (AlertList) component*/}
                <AlertList/>
                {/* map component*/}
            </main> 
            {/* Footer component*/}
            <Footer/>
        </>
    );
}