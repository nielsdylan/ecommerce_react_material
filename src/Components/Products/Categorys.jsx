import { Link } from "react-router-dom";

import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useEffect, useState } from "react";
import { getCategories } from "../../Services/categories";

const Categorys = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const [state, setstate] = useState([]);
    useEffect(() => {
        Categories();
    }, []);
    const Categories = async () =>{
        let response = await getCategories();
        setstate(response.data);
    }
     
    return ( 
        <List>
            {
                state.map((category)=>(
                    <ListItemButton component={Link} to={"/"} key={category.category_id}>
                        <ListItemText primary={category.description} />
                    </ListItemButton>
                ))
            }
            {/* <ListItemButton onClick={handleClick}>
                <ListItemText primary="Cateroria 3" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Sub Cateroria 1" />
                    </ListItemButton>
                </List>
            </Collapse>*/}
            
        </List>
     );
}
 
export default Categorys;