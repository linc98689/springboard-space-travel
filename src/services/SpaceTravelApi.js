import SpaceTravelMockApi from "./SpaceTravelMockApi";

class SpaceTravelApi
{
  static async getPlanets ()
  {
    return SpaceTravelMockApi.getPlanets();
  }

  static async getSpacecrafts ()
  {
    return await SpaceTravelMockApi.getSpacecrafts();
  }

  static async getSpacecraftById ({id})
  {
    return SpaceTravelMockApi.getSpacecraftById({id});
  }

  static async buildSpacecraft ({name, capacity, description, pictureUrl = undefined})
  {
    return SpaceTravelMockApi.buildSpacecraft({name, capacity, description, pictureUrl});
  }

  static async destroySpacecraftById ({id})
  {
    return SpaceTravelMockApi.destroySpacecraftById({id});
  }

  static async sendSpacecraftToPlanet ({spacecraftId, targetPlanetId})
  {
    return SpaceTravelMockApi.sendSpacecraftToPlanet({spacecraftId, targetPlanetId});
  }

  static async getDB(){
    const {isError:isError_p, data:planets} = await SpaceTravelMockApi.getPlanets();
    const {isError:isError_c, data:spacecrafts} = await  SpaceTravelMockApi.getSpacecrafts();
    let pcmap = SpaceTravelApi.getPcMap(planets, spacecrafts);
    let result = {isError: isError_p || isError_c, data:{planets, spacecrafts, pcmap}};
    return result;
  }

   // return object with planet id as key, and array of crafts currently located at the planet
   static getPcMap = (ps,cs) =>{
    const mp = {};
    const keySet = new Set(ps.map(p => p.id));
    for(let i of keySet)
        mp[i] = [];
    for(let i of cs)
        mp[i.currentLocation].push(i);
    return mp;
  };

}

export default SpaceTravelApi;
