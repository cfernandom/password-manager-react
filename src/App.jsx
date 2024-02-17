import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";

export function App () {
    return (
          <div className="App">
              <Routes>
                  <Route path="/" element={<Login />} />
              </Routes>
          </div>
    )
}