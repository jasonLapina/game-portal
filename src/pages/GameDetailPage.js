import GameDetail from "../components/Games/GameDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function GameDetailPage() {
  const [game, setGame] = useState();
  const params = useParams();
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id: params.gameId },
    headers: {
      "X-RapidAPI-Key": "31e55d9f33msh1320499b9d2e256p1b5831jsn29f20a5e90bf",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios.request(options).then((res) => {
      setGame(res.data);
      console.log(res.data);
    });
  }, []);

  if (!game) return <h1>wenkwonk</h1>;
  else {
    return <GameDetail game={game} />;
  }
}

export default GameDetailPage;
