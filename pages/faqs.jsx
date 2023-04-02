import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SUPPORT_ACCORDION_DATA } from 'data/constant';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FAQAndSupport = () => {
    const [collapse, setCollapse] = useState(null);
    const toggleAccordion = (index) => {
        if (collapse === index) {
          return setCollapse(null);
        }
        setCollapse(index);
      };
    return (
        <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            scale: {
              type: "spring",
              damping: 50,
              stiffness: 200,
              restDelta: 0.001,
            },
          }}
          className="py-28 overflow-hidden"
        >
          <div className="w-[95%] md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto">
            <motion.p
              initial={{ opacity: 0, scale: 1.2, x: "-60%" }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.3,
                scale: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-2xl md:text-3xl text-center"
            >
              FAQ & Support
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 1.2, x: "60%" }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.3,
                scale: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-center mt-3"
            >
              Find answers to the most popular questions about MingleWise here.
              If you are facing any issue using the app, contact us at
              support@minglewise.com or via the form below. We are here to help
              you 24/7.
            </motion.p>
          </div>
          <div className="wrapper w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto">
            <div className="min-h-[60vh] flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  scale: {
                    type: "spring",
                    damping: 15,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="border rounded-xl"
              >
                {SUPPORT_ACCORDION_DATA.map((data, index) => (
                  <div key={index} className="item">
                    <div className="title flex items-center justify-between px-4 py-5 cursor-pointer border-b-2 rounded-xl">
                      <h3 className="sm:text-xl font-semibold">
                        {data?.question}
                      </h3>
                      {collapse === index ? (
                        <motion.span
                          initial={{ rotate: 0 }}
                          whileTap={{ rotate: -180 }}
                          transition={{
                            duration: 0.5,
                            ease: "circOut",
                          }}
                        >
                          <AiOutlineMinus
                            onClick={() => toggleAccordion(index)}
                            className="text-2xl"
                          />
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ rotate: 0 }}
                          whileTap={{ rotate: -180 }}
                          transition={{
                            duration: 0.5,
                            ease: "circOut",
                          }}
                        >
                          <AiOutlinePlus
                            onClick={() => toggleAccordion(index)}
                            className="text-2xl"
                          />
                        </motion.span>
                      )}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: "-50%" }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        scale: {
                          type: "spring",
                          damping: 10,
                          stiffness: 100,
                          restDelta: 0.001,
                        },
                      }}
                      className={`${
                        collapse === index ? "" : "hidden"
                      } px-4 py-5 border-b-2 rounded-xl`}
                    >
                      {data?.answer}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
};

export default FAQAndSupport;