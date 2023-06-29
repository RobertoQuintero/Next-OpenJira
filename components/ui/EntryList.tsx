import { List, Paper } from '@mui/material'
import React, { DragEvent, useContext, useMemo } from 'react'
import { EntryCard } from './';
import { EntryStatus } from '@/interfaces';
import { EntriesContex } from '@/context/entries';

interface Props{
  status:EntryStatus
}

export const EntryList = ({status}:Props) => {
  const {entries} = useContext(EntriesContex)
  //una funcion que reetorna un valor que es el que se memoriza
  const entriesByStatus=useMemo(()=>entries.filter(entry=>entry.status===status),[entries,status])

  const allowDrop=(event:DragEvent<HTMLDivElement>)=>{
    event.preventDefault()
  }

  const onDropEntry=(event:DragEvent<HTMLDivElement>)=>{
    const id = event.dataTransfer.getData('text')
    console.log({id})
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
    >
      <Paper sx={{
        height:'calc(100vh - 180px)',
        overflow:'scroll',
        backgroundColor:'transparent',
        padding:'3px 5px',
        '&::-webkit-scrollbar': { display: 'none' }
        }}>
        <List sx={{opacity:1}}>
          {
            entriesByStatus.map(entry=><EntryCard key={entry._id} entry={entry}/>)
          }
        </List>
      </Paper>
    </div>
  )
}
