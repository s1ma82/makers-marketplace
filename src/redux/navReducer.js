import { NavType } from "./type";

export const navReducer = (state = {home: true}, action) => {
    const {type, payload} = action
    if(type === NavType.ACTIVE_ITEM){
        return state = payload
    } else{
        return state
    }
    // switch(action.type){
    //     case NavType.ACTIVE_ITEM:
    //         const {payload} = action 
    //         return state = {payload: true}
    //     default: 
    //         break
    // }
}