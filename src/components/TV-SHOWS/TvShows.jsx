import ScrollRow from "../homepage/ScrollRow";

const TvShows = function () {
  return (
    <div>
      <ScrollRow category="The Best TV Shows" search={"&s=compilation"} />
      <ScrollRow category="The Best Saga" search={"&s=saga"} />
    </div>
  );
};

export default TvShows;
