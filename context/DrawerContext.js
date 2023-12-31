import React, { createContext, useContext, useRef } from 'react';

const DrawerContext = createContext( null );

export const DrawerProvider = ( { children } ) =>
{
    const drawerRef = useRef( null );

    const setDrawerRef = ( ref ) =>
    {
        drawerRef.current = ref;
    };

    const openDrawer = () =>
    {
        if ( drawerRef.current && drawerRef.current.openDrawer )
        {
            drawerRef.current.openDrawer();
        }
    };

    return (
        <DrawerContext.Provider value={ { setDrawerRef, openDrawer } }>
            { children }
        </DrawerContext.Provider>
    );
};

export const useDrawer = () =>
{
    const context = useContext( DrawerContext );
    if ( !context )
    {
        throw new Error( 'useDrawer must be used within a DrawerProvider' );
    }
    return context;
};
