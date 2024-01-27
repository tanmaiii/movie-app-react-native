const apikey: string = "19f819fe84c8a3dfc509667bab3208c6";

//API HÌNH ẢNH
export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// PHIM ĐANG CHIẾU
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=vi`;
// PHIM MỚI
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=vi`;
// PHIM PHỔ BIẾN
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=vi`;
// TÌM KIẾM
export const searchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=vi&query=${keyword}`;
};

// Chi tiết phim
export const movieDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=vi`;
};

//Chi tiết diễn viên
export const movieCastDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=vi`;
};
