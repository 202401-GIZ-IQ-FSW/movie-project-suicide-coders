import SectionsMovie from "@/components/landingPage/sections/SectionsMovie"
import SectionTv from "@/components/tv/SectionsTv";
import { trendingNowTv, onTheAir, airingToday, popularTvShows , topRatedTvShows} from "@/data/API/mainApi"

async function page  () {
    const trendingTvShowData = await trendingNowTv();
    const onTheAirData  = await onTheAir();
    const airingTodayData  = await airingToday();
    const popularTvShowsData = await popularTvShows();
    const topRatedTvShowsData = await topRatedTvShows();
    return (
    <div className="py-5 px-2">
        <SectionTv title={"Trend"} moviesData={trendingTvShowData}/>
        <SectionTv title={"On The Air"} moviesData={onTheAirData}/>
        <SectionTv title={"Airing Today"} moviesData={airingTodayData}/>
        <SectionTv title={"Top Rated"} moviesData={topRatedTvShowsData}/>
        <SectionTv title={"Popular "} moviesData={popularTvShowsData}/>


    </div>
  )
}

export default page