import FilmCard from "@/components/FilmCard";
import Sidebar from "@/components/Sidebar";
// import supabase from "@/utils/supabase/server";
// import axios from "axios";
// import { debounce } from "lodash";
// import { usePathname } from "next/navigation";
import React from "react";

const FilmContainer = async () => {
  // const [movies, setMovies] = useState([]);
  // const pathName = usePathname();

  const getData = async () => {
    // let res = await axios.get(
    //   `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=queen`
    // );
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=queen`,
      { cache: "no-store" }
    );
    return response.json();
    // setMovies((prev) => (prev = res.data.Search));
  };

  const getLibraryData = async () => {
    // let {data, error} = await supabase().from("movies").select();
  };

  const test = await getData();
  // const handleSearch = debounce(async (e) => {
  //   if (e.target.value) {
  //     let res = await axios.get(
  //       `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${e.target.value}`
  //     );
  //     setMovies((prev) => (prev = res.data.Search));
  //   } else getData();
  // }, 1000);

  const handleAdd = async () => {};

  // useEffect(() => {
  //   if (pathName === "/") {
  //     getData();
  //   }
  // }, [pathName]);
  return (
    <React.Fragment>
      <Sidebar filter={null} pathName={'/'} />
      <div className="min-h-screen w-full !ml-80">
        <div className="gap-y-24 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {test.Search.map((val, idx) => {
            return (
              <FilmCard
                key={idx}
                title={val.Title}
                year={val.Year}
                img={val.Poster}
                type={val.Type}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FilmContainer;
