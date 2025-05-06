const trends = [
    {
      title: "Why Silence Might Be the Loudest Message",
      author: "Elliot Ramos",
    },
    {
      title: "Web3 Is Here—But Do We Really Need It?",
      author: "Tasha Okoro",
    },
    {
      title: "The Hidden Cost of Convenience",
      author: "Noah Delgado",
    },
    {
      title: "How Algorithms Shape Your Mood",
      author: "Priya Mehta",
    },
    {
      title: "Minimalism Is Dead. Now What?",
      author: "Jordan Liu",
    },
    {
      title: "Reclaiming Time in the Age of Distraction",
      author: "Sofia Bennett",
    },
    {
      title: "The Quiet Power of Doing Nothing",
      author: "Andre Keller",
    },
    {
      title: "Designing for the Next Billion Users",
      author: "Fatima Khan",
    },
    {
      title: "AI Art: Innovation or Imitation?",
      author: "Carlos Mendes",
    },
    {
      title: "What Happens When Everything Is Personalized?",
      author: "Lena Fischer",
    },
  ];
  


const TrendsList = () => (
    <div className="bg-white p-4 rounded-lg shadw mt-8">
        <h3 className="font-semibold text-xl mb-5">
            📈 Today's top trends
        </h3>
        <ul className="space-y-4">
            {trends.map((trend,index)=>(
                <li key={index} className="flex flex-col">
                    <span className="font-medium" >{trend.title}</span>
                    <span className="text-sm text-gray-500" >By {trend.author}</span>
                </li>
            ))}
        </ul>

    </div>
);

export default TrendsList;