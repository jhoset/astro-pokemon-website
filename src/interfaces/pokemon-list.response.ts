interface PokemonListResponse {
    count: number;
    next: string;
    previous?: any;
    results: PokemonData[];
}
interface PokemonData {
    name: string;
    url: string;
}