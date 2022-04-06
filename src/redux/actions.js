import { ModalType } from "./type";

export const showModal = obj => ( {type: ModalType.SHOW_MODAL, payload: obj} )
export const hideModal = () => ( {type: ModalType.HIDE_MODAL} )