import React, { useState } from 'react';
import { blog1comments, blog2comments, blog3comments, blog4comments } from '../../../../data/comments';
import { Card } from '../card';
import { Button } from '../button';
import { Checkbox } from "../checkbox"
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faReply, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faPinterest, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Textarea } from '../textarea';
import { Input } from '../input';
import { Link } from 'react-router-dom';

export function Blog3() {
    const [reply, setReply] = useState(0);

    const handleReply = (num) => {
        setReply(num)
    }
    return (
        <>
            {/* main blog section */}
            <Card className='rounded-lg relative'>
                <img src="/images/blogs03.jpg" className='rounded-t-lg w-full w-full' alt="" />
                <div className="absolute right-8 top-8">
                    <Button className='bg-primary font-bold shadow-xl text-white'>
                        Mental Health
                    </Button>
                </div>
                <div className="p-8">
                    <div className="flex items-center space-x-2 text-md text-gray-600 pb-4">
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>July 5, 2024</p><span>/</span>
                        <FontAwesomeIcon icon={faUser} />
                        <p>Aemah Iqbal</p>
                    </div>
                    <div className="blog-line"></div>
                    <hr />

                    <div className="my-6">
                        <h1 className='font-bold text-3xl'>The Ethical Implications of Using AI for Mental Health Diagnosis and Therapy</h1>

                        <div className="grid grid-cols-4 my-6 gap-x-6">
                            <div className="col-span-3">
                                <p className='text-primary-foreground text-lg'>Introduction In recent years, artificial intelligence (AI) advancements have begun to revolutionize various fields, including general healthcare and mental healthcare. While AI can potentially transform healthcare’s analytic and diagnostic avenues, its application in psychology raises critical ethical questions. This blog explores the moral implications of using AI for mental health diagnosis and therapy, focusing on biases, cultural competency, and the necessary human elements of treatment.</p>
                            </div>
                            <div className="col-span-1">
                                <img src="/images/aemah.jpg" alt="" />
                                <h1 className='text-center text-2xl font-bold'>Aemah Iqbal</h1>
                            </div>
                        </div>
                    </div>

                    <div className="my-8 space-y-6">
                        <h1 className='font-bold text-3xl'>Biases in AI Systems</h1>

                        <p className='text-primary-foreground text-lg'>AI-powered tools can assist human psychologists in diagnosing and treating mental health conditions, offering benefits such as large datasets for evaluation, standardization of patterns and behaviors, and reduced human bias. However, these advantages come with significant caveats:</p>
                    </div>

                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Training Data and Bias:</h1>

                        <p className='text-primary-foreground text-lg'>AI systems are built on data fed to them by humans, which inherently contains biases. These biases stem from historical and societal inequities often reflected in the data. For instance, if the training data includes more cases from Western populations, the AI may develop a skewed understanding that favors Eurocentric perspectives. This can result in the promotion of racial biases and the reinforcement of stereotypes. Moreover, marginalized groups might be underrepresented in the training data, leading to inaccuracies in diagnosing and understanding their mental health issues. This lack of diverse representation in data can perpetuate systemic biases and result in the exclusion of these groups from effective mental health care.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Cultural Competency:</h1>

                        <p className='text-primary-foreground text-lg'>AI lacks the cultural competency necessary for effective mental health diagnosis and therapy. Cultural competency involves understanding and respecting patients' cultural differences and values, which is crucial for effective treatment.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Standardization vs. Individuality:</h1>

                        <p className='text-primary-foreground text-lg'>While AI can standardize assessments and reduce inconsistencies, it may also overlook the unique cultural contexts of individuals. Cultural competence in mental health care means acknowledging and integrating the cultural, social, and linguistic nuances that influence a patient's experience and expression of mental health issues. AI, which operates on predefined algorithms and data patterns, often fails to capture these nuances. For example, certain expressions of distress or coping mechanisms might be culturally specific and not recognized by AI trained on a narrow dataset. This can result in culturally insensitive or inappropriate assessments and treatment plans.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Language and Communication:</h1>

                        <p className='text-primary-foreground text-lg'>Language is a critical component of cultural competence. AI systems may struggle with the subtleties of different dialects, slang, or culturally specific idioms. Misinterpretations can lead to incorrect assessments and a lack of trust from patients who feel misunderstood. Furthermore, cultural beliefs about mental health and therapy vary widely; AI may not account for these differences, potentially alienating individuals who come from diverse cultural backgrounds.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>TThe Human Touch in Therapy</h1>

                        <p className='text-primary-foreground text-lg'>Therapy is fundamentally about building trust and connection between the therapist and the client. This interpersonal relationship is a cornerstone of effective therapy, and AI cannot replicate this human touch.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Lack of Empathy and Understanding:</h1>

                        <p className='text-primary-foreground text-lg'>AI lacks the softer skills necessary to build interpersonal relationships and connections. Empathy, active listening, and responding to non-verbal cues are essential to effective therapy. These skills enable therapists to create a safe and supportive environment where clients feel understood and valued. AI, which operates on algorithms and data analysis, cannot provide the same level of empathetic interaction. For instance, a therapist can adjust their approach based on a client's body language, tone of voice, or emotional state—something AI cannot do.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Trust and Connection:</h1>

                        <p className='text-primary-foreground text-lg'>Trust is built through human interaction, where therapists provide a safe space for clients to express their thoughts and feelings. The therapeutic alliance, essential for successful treatment, relies heavily on the therapist's ability to connect with the client on a human level. AI tools, such as chatbots, can offer initial screenings and support, but they cannot replace the deep, trusting relationships formed between therapists and their clients. Trust and rapport are developed over time through consistent, empathetic, personalized interactions that AI cannot replicate.</p>
                    </div>
                    <p className='text-primary-foreground my-6 text-lg'>AI is a powerful tool that can revolutionize mental health diagnosis and treatment. However, it should be viewed as a supportive partner in helping therapists organize and streamline the process rather than replacing human therapists.</p>
                    <p className='text-primary-foreground text-lg'>The future of AI in psychology is bright, but it requires careful development and responsible implementation. By harnessing the power of AI while safeguarding human connection and ethical principles, we can create a more accessible and effective mental healthcare system for everyone.</p>
                    <div className='flex items-center justify-end text-gray-500 gap-x-2 font-bold group'>
                        <FontAwesomeIcon icon={faHeartRegular} className='group-hover:text-red-500' />
                        28
                    </div>
                </div>
            </Card>

            {/* tags and share section */}
            <div className="mt-16 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0">
                    <div className="col-span-1 lg:col-span-2 flex items-center space-x-4">
                        <p className='font-bold'>Tags:</p>
                        <div className="flex-auto space-x-2 space-y-2">
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>AI</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Diagnosis</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Ethical</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Mental Health Care</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Psychology</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Therapy</Button>
                        </div>
                    </div>

                    <div className="col-span-1 flex items-center space-x-4 lg:justify-end">
                        <div className="flex space-x-2">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://innovador.solutions/2024/07/05/the-ethical-implications-of-using-ai-for-mental-health-diagnosis-and-therapy/" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#1877F2]' icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com/intent/tweet?text=The%20Ethical%20Implications%20of%20Using%20AI%20for%20Mental%20Health%20Diagnosis%20and%20Therapy&url=https://innovador.solutions/2024/07/05/the-ethical-implications-of-using-ai-for-mental-health-diagnosis-and-therapy/" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#1DA1F2]' icon={faTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://innovador.solutions/2024/07/05/the-ethical-implications-of-using-ai-for-mental-health-diagnosis-and-therapy/&title=The%20Ethical%20Implications%20of%20Using%20AI%20for%20Mental%20Health%20Diagnosis%20and%20Therapy&summary=https://innovador.solutions&source=Innovador%20Solutions" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#0077B5]' icon={faLinkedin} />
                            </a>
                            <a href="http://reddit.com/submit?url=https://innovador.solutions/2024/07/05/the-ethical-implications-of-using-ai-for-mental-health-diagnosis-and-therapy/&title=The%20Ethical%20Implications%20of%20Using%20AI%20for%20Mental%20Health%20Diagnosis%20and%20Therapy" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#E60023]' icon={faReddit} />
                            </a>



                        </div>
                    </div>
                </div>




            </div>
            <hr />

            {/* previous post section */}
            <div className="my-8">
                <Link to={`/blog/${2}`}>
                    <div className="flex items-center space-x-6 group lg:w-[70%]">
                        <img src="/images/blogs02.jpg" className='h-16 w-20' alt="" />
                        <div>
                            <p className='text-primary-foreground'>Previous Post</p>
                            <h1 className='text-xl font-bold group-hover:text-primary duration-500 transition-all'>Navigating the AI Revolution: Jobs, Challenges, and Opportunities</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <hr />


            {/* comments section */}
            <div className='my-8'>
                <h1 className='font-bold text-2xl'>{blog3comments.length} Comments</h1>
                <div className="blog-line"></div>
                {blog3comments.map((comment) => (
                    <div key={comment.id} className="my-6 justify-items-center sm:flex space-x-6">
                        <img src="/images/dp.png" className='rounded-full h-full' alt="" />
                        <div>
                            <div className="bg-secondary py-6 px-8 w-full group">
                                <div className="flex">
                                    <div>
                                        <h1 className='font-bold text-xl'>{comment.name}</h1>
                                        <p className='text-gray-500 group-hover:text-primary transition-all duration-500'>{comment.date} - {comment.time}</p>
                                    </div>
                                    <Button onClick={() => handleReply(comment.id)} className='ml-auto text-white group-hover:bg-black transition-all duration-500'>Reply <FontAwesomeIcon icon={faReply} /></Button>
                                </div>

                                <p className='my-6 text-primary-foreground'>{comment.text}</p>
                            </div>
                            {reply === comment.id && (
                                < div className='my-8'>
                                    <h1 className='font-bold text-2xl cursor-pointer' onClick={() => handleReply(0)}>Reply to Riva Collins</h1>
                                    <div className="blog-line"></div>
                                    <div className="space-y-6 my-6">
                                        <Textarea className='bg-transparent' placeholder='Comment*' rows='7' />
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0">
                                            <div className="col-span-1">
                                                <Input placeholder='Name*' className='bg-transparent' />
                                            </div>
                                            <div className="col-span-1">
                                                <Input placeholder='Email*' className='bg-transparent' />
                                            </div>
                                            <div className="col-span-1">
                                                <Input placeholder='Website*' className='bg-transparent' />
                                            </div>
                                        </div>

                                        <div className="flex my-6 space-x-2 items-center">
                                            <Checkbox id='save' />
                                            <label
                                                htmlFor="save"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary-foreground peer-disabled:opacity-70"
                                            >
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <Button className='text-white py-6 px-8 font-bold hover:bg-black transition-all duration-500'>Post Comment</Button>

                                    </div>

                                </div>
                            )}
                        </div>

                    </div>
                ))}


            </div >

            {/* leave a comment section */}
            {reply === 0 && (
                < div className='my-8' >
                    <h1 className='font-bold text-2xl'>Leave A Comment</h1>
                    <div className="blog-line"></div>
                    <div className="space-y-6 my-6">
                        <Textarea className='bg-transparent' placeholder='Comment*' rows='7' />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0">
                            <div className="col-span-1">
                                <Input placeholder='Name*' className='bg-transparent' />
                            </div>
                            <div className="col-span-1">
                                <Input placeholder='Email*' className='bg-transparent' />
                            </div>
                            <div className="col-span-1">
                                <Input placeholder='Website*' className='bg-transparent' />
                            </div>
                        </div>

                        <div className="flex my-6 space-x-2 items-center">
                            <Checkbox id='save' />
                            <label
                                htmlFor="save"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary-foreground peer-disabled:opacity-70"
                            >
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>
                        <Button className='text-white py-6 px-8 font-bold hover:bg-black transition-all duration-500'>Post Comment</Button>

                    </div>

                </div >
            )}



            <style jsx>
                {`
                .blog-line {
                    width: 40px;             /* Adjust width as needed */
                    height: 3px;             /* Adjust height as needed */
                    background-color: #F79720; /* Yellow color */
                }
                `}
            </style>
        </>
    );
}

export function Blog1() {
    const [reply, setReply] = useState(0);
    const [msg, setMsg] = useState('');
    const [comment, setComment] = useState({ id: '', name: '', text: '', data: '' });
    const [comments, setComments] = useState([]);

    const handleInput = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }
    const handleReply = (num) => {
        setReply(num)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!comment.name || !comment.text) {
            setMsg("Please fill in all required fields!");
            return;
        }

        const newCommentData = {
            id: Date.now(), // Use the current timestamp as a unique ID
            text: comment.text,
            name: comment.name,
            date: Date.toLocaleString(),
        };

        // Add the new comment to the existing comments array
        setComments([...comments, newCommentData]);

        // Clear the input fields after submitting
        setComment({ id: '', name: '', text: '', data: '' });
        setMsg('')
    };
    return (
        <>
            {/* main blog section */}
            <Card className='rounded-lg relative'>
                <img src="/images/blogs01.jpg" className='rounded-t-lg w-full' alt="" />
                <div className="absolute flex flex-col right-8 top-8 space-y-2">
                    <Button className='bg-primary font-bold shadow-xl text-white'>
                        Mental Health
                    </Button>
                    <Button className='bg-primary font-bold shadow-xl text-white'>
                        Technology
                    </Button>
                </div>
                <div className="p-8">
                    <div className="flex items-center space-x-2 text-md text-gray-600 pb-4">
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>October 8, 2024</p><span>/</span>
                        <FontAwesomeIcon icon={faUser} />
                        <p>Iqbal Y. Shaikh</p>
                    </div>
                    <div className="blog-line"></div>
                    <hr />

                    <div className="my-6">
                        <h1 className='font-bold text-3xl'>The Transformative Role of AI in Hospital Management</h1>

                        <p className='text-primary-foreground text-lg my-6'>In recent years, artificial intelligence (AI) has emerged as a groundbreaking force in various industries, and healthcare is no exception. The integration of AI into hospital management systems is revolutionizing the way healthcare facilities operate, enhancing efficiency, accuracy, and patient care. From streamlining administrative tasks to providing advanced diagnostic tools, AI is reshaping the landscape of hospital management in unprecedented ways.</p>
                        <p className='text-primary-foreground text-lg'>One of the most significant impacts of AI in hospital management is its ability to handle vast amounts of data with remarkable speed and precision. Hospitals generate enormous volumes of data daily, including patient records, treatment histories, and administrative information. AI-powered systems can analyze this data to identify patterns, predict outcomes, and support decision-making processes. This not only improves operational efficiency but also enhances the quality of care provided to patients.</p>
                    </div>

                    <div className="my-8 space-y-6">
                        <h1 className='font-bold text-3xl'>Automation of Administrative Tasks</h1>

                        <p className='text-primary-foreground text-lg'>Routine tasks like patient registration, appointment scheduling, and billing are some of the areas where AI has already started impacting the administrative processes and reducing the time and workload if administrative staff. For example, automatically filling the patient forms, scheduling appointments based on availability and patient preferences, and process billing with minimal human intervention. And that minimizes errors, and speeds up processes, allowing staff to focus on more critical tasks such as patient care and support.</p>
                    </div>
                    <div className="my-8 space-y-6">
                        <h1 className='font-bold text-3xl'>Enhanced Patient Interaction</h1>

                        <p className='text-primary-foreground text-lg'>AI-driven chatbots and virtual assistants are enhancing patient interaction by providing 24/7 support. These tools can handle a wide range of inquiries, from providing information about hospital services to assisting with appointment scheduling. For example, a patient can use a chatbot to find out visiting hours, get directions to the hospital, or even receive reminders for upcoming appointments. This not only improves patient engagement and satisfaction but also ensures that patients receive timely and accurate information, reducing the need for them to call or visit the hospital for basic queries.</p>
                    </div>
                    <div className="my-8 space-y-6">
                        <h1 className='font-bold text-3xl'>Optimized Resource Management</h1>

                        <p className='text-primary-foreground text-lg'>Effective resource management is crucial for the smooth operation of hospitals, and AI plays a pivotal role in this area. AI systems can predict inventory needs by analyzing usage patterns and historical data, ensuring that essential supplies are always available. Additionally, AI can help manage facilities by monitoring equipment usage and maintenance schedules, preventing downtime and ensuring that resources are used efficiently. This optimization leads to cost savings and better resource allocation, ultimately enhancing the hospital’s operational efficiency.</p>
                    </div>
                    <div className="my-8 space-y-6">
                        <h1 className='font-bold text-3xl'>Improved Clinical Decision Support</h1>

                        <p className='text-primary-foreground text-lg'>AI’s ability to analyze vast amounts of medical data is transforming clinical decision support. AI algorithms can process patient data, medical histories, and research findings to assist healthcare providers in diagnosing diseases, predicting patient outcomes, and personalizing treatment plans. For example, AI can help identify patterns in patient data that may indicate the early stages of a disease, allowing for timely intervention. This leads to more accurate diagnoses, better treatment outcomes, and improved patient care.</p>
                    </div>
                    <div className="my-8 space-y-6">
                        <h1 className='font-bold text-3xl'>Predictive Analytics</h1>

                        <p className='text-primary-foreground text-lg'>AI’s predictive analytics capabilities are invaluable for healthcare management. By analyzing historical data, AI can predict patient admissions, optimize staffing levels, and anticipate future healthcare needs. For example, AI can forecast the number of patients likely to visit the emergency department on a given day, allowing hospitals to allocate staff and resources accordingly. This proactive approach helps hospitals manage patient flow, reduce wait times, and ensure that patients receive timely care. Predictive analytics also aids in long-term planning and resource allocation, improving overall hospital efficiency.</p>
                    </div>
                    <div className="my-8 space-y-6">
                        <h1 className='font-bold text-3xl'>Streamlined Electronic Health Records (EHR) Management</h1>

                        <p className='text-primary-foreground text-lg'>Managing Electronic Health Records (EHR) is a complex and time-consuming task, but AI simplifies this process by automating data entry and ensuring the accuracy of patient records. AI can extract relevant information from various sources, such as lab results and physician notes, and update patient records in real-time. This not only reduces the administrative burden on healthcare providers but also ensures that patient data is always up-to-date and easily accessible. Accurate EHR management is essential for effective patient care and coordination among healthcare providers.</p>
                    </div>
                    <div className="my-8 space-y-6">
                        <h1 className='font-bold text-3xl'>Operational Efficiency</h1>

                        <p className='text-primary-foreground text-lg'>AI enhances overall operational efficiency by optimizing various aspects of hospital operations, including patient flow, scheduling, and logistics. For instance, AI can analyze patient data to identify bottlenecks in the patient journey and suggest improvements to streamline processes. This can lead to reduced wait times, more efficient use of hospital resources, and an improved patient experience. Additionally, AI can assist in scheduling surgeries and other procedures, ensuring that operating rooms and medical staff are utilized effectively. By improving operational efficiency, AI helps hospitals deliver better care while reducing costs.</p>
                    </div>
                    <div className="my-8 space-y-6">
                        <h1 className='font-bold text-3xl'>Conclusion</h1>

                        <p className='text-primary-foreground text-lg'>The integration of AI into hospital management systems is a game-changer for the healthcare industry. By automating administrative tasks, enhancing patient interaction, optimizing resource management, improving clinical decision support, streamlining EHR management, leveraging predictive analytics, and boosting operational efficiency, AI is transforming the way hospitals operate. These advancements not only improve efficiency and reduce costs but also enhance the quality of patient care. As AI technology continues to evolve, its impact on hospital management is expected to grow, leading to even more innovative solutions and improvements in healthcare delivery.</p>
                    </div>

                    <div className='flex items-center justify-end text-gray-500 gap-x-2 font-bold group'>
                        <FontAwesomeIcon icon={faHeartRegular} className='group-hover:text-red-500' />
                        8
                    </div>
                </div>

            </Card >

            {/* tags and share section */}
            < div className="mt-16 mb-8" >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0">
                    <div className="col-span-1 lg:col-span-2 flex items-center space-x-4">
                        <p className='font-bold'>Tags:</p>
                        <div className="flex-auto space-x-2 space-y-2">
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Mental Health Care</Button>
                        </div>
                    </div>

                    <div className="col-span-1 flex items-center space-x-4 lg:justify-end">
                        <div className="flex space-x-2">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://innovador.solutions/2024/10/08/the-transformative-role-of-ai-in-hospital-management/" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#1877F2]' icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com/intent/tweet?text=The%20Transformative%20Role%20of%20AI%20in%20Hospital%20Management&url=https://innovador.solutions/2024/10/08/the-transformative-role-of-ai-in-hospital-management/" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#1DA1F2]' icon={faTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://innovador.solutions/2024/10/08/the-transformative-role-of-ai-in-hospital-management/&title=The%20Transformative%20Role%20of%20AI%20in%20Hospital%20Management&summary=https://innovador.solutions&source=Innovador%20Solutions" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#0077B5]' icon={faLinkedin} />
                            </a>
                            <a href="http://reddit.com/submit?url=https://innovador.solutions/2024/10/08/the-transformative-role-of-ai-in-hospital-management/&title=The%20Transformative%20Role%20of%20AI%20in%20Hospital%20Management" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#E60023]' icon={faReddit} />
                            </a>



                        </div>
                    </div>
                </div>




            </div >
            <hr />

            {/* previous post section */}
            <div className="my-8">
                <Link to={`/blog/${4}`} >
                    <div className="flex items-center space-x-6 group lg:w-[70%]">
                        <img src="/images/blogs04.jpg" className='h-16 w-20' alt="" />
                        <div>
                            <p className='text-primary-foreground'>Previous Post</p>
                            <h1 className='text-xl font-bold group-hover:text-primary duration-500 transition-all'>Can AI Become Your Therapist?</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <hr />

            {/* comments section */}
            <div className='my-8'>
                <h1 className='font-bold text-2xl'>{blog1comments.length} Comments</h1>
                <div className="blog-line"></div>
                {blog1comments.map((comment) => (
                    <div key={comment.id} className="my-6 justify-items-center sm:flex space-x-6">
                        <img src="/images/dp.png" className='rounded-full h-full' alt="" />
                        <div>
                            <div className="bg-secondary py-6 px-8 w-full group">
                                <div className="flex">
                                    <div>
                                        <h1 className='font-bold text-xl'>{comment.name}</h1>
                                        <p className='text-gray-500 group-hover:text-primary transition-all duration-500'>{comment.date} - {comment.time}</p>
                                    </div>
                                    <Button onClick={() => handleReply(comment.id)} className='ml-auto text-white group-hover:bg-black transition-all duration-500'>Reply <FontAwesomeIcon icon={faReply} /></Button>
                                </div>

                                <p className='my-6 text-primary-foreground'>{comment.text}</p>
                            </div>
                            {reply === comment.id && (
                                < div className='my-8'>
                                    <h1 className='font-bold text-2xl cursor-pointer' onClick={() => handleReply(0)}>Reply to Riva Collins</h1>
                                    <div className="blog-line"></div>
                                    <div className="space-y-6 my-6">
                                        <Textarea className='bg-transparent' placeholder='Comment*' rows='7' />
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0">
                                            <div className="col-span-1">
                                                <Input placeholder='Name*' className='bg-transparent' />
                                            </div>
                                            <div className="col-span-1">
                                                <Input placeholder='Email*' className='bg-transparent' />
                                            </div>
                                            <div className="col-span-1">
                                                <Input placeholder='Website*' className='bg-transparent' />
                                            </div>
                                        </div>

                                        <div className="flex my-6 space-x-2 items-center">
                                            <Checkbox id='save' />
                                            <label
                                                htmlFor="save"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary-foreground peer-disabled:opacity-70"
                                            >
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <Button className='text-white py-6 px-8 font-bold hover:bg-black transition-all duration-500'>Post Comment</Button>

                                    </div>

                                </div>
                            )}
                        </div>

                    </div>
                ))}

                {comments.map((comment) => (
                    <div key={comment.id} className="my-6 justify-items-center sm:flex space-x-6">
                        <img src="/images/dp.png" className='rounded-full h-full' alt="" />
                        <div>
                            <div className="bg-secondary py-6 px-8 w-full group">
                                <div className="flex">
                                    <div>
                                        <h1 className='font-bold text-xl'>{comment.name}</h1>
                                        <p className='text-gray-500 group-hover:text-primary transition-all duration-500'>{comment.date} - {comment.time}</p>
                                    </div>
                                    <Button onClick={() => handleReply(comment.id)} className='ml-auto text-white group-hover:bg-black transition-all duration-500'>Reply <FontAwesomeIcon icon={faReply} /></Button>
                                </div>

                                <p className='my-6 text-primary-foreground'>{comment.text}</p>
                            </div>
                            {reply === comment.id && (
                                < div className='my-8' >
                                    <h1 className='font-bold text-2xl'>Reply to {comment.name}</h1>
                                    <div className="blog-line"></div>
                                    <div className="space-y-6 my-6">
                                        <Textarea
                                            name='text'
                                            onChange={handleInput}
                                            className='bg-transparent'
                                            placeholder='Comment*'
                                            rows='7'
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0">
                                            <div className="col-span-1">
                                                <Input
                                                    name='name'
                                                    onChange={handleInput}
                                                    placeholder='Name*'
                                                    className='bg-transparent'
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <Input
                                                    name='email'
                                                    onChange={handleInput}
                                                    placeholder='Email*'
                                                    className='bg-transparent'
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <Input
                                                    name='website'
                                                    onChange={handleInput}
                                                    placeholder='Website*'
                                                    className='bg-transparent'
                                                />
                                            </div>
                                        </div>


                                        <div className="flex my-6 space-x-2 items-center">
                                            <Checkbox id='save' />
                                            <label
                                                htmlFor="save"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary-foreground peer-disabled:opacity-70"
                                            >
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <p className='text-red-500'>{msg}</p>
                                        <Button onClick={handleSubmit} className='text-white py-6 px-8 font-bold hover:bg-black transition-all duration-500'>Post Comment</Button>

                                    </div>

                                </div >
                            )}
                        </div>

                    </div>
                ))}


            </div >

            {/* leave a comment section */}
            {reply === 0 && (
                < div className='my-8' >
                    <h1 className='font-bold text-2xl'>Leave A Comment</h1>
                    <div className="blog-line"></div>
                    <div className="space-y-6 my-6">
                        <Textarea
                            name='text'
                            onChange={handleInput}
                            className='bg-transparent'
                            placeholder='Comment*'
                            rows='7'
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0">
                            <div className="col-span-1">
                                <Input
                                    name='name'
                                    onChange={handleInput}
                                    placeholder='Name*'
                                    className='bg-transparent'
                                />
                            </div>
                            <div className="col-span-1">
                                <Input
                                    name='email'
                                    onChange={handleInput}
                                    placeholder='Email*'
                                    className='bg-transparent'
                                />
                            </div>
                            <div className="col-span-1">
                                <Input
                                    name='website'
                                    onChange={handleInput}
                                    placeholder='Website*'
                                    className='bg-transparent'
                                />
                            </div>
                        </div>


                        <div className="flex my-6 space-x-2 items-center">
                            <Checkbox id='save' />
                            <label
                                htmlFor="save"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary-foreground peer-disabled:opacity-70"
                            >
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>
                        <p className='text-red-500'>{msg}</p>
                        <Button onClick={handleSubmit} className='text-white py-6 px-8 font-bold hover:bg-black transition-all duration-500'>Post Comment</Button>

                    </div>

                </div >
            )}



            <style jsx>
                {`
                .blog-line {
                    width: 40px;             /* Adjust width as needed */
                    height: 3px;             /* Adjust height as needed */
                    background-color: #F79720; /* Yellow color */
                }
                `}
            </style>
        </>
    );
}

export function Blog2() {

    const [reply, setReply] = useState(0);

    const handleReply = (num) => {
        setReply(num)
    }
    return (
        <>
            {/* main blog section */}
            <Card className='rounded-lg relative'>
                <img src="/images/blogs02.jpg" className='rounded-t-lg w-full' alt="" />
                <div className="absolute right-8 top-8">
                    <Button className='bg-primary font-bold shadow-xl text-white'>
                        Technology
                    </Button>
                </div>
                <div className="p-8">
                    <div className="flex items-center space-x-2 text-md text-gray-600 pb-4">
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>August 19, 2024</p><span>/</span>
                        <FontAwesomeIcon icon={faUser} />
                        <p>Iqbal Y. Shaikh</p>
                    </div>
                    <div className="blog-line"></div>
                    <hr />

                    <div className="my-6">
                        <h1 className='font-bold text-3xl'>Navigating the AI Revolution: Jobs, Challenges, and Opportunities</h1>

                        <ul className='pl-4 list-decimal text-primary-foreground text-lg space-y-6'>

                            <div className="grid grid-cols-4 my-6 gap-x-6 items-center">
                                <div className="col-span-3">
                                    <li className='font-bold'>The AI Landscape</li>
                                    <p className='text-lg my-6'>Artificial intelligence has transformed industries, revolutionizing how we work, communicate, and live. As we embrace this technological leap, here’s how it affects the job landscape:</p>
                                </div>
                                <div className="col-span-1">
                                    <img src="/images/iqbal.jpg" alt="" />
                                    <h1 className='text-center text-2xl font-bold'>Iqbal Y. Shaikh</h1>
                                </div>
                            </div>

                            <li className='font-bold'>Job Displacement vs. Job Creation</li>
                            <ul className='list-disc text-lg my-4 space-y-4'>
                                <li>Job Displacement</li>
                                <p className='text-lg'>– Routine Tasks: AI excels at automating routine, repetitive tasks. Jobs involving data entry, basic analysis, and rule-based decision-making are vulnerable.</p>
                                <p className='text-lg'>– Manufacturing and Logistics: Robots and AI-driven systems replace manual labor in factories and warehouses.</p>
                                <p className='text-lg'>– Customer Service: Chatbots handle customer inquiries, reducing the need for human agents.</p>

                                <li>Job Creation</li>
                                <p className='text-lg'>– AI Specialists: Demand for AI engineers, data scientists, and machine learning experts surges.</p>
                                <p className='text-lg'>– Human-AI Collaboration: New roles emerge, emphasizing collaboration with AI system</p>
                                <p className='text-lg'>– Creativity and Complex Problem-Solving. AI frees humans to focus on creative, strategic, and complex tasks.</p>
                            </ul>

                            <li className='font-bold'>Transforming Industries</li>
                            <ul className='list-disc text-lg my-4 space-y-4'>
                                <li>Healthcare</li>
                                <p className='text-lg'>– Diagnosis and Treatment: AI aids in medical imaging, drug discovery, and personalized treatment plans.</p>
                                <p className='text-lg'>– Administrative Efficiency: Streamlined paperwork and scheduling.</p>

                                <li>Finance</li>
                                <p className='text-lg'>– Algorithmic Trading: AI optimizes investment decisions.</p>
                                <p className='text-lg'>– Risk Assessment: AI models analyze credit risk and fraud detection.</p>

                                <li>Education</li>
                                <p className='text-lg'>– Personalized Learning: AI adapts content to individual student needs.</p>
                                <p className='text-lg'>– **Automated Grading**: Teachers receive support in grading assignments.</p>
                            </ul>

                            <li className='font-bold'>Ethical Considerations</li>
                            <ul className='list-disc text-lg my-4 space-y-4'>
                                <li>Bias and Fairness</li>
                                <p className='text-lg'>– Training Data Bias: AI systems learn from historical data, inheriting biases.</p>
                                <p className='text-lg'>– Algorithmic Fairness: Ensuring fairness and transparency in AI decision-making.</p>

                                <li>Job Transition and Re-skilling</li>
                                <p className='text-lg'>– Lifelong Learning: Workers need continuous up-skilling to adapt to changing job requirements.</p>
                                <p className='text-lg'>– Government Policies: Support for displaced workers and re-skilling programs.</p>

                            </ul>

                            <li className='font-bold'>The Future of Work </li>
                            <p>– Hybrid Workforce: Humans and AI collaborate seamlessly.</p>
                            <p>– Creativity and Emotional Intelligence: Skills that remain uniquely human.</p>


                        </ul>
                        <div className="space-y-4  text-primary-foreground text-lg">
                            <h1 className='font-bold text-3xl text-black my-6'>Conclusion</h1>
                            <p>The AI revolution is both disruptive and promising. As we navigate this transformation, let’s prioritize ethical AI, invest in education, and create a future where technology enhances human potential. 🌟</p>

                            <p >References:</p>

                            <ul className='pl-4 list-decimal space-y-4'>
                                <li>[AI’s Impact on Jobs and Work Is a Choice Between Two Futures] (https://ssir.org/articles/entry/ai-impact-on-jobs-and-work)</li>
                                <li>[AI could replace equivalent of 300 million jobs – report] (https://www.bbc.com/news/technology-65102150)</li>
                                <li>[AI Will Transform the Global Economy. Let’s Make Sure It Benefits Humanity] (https://www.imf.org/en/blog/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity)</li>
                                <li>[AI has a positive impact on job creation, and we have proof of it] (https://resources.workable.com/stories-and-insights/impact-of-ai-on-job-creation)</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center justify-end text-gray-500 gap-x-2 font-bold group'>
                        <FontAwesomeIcon icon={faHeartRegular} className='group-hover:text-red-500' />
                        24
                    </div>
                </div>
            </Card>

            {/* tags and share section */}
            <div className="mt-16 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0">
                    <div className="col-span-1 lg:col-span-2 flex items-center space-x-4">
                        <p className='font-bold'>Tags:</p>
                        <div className="flex-auto space-x-2 space-y-2">
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>AI</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Challenges</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Jobs</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Opportunities</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Revolution</Button>
                        </div>
                    </div>

                    <div className="col-span-1 flex items-center space-x-4 lg:justify-end">
                        <div className="flex space-x-2">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://innovador.solutions/2024/08/19/navigating-the-ai-revolution-jobs-challenges-and-opportunities/" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#1877F2]' icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com/intent/tweet?text=Navigating%20the%20AI%20Revolution:%20Jobs,%20Challenges,%20and%20Opportunities&url=https://innovador.solutions/2024/08/19/navigating-the-ai-revolution-jobs-challenges-and-opportunities/" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#1DA1F2]' icon={faTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://innovador.solutions/2024/08/19/navigating-the-ai-revolution-jobs-challenges-and-opportunities/&title=Navigating%20the%20AI%20Revolution:%20Jobs,%20Challenges,%20and%20Opportunities&summary=https://innovador.solutions&source=Innovador%20Solutions" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#0077B5]' icon={faLinkedin} />
                            </a>
                            <a href="http://reddit.com/submit?url=https://innovador.solutions/2024/08/19/navigating-the-ai-revolution-jobs-challenges-and-opportunities/&title=Navigating%20the%20AI%20Revolution:%20Jobs,%20Challenges,%20and%20Opportunities" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#E60023]' icon={faReddit} />
                            </a>



                        </div>
                    </div>
                </div>




            </div>
            <hr />

            {/* previous post section */}
            <div className="my-8">
                <Link to={`/blog/${1}`}>
                    <div className="flex items-center space-x-6 group lg:w-[70%]">
                        <img src="/images/blogs01.jpg" className='h-16 w-20' alt="" />
                        <div>
                            <p className='text-primary-foreground'>Previous Post</p>
                            <h1 className='text-xl font-bold group-hover:text-primary duration-500 transition-all'>The Transformative Role of AI in Hospital Management</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <hr />

            {/* comments section */}
            <div className='my-8'>
                <h1 className='font-bold text-2xl'>{blog2comments.length} Comments</h1>
                <div className="blog-line"></div>
                {blog2comments.map((comment) => (
                    <div key={comment.id} className="my-6 justify-items-center sm:flex space-x-6">
                        <img src="/images/dp.png" className='rounded-full h-full' alt="" />
                        <div>
                            <div className="bg-secondary py-6 px-8 w-full group">
                                <div className="flex">
                                    <div>
                                        <h1 className='font-bold text-xl'>{comment.name}</h1>
                                        <p className='text-gray-500 group-hover:text-primary transition-all duration-500'>{comment.date} - {comment.time}</p>
                                    </div>
                                    <Button onClick={() => handleReply(comment.id)} className='ml-auto text-white group-hover:bg-black transition-all duration-500'>Reply <FontAwesomeIcon icon={faReply} /></Button>
                                </div>

                                <p className='my-6 text-primary-foreground'>{comment.text}</p>
                            </div>
                            {reply === comment.id && (
                                < div className='my-8'>
                                    <h1 className='font-bold text-2xl cursor-pointer' onClick={() => handleReply(0)}>Reply to Riva Collins</h1>
                                    <div className="blog-line"></div>
                                    <div className="space-y-6 my-6">
                                        <Textarea className='bg-transparent' placeholder='Comment*' rows='7' />
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0">
                                            <div className="col-span-1">
                                                <Input placeholder='Name*' className='bg-transparent' />
                                            </div>
                                            <div className="col-span-1">
                                                <Input placeholder='Email*' className='bg-transparent' />
                                            </div>
                                            <div className="col-span-1">
                                                <Input placeholder='Website*' className='bg-transparent' />
                                            </div>
                                        </div>

                                        <div className="flex my-6 space-x-2 items-center">
                                            <Checkbox id='save' />
                                            <label
                                                htmlFor="save"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary-foreground peer-disabled:opacity-70"
                                            >
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <Button className='text-white py-6 px-8 font-bold hover:bg-black transition-all duration-500'>Post Comment</Button>

                                    </div>

                                </div>
                            )}
                        </div>

                    </div>
                ))}


            </div >

            {/* leave a comment section */}
            {reply === 0 && (
                < div className='my-8' >
                    <h1 className='font-bold text-2xl'>Leave A Comment</h1>
                    <div className="blog-line"></div>
                    <div className="space-y-6 my-6">
                        <Textarea className='bg-transparent' placeholder='Comment*' rows='7' />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0">
                            <div className="col-span-1">
                                <Input placeholder='Name*' className='bg-transparent' />
                            </div>
                            <div className="col-span-1">
                                <Input placeholder='Email*' className='bg-transparent' />
                            </div>
                            <div className="col-span-1">
                                <Input placeholder='Website*' className='bg-transparent' />
                            </div>
                        </div>

                        <div className="flex my-6 space-x-2 items-center">
                            <Checkbox id='save' />
                            <label
                                htmlFor="save"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary-foreground peer-disabled:opacity-70"
                            >
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>
                        <Button className='text-white py-6 px-8 font-bold hover:bg-black transition-all duration-500'>Post Comment</Button>

                    </div>

                </div >
            )}



            <style jsx>
                {`
                .blog-line {
                    width: 40px;             /* Adjust width as needed */
                    height: 3px;             /* Adjust height as needed */
                    background-color: #F79720; /* Yellow color */
                }
                `}
            </style>
        </>
    );
}

export function Blog4() {

    const [reply, setReply] = useState(0);

    const handleReply = (num) => {
        setReply(num)
    }
    return (
        <>
            {/* main blog section */}
            <Card className='rounded-lg relative'>
                <img src="/images/blogs04.jpg" className='rounded-t-lg w-full' alt="" />
                <div className="absolute right-8 top-8">
                    <Button className='bg-primary font-bold shadow-xl text-white'>
                        Mental Health
                    </Button>
                </div>
                <div className="p-8">
                    <div className="flex items-center space-x-2 text-md text-gray-600 pb-4">
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>July 4, 2024</p><span>/</span>
                        <FontAwesomeIcon icon={faUser} />
                        <p>Iqbal Y. Shaikh</p>
                    </div>
                    <div className="blog-line"></div>
                    <hr />

                    <div className="my-6">
                        <h1 className='font-bold text-3xl'>Can AI Become Your Therapist?</h1>

                        <div className="grid grid-cols-4 my-6 gap-x-6">
                            <div className="col-span-3">
                                <p className='text-primary-foreground text-lg'>In recent years, advancements in artificial intelligence (AI) have begun to revolutionize various fields, including general healthcare and mental healthcare. And this is transforming the healthcare world, especially the analytic and diagnostic avenues. The focus of this discussion is on role of AI in psychology and question is whether AI can become your therapist!</p>
                            </div>
                            <div className="col-span-1">
                                <img src="/images/iqbal.jpg" alt="" />
                                <h1 className='text-center text-2xl font-bold'>Iqbal Y. Shaikh</h1>
                            </div>
                        </div>
                    </div>

                    <div className="my-8 space-y-6">
                        <div>
                            <h1 className='font-bold text-xl'>Psychology Diagnosis</h1>
                            <div className="blog-line mb-4"></div>
                            <h1 className='font-bold text-3xl'>What can AI do?</h1>
                        </div>

                        <p className='text-primary-foreground text-lg'>AI-powered tools can assist human psychologists in the diagnosis and treatment of mental health conditions. There are several advantages of implementation of AI into diagnostic processes of mental healthcare conditions, like large datasets to evaluate, standardization of patterns and behaviours, reduce biasness etc.</p>
                    </div>

                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>AI as a Diagnostic Assistant:</h1>

                        <p className='text-primary-foreground text-lg'>AI-powered tools can pre-screen the patients and suggest the areas of focus for the therapist and flagging potential issues. This allows therapists to dig deeper into the complexities of a client's situation.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Data Analysis and Insights:</h1>

                        <p className='text-primary-foreground text-lg'>By automation of diagnostic process, the advantages that we could have been; the large dataset for the analytical algorithms to analyse including speech patterns, written text, and even social media activity, to identify subtle signs of mental health issues. AI can analyse vast datasets of past cases, identifying patterns and subtle signs that might escape the human eye. This can lead to earlier detection and intervention.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Standardization of assessment:</h1>

                        <p className='text-primary-foreground text-lg'>AI can ensure standardized assessments for therapists and practitioners, reducing inconsistencies in diagnoses. And this leads to building up of standard diagnostic patterns.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Reduced Bias:</h1>

                        <p className='text-primary-foreground text-lg'>Machines are never biased; however, the human being is biased by nature. This human bias can creep into diagnoses. While AI is not immune to bias in its training data; hence it can offer a more objective assessment based on patterns.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Chatbots - Accessibility and Scalability for Mental Health Support:</h1>

                        <p className='text-primary-foreground text-lg'>AI-powered Chatbots or online screening tools can provide initial screenings and assessments, offer basic support, and even guide users towards professional help. This may also support in remote areas for individuals hesitant to visit therapist or get traditional therapy.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Mood and Emotion Detection:</h1>

                        <p className='text-primary-foreground text-lg'>Traditional diagnosis often relies on face-to-face interviews and standardized tests. AI offers exciting possibilities by analysing facial expressions, vocal tones, and word choice to gauge a person's emotional state.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Data-driven Treatment Planning:</h1>

                        <p className='text-primary-foreground text-lg'>AI analyses a client's data and past treatment records to suggest the most effective therapy approaches. Therapists can then personalize these recommendations based on their expertise and the client's unique needs.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Streamlining Administrative Tasks:</h1>

                        <p className='text-primary-foreground text-lg'>Besides pre-screening; AI-powered diagnostic tools can help Freeing up therapists' time for patient interaction. The tools can handle administrative tasks like scheduling appointments and generating reports.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>The Human Touch Remains Vital:</h1>

                        <p className='text-primary-foreground text-lg'>AI cannot replicate the therapeutic alliance, the bond between therapist and client, which is essential for successful treatment. Therapists provide empathy, understanding, and the ability to adapt to individual needs in a way AI currently cannot.</p>
                    </div>
                    <div className="border-l-4 border-primary p-6 bg-secondary space-y-4 my-6">
                        <h1 className='font-bold text-2xl'>Ethical Concerns:</h1>

                        <p className='text-primary-foreground text-lg'>AI algorithms are only as good as the data they're trained on. Bias in training data can lead to inaccurate diagnoses, particularly for marginalized groups.</p>
                    </div>

                    <h1 className='font-bold text-3xl'>The future of AI in psychology</h1>
                    <p className='text-primary-foreground my-6 text-lg'>The future of AI-powered psychological diagnosis and assistance to therapist is bright, but it requires careful development and responsible implementation. By harnessing the power of AI while safeguarding human connection and ethical principles, we can create a more accessible and effective mental healthcare system for everyone.</p>

                    <div className='flex items-center justify-end text-gray-500 gap-x-2 font-bold group'>
                        <FontAwesomeIcon icon={faHeartRegular} className='group-hover:text-red-500' />
                        24
                    </div>
                </div>
            </Card>

            {/* tags and share section */}
            <div className="mt-16 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0">
                    <div className="col-span-1 lg:col-span-2 flex items-center space-x-4">
                        <p className='font-bold'>Tags:</p>
                        <div className="flex-auto space-x-2 space-y-2">
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>AI</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Diagnosis</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Mental Health Care</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Psychology</Button>
                            <Button className='bg-gray-200 text-black hover:bg-primary hover:text-white transition-all duration-500'>Therapy</Button>
                        </div>
                    </div>

                    <div className="col-span-1 flex items-center space-x-4 lg:justify-end">
                        <div className="flex space-x-2">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://innovador.solutions/2024/07/04/can-ai-become-your-therapist/" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#1877F2]' icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com/intent/tweet?text=Can%20AI%20Become%20Your%20Therapist?&url=https://innovador.solutions/2024/07/04/can-ai-become-your-therapist/" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#1DA1F2]' icon={faTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://innovador.solutions/2024/07/04/can-ai-become-your-therapist/&title=Can%20AI%20Become%20Your%20Therapist?&summary=https://innovador.solutions&source=Innovador%20Solutions" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#0077B5]' icon={faLinkedin} />
                            </a>
                            <a href="http://reddit.com/submit?url=https://innovador.solutions/2024/07/04/can-ai-become-your-therapist/&title=Can%20AI%20Become%20Your%20Therapist?" target='_blank'>
                                <FontAwesomeIcon className='h-8 text-[#E60023]' icon={faReddit} />
                            </a>



                        </div>
                    </div>
                </div>




            </div>
            <hr />

            {/* previous post section */}
            <div className="my-8">
                <Link to={`/blog/${3}`}>
                    <div className="flex items-center space-x-6 group lg:w-[70%]">
                        <img src="/images/blogs03.jpg" className='h-16 w-20' alt="" />
                        <div>
                            <p className='text-primary-foreground'>Previous Post</p>
                            <h1 className='text-xl font-bold group-hover:text-primary duration-500 transition-all'>The Ethical Implications of Using AI for Mental Health Diagnosis and Therapy</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <hr />

            {/* comments section */}
            <div className='my-8'>
                <h1 className='font-bold text-2xl'>{blog4comments.length} Comments</h1>
                <div className="blog-line"></div>
                {blog4comments.map((comment) => (
                    <div key={comment.id} className="my-6 justify-items-center sm:flex space-x-6">
                        <img src="/images/dp.png" className='rounded-full h-full' alt="" />
                        <div>
                            <div className="bg-secondary py-6 px-8 w-full group">
                                <div className="flex">
                                    <div>
                                        <h1 className='font-bold text-xl'>{comment.name}</h1>
                                        <p className='text-gray-500 group-hover:text-primary transition-all duration-500'>{comment.date} - {comment.time}</p>
                                    </div>
                                    <Button onClick={() => handleReply(comment.id)} className='ml-auto text-white group-hover:bg-black transition-all duration-500'>Reply <FontAwesomeIcon icon={faReply} /></Button>
                                </div>

                                <p className='my-6 text-primary-foreground'>{comment.text}</p>
                            </div>
                            {reply === comment.id && (
                                < div className='my-8'>
                                    <h1 className='font-bold text-2xl cursor-pointer' onClick={() => handleReply(0)}>Reply to Riva Collins</h1>
                                    <div className="blog-line"></div>
                                    <div className="space-y-6 my-6">
                                        <Textarea className='bg-transparent' placeholder='Comment*' rows='7' />
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0">
                                            <div className="col-span-1">
                                                <Input placeholder='Name*' className='bg-transparent' />
                                            </div>
                                            <div className="col-span-1">
                                                <Input placeholder='Email*' className='bg-transparent' />
                                            </div>
                                            <div className="col-span-1">
                                                <Input placeholder='Website*' className='bg-transparent' />
                                            </div>
                                        </div>

                                        <div className="flex my-6 space-x-2 items-center">
                                            <Checkbox id='save' />
                                            <label
                                                htmlFor="save"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary-foreground peer-disabled:opacity-70"
                                            >
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <Button className='text-white py-6 px-8 font-bold hover:bg-black transition-all duration-500'>Post Comment</Button>

                                    </div>

                                </div>
                            )}
                        </div>

                    </div>
                ))}


            </div >

            {/* leave a comment section */}
            {reply === 0 && (
                < div className='my-8' >
                    <h1 className='font-bold text-2xl'>Leave A Comment</h1>
                    <div className="blog-line"></div>
                    <div className="space-y-6 my-6">
                        <Textarea className='bg-transparent' placeholder='Comment*' rows='7' />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0">
                            <div className="col-span-1">
                                <Input placeholder='Name*' className='bg-transparent' />
                            </div>
                            <div className="col-span-1">
                                <Input placeholder='Email*' className='bg-transparent' />
                            </div>
                            <div className="col-span-1">
                                <Input placeholder='Website*' className='bg-transparent' />
                            </div>
                        </div>

                        <div className="flex my-6 space-x-2 items-center">
                            <Checkbox id='save' />
                            <label
                                htmlFor="save"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary-foreground peer-disabled:opacity-70"
                            >
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>
                        <Button className='text-white py-6 px-8 font-bold hover:bg-black transition-all duration-500'>Post Comment</Button>

                    </div>

                </div >
            )}



            <style jsx>
                {`
                .blog-line {
                    width: 40px;             /* Adjust width as needed */
                    height: 3px;             /* Adjust height as needed */
                    background-color: #F79720; /* Yellow color */
                }
                `}
            </style>
        </>
    );
}

