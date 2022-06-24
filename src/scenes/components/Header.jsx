import React from "react";
import styles from '../Index/styles.module.css'
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import { blueGrey } from '@mui/material/colors';
import { Badge, Grid, Avatar, Box, InputBase, IconButton } from '@mui/material';

class Header extends React.Component {
  Logo() {
    return (
      <div>
        <section className={styles.logo}>
          <span>Trello Board</span>
        </section>
      </div>
    )
  }

  Avatar() {
    return (
      <div>
        <section className={styles.avatar_header}>
          <Avatar sx={{ bgcolor: blueGrey[500] }}>JP</Avatar>
        </section>
      </div>
    )
  }

  Item() {
    return (
      <div>
        <section className={styles.icon_header}>
          <Box component="span" sx={{ p: 2 }}>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <Badge badgeContent={4} color="primary">
                <MailIcon color="action" fontSize="large" />
              </Badge>
            </IconButton>
          </Box>
          <Box component="span" sx={{ p: 2, border: '1px dashed' }}>
            <InputBase
              placeholder="Search"
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon color="action" fontSize="large" />
            </IconButton>
          </Box>
        </section>
      </div>
    )
  }

  render() {
    return (
      <section className={styles.header}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {this.Logo()}
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
          <Grid item xs={3}>
            {this.Item()}
          </Grid>
          <Grid item xs={1}>
            {this.Avatar()}
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default Header;
