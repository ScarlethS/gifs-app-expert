import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifts';

const useFetchGifs = (  category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
    console.log(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading
  }
}

export default useFetchGifs
