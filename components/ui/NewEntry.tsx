import { EntriesContex } from "@/context/entries"
import { UIContex } from "@/context/ui"
import { AddCircleOutlineOutlined, SaveOutlined } from "@mui/icons-material"
import { Box, Button, TextField } from "@mui/material"
import { ChangeEvent, useContext, useState } from "react"

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)
  const {addNewEntry} = useContext(EntriesContex)
  const {isAddingEntry,setIsAddingEntry} = useContext(UIContex)

  const onTextFieldChanged=(event:ChangeEvent<HTMLInputElement>)=>{
    setInputValue(event.target.value);
  }

  const  onSave=()=>{
    if(!inputValue.length)return
    addNewEntry(inputValue)
    setInputValue('')
    setTouched(false)
    setIsAddingEntry(false)
  }

  return (
    <Box sx={{marginBottom:2,paddingX:2}}>
    {
      isAddingEntry
        ?<>

          <TextField
            fullWidth
            sx={{marginTop:2,marginBottom:'1'}}
            placeholder='Nueva entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            helperText= {inputValue.length==0 &&touched&&'Ingrese un valor'}
            error={inputValue.length==0&&touched}
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={()=>setTouched(true)}
          />
          <Box display='flex' justifyContent='space-between'>
            <Button 
              variant="text"
              onClick={()=>setIsAddingEntry(false)}
            >
              Cancelar
            </Button>
            <Button 
              variant="outlined"
              color='secondary'
              endIcon={<SaveOutlined/>}
              onClick={onSave}
            >
              Guardar
            </Button>

          </Box>
        </>
        : <Button
            startIcon={<AddCircleOutlineOutlined/>}
            fullWidth
            variant='outlined'
            onClick={()=>setIsAddingEntry(true)}
          >
            Agregar Tarea
          </Button>
    }
    
    </Box>
  )
}
