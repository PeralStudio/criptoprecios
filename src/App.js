import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TableCoins from "./components/TableCoins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState(false);

  if (page < 1) setPage(1);

  const getData = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=${page}`
    );
    setCoins(res.data);
    setData(true)
  };

  useEffect(() => getData(), [page]);

  return (
    <>
      <Navbar />
      <input
        type="text"
        placeholder="Buscar moneda"
        className="form-control text-white border-0 mt-4 text-center"
        style={{
          width: "70%",
          margin: "auto",
          backgroundColor: "#3f4449",
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        style={{ textAlign: "center", margin: "auto" }}
        className="mt-4"
      >
        <button
          style={{ outline: "0" }}
          className="btn btn-secondary btn-sm m-2"
          onClick={() => {
            getData();
            setPage(page - 1);
          }}
        >
          Anterior
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            getData();
            setPage(page + 1);
          }}
        >
          Siguiente
        </button>
      </div>

      <TableCoins coins={coins} search={search} data={data} />
    </>
  );
}

export default App;
