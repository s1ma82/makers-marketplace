import { ModalType, NavType } from "./type";

export const showModal = obj => ( {type: ModalType.SHOW_MODAL, payload: obj} )
export const hideModal = () => ( {type: ModalType.HIDE_MODAL} )

export const activeNavItem = item => ({type: NavType.ACTIVE_ITEM, payload: item})