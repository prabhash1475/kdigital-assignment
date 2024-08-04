import logo from "./logo.svg";
import "./App.css";
import Filter from "./Components/Filter";
import AddProductModal from "./Components/AddProductModal";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="App">
      <h1>Product Directory</h1>
      <Filter />
      <AddProductModal />
      <ProductList />
    </div>
  );
}

export default App;
