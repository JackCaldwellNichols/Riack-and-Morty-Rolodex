/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Badge, Box,Chip } from '@mui/material';


const CharacterCard = ({character}) => {

return (
<>
  <Card sx={{ width: 300, marginLeft: 2, marginBottom: 2}}>
    <Box sx={{position: 'relative'}}>
      <CardMedia
        component="img"
        height="240"
        image={character.image}
        alt="Paella dish"
        sx={{objectFit: 'cover'}}
      />
      {character.status === "Dead" &&
      <Badge sx={{position: 'absolute', top: 10, left: 5}}>
        <Chip label="Dead" color='error'/>
      </Badge>
      }
      {character.status === "Alive" &&
      <Badge sx={{position: 'absolute', top: 10, left: 5}}>
        <Chip label="Alive" color='success'/>
      </Badge>
      }
      {character.status === "unknown" &&
      <Badge sx={{position: 'absolute', top: 10, left: 5}}>
        <Chip label="Unknown" color='secondary'/>
      </Badge>
      }
  </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Name: 
          <strong>
            {" " + character.name}
          </strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last known location: 
          <strong>
             {" " + character.location.name}
          </strong>
        </Typography>
      </CardContent>
  </Card>
</>
  )
}

export default CharacterCard