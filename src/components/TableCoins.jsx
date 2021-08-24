import React from "react";
import { ColRow } from "./CoinRow";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const titles = ["#", "Moneda", "Precio", "Cambio"];

const TableCoins = ({ coins, search, data }) => {
    const filteredCoins = coins.filter(
        (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) |
            coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {data ? (
                <table className="table table-dark mt-4 table-hover">
                    <thead>
                        <tr>
                            {titles.map((title, index) => (
                                <td key={index}>{title}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCoins.map((coin, index) => (
                            <ColRow coin={coin} key={index} index={index + 1} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <Loader
                    style={{
                        width: "fit-content",
                        margin: "auto",
                        marginTop: "120px",
                    }}
                    type="Oval"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            )}
        </>
    );
};

export default TableCoins;
