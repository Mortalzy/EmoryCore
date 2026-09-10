import { createContext } from "react";
import useFavorite from "../hooks/useFavorite";
import { EqualApproximately } from "lucide-react";

const FavoriteContext = createContext(null)

const FavoriteProvider = (props) => {
    const {
        children
    } = props

    const {
        favorites,
        setFavorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite
    } = useFavorite()

    return (
        <FavoriteContext.Provider
        value={{
            favorites,
            setFavorites,
            addFavorite,
            removeFavorite,
            toggleFavorite,
            isFavorite
        }}
        >
            {children}
        </FavoriteContext.Provider>
    )
}

export {
    FavoriteContext,
    FavoriteProvider,
}