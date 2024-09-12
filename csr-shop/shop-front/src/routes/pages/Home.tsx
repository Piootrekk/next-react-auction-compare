import AccordionInfo from "@/components/page-components/dashboard/AccordionInfo";
import Futures from "@/components/page-components/dashboard/Features";
import Welcome from "@/components/page-components/dashboard/Welcome";

const Home = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center">
        <Welcome />
        <div className="flex flex-col items-center">
          <Futures />
          <AccordionInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
