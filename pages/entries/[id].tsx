import { Layout } from "@/components/layouts"
import { EntryStatus } from "@/interfaces"
import { DeleteOutlined, SaveOutlined } from "@mui/icons-material"
import {capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material"
import { ChangeEvent, useEffect, useMemo, useState } from "react"

const validStatus:EntryStatus[]=['pending','in-progress','finished']

const EntryPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState<EntryStatus>('pending')
  const [touched, setTouched] = useState(false)

  const isNotValid=useMemo(() => !inputValue.length&&touched, [inputValue,touched])

  const onInputValueChanged=(event:ChangeEvent<HTMLInputElement>)=>{
    setInputValue(event.target.value)
  }
  const onStatusChanged=(event:ChangeEvent<HTMLInputElement>)=>{
    setStatus(event.target.value as EntryStatus)
  }
  // useEffect(()=>{},[status])

  const onSave=()=>{}

  return (
    <Layout title="Entry...">
      <Grid
        container
        justifyContent='center'
        sx={{marginTop:2}}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader 
              title={`Entrada: ${inputValue}`}
              subheader={`Creada hace ...`}
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


export default EntryPage
