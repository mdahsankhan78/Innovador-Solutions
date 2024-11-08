import { HoverEffect } from "../card-hover-effect";

export function CardsServices() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "UI / UX",
    description:
      "We are the wizards of UI/UX; the two main components on which the performance of any website or application depends. By excelling in UI/UX, we develop user-friendly web applications tailored for every device.",
    link: "https://stripe.com",
  },
  {
    title: "Web Development",
    description:
      "Using cutting-edge technologies, our team develops web applications to cater to the dynamic needs of today’s businesses. This encompasses full-stack development, from front-end design to database and software architecture development to implementation.",
    link: "https://netflix.com",
  },
  {
    title: "Mobile Application",
    description:
      "We develop mobile apps to serve a wide range of purposes, from productivity to Health-Tech, Ed-Tech, e-commerce and many more. These applications are the key elements to increasing the efficiency and productivity of every sort of business.",
    link: "https://google.com",
  },
  {
    title: "IT Consultancy",
    description:
      "We benefit our customers with our extensive knowledge of IT, which includes the most considered areas such as UI/UX Designing, Software Development, Data Analytics, Artificial Intelligence and Digital Marketing.",
    link: "https://meta.com",
  },
  {
    title: "SaaS & Cloud Computing",
    description:
      "We eliminate upfront costs for our clients, making it easier for them to try our cloud-based software and application services and scale their usage as their needs grow. Our SaaS services make our clients and users free from stress of investing in hardware.",
    link: "https://amazon.com",
  },
  {
    title: "Digital Marketing",
    description:
      "Making your business approachable for everyone by promoting it via online platforms. Our digital marketing services are the go-to solutions to reach a wider audience effortlessly by using the top-notch techniques of social media marketing, search engine optimization - SEO, and Search Engine Marketing -SEM.",
    link: "https://microsoft.com",
  },
];
