// Import Files //

import { BrowserRouter, Routes, Route } from "react-router-dom";

//--//

/// Page Imports
import Intro from "./pages/Intro";
import Dashboard from "./pages/Dashboard";
import ActiveOrders from "./pages/ActiveOrders";
import Batches from "./pages/Batches";
import Customers from "./pages/Customers";
import CompletedOrders from "./pages/CompletedOrders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Intro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/activeOrders" element={<ActiveOrders />} />
            <Route path="/dashboard" element={<Batches />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/completedOrders" element={<CompletedOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
