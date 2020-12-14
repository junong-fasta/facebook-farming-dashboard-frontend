import React from 'react'
import { Modal, Paper, Fade } from '@material-ui/core'
import { ModalRoot } from './modal-styled'
import ModalContent from './ModalContent'
import { ModalContext } from './context'

export interface ModalProps {
    open: boolean
    handleClose: () => void
}

function ModalContainer(props: ModalProps) {

    const {open, handleClose} = props

    return (
        <ModalContext.Provider value={props}>
            <Modal open={open} onClose={handleClose}>
                <Paper>
                    <ModalRoot>
                        <Fade in={open}>
                            <ModalContent />
                        </Fade>
                    </ModalRoot>
                </Paper>
            </Modal>
        </ModalContext.Provider>
    )
}

export default ModalContainer
