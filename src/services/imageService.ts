import axios from "axios";

export interface ImageModel {
  download_url: string;
  author: string;
  width: number;
  height: number;
}

const api_url = "https://picsum.photos/v2/list?limit=10";

export const getImages = async (): Promise<ImageModel[]> => {
  const response = await axios.get<ImageModel[]>(api_url);
  return response.data;
};
