import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "JPMorgan Chase & Co.",    
    description:
      "I led a Spring Boot API for digital transfers, managing 4000+ customers' authorizations and transactions. I optimized infrastructure by migrating 100+ batch jobs to Python, implementing OAuth 2.0, reducing cloud costs by 40%, and minimizing batch job failures by 95%. I automated batch services across 60+ countries, curtailing manual intervention by 25%. Strengthening security, I adapted network authentication for Kerberos, doubling data security and access control. Collaborating in a 10-member team, I designed the full infrastructure, incorporating new cloud tools and a mix of proprietary and open-source software.",
    date: "Senior Software Engineer • March 2022 - Present",
    image: "/jpmc.webp",
    link: "https://www.chase.com/business/banking/services/collect-and-deposit/wire-transfers",
  },
  {
    name: "Walgreens",    
    description:
      "Amid the COVID-19 pandemic, ensuring constant medical services was crucial. Moving pharmacy transactions to Azure cut costs by 32%. Over 250 defects were proactively fixed in testing and production, preventing losses and ensuring a smooth user experience. Automation enabled 24/7 support for 9000+ stores. Java, Angular, TypeScript, and PostgreSQL/NoSQL led to robust solutions. Automated testing with JUnit and Mockito reduced manual work and improved bug detection. This effort showcased skills in AngularJS, React.js, Azure, PostgreSQL, and more, vital for uninterrupted services during the pandemic.",
    date: "Software Engineer • November 2020 - March 2022",
    image: "/walgreens.jpg",
    link: "https://www.walgreens.com/rx-checkout/pharmacy-landing",
  },
  {
    name: "Novomatic Americas",
    description:
      "At Novomatic Americas, a global leader in gaming technology, I leveraged my C/C++ expertise to develop high-performance gaming software using Visual Studio. As a key contributor to their engineering team, I focused on optimizing game performance and implementing core gaming mechanics. My work with low-level programming and memory management in C++ was instrumental in creating efficient, high-quality gaming experiences. This role allowed me to apply my technical skills in a fast-paced, innovative environment while contributing to the company's reputation for cutting-edge gaming solutions",
    date: "Software Engineer • January 2020 - November 2020",
    image: "/Novomatic.png",
    link: "https://www.novomaticamericas.com/en",
  }
]

const WorkSection = () => {
  return (
    <section id="experience">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-gray-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <div className="mb-2">
                      <h1 className="text-4xl font-bold">{project.name}</h1>
                      <p className="text-lg text-gray-500 dark:text-gray-400">{project.date}</p>
                    </div>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default WorkSection