import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Stack, Typography } from '@mui/material';

function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  
  function stringAvatar(member) {
    return {
      sx: {
        bgcolor: stringToColor(member.name),
        width: 56, 
        height: 56,
        textDecoration: 'none'
      },
      children: `${member.initials}`,
    };
  }

function Members(props) {
  var isLoading = true;
  
  if (props && props.group && props.group.members) {
    isLoading = false;
  }
  
  if (!isLoading) {
    return (    
      <Box>
        <Typography variant="h5">Members</Typography>  
        <Stack direction="row" spacing={2} style={{overflowX: 'scroll', width: '100%'}}>
          {props.group.members.map(mem => (
            <Avatar {...stringAvatar(mem)} component={Link} to={"/collection/" + mem.bgg_username}/>
          ))}
        </Stack>
      </Box>
    )
  }
}

export default Members;