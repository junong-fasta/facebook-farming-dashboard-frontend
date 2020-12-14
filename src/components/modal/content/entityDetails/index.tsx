import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@material-ui/core'
import BasicInformationView from './BasicInformationView'
import DevicesView from './DevicesView'
import SwipeableViews from 'react-swipeable-views'

function EntityDetails() {

    const [value, setValue] = useState(0)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index: number) => {
        setValue(index)
    }

    return (
        <Box mb={4}>
            <Box mb={2}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs"
                >
                    <Tab label="Basic Info" disableRipple={true} />
                    <Tab label="Devices" disableRipple={true} />
                </Tabs>
            </Box>
            <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <BasicInformationView value={value} index={0} />
                <DevicesView value={value} index={1} />
            </SwipeableViews>
        </Box>
    )
}

export default EntityDetails
