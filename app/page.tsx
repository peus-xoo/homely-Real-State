import Header from "@/app/Components/Header";
import Hero from "@/app/Components/Hero";
import PropertiesShowcase from "@/app/Components/PropertiesShowcase";
import Properties from "@/app/Components/Properties";
import SlideProperty from "@/app/Components/SlideProperty";
import ClientTesto from "@/app/Components/ClientTesto";
import Insights from "@/app/Components/Insights";
import Charms from "@/app/Components/Charms";
import FAQ from "@/app/Components/Faq";
import Footer from "@/app/Components/footer";

export default function Home() {
    return (
        <>
            {/* Header is absolutely positioned over the hero */}
            <div className="relative">
                <Header/>
                <Hero/>
            </div>

            <main>
                <PropertiesShowcase/>
                <Properties/>
                <SlideProperty/>
                <ClientTesto/>
                <Insights/>
                <Charms/>
                <FAQ/>
            </main>

            <Footer/>
        </>
    );
}