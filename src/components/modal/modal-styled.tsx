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

export const DeviceContainer = styled.div`
    overflow: hidden;
`

export const DeviceItemRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: white;
    &:nth-child(odd) {
        background-color: #F1F1F1;
    }
`

export const DeviceName = styled.p`
    font-size: 1rem;
    font-weight: 500;
    margin: 0px;
    width: 100px;
`

export const DeviceId = styled.p`
    font-size: 0.8rem;
    font-weight: 500;
    color: darkgrey;
    margin: 0px;
`

export const DeviceStatusRoot = styled.button<{ isJoined: boolean }>`
    background-color: ${props => props.isJoined ? "blue" : "yellow"};
    border: none;
    color: white;
    width: 80px;
    height: 25px;
    border-radius: 12.5px;
    margin-right: 1rem;
    &:focus {
        outline: none;
    }
`