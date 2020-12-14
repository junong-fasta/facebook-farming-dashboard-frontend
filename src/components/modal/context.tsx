import { createContext } from "react"
import { ModalProps } from "./ModalContainer"

const defaultValue: ModalProps = {
    open: false,
    handleClose: () => { }
}

export const ModalContext = createContext<ModalProps>(defaultValue)