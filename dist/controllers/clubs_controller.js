"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/controllers/clubs_controller.ts
var clubs_controller_exports = {};
__export(clubs_controller_exports, {
  getClubById: () => getClubById,
  getClubs: () => getClubs
});
module.exports = __toCommonJS(clubs_controller_exports);

// src/repositories/clubs_repository.ts
var import_promises = __toESM(require("fs/promises"));
function conectJson() {
  return __async(this, null, function* () {
    const databasejson = yield import_promises.default.readFile("./src/data/clubs.json", "utf-8");
    const database2 = JSON.parse(databasejson);
    return database2;
  });
}
var findAllClubs = () => __async(void 0, null, function* () {
  const data = yield conectJson();
  return data;
});
var findClubsId = (id) => __async(void 0, null, function* () {
  const data = yield conectJson();
  return data.find((club) => club.id === id);
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

// src/services/clubs_services.ts
var getClubService = () => __async(void 0, null, function* () {
  const data = yield findAllClubs();
  let res = null;
  if (data) {
    res = yield ok(data);
  } else {
    res = yield noContent();
  }
  return res;
});
var getClubServiceId = (id) => __async(void 0, null, function* () {
  const data = yield findClubsId(id);
  let res = null;
  if (data) {
    res = yield ok(data);
  } else {
    res = yield noContent();
  }
  return res;
});

// src/controllers/clubs_controller.ts
var getClubs = (request, response) => __async(void 0, null, function* () {
  const httpResponse = yield getClubService();
  response.status(httpResponse.statusCode).json(httpResponse.body);
});
var getClubById = (request, response) => __async(void 0, null, function* () {
  const id = parseInt(request.params.id);
  const httpResponse = yield getClubServiceId(id);
  response.status(httpResponse.statusCode).json(httpResponse.body);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getClubById,
  getClubs
});
