import { Box } from '@material-ui/core'
import React from 'react'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'
import ModelFooter from './ModelFooter'

function ModalContent() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height={1}
        >
            <Box>
                <ModalHeader title="test" />
                <ModalBody />
            </Box>
            <ModelFooter />
        </Box>
    )
}



export default ModalContent

