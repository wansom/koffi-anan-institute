export const getData=async(url)=>{
    return  fetch(url)
    .then((response) => {
      return response.json();
    })
}