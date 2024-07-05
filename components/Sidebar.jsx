"use client";
import React from "react";
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { FaCheck, FaHome, FaUser } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
import { CiBoxList } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { Input } from "antd";


// zustand

const Sidebar = ({ filter, pathName }) => {
  return (
    <div className="w-80 min-h-screen h-full fixed bg-zinc-950 flex-col justify-between items-start px-7 py-3 flex mr-80">
      <div className="flex-col justify-start items-start gap-y-5 inline-flex">
        <div className="w-[98.37px] h-4 relative">
          <Image
            className="w-[98.37px] h-4 left-0 top-0 absolute"
            src="/assets/icons/logo-big.svg"
            alt=""
            width={0}
            height={0}
          />
        </div>
        <div className="flex-col justify-start items-center gap-1 inline-flex">
          <div className="pb-5 border-b border-stone-900 flex-col justify-start items-start gap-1 flex">
            {/* search query */}
            <div className="pb-4 flex-col justify-start items-start flex">
              <Input
                name="movie_query"
                placeholder="Search"
                size="large"
                prefix={<IoIosSearch />}
                onChange={filter}
                className="!w-[264px] p-3 bg-black rounded-lg border border-stone-900 justify-start items-center gap-4 inline-flex"
              />
            </div>

            {/* HOME */}
            <div
              className={`w-[264px] p-3 rounded-lg justify-start items-center gap-4 inline-flex hover:bg-stone-600 cursor-pointer ${
                pathName === "/" && "bg-stone-900"
              }`}
            >
              <div className="w-6 h-5 justify-center items-center flex">
                <div className="w-6 text-center text-gray-200 text-[15px] font-light font-['SF Pro Text'] leading-tight">
                  <FaHome />
                </div>
              </div>
              <div className="text-gray-200 text-[15px] font-medium font-['SF Pro Text'] leading-tight">
                Home
              </div>
            </div>

            {/* LIBRARY */}
            <div
              className={`w-[264px] p-3 rounded-lg justify-start items-center gap-4 inline-flex hover:bg-stone-600 cursor-pointer ${
                pathName === "/library" && "bg-stone-900"
              }`}
            >
              <div className="w-6 h-5 justify-center items-center flex">
                <div className="w-6 text-center text-gray-200 text-[15px] font-light font-['SF Pro Text'] leading-tight">
                  <LuLibrary />
                </div>
              </div>
              <div className="text-gray-200 text-[15px] font-medium font-['SF Pro Text'] leading-tight">
                Library
              </div>
            </div>

            {/* WATCHED */}
            <div
              className={`w-[264px] p-3 rounded-lg justify-start items-center gap-4 inline-flex hover:bg-stone-600 cursor-pointer ${
                pathName === "/watched" && "bg-stone-900"
              }`}
            >
              <div className="w-6 h-5 justify-center items-center flex">
                <div className="w-6 text-center text-gray-200 text-[15px] font-light font-['SF Pro Text'] leading-tight">
                  <FaCheck />
                </div>
              </div>
              <div className="text-gray-200 text-[15px] font-medium font-['SF Pro Text'] leading-tight">
                Watched
              </div>
            </div>

            {/* FRIENDS */}
            <div
              className={`w-[264px] p-3 rounded-lg justify-start items-center gap-4 inline-flex hover:bg-stone-600 cursor-pointer ${
                pathName === "/friends" && "bg-stone-900"
              }`}
            >
              <div className="w-6 h-5 justify-center items-center flex">
                <div className="w-6 text-center text-gray-200 text-[15px] font-light font-['SF Pro Text'] leading-tight">
                  <FaUser />
                </div>
              </div>
              <div className="text-gray-200 text-[15px] font-medium font-['SF Pro Text'] leading-tight">
                Friends
              </div>
              <div className="px-1.5 bg-gray-200 rounded-[20px] flex-col justify-center items-end gap-2 inline-flex">
                <div className="text-center text-zinc-950 text-[15px] font-medium font-['SF Pro Text'] leading-tight">
                  1
                </div>
              </div>
            </div>
          </div>
          {/* MY LISTS */}
          <div className="w-60 pr-[171px] pt-3 justify-start items-center inline-flex">
            <div className="text-neutral-400 text-[13px] font-normal font-['SF Pro Text'] uppercase leading-tight tracking-wider">
              My lists
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            {/* LISTS */}
            <div className="flex-col justify-start items-start gap-1 flex">
              {/* ACTIONS */}
              <div className="w-[264px] px-3 py-2.5 rounded-lg justify-start items-center gap-4 inline-flex cursor-pointer hover:bg-stone-600">
                <div className="w-6 h-6 bg-amber-400 rounded justify-center items-center flex">
                  <div className="w-6 h-6 text-center text-zinc-800 text-xs font-medium font-['SF Pro Text'] leading-tight">
                    <CiBoxList />
                  </div>
                </div>
                <div className="text-gray-200 text-[15px] font-medium font-['SF Pro Text'] leading-tight">
                  Action
                </div>
              </div>

              {/* TOP 100 */}
              <div className="w-[264px] px-3 py-2.5 rounded-lg justify-start items-center gap-4 inline-flex cursor-pointer hover:bg-stone-600">
                <div className="w-6 h-6 bg-amber-400 rounded justify-center items-center flex">
                  <div className="w-6 h-6 text-center text-zinc-800 text-xs font-medium font-['SF Pro Text'] leading-tight">
                    <CiBoxList />
                  </div>
                </div>
                <div className="text-gray-200 text-[15px] font-medium font-['SF Pro Text'] leading-tight">
                  My Top 100
                </div>
              </div>
            </div>

            {/* CREATE LIST */}
            <div className="w-[264px] pl-3 pr-5 py-2.5 bg-red-500 rounded-lg justify-center items-center gap-1 inline-flex hover:opacity-90 cursor-pointer">
              <div className="w-6 h-6 rounded justify-center items-center flex text-zinc-950">
                <IoMdAdd />
              </div>
              <div className="text-zinc-950 text-[15px] font-bold font-['SF Pro Text'] leading-tight">
                Create list
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ACCOUNT */}
      <div className="w-[264px] px-3 py-2.5 rounded-lg justify-between items-center gap-2 inline-flex">
        <div className="flex justify-start items-center gap-x-2">
          <div className="w-8 h-8 pl-[21px] pt-[21px] rounded-[32px] border-2 border-stone-900 justify-end items-center flex">
            <div className="w-[11px] h-[11px] bg-lime-500 rounded-full border-2 border-stone-900" />
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-gray-200 text-[15px] font-bold font-['SF Pro Text'] leading-none">
              Yulius Kevin
            </div>
            <div className="text-neutral-400 text-[13px] font-normal font-['SF Pro Text'] leading-none">
              @yeka157
            </div>
          </div>
        </div>
        <div className="rounded-[20px] flex-col justify-center items-center p-2 inline-flex hover:bg-gray-500">
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
