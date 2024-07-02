import { PlayerModel } from "../models/player_model";
import { StatisticsModel } from "../models/statistics_models";
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

    if(Object.keys(player).length !== 0) {
     await PlayerRepository.insertPlayer(player);
     res = await httpResponseContent.created();
    } else {
     res = await httpResponseContent.badRequest();
    }
   
    return res;
};

export const deletePlayerService = async (id: number) => {
    
    let  res = null;
    const index = await getPlayerServiceId(id);
    const del = await PlayerRepository.deletePlayerId(id);

    if (index.statusCode === 200) {
        res = await httpResponseContent.ok({message: "deleted"});
    } else {
        res = await httpResponseContent.badRequest();
    }

    return res;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    
    let  res = null;
    const data = await PlayerRepository.updatePlayerId(id, statistics);
    const index = await getPlayerServiceId(id);
    
    if (index.statusCode === 200) {
        res = await httpResponseContent.ok(data);
    } else {
        res = await httpResponseContent.badRequest();
    }

    return res;
};