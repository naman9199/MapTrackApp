import React, { useReducer } from 'react'

export default (reducer, action, defaultState) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultState)
        const boundAction = {}
        for (let key in action) {
            boundAction[key] = action[key](dispatch) // function like addBlogPost(dispatch) or removeBlogPost(dispatch)
            // bound action main use is to provide the visibility of the dispatch function to the function that are defined in the other file like signin signup and signout....
        }

        return (
            <Context.Provider value={{ state, ...boundAction }} >
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}