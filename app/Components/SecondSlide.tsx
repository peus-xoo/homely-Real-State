import HeroSlide from "./HeroSlide";

export default function SecondSlide() {
    return (
        <HeroSlide
            active={1}
            bg="/SecondSlide.jpg"
            location="Miami, FL"
            title={<>Tropical <br /> Modern Estate</>}
            stats={[
                { icon: "/Simplification.jpg", label: "5 Bedrooms" },
                { icon: "/Bathroom.jpg", label: "6 Bathrooms" },
                { icon: "/Pool.jpg", label: "Private Infinity Pool" },
                { value: "$6,850,000", label: "For selling price" },
            ]}
        />
    );
}
