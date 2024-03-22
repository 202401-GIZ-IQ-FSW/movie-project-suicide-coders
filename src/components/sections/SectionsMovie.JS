import React from 'react'

const SectionsMovie = ({title, moviesData}) => {
  return (
    <>
        <div className="px-4 pt-5">
        <h1 className="text-3xl">
            {title}
        </h1>
        <span className=""></span>
      </div>
        <div className="carousel carousel-center   p-4 pt-1 space-x-4 bg-neutral rounded-box my-5 max-w-full">
          {moviesData.results.map((item, i) => (
            <div className="carousel-item "  key={i}>
              <Link
                href={{
                  pathname: `/movies/${item.id}`,
                }}
               
              >
                <img
                  style={{
                    width: "15rem",
                  }}
                  className=" rounded-md"
                  src={src + item.poster_path}
                  alt="!"
                />
              </Link>
            </div>
          ))}
        </div>
    </>
  )
}

export default SectionsMovie