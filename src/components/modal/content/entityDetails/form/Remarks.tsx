import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledFormControl } from '../../../modal-styled'

function Remarks() {

    const [remarks, setRemarks] = useState("")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRemarks(event.target.value)
    }

    return (
        <StyledFormControl>
            <TextField
                id="region"
                label="Remarks"
                value={remarks}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
            />
        </StyledFormControl>
    )
}

export default Remarks
