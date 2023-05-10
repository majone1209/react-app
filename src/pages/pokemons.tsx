import { useEffect, useState } from "react";

type PokemonType = {
  name: string;
  color: string;
  id: string;
};

type BerryType = {
  name: string;
  url: string;
};

const Pokemons = () => {
  const [searchData, setSearchData] = useState<PokemonType>();
  const [search, setSearch] = useState<string>("");
  const [berries, setBerries] = useState<BerryType[]>([]);
  const [flag, setFlag] = useState<string>("");

  const searchPokemon = (search: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setSearchData(jsonData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBerries = () => {
    fetch(`https://pokeapi.co/api/v2/berry`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setBerries(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCapitalCity = () => {
    fetch(`https://restcountries.com/v3.1/capital/nairobi`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0].flags);
        setFlag(data[0].flags);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchPokemon("");
    getBerries();
    getCapitalCity();
  }, []);

  return (
    <div className="container">
      <h1>Pokemon name:</h1>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button onClick={() => searchPokemon(search)}>Search</button>
      </div>
      <div>
        {searchData ? (
          <div>
            <div>{searchData.name}</div>
          </div>
        ) : (
          <div>
            Ne nalazim Pokemona pod imenom {search}. Pokusaj neko drugo ime.
          </div>
        )}
      </div>
      {/* <div>
        <h1>All berries</h1>
        <div>
          {berries.map((berry) => {
            return (
              <div>
                <div>{berry.name}</div>;<a href={berry.url}>Link</a>
              </div>
            );
          })}
        </div>
      </div> */}
      <div>
        <h1>Flag</h1>
        <img src={flag} alt="flag" />
      </div>
    </div>
  );
};

export default Pokemons;
