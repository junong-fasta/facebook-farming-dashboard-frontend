import { Box } from '@material-ui/core'
import React from 'react'
import { DeviceContainer } from '../../../modal-styled'
import DeviceItem from './DeviceItem'


const demo = [
    {
        id: "DESKTOP-74S58MU",
        name: "Chuchu",
        status: "joined"
    },
    {
        id: "DESKTOP-74S59MU",
        name: "DaLaw",
        status: "pending"
    },
    {
        id: "DESKTOP-74S60MU",
        name: "Jane",
        status: "pending"
    },
    {
        id: "DESKTOP-74S61MU",
        name: "Jenny",
        status: "joined"
    },
    {
        id: "DESKTOP-74S62MU",
        name: "Heidi",
        status: "joined"
    }
]
function Devices() {
    return (
        <Box display="flex" flexDirection="column" width="100%">
            {demo.map(data => (
                <DeviceItem
                    id={data.id}
                    name={data.name}
                    status={data.status}
                />
            ))}
        </Box>
    )
}

export default Devices
