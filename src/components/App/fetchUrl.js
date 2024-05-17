import axios from "axios";

const base_url = "https://api.unsplash.com/search/photos";
export async function fetchUrl(query, currentPage) {
  const request = await axios.get(base_url, {
    params: {
      query,
      client_id: "XbEzgTe3A55YTBOI5LiRQJ_RvaA7WINsmdl_3TcKoPA",
      per_page: 10,
      page: currentPage,
    },
  });
  return request.data;
}
