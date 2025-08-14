// src/components/FloatingGradients.jsx
import React from "react";

const FloatingGradients = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 blur-3xl animate-float-slow"></div>
      {/* Blob 2 */}
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 opacity-25 blur-3xl animate-float"></div>
      {/* Blob 3 */}
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 opacity-20 blur-2xl animate-float-reverse"></div>
    </div>
  );
};

export default FloatingGradients;
