// import React from "react";

// const Button = () => (
//   <button className="bg-white text-black px-4 py-3 rounded-xl text-sm font-medium hover:bg-gray-200">
//             Download 
//           </button>
// );

// export default Button;


import React from "react";
import { toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Button = () => {
  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = "https://apps.apple.com/us/app/credpal/id1541846382";
    } else if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.credpal.loan";
    } else {
      // Show toast message if it's not a mobile device
      toast.error("App is only available on mobile devices.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <button
        onClick={handleRedirect}
        className="bg-white text-black p-2 rounded-xl text-sm font-medium hover:bg-gray-200"
      >
        Download
      </button>
    </>
  );
};

export default Button;
