import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Mohamed Farid</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Computer Science student at{" "}
            <span className="text-[#915EFF]">The University of Manchester.</span>
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <button
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
          className="text-white bg-gray-800 p-3 rounded-full shadow-md animate-bounce"
          style={{ fontSize: "24px", lineHeight: "24px" }}
        >
          &#8964;
        </button>
      </div>
    </section>
  );
};

export default Hero;