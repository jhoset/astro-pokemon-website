import type {FavoritePokemon} from "../../interfaces/favorite-pokemon.ts";
import {type Component, createSignal, Show} from "solid-js";

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {
    const favoritePokemonsStorageKey = 'favorite-pokemons';
    const [isVisible, setIsVisible] = createSignal(true);

    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favorites: FavoritePokemon[] = JSON.parse(localStorage.getItem(favoritePokemonsStorageKey) || '[]');
        const newFavorites = favorites.filter((p) => p.id !== pokemon.id);
        localStorage.setItem(favoritePokemonsStorageKey, JSON.stringify(newFavorites));
        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">
                <a href={`/pokemons/${pokemon.name}`} class="p-4">
                    <div class="flex justify-center items-center">
                        <img src={imgSrc} alt={pokemon.name} class="w-20 h-20 rounded-xl"
                             style={{filter: 'drop-shadow(0 0 10px rgb(0, 0, 0))', "view-transition-name": `${pokemon.id}-image`}}/>
                    </div>
                    <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
                </a>
                <button onClick={deleteFavorite} class="text-red-500 w-full"> Remove</button>
            </div>
        </Show>

    )
}