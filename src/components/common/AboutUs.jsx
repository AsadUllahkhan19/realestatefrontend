import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="pt-16 pb-20">
      <div className="flex flex-wrap gap-24">
        <div className="relative flex-1 basis-[18rem] border">
          <img
            src="/images/About1.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src="/images/About2.jpg"
            alt=""
            className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>
        <div className="relative flex-1 basis-[22rem]">
          <h1 className="heading">About Us</h1>
          <p className="mt-3">
          Macworld Properties has introduced itself as a leading property brokerage, investment, and as well as consultancy company that meets the requirements of today’s dynamic real estate industry.
          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-white !bg-black/20">
                <BiHomeAlt />
              </div>
              <div>
                <p>
                We believe in total client satisfaction and as a multi-faceted company, we render more than regular real estate services, we offer in-house asset management, property management, and market advice in addition to property sale and leasing services.
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
            <div className="icon-box text-white !bg-black/20">
                <BiGlobe />
              </div>
              <div>
                <p>
                Being established in 2017 our broad spectrum of both customizable and innovative solution providing for property and wealth management makes us stand not only ahead but different in the property business.
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
            <div className="icon-box text-white !bg-black/20">
                <BiCreditCard />
              </div>
              <div>
                <p>
                Equipped with a dedicated team of professionals comprising of extensive local and international experience we proclaim a portfolio of commercial, residential, retail and off plan properties .
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
            <div className="icon-box text-white !bg-black/20">
                <BiCreditCard />
              </div>
              <div>
                <p>
                Providing a reliable source of information on the properties and market trends, our property consultants are well-versed in the principles of the real estate market, negotiation, market analysis, property management, and ethical conduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;