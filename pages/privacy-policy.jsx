import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <>
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
          className="py-20 overflow-hidden"
        >
          <motion.p
            initial={{ opacity: 0, x: "-40%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              scale: {
                type: "spring",
                damping: 50,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            className="text-center text-2xl md:text-3xl font-semibold py-10"
          >
            Privacy Policy
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              scale: {
                type: "spring",
                damping: 50,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            className="w-[95%] md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto text-justify"
          >
            <motion.div
              initial={{ opacity: 0, x: "-40%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <p className="text-[#333333] mb-3">
                Effective Date: March 1, 2023
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </motion.p>
            {/* <motion.div className="mt-2 ml-2">
              <motion.div
                initial={{ opacity: 0, x: "40%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  scale: {
                    type: "spring",
                    damping: 50,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="ml-5"
              >
                <ul className="list-disc mt-4">
                  <li>
                    since your streams fall within the “User Content” definition
                    under the MingleWise Terms of Use, you may not create
                    “lives” which, including but not limited to:
                  </li>
                </ul>
                <motion.div
                  initial={{ opacity: 0, x: "-40%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 50,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="ml-5 flex flex-col gap-3"
                >
                  <ul className="list-disc">
                    <li className="my-3">
                      contain obscene, pornographic, profane, defamatory,
                      abusive, offensive, indecent, threatening, harassing,
                      inflammatory, inaccurate, misrepresentation, fraudulent or
                      illegal content or actions;
                    </li>
                    <li className="mb-3">
                      promotes racism, bigotry, hatred or physical harm of any
                      kind against any group or individual;
                    </li>
                    <li className="mb-3">
                      is intended to, or does, harass, or intimidate any other
                      user or third party;
                    </li>
                    <li className="mb-3">
                      may infringe or violate any patent, trademark, trade
                      secret, copyright or other intellectual or proprietary
                      right of any party, including User Content that contains
                      others’ copyrighted content (e.g., photos, images, music,
                      movies, videos, etc.) without obtaining proper permission
                      first;
                    </li>
                  </ul>
                </motion.div>
                <ul className="list-disc">
                  <li className="my-3">
                    MingleWise is entitled to identify your streams as
                    inappropriate on its sole discretion and delete/block them
                    or make them unavailable otherwise at any time;
                  </li>
                  <li className="mb-3">
                    you are prohibited to broadcast, record, stream or otherwise
                    create your lives when it may present a danger to you, your
                    friends or family or any other people (e.g. you have no
                    rights to stream when driving, climbing, cooking food on an
                    open fire, dancing with tigers, skiing or skating, etc.);
                  </li>
                  <li className="mb-3">
                    we use reasonable security measures in order to protect your
                    streams or their records against unauthorised copying and
                    distribution. However, MingleWise does not guarantee that
                    any unauthorised copying, use or distribution of your
                    streams or their records by third parties will not take
                    place.
                  </li>
                </ul>
              </motion.div>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: "40%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="my-8"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-40%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="mt-6"
            >
              <p className="font-semibold mb-2">
                Cancellation and Refund Policy
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "40%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="mt-6"
            >
              <p className="font-semibold mb-2">
                Cancellation and Refunds by the Company
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-40%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="mt-6"
            >
              <p className="font-semibold mb-2">Cancellation by you</p>
              <p>
                You agree and acknowledge that unless stated otherwise you are
                not entitled to cancel any orders made by you on MingleWise App.
                In the event you subscribe to any Solutions, the same may be
                cancelled by you one month prior to the provision of the
                Solutions, in such a case you will be refunded in the entire
                amount after deducting any bank charges that may have been
                applicable. Further during a period between one month and 14
                days from when the Solutions are to be provided, if there is a
                cancellation request received, we may at our discretion refund
                50% of the amount, after deducting any bank charges that may
                have been applicable, to you. A period of 14 days before the
                Solutions to be provided no request for cancelation will not be
                entertained by the Company.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PrivacyPolicy;
