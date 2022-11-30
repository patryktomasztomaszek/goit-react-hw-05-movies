const IMAGE_BASEURL_SMALL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
const IMAGE_BASEURL_BIG = 'https://image.tmdb.org/t/p/w500/';

export const getimageUrl = imageUrl => IMAGE_BASEURL_SMALL + imageUrl;
export const getBigImageUrl = imageUrl => IMAGE_BASEURL_BIG + imageUrl;
