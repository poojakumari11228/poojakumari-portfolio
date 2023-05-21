import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    pNumber : '',
    title: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // if (name === 'pNumber') {
    //   validatePhoneNumber(value);
    // }
  };

  const validatePhoneNumber = () => {
    const phoneNumberPattern = /^\d{10,}$/;

    console.error(form.pNumber);
    if (form.pNumber && !form.pNumber.match(phoneNumberPattern)) {
      console.log('Error');
      setPhoneNumberError(true);
    } else {
      console.log('No Error');
      setPhoneNumberError(false);
    }
  };

  const sendEmailHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name.trim() === '' || form.message.trim() === '' || form.email.trim() === '' || form.title.trim() === '') {
      alert('Please fill in all the required fields.');
      setLoading(false);
      return;
    }

    try {
      const response = await sendEmail();
      if (response.ok) {
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({
          name: '',
          email: '',
          title: '',
          pNumber: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    }
    catch (error) {
      console.error('Error sending email:', error);
      setForm({
        name: '',
        email: '',
        pNumber: '',
        title: '',
        message: '',
      });
      console.error(error);
    //  alert('Failed to send email');
    }
    setLoading(false);
  };

  const sendEmail = async () => {
    const url = 'https://hhhjsm3g2j.execute-api.us-east-1.amazonaws.com/v1';

    const requestBody = {
      subject: form.title,
      message: form.message,
      name: form.name,
      email: form.email,
      phone: form.pNumber
    };

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
  };

  return (
      <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] bg-jet p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

          <form
              ref={formRef}
              onSubmit={sendEmailHandler}
              className="mt-10 flex flex-col gap-6 font-poppins">
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">Name</span>
              <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name."
                  className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
                  required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">Email</span>
              <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email."
                  className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
                  required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">Phone Number</span>
              <input
                  type="text"
                  name="pNumber"
                  value={form.pNumber}
                  onChange={handleChange}
                  placeholder="Enter your contact number (Optional)"
                  className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"

              />
              {/*{phoneNumberError && <p className="text-red-500">Enter 10-digit valid phone number</p>}*/}
            </label>
            <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Title
            </span>
              <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="What's your subject?"
                  className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
                  required
              />
            </label>
            <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
              <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's your message?"
                  className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
                  required
              />
            </label>
            <button
                type="submit"
                disabled={loading}
                className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
                onMouseOver={() => {
                  document.querySelector('.contact-btn').setAttribute('src', sendHover);
                }}
                onMouseOut={() => {
                  document.querySelector('.contact-btn').setAttribute('src', send);
                }}
            >
              {loading ? 'Sending...' : 'Send'}
              <img
                  src={send}
                  alt="send"
                  className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
              />
            </button>
          </form>
        </motion.div>
      </div>
  );
};

export default SectionWrapper(Contact, 'contact');
