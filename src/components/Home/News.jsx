import News_Card from "./Cards/News_Card";

const News = () => {
  const data = [
    {
      logo: "https://mma.prnewswire.com/media/1794711/Cognizant_Logo.jpg?p=facebook",
      date: "Dec 19, 2024",
      title:
        "Cognizant Recognized as a Leader and Star Performer by Everest Group in their Artificial Intelligence (AI) and Generative AI Services PEAK Matrix® Assessment 2024",
      description:
        "Cognizant announced it has been named a Leader and a Star Performer in the Everest Group Artificial Intelligence (AI) and Generative AI Services PEAK Matrix® Assessment 2024. As...",
      link: "#",
    },
    {
      date: "Dec 19, 2024",
      title:
        "Cognizant First to Achieve ISO/IEC 42001:2023 Accredited Certification for Artificial Intelligence Management Systems",
      description:
        "Certification recognizes Cognizant's leadership in developing, assessing, and deploying AI systems in a safe, trustworthy, and ethical way TEANECK, N.J., Dec. 16, 2024 /PRNewswire/ -- Cognizant...",
      link: "#",
    },
    {
      date: "Dec 19, 2024",
      title:
        "Cognizant, Salesforce Team Up to Drive Transformation through Life Science Industry Cloud",
      description:
        "Cognizant and Salesforce are collaborating to help accelerate innovation in customer experience for clients in the life sciences industry. The two companies aim to drive transformation and...",
      link: "#",
    },
  ];
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-16">
        {data.map((item, index) => {
          return (
            <div key={index + 1} className={`border p-4 ${index === 0 ? "md:row-span-2" : ""}`}>
              <News_Card data={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
