import { redirect } from "next/navigation"


const page = () => {
    redirect("/")
    
  return (
    <div>Movies</div>
  )
}

export default page