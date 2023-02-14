import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Games from "../components/Games/Games";

function FilteredGames() {
  const [games, setGames] = useState([]);
  const params = useParams();
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: params.category },
    headers: {
      "X-RapidAPI-Key": "31e55d9f33msh1320499b9d2e256p1b5831jsn29f20a5e90bf",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  axios.request(options).then((res) => {
    setGames(res.data);
  });

  return (
    <>
      <Games games={games} />
    </>
  );
}

export default FilteredGames;
