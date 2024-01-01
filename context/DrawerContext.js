import React, { createContext, useContext, useRef, useState } from 'react';

const GlobalContext = createContext( null );

export const GlobalContextProvider = ( { children } ) =>
{
    const [ Loggedin, setLoggedin ] = useState( true )
    return (
        <GlobalContext.Provider value={ { Loggedin, setLoggedin } }>
            { children }
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () =>
{
    return useContext( GlobalContext );
};
