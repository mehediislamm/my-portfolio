
import { FaDownload } from "react-icons/fa6";
import aboutImg from "../../assets/1686564693410-removebg-preview.png"
const About = () => {
    return (
        <div className="bg-black" >
            <h2 className="text-xl text-white text-center font-bold">About me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20  ">
                <div className="mb-10 md:mb-0">
                    <img src={aboutImg} alt="" />
                </div>


                <div className="justify-center items-center md:pt-44 ">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-5">Transforming visions into
                            exceptional portfolios</h1>
                        <p className="mb-5 text-white">As a front-end web developer, you'll be responsible for creating the visual elements of a website that users interact with. Your tasks include designing and implementing user interfaces, ensuring responsive design for various devices, and optimizing the site for performance. Proficiency in HTML, CSS, and JavaScript is essential. Additionally, knowledge of front-end frameworks/libraries (e.g., React, Angular, Vue) is beneficial.</p>

                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-primary">Donload Resume <FaDownload size={20}></FaDownload>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;