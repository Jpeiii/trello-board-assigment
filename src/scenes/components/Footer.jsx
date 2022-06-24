import React from "react";
import styles from '../Index/styles.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Fab, Box, IconButton, AppBar, Toolbar, styled } from '@mui/material';

class Footer extends React.Component {
    addButton() {
        const StyledFab = styled(Fab)({
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        });
        return (
            <StyledFab color="secondary" aria-label="add">
                <AddIcon />
            </StyledFab>
        )
    }
    render() {
        return (
            <section >
                <AppBar className={styles.footer} position="fixed" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar >
                        <IconButton color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                        {this.addButton()}
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color="inherit">
                            <FilterListIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </section>
        );
    }
}

export default Footer;
