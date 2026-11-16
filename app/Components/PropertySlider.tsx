import HeroSlide from "./HeroSlide";

export default function PropertySlider() {
    return (
        <HeroSlide
            active={0}
            bg="/image.jpg"
            location="Palm Springs, CA"
            title={<>Futuristic <br /> Haven</>}
            stats={[
                { icon: "/Simplification.jpg", label: "4 Bedrooms" },
                { icon: "/Bathroom.jpg", label: "4 Bathrooms" },
                { icon: "/Parking.jpg", label: "Parking Space" },
                { value: "$4,750,000", label: "For selling price" },
            ]}
        />
    );
}
