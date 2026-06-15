import MovieSection from "./MovieSection";
import SerialSection from "./SerialSection";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from "react";
import { styles } from "../../styles/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MainMovieSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={`mt-10`}>
      <Box className={`${styles.container}`}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ '& .MuiTabs-indicator': { backgroundColor: '#00925D' } }}
          >
            <Tab sx={{
              color: 'rgba(255, 255, 255, 0.65)',
              transition: 'all 0.5s',
              '&:hover': {
                color: '#ffffff',
                opacity: 1,
              },
              '&.Mui-selected': {
                color: '#ffffff',
              },
              border: 'white'
            }} label="Episode" {...a11yProps(0)} />
            <Tab sx={{
              color: 'rgba(255, 255, 255, 0.65)',
              transition: 'all 0.5s',
              '&:hover': {
                color: '#ffffff',
                opacity: 1,
              },
              '&.Mui-selected': {
                color: '#ffffff',
              },
            }} label="Universe" {...a11yProps(1)} />
            <Tab sx={{
              color: 'rgba(255, 255, 255, 0.65)',
              transition: 'all 0.5s',
              '&:hover': {
                color: '#ffffff',
                opacity: 1,
              },
              '&.Mui-selected': {
                color: '#ffffff',
              },
            }} label="News" {...a11yProps(2)} />
            <Tab sx={{
              color: 'rgba(255, 255, 255, 0.65)',
              transition: 'all 0.5s',
              '&:hover': {
                color: '#ffffff',
                opacity: 1,
              },
              '&.Mui-selected': {
                color: '#ffffff',
              },
            }} label="Reviews" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <SerialSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Universe
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          News
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Reviews
        </CustomTabPanel>
      </Box>
      <div className="w-full h-px bg-[rgba(255,255,255,0.1)]"></div>
      <MovieSection />
      <div className="w-full h-px bg-[rgba(255,255,255,0.1)]"></div>
    </div>
  )
}
