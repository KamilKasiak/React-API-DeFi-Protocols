import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Protocols from "./Protocols";

function App() {
  const [protocols, setProtocols] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.llama.fi/protocols", {
        params: {},
      })
      .then((res) => {
        setProtocols(res.data);
      })
      .catch((error) => {
        alert(`There is an error: ${error}`);
      });
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredProtocols = protocols.filter(
    (protocol) =>
      protocol.name.toLowerCase().includes(search.toLowerCase()) &&
      protocol.tvl > 300000000
  );

  return (
    <div className="App">
      <div className="protocol-search">
        <h1 className="search-text">Search protocol</h1>
        <form>
          <input
            type="text"
            className="search-input"
            placeholder="Search protocol name"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredProtocols.map((protocol) => {
        return (
          <Protocols
            key={protocol.id}
            name={protocol.name}
            symbol={protocol.symbol}
            logo={protocol.logo}
            audits={protocol.audits}
            audit_links={protocol.audit_links}
            chain={protocol.chain}
            oracles={protocol.oracles}
            tvl={protocol.tvl}
            description={protocol.description}
            change_7d={protocol.change_7d}
          />
        );
      })}
    </div>
  );
}

export default App;
