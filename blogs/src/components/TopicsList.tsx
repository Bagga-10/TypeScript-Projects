const topics = [
    "Digital Wellness",
    "Artificial Intelligence",
    "User Experience",
    "Remote Work",
    "Productivity",
    "Sustainability",
    "Web3",
    "Behavioral Psychology",
    "Minimalism",
    "Future of Work",
  ];
  


const TopicsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8 mb-10" >
      <h3 className="font-semibold text-lg mb-4" >🏷️ Topics for you </h3>
      <div className="flex justify-evenly items-center flex-wrap gap-3" >
        {topics.map((topic,index)=>(
            <span 
            key={index}
            className="px-3 py-2 bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-300">{topic}</span>
        ))}
      </div>
    </div>
  );
};

export default TopicsList;