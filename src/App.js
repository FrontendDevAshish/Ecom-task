import './App.css';
import AddProductButton from './Components/ProductButton';
import ProductList from './Components/ProductList';
function App() {
  return (
    <div className='App'>
      <header className="App-header">
    <h1>Product List</h1>
  </header>
  <main>
    <ProductList />
  </main>
    </div>
  );
}

export default App;
