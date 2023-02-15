import axios from "axios";

async function useAxios(params = {}, endpoint = "games") {
  const options = {
    method: "GET",
    url: `https://free-to-play-games-database.p.rapidapi.com/api/${endpoint}`,
    params,
    headers: {
      "X-RapidAPI-Key": "31e55d9f33msh1320499b9d2e256p1b5831jsn29f20a5e90bf",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const res = axios.request(options);
  return res;
}

export default useAxios;
