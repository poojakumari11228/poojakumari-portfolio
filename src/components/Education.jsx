import {motion} from 'framer-motion';
import {SectionWrapper} from '../hoc';
import {styles} from '../styles';
import {education} from '../constants';
import {fadeIn, textVariant, staggerContainer} from '../utils/motion';

const EducationCard = ({
                           id, name, description, image, date, grade, index,
                       }) => {
    return (<motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px]
      h-[420px] cursor-pointer card-shadow`}>
            <div id={id}
                className="absolute top-0 left-0 z-10 bg-jetLight
      h-full w-full opacity-[0.5] rounded-[24px]"></div>
            <div className="rounded-[24px]"
                 style={{
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     color: 'black',
                     backgroundColor: 'rgba(255, 255, 255, 0.8)',
                     padding: '10px',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     textAlign: 'center',
                 }}
            >
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-[24px]"
                />
                <h1 className="text-jetLight text-[16px] font-bold font-beckman tracking-[2px]" >
                    {name} - {grade}
                </h1>
                <p className="sectionHeadText sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
                    {description}
                </p>
                <h3 className="text-jetLight text-[20px] font-semibold ">
                    {date}
                </h3>
            </div>


        </motion.div>);
};

const Education = () => {

    return (<div className="-mt-[6rem] sm:p-10">
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadTextLight}`}>Education.</h2>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {education.map((edu, index) => (<EducationCard
                            key={edu.id}
                            index={index}
                            name={edu.title}
                            description={edu.institute}
                            image={edu.icon}
                            date={edu.date}
                            grade={edu.grade}

                        />))}
                </div>
            </motion.div>
        </div>);
};

export default SectionWrapper(Education, 'education');
