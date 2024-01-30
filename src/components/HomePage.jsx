import Navbar from "./NavBar";
import HeroSection from "./HeroSection";
import FeatureItem from "./FeatureItem";
import Footer from "./Footer";
import chatIcon from "../img/icon-chat.png";
import moneyIcon from "../img/icon-money.png";
import securityIcon from "../img/icon-security.png";
import "../css/main.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <main>
        <HeroSection />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            iconSrc={chatIcon}
            alt="Chat Icon"
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureItem
            iconSrc={moneyIcon}
            alt="Money Icon"
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            iconSrc={securityIcon}
            alt="Security Icon"
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
