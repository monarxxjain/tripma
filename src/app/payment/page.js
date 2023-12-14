import Footer from "@/components/molecules/common/Footer";
import Navbar from "@/components/molecules/common/Navbar";
import PaymentDetails from "@/components/molecules/payment/PaymentDetails";

export default function Home(){
    return(
        <>
            <Navbar/>
            <PaymentDetails/>
            <Footer/>
        </>
    )
}