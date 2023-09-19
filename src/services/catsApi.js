import axios from "axios";

const catApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images/",
});

export const getAllCatsRequest = async () => {
  const response = await catApi.get("");
  return response.data;
};
