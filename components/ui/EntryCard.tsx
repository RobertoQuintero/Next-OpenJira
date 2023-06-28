import { Card, CardActionArea, CardActions, CardContent, Paper, Typography } from '@mui/material'
import React from 'react'

export const EntryCard = () => {
  return (
    <Card sx={{marginBottom:1}}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace:'pre-line'}}>Esto es la descripción</Typography>
        </CardContent>

        <CardActions sx={{display:'flex',justifyContent:'end',paddingRight:2}}>
          <Typography variant='body2'>Hace 30 mins</Typography>
        </CardActions>
      </CardActionArea>

    </Card>
  )
}
