import { InboxOutlined, MailOutlined } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"

const menuItems:string[]=['Inbox','Starred','Send Email','Drafts',]

export const Sidebar = () => {
  return (
    <Drawer
      anchor="left"
      open={true}
      onClose={()=>console.log('Cerrando')}
    >
      <Box sx={{width:250}}>
        <Box sx={{padding:'5px 10px'}}>
          <Typography variant='h4'>Menú</Typography>
        </Box> 
        <List>
          {menuItems.map((text,index)=>(
            <ListItemButton key={text}>
              <ListItemIcon>
                {
                  index%2 ?<InboxOutlined/>:<MailOutlined/>
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
        <Divider/>
        <List>
          {menuItems.map((text,index)=>(
            <ListItemButton key={text}>
              <ListItemIcon>
                {
                  index%2 ?<InboxOutlined/>:<MailOutlined/>
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
