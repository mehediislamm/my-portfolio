import Contact from "../../Contact/Contact";
import Project from "../../Project/Project";
import Skill from "../../Skill/Skill";
import Banner from "../banner/Banner";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skill></Skill>
            <Contact></Contact>
            <Project></Project>
        </div>
    );
};

export default Home;