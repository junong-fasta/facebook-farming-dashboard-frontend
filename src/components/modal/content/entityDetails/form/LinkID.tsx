import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledFormControl } from '../../../modal-styled'

function LinkID() {

    const [linkID, setLinkID] = useState("567689830695707")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLinkID(event.target.value)
    }

    return (
        <StyledFormControl>
            <TextField
                id="link-id"
                label="Link ID"
                value={linkID}
                onChange={handleChange}
                variant="outlined"
            />
        </StyledFormControl>
    )
}

export default LinkID
