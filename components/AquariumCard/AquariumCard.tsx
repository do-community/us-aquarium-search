import clientPromise from "../../lib/mongodb";



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
    <div>
      <h1>US Aquariums</h1>
      <ul>
        {aquariums.map((aquarium) => (
          <li key={aquarium._id}>
            <img src={aquarium.image}></img>
            <h2>{aquarium.name}</h2>
            <h3>{aquarium.location}</h3>
            <h4>{aquarium.species_count}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default AquariumCard;


