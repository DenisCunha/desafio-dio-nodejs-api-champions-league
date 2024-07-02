import { ClubModel } from "../models/club_model";
import fs from "fs/promises";



async function conectData() {
    const database: ClubModel[] = [
        {   id: 1,
            name: "Real Madri",
        },
        {
            id: 2,
            name: "Barcelona",
        },
        {
            id: 3,
            name: "Manchester City",
        },
    ];

    return database;
}

async function conectJson() {
    const databasejson = await fs.readFile("./src/data/clubs.json", "utf-8");

    const database2: ClubModel[] = JSON.parse(databasejson);

    return database2;
}

export const findAllClubs = async (): Promise<ClubModel[]> =>{
    const data = await conectJson();
    return data;
};

export const findClubsId = async (id: number): Promise<ClubModel | undefined >  =>{
    //const data = await conectData();
    const data = await conectJson();
    return data.find(club => club.id === id);
};