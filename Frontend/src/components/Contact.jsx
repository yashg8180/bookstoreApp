// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";

// function Contact() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//     };

//     return (
//         <>
//             <div className='flex h-screen items-center justify-center'>
//                 <div className="w-[500px]">
//                     <div className="modal-box">
//                         <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//                             <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//                             <h3 className="font-bold text-lg">Contact Us</h3>
//                             {/* Name */}
//                             <div className='mt-4 space-y-2'>
//                                 <span>Name</span>
//                                 <br/>
//                                 <input 
//                                     type='text' 
//                                     placeholder='Enter your Full Name' 
//                                     className='w-80 px-3 py-1 border rounded-md outline-none'
//                                     {...register("name", { required: true })}
//                                 />
//                                 <br />
//                                 {errors.name && (<span className='text-sm text-red-500'>This field is required</span>)}
//                             </div>
//                             {/* Email */}
//                             <div className='mt-4 space-y-2'>
//                                 <span>Email</span>
//                                 <br/>
//                                 <input 
//                                     type='email' 
//                                     placeholder='Enter your Email' 
//                                     className='w-80 px-3 py-1 border rounded-md outline-none'
//                                     {...register("email", { required: true })}
//                                 />
//                                 <br />
//                                 {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
//                             </div>
//                             {/* Message */}
//                             <div className='mt-4 space-y-2'>
//                                 <span>Message</span>
//                                 <br/>
//                                 <textarea 
//                                     placeholder='Enter your Message' 
//                                     className='w-80 px-3 py-1 border rounded-md outline-none'
//                                     rows="4"
//                                     {...register("message", { required: true })}
//                                 />
//                                 <br />
//                                 {errors.message && (<span className='text-sm text-red-500'>This field is required</span>)}
//                             </div>
//                             {/* Button */}
//                             <div className='flex justify-around mt-4'>
//                                 <button 
//                                     type='submit' 
//                                     className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
//                                     Submit
//                                 </button>
//                                 {/* <p>Need help?{" "} 
//                                     <Link to="/help" className='underline text-blue-500 cursor-pointer'>
//                                         Help Center
//                                     </Link>
//                                 </p> */}
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Contact;
import React from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Contact() {
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Submitting data:", data); // Debugging
        try {
            const response = await fetch("http://localhost:4002/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
       
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                reset(); // Clear form after successful submission
                // navigate("/");
                setTimeout(() => {
                    navigate("/");
                }, 500); 
            } else {
                alert("Submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="w-[500px]">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Contact Us</h3>

                        {/* Name */}
                        <div className='mt-4 space-y-2'>
                            <span>Name</span><br/>
                            <input 
                                type='text' 
                                placeholder='Enter your Full Name' 
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("name", { required: true })}
                            />
                            <br />
                            {errors.name && (<span className='text-sm text-red-500'>This field is required</span>)}
                        </div>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br/>
                            <input 
                                type='email' 
                                placeholder='Enter your Email' 
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
                        </div>

                        {/* Message */}
                        <div className='mt-4 space-y-2'>
                            <span>Message</span><br/>
                            <textarea 
                                placeholder='Enter your Message' 
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                rows="4"
                                {...register("message", { required: true })}
                            />
                            <br />
                            {errors.message && (<span className='text-sm text-red-500'>This field is required</span>)}
                        </div>

                        {/* Button */}
                        <div className='flex justify-around mt-4'>
                            <button 
                                type='submit' 
                                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

