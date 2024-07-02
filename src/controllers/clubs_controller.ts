import { Request, Response } from "express";
import * as service from "../services/clubs_services";

export const getClubs = async (request: Request, response: Response) => {

    const httpResponse = await service.getClubService();
   
    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getClubById = async (request: Request, response: Response) => {

    const id = parseInt(request.params.id);
    const httpResponse = await service.getClubServiceId(id);
   
   response.status(httpResponse.statusCode).json(httpResponse.body);
};