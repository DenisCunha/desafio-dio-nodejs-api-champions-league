import * as PlayerRepository from "../repositories/players_repository";
import * as httpResponseContent from "../utils/http_helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();

    let  res = null;
    if(data) {
     res = await httpResponseContent.ok(data);
    } else {
     res = await httpResponseContent.noContent();
    }
   
    return res;
};

export const getPlayerServiceId = async (id: number) => {
    const data = await PlayerRepository.findPlayersId(id);

    let  res = null;
    if(data) {
     res = await httpResponseContent.ok(data);
    } else {
     res = await httpResponseContent.noContent();
    }
   
    return res;
};