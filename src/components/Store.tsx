import React, {Dispatch, createContext, ReactElement, useReducer, useContext} from 'react'
import Project from "../types/Project";

interface Store {
  favorites: Project[]
}

export const initialStore: Store = {
  favorites: [],
}

interface AddToFavorite {
  type: 'ADD_TO_FAVORITE';
  project: Project;
}

interface RemoveFromFavorite {
  type: 'REMOVE_FROM_FAVORITE';
  project: Project;
}

export type Actions = AddToFavorite | RemoveFromFavorite

export function reducer(store: Store, action: Actions): Store {
  switch (action.type) {
  case 'ADD_TO_FAVORITE': {
    return {
      ...store,
      favorites: [...store.favorites, action.project],
    }
  }
  case 'REMOVE_FROM_FAVORITE': {
    const index = store.favorites.map(favorite => favorite.id).indexOf(action.project.id)
    return {
      ...store,
      favorites: store.favorites.filter((favorite, i) => i !== index)
    }
  }
  }
}

interface ContextProps {
  store: Store
  dispatch: Dispatch<Actions>
}

export const StoreContext = createContext({} as ContextProps)

export function useStore(): ContextProps {
  return useContext(StoreContext)
}

export function StoreProvider(props: {children: ReactElement}): ReactElement {
  const [store, dispatch] = useReducer(reducer, initialStore)
  return (
    <StoreContext.Provider value={{store, dispatch}}>
      {props.children}
    </StoreContext.Provider>
  )
}
