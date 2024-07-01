import { httpResponse } from "../models/http_response_model";

export const ok = async (data: any): Promise<httpResponse> => {
   return {
    statusCode: 200,
    body: data,
   };
};

export const noContent = async (): Promise<httpResponse> => {
    return {
     statusCode: 204,
     body: null,
    };
 };

 export const badRequest = async (): Promise<httpResponse> => {
   return {
    statusCode: 400,
    body: null,
   };
};

export const created = async (): Promise<httpResponse> => {
   return {
    statusCode: 201,
    body: {message: "Created With Success"},
   };
};