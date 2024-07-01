import * as PlayerRepository from "../repositories/players_repository";
import { ok, noContent} from "../utils/http_helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();

    let  res = null
    if(data) {
     res = await ok(data);
    } else {
     res = await noContent();
    }
   
    return res;
};