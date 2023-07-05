import { Layout } from "@/components/layouts"
import { EntriesContex } from "@/context/entries"
import { dbEntries } from "@/database"
import { Entry, EntryStatus } from "@/interfaces"
import { dateFunctions } from "@/utils"
import { DeleteOutlined, SaveOutlined } from "@mui/icons-material"
import {capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material"
import { isValidObjectId } from "mongoose"
import { GetServerSideProps } from "next"
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react"

const validStatus:EntryStatus[]=['pending','in-progress','finished']

interface Props{
  entry:Entry
}

const EntryPage = ({entry}:Props) => {

  const {updateEntry}=useContext(EntriesContex)
  const [inputValue, setInputValue] = useState(entry.description)
  const [status, setStatus] = useState<EntryStatus>(entry.status)
  const [touched, setTouched] = useState(false)

  const isNotValid=useMemo(() => !inputValue.length&&touched, [inputValue,touched])

  const onInputValueChanged=(event:ChangeEvent<HTMLInputElement>)=>{
    setInputValue(event.target.value)
  }
  const onStatusChanged=(event:ChangeEvent<HTMLInputElement>)=>{
    setStatus(event.target.value as EntryStatus)
  }
  // useEffect(()=>{},[status])

  const onSave=()=>{
    if(!inputValue.trim().length)return 
    
    const updatedEntry:Entry={
      ...entry,
      status,
      description:inputValue
    }

    updateEntry(updatedEntry,true)
  }

  return (
    <Layout title={inputValue.substring(0,15)+' ...'}>
      <Grid
        container
        justifyContent='center'
        sx={{marginTop:2}}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader 
              title={`Entrada: `}
              subheader={`Creada ${dateFunctions.getFormatDistanceToNow(entry.createdAt)}`}
            />
            <CardContent>
              <TextField 
                sx={{marginTop:2,marginBottom:1}}
                fullWidth
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label='Nueva entrada'
                value={inputValue}
                onChange={onInputValueChanged}
                helperText={isNotValid&&'Ingrese un valor'}
                onBlur={()=>setTouched(true)}
                error={isNotValid}
              />
              {/* RADIO */}
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup
                  row
                  value={status}
                  onChange={onStatusChanged}
                >
                  {
                    validStatus.map(option=>(
                      <FormControlLabel 
                        key={option}
                        value={option}
                        control={<Radio/>}
                        label={capitalize(option)}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlined/>}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={!inputValue.length}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
      <IconButton
        sx={{
          position:'fixed',
          bottom:30,
          right:30,
          backgroundColor:'error.dark'

        }}
        
      >
        <DeleteOutlined/>
      </IconButton>
    </Layout>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {id}= ctx.params as {id:string}

  const entry= await dbEntries.getEntryById(id)

  if(!entry){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }

  return {
    props: {
      entry
    }
  }
}

export default EntryPage
