"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const listRef = useRef<HTMLUListElement>(null);
  const [linePosition, setLinePosition] = useState<number>(0);

  useEffect(() => {
    const list = listRef.current;
    if (list && selectedIndex >= 0) {
      const selectedItem = list.children[selectedIndex] as HTMLElement;
      if (selectedItem) {
        const { offsetTop, offsetHeight } = selectedItem;
        setLinePosition(offsetTop + offsetHeight / 2 - 1); // center the line
      }
    }
  }, [selectedIndex]);

  return (
    <div>
      <Navbar selected={2} />

      {/* Intro Section */}
      <div className="flex flex-row w-11/12 m-auto">
        <div className="flex flex-col w-[150%] gap-10 h-[80vh] justify-between">
          <div className="text-[7.5vw] mt-[2.5%]">
            <h1 className="leading-[6.5vw]">
              ALI <br /> ELDIN <br /> ELHOSINY
            </h1>
            <h2 className="subtext text-[3vw] brightness-60">architect</h2>
          </div>
          <div className="subtext text-[2vw] leading-10">
            <h3>acme</h3>
            <h3>loughbrough university</h3>
          </div>
        </div>

        {/* Bio Section */}
        <div className="flex max-w-[40%] self-center h-[70vh] flex-right">
          <p className="text-right min-w-[300px] max-w-[50%] text-[1rem] self-center ml-auto">
            I am a 23-year-old Architecture graduate from South West London with
            experience both within and beyond the architectural field. My work
            is driven by an interest in urban design and the creation of
            sustainable, well-considered public spaces. I have contributed to
            projects at both national and international levels and enjoy
            collaborating across diverse contexts and disciplines. As an
            ambitious architecture student with a passion for innovative and
            sustainable design, I possess a high level of computer and
            technology competence, as well as proficiency in relevant software.
            I am skilled in problem-solving and have strong time management
            abilities. I consistently meet deadlines and demonstrate reliability.
            I am experienced in creating physical and digital models, as well as
            producing compelling visualizations.
          </p>
        </div>
      </div>

      {/* Year Selector Section */}
      <div className="h-screen w-screen flex justify-center items-center mx-auto">
        <div className="flex flex-row w-fit relative">
          {/* Year List */}
          <ul
            ref={listRef}
            className="[&>*]:cursor-pointer [&>*]:p-1 text-[1.2rem] flex flex-col relative"
          >
            {[
              "2025",
              "2024",
              "2023",
              "2022",
              "2021",
              "2020",
              "2019",
              "2018",
              "2017",
            ].map((year, index) => (
              <p
                key={year}
                onClick={() => setSelectedIndex(index)}
                className={`transition-colors duration-200 ${
                  selectedIndex === index
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {year}
              </p>
            ))}
          </ul>

          {/* Moving Line */}
          <div className="relative mx-4">
            <div
              className="relative left-0 w-[200px] h-[1px] bg-white transition-all duration-300 ease-in-out"
              style={{
                top:
                  selectedIndex >= 0
                    ? `${linePosition}px`
                    : "55px", // default start position
              }}
            />
          </div>
					<AnimatePresence mode="wait">
						<motion.div
							key={selectedIndex} // triggers animation when index changes
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
							className={"text-left"}
						>
							<h1 className="text-[1.5rem] mb-3 bg-[white] text-black! py-1 px-2">MixC Shenzhen North - China</h1>
							<p className="font-light my-3 ml-1">
								CR Land Awards {selectedIndex >= 0 ? 2025 - selectedIndex : 2025}: Architecture - Winner
							</p>
							<p className="font-light my-3 ml-1">
								CR Land Awards {selectedIndex >= 0 ? 2025 - selectedIndex : 2025}: Interior Design - Winner
							</p>
							<h1 className="text-[1.5rem] mb-3 bg-[white] text-black! py-2 px-4">MixC Shenzhen North - China</h1>
							<p className="font-light my-2 ml-1">
								CR Land Awards {selectedIndex >= 0 ? 2025 - selectedIndex : 2025}: Architecture - Winner
							</p>
						</motion.div>
					</AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default Page;
