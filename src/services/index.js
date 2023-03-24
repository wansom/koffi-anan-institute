

import axios from "axios";


const generateToken = async () => {
  const username = "admin";
  const password = "w5JuGaDmaXa@D$KFQ8";

  try {
    const response = await axios.post(
      "https://kacit.twafwane.com/wp-json/jwt-auth/v1/token",
      {
        username,
        password,
      }
    );
    const token = response.data.data.token;
    console.log(token)
    localStorage.setItem("jwtToken", token);
    return token;
  } catch (error) {
    console.error(error);
  }
};
export const getData = async (url) => {
  generateToken()
  const token = localStorage.getItem("jwtToken");

  return fetch(url,  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};
export const submitForm = async (data) => {
  generateToken()
  const token = localStorage.getItem("jwtToken");

  return axios
    .post("https://kacit.twafwane.com/wp-json/wp/v2/messages", data,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};
