import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Protocols from "./Protocols";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function App() {
  const [protocols, setProtocols] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(300);

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
      protocol.tvl > value * 1000000
  );

  function valueLabelFormat(value) {
    const units = ["mil", "bil"];
    let unitIndex = 0;
    let scaledValue = value;
    while (scaledValue >= 1000 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1000;
    }
    return `${scaledValue} ${units[unitIndex]}`;
  }

  function calculateValue(value) {
    return value;
  }

  const handleSliderChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      console.log(newValue);
    }
  };

  return (
    <div className="App">
      <div className="protocol-search">
        <h1 className="search-text">Search protocol</h1>
        <form className="searchBar">
          <input
            type="text"
            className="search-input"
            placeholder="Search protocol name"
            onChange={handleChange}
          />
        </form>
        <Box sx={{ width: 250 }}>
          <Typography id="non-linear-slider" gutterBottom>
            TVL: {valueLabelFormat(calculateValue(value))}
          </Typography>
          <Slider
            value={value}
            min={100}
            step={10}
            max={10000}
            scale={calculateValue}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
        </Box>
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
