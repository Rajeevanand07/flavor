import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleLoginData = async (data) => {
    // console.log("Login Data:", data);
    try {
      const res = await axios.post("https://flavor-fm8j.onrender.com/api/user/login", data , {
        withCredentials : true
      })
      console.log(res.data)
      toast.success(res.data.message)
      navigate("/")
    } catch (error) {
      console.log(error)
      toast.error("login failed")
    }
    reset();
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8 px-4'>
      <div className='max-w-xl mx-auto'>
        <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
          <div className='bg-gradient-to-r from-orange-500 to-red-500 p-6'>
            <h1 className='text-3xl font-bold text-white text-center'>Login</h1>
            <p className='text-white/80 text-center mt-2'>Welcome back to your kitchen</p>
          </div>

          <div className='p-6'>
            <form onSubmit={handleSubmit(handleLoginData)} className='flex flex-col gap-3'>
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-gray-700'>Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200'
                  placeholder='Enter your email'
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-semibold text-gray-700'>Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200'
                  placeholder='Enter your password'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg'
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
