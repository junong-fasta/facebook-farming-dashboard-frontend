import React, { useState } from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import { Paper } from '@material-ui/core'
import { rows } from './data'
import DashboardHead from './TableHead'
import { Data, Order } from '../../interface'
import DashboardBody from './TableBody'

function Dashboard() {
    const [order, setOrder] = useState<Order>('asc')
    const [orderBy, setOrderBy] = useState<keyof Data>("name")

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    return (
        <TableContainer component={Paper}>
            <Table size="small" stickyHeader >
                <DashboardHead
                    orderBy={orderBy}
                    order={order}
                    onRequestSort={handleRequestSort}
                />
                <DashboardBody
                    data={rows}
                    order={order}
                    orderBy={orderBy}
                />
            </Table>
        </TableContainer>
    )
}

export default Dashboard
