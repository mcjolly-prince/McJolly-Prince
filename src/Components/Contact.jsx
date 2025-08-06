import React from "react";
import { useState, useEffect,} from "react";
import { LocationIcon, MailIcon, PhoneIcon } from "./svg";

const Contact = () => {
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    setTimeOfDay(getTimeOfDay());
  }, []);

  function getTimeOfDay() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  return (
    <section className="mx-[30px] lg:mx-[76px] lg:mt-[150px]">
      <div className="flex flex-col items-center gap-[35px] md:gap-[25px]">
        <h3
          className={`font-medium text-[#000]  poppins text-lg text-center max-w-[320px] md:max-w-[992px] md:text-[25px] mmd:leading-[37.5px]`}
        >
          I can help you design, improve or build the product experience for
          your new or existing products. Feel free to get in touch with me.
        </h3>
        <h1 className="poppins font-semibold text-xl text-black md:text-[60px] md:leading-[73.8px]">
          Do You Have Any Idea?
        </h1>

        <p className="flex items-center font-semibold text-[15px] leading-[22.5px] md:text-[20px] md:leading-[30px] text-[#000]">
          try Reach out <small className={`animate-bounce`}>👋</small>
        </p>
      </div>
      <div
        className={`mt-[51px] flex flex-col gap-[60px] lg:flex lg:flex-row items-center justify-center`}
      >
        <div className="flex flex-col items-center gap-[10px]">
          <div className="bg-gradient-to-l from-[#CFFAFF] to-[#CFFAFF00] pr-[1px] pt-[1px] max-w-[75px] max-h-[75px]">
            <MailIcon
            fill={`#000`}
              className={`w-[30px] h-[30px] p-2 md:p-[5px] bg-[#0b040c]  md:w-[36px] md:h-[36px] text-black`}
            />
          </div>
          <a
            className={`text-[#000] font-medium text-base md:text-[20px] md:leading-[30px]`}
            href="mailto:mcjollyngajiprince@gmail.com"
          >
            mcjollyngajiprince@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="bg-gradient-to-r to-[#CFFAFF] from-[#CFFAFF00] pr-[1px] pt-[1px] max-w-[75px] max-h-[50px]">
            <PhoneIcon
              className={`w-[30px] h-[30px] p-2 md:p-[5px] bg-[#0b040c] md:w-[36px] md:h-[36px]`}
            />
          </div>
          <a
            href="tel:+2347018927178"
            className={`text-[#000] tex-base font-medium md:text-[20px] md:leading-[30px]`}
          >
            +2347018927178
          </a>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="bg-gradient-to-l from-[#CFFAFF] to-[#CFFAFF00] pr-[1px] pt-[1px] max-w-[75px] max-h-[75px]">
            <LocationIcon
              className={`w-[30px] h-[30px] p-2 md:p-[5px] bg-[#0b040c] md:w-[36px] md:h-[36px]`}
            />
          </div>
          <p
            className={`text-[#000] text-base mx-auto text-center font-medium md:text-[20px] md:leading-[30px] poppins`}
          >
            {timeOfDay === "morning" && <span>tech space!</span>}
            {timeOfDay === "afternoon" && <span>localhost:3000</span>}
            {timeOfDay === "evening" && <span>127.0.0.1:5500</span>}
            {/* {timeOfDay === "evening" && <span>somewhere in the metaverse</span>} */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;