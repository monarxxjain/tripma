import Footer from "@/components/molecules/common/Footer";
import Navbar from "@/components/molecules/common/Navbar";
import ConfirmationDetails from "@/components/molecules/confirmation/ConfirmationDetails";

export default function Home() {
    return(
        <>
            <Navbar/>
            <ConfirmationDetails />
            <Footer/>
        </>
    )
}