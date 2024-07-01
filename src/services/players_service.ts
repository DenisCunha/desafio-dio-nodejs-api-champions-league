import { ok, noContent} from "../utils/http_helper";

export const getPlayerService = async () => {
    const data = {
        player : "Cristiano Ronaldo"
    };

    let  res = null
    if(data) {
     res = await ok(data);
    } else {
     res = await noContent();
    }
   
    return res;
};