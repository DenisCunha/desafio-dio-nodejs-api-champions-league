import { PlayerModel } from "../models/player_model";
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

export const createPlayerService = async (player: PlayerModel) => {
    let  res = null;

    if(Object.keys(player).length === 0) {
     await PlayerRepository.insertPlayer(player);
     res = await httpResponseContent.created();
    } else {
     res = await httpResponseContent.badRequest();
    }
   
    return res;
};
