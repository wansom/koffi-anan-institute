

import axios from "axios";

export const generateToken = async () => {
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
    
    localStorage.setItem("jwtToken", token);
    return token;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const getData = async (url) => {
  let token = localStorage.getItem("jwtToken");
  console.log(token,"found this token");
  // Check if the token is not available or expired
  if (!token) {
    try {
      // Generate a new token
      token = await generateToken();
    } catch (error) {
      console.error("Failed to generate token:", error);
      // Handle the error, perhaps by showing an error message to the user
      return;
    }
  }

  try {
    // Now that we have the token, fetch the data
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    // Handle the error, perhaps by showing an error message to the user
  }
};

export const submitForm = async (data) => {
  generateToken()
  const token = localStorage.getItem("jwtToken");

  return axios
    .post("https://kacit.twafwane.com/wp-json/wp/v2/messages", data, {
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
