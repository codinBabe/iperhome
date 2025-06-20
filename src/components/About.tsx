"use client";

import { CustomLeftArrow, CustomRightArrow } from "@/utils/Custom-Arrow";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const partnerImages = [
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
];

const AboutUs: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-10">
        <div className="w-full flex flex-col xl:flex-row items-center gap-8 lg:gap-20">
          <div className="md:hidden w-full xl:w-3/5 h-full rounded-xl overflow-hidden flex-shrink-0 -mt-8">
            <Image
              src={"/images/About-Us.webp"}
              alt="About Us"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-[40px] leading-tight lg:text-6xl lg:leading-normal mb-6">
              About us
            </h1>
            <p className="neue-font leading-loose text-[17px]">
              Since 2016, Iper Home LTD is a company dedicated to improving the
              effectiveness of the daily lives of individuals both in private
              and corporate entities. We are confident that we have the manpower
              and financial strength to execute the project in the highest
              professional manner.
            </p>
            <br />
            <p className="neue-font leading-loose text-[17px]">
              Iper Home LTD has been providing sustainable designs for more than
              7 years. Our company has more than 18 employees in our Lagos
              office with affiliate offices in the UK, USA, and Nigeria.
            </p>
          </div>
          <div className="hidden md:block w-full xl:w-3/5 h-full rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={"/images/About-Us.webp"}
              alt="About Us"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-20 w-full flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-2/5 h-full rounded-xl overflow-hidden flex-shrink-0">
            {/* overlapping image effect here */}
            <Image
              src={"/images/what-we-offer.webp"}
              alt="What We Offer"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl mb-4">
              What we offer?
            </h2>
            <p className="neue-font leading-loose text-[17px]">
              As a collective group, we offer global consulting to assist our
              clients in planning, development, design, construction, operation,
              and maintenance of critical infrastructure and smart home
              installations for private owners who are looking to improve
              security, convenience, and energy management in their homes. We
              also corporate owners who require their work operations to be
              seamless and effective
            </p>
          </div>
        </div>

        <div className="mt-20 w-full flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full">
            <h2 className="text-xl md:text-3xl lg:text-4xl mb-4">
              Why choose us?
            </h2>
            <ul className="neue-font leading-loose text-[17px] list-disc pl-12">
              <li>Dedicated support team</li>
              <li>Extron, Leviton & Creston certified.</li>
              <li>CEDIA certified operations team</li>
              <li>Committed to exceptional customer experience</li>
            </ul>
          </div>
          <div className="w-full lg:w-3/5 h-full rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={"/images/why-choose-us.webp"}
              alt="Why Choose Us"
              unoptimized
              width={600}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* our patners */}
        <div className="mt-20 w-full">
          <div className="w-full flex flex-col md:flex-row items-start justify-between">
            <h2 className="text-[40px] leading-loose lg:text-6xl">
              Our Partners
            </h2>
            <p className="md:w-[60%] neue-font leading-loose text-[17px]">
              We have partnered with the best brands and leading product
              manufacturers to ensure our solutions meets global standards and
              best practice in the industry.
            </p>
          </div>
          <div className="w-full mt-12 mb-32 relative">
            <Carousel
              arrows
              autoPlay
              autoPlaySpeed={3000}
              infinite
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
                tablet: { breakpoint: { max: 1024, min: 640 }, items: 4 },
                mobile: { breakpoint: { max: 640, min: 0 }, items: 3 },
              }}
              className="relative"
              containerClass="carousel-container"
            >
              {partnerImages.map((img, idx) => (
                <div key={idx} className="flex justify-center items-center p-4">
                  <Image
                    src={img}
                    alt={`Partner ${idx + 1}`}
                    width={150}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="w-full my-10 bg-[#DDD0C8] px-8 py-6 md:px-14 md:py-18 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[40px] leading-tight lg:text-6xl lg:leading-normal mb-5">
              E-Brochures
            </h2>
            <p className="neue-font leading-loose text-[17px] md:w-[60%]">
              A list of brochures and promotional materials to make you get more
              clarity about our company and products
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-4">
            <button className="w-full neue-font text-white text-lg flex items-center justify-center gap-1 bg-black px-12 py-3.5 rounded-md hover:bg-white hover:text-black transition-colors">
              <svg
                aria-hidden="true"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block"
                fill="currentColor"
              >
                <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path>
              </svg>
              <span>Company Brochure</span>
            </button>
            <button className="w-full neue-font text-white text-lg flex items-center justify-center gap-1 bg-black px-12 py-3.5 rounded-md hover:bg-white hover:text-black transition-colors">
              <svg
                aria-hidden="true"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block"
                fill="currentColor"
              >
                <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path>
              </svg>
              <span>Home Automation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
