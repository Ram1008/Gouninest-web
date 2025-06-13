// import Image from "next/image";
// import React from "react";

// const LatestPost = ({ image, title, time, date }) => {
//   return (
//     <div className="bg-black h-full flex">
//       <div className="relative">
//         <Image
//           src={"/blogs/blog2.png"}
//           width={360}
//           height={250}
//           alt="blog"
//           className="opacity-50"
//         />
//         <div className="absolute top-10 px-8 flex flex-col gap-10">
//           <h3 className="text-2xl sm:text-3xl md:text-2xl text-white font-light">
//             9 Bizarrely Awkward American Questions That Baffle the Rest of the
//             World!
//           </h3>

//           <div className="flex items-center text-white italic font-thin gap-5 w-full">
//             <p>March 06, 2025</p>
//             <div className="w-4 h-0.5 bg-white rounded-lg"></div>
//             <p>2 hours read</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestPost;

import Image from "next/image";
import React from "react";

const LatestPost = ({ image, title, time, date }) => {
  return (
    <div className="bg-black h-full flex">
      <div className="relative w-full">
        <Image
          src={image || "/blogs/blog2.png"}
          width={360}
          height={250}
          alt="blog"
          className="opacity-50 w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-xl md:text-2xl text-white font-light mt-4">
            {title ||
              "9 Bizarrely Awkward American Questions That Baffle the Rest of the World!"}
          </h3>

          <div className="flex items-center text-white italic font-thin gap-2 sm:gap-4 w-full text-xs sm:text-sm mb-4">
            <p>{date || "March 06, 2025"}</p>
            <div className="w-2 sm:w-4 h-0.5 bg-white rounded-lg"></div>
            <p>{time || "2 hours read"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;