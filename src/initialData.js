export const initialData = [
    {
      key: crypto.randomUUID(),
      order: 0,
      sectionCards: [
        {
          key: crypto.randomUUID(),
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          phoneNum: "+99100100100",
          birthDate: "1990-05-05",
          city: "London",
        },
      ],
    },
    {
      key: crypto.randomUUID(),
      order: 3,
      sectionCards: [
        {
          key: crypto.randomUUID(),
          school: "University of California, Berkeley",
          degree: "Bachelor of Science in Computer Science",
          startDate: "2017-09-01",
          endDate: "2021-06-15",
          isCurrent: false,
          city: "Berkeley, CA",
          description:
            "Focused on software engineering, algorithms, and data structures.",
        },
        {
          key: crypto.randomUUID(),
          school: "Stanford University",
          degree: "Master of Science in Artificial Intelligence",
          startDate: "2022-09-01",
          endDate: "Present",
          isCurrent: true,
          city: "Stanford, CA",
          description:
            "Specializing in machine learning and neural network research.",
        },
      ],
    },
    {
      key: crypto.randomUUID(),
      order: 2,
      sectionCards: [
        {
          key: crypto.randomUUID(),
          jobTitle: "Frontend Developer",
          employer: "TechNova Solutions",
          startDate: "2021-07-01",
          endDate: "2023-05-31",
          isCurrent: false,
          city: "San Francisco, CA",
          description:
            "Developed responsive React applications and collaborated with UX designers.",
        },
        {
          key: crypto.randomUUID(),
          jobTitle: "Software Engineer",
          employer: "NextGen Innovations",
          startDate: "2023-06-01",
          endDate: "Present",
          isCurrent: true,
          city: "Remote",
          description:
            "Building scalable web services and maintaining CI/CD pipelines.",
        },
      ],
    },
    {
      key: crypto.randomUUID(),
      order: 4,
      sectionCards: [
        {
          // languages
          key: crypto.randomUUID(),
          language: "English",
          proficiency: "Proficient",
        },
        {
          key: crypto.randomUUID(),
          language: "Spanish",
          proficiency: "Intermediate",
        },
        {
          key: crypto.randomUUID(),
          language: "French",
          proficiency: "Elementary",
        },
      ],
    },
    {
      key: crypto.randomUUID(),
      order: 5,
      sectionCards: [
        {
          // technical skills
          key: crypto.randomUUID(),
          skill: "JavaScript",
          level: "Expert",
        },
        {
          key: crypto.randomUUID(),
          skill: "React",
          level: "Expert",
        },
        {
          key: crypto.randomUUID(),
          skill: "Docker",
          level: "Intermediate",
        },
      ],
    },
    {
      key: crypto.randomUUID(),
      order: 6,
      sectionCards: [
        {
          // courses, certificates etc.
          key: crypto.randomUUID(),
          name: "Full-Stack Web Development",
          institution: "Coursera (University of London)",
          description:
            "Comprehensive course covering frontend and backend web development.",
        },
        {
          key: crypto.randomUUID(),
          name: "Machine Learning",
          institution: "Stanford Online",
          description:
            "Introduction to machine learning algorithms and practical applications.",
        },
      ],
    },
    {
      key: crypto.randomUUID(),
      order: 1,
      sectionCards: [
        {
          // professional summary
          key: crypto.randomUUID(),
          content:
            "Experienced software engineer specializing in frontend development and scalable web services. Passionate about building accessible UIs and improving developer workflows.",
        },
      ],
    },
    {
      key: crypto.randomUUID(),
      order: 7,
      sectionCards: [
        {
          // links (url)
          key: crypto.randomUUID(),
          description: "GitHub",
          link: "https://github.com/j0hnd0e",
        },
        {
          key: crypto.randomUUID(),
          description: "LinkedIn",
          link: "https://www.linkedin.com/in/johndoe",
        },
      ],
    },
    {
      key: crypto.randomUUID(),
      order: 8,
      sectionCards: [
        {
          // hobbies
          key: crypto.randomUUID(),
          content: "Hiking, landscape photography, chess and puzzle solving",
        },
      ],
    },
  ];