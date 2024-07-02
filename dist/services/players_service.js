"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/services/players_service.ts
var players_service_exports = {};
__export(players_service_exports, {
  createPlayerService: () => createPlayerService,
  deletePlayerService: () => deletePlayerService,
  getPlayerService: () => getPlayerService,
  getPlayerServiceId: () => getPlayerServiceId,
  updatePlayerService: () => updatePlayerService
});
module.exports = __toCommonJS(players_service_exports);

// src/repositories/players_repository.ts
var database = [
  {
    id: 1,
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
      Physical: 65
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
      Physical: 70
    }
  }
];
var findAllPlayers = () => __async(void 0, null, function* () {
  return database;
});
var findPlayersId = (id) => __async(void 0, null, function* () {
  return database.find((player) => player.id === id);
});
var insertPlayer = (player) => __async(void 0, null, function* () {
  database.push(player);
});
var deletePlayerId = (id) => __async(void 0, null, function* () {
  const index = database.findIndex((p) => p.id === id);
  if (index !== -1) {
    database.splice(index, 1);
  }
});
var updatePlayerId = (id, statistics) => __async(void 0, null, function* () {
  const index = database.findIndex((player) => player.id === id);
  if (index !== -1) {
    database[index].statistics = statistics;
  }
  return database[index];
});

// src/utils/http_helper.ts
var ok = (data) => __async(void 0, null, function* () {
  return {
    statusCode: 200,
    body: data
  };
});
var noContent = () => __async(void 0, null, function* () {
  return {
    statusCode: 204,
    body: null
  };
});
var badRequest = () => __async(void 0, null, function* () {
  return {
    statusCode: 400,
    body: null
  };
});
var created = () => __async(void 0, null, function* () {
  return {
    statusCode: 201,
    body: { message: "Created With Success" }
  };
});

// src/services/players_service.ts
var getPlayerService = () => __async(void 0, null, function* () {
  const data = yield findAllPlayers();
  let res = null;
  if (data) {
    res = yield ok(data);
  } else {
    res = yield noContent();
  }
  return res;
});
var getPlayerServiceId = (id) => __async(void 0, null, function* () {
  const data = yield findPlayersId(id);
  let res = null;
  if (data) {
    res = yield ok(data);
  } else {
    res = yield noContent();
  }
  return res;
});
var createPlayerService = (player) => __async(void 0, null, function* () {
  let res = null;
  if (Object.keys(player).length !== 0) {
    yield insertPlayer(player);
    res = yield created();
  } else {
    res = yield badRequest();
  }
  return res;
});
var deletePlayerService = (id) => __async(void 0, null, function* () {
  let res = null;
  const index = yield getPlayerServiceId(id);
  const del = yield deletePlayerId(id);
  if (index.statusCode === 200) {
    res = yield ok({ message: "deleted" });
  } else {
    res = yield badRequest();
  }
  return res;
});
var updatePlayerService = (id, statistics) => __async(void 0, null, function* () {
  let res = null;
  const data = yield updatePlayerId(id, statistics);
  const index = yield getPlayerServiceId(id);
  if (index.statusCode === 200) {
    res = yield ok(data);
  } else {
    res = yield badRequest();
  }
  return res;
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPlayerService,
  deletePlayerService,
  getPlayerService,
  getPlayerServiceId,
  updatePlayerService
});
