import React from 'react'
import { ViewContainer } from '../../modal-styled'
import Devices from './devices'

interface DevicesViewProps {
    index: number
    value: number
}

function DevicesView(props: DevicesViewProps) {
    const { index, value } = props
    return (
        <ViewContainer>
            {index === value && (
                <Devices />
            )}
        </ViewContainer>
    )
}

export default DevicesView
