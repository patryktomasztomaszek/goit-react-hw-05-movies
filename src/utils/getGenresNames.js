export const getGenresNames = genresArray => {
  const genresNamesArray = genresArray.map(genre => genre.name);
  const genresString = genresNamesArray.join(', ');
  return genresString;
};
