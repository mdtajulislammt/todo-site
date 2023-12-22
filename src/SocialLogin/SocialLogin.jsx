import { useLocation, useNavigate,  } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn,facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const loc = location.state?.form?.pathname || '/' ;

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((res) => {
    
     Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Sign In Successfully", 
          showConfirmButton: false,
          timer: 1500
        });
        navigate(loc,{replace: true});
      
      
    });
  };
  const handleFacebookSignIn = () => {
     facebookSignIn()
    .then((res) => {
     Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Sign In Successfully", 
          showConfirmButton: false,
          timer: 1500
        });
      
        navigate(loc,{replace: true});
      
    });
  };
  return (
    <div className=" mb-5">
      {/* <!-- Social login buttons --> */}

      {/* <!-- Facebook --> */}

      <button
      onClick={handleFacebookSignIn}
       className="relative border-2 border-[#5c85ef] hover:border-black flex gap-2 items-center justify-center w-full mb-5 rounded  bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#5c85ef] before:transition-transform before:duration-300 before:content-[''] hover:text-[#5c85ef] before:hover:scale-y-100">
        <FaFacebookF />
        Continue with Facebook
      </button>

      {/* <!-- Google --> */}
      <button
        onClick={handleGoogleSignIn}
        className="relative flex justify-center  w-full rounded  items-center gap-2 border-2 border-[#5c85ef] hover:border-black bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-700 before:content-[''] hover:text-[#5c85ef] before:hover:scale-x-100"
      >
        <FaGoogle />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
