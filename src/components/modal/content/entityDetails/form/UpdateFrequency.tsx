import { InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledFormControl } from '../../../modal-styled'

function UpdateFrequency() {

    const [UpdateFrequency, setUpdateFrequency] = useState("Group")

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setUpdateFrequency(event.target.value as string)
    }

    return (
        <StyledFormControl>
            <InputLabel id="demo-simple-select-label">Update frequency</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={UpdateFrequency}
                onChange={handleChange}
            >
                <MenuItem value={10}>Every 2 hour</MenuItem>
                <MenuItem value={20}>Every hour</MenuItem>
                <MenuItem value={30}>Every 15 mins</MenuItem>
            </Select>
        </StyledFormControl>
    )
}

export default UpdateFrequency
