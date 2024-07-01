import { Request, Response } from "express";
import * as service from "../services/players_service";

export const getPlayer = async (request: Request, response: Response) => {

    const httpResponse = await service.getPlayerService();
   
    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {

    const id = parseInt(request.params.id);
    const httpResponse = await service.getPlayerServiceId(id);
   
   response.status(httpResponse.statusCode).json(httpResponse.body);
};
