import axiosClient from "./axiosClient";

const publicApi = {
  getCategories: () => {
    let url = "/categories";
    return axiosClient.get(url);
  },
  uploadMovie:(formData) =>{
    let url = '/movies/upload';
    return axiosClient.post(url,formData);
  }
};

export default publicApi;
