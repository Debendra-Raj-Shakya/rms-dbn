
import Billing from "./components/Billing/Billing";

import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-3 gap-2">
        <Billing />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
