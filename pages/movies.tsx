import clientPromise from "../lib/mongodb";
import { GetServerSideProps } from 'next';


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


const Aquariums: React.FC<AquariumProps> = ({ aquariums }) => {
  return (
    <div>
      <h1>US Aquariums</h1>
      <ul>
        {aquariums.map((aquarium) => (
          <li key={aquarium._id}>
            <h2>{aquarium.name}</h2>
            <h3>{aquarium.location}</h3>
            <img src={aquarium.image}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Aquariums;


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("united-states-aquariums");
    const aquariums = await db
      .collection("aquariums")
      .find({})
      .limit(30)
      .toArray();
    return {
      props: { aquariums: JSON.parse(JSON.stringify(aquariums)) },
    };
  } catch (e) {
    console.error(e);
    return { props: { aquariums: [] } };
  }
};