export default function Hero() {
    return (
        <>
            <section className="relative block h-32 md:h-48 lg:h-96">
                <div className="absolute top-0 w-full h-full bg-center bg-contain bg-repeat-x" style={{
                    backgroundImage: "url('/bg.jpg')"
                }}>
                </div>
            </section>
        </>
    )
}
