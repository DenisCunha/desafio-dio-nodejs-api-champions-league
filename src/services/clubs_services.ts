import * as ClubRepository from "../repositories/clubs_repository";
import * as httpResponseContent from "../utils/http_helper";

export const getClubService = async () => {
    const data = await ClubRepository.findAllClubs();

    let  res = null;
    if(data) {
     res = await httpResponseContent.ok(data);
    } else {
     res = await httpResponseContent.noContent();
    }
   
    return res;
};

export const getClubServiceId = async (id: number) => {
    const data = await ClubRepository.findClubsId(id);

    let  res = null;
    if(data) {
     res = await httpResponseContent.ok(data);
    } else {
     res = await httpResponseContent.noContent();
    }
   
    return res;
};

