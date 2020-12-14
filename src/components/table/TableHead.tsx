import { TableHead, TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import { Data, Order } from '../../interface'

interface HeadCell {
    id: keyof Data
    label: string
}

const headCells: HeadCell[] = [
    { id: "linkType", label: "Link type" },
    { id: "groupType", label: "Group type" },
    { id: "region", label: "Region" },
    { id: "name", label: "Name" },
    { id: "urlName", label: "URL Name" },
    { id: "linkID", label: "Link ID" },
    { id: "dateAdded", label: "Date added" },
    { id: "lastLoaded", label: "Last loaded" },
    { id: "devices", label: "Devices" },
    { id: "pendingDevice", label: "Pending Device" }
]

interface DashboardHeadProps {
    orderBy: keyof Data
    order: Order
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
}

function DashboardHead({ orderBy, order, onRequestSort }: DashboardHeadProps) {

    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property)
    }

    return (
        <TableHead>
            <TableRow>
                {headCells.map(headCell => (
                    <TableCell>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            <b>{headCell.label}</b>
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default DashboardHead
