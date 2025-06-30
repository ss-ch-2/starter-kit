'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'

const EnvManage = () => {
  // States
  const [activeTab, setActiveTab] = useState('Server Production')

  // Hooks
  const theme = useTheme()
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  return (
    <Card sx={{width:'1200px',minheight:'600px'}}>
      <CardHeader title='Environnements' />
      <CardContent>
        <TabContext value={activeTab}>
          <div className='flex max-md:flex-col gap-6'>
            <div className='md:is-4/12'>
              <CustomTabList orientation='vertical' onChange={handleChange} pill='true'>
                <Tab
                  value='Server Localhost'
                  label='Server Localhost'
                  icon={<i className='ri-server-line' />}
                  iconPosition='start'
                  className='flex-row justify-start min-is-full text-start'
                />
                <Tab
                  value='Server Production'
                  label='Server Production'
                  icon={<i className='ri-server-line' />}
                  iconPosition='start'
                  className='flex-row justify-start min-is-full text-start'
                />
                <Tab
                  value='Server Test'
                  label='Server Test'
                  icon={<i className='ri-server-line' />}
                  iconPosition='start'
                  className='flex-row justify-start min-is-full text-start'
                />
          
              </CustomTabList>
            </div>
            <Divider orientation={isBelowMdScreen ? 'horizontal' : 'vertical'} flexItem />
            <div className='md:is-8/12'>
              <TabPanel value='Server Localhost' className='flex flex-col gap-4 is-full'>
                <Typography className='font-medium'>Information of Enviromment</Typography>
                <div className='flex items-center gap-4'>
                
                </div>
                <div className='flex flex-col gap-2'>
                  <Typography color='text.primary'>Host: Localhost</Typography>
                  <Typography color='text.primary'>IP Adress: 127.0.0.1</Typography>
                  <Typography color='text.primary'>Status : Actif</Typography>
                </div>
                  <Button variant='contained' startIcon={<i className='ri-check-line' />}>
                    Connect to Enviromment
                  </Button>
              </TabPanel>
               <TabPanel value='Server Production' className='flex flex-col gap-4 is-full'>
                <Typography className='font-medium'>Information of Enviromment</Typography>
                <div className='flex items-center gap-4'>
                
                </div>
                <div className='flex flex-col gap-2'>
                  <Typography color='text.primary'>Host: Production</Typography>
                  <Typography color='text.primary'>IP Adress: 99.18.5.132</Typography>
                  <Typography color='text.primary'>Status : Actif</Typography>
                </div>
                  <Button variant='contained' startIcon={<i className='ri-check-line' />}>
                    Connect to Enviromment
                  </Button>
              </TabPanel>
              <TabPanel value='Server Test' className='flex flex-col gap-4 is-full'>
                <Typography className='font-medium'>Information of Enviromment</Typography>
                <div className='flex items-center gap-4'>
                
                </div>
                <div className='flex flex-col gap-2'>
                  <Typography color='text.primary'>Host: Test</Typography>
                  <Typography color='text.primary'>IP Adress: 33.160.180.9</Typography>
                  <Typography color='text.primary'>Status : Inactif</Typography>
                </div>
                  <Button variant='contained' startIcon={<i className='ri-check-line' />}>
                    Connect to Enviromment
                  </Button>
              </TabPanel>

            </div>
          </div>
        </TabContext>
      </CardContent>
    </Card>
  )
}

export default EnvManage
