import axios from "axios";

export default {
  // decodes VIN and returns vehicle information
  getNewVehicle: async function (queryVIN) {
    const queryVehicle = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${queryVIN}?format=json`
    );
    const vehicle = {
      year: queryVehicle.data.ModelYear,
      make: queryVehicle.data.Make,
      model: queryVehicle.data.Model,
      vin: queryVIN,
    };
    return vehicle;
  },

  // gets recall information from NHTSA database and normalized data for front end use
  getRecallInfo: async function (year, make, model) {
    const recallData = await axios.get(
      `https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/${year}/make/${make}/model/${model}?format=json`
    );
    const recallInfo = {
      recalls: recallData.data.results.map((element) => {
        return {
          NHTSACampaignNumber: element.NHTSACampaignNumber,
          summary: element.Summary,
        };
      }),
    };
    return recallInfo;
  },

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
  addvehicle: function (userVehicleInfo) {
    return axios.post("/api/vehicle/decode-vin/vin", userVehicleInfo);
  },

  getVehicle: function () {
    return axios.get("/api/vehicle");
  },

  getDecodeVIN: function (VIN) {
    return axios.get(`/api/vehicle/decode-vin/${VIN}`);
  },

  updateMileage: (currentMile) => {
    return axios.put("/api/vehicle", currentMile);
  },
  getWarranty: () => {
    return axios.get("/api/warranty");
  },
  newWarranty: (warranty) => {
    return axios.post("/api/warranty", warranty);
  },
};
// getWarrantyById: (id) => {
//   return axios.get("/api/warranty/", id)
// },
// newWarranty: (warranty) => {
//   return axios.post("/api/warranty", warranty);
// }

// };
