export default function useMovieData(rawData) {
  let names = [];
  let boxOffices = [];
  rawData.forEach((movie) => {
    names.push(movie?.name);
    boxOffices.push(movie?.boxOffice);
  });

  return { names, boxOffices };
}
