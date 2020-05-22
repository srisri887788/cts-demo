import React, {createContext} from 'react';
import useAPI from "../hooks/useAPI";

export const PromotionsContext = createContext();
export const PromotionsProvider = props => {

    return(
        <PromotionsContext.Provider value={{...useAPI()}}>
            {props.children}
        </PromotionsContext.Provider>
    )
}