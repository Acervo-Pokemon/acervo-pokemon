import AsyncStorage from '@react-native-async-storage/async-storage';

const name = '@favorites'

export async function isFavorite(data) {
    try {
        let favorites = await getAllFavorite();
        console.log(favorites)
        if (favorites.length == 0) {
            return false;
        }
        const url = data.url.replace('-form', '');
        return favorites.filter((value) => value.url === url).length > 0
    } catch (error) {
        throw error
    }
}

export async function getAllFavorite() {
    try {
        let favorites = JSON.parse(await AsyncStorage.getItem(name));
        if (favorites == null) {
            return [];
        }
        return favorites;
    } catch (error) {
        throw error
    }
}

export async function saveFavorite(data) {
    try {
        //GAMBIARRA
        //await AsyncStorage.clear()
        let favorites = await getAllFavorite();
        const url = data.url.replace('-form', '');
        (await isFavorite(data) ? favorites = favorites.filter((value) => value.url !== url) : favorites.push({ url: url, name: data.name }));
        await AsyncStorage.setItem(name, JSON.stringify(favorites));
    } catch (error) {
        throw error
    }
}
