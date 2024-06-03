import { NextApiResponse, NextApiRequest } from "next";
import axios from "axios";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await serverAuth(req);

    // const movieCount = await prismadb.movie.count();
    // const randomIntex = Math.floor(Math.random() * movieCount);

    // const randomMovie = await prismadb.movie.findMany({
    //   take: 1,
    //   skip: randomIntex,
    // });
    
    const randomMovie=await axios.get("https://api.jikan.moe/v4/random/anime"); 

    axios.get("https://api.jikan.moe/v4/random/anime").then((data)=>console.log(data))
    return res.status(200).send(randomMovie.data);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}