import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibleIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, Grid } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const { name } = project;
  return (
    <Card sx={{ width: 345, maxHeight:300, margin:1 }}>
      <CardHeader title={ name } />
      <CardContent>
        <Typography variant="h5" color="text.secondary"> Dependencies </Typography>
        <Typography variant="h6" color="text.secondary"> 37 </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
          <Grid container justifyContent={'space-around'} alignItems='center'>
            <Grid item>
                <Link to={`/repos/${name}`}>
                  <IconButton aria-label="add to favorites">
                    <VisibleIcon />
                  </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <IconButton aria-label="share">
                    <EditIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton aria-label="share">
                    <DeleteIcon />
                </IconButton>
            </Grid>
          </Grid>
      </CardActions>
      <Outlet />
    </Card>
  );
}
