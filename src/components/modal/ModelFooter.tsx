import { Box, Button } from '@material-ui/core'
import React from 'react'

function ModelFooter() {
    return (
        <Box flexDirection="row" justifyContent="space-between">
            <Button variant="contained" color="secondary">Delete group</Button>
            <Button variant="contained" color="primary">Save changes</Button>
        </Box>
    )
}

export default ModelFooter
