"use client"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SectionTv = ({ title, moviesData }) => {
  const router = useRouter();

  const src = "https://image.tmdb.org/t/p/original";
  const [selectVlaue, setSelectVlaue] = useState("day");

  const handleChange = ({ target }) => {
    setSelectVlaue(target.value);
    router.push(`/?=${target.value}`);
  };

  return (
    <>
      <div className="px-4 pt-5 flex justify-between items-center">
        <div className="flex">
          <h1 className="text-3xl">{title}</h1>
          {title == "Trending" ? (
            <select
              onChange={handleChange}
              value={selectVlaue}
              className="ml-2 select w-full max-w-xs dark:bg-dark outline-0 border-0 focus:outline-0 text-white"
            >
              <option>day</option>
              <option>week</option>
            </select>
          ) : (
            ""
          )}
        </div>
        <Link
          href={{
            pathname: `/tvshow`,
            query: { tv: title },
          }}
        >
          <span className=" text-red-600 ">See All +</span>
        </Link>
      </div>
      <div className="carousel carousel-center   p-4 pt-1 space-x-4 bg-neutral rounded-box my-5 max-w-full ">
        {moviesData.results.slice(0, 12).map((item, i) => (
          <div
            className="card card-compact carousel-item  shadow-xl hover:scale-105 transition-all ease-in duration-200"
            key={i}
          >
            <Link
              href={{
                pathname: `/tvshows/${item.id}`,
              }}
            >
                <figure>
                  <img
                  className="w-[14rem] rounded-md"
                   src={src + item.poster_path} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl lg:text-2xl">{item.original_name.slice(0,12)}</h2>
                  <div className="absolute bottom-2 md:text-sm text-[10px] right-2 flex">
                    <span className="text-yellow-400 font-bold mr-1">
                      <FontAwesomeIcon className=" " icon={faStar} />
                    </span>
                    <p>{item.vote_average.toString().slice(0, 3)}</p>
                  </div>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionTv;
