import Form from "./Form.jsx";
import GroceryListDisplay from "./GroceryListDisplay.jsx";
import propTypes from "prop-types";

export default function GroceryList({groceryItem, setGroceryItem, groceryList, setGroceryList}) {
    return (
        <div style={{marginTop:"170px"}}>
            <Form groceryItem={groceryItem} setGroceryItem={setGroceryItem} groceryList={groceryList} setGroceryList={setGroceryList}/>
            <GroceryListDisplay groceryItem={groceryItem} groceryList={groceryList} setGroceryList={setGroceryList} />
        </div>
    );
}

GroceryList.propTypes = {
    groceryItem:propTypes.object.isRequired,
    groceryList:propTypes.array.isRequired,
    setGroceryList:propTypes.func.isRequired,
    setGroceryItem:propTypes.func.isRequired,
}