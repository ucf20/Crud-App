import { Route, Routes } from "react-router-dom";
import AddUser from "./Features/Users/AddUser";
import EditUsers from "./Features/Users/EditUsers";
import "./input.css";
import UserList from "./Features/Users/UserList";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h2 className=" text-center font-bold  text-2xl text-gray-700 ">
        React CRUD APP
      </h2>
      <Routes>
        <Route path="/" exact element={<UserList />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
        <Route path="/edit-user/:id" element={<EditUsers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
