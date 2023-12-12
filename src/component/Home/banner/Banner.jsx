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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae dolorem sint quam voluptatum a placeat recusandae debitis vitae velit?

                        </p>
                         
                        <div className='flex justify-center items-center '>
                        <button className='btn btn-primary'>
                                Download Resume <FaDownload size={20}></FaDownload>
                         </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;