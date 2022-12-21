import { useState } from "react";
import axios from "axios";

const apiURL = "https://apingweb.com/api";

const headers = {
  "Content-Type": "application/json",
};

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getNameById = async (id) => {
    setIsLoading(true);

    try {
      const res = await axios.get(`${apiURL}/user/${id}`);
      const data = res.status ? res.data : res.statusText;
      const name = data?.data[0]?.name ?? "Unknown"; // api format

      setIsLoading(false);
      return name;
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  const register = async (userData) => {
    // Data validation
    setIsLoading(true);
    if (!userData.name) return;
    if (!userData.email) return;
    if (!userData.phone) return;
    if (!userData.password) return;
    if (!userData.password_confirmation) return;

    if (userData.password_confirmation !== userData.password) return;

    const rawData = JSON.stringify(userData);

    try {
      const res = await axios.post(`${apiURL}/register`, rawData, { headers });
      const data = res.status ? res.data : res.statusText;

      if (!res.status) return console.error("xd");

      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("name", userData.name);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  const login = async (userData) => {
    setIsLoading(true);

    if (!userData.email) return;
    if (!userData.password) return;

    const rawData = JSON.stringify(userData);

    try {
      const res = await axios.post(`${apiURL}/login`, rawData, { headers });
      const data = res.status ? res.data : res.statusText;

      if (!res.status) return console.error("xd");

      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("name", data.result.name);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  return {
    getNameById,
    isLoading,
    register,
    login,
  };
};

export default useUser;
