import React from "react";
export default function Avatar(props) {
const {kelompok,motto,image} = props;
return (
<div class="flex flex-col items-center justify-center bggray-
50 shadow-md">
  <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" 
  src={image} alt="Gambar"
  ></img>
  <div class="flex flex-col items-center justify-center bggray-
50 shadow-md">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      {kelompok}
    </h3>
    <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      {motto}
    </h3>
    </div>
    </div>
    </div>

);
}