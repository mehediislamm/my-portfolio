import banner from '../../../assets/bannner.jpg'
import mypic from '../../../assets/IMG_6055-removebg-preview.png'
import { FaDownload } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='h-full' style={{ backgroundImage: `url(${banner})` }}>
            <div className='max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-2 pt-16 md:pt-0'>
                <div className='mb-20 md:mb-0'>
                    <img src={mypic} alt="" />
                </div>
                <div className=' justify-center items-center md:pt-44 '>
                    <h1 className=' text-center mb-7 text-white text-4xl font-bold'>HI, I'M MOKSEDUL! CREATIVE <br /> DEVELOPER</h1>

                    <p className='text-white mb-5 text-center'>
                        As a front-end web developer, you'll be responsible for creating the visual elements of a website that users interact with. Your tasks include designing and implementing user interfaces, ensuring responsive design for various devices, and optimizing the site for performance. Proficiency in HTML, CSS, and JavaScript is essential. Additionally, knowledge of front-end frameworks/libraries (e.g., React, Angular, Vue) is beneficial.
                    </p>

                    <div className='flex justify-center items-center '>
                       <a href="https://drive.google.com/uc?export=download&id=1nLvF5EnNhzBqRUT-3_Vn4Z7f_XxUJDhx"> <button className='btn btn-primary'>
                            Download Resume <FaDownload size={20}></FaDownload>
                        </button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;