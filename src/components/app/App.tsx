import React, { useState } from 'react'
import Modal from "../modal/ModalContainer"
import Container from '@material-ui/core/Container'
import SelectBar from '../header/SelectBar'
import Table from '../table/Table'

function App() {

  const [open, setOpen] = useState(false)

  return (
    <Container>
      <button onClick={() => setOpen(true)}>test</button>
      <SelectBar />
      <Table />
      <Modal open={open} handleClose={() => setOpen(false)} />
    </Container>
  )
}

export default App
