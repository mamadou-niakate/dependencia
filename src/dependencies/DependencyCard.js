import React from 'react'
import { Box, Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom';

export const DependencyCard = ({ dependency }) => {
    const [dependencyName, dependencyVersion] = dependency
    return (
        <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'flex-end', alignItems: 'flex-start' }}>
            <Typography variant="h6">{dependencyName}</Typography>
            <Card sx={{ width: 345, maxHeight:300, margin:1 }}>
                <CardContent>
                    <List>
                        <ListItem divider>
                            <Typography variant="body1"> Name : </Typography>
                            <Typography variant="body2"> { dependencyName } </Typography>
                        </ListItem>
                        <ListItem divider>
                            <Typography variant="body1"> Version : </Typography>
                            <Typography variant="body2"> { dependencyVersion } </Typography>
                        </ListItem>
                    </List>
                </CardContent>
                <Outlet />
            </Card>
        </Box>
  )
}
