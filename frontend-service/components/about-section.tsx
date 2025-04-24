"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    github?: string
    linkedin?: string
    email?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Shivani",
    role: "Professor",
    bio: `Dr. Shivani Shukla teaches undergraduate and graduate courses in the application of machine learning and AI to business. She is committed to creating a dynamic learning experience that equips students with the professional skills and personal growth needed to thrive in varied business roles.

Shivani is an active researcher in the fields of reinforcement learning, optimization, and computer vision applied to cybersecurity and intelligent systems. Her research has been published in prominent academic journals and has garnered attention in international press. She is passionate about bridging academia and industry, ensuring that her students are well-prepared for careers in technology-driven business environments.

Before becoming Associate Dean at USF School of Management, Shivani led the business analytics programs at the undergraduate level for four years, shaping future leaders at the intersection of business and technology.`,
    image:
      "https://www.usfca.edu/sites/default/files/styles/1_1_1152x1152/public/migrated/images/headshots/shivani_shukla_1.jpg.jpeg?itok=qsloN70d",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
      email: "sgshukla@usfca.edu",
    },
  },
  {
    name: "Aaron Rassiq",
    role: "ML Engineer",
    bio: `With a BS in Business Analytics and a minor in Computer Science from the University of San Francisco, I have developed strong skills in Python, Java, SQL, and Tableau. Currently, I am an Artificial Intelligence Research associate at the University of San Francisco, focusing on AI and neural network development. In this role, I design and implement AI models to enhance infrastructure systems.

My experience includes leading teams to enhance operational efficiency at the Koret Health and Recreation Center and leveraging Salesforce analytics during a wealth management internship. These roles, combined with my project work in predictive analytics and research in AI model development, highlight my ability to deliver data-driven solutions, and design/implement AI models.

I am passionate about AI and eager to apply my expertise to innovate and solve challenges in a dynamic tech company.`,
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEyE2AgNlDcSA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710570951030?e=1750896000&v=beta&t=CpfTDpUB6kGZ_3Nz2FQiuA13jNO3nWK98zdJ4YNaOvM",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
      email: "aaronrassiq@gmail.com",
    },
  },
  {
    name: "Deven Varu",
    role: "Full Stack Engineer",
    bio: "Full Stack Developer with over 3 years of experience in creating robust and scalable web applications. Proficient in both frontend and backend technologies, I specialize in designing and implementing end-to-end solutions that delight users and drive business success.",
    image: "https://avatars.githubusercontent.com/u/103780082?v=4",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
      email: "dvvaru@dons.usfca.edu",
    },
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export function AboutSection() {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="mb-12 text-center" variants={itemVariants}>
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet the talented individuals behind the Oakland Data Explorer project. Our diverse team brings together
          expertise in development, data science, and design.
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
        {teamMembers.map((member, index) => (
          <motion.div key={member.name} variants={itemVariants}>
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <p className="text-sm mb-6 flex-grow">{member.bio}</p>
                <div className="flex space-x-2">
                  {member.social.github && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                  )}
                  {member.social.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  )}
                  {member.social.email && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={`mailto:${member.social.email}`}>
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
