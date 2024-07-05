import Image from "next/image";
import React from "react";
import { FaCheck, FaPlus } from "react-icons/fa";

const FilmCard = ({ title, year, img, type, onClick }) => {
  return (
    <div className="rounded-lg w-44 h-64 relative group basis-1/5 max-w-1/5" style={{marginTop: '8px', marginBottom: '8px'}}>
      <div className="absolute top-4 right-2 border rounded-full p-1 z-10 bg-zinc-950" onClick={onClick}>
        {/* <FaPlus /> */}
        <FaCheck />
      </div>
      <div className="h-full">
        <Image
          width={0}
          height={0}
          quality={100}
          className="object-cover rounded-lg size-full group-hover:opacity-80"
          alt=""
          src={img}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <div>
        <h3 className="text-sm line-clamp-2">
          {title} ({year})
        </h3>
        <p>{type[0].toUpperCase() + type.slice(1, type.length)}</p>
      </div>
    </div>
  );
};

export default FilmCard;
