import React from 'react'
import { StyledGridContainer, ViewContainer } from '../../modal-styled'

interface DevicesViewProps {
    index: number
    value: number
}

function DevicesView(props: DevicesViewProps) {
    const { index, value } = props
    return (
        <ViewContainer>
            {index === value && (
                <StyledGridContainer         
                    container
                    alignItems="flex-start"
                    spacing={1}
                >
                    Gogogoggo
                </StyledGridContainer>
            )}
        </ViewContainer>
    )
}

export default DevicesView
