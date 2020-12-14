import { InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledFormControl } from '../../../modal-styled'

function LinkType() {

    const [linkType, setLinkType] = useState("Group")

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLinkType(event.target.value as string)
    }

    return (
        <StyledFormControl>
            <InputLabel id="demo-simple-select-label">Link type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={linkType}
                onChange={handleChange}
            >
                <MenuItem value={10}>Group</MenuItem>
                <MenuItem value={10}>Page</MenuItem>
                <MenuItem value={10}>Keyword</MenuItem>
            </Select>
        </StyledFormControl>
    )
}

export default LinkType
