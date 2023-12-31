import { Box } from "@mui/material"
import Head from "next/head"
import { Navbar, Sidebar } from "../ui"

type Props={
  title?:string
  children:JSX.Element | JSX.Element[]
}
export const Layout = ({title='OpenJira',children}:Props) => {

  return (
    <Box sx={{flexGrow:1}}>
      <Head>
          <title>{title}</title>
      </Head>
      <Navbar/>
      <Sidebar />
      <Box sx={{padding:'10px 20px'}}>
        {children}
      </Box>
    </Box>
  )
}
