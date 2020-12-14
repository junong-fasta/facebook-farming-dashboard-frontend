import styled from 'styled-components'
import { FormControl, Grid } from '@material-ui/core'

export const ModalRoot = styled.div`
    position: absolute;
    width: 530px;
    height: 680px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    padding: 1.5rem;
`

export const StyledFormControl = styled(FormControl)`
    width: 100%;
`

export const StyledGridContainer = styled(Grid)`
    width: 100%;
    height: 500px;
`

export const ViewContainer = styled.div`
    overflow: hidden;
`

export const DeviceListRoot = styled.div`
    overflow: hidden;
`