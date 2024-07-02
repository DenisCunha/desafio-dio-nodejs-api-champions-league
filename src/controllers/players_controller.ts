import { Request, Response } from "express";
import * as service from "../services/players_service";
import { StatisticsModel } from "../models/statistics_models";

export const getPlayer = async (request: Request, response: Response) => {

    const httpResponse = await service.getPlayerService();
   
    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {

    const id = parseInt(request.params.id);
    const httpResponse = await service.getPlayerServiceId(id);
   
   response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (request: Request, response: Response) => {

    const content = request.body;
    const httpResponse = await service.createPlayerService(content);

    if (httpResponse) {
     response.status(httpResponse.statusCode).json(httpResponse.body);
    } /*else {
        const res = await noContent();
        response.status(res.statusCode).json(res.body);
    }*/
};

export const deletePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.deletePlayerService(id);

    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const bodyvalue:StatisticsModel = request.body
    const httpResponse = await service.updatePlayerService(id, bodyvalue);

    response.status(httpResponse.statusCode).json(httpResponse.body);
};
