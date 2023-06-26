import { UIContex } from '@/context/ui'
import { MenuOpenOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { useContext } from 'react'

export const Navbar = () => {

  const {openSideMenu} = useContext(UIContex)

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          onClick={openSideMenu}
        >
          <MenuOpenOutlined />
        </IconButton>
        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
