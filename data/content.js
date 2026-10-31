// All site content lives here. Edit this file; no need to touch the components.

export const profile = {
  name: "Sahar Mansourirad",
  title: "Software engineer and computational biology researcher",
  tagline:
    "I build data-intensive backend systems and develop graph neural network models for gene essentiality prediction.",
  location: "Zanjan, Iran",
  email: "saharmansourirad@gmail.com",
  academicEmail: "saharmansourirad@iasbs.ac.ir",
  linkedin: "https://www.linkedin.com/in/sahar-mansourirad",
  github: "https://github.com/saharmansourirad", // TODO: replace with your real GitHub profile URL
  photo: null, // e.g. "/photo.jpg" after you put photo.jpg in /public
  about: [
    "I work in two worlds. By day I am a backend developer with more than four years of experience on distributed, data-intensive and business-heavy systems in .NET, Oracle and SQL Server, with a focus on keeping codebases healthy while client requests keep shipping.",
    "In research, I hold an MSc in Computer Science (ranked 3rd, GPA 17.73/20) and have developed deep learning and graph neural network models that integrate gene expression, orthology, subcellular localization and protein-protein interaction networks to predict essential genes.",
    "I am drawn to how machine learning can connect molecular patterns with biological function and disease, and I want to build methods that help explain the mechanisms behind human disease.",
  ],
  interests: ["Deep learning", "Computational biology", "Representation learning", "Biological data integration"],
};

export const skills = [
  { group: "Languages", items: ["C#", "Python", "SQL", "PL/SQL", "TypeScript", "MATLAB"] },
  { group: "Machine learning", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "Whisper", "Wav2Vec", "BERT"] },
  { group: "Backend", items: [".NET Core", "Entity Framework", "MediatR / CQRS", "RabbitMQ", "Hangfire", "Polly", "Workflow Core", "Microservices"] },
  { group: "Databases", items: ["Oracle", "SQL Server"] },
  { group: "Frontend", items: ["React", "Angular", "Axios", "Bootstrap"] },
  { group: "Tools", items: ["Git", "LaTeX"] },
  { group: "Languages spoken", items: ["Persian (native)", "English (C1)", "Turkish (conversational)"] },
];

// track: "engineering" | "research"
export const experience = [
  {
    track: "engineering",
    role: "Backend Developer",
    org: "Sanay System Development",
    place: "Zanjan, Iran (on-site)",
    period: "2022 – Present",
    points: [
      "Designed scalable backend systems with .NET Core, C# and Oracle, following clean architecture principles.",
      "Built data-processing services that integrate multi-source data through APIs and web scraping.",
      "Optimized database stored procedures and built reliable RabbitMQ services for data exchange.",
      "Delivered projects from requirements analysis to deployment, and mentored junior developers through code reviews.",
    ],
  },
  {
    track: "engineering",
    role: "AI Developer",
    org: "Sanay System Development",
    place: "Zanjan, Iran (on-site)",
    period: "2025 · 5 months",
    points: [
      "Integrated Whisper, Wav2Vec, Vosk and BERT into applications for speech recognition, speaker diarization and sentiment analysis.",
      "Built audio preprocessing and feature extraction pipelines and deployed ML features in scalable Python systems.",
    ],
  },
  {
    track: "research",
    role: "Machine Learning Researcher & Developer",
    org: "SciPub+",
    place: "Vienna, Austria (remote)",
    period: "2024 · 3 months",
    points: [
      "Fine-tuned OpenAI and open-source language models, and cleaned and engineered features on CORE datasets.",
      "Tested the system on real research papers, calibrating prompts and evaluating LLM output reliability.",
    ],
  },
  {
    track: "research",
    role: "Research Assistant",
    org: "IASBS",
    place: "Zanjan, Iran (on-site)",
    period: "2020 – 2023",
    points: [
      "Developed graph neural network models for gene essentiality prediction on protein-protein interaction networks.",
      "Integrated gene expression, orthology and subcellular localization features from UniProtKB, STRING, BioGRID, DIP and OGEE.",
      "Evaluated models across multiple organisms with feature contribution and ablation analysis.",
    ],
  },
  {
    track: "research",
    role: "Researcher, AI for COVID-19 Support",
    org: "IASBS",
    place: "Zanjan, Iran (on-site)",
    period: "2021 · 4 months",
    points: ["Reviewed 200 COVID-19 studies and co-authored a manuscript on AI in public health."],
  },
  {
    track: "engineering",
    role: "Frontend Developer",
    org: "Mehraneh Charity Project",
    place: "Zanjan, Iran",
    period: "2019 · 9 months",
    points: ["Led frontend development of an automated cancer prognosis education system in React."],
  },
  {
    track: "engineering",
    role: "IT Intern",
    org: "Educational & Treatment Center of Mousavi",
    place: "Zanjan, Iran (on-site)",
    period: "2017 · 3 months",
    points: ["Supported the hospital information system network and improved IT infrastructure."],
  },
];

export const projects = [
  { name: "Dorj Mutual Fund Backoffice", text: "RabbitMQ consumer for daily fund messages with retries and end-of-day validation, an XML reporting service, and cross-fund operations in PL/SQL and .NET Core." },
  { name: "RG (Polymorphic API interface)", text: "Modular monolith with six high-throughput data workers and REST modules, made reliable with Hangfire, Polly retry policies and automated SMS reporting." },
  { name: "NACI App", text: "Microservice backend for the National Accreditation Center of Iran using MediatR, CQRS, FluentValidation and an API gateway." },
  { name: "Referral to Experts App", text: "Backend built from scratch on the NACI architecture, adding only the domain logic for expert referral and request workflows." },
];

export const education = [
  {
    degree: "MSc in Computer Science",
    school: "Institute for Advanced Studies in Basic Sciences (IASBS), Zanjan",
    period: "2019 – 2022",
    notes: ["Thesis: Gene essentiality prediction with a deep learning approach", "GPA 17.73/20, ranked 3rd"],
  },
  {
    degree: "BSc in Information Technology Engineering",
    school: "Institute for Advanced Studies in Basic Sciences (IASBS), Zanjan",
    period: "2014 – 2018",
    notes: ["Project: Image quality assessment for fake biometric detection"],
  },
];

export const courses = [
  "Machine Learning (A+)", "Deep Learning (A+)", "Feature Selection & Extraction (A+)", "Optimization (A+)",
  "Computer Architecture (A+)", "Software Engineering (A)", "Advanced Data Mining (A)", "Artificial Intelligence (A)", "Advanced Database (A)",
];

export const publications = [
  {
    title: "EssentialGIN: a new approach for gene essentiality prediction based on graph isomorphism neural networks",
    authors: "S. Mansouri-Rad, Z. Narimani, P. Razzaghi, N. Hosseinkhan",
    venue: "BMC Bioinformatics",
    status: "Second revision submitted",
    link: "https://arxiv.org/abs/2606.07700",
    linkLabel: "arXiv preprint",
  },
  {
    title: "A Graph Neural Network-Based Framework for Preserving Structural Features and Combining Them with Biological Features for Essential Gene Discovery",
    authors: "S. Mansouri-Rad, Z. Narimani, P. Razzaghi, N. Hosseinkhan",
    venue: "Tabriz University Journal of Computer Engineering",
    status: "Under review",
  },
];

export const talks = [
  "Gene essentiality prediction with deep learning approach, MSc thesis defense (2023)",
  "Early mild cognitive impairment detection with multi-modal data, Bioinformatics group (2021)",
  "ASCA-PSO: a hybrid optimization algorithm for pairwise local sequence alignment (2020)",
];

export const teaching = [
  { role: "Teaching Assistant, Data Mining", org: "IASBS, Zanjan", period: "2020" },
  { role: "English Tutor", org: "Ayandegera Language Institute, Zanjan", period: "2019 – 2021" },
];
