import React from 'react'
import { ViewContainer } from '../../modal-styled'
import Form from './form'

interface BasicInformationViewProps {
    index: number
    value: number
}

function BasicInformationView(props: BasicInformationViewProps) {
    const { index, value } = props

    return (
        <ViewContainer>
            {index === value && (
                <Form />
            )}
        </ViewContainer>
    )
}

export default BasicInformationView
