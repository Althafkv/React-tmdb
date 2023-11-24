import { createRef, useRef, useState } from "react";
import Details from "./Details";

function MovieGrid({ results }) {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState({});

  const showDetails = (index) => {
    setMovie(results[index]);
    setIsOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:p-5 md:p-5 gap-3 mb-5 mt-5">
      {results.length > 0 ? (
        results.map(
          (
            { id, poster_path, original_title, release_date, overview },
            index
          ) => (
            <div className="bg-gray-600 p-2 rounded-lg movie-item" key={id}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + poster_path}
                alt={original_title}
              />
              <div className="font-bold text-white mt-2">
                {original_title.slice(0, 20)}...
              </div>
              <div className="text-gray-400  ">{release_date}</div>
              <div className="text-gray-400  h-6 overflow-ellipsis overflow-clip">
                {overview}
              </div>
              <button
                className="bg-green-400 p-2 rounded-lg text-center mt-2 w-full font-bold"
                onClick={() => showDetails(index)}
              >
                Details
              </button>
            </div>
          )
        )
      ) : (
        <>
          <div>No result found</div>
        </>
      )}
      {isOpen && <Details setOpenModal={setIsOpen} movie={movie} />}
    </div>
  );
}

export default MovieGrid;
