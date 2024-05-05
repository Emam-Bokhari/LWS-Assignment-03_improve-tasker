import { Fragment } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import TaskBoard from "./components/task/TaskBoard"
import Footer from "./components/Footer"

export default function App() {
  return (
    <Fragment>

      <div className="bg-[#191D26] font-[Inter] text-white">

        <Header />
        <Banner />
        <TaskBoard />
        <Footer />

      </div>

    </Fragment>
  )
}