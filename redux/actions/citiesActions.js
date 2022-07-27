import axios from "axios";

const citiesActions = {
   getCities: () => {
      return async (dispatch, getState) => {
         const res = await axios.get("https://mytinerary-rossa.herokuapp.com/api/cities");
         dispatch({ type: "GETCITIES", payload: res.data.response.cities });
      };
   },

   getOneCity: (id) => {
      return async (dispatch, getState) => {
         const res = await axios.get(`https://mytinerary-rossa.herokuapp.com/api/cities/${id}`);
         //   console.log(res)
         dispatch({ type: "GETONECITY", payload: res.data.response.city });
      };
   },

   filterCities: (input) => {
      return (dispatch, getState) => {
         dispatch({ type: "FILTERCITIES", payload: input });
      };
   },
};

export default citiesActions;
