import { Link } from 'react-router-dom';
import logo from '../assets/react.svg'

const SignUp = () => {
    const handleSubmit = () => {

    }
    return (
        <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4">
                                <img src={logo} loading="lazy" className="w-10" alt="logo" />
                                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign up to unlock the <br /> best of Dream Colleges.</h2>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-16 grid space-y-4">
                                    <label className="font-semibold text-xs" >Username or Email</label>
                                    <input

                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />



                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 right-1 flex items-center px-2 top-6 text-2xl cursor-pointer">
                                            {/* Show password icon */}
                                            {/* <div onClick={togglePassword}>
                                            {showPassword ? (<AiFillEyeInvisible />) : (<AiFillEye />)}
                                        </div> */}
                                        </div>
                                        <label className="font-semibold text-xs mt-3" >Password</label>
                                        <input

                                            className=" group w-full py-3 px-3 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                        // type={showPassword ? "text" : "password"} 
                                        />
                                    </div>

                                    <label className="font-semibold text-xs mt-3" >Confirm password</label>
                                    <input

                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="password" />

                                    <input className='flex items-center justify-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-black text-white font-semibold bg-gray-800 hover:bg-gray-300 cursor-pointer' type="submit" value="Sign Up" />

                                    <p>Or use any of these...</p>

                                    <button
                                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">

                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                                        </div>
                                    </button>

                                    <button
                                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                         hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
                                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                                        </div>
                                    </button>
                                </div>
                            </form>


                            <p className='mt-6 font-semibold'>Already have an account?
                                <Link className='text-blue-500 ml-3' to={'/login'}>Login</Link>
                            </p>
                            <p className='py-6 '>Forgotten Password?
                                <Link className='text-blue-500 ml-3' to={'/forgot-password'}>Reset password</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;