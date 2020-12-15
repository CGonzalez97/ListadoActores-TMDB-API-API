export interface Peliculas {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    adult?: boolean;
    original_title: string;
    release_date: string;
    title: string;
    video?: boolean;
}

export interface Actor {
    adult: boolean;
    gender: number;
    id: number;
    known_for: Peliculas[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export interface ListaActores {
    page: number;
    results: Actor[];
    total_pages: number;
    total_results: number;
}