import AsyncStorage from '@react-native-async-storage/async-storage';

const listName = 'favorites'
export async function findAllFavorites() {
    //Buscando o dado que salvos 
    try {
        var favorites = [];
        await AsyncStorage.getItem(listName).then((value) => {
            if (value == null) {
                value = favorites;
                setlistName(favorites);
            }
            favorites = value;
        })
        return favorites;
    } catch (error) {
        throw (error)
    }
}

export async function isFavorite(pPokemonUrl) {
    try {
        var favorites = JSON.parse(await findAllFavorites());
        var len = favorites.filter(pokemonUrl => pokemonUrl === pPokemonUrl).length
        return len > 0;
    } catch (error) {
        throw (error)
    }
}
export async function setFavorite(pPokemonUrl) {
    try {
        var favorites = JSON.parse(await findAllFavorites());
        if (await isFavorite(pPokemonUrl)) {
            var favorites =  favorites.filter(pokemonUrl => pokemonUrl !== pPokemonUrl);
            setlistName(favorites);  
            return;
        }
        favorites.push(pPokemonUrl);
        setlistName(favorites);        
        console.log(favorites)
    } catch (error) {
        throw (error)
    }
}
export async function setlistName(pListName) {
    try {
        await AsyncStorage.setItem(listName, JSON.stringify(pListName))
    } catch (error) {
        throw (error)
    }
}