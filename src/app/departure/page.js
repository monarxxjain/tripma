import Footer from "@/components/molecules/common/Footer";
import Navbar from "@/components/molecules/common/Navbar";
import SearchResults from "@/components/molecules/departure/SearchResults";

export default function Home() {
    return(
        <>
            <Navbar/>
            <SearchResults />
            <Footer/>
        </>
    )
}