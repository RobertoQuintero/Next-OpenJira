import { List, Paper } from '@mui/material'
import React, { DragEvent, useContext, useMemo } from 'react'
import { EntryCard } from './';
import { EntryStatus } from '@/interfaces';
import { EntriesContex } from '@/context/entries';
import { UIContex } from '@/context/ui';

import styles from './EntryList.module.css'

interface Props{
  status:EntryStatus
}

export const EntryList = ({status}:Props) => {
  const {entries,updateEntry} = useContext(EntriesContex)
  const {isDragging,endDragging} = useContext(UIContex)
  //una funcion que reetorna un valor que es el que se memoriza
  const entriesByStatus=useMemo(()=>entries.filter(entry=>entry.status===status),[entries,status])

  const allowDrop=(event:DragEvent<HTMLDivElement>)=>{
    event.preventDefault()
  }

  const onDropEntry=(event:DragEvent<HTMLDivElement>)=>{
    const id = event.dataTransfer.getData('text')
    const entry = entries.find(e=>e._id===id)!
    entry.status=status
    updateEntry(entry)
    endDragging()
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging:''}
    >
      <Paper sx={{
        height:'calc(100vh - 180px)',
        overflow:'scroll',
        backgroundColor:'transparent',
        padding:'3px 5px',
        '&::-webkit-scrollbar': { display: 'none' }
        }}>
        <List sx={{opacity:isDragging?0.3:1,transition:'all .3s'}}>
          {
            entriesByStatus.map(entry=><EntryCard key={entry._id} entry={entry}/>)
          }
        </List>
      </Paper>
    </div>
  )
}
