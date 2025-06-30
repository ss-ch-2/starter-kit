// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import EnvManage from '@views/environnements/EnvManage'


const eCommerceProductsAdd = () => {
  return (
    <Grid container spacing={6}>

      <Grid size={{ xs: 12, md: 8 }}>
        <Grid container spacing={6}>
 
          <Grid size={{ xs: 12 }}>
            <EnvManage />
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default eCommerceProductsAdd
