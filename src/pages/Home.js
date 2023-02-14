import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Games from "../components/Games/Games";

function HomePage() {
  const [newGames, setNewGames] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const [youMayLikeGames, setYouMayLikeGames] = useState([]);
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { "sort-by": "popularity" },
    headers: {
      "X-RapidAPI-Key": "31e55d9f33msh1320499b9d2e256p1b5831jsn29f20a5e90bf",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios.request(options).then((response) => {
      const games = response.data;
      const fetchedNewGames = games
        .filter(
          (game) =>
            game.release_date.includes("2023") ||
            Number(game.release_date.split("-")[1]) > 10
        )
        .slice(0, 12);
      const fetchedPopularGames = games.slice(0, 12);
      const fetchedYouMayLike = games.slice(24, 36);
      setNewGames(fetchedNewGames);
      setPopularGames(fetchedPopularGames);
      setYouMayLikeGames(fetchedYouMayLike);
    });
  }, []);

  return (
    <>
      <Heading>New games</Heading>
      <Games games={newGames} />
      <Heading>Popular games</Heading>
      <Games games={popularGames} />
      <Heading>You may also like</Heading>
      <Games games={youMayLikeGames} />
    </>
  );
}

export default HomePage;
