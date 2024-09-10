import "./App.css";
import Homepage from "./homepage";
import Newuser from "./newuser";
import UpdateUser from './update_user'
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/newuser" element={<Newuser/>}/>
      <Route path="/update/:id" element={<UpdateUser/>}/>
     </Routes>
     </BrowserRouter>

    </>
  );
}

export default App;
