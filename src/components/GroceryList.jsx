import Form from "./Form.jsx";
import GroceryListDisplay from "./GroceryListDisplay.jsx";

export default function GroceryList({groceryItem, setGroceryItem, groceryList, setGroceryList}) {
    return (
        <div style={{marginTop:"170px"}}>
            <Form groceryItem={groceryItem} setGroceryItem={setGroceryItem} groceryList={groceryList} setGroceryList={setGroceryList}/>
            <GroceryListDisplay groceryItem={groceryItem} groceryList={groceryList} setGroceryList={setGroceryList} />
        </div>
    );
}