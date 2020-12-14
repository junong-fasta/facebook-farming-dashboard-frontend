import { TableBody, TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { Data, Order } from '../../interface'
import { getComparator, stableSort } from '../../tools/helper'

interface DashboardBodyProps {
    data: Data[]
    order: Order
    orderBy: keyof Data
}

function DashboardBody({ data, order, orderBy }: DashboardBodyProps) {
    return (
        <TableBody>
            {stableSort(data, getComparator(order, orderBy))
                .map((row) => (
                    <TableRow key={row.name} hover={true}>
                        <TableCell>{row.linkType}</TableCell>
                        <TableCell>{row.groupType}</TableCell>
                        <TableCell>{row.region}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.urlName}</TableCell>
                        <TableCell>{row.linkID}</TableCell>
                        <TableCell>{row.dateAdded}</TableCell>
                        <TableCell>{row.lastLoaded}</TableCell>
                        <TableCell>{row.devices}</TableCell>
                        <TableCell>{row.pendingDevice}</TableCell>
                    </TableRow>
                ))}
        </TableBody>
    )
}

export default DashboardBody
