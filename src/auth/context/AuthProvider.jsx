import { useReducer } from "react"
import { AuthContex } from "./AuthContex"
import { AuthReducer1 } from "./AuthReducer1"
import { types } from "../types/types"

 const initialState={
    logged:false,

 }
const  init =()=>{
  const user = JSON.parse(localStorage.getItem('user'))
  return{
    logged: !!user,
    user:user, 
  }
 }
export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(AuthReducer1, initialState, init )



    const login=( name = '' )=>{
      const user={
        id:'ABC',
        name 
      }
      const action ={
        
        type:types.login,
        payload: user

      }
      localStorage.setItem('user',JSON.stringify(user));
      dispatch(action)
    }

    const logout=()=>{
      const action ={type: types.logout}
      localStorage.removeItem('user')
      dispatch(action)
    }
    
    
  return (
    <AuthContex.Provider value={{
      ...authState,
      login:login,
      logout:logout
    }}
      
      >
        {children}
    </AuthContex.Provider>
  )
}
