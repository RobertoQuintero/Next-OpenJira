import { Layout } from "@/components/layouts"
import { EntryStatus } from "@/interfaces"
import { DeleteOutlined, SaveOutlined } from "@mui/icons-material"
import {capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material"

const validStatus:EntryStatus[]=['pending','in-progress','finished']

const EntryPage = () => {
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
              title='Entrada'
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
              />
              {/* RADIO */}
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup
                  row
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
