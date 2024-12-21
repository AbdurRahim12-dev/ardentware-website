import Header_Text from "../ui/Header_Text/Header_Text";
import Case_Studies_Card from "./Cards/Case_Studies_Card";

const Case_Studies = () => {
  const data = [
    {
      category: "HelthCare",
      title: "Quick call volume response increases patient collections",
      description:
        "with best practices to reduce abandonment rates and boost customer satisfaction despite surges.",
      image: "https://cognizant.scene7.com/is/image/cognizant/hp-cs-tile-metrohealth",
    },
    {
      category: "AutoMotive",
      title: "JSW MG Motor creates an end-to-end customer journey",
      description:
        "A comprehensive business process solution, leveraging SAP and Adobe, from pre-sales through production and service support.",
      image: "https://cognizant.scene7.com/is/image/cognizant/hp-cs-tile-jsw",
    },
    {
      category: "Manufacturing",
      title: "Fletcher Building Datahub propels innovation",
      description:
        "with a new highly dynamic business framework for customer-centric transformation.",
      image: "https://cognizant.scene7.com/is/image/cognizant/cs-tile-homepage-fletcher",
    },
    {
      category: "Case Studies",
      title: "Discover more about our work",
      description:
        "We engineer technology into your business to help you anticipate and act as if on intuition.",
      image: "https://cognizant.scene7.com/is/image/cognizant/hp-cs-see-all-stories-1",
    },
  ];
  return (
    <section className="container py-16">
      <Header_Text
        title="Case studies"
        description="We help companies anticipate and act with insight and speed."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {data.map((item) => {
          return <Case_Studies_Card key={item.title} data={item} />;
        })}
      </div>
    </section>
  );
};

export default Case_Studies;
