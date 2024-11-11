import type {FavoritePokemon} from "../../interfaces/favorite-pokemon.ts";
import {createSignal, For} from "solid-js";
import {FavoritePokemonCard} from "@components/pokemons/FavoritePokemonCard.tsx";

const getLocalStoragePokemons = () => {
    const favoritePokemonsStorageKey = 'favorite-pokemons';
    let favoritePokemons: FavoritePokemon[] = JSON.parse(localStorage.getItem(favoritePokemonsStorageKey) || '[]');

    return favoritePokemons;
}

export const FavoritePokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <For each={pokemons()}>
                {
                    pokemon => <FavoritePokemonCard pokemon={pokemon} />
                }
            </For>
        </div>
    )
}