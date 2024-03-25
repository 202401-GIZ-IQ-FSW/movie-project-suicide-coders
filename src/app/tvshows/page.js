import SectionsMovie from "@/components/landingPage/sections/SectionsMovie"
import SectionTv from "@/components/tv/SectionsTv";
import { trendingNowTv } from "@/data/API/mainApi"

async function page  () {
    const tvShowsData = await trendingNowTv();
console.log(tvShowsData)
  return (
    <div>
        <SectionTv title={"Trend"} moviesData={tvShowsData}/>
    </div>
  )
}

export default page