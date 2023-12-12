
import managementOne from '../../assets/buldingManagement.png'
import managementTwo from '../../assets/management2.png'
import managementThre from '../../assets/manament3.png'
import managementFour from '../../assets/onlineStudyGroup.png'


const Project = () => {
    return (
        <div className='bg-black max-w-[1450px] mx-auto'>
            <div className="carousel w-full mb-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={managementThre} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={managementTwo} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={managementFour} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={managementOne} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='flex justify-evenly'>
                <div className='pb-10'>
                    <h1 className='text-white text-2xl font-bold'>Building Management</h1>

                    <a className='text-2xl text-green-400' href="https://github.com/mehediislamm/building-management-client">Project Code</a>
                    <div>
                        <a className='text-red-500' href="https://building-management-42ca6.web.app/">Live Site click</a>
                    </div>

                </div>

                <div>
                    <h1 className='text-white text-2xl font-bold'>Online group Study</h1>

                    <a className='text-2xl text-green-400' href="https://github.com/mehediislamm/online-group-study-client">Project Code</a>
                    <div>
                        <a className='text-red-500' href="https://study-group-ee61f.web.app/">Live Site click</a>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Project;