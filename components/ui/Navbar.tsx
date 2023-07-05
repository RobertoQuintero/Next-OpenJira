import { UIContex } from '@/context/ui'
import { MenuOpenOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import NextLink from 'next/link'
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
        <NextLink href='/' passHref >
          <Link underline='none' color='white'>
            <Typography variant='h6'>OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
