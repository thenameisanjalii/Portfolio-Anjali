import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data"; // Adjust import as per your file structure
import MagicButton from "./MagicButton";
import { BackgroundLines } from "./ui/background-lines";
import home_assets from "@/assets/home_assets";

// TypeScript types for social media info
interface SocialMediaInfo {
  id: number;
  link: string;
  img: string;
}

const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Absolute positioned background grid */}
      <BackgroundLines>
        <div className="w-full absolute left-0 -bottom-72 min-h-96 z-0">
          <img
            src={home_assets.footerGrid}
            alt="grid"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        </div>

        <div className="flex flex-col items-center relative z-10">
          <h1 className="heading lg:max-w-[45vw] text-center dark:text-white text-theme-neutral-900">
            Ready to bring your{" "}
            <span className="text-theme-yellow-600 dark:text-theme-yellow-600">
              ideas
            </span>{" "}
            to life?
          </h1>
          <p className="text-theme-neutral-600 dark:text-theme-neutral-400 md:mt-10 my-5 text-center">
            Feel free to reach out — I&apos;m here to help turn your goals into
            real, working solutions.
          </p>
          <a href="mailto:anjalichourasia636@gmail.com" className="z-20">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </BackgroundLines>

      {/* Social media and copyright section */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-theme-neutral-600 dark:text-theme-neutral-400">
          Copyright © 2024 Anjali Chourasia
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info: SocialMediaInfo) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-10 h-10 cursor-pointer flex justify-center items-center 
                backdrop-filter backdrop-blur-lg saturate-180 
                bg-opacity-75 dark:bg-theme-neutral-800 bg-theme-neutral-200
                rounded-lg border dark:border-theme-neutral-700 border-theme-neutral-300
                hover:bg-opacity-90 dark:hover:bg-theme-neutral-700 hover:bg-theme-neutral-100
                transition-colors duration-200"
              >
                <img
                  src={info.img}
                  alt="icons"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
