import { ModalType } from "./type";

const initialState = {active: false}
function modalReducer(state = initialState, action){
    switch(action.type){
        case ModalType.SHOW_MODAL: 
            document.body.style.overflowY = 'hidden'
            return state = {active: true, obj: action.payload}
        case ModalType.HIDE_MODAL:
            document.body.style.overflowY = 'visible'
            return state = {active: false}
        default:
            return  state
    }
}

export default modalReducer