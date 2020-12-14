import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { StyledFormControl } from '../../../modal-styled'

function GroupName() {

    const [GroupName, setGroupName] = useState("HK")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGroupName(event.target.value)
    }

    return (
        <StyledFormControl>
            <TextField
                id="group-name"
                label="Group name"
                value={GroupName}
                onChange={handleChange}
                variant="outlined"
            />
        </StyledFormControl>
    )
}

export default GroupName
