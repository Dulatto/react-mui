import {Box, Tab} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {useState, useEffect} from 'react'

export const MuiTabs = () => {
    const [value, setValue] = useState('1');

    const handleChange =(event:React.SyntheticEvent, newValue:string)=>{
        setValue(newValue);
    }
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <TabList aria-label="Tabs example" onChange={handleChange}>
                    <Tab label='tab one' value='1'/>
                    <Tab label='tab two' value='2'/>
                    <Tab label='tab three' value='3'/>
                </TabList>
            </Box>
            <TabPanel value='1'>Panel one</TabPanel>
            <TabPanel value='2'>Panel two</TabPanel>
            <TabPanel value='3'>Panel three</TabPanel>
        </TabContext>
    </Box>
  )
}
