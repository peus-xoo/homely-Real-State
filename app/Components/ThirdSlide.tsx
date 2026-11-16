import HeroSlide from "./HeroSlide";

export default function ThirdSlide() {
    return (
        <HeroSlide
            active={2}
            bg="/Third.jpg"
            location="Zermatt, Switzerland"
            title={<>Alpine Serenity <br /> Estate</>}
            stats={[
                { icon: "/Simplification.jpg", label: "5 Bedrooms" },
                { icon: "/Bathroom.jpg", label: "4 Bathrooms" },
                { icon: "/Pool.jpg", label: "Private Infinity Pool" },
                { icon: "/Mountain.jpg", label: "Mountain View" },
            ]}
        />
    );
}
