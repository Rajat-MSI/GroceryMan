import Navbar from "./components/Navbar.jsx";
import GroceryList from "./components/GroceryList.jsx";
import {useState} from "react";
import Footer from "./components/Footer.jsx";

export default function App() {

    const appName = "🥕GroceryMan🫑";
    const [groceryItem, setGroceryItem] = useState({
        name: "",
        done: false
    });
    const [groceryList,setGroceryList] = useState([]);
    return (
    <div>
        <Navbar appName={appName} groceryList={groceryList}/>
        <div className={"container  col-sm-12 col-lg-8 col-md-12"}>
            <GroceryList
                groceryItem={groceryItem}
                setGroceryItem={setGroceryItem}
                groceryList={groceryList}
                setGroceryList={setGroceryList}
            />
        </div>
        <Footer/>
    </div>
  );
}

