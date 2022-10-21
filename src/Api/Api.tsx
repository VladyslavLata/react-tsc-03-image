import axios from 'axios';
import { IDataImages } from "../types/types";

axios.defaults.baseURL = 'https://pixabay.com';

export const searchImages = async (searchQuery: string, page: number) => {
  const params = {
    params: {
      key: '28341788-9e42159be3be8e53d709707ca',
      q: `${searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      page: `${page}`,
      per_page: 12,
    },
  };

  const response = await axios.get('/api/', params);

  return response.data as IDataImages;
};
