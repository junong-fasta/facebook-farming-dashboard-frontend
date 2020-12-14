import React from 'react'
import { DeviceStatusRoot } from '../../../modal-styled'

interface DeviceStatusProps {
    isJoined: boolean
}

function DeviceStatus({ isJoined }: DeviceStatusProps) {
    return (
        <DeviceStatusRoot isJoined={isJoined}>
            {isJoined ? "JOINED" : "PENDING"}
        </DeviceStatusRoot>
    )
}

export default DeviceStatus
