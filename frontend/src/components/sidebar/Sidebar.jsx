import { useEffect, useState } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import "./Sidebar.css";

const drawerWidth = 250;

function Sidebar() {

    const [domains, setDomains] = useState([]);
    const [newDomain, setNewDomain] = useState('')
    const [showDomainInput, setShowDomainInput] = useState(false);

    const addDomain = async () => {
        if (newDomain.trim() !== '') {
            setDomains({ ...domains });
            setNewDomain('');
            setShowDomainInput(false);
            try {
                await axios.post('http://localhost:5034/api/addFolder', { folder: newDomain });
            } catch (error) {
                console.error('Error adding folder:', error);
                setError('Failed to add folder');
            }
        }
    };

    useEffect(() => {
        const fetchDomains = async () => {
            try {
                const response = await axios.get("http://localhost:5034/api/getData")
                if (response.status === 200) {
                    setDomains(response.data)
                }
            }
            catch (error) {
                console.log(error)
            }
        };

        fetchDomains()
    }, []);

    const [selectedIndex, setSelectedIndex] = useState();

    const handleSelectedIndex = (index) => {
        setSelectedIndex(index)
    };

    return (
        <div>       
            <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>

                        </AppBar>

                        <Drawer variant="permanent" anchor="left" sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}>

                            <Toolbar />
                            <Divider />

                            <List>
                                {
                                    domains.map((domain) => (
                                        <ListItemButton key={domain.sno} selected={selectedIndex === domain.sno} onClick={() => handleSelectedIndex(domain.sno)}>
                                            <ListItemText>{domain.domain}</ListItemText>
                                        </ListItemButton>
                                    ))
                                }
                            </List>

                            <div className='showdomain_inputcont'>
                                {showDomainInput ? (
                                    <>
                                        <input
                                            type="text"
                                            className='domain_input'
                                            value={newDomain}
                                            onChange={(e) => setNewDomain(e.target.value)}
                                            placeholder="Enter domain name"
                                        />
                                        <button className='domain_addBtn' onClick={addDomain}>Add</button>
                                        <button className='domain_closeIcon' onClick={() => setShowDomainInput(false)}>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </>
                                ) : (
                                    <button className='domain_plusIcon' onClick={() => setShowDomainInput(true)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                )}
                            </div>

                        </Drawer>
            </Box>
        </div>
    )
};

export default Sidebar;