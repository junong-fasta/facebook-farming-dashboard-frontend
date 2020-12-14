import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledFormControl } from '../../../modal-styled'

function URLName() {

    const [urlName, setURLName] = useState("HK")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setURLName(event.target.value)
    }

    return (
        <StyledFormControl>
            <TextField
                id="url-name"
                label="URL name"
                value={urlName}
                onChange={handleChange}
                variant="outlined"
            />
        </StyledFormControl>
    )
}

export default URLName
