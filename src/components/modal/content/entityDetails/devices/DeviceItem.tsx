import { Box } from '@material-ui/core'
import React from 'react'
import { DeviceId, DeviceItemRoot, DeviceName } from '../../../modal-styled'
import CancelIcon from '@material-ui/icons/Cancel'
import DeviceStatus from './DeviceStatus'

interface DeviceItemProps {
    id: string
    name: string
    status: string
}

function DeviceItem(props: DeviceItemProps) {
    return (
        <DeviceItemRoot>
            <Box display="flex" alignItems="center">
                <DeviceName>{props.name}</DeviceName>
                <DeviceId>{props.id}</DeviceId>
            </Box>
            <Box display="flex" alignItems="center">
                <DeviceStatus isJoined={props.status === "joined"} />
                <CancelIcon />
            </Box>
        </DeviceItemRoot>
    )
}

export default DeviceItem
