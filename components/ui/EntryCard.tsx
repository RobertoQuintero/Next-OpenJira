import { Entry } from '@/interfaces'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent } from 'react'
interface Props{
  entry:Entry
}

export const EntryCard = ({entry}:Props) => {

  const onDragStart=(event:DragEvent<HTMLDivElement>)=>{
    console.log(event)
    event.dataTransfer.setData('text',entry._id)
    //todo: modificar el estado si estoy haciendo drag
  }

  const onDragEnd=()=>{
    //todo: cancelar on drag
  }

  return (
    <Card 
    sx={{marginBottom:1}}
    draggable
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{display:'flex',justifyContent:'end',paddingRight:2}}>
          <Typography variant='body2'>Hace 30 mins</Typography>
        </CardActions>
      </CardActionArea>

    </Card>
  )
}
