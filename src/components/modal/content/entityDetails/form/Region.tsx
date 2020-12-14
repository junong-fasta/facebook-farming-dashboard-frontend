import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledFormControl } from '../../../modal-styled'

function Region() {

    const [region, setRegion] = useState("HK")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value)
    }

    return (
        <StyledFormControl>
            <TextField
                id="region"
                label="Region"
                value={region}
                onChange={handleChange}
                variant="outlined"
            />
        </StyledFormControl>
    )
}

export default Region
