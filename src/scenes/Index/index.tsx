import { useJobsQuery } from "../../generated/graphql";
import Header from "../components/Header"
import Footer from "../components/Footer"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import styles from './styles.module.css'
import AttachmentIcon from '@mui/icons-material/Attachment';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { AvatarGroup, Avatar, Badge, Card, Button, CardActions, CardContent, IconButton, Grid, Typography, Paper, Box } from '@mui/material';

export function Index() {
  const { data, loading, startPolling } = useJobsQuery({});
  startPolling(1000)
  if (!data && loading) {
    return <div>…</div>;
  }

  if (!data) {
    return <div>Something went wrong :(</div>;
  }
  var todoArr = []
  var InProgressArr = []
  var doneArr = []
  data.jobs.map((job) => {
    let createdAt = job.createdAt
    let name = job.name
    let status = job.status
    let priority = ["low", 'medium', 'high']
    let number = Math.floor(Math.random() * 3);
    if (status === "TO_DO") {
      todoArr.push([name, createdAt, priority[number]])
    } else if (status === "IN_PROGRESS") {
      InProgressArr.push([name, createdAt, priority[number]])
    } else {
      doneArr.push([name, createdAt, priority[number]])
    }
  })

  const card = (datas) => {
    return (
      datas.map(([name, date, priority]) => {

        return (
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent>
                <Button variant="outlined" color={priority === "high" ? "error" : priority === "medium" ? "warning" : priority === "low" ? "inherit" : "info"} startIcon={<FmdBadIcon />} >
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {priority}
                  </Typography>
                </Button>
                <Typography variant="body2">
                  <br />
                  {name}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="comment">
                  <Badge badgeContent={4} color="secondary">
                    <ChatBubbleOutlineIcon color="action" />
                  </Badge>
                </IconButton>
                <IconButton aria-label="attachement">
                  <Badge badgeContent={2} color="secondary">
                    <AttachmentIcon color="action" />
                  </Badge>
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <AvatarGroup max={4}>
                  <Avatar>a</Avatar>
                  <Avatar>b</Avatar>
                  <Avatar>c</Avatar>
                </AvatarGroup>
              </CardActions>
            </Card>
          </Box >
        )
      })
    )
  }
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.card}>
        <Grid spacing={12} container
          direction="row">
          <Grid item xs>
            <Box className={styles.todo_header}>
              <i className={styles.todo_text}>TO DO </i>
            </Box>
            <Paper className={styles.card_wrapper} style={{ maxHeight: 600, overflow: 'auto' }} variant="outlined" >
              {card(todoArr)}
            </Paper>
          </Grid>
          <Grid item xs>
            <Box className={styles.inprogress_header}>
              <i className={styles.todo_text}>IN PROGRESS</i>
            </Box>
            <Paper className={styles.card_wrapper} style={{ maxHeight: 600, overflow: 'auto' }} variant="outlined" >
              {card(InProgressArr)}
            </Paper>
          </Grid>
          <Grid item xs>
            <Box className={styles.done_header}>
              <i className={styles.todo_text}>DONE</i>
            </Box>
            <Paper className={styles.card_wrapper} style={{ maxHeight: 600, overflow: 'auto' }} variant="outlined" >
              {card(doneArr)}
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  );
}
