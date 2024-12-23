import RoundButton from "../ui/Button/RoundButton";
import { GrContact } from "react-icons/gr";

const Header = () => {
  return (
    <section className="bg-primary">
      <div className="container flex justify-between items-center py-3">
        <div>
          <span className="text-accent font-semibold">Services</span>
          <h3 className="text-lg text-white font-bold">Data and AI</h3>
        </div>
        <div>
          <RoundButton
            label="Contact"
            className="bg-primary text-secondary border-2 border-secondary hover:border-gray-200 hover:text-gray-200"
            icon={<GrContact />}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
