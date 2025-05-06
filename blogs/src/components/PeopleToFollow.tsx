import UserCard from "./UserCard";

const peopletoFollow = [
  { name: "Musharaf Aejaz", following: false },
  { name: "Tanvir Singh", following: true },
  { name: "Anif Shabir", following: false },
  { name: "Aniket Sharma", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">People To Follow</h3>
      <div className="space-y-4">
        {peopletoFollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
