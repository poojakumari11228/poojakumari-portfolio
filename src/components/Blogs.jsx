import {motion} from 'framer-motion';
import {styles} from '../styles';
import {blog, publications} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';

const BlogCard = ({index, title, icon, url}) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card " >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}

                className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <div className="cursor-pointer"
                     onClick={() => {
                     window.open(url)
                     }
                     }
                >
                    <img src={icon} alt={title} className="w-full h-full object-cover rounded-[24px]"/>
                    <h3 className="text-taupe text-[18px] font-bold text-center">
                        {title}
                    </h3>
                </div>

            </div>
        </motion.div>
    );
};

const Blogs = () => {
    return (
        <div className="-mt-[2rem]">
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Publications & Blogs.</h2>

            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
                <p className={styles.sectionSubText}>Publications</p>
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-10">
                {publications.map((p, index) => {
                    return (
                        <BlogCard key={p.title} url={p.url} index={index} {...p} />
                    );
                })}
            </div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
                <p className={styles.sectionSubText}>Blogs</p>
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-10">
                {blog.map((b, index) => {
                    return (
                        <BlogCard key={b.title} url={b.url} index={index} {...b} />
                    );
                })}
            </div>

        </div>
    );
};

export default SectionWrapper(Blogs, 'blogs');
