import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import Collapsible from 'react-collapsible'; //npm install react-collapsible --save

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as d3 from 'd3';
import CommonBarChart from 'components/common/graphs/CommonBarChart';
import CommonInsight from 'components/common/graphs/popup/CommonInsight';

const graphMargin = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 20,
};


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));


const Timelinepopup = ({
  data,
}) => {
  const [barTypesToBeVisible, setBarTypesToBeVisible] = useState([
    'quality'
  ]);

  //console.log("Timelinepopup Data",data)
  useEffect(() => {
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
     <div>
         <div id="timelineModal" className="modal">
            <div className="modal-content">
                <div>
                         { data !=null?<CommonInsight data={data}/>:""} 
                </div>
                {/* <Collapsible trigger="View Details">
                    <div className="timelinetabheder" >
                    <AppBar position="static">
                        <Tabs value={value} onChange={handleChange}>
                        <Tab label="Sponsor" {...a11yProps(0)} />
                        <Tab label="Asset" {...a11yProps(1)} />
                        <Tab label="Venue" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                    { data !=null?<CommonBarChart
                                height={350}
                                width={1201}
                                margin={graphMargin}
                                data={data["brands"] || []}
                                type="analytics"
                                barsVisible={barTypesToBeVisible || []}
                                isShowOnlyLive={false}
                                tootltipRef={"current: div.card"}
                                showLine={true}
                                valueationUnit={"USD"}
                                loading={false}/> :""} 
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two s
                    </TabPanel>
                    </div>
                </Collapsible> */}
            </div>
         </div>
     </div>
)
  };
Timelinepopup.propTypes = {
};
export default Timelinepopup;