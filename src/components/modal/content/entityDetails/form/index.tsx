import { Grid } from '@material-ui/core'
import React from 'react'
import { StyledGridContainer } from '../../../modal-styled'
import GroupName from './GroupName'
import GroupType from './GroupType'
import LinkID from './LinkID'
import LinkType from './LinkType'
import Region from './Region'
import Remarks from './Remarks'
import UpdateFrequency from './UpdateFrequency'
import URLName from './URLName'

function Form() {
    return (
        <StyledGridContainer
            container
            alignItems="flex-start"
            spacing={1}
        >
            <Grid item xs={6}>
                <LinkType />
            </Grid>
            <Grid item xs={6}>
                <GroupType />
            </Grid>
            <Grid item xs={12}>
                <GroupName />
            </Grid>
            <Grid item xs={6}>
                <LinkID />
            </Grid>
            <Grid item xs={6}>
                <URLName />
            </Grid>
            <Grid item xs={6}>
                <Region />
            </Grid>
            <Grid item xs={6}>
                <UpdateFrequency />
            </Grid>
            <Grid item xs={12}>
                <Remarks />
            </Grid>
        </StyledGridContainer>
    )
}

export default Form
