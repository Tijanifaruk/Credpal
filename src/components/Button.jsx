import React from "react";
// import { toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Button = () => {
  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS device → App Store
      window.location.href = "https://apps.apple.com/us/app/credpal/id1541846382";
    } else if (/android/i.test(userAgent)) {
      // Android device → Play Store
      window.location.href = "https://play.google.com/store/apps/details?id=com.credpal.loan";
    } else {
      // Any other device (e.g., desktop) → Play Store or fallback page
      window.location.href = "https://play.google.com/store/apps/details?id=com.credpal.loan";
    }
  };

  return (
    <>
      <button
        onClick={handleRedirect}
        className="bg-white text-black  rounded-xl text-base font-medium hover:bg-gray-400 px-8 py-2"
      >
        Download
      </button>
    </>
  );
};

export default Button;
