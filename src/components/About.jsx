import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';

const ServiceCard = ({index, title, icon, url}) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}

                className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer"

                onClick={() => {
                    window.open(url)
                }
            }
                >
                <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {title}
                </h3>

            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <div className="-mt-[2rem]">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-2 text-taupe text-[18px] max-w-3xl leading-[30px]">
                Skilled software engineer with 2+ years of experience in the design, development, analysis,
                testing, coding, maintenance, and improvement of many different software applications in collaboration
                with teams, managers, clients, and vendors. History of delivering excellent, clean code for functional,
                efficient solutions in a high-performance, secure environment using Java, React, MS SQL, AWS, Oracle,
                and Git, as well as modern design patterns and SDLC methodologies.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} url={service.url} {...service} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, 'about');
