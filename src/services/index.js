

import axios from "axios";


const generateToken = async () => {
  const username = "webuser";
  const password = "J*(Kx6ev8Zm4x@L)^CY05cgr";

  try {
    const response = await axios.post(
      "https://kacit.twafwane.com/wp-json/jwt-auth/v1/token",
      {
        username,
        password,
      }
    );
    const token = response.data.data.token;
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


export const getPosts=async(url)=>{
  fetch(url)
  .then(response => response.json())
  .then(posts => {
    const promises = posts.map(post => {
      return fetch(`https://kacit.twafwane.com/wp-json/wp/v2/media/${post.featured_media}`)
        .then(response => response.json())
        .then(media => {
          post.featured_image_url = media.source_url;
          return post;
        });
    });
    return Promise.all(promises);
  })

}
