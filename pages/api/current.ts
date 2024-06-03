import { NextApiRequest,NextApiResponse } from "next";

import ServerAuth from "@/lib/serverAuth";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "GET"){
        return res.status(405).json({message: "Method not allowed"})
    }

    try{
        const {currentUser} =await ServerAuth(req);
        return res.status(200).json(currentUser)
    }catch(error){
        console.log(error)
        return res.status(500).json({message: "Internal server error"})
    }

}