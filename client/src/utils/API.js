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
  // saves to MongoDB however no data is in api/vehicle
  createVehicle: function (VIN, year, make, model) {
    return axios.post("/api/vehicle", { VIN, year, make, model });
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
  updateMileage: function (vehicleId, currentMileage) {
    return axios.put(`/api/vehicle/${vehicleId}`, { currentMileage });
  },
  // gets the recalls for the vehicle by id
  getRecalls: function(vehicleId) {
    return axios.get(`/api/vehicle/recalls/${vehicleId}`);
  },
  getWarrantyById: (id) => {
    return axios.get("/api/warranty/", id)
  },
  newWarranty: (warranty) => {
    return axios.post("/api/warranty", warranty);
  }
};