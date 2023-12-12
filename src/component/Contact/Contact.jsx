import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


const Contact = () => {
    return (
        <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
             
                <div className="">
                    <div className="text-center bg-slate-100 mb-5 rounded-xl ">
                        <p className="pt-3 flex justify-center"><MdEmail size={20}></MdEmail></p>
                        <h2 className="  font-bold">E-mail</h2>
                        <p className="pb-3   ">mdmehediislammoksedul@gamil.com</p>
                    </div>
                    <div className="text-center bg-red-600 mb-5 rounded-xl">
                        <p className="pt-3 flex justify-center "><FaPhoneAlt size={20}></FaPhoneAlt></p>
                        <h2 className="text-white font-bold">Phone</h2>
                        <p className="pb-3 text-white">(+880)1834292320</p>
                    </div>
                    <div className="text-center bg-slate-100 rounded-xl ">
                        <p className="pt-3 flex justify-center"><IoLocationOutline size={20}></IoLocationOutline></p>
                        <h2 className="  font-bold">Location</h2>
                        <p className="pb-3  ">Bangladesh, Rangpur</p>
                    </div>
                </div>

                {/* type message section  */}

                <div className="flex-1">
                    <div >
                        <form >
                            <div className="form-control mb-5">

                                <input type="text" placeholder="Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control mb-5">

                                <input type="email" placeholder="Email address" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-5">

                                <input type="text" placeholder="Phone number" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-5">

                                <input type="text" placeholder="service name" className="input input-bordered" />
                            </div>
                            <div className="mb-">
                                <textarea className="textarea textarea-bordered w-full" placeholder="message.."></textarea>

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Your Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
 


    );
};

export default Contact;