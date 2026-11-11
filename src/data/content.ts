export type Locale = "en" | "km";

export type Project = {
  slug: string;
  name: string;
  category: string;
  screenshot?: string;
  subtitle?: string;
  cardTitle?: string;
  categoryLabel: string;
  preview: "attendance" | "generation";
  km: { description: string; categoryLabel: string; subtitle?: string };
  status: string;
  description: string;
  details: string;
  technologies: readonly string[];
  features: readonly string[];
  github?: string;
  live?: string;
};

export const projects: readonly Project[] = [
  {
    "slug": "icheck-smart-attendance",
    "name": "ICHECK Smart Attendance Management System",
    "cardTitle": "ICHECK",
    "subtitle": "Smart Attendance Management System",
    "category": "Team project · Education technology",
    "categoryLabel": "FULL-STACK",
    "preview": "attendance",
    "status": "Featured project",
    "description": "A smart attendance management system developed as an ISTAD final team project, bringing together frontend, backend, and database technologies to support digital attendance workflows.",
    "details": "ICHECK is an ISTAD final team project supporting digital attendance workflows. The project combines a Next.js and React frontend with Java, Spring Boot, and PostgreSQL. Its interface includes role-based workflows, QR attendance, and location-related attendance settings.",
    "technologies": [
      "Next.js",
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL"
    ],
    "features": [
      "Role-based attendance workflows",
      "QR attendance",
      "Location-related attendance settings"
    ],
    "github": "https://github.com/fullstack-gen2/icheck",
    "live": "https://icheck.today/",
    "km": {
      "categoryLabel": "ការអភិវឌ្ឍ FULL-STACK",
      "subtitle": "ប្រព័ន្ធគ្រប់គ្រងវត្តមានឆ្លាតវៃ",
      "description": "ប្រព័ន្ធគ្រប់គ្រងវត្តមានឆ្លាតវៃ ដែលបង្កើតជាគម្រោងបញ្ចប់វគ្គជាក្រុមនៅ ISTAD ដោយរួមបញ្ចូលបច្ចេកវិទ្យាផ្នែកខាងមុខ ផ្នែកខាងក្រោយ និងមូលដ្ឋានទិន្នន័យ ដើម្បីគាំទ្រការគ្រប់គ្រងវត្តមានឌីជីថល។"
    }
  },
  {
    "slug": "generate-description-ai",
    "name": "Generate Description AI",
    "category": "AI-Powered Product Description Generator",
    "categoryLabel": "AI APPLICATION",
    "preview": "generation",
    "status": "Featured project",
    "description": "A web application for creating product descriptions in English and Khmer. Users can provide product information, choose a writing tone, and generate descriptions for online stores, social media, and product listings.",
    "details": "A web application for creating product descriptions in English and Khmer. Users can provide product information, choose a writing tone, and generate descriptions for online stores, social media, and product listings.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OpenAI"
    ],
    "features": [
      "Product description generation from supplied product information",
      "English and Khmer output with selectable tone",
      "Saved generation history with per-user access",
      "Copy generated descriptions"
    ],
    "github": "https://github.com/Pisoth567/generate-description-ai",
    "km": {
      "categoryLabel": "កម្មវិធី AI",
      "description": "កម្មវិធីវេបសម្រាប់បង្កើតការពិពណ៌នាផលិតផលជាភាសាអង់គ្លេស និងខ្មែរ។ អ្នកប្រើអាចផ្តល់ព័ត៌មានផលិតផល ជ្រើសរើសរបៀបសរសេរ និងបង្កើតការពិពណ៌នាសម្រាប់ហាងអនឡាញ បណ្តាញសង្គម និងបញ្ជីផលិតផល។",
      "subtitle": "កម្មវិធីបង្កើតការពិពណ៌នាផលិតផលដោយ AI"
    },
    "subtitle": "AI-Powered Product Description Generator",
    "screenshot": "/images/projects/generate-description-ai.png"
  }
];

export type Content = {
  nav: Record<"home" | "about" | "experience" | "skills" | "projects" | "education", string>;
  hero: { greeting: string; headline: string; introduction: string; roles: readonly string[]; explore: string; about: string; contact: string };
  about: { eyebrow: string; heading: string; introduction: string; paragraphs: readonly string[] };
  experience: {
    eyebrow: string;
    heading: string;
    description: string;
    featured: string;
    projectLink: string;
    journeyNote: string;
    items: readonly {
      id: "full-stack" | "software" | "design";
      title: string;
      period: string;
      type: string;
      description: string;
      badges: readonly string[];
      highlights?: readonly { label: string; description: string }[];
    }[];
  };
  skills: { eyebrow: string; heading: string; description: string };
  projects: { eyebrow: string; heading: string; description: string; featured: string; details: string; source: string; live: string; all: string; placeholder: string };
  education: { eyebrow: string; heading: string; description: string; projectLink: string; items: readonly { id: "university" | "training"; category: string; school: string; institutionName?: string; location?: string; program: string; period: string; description: string; badges: readonly string[] }[] };
  contact: { eyebrow: string; heading: string; description: string; github: string; location: string };
  footer: string;
  footerContact: string;
};

const en: Content = {
  nav: { home: "Home", about: "About", experience: "Experience", skills: "Skills", projects: "Projects", education: "Education" },
  hero: { greeting: "Hello, I’m Net Pisoth.", headline: "Building Ideas Into Digital Experiences.", introduction: "I’m a Computer Science student and aspiring full-stack developer based in Cambodia. I enjoy building practical web applications, exploring new technologies, and turning ideas into useful digital experiences.", roles: ["Full-Stack Developer", "Computer Science Student", "Software Developer"], explore: "Explore projects", about: "About me", contact: "Contact me" },
  about: { eyebrow: "GET TO KNOW ME", heading: "An aspiring developer who learns by building.", introduction: "I’m Net Pisoth (ពិសុទ្ធ), a Computer Science student in Phnom Penh, Cambodia.", paragraphs: ["I’m building a foundation across frontend and backend development, with a focus on practical web applications.", "My academic work and team projects help me turn ideas into useful software while continuing to learn new technologies."] },
  experience: {
    "eyebrow": "01 / MY JOURNEY",
    "heading": "Experience & Journey",
    "description": "From learning the fundamentals to building full-stack applications and exploring creative design.",
    "featured": "FEATURED EXPERIENCE",
    "projectLink": "View ICHECK Project",
    "journeyNote": "2025 – Present reflects my ongoing developer journey; the six-month ISTAD program is completed.",
    "items": [
      {
        "id": "full-stack",
        "title": "Full-Stack Web Developer",
        "period": "2025 – Present",
        "type": "ISTAD · Six-month Full-Stack Web Development Program",
        "description": "Completed a six-month Full-Stack Web Development program at ISTAD, gaining hands-on experience building modern web applications. Worked on ICHECK, a smart attendance management system, as the final project.",
        "badges": [
          "Next.js",
          "React",
          "Java",
          "Spring Boot",
          "PostgreSQL"
        ],
        "highlights": [
          {
            "label": "Frontend",
            "description": "Built and explored responsive user interfaces using Next.js and React."
          },
          {
            "label": "Backend",
            "description": "Worked with Java and Spring Boot to develop application APIs and backend functionality."
          },
          {
            "label": "Database",
            "description": "Used PostgreSQL for relational data storage and management."
          }
        ]
      },
      {
        "id": "software",
        "title": "Software Development Projects",
        "period": "2025 – Present",
        "type": "Academic & Personal Projects",
        "description": "Developed and explored software applications through academic and personal projects, gaining practical experience with frontend interfaces, backend APIs, and database-driven systems. Worked with technologies including Next.js, Java, Spring Boot, Python, and PostgreSQL.",
        "badges": [
          "Next.js",
          "Java",
          "Spring Boot",
          "Python",
          "PostgreSQL"
        ]
      },
      {
        "id": "design",
        "title": "Freelance Graphic Design",
        "period": "2024 – 2025",
        "type": "Creative & Visual Design",
        "description": "Created promotional graphics, social media visuals, and visual layouts using Adobe Photoshop. Developed practical skills in composition, typography, and visual presentation that complement my interest in frontend development.",
        "badges": [
          "Adobe Photoshop",
          "Graphic Design",
          "Visual Layouts"
        ]
      }
    ]
  },
  skills: {"eyebrow": "02 / MY TOOLKIT", "heading": "Skills & Technologies", "description": "Technologies I use to build, develop, and bring ideas to life."},
  projects: {"eyebrow": "03 / SELECTED WORK", "heading": "Featured Projects", "description": "A selection of projects where I explore ideas, build practical solutions, and develop my technical skills.", "featured": "Featured project", "details": "Project Details", "source": "GitHub", "live": "Live Demo", "all": "View All Projects", "placeholder": "Project illustration · Screenshot unavailable"},
  education: {"eyebrow": "04 / LEARNING PATH", "heading": "Education & Learning", "description": "My academic background and hands-on training in software development.", "projectLink": "View ICHECK Project", "items": [{"id": "university", "category": "UNIVERSITY EDUCATION", "school": "Western University", "location": "Phnom Penh, Cambodia", "program": "Computer Science", "period": "2024 – Present", "description": "Studying computer science with a focus on programming, software development, database systems, and problem-solving through academic coursework and practical projects.", "badges": ["Programming", "Software Development", "Databases"]}, {"id": "training", "category": "TECHNICAL TRAINING", "school": "ISTAD", "institutionName": "Institute of Science and Technology Advanced Development", "program": "Full-Stack Web Development", "period": "6-Month Program", "description": "Completed a six-month Full-Stack Web Development program, gaining hands-on experience with Next.js, React, Java, Spring Boot, and PostgreSQL. Worked on ICHECK, a smart attendance management system, as the final team project.", "badges": ["Next.js", "React", "Java", "Spring Boot", "PostgreSQL"]}]},
  contact: { eyebrow: "CONTACT", heading: "Let’s connect through my work.", description: "GitHub is the best place to see my public work and follow what I’m learning next.", github: "Visit GitHub", location: "Phnom Penh, Cambodia" }, footerContact: "Contact", footer: "© 2026 Net Pisoth. All rights reserved.",
};

const km: Content = {
  nav: { home: "ទំព័រដើម", about: "អំពីខ្ញុំ", experience: "បទពិសោធន៍", skills: "ជំនាញ", projects: "គម្រោង", education: "ការសិក្សា" },
  hero: { greeting: "សួស្តី ខ្ញុំឈ្មោះ ណេត ពិសុទ្ធ។", headline: "បង្កើតគំនិតឱ្យក្លាយជាបទពិសោធន៍ឌីជីថល។", introduction: "ខ្ញុំជានិស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ និងជាអ្នកអភិវឌ្ឍន៍ Full-Stack ដែលកំពុងសិក្សា នៅរាជធានីភ្នំពេញ។ ខ្ញុំចូលចិត្តបង្កើតកម្មវិធីវេបដែលមានប្រយោជន៍ និងស្វែងយល់បច្ចេកវិទ្យាថ្មីៗ។", roles: ["អ្នកអភិវឌ្ឍន៍ Full-Stack", "និស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ", "អ្នកអភិវឌ្ឍន៍កម្មវិធី"], explore: "មើលគម្រោង", about: "អំពីខ្ញុំ", contact: "ទំនាក់ទំនង" },
  about: { eyebrow: "ស្គាល់ខ្ញុំបន្ថែម", heading: "អ្នកអភិវឌ្ឍន៍កំពុងរៀនតាមរយៈការបង្កើត។", introduction: "ខ្ញុំឈ្មោះ ណេត ពិសុទ្ធ ជានិស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ នៅរាជធានីភ្នំពេញ។", paragraphs: ["ខ្ញុំកំពុងបង្កើតមូលដ្ឋានទាំងផ្នែក Frontend និង Backend ដោយផ្តោតលើកម្មវិធីវេបដែលមានប្រយោជន៍។", "ការសិក្សា និងគម្រោងជាក្រុមជួយឱ្យខ្ញុំបម្លែងគំនិតទៅជាកម្មវិធី ខណៈពេលបន្តរៀនបច្ចេកវិទ្យាថ្មីៗ។"] },
  experience: {
    "eyebrow": "01 / ដំណើររបស់ខ្ញុំ",
    "heading": "បទពិសោធន៍ និងដំណើររបស់ខ្ញុំ",
    "description": "ពីការរៀនមូលដ្ឋានគ្រឹះ រហូតដល់ការបង្កើតកម្មវិធី Full-Stack និងការស្វែងយល់ពីការរចនាប្រកបដោយភាពច្នៃប្រឌិត។",
    "featured": "បទពិសោធន៍លេចធ្លោ",
    "projectLink": "មើលគម្រោង ICHECK",
    "journeyNote": "ឆ្នាំ 2025 ដល់បច្ចុប្បន្ន សំដៅលើដំណើរអភិវឌ្ឍជំនាញរបស់ខ្ញុំ។ កម្មវិធីសិក្សារយៈពេលប្រាំមួយខែនៅ ISTAD បានបញ្ចប់រួចហើយ។",
    "items": [
      {
        "id": "full-stack",
        "title": "អ្នកអភិវឌ្ឍកម្មវិធីវេប Full-Stack",
        "period": "2025 – បច្ចុប្បន្ន",
        "type": "ISTAD · កម្មវិធីអភិវឌ្ឍកម្មវិធីវេប Full-Stack រយៈពេលប្រាំមួយខែ",
        "description": "ខ្ញុំបានបញ្ចប់កម្មវិធីអភិវឌ្ឍកម្មវិធីវេប Full-Stack រយៈពេលប្រាំមួយខែនៅ ISTAD ដោយទទួលបានបទពិសោធន៍ផ្ទាល់ក្នុងការបង្កើតកម្មវិធីវេបទំនើប។ ខ្ញុំបានចូលរួមអភិវឌ្ឍ ICHECK ដែលជាប្រព័ន្ធគ្រប់គ្រងវត្តមានឆ្លាតវៃ សម្រាប់គម្រោងបញ្ចប់វគ្គសិក្សា។",
        "badges": [
          "Next.js",
          "React",
          "Java",
          "Spring Boot",
          "PostgreSQL"
        ],
        "highlights": [
          {
            "label": "ផ្នែកខាងមុខ",
            "description": "បានបង្កើត និងស្វែងយល់ពីចំណុចប្រទាក់អ្នកប្រើដែលសម្របតាមទំហំអេក្រង់ ដោយប្រើ Next.js និង React។"
          },
          {
            "label": "ផ្នែកខាងក្រោយ",
            "description": "បានប្រើ Java និង Spring Boot ដើម្បីអភិវឌ្ឍ API និងមុខងារផ្នែកខាងក្រោយនៃកម្មវិធី។"
          },
          {
            "label": "មូលដ្ឋានទិន្នន័យ",
            "description": "បានប្រើ PostgreSQL សម្រាប់រក្សាទុក និងគ្រប់គ្រងទិន្នន័យបែបទំនាក់ទំនង។"
          }
        ]
      },
      {
        "id": "software",
        "title": "គម្រោងអភិវឌ្ឍសូហ្វវែរ",
        "period": "2025 – បច្ចុប្បន្ន",
        "type": "គម្រោងសិក្សា និងគម្រោងផ្ទាល់ខ្លួន",
        "description": "ខ្ញុំបានអភិវឌ្ឍ និងស្វែងយល់ពីកម្មវិធីសូហ្វវែរតាមរយៈគម្រោងសិក្សា និងគម្រោងផ្ទាល់ខ្លួន ដោយទទួលបានបទពិសោធន៍អនុវត្តលើចំណុចប្រទាក់អ្នកប្រើ API ផ្នែកខាងក្រោយ និងប្រព័ន្ធដែលប្រើមូលដ្ឋានទិន្នន័យ។ ខ្ញុំបានប្រើបច្ចេកវិទ្យាដូចជា Next.js, Java, Spring Boot, Python និង PostgreSQL។",
        "badges": [
          "Next.js",
          "Java",
          "Spring Boot",
          "Python",
          "PostgreSQL"
        ]
      },
      {
        "id": "design",
        "title": "ការរចនាក្រាហ្វិកឯករាជ្យ",
        "period": "2024 – 2025",
        "type": "ការរចនាប្រកបដោយភាពច្នៃប្រឌិត និងសោភ័ណភាព",
        "description": "ខ្ញុំបានបង្កើតក្រាហ្វិកផ្សព្វផ្សាយ រូបភាពសម្រាប់បណ្តាញសង្គម និងប្លង់រូបភាពដោយប្រើ Adobe Photoshop។ ការងារនេះបានជួយអភិវឌ្ឍជំនាញអនុវត្តក្នុងការរៀបចំធាតុរូបភាព ការប្រើអក្សរ និងការបង្ហាញសោភ័ណភាព ដែលបំពេញបន្ថែមចំណាប់អារម្មណ៍របស់ខ្ញុំលើការអភិវឌ្ឍផ្នែកខាងមុខ។",
        "badges": [
          "Adobe Photoshop",
          "ការរចនាក្រាហ្វិក",
          "ប្លង់រូបភាព"
        ]
      }
    ]
  },
  skills: {"eyebrow": "02 / ឧបករណ៍របស់ខ្ញុំ", "heading": "ជំនាញ និងបច្ចេកវិទ្យា", "description": "បច្ចេកវិទ្យាដែលខ្ញុំប្រើដើម្បីបង្កើត អភិវឌ្ឍ និងបម្លែងគំនិតឱ្យក្លាយជាការពិត។"},
  projects: {"eyebrow": "03 / ស្នាដៃជ្រើសរើស", "heading": "គម្រោងលេចធ្លោ", "description": "គម្រោងមួយចំនួនដែលខ្ញុំស្វែងយល់ពីគំនិត បង្កើតដំណោះស្រាយជាក់ស្តែង និងអភិវឌ្ឍជំនាញបច្ចេកទេសរបស់ខ្ញុំ។", "featured": "គម្រោងលេចធ្លោ", "details": "ព័ត៌មានគម្រោង", "source": "GitHub", "live": "មើលគេហទំព័រ", "all": "មើលគម្រោងទាំងអស់", "placeholder": "រូបតំណាងគម្រោង · មិនមានរូបថតអេក្រង់"},
  education: {"eyebrow": "04 / ដំណើរនៃការសិក្សា", "heading": "ការអប់រំ និងការសិក្សា", "description": "ប្រវត្តិសិក្សា និងការបណ្តុះបណ្តាលអនុវត្តរបស់ខ្ញុំក្នុងការអភិវឌ្ឍសូហ្វវែរ។", "projectLink": "មើលគម្រោង ICHECK", "items": [{"id": "university", "category": "ការអប់រំនៅសាកលវិទ្យាល័យ", "school": "Western University", "location": "រាជធានីភ្នំពេញ កម្ពុជា", "program": "វិទ្យាសាស្ត្រកុំព្យូទ័រ", "period": "2024 – Present", "description": "កំពុងសិក្សាវិទ្យាសាស្ត្រកុំព្យូទ័រ ដោយផ្តោតលើការសរសេរកម្មវិធី ការអភិវឌ្ឍសូហ្វវែរ ប្រព័ន្ធមូលដ្ឋានទិន្នន័យ និងការដោះស្រាយបញ្ហា តាមរយៈមុខវិជ្ជាសិក្សា និងគម្រោងអនុវត្ត។", "badges": ["ការសរសេរកម្មវិធី", "ការអភិវឌ្ឍសូហ្វវែរ", "មូលដ្ឋានទិន្នន័យ"]}, {"id": "training", "category": "ការបណ្តុះបណ្តាលបច្ចេកទេស", "school": "ISTAD", "institutionName": "Institute of Science and Technology Advanced Development", "program": "ការអភិវឌ្ឍកម្មវិធីវេប Full-Stack", "period": "6-Month Program", "description": "បានបញ្ចប់កម្មវិធីអភិវឌ្ឍកម្មវិធីវេប Full-Stack រយៈពេលប្រាំមួយខែ ដោយទទួលបានបទពិសោធន៍អនុវត្តជាមួយ Next.js, React, Java, Spring Boot និង PostgreSQL។ បានចូលរួមបង្កើត ICHECK ដែលជាប្រព័ន្ធគ្រប់គ្រងវត្តមានឆ្លាតវៃ ជាគម្រោងបញ្ចប់វគ្គជាក្រុម។", "badges": ["Next.js", "React", "Java", "Spring Boot", "PostgreSQL"]}]},
  contact: { eyebrow: "ទំនាក់ទំនង", heading: "តោះភ្ជាប់ទំនាក់ទំនងតាមរយៈការងាររបស់ខ្ញុំ។", description: "GitHub ជាកន្លែងល្អបំផុតសម្រាប់មើលការងារសាធារណៈ និងអ្វីដែលខ្ញុំកំពុងរៀន។", github: "មើល GitHub", location: "រាជធានីភ្នំពេញ កម្ពុជា" }, footerContact: "ទំនាក់ទំនង", footer: "© 2026 Net Pisoth. រក្សាសិទ្ធិគ្រប់យ៉ាង។",
};

export const content: Record<Locale, Content> = { en, km };
