import React from "react";
import axios from "axios";
import config from "./config";
const url = config.api_url;
const api = {
  addItem: async (input) => {
    try {
       
      const response = await axios.post(url +  "add-task", {
        task: input,
      });
      return response.data;
    } catch (error) {
      console.log(`error -> ${error}`);
    }
  },
  getTasks: async () => {
    
    try {
      const new_tasks = await axios.get(url + "get-tasks");
      return new_tasks.data;
    } catch (err) {
      console.log(err);
    }
  },

  handleDelete: async (_id) => {
    try {
      const updated_tasks = await axios.delete(
        url + "delete-task/" + _id
      );
    } catch (err) {
      console.log(err);
    }
  },
};

export default api;
