import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



interface Aquarium {
  _id: string;
  name: string;
  location: string;
  species_count: number
  image: string;
}


interface AquariumProps {
  aquariums: Aquarium[];
}


const AquariumCard: React.FC<AquariumProps> = ({ aquariums }) => {
  return (
    <>
      {aquariums.map((aquarium) => {
        return (
          <Card key={aquarium._id}>
            <CardMedia
              component="img"
              height="140"
              image={aquarium.image}
              alt={aquarium.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {aquarium.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {aquarium.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {aquarium.species_count} species
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};


export default AquariumCard;


