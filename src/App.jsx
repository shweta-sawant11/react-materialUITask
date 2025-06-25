import * as React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Card, CardContent, Typography, Chip } from '@mui/material';
import Review from './Review.jsx'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const flights = [
  {
    time: '8:40 PM → 5:20 PM*',
    price: 'CHF 1,116',
    route: 'GVA → HKG',
    stop: '1 stop in CDG - 14 hr 40 min',
    airline: 'Air France',
    emissions: '-28% emissions',
    trip: 'round trip',
  },
  {
    time: '11:15 AM → 6:55 AM*',
    price: 'CHF 1,435',
    route: 'GVA → HKG',
    stop: '1 stop in ZRH - 13 hr 40 min',
    airline: 'SWISS, Cathay Pacific',
    emissions: '-20% emissions',
    trip: 'round trip',
  },
  {
    time: '10:50 AM → 6:55 AM*',
    price: 'CHF 1,742',
    route: 'GVA → HKG',
    stop: '1 stop in ZRH - 14 hr 5 min',
    airline: 'SWISS, Cathay Pacific',
    emissions: '-20% emissions',
    trip: 'round trip',
  },
];


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h1 className='text-center text-3xl my-10'>Task 1</h1>
      <Box className="md:w-[50%] w-full md:m-auto m-0">
        <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile>
            <Tab label="Travel" {...a11yProps(0)} />
            <Tab label="Explore" {...a11yProps(1)} />
            <Tab label="Flights" {...a11yProps(2)} />
            <Tab label="Hotels" {...a11yProps(3)} />
            <Tab label="Vacation rentals" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="md:text-2xl text-xl font-semibold">Departing flights</h3>
              <span className='up-down'><SwapVertIcon /></span>
            </div>
            <div className="">
              <div className="space-y-4 w-full">
                {flights.map((flight, index) => (
                  <Box component="section" sx={{ p: 2, border: '2px solid #8080803d', borderRadius: '10px' }} className="space-y-2">
                    <div className="flex justify-between items-center m-0">
                      <Typography variant="h6" className="font-bold">
                        {flight.time}
                      </Typography>
                      <Typography variant="h6" className="font-bold">
                        {flight.price}
                      </Typography>
                    </div>
                    <div className="flex justify-between items-center m-0">
                      <Typography variant="body2" className="text-gray-600">
                        {flight.route}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {flight.trip}
                      </Typography>
                    </div>
                    <Typography variant="body2" className="text-gray-500">
                      {flight.stop}
                    </Typography>
                    <div className='flex items-center '>
                      <Typography variant="body2" className="text-gray-500 pr-5 italic">
                        {flight.airline}
                      </Typography>
                      {/* <Chip
                      label={flight.emissions}
                      color="success"
                      size="small"
                    /> */}
                      <Typography variant="body2" className={`mt-2 p-1 rounded bg-green-200 text-green-700`}>
                        {flight.emissions}
                      </Typography>
                    </div>
                  </Box>
                ))}
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Explore
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Flights
        </CustomTabPanel>


        <CustomTabPanel value={value} index={3}>
          Hotels
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Vacation rentals
        </CustomTabPanel>
      </Box>
      <h1 className='text-center text-3xl my-10'>Task 2 </h1>
      <Review />
    </>
  );
}
