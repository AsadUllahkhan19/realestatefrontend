const Hero = () => {
  return (
    <div
      className="relative w-screen min-h-screen flex items-center justify-center md:mt-[-10vh]  overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <div
        className="absolute inset-0 w-screen h-full"
        style={{
          backgroundImage: "url('/images/bgimage3.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="inset-0 flex flex-col items-center h-full justify-center align-center mx-auto"
          style={{ backgroundColor: "#050505", opacity: "0.6" }}
        >
          <h1 className="justify-center heading-h1 align-center mx-auto lg:mt-[15vh] p-6 2xla:text-5xl">
            SAFEST WAY TO BUY, RENT & SELL YOUR PROPERTIES
          </h1>
          <h5 className="justify-center sub-heading1 align-center mx-auto pl-6 2xla:text-3xl">
            Indulge in extravagance with our opulent and luxurious real estate
            properties!
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
