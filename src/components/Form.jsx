import style from "../css/form.module.css";

export default function Form({groceryItem, setGroceryItem ,groceryList,setGroceryList}) {

        return (
        <>
            <div className={`${style.formContainer}`}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setGroceryList([...groceryList, groceryItem]);
                        setGroceryItem({name: "", done: false});
                    }}
                >
                    <div className={"input-group"}>
                        <input
                            className={`form-control ${style.formInput}`}
                            type="text"
                            value={groceryItem.name}
                            placeholder="Enter item here 🥕..."
                            onChange={(e) => {
                                setGroceryItem({name: e.target.value, done: false})
                            }}
                            required={true}
                            maxLength={45}
                        />
                        <div className={"input-group-append"}>
                            <button
                                className={"btn btn-primary"}
                            >
                                <i className={"bi bi-patch-plus"}></i> Add Item
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    );
}