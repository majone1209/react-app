import { useEffect, useState } from "react";

type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
};

const Breweries = () => {
  const [data, setData] = useState<BreweryType[]>([]);
  const [dataByCity, setDataByCity] = useState<BreweryType[]>([]);
  const [dataBySearch, setDataBySearch] = useState<BreweryType[]>([]);
  const [search, setSearch] = useState<string>("");

  const getBreweries = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  const getBreweryByCity = (city: string, page: number) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=${page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByCity(jsonData);
        console.log("byCity: ", jsonData);
      })
      .catch((error) => console.error(error));
  };

  const searchBreweries = (search: string) => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataBySearch(jsonData);
        console.log("byBrewery: ", jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBreweries();
    getBreweryByCity("san_diego", 10);
    searchBreweries("");
  }, []);

  return (
    <div className="container">
      <h1>City</h1>
      <div>
        {data.length > 0 ? (
          dataByCity.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
      <h1>Search</h1>
      <div>
        <div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          <button onClick={() => searchBreweries(search)}>Search</button>
        </div>
        <div>
          {data.length > 0 ? (
            dataBySearch.map((brewery: BreweryType) => {
              return <div key={brewery.id}>{brewery.name}</div>;
            })
          ) : (
            <div>Nema niti jedna pivovara za zadani parametar</div>
          )}
        </div>
      </div>
      <h1>Breweries</h1>
      <div>
        {data.length > 0 ? (
          data.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
    </div>
  );
};

export default Breweries;
