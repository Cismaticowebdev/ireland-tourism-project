import axios from "axios";
import { useState } from "react";
import AttractionForm from "../components/AttractionForm";
import AttractionList from "../components/AtractionList";

function FindAttractions() {
  const API_KEY = "fa1c6d4b08884145931ac068a074c43d";
  const [attractionsData, setAttractionsData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=search.ismatch('${inputValue}','name')`,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": API_KEY,
          },
        }
      );
      setAttractionsData(response.data);
      setError("");
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error(error);
    }
    console.log(attractionsData);
  }

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <section className="find-attractions">
      <h1>Find attractions</h1>
      <AttractionForm onSubmit={handleSubmit} onChange={handleInputValue} />
      {error && <p>{error}</p>}
      <AttractionList attractions={attractionsData} />
    </section>
  );
}

export default FindAttractions;
