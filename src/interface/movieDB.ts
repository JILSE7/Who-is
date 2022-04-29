export interface MovieResponse {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for:            IMovie[];
    known_for_department: string;
    name:                 string;
    popularity:           number;
    profile_path:         string;
}

export interface IMovie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    media_type:        string;
    original_language: string;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}
