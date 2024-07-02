import { PlayerModel } from "../models/player_model";

const database: PlayerModel[] = [
{   id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
       Overall: 93,
       Pace: 85,
       Shooting: 94,
       Passing: 91,
       Dribbling: 95,
       Defending: 38,
       Physical: 65,
    }
},
{
    id: 2,
    name: "Critiano Ronaldo",
    club: "Al-Nassr Football Club",
    nationality: "Portual",
    position: "Forward",
    statistics: {
       Overall: 95,
       Pace: 86,
       Shooting: 97,
       Passing: 95,
       Dribbling: 91,
       Defending: 40,
       Physical: 70,
    }
},
];

export const findAllPlayers = async (): Promise<PlayerModel[]> =>{
    return database;
};

export const findPlayersId = async (id: number): Promise<PlayerModel | undefined >  =>{
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) =>{
   database.push(player);
};