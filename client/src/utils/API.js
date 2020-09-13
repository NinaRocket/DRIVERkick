import axios from "axios";

export default {
  login: (email, password) => {
    return axios.post("/api/user/login", {
      email,
      password,
    });
  },

  getUser: function () {
    return axios.get("/api/user/info");
  },

  signup: (userInfo) => {
    return axios.post("/api/user/signup", userInfo);
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
  // updates the vehicles current mileage
  // updateMileage: function (vehicleId, currentMileage) {
  //   return axios.put(`/api/mileage/:id`, {vehicleId, currentMileage });
  // },
  // postMileage: function (id) {
  //   return axios.post(`/api/vehicle/` + id);
  // },
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
    return axios.post("/api/warranty",
    { vehicle, title, provider, details });
  },
  //update a warranty
  updateWarranty: (id, title, provider, details) => {
    return axios.put(`/api/warranty/${id}`,
    { title, provider, details });
  },
  // delete a warranty
  deleteWarranty: (id) => {
    return axios.delete(`/api/warranty/${id}`);
  }
};
