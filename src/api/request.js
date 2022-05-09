const APIkey = process.env.REACT_APP_API_KEY;

export const title = {
  1: 'Trending',
  2: 'Popular',
  3: 'TopRated',
  4: 'Upcoming',
  5: 'NetflixPopular',
  6: 'AmazonPopular',
  7: 'Action',
  8: 'Sifi',
  9: 'Horror',
  10: 'Comedy',
  11: 'ActionAdventure',
  12: 'Drama',
  13: 'Kids',
  14: 'Crime',
  15: 'Kannada',
  16: 'Tamil',
  17: 'Hindi',
  18: 'Telugu',
  19: 'TopHindi',
  20: 'Recommendations'
}

const request = {
  originalImage: (imagePath) =>
    `https://image.tmdb.org/t/p/original${imagePath}`,
  w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500${imagePath}`,
  Search: (query) => `/search/multi?api_key=${APIkey}&query=${query}`,
  GetData: (type, id) => `/${type}/${id}?api_key=${APIkey}&append_to_response=credits,videos,images,recommendations,reviews`,
  GetCastData: (type, id) => `/${type}/${id}?api_key=${APIkey}`,
  GetWatchProvider: (type,id) => `/${type}/${id}/watch/providers?api_key=${APIkey}&append_to_response=credits,videos,images,similar,reviews`,
  Recommendations: (type, id) => `/${type}/${id}/recommendations?api_key=${APIkey}`,
  Trending: (page='1') => `/trending/all/day?api_key=${APIkey}&${page}`,
  Popular: (type, page='1') => `/${type}/popular?api_key=${APIkey}&${page}`,
  TopRated: (type, page='1') => `/${type}/top_rated?api_key=${APIkey}&${page}`,
  Upcoming: (type, page='1') => `/${type}/upcoming?api_key=${APIkey}&language=en-US&${page}`,
  AmazonPopular: (type, page='1') => `${type}/popular?api_key=${APIkey}&${page}&with_watch_providers=119&watch_region=IN`,
  NetflixPopular: (type, page='1') => `${type}/popular?api_key=${APIkey}&${page}&with_watch_providers=8&watch_region=IN`,
  Action: (type, page='1') => `${type}/popular?api_key=${APIkey}&${page}&with_genres=28`,
  Horror: (type, page='1') => `${type}/popular?api_key=${APIkey}&${page}&with_genres=27`,
  Sifi: (type, page='1') => `${type}/popular?api_key=${APIkey}&${page}&with_genres=10765`,
  Comedy: (type, page='1') => `${type}/popular?api_key=${APIkey}&${page}&with_genres=35`,
  ActionAdventure: (type, page='1') => `${type}/popular?api_key=${APIkey}&${page}&with_genres=10759`,
  Kannada: (type, page='1') => `/${type}/popular?api_key=${APIkey}&${page}&with_original_language=kn`,
  Tamil: (type, page='1') => `/${type}/popular?api_key=${APIkey}&${page}&with_original_language=ta`,
  Telugu: (type, page='1') => `/${type}/popular?api_key=${APIkey}&${page}&with_original_language=te`,
  Hindi: (type, page='1') => `/${type}/popular?api_key=${APIkey}&${page}&with_original_language=hi`,
  TopHindi: (type, page='1') => `/${type}/top_rated?api_key=${APIkey}&${page}&with_original_language=hi`
};
export default request;

// https://api.themoviedb.org/3/movie/latest?api_key=6fc42313429744c937a99f3eb98840c5
