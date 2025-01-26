import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SplitScreen from "./components/SplitScreen";


const CombinedSplitScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
        <Header/>
        <SplitScreen leftWidth={12} rightWidth={64}>
            <Sidebar/>
            <Content/>
        </SplitScreen>
        <Footer/>
    </div>
  )
}

export default CombinedSplitScreen
