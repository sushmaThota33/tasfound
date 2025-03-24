import Image from "next/image";

export function HomePage() {
  const basePath = process.env.NODE_ENV === "production" ? "" : "";
  return (
    <div className="mx-4 md:mx-12 my-5 md:my-10">
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-[50%] flex flex-col py-10 md:py-24">
          <span className="px-4 md:px-6 font-bold italic text-xl md:text-2xl">
            Empowering communities, transforming lives
          </span>
          <span className="text-base md:text-lg leading-6 py-6 md:py-10 pl-4 md:pl-6 pr-6 md:pr-10">
            The Tanveer Ahmad Siddiqui Foundation (TASF) is dedicated to making a difference by providing education, healthcare, and community support to those in need.
          </span>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            className="dark:invert w-full h-auto"
            src={`${basePath}/hands.jpg`}
            alt="Community support"
            width={600}
            height={200}
            priority
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="my-5 md:my-10 w-full flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[50%]">
          <span className="font-bold text-base md:text-lg">Education Support</span>
          <div className="my-3">
            <Image
              className="dark:invert w-full h-auto"
              src={`${basePath}/learning_support.webp`}
              alt="Education support"
              width={600}
              height={200}
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <span className="font-bold text-base md:text-lg">Women Empowerment</span>
          <div className="my-3">
            <Image
              className="dark:invert w-full h-auto"
              src={`${basePath}/women_emp.webp`}
              alt="Women empowerment"
              width={600}
              height={200}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}