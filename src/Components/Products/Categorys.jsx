import { Link } from "react-router-dom";

import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useState } from "react";

const Categorys = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return ( 
        <List>
            <ListItemButton component={Link} to={"/"}>
                <ListItemText primary="Cateroria 1" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Cateroria 3" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Sub Cateroria 1" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton component={Link} to={"/"}>
                <ListItemText primary="Cateroria 2" />
            </ListItemButton>
            
        </List>
     );
}
 
export default Categorys;