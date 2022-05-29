import {createContext, useReducer} from "react"
import { createDispatchHook } from "react-redux"
import githubReducer from "./GithubReducers"

const GithubContext = createContext()

 const GITHUB_URL =  'https://api.github.com/search/users?'
 const GITHUB_USER = 'https://api.github.com/users/'
 const GITHUB_TOKEN  = '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'

//provider function always needs to be exported, takes props
 export const GithubProvider = ({children}) => {
    const initialState ={
        users: [],
        repos: [],
        user: {},
        loading: false
    }
    // userReducer takes the  reducer function we mae and the inital state
    const [state, dispatch] = useReducer(githubReducer, initialState)


    const clearUsers = () => dispatch({
        type: 'CLEAR_USERS',
       
    
    })
        
        

    const searchUsers = async (text) => {
    setLoading()
    const params = new URLSearchParams({
        q:text
    })

    const response = await fetch(`${GITHUB_URL}${params}`, 
    { headers:{
        Authorization: `token ${GITHUB_TOKEN}`
    }
    }
    )
    const {items} = await response.json()
    // takes and action
    dispatch({ 
        type: 'GET_USERS',
        payload: items,
    })
    }

    // get one user
    const getUser = async (login) => {
        setLoading()
      
    
        const response = await fetch(`${GITHUB_USER}${login}`, 
        { headers:{
            Authorization: `token ${GITHUB_TOKEN}`
        }
        }
        )


        if(response.status === 404 ){
            window.location = '/notfound'
        } else {
            const data = await response.json()
            // takes and action
            dispatch({ 
                type: 'GET_USER',
                payload: data,
            })
    
            
        }
       
        }
    // getRepos
        const getRepos = async (login) => {
            setLoading()

            const params = new URLSearchParams({
                sort: 'created',
                per_page: 10,
            })
          
        
            const response = await fetch(`${GITHUB_USER}${login}/repos?${params}`, 
            { headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
            }
            )
            const data = await response.json()
            console.log(data)
            // takes and action
            dispatch({ 
                type: 'GET_REPOS',
                payload: data,
            })
            }

    // set loading
const setLoading = () => dispatch({type: 'SET_LOADING'})


    return <GithubContext.Provider value= {{
        users: state.users, // from the useReducer
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
    }}>{children}</GithubContext.Provider>

 }

 export default GithubContext