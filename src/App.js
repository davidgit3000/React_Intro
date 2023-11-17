import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToeGame from "./pages/TicTacToeGame";
import Data from "./pages/DataAPI";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="tic_tac_toe" element={<TicTacToeGame />} />
            <Route path="data_api" element={<Data />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
