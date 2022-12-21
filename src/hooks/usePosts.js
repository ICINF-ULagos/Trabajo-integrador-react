import { useState } from "react";
import axios from "axios";

const apiURL = "https://apingweb.com/api";

const headers = {
  Authorization: "",
};

const usePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getAllPosts = async () => {
    const token = sessionStorage.getItem("token");

    setIsLoading(true);

    headers.Authorization = "Bearer " + token;
    try {
      const response = await axios.get(`${apiURL}/articles`, { headers });
      const data = response.status ? response.data : response.statusText;

      setIsLoading(false);
      return data.result;
    } catch (err) {
      console.error(err);
    }
  };

  return {
    isLoading,
    getAllPosts,
  };
};
export default usePost;
