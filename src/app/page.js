import Image from "next/image";
import styles from "./page.module.scss";
import Heading from "../../components/Heading";
import Link from "next/link";
import Footer from "../../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <Heading />
        <div className={styles.mainBody}>
          <div className={styles.homeSection1}>
            <div className={styles.leftSection}>
              <div className={styles.section1Div1}>
                <h1 id={styles.slogan1}>Driving Success</h1>
              </div>
              <div className={styles.section1Div2}>
                {" "}
                <h1 id={styles.slogan2}>Delivering Excellence</h1>
              </div>
            </div>
            <div className={styles.section1Div3}>
              <em>Alberta Ltd.</em>
            </div>
          </div>
          <div className={styles.homeSection2}>
            <div className={styles.text}>
              <h1>Why Choose Us?</h1>
              <ul>
                <li>
                  Welcome to<span> Alberta Ltd.</span>, your trusted partner in
                  transportation and logistics services. Established in January
                  2012, we have swiftly risen to prominence, catering to clients
                  throughout the expansive regions of Alberta
                </li>
                <li>
                  Our extensive fleet comprises a variety of vehicles, ranging
                  from cars and minivans to one-ton and five-ton trucks,
                  ensuring prompt and reliable transportation solutions tailored
                  to your needs.
                </li>
                <li>
                  We prioritize your satisfaction above all else, employing
                  personalized strategies to address your unique requirements
                  with precision and care.
                </li>
                <li id={styles.longLi}>
                  Strategically positioned, we boast two operational offices in
                  Edmonton and Grand Prairie, along with an additional presence
                  in Calgary.
                </li>
              </ul>
            </div>
            <Accordion
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
              }
              borderRadius={"6px"}
              width={"40%"}
              height={"80%"}
              allowToggle
              backgroundColor={"white"}
              className={styles.accordion}
            >
              <h1 className={styles.accordionValues}>Our Values</h1>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderBottomColor={"white"}
                    >
                      Reliability Redefined
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={styles.accordionPara} pb={4}>
                  We redefine reliability by delivering on our promises
                  consistently, ensuring that every shipment reaches its
                  destination securely and on time. At Alberta LTD, you can rely
                  on us as your steadfast partner in transportation and
                  logistics.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderBottomColor={"white"}
                    >
                      Uncompromising Integrity
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={styles.accordionPara} pb={4}>
                  Integrity is at the core of everything we do. We uphold the
                  highest ethical standards in our operations, maintaining
                  transparency and honesty in every interaction. Trust Alberta
                  LTD for integrity-driven solutions that exceed expectations.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderBottomColor={"white"}
                    >
                      Customer-Centric Innovation
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={styles.accordionPara} pb={4}>
                  We embrace innovation with a customer-centric approach,
                  constantly seeking new ways to enhance efficiency and deliver
                  added value to our clients. From advanced technologies to
                  tailored strategies, we innovate to optimize your
                  transportation experience.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderBottomColor={"white"}
                    >
                      Community Commitment
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={styles.accordionPara} pb={4}>
                  At Alberta LTD, we are committed to giving back to the
                  communities we serve. We actively engage in initiatives that
                  promote social responsibility and environmental
                  sustainability, making a positive impact beyond
                  transportation. Trust us not only for reliable service but
                  also for our dedication to building stronger communities.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className={styles.homeSection3}>
            <div className={styles.text}>
              <span>Setting the Standard in Customer Service Excellence.</span>
              At Alberta LTD, we pride ourselves on being more than just a
              transportation and supply chain partner. With over a decade of
              operation, our unwavering dedication to excellence has set us
              apart in Western Canada. Our experienced team navigates through
              diverse logistics challenges seamlessly, ensuring reliability and
              professionalism at every turn. Trust us to deliver beyond
              expectations, every step of the way.
            </div>
            <div className={styles.s3CardDiv}>
              <div id={styles.topCard} className={styles.s3card}>
                <img src="/images/worker3.jpg" />
                <p>
                  <span>At Alberta LTD</span>, we pride ourselves on our
                  unwavering dedication to customer service excellence. As a
                  trusted transportation and supply chain partner serving
                  Western Canada, we understand the importance of reliability
                  and professionalism in every aspect of our operations. With a
                  seasoned team at the helm, we tackle diverse logistics
                  challenges with ease, ensuring unparalleled reliability and
                  professionalism every step of the way. Your satisfaction is
                  our priority, driving us to deliver excellence in every
                  service we provide.
                </p>
              </div>
              <div className={styles.s3card}>
                <img src="/images/worker2.jpg" />
                <p>
                  We embrace innovation as the cornerstone of our success in the
                  ever-evolving transportation and logistics industry. By
                  continuously exploring cutting-edge technologies,
                  methodologies, and approaches, we enhance our efficiency and
                  streamline operations to deliver added value to our clients.
                  Our culture of innovation drives us to pioneer new standards
                  of excellence, ensuring we exceed expectations and stay ahead
                  in the dynamic landscape of transportation and logistics.
                </p>
              </div>
              <div className={styles.s3card}>
                <img src="/images/worker1.jpg" />
                <p>
                  We deeply understand the critical significance of delivering
                  efficient and secure services. Rely on our expertise as we
                  meticulously ensure the safe and prompt delivery of your
                  shipments to their designated destinations. Our unwavering
                  commitment to prioritizing both timeliness and safety remains
                  steadfast throughout the entire transportation process,
                  guaranteeing your peace of mind every step of the way.
                </p>
              </div>
              <div className={styles.s3card}>
                <img src="/images/worker4.jpg" />
                <p>
                  We understand the vital importance of fostering collaborative
                  partnerships with our valued clients. Rooted in a shared
                  commitment to mutual growth and success, our approach revolves
                  around actively engaging with you to deeply comprehend your
                  distinct needs and preferences. Through transparent
                  communication and an unwavering dedication to customization,
                  we strive to deliver personalized solutions that not only meet
                  but surpass your expectations.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.homeSection4}>
            <div className={styles.banner1LeftSide}>
              <h1>
                Welcome to Alberta Ltd. <br />
                (1652357)
              </h1>
              <h2>
                Alberta LTD. stands as a pillar in Alberta's transportation
                sector, offering a comprehensive range of shipping solutions.
                With our expansive network spanning across the province,
                including strategically positioned terminals in Edmonton, Grand
                Prairie, and Calgary, we maintain direct oversight over every
                aspect of our operations.
              </h2>
            </div>
            <div className={styles.banner1RightSide}>
              <h1>The Premier Alberta Transportation Solution</h1>
              <div className={styles.h2Div}>
                <Link id={styles.butt} href="/contact">
                  Quote
                </Link>
                <Link id={styles.butt} href="/services">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </ChakraProvider>
  );
}
