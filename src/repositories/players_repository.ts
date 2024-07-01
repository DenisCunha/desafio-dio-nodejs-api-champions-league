import { PlayerModel } from "../models/player_model";

const database: PlayerModel[] = [
{id: 1, name: "Messi"},
{id: 2, name: "Ronaldo"},
];

export const findAllPlayers = async (): Promise<PlayerModel[]> =>{
    return database;
};

export const findPlayersId = async (id: number): Promise<PlayerModel | undefined >  =>{
    return database.find(player => player.id === id);
};