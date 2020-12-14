import React, { useContext } from 'react'
import { Box, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { ModalContext } from './context'

interface ModalHeaderProps {
    title: string
}

function ModalHeader({ title }: ModalHeaderProps) {

    const { handleClose } = useContext(ModalContext)

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5" component="h1">
                {title}
            </Typography>
            <CloseIcon onClick={handleClose} />
        </Box>
    )
}

export default ModalHeader
