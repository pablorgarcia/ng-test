export interface Film {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  link?: string;
  genres?: {id: number; name:string}[];
  spoken_languages?: {english_name: string; iso_639_1: string; name: string}[];
  favourite?: boolean;
}
