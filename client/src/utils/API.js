import axios from "axios";

export default {
  login: (email, password) => {
    return axios.post("/api/user/login", {
      email,
      password,
    });
  },

  logout: () => axios.get("/api/user/logout"),

  getUser: function () {
    return axios.get("/api/user/info");
  },

  signup: (userInfo) => {
    return axios.post("/api/user/signup", userInfo);
  },

  // Returns "true" if the user is logged in
  homeLoginCheck: () => {
    return axios.get("api/user/isAuthenticated");
  },

  // VEHICLE ROUTES
  //post VIN
  addvehicle: function (VIN, year, make, model, icon) {
    return axios.post("/api/vehicle", { VIN, year, make, model, icon });
  },

  getVehicles: function () {
    return axios.get("/api/vehicle");
  },

  getVehicleById: function (vehicleId) {
    return axios.get(`/api/vehicle/${vehicleId}`);
  },

  // delete a vehicle
  deleteVehicle: (id) => {
    return axios.delete(`/api/vehicle/${id}`);
  },

  getDecodeVIN: function (VIN) {
    return axios.get(`/api/vehicle/decode-vin/${VIN}`);
  },
  saveDecodeVIN: function (VIN) {
    return axios.post(`/api/vehicle/${VIN}`);
  },
  // updates vehicle nickname
  updateNickname: function (vehicleId, nickname) {
    return axios.put(`/api/vehicle/${vehicleId}`, { nickname });
  },
  // updates mileage next oil change is due
  updateOilChange: function (vehicleId, nextOilChange) {
    return axios.put(`/api/vehicle/${vehicleId}`, { nextOilChange });
  },
  putMileage: function (id, currentMileage) {
    return axios.put(`/api/vehicle/mileage/` + id, { currentMileage });
  },
  // updates the vehicle driver
  updateDriver: function (vehicleId, driverName) {
    return axios.put(`/api/vehicle/${vehicleId}`, { driverName });
  },
  // gets the recalls for the vehicle by id
  getRecalls: function (VIN) {
    return axios.get(`/api/vehicle/recalls/${VIN}`);
  },
  updateOwner: () => {
    return axios.put();
  },
  // Warranty Functions ---------------||
  // returns all warranties for specific vehicle
  getAllWarranties: (vehicleId) => {
    return axios.get(`/api/warranty/${vehicleId}`);
  },
  //create a single warranty
  createWarranty: (vehicle, title, provider, details) => {
    return axios.post(`/api/warranty/`, {
      vehicle,
      title,
      provider,
      details,
    });
  },

  // oil functions -------------------------------- ||
  getOilChangeInfo: (vehicleId) => {
    return axios.get(`/api/vehicle/oil/${vehicleId}`);
  },
  addOilChange: (vehicleID, currentMileage, oilInterval, oilType) => {
    return axios.put(`/api/vehicle/oil/${vehicleID}`, {
      currentMileage,
      oilInterval,
      oilType,
    });
  }
};
