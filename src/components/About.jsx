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
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
                I am an **Enterprise Software Engineer** specializing in **Payment Systems & Cloud-Native Architecture**. 
                I build resilient, high-concurrency applications that power the modern economy. With **4+ years** of experience in the Fintech space, I bridge the gap between complex business logic and robust 
                Cloud Infrastructure with a relentless focus on clean architecture and security.
            </motion.p>

            {/* Added a Core Stack highlight for immediate keyword impact */}
            <motion.div 
                variants={fadeIn('', '', 0.2, 1)}
                className="mt-4 flex flex-wrap gap-2"
            >
                {['Java', 'Spring Boot', 'AWS', 'React', 'Angular', 'Microservices'].map((tech) => (
                    <span key={tech} className="bg-jetLight py-1 px-3 rounded-md text-[14px] text-taupe border border-taupe/20">
                        {tech}
                    </span>
                ))}
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} url={service.url} {...service} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, 'about');
