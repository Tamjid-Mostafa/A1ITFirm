import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const TermsOfUse = () => {
  return (
    <>
      <AnimatePresence>
        <div className="overflow-hidden">
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
            className="py-20 poppins-text w-[95%] md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto text-justify"
          >
            <motion.p
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
              className="text-center font-semibold text2xl md:text-3xl py-10"
            >
              Legal Terms of Use
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.1,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="my-7">
                MingleWise is a flagship app of AppSynergies Ltd who control all
                of its Intellectual Property Rights. These terms and conditions
                apply between you, the User of this Website (including any
                sub-domains, unless expressly excluded by their own terms and
                conditions), and AppSynergies Ltd, the owner and operator of
                this Website. Please read these terms and conditions carefully,
                as they affect your legal rights. Your agreement to comply with
                and be bound by these terms and conditions is deemed to occur
                upon your first use of the Website. If you do not agree to be
                bound by these terms and conditions, you should stop using the
                Website immediately.
              </motion.p>
              <motion.p className="mb-10">
                In these terms and conditions, User or Users means any third
                party that accesses the Website and is not either (i) employed
                by AppSynergies Ltd and acting in the course of their employment
                or (ii) engaged as a consultant or otherwise providing services
                to AppSynergies Ltd and accessing the Website in connection with
                the provision of such services. You must be at least 18 years of
                age to use this website and mobile application. By using the
                Website and agreeing to these terms and conditions, you
                represent and warrant that you are at least 18 years of age.
              </motion.p>
            </motion.div>
            <motion.ul className="font-semibold mb-14">
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 1.1,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                Acceptance of Agreement
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                Changes To Agreement
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.9,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                Electronic Records
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                Eligibility
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                Use of Service
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                Paid Service
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                User Content
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                Prohibited Use
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.3,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                Limitation of Liability
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: "40%", scale: 1.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.2,
                  scale: {
                    type: "spring",
                    damping: 14,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                General
              </motion.li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, x: "40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                1. Acceptance of Agreement
              </motion.p>
              <motion.p>
                These Terms of Use (the “Agreement”) constitute a legal
                agreement that governs the relationship with users and others
                who interact with AppSynergies Ltd, subsidiaries and affiliates
                (“MingleWise,” “AppSynergies” “we,” or “us”) in connection with
                the use of MingleWise.com and/or other websites (the “Sites”)
                and our Service (as defined below). MingleWise may make
                services, products and features available through our Sites,
                applications including Mobile Software and applications
                available on social networking sites and other platforms, and
                other downloadable products (the Sites, the applications, the
                downloadable products, and all products, services, and features
                provided by MingleWise in connection, including without
                limitation interfaces of the Service whether in whole or in part
                (therewith shall be referred to collectively as, the “Service”).
                MingleWise may offer additional services or products or modify
                or revise any part of the Service at our discretion, and this
                Agreement will apply to all additional services or products and
                all modified or revised Service unless otherwise indicated.
                MingleWise also reserves the right to cease offering any part of
                the Service. You agree that MingleWise shall not be liable to
                you or any third party for any modification, revision,
                suspension or discontinuance of any part of the Service.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                2. Changes to Agreement
              </motion.p>
              <motion.p>
                THIS AGREEMENT AND ANY POLICY OR GUIDELINE OF THE SERVICE MAY BE
                MODIFIED BY MINGLEWISE IN ITS SOLE DISCRETION AT ANY TIME.
                MingleWise shall provide notice of any such modification by
                posting the revised Agreement to the Sites.you or any third
                party for any modification, revision, suspension or
                discontinuance of any part of the Service.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                3. Electronic Records
              </motion.p>
              <motion.p>
                Because the Service is provided electronically, you must consent
                to MingleWise providing important information electronically if
                you wish to use the Service. You consent to being provided with
                this Agreement, notices, disclosures, information, policies and
                other materials in electronic form (collectively, “Electronic
                Records”), rather than in paper form. Your consent to receive
                Electronic Records applies to all notices, disclosures,
                documents, records or other materials of any kind that
                MingleWise may be required to provide to you.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                4. Eligibility
              </motion.p>
              <motion.p>
                Age Restrictions. No part of the Service is directed to persons
                under the age of 18. IF YOU ARE UNDER 18 YEARS OF AGE, YOU MUST
                NOT USE OR ACCESS THE SERVICE AT ANY TIME OR IN ANY MANNER. By
                using the Service, you represent and warrant you are at least 18
                years of age. If you are under 18 years of age, then you are not
                permitted to use the Service.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                5. Use of Service
              </motion.p>
              <motion.p>
                You agree that you will only use the Service, including the
                posting of any content through the Service, in a manner
                consistent with this Agreement and any and all applicable local,
                state, national and international laws and regulations.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                6. Paid Service
              </motion.p>
              <motion.p>
                The Paid Service may also be purchased through your accounts
                with certain third parties, such as your Apple iTunes account,
                your Google Play account or your Amazon account (a “Third Party
                Account”). If you purchase any Paid Service through a Third
                Party Account, billing for these Paid Service will appear
                through your Third Party Account. You should review the Third
                Party Account’s terms and conditions, which we do not control.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                7. User Content
              </motion.p>
              <motion.p>
                Accuracy of Information. You will not post any inaccurate,
                misleading, incomplete or false information or User Content to
                MingleWise or to any other user. You may be required to supply
                certain information and post a photo of yourself to use the
                Service.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                8. Prohibited Use
              </motion.p>
              <motion.ul className="list-disc ml-5">
                <motion.li>
                  You may not use the Website for any of the following purposes:
                  (a) in any way which causes, or may cause, damage to the
                  Website or interferes with any other person’s use or enjoyment
                  of the Website; (b) in any way which is harmful, unlawful,
                  illegal, abusive, harassing, threatening or otherwise
                  objectionable or in breach of any applicable law, regulation,
                  governmental order; (c) making, transmitting or storing
                  electronic copies of Content protected by copyright without
                  the permission of the owner.
                </motion.li>
              </motion.ul>
              <motion.p className="py-4">Registration</motion.p>
              <motion.ul className="list-disc ml-5">
                <motion.li>
                  You must ensure that the details provided by you on
                  registration or at any time are correct and complete.
                </motion.li>
                <motion.li>
                  ​You must inform us immediately of any changes to the
                  information that you provide when registering by updating your
                  personal details to ensure we can communicate with you
                  effectively.
                </motion.li>
                <motion.li>
                  ​We may suspend or cancel your registration with immediate
                  effect for any reasonable purposes or if you breach these
                  terms and conditions. ​
                </motion.li>
                <motion.li>
                  You may cancel your registration at any time by informing us
                  in writing to the address at the end of these terms and
                  conditions. If you do so, you must immediately stop using the
                  Website. Cancellation or suspension of your registration does
                  not affect any statutory rights. You can also unsubscribe from
                  the mailing list at anytime. The link to unsubscribe is
                  included at the bottom of all email correspondence.
                </motion.li>
              </motion.ul>
              <motion.p className="py-4">Link to other websites</motion.p>
              <motion.ul className="list-disc ml-5">
                <motion.li>
                  This Website may contain links to other sites. Unless
                  expressly stated, these sites are not under the control of
                  AppSynergies Ltd or that of our affiliates.
                </motion.li>
                <motion.li>
                  We assume no responsibility for the content of such Websites
                  and disclaim liability for any and all forms of loss or damage
                  arising out of the use of them.
                </motion.li>
                <motion.li>
                  ​The inclusion of a link to another site on this Website does
                  not imply any endorsement of the sites themselves or of those
                  in control of them.
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                9. Limitation of Liability
              </motion.p>
              <motion.ul className="list-disc ml-5">
                <motion.li>
                  Nothing in these terms and conditions will: (a) limit or
                  exclude our or your liability for death or personal injury
                  resulting from our or your negligence, as applicable; (b)
                  limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation; or (c) limit or exclude any of our or your
                  liabilities in any way that is not permitted under applicable
                  law.
                </motion.li>
                <motion.li>
                  We will not be liable to you in respect of any losses arising
                  out of events beyond our reasonable control.
                </motion.li>
                <motion.li>
                  To the maximum extent permitted by law, AppSynergies Ltd
                  accepts no liability for any of the following: (a) Any
                  business losses, such as loss of profits, income, revenue,
                  anticipated savings, business, contracts, goodwill or
                  commercial opportunities; (b) Loss or corruption of any data,
                  database or software; (c) Any special, indirect or
                  consequential loss or damage.
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "40%", scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                scale: {
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.p className="font-semibold mb-2 mt-8">
                10. General
              </motion.p>
              <motion.ul className="list-disc ml-5">
                <motion.li>
                  You may not transfer any of your rights under these terms and
                  conditions to any other person. We may transfer our rights
                  under these terms and conditions where we reasonably believe
                  your rights will not be affected.
                </motion.li>
                <motion.li>
                  ​These terms and conditions may be varied by us from time to
                  time. Such revised terms will apply to the Website from the
                  date of publication. Users should check the terms and
                  conditions regularly to ensure familiarity with the then
                  current version.
                </motion.li>
                <motion.li>
                  ​These terms and conditions together with the Privacy Policy
                  contain the whole agreement between the parties relating to
                  its subject matter and supersede all prior discussions,
                  arrangements or agreements that might have taken place in
                  relation to the terms and conditions.
                </motion.li>
                <motion.li>
                  If any court or competent authority finds that any provision
                  of these terms and conditions (or part of any provision) is
                  invalid, illegal or unenforceable, that provision or
                  part-provision will, to the extent required, be deemed to be
                  deleted, and the validity and enforceability of the other
                  provisions of these terms and conditions will not be affected.
                </motion.li>
                <motion.li>
                  Unless otherwise agreed, no delay, act or omission by a party
                  in exercising any right or remedy will be deemed a waiver of
                  that, or any other, right or remedy.​
                </motion.li>
                <motion.li>
                  This Agreement shall be governed by and interpreted according
                  to the law of England and Wales and all disputes arising under
                  the Agreement (including non-contractual disputes or claims)
                  shall be subject to the exclusive jurisdiction of the English
                  and Welsh courts.
                </motion.li>
                <motion.li>
                  AppSynergies Ltd is a company incorporated in England and
                  Wales with registered number 12084991 whose registered address
                  is AppSynergies Ltd, 186 Malvern Avenue, Harrow, London,
                  England, HA2 9HD and it operates the website. You can contact
                  AppSynergies Ltd by emailing info@appsynergies.com.
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default TermsOfUse;
