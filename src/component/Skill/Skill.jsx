import javascript from '../../assets/js-removebg-preview.png'
import html from '../../assets/html-removebg-preview.png'
import firebase from '../../assets/firebasel-removebg-preview.png'
import tawild from '../../assets/tawilnd.png'
import nodejs from '../../assets/node.png'
import mongobd from '../../assets/mongo-removebg-preview.png'
import react from '../../assets/react.png'
import github from '../../assets/colorGit-removebg-preview.png'
import vscode from '../../assets/vscode-removebg-preview.png'
import vercel from '../../assets/logo-vercel-removebg-preview.png'


const Skill = () => {
    return (
        <div className="bg-black">
            <h4 className="text-white   text-center pt-10 mb-6">EDUCATION & SKILL</h4>
            <div className='max-w-[1450px] mx-auto'>
                 
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='text-center'>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-5"> comfortable</h1>
                            <div className='flex justify-center' >
                                <img className='w-10' src={html} alt="" />
                            </div>
                            <progress className="progress progress-success w-56 justify-center " value="70" max="100"></progress>

                        </div>
                        <div>

                            <div className='flex justify-center'>
                                <img className='w-10' src={firebase} alt="" />
                            </div>
                            <progress className="progress progress-success w-56" value="70" max="100"></progress>

                        </div>
                        <div>

                            <div className='flex justify-center'>
                                <img className='w-10' src={tawild} alt="" />
                            </div>
                            <progress className="progress progress-success w-56" value="70" max="100"></progress>

                        </div>
                    </div>
                    {/* familer */}
                    <div className='text-center'>
                        <div>
                            <div >
                                <h1 className="text-2xl font-bold text-white mb-5"> familer</h1>
                                <div className='flex justify-center'>
                                    <img className='w-10' src={nodejs} alt="" />
                                </div>
                                <progress className="progress progress-success w-56" value="70" max="100"></progress>

                            </div>
                            <div>

                                <div className='flex justify-center'>
                                    <img className='w-10' src={mongobd} alt="" />
                                </div>
                                <progress className="progress progress-success w-56" value="70" max="100"></progress>

                            </div>
                            <div>

                                <div className='flex justify-center'>
                                    <img className='w-10' src={react} alt="" />
                                </div>
                                <progress className="progress progress-success w-56" value="70" max="100"></progress>

                            </div>
                        </div>
                    </div>

                    {/* tools */}
                    <div className='text-center'>
                        <div>
                            <div>
                                <h1 className="text-2xl font-bold text-white mb-5"> tools</h1>
                                <div className='flex justify-center'>
                                    <img className='w-10' src={github} alt="" />
                                </div>
                                <progress className="progress progress-success w-56" value="70" max="100"></progress>

                            </div>
                            <div>

                                <div className='bg-red-500 flex justify-center'>
                                    <img className='w-10' src={vercel} alt="" />
                                </div>
                                <progress className="progress progress-success w-56" value="70" max="100"></progress>

                            </div>
                            <div>

                                <div className='flex justify-center'>
                                    <img className='w-10' src={vscode} alt="" />
                                </div>
                                <progress className="progress progress-success w-56" value="70" max="100"></progress>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;