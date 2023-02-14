import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Games from "../components/Games/Games";

function FilteredGames() {
  const [games, setGames] = useState([]);
  const params = useParams();

  const paramsOptions = params.category ? { category: params.category } : {};

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: paramsOptions,
    headers: {
      "X-RapidAPI-Key": "31e55d9f33msh1320499b9d2e256p1b5831jsn29f20a5e90bf",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios.request(options).then((res) => {
      if (params.query) {
        const query = params.query.split("-").join(" ");
        const filtered = res.data.filter((game) =>
          game.title.toLowerCase().includes(query.toLowerCase())
        );
        setGames(filtered);
      } else {
        setGames(res.data);
      }
    });
  }, [params.category, params.query]);

  return (
    <>
      {params.query && games.length !== 0 && (
        <Heading>Items found for: '{params.query}' </Heading>
      )}
      {params.query && games.length === 0 && (
        <Heading>No items found for: '{params.query}' </Heading>
      )}
      <Games games={games} />
    </>
  );
}

export default FilteredGames;
