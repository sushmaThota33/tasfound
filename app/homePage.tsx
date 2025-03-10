import Image from "next/image";

export function HomePage() {
    return (
        <div className="mx-12 my-10">
            <div className="w-full flex justify-between">
                <div className="w-[50%] flex flex-col py-24">
                    <span className="px-6 font-bold italic text-2xl">Empowering communities, transforming lives </span>
                    <span className="text-lg leading-6 py-10 pl-6 pr-10">The Tanveer Ahmad Siddiqui Foundation (TASF) is dedicated to making a difference by providing education, healthcare, and community support to those in need.</span>
                </div>
                <div className="w-[50%]">
                    <Image
                        className="dark:invert"
                        src="/hands.jpg"
                        alt="Next.js logo"
                        width={600}
                        height={200}
                        priority
                    />
                </div>
            </div>
            <div className="my-10 w-full flex flex-row gap-3">
                <div className="w-[50%]">
                    <span className="font-bold text-lg">Education Support</span>
                    <div className="my-3">
                        <Image
                            className="dark:invert"
                            src="/learning_support.webp"
                            alt="Next.js logo"
                            width={600}
                            height={200}
                            priority
                        />
                    </div>
                </div>
                <div className="w-[50%]">
                    <span className="font-bold text-lg">Women Empowerment</span>
                    <div className="my-3">
                        <Image
                            className="dark:invert"
                            src="/women_emp.webp"
                            alt="Next.js logo"
                            width={600}
                            height={200}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}