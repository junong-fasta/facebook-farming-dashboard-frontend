import { InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledFormControl } from '../../../modal-styled'

function GroupType() {

    const [GroupType, setGroupType] = useState("Group")

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGroupType(event.target.value as string)
    }
    
    return (
        <StyledFormControl>
            <InputLabel id="demo-simple-select-label">Group type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={GroupType}
                onChange={handleChange}
            >
                <MenuItem value={10}>Public</MenuItem>
                <MenuItem value={20}>Private</MenuItem>
            </Select>
        </StyledFormControl>
    )
}

export default GroupType
