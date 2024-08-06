"use client";
import { useState } from "react";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Button from "./_component/button";

const ScrollButton = () => {
  const [y, setY] = useState<number>(0);
  const { scrollY }: { scrollY: any } = useScroll();
  const { scrollYProgress }: { scrollYProgress: any } = useScroll();
  const scaleY: any = useSpring(scrollYProgress);
  const max = 645;
  const scroll: any = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scroll, "change", (latest) => {
    setY(scaleY.current);
  });
  let top = scroll.current > max ? max : scroll.current;
  let top1 = scroll.current < max ? 0 : scroll.current - max;

  return (
    <div className=" bg-gray-200 flex flex-col">
      <div className=" pl-[270px] pt-32">
        <div className="text-[62px] w-[53%] font-bold leading-[70px]">
          First U.S. institutional asset manager focused exclusively on
          blockchain technology.
        </div>
        <div className="text-[20px] w-[66%] pt-12">
          Since 2013, Pantera has invested in digital assets and blockchain
          compaines, providing investors with the full spectrum of exposure to
          the space.
        </div>
        <div className="flex gap-10 pt-10">
          <Button top={top} speed={0.1}>
            FUNDS
          </Button>
          <Button top={top} speed={0.175}>
            PORTFOLIO
          </Button>
          <Button top={top} speed={0.25}>
            INSIGHTS
          </Button>
        </div>
      </div>

      <div className="text-white px-[230px] py-[100px] flex ">
        <div
          className="pt-[600px]  w-[50%]"
          style={{
            translate: `0px -${top1}px`,
          }}
        >
          <div className="bg-black flex flex-col p-14 ">
            <div className="text-[70px] font-bold leading-[80px]">
              Pantera at glance<sup>1</sup>
            </div>
            <div className="flex justify-between pt-10">
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  $5.1bn
                </div>
                <div className="text-white text-center">
                  Assets Under Management
                </div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  3
                </div>
                <div className="text-white text-center">Found Strategies</div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  75%
                </div>
                <div className="text-white text-center">
                  Deals Led (Blockchain Fund)
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-10 pb-[80px]">
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  $5.1bn
                </div>
                <div className="text-white text-center">
                  Assets Under Management
                </div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  3
                </div>
                <div className="text-white text-center">Found Strategies</div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  75%
                </div>
                <div className="text-white text-center">
                  Deals Led (Blockchain Fund)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%]" style={{ translate: `0px ${top * 0.17}px` }}>
          <div className="bg-black flex flex-col justify-center items-center py-[170px] px-[70px]">
            <div className="text-[40px] font-bold">A history of firsts</div>
            <div className="text-[15px] p-[20px]">
              Pantera launched the first cryptocurrency fund in the U.S. when
              bitcoin was at $65 /BTC in 2013. The firm subsequently launched
              the first blockchain-focused venture fund. In 2017, Pantera was
              the first to offer an early-stage token fund.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollButton;
