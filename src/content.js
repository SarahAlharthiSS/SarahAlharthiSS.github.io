import { COLORS } from "./config";

const { yellow: Y, blue: B, pink: P, white: W } = COLORS;

const shared = {
  projectTags: [
    ["LangChain", "LangGraph", "Firebase", "React"],
    ["Python", "Power BI", "Predictive Modeling"],
    ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    ["n8n", "OpenAI", "Google Drive", "Gmail"],
  ],
  projectTitles: ["SMA — Saudi Market Agent", "Price & Sales Analyzer", "Student Performance Prediction", "AI Sales Analyst"],
  projectColors: [Y, B, P, "#212121"],
  // text color on each card's colored header
  projectFg: ["#212121", "#212121", "#212121", "#FFFFFF"],
  // [url, label key] — null = no button
  projectLinks: [
    ["https://drive.google.com/file/d/12OGf3_IBoSK_yu_Py0CnnhNUcUKJxadp/view?usp=sharing", "linkDemo"],
    null,
    ["https://colab.research.google.com/drive/1bPJmvbok2_65vmlIR9oU7TGt1PKdd-Yp?usp=sharing", "linkNotebook"],
    ["https://github.com/SarahAlharthiSS/n8n-ai-automation-projects/tree/main", "linkGithub"],
  ],
  skillItems: [
    ["Python", "LangChain", "LangGraph", "n8n"],
    ["HTML", "CSS", "JavaScript", "React"],
    ["Power BI", "Data Analysis", "Predictive Modeling", "Excel", "Pandas", "NumPy"],
    ["Firebase"],
  ],
  skillColors: [Y, B, P, W],
};

const en = {
  dir: "ltr",
  name: "Sarah",
  nav: [
    ["about", "About"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["skills", "Skills"],
    ["contact", "Contact"],
  ],
  langLabel: "عربي",
  langAria: "Switch to Arabic",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  h1a: "Hi, I’m Sarah.",
  h1b: "I build",
  h1hl: "AI agents",
  h1c: "& turn data into smarter decisions.",
  heroDesc:
    "Computer Science graduate working at the intersection of AI systems and data analytics, driving transformation aligned with Saudi Vision 2030.",
  ctaProjects: "View my projects",
  scroll: "Scroll",
  aboutEyebrow: "About me",
  aboutTitle: "Data, AI, and smarter decisions",
  aboutText:
    "Computer Science graduate passionate about building intelligent, data-driven systems. I specialize in Agentic AI using LangChain and LangGraph, and Business Intelligence using Power BI, with a strong interest in applying data and AI to support smarter decision-making, particularly in the context of Saudi Arabia’s Vision 2030.",
  facts: [
    ["Education", "B.Sc. in Computer Science", "King Abdulaziz University · 2021 – 2026"],
    ["Location", "Based in Jeddah, Saudi Arabia", "Open to opportunities across the Kingdom"],
  ],
  expEyebrow: "Where I’ve worked",
  expTitle: "Experience",
  jobs: [
    {
      date: "06/2025 – 08/2025",
      role: "Summer Internship",
      org: "PetroLube — Innovation & Transformation · Jeddah",
      points: [
        "Designed and deployed interactive Power BI dashboards for management decision-making.",
        "Contributed to the Price & Sales Analyzer, turning raw sales data into structured reporting.",
        "Built responsive web interfaces (HTML, CSS, JavaScript) for internal reporting tools.",
      ],
    },
    {
      date: "09/2026 – Present",
      role: "Digital Transformation Specialist",
      program: "Tamheer Program",
      org: "PetroLube — Innovation & Transformation · Jeddah",
      points: [
        "Developing an AI agent system to automate business workflows across the department.",
        "Building the system’s frontend in React so users can interact with the agents.",
        "Developing the Python backend and designing agent workflows with LangChain & LangGraph.",
      ],
    }
  ],
  projEyebrow: "Selected work",
  projTitle: "Projects",
  linkDemo: "Watch demo",
  linkNotebook: "Open in Colab",
  linkGithub: "View on GitHub",
  projects: [
    {
      kind: "Multi-Agent System",
      desc: "A multi-agent platform that helps foreign investors evaluate Saudi Arabia’s investment environment in line with Vision 2030.",
      points: [
        "Designed and built the Regulation Agent with LangChain & LangGraph.",
        "Built the Firebase database architecture for market and regulatory data.",
        "Developed the React frontend investors use to access insights.",
      ],
    },
    {
      kind: "Data & BI",
      desc: "Turning raw sales data into KPIs and predictive insights for decision-makers.",
      points: [
        "Analyzed and visualized 10,000+ sales records to monitor KPIs.",
        "Built and tested predictive AI models in Python.",
        "Automated reporting workflows, reducing manual work by 70%.",
        "Adopted and used by the Innovation & Transformation department.",
      ],
    },
    {
      kind: "Machine Learning",
      desc: "A classification model that predicts student academic performance from GPA, study time, absences and age.",
      points: [
        "Outlier detection with Isolation Forest and class balancing with SMOTEENN.",
        "Trained Random Forest and SVM models tuned with GridSearchCV.",
        "Visualized results with confusion-matrix heatmaps (Seaborn, Matplotlib).",
      ],
    },
    {
      kind: "AI Automation",
      desc: "An end-to-end n8n automation that turns a raw sales file into an AI-written analysis report, delivered by email in about a minute.",
      points: [
        "Replaced a manual process that takes hours with a report delivered in about a minute.",
        "Designed a pipeline (Google Drive → Extract → Aggregate → LLM → Gmail) that consolidates 90+ order records into one dataset.",
        "Engineered a structured prompt (Role, Context, Task, Constraints, Format) that outputs KPIs, insights and recommendations as a ready-to-send HTML report.",
        "Reusable by design: upload a new month’s data and get an updated report, with no changes to the automation.",
      ],
    },
  ],
  skillsEyebrow: "Toolbox",
  skillsTitle: "Skills",
  skillGroups: ["AI, Agents & Automation", "Frontend Development", "Data & Business Intelligence", "Database"],
  softTitle: "Soft skills",
  soft: ["Problem Solving & Critical Thinking", "Creativity & Attention to Detail", "Time Management & Adaptability"],
  contactTitle: "Let’s build something together",
  contactText: "Have a project, an opportunity, or just want to say hi? Send me a message and I’ll get back to you.",
  fName: "Your name",
  fEmail: "Your email",
  fMsg: "Message",
  fSend: "Send message",
  fSending: "Sending…",
  fSent: "Thanks! Your message was sent.",
  fError: "Something went wrong. Please try again.",
  fRequired: "Please fill in all fields.",
  footer: "© 2026 Sarah",
  backTop: "Back to top",
};

const ar = {
  dir: "rtl",
  name: "ساره",
  nav: [
    ["about", "نبذة"],
    ["experience", "الخبرات"],
    ["projects", "المشاريع"],
    ["skills", "المهارات"],
    ["contact", "تواصل"],
  ],
  langLabel: "EN",
  langAria: "التبديل إلى الإنجليزية",
  menuOpen: "فتح القائمة",
  menuClose: "إغلاق القائمة",
  h1a: "أهلًا، أنا ساره.",
  h1b: "أبني",
  h1hl: "وكلاء ذكاء اصطناعي",
  h1c: "وأحوّل البيانات إلى قرارات أذكى.",
  heroDesc:
    "خريجة علوم حاسب أعمل في تقاطع أنظمة الذكاء الاصطناعي وتحليل البيانات، لدعم التحول بما يتوافق مع رؤية السعودية 2030.",
  ctaProjects: "شاهد مشاريعي",
  scroll: "مرّر",
  aboutEyebrow: "نبذة عني",
  aboutTitle: "بيانات، ذكاء اصطناعي، وقرارات أذكى",
  aboutText:
    "خريجة علوم حاسب شغوفة ببناء أنظمة ذكية تعتمد على البيانات. متخصصة في الذكاء الاصطناعي الوكيلي باستخدام LangChain وLangGraph، وفي ذكاء الأعمال باستخدام Power BI، مع اهتمام كبير بتوظيف البيانات والذكاء الاصطناعي لدعم اتخاذ قرارات أذكى، خصوصًا في سياق رؤية السعودية 2030.",
  facts: [
    ["التعليم", "بكالوريوس علوم الحاسب", "جامعة الملك عبدالعزيز · 2021 – 2026"],
    ["الموقع", "أعيش في جدة، المملكة العربية السعودية", "منفتحة على الفرص داخل المملكة"],
  ],
  expEyebrow: "وين اشتغلت",
  expTitle: "الخبرات",
  jobs: [
    {
      date: "06/2025 – 08/2025",
      role: "تدريب صيفي",
      org: "بترولوب — إدارة الابتكار والتحول · جدة",
      points: [
        "تصميم ونشر لوحات Power BI تفاعلية لتحليل البيانات ودعم قرارات الإدارة.",
        "المساهمة في مشروع Price & Sales Analyzer بتحويل بيانات المبيعات الخام إلى تقارير منظمة.",
        "تطوير واجهات ويب متجاوبة بـ HTML وCSS وJavaScript لأدوات التقارير الداخلية.",
      ],
    },
    {
      date: "09/2026 – حتى الآن",
      role: "أخصائية تحول رقمي",
      program: "برنامج تمهير",
      org: "بترولوب — إدارة الابتكار والتحول · جدة",
      points: [
        "تطوير نظام وكلاء ذكاء اصطناعي لأتمتة سير العمل في إدارة الابتكار والتحول.",
        "بناء الواجهات الأمامية للنظام باستخدام React لتمكين المستخدمين من التفاعل مع الوكلاء.",
        "تطوير الواجهة الخلفية بـ Python وتصميم سير عمل الوكلاء باستخدام LangChain وLangGraph.",
      ],
    }
  ],
  projEyebrow: "أعمال مختارة",
  projTitle: "المشاريع",
  linkDemo: "شاهد العرض",
  linkNotebook: "افتح في Colab",
  linkGithub: "عرض على GitHub",
  projects: [
    {
      kind: "نظام متعدد الوكلاء",
      desc: "منصة ذكية متعددة الوكلاء تساعد المستثمرين الأجانب على تقييم بيئة الاستثمار في السعودية بما يتوافق مع رؤية 2030.",
      points: [
        "تصميم وبناء وكيل الأنظمة واللوائح باستخدام LangChain وLangGraph.",
        "بناء قاعدة البيانات على Firebase لتخزين بيانات السوق واللوائح.",
        "تطوير الواجهة الأمامية بـ React ليصل المستثمرون إلى الرؤى بسهولة.",
      ],
    },
    {
      kind: "بيانات وذكاء أعمال",
      desc: "تحويل بيانات المبيعات الخام إلى مؤشرات أداء ورؤى تنبؤية لصنّاع القرار.",
      points: [
        "تحليل وتصوير أكثر من 10,000 سجل مبيعات لمتابعة مؤشرات الأداء.",
        "بناء واختبار نماذج ذكاء اصطناعي تنبؤية بـ Python.",
        "أتمتة تحديث البيانات والتقارير وتقليل العمل اليدوي بنسبة 70%.",
        "تم اعتماده واستخدامه من قبل إدارة الابتكار والتحول.",
      ],
    },
    {
      kind: "تعلّم الآلة",
      desc: "نموذج تصنيف يتنبأ بالأداء الأكاديمي للطلاب بناءً على المعدل ووقت المذاكرة والغياب والعمر.",
      points: [
        "كشف القيم الشاذة بـ Isolation Forest وموازنة الفئات بـ SMOTEENN.",
        "تدريب نماذج Random Forest وSVM وضبطها بـ GridSearchCV.",
        "عرض النتائج بخرائط حرارية لمصفوفة الالتباس (Seaborn وMatplotlib).",
      ],
    },
    {
      kind: "أتمتة بالذكاء الاصطناعي",
      desc: "أتمتة متكاملة على n8n تحوّل ملف مبيعات خام إلى تقرير تحليلي يكتبه الذكاء الاصطناعي ويوصل بالإيميل خلال دقيقة تقريبًا.",
      points: [
        "استبدال عملية يدوية تأخذ ساعات بتقرير يوصل خلال دقيقة تقريبًا.",
        "تصميم مسار بيانات من Google Drive إلى Gmail مرورًا بالاستخراج والتجميع ونموذج اللغة، يدمج أكثر من 90 سجل طلب في مجموعة بيانات واحدة.",
        "هندسة برومبت منظّم (الدور، السياق، المهمة، القيود، الصيغة) يولّد مؤشرات الأداء والرؤى والتوصيات كتقرير HTML جاهز للإرسال.",
        "قابلة لإعادة الاستخدام: رفع بيانات شهر جديد يطلع تقرير محدّث بدون أي تعديل على الأتمتة.",
      ],
    },
  ],
  skillsEyebrow: "أشتغل بـ",
  skillsTitle: "المهارات",
  skillGroups: ["الذكاء الاصطناعي والوكلاء والأتمتة", "تطوير الواجهات", "البيانات وذكاء الأعمال", "قواعد البيانات"],
  softTitle: "مهارات شخصية",
  soft: ["حل المشكلات والتفكير النقدي", "الإبداع والاهتمام بالتفاصيل", "إدارة الوقت والمرونة"],
  contactTitle: "نشتغل مع بعض؟",
  contactText: "عندك مشروع أو فرصة أو حاب تسلّم؟ أرسل لي رسالة وبرد عليك.",
  fName: "اسمك",
  fEmail: "بريدك الإلكتروني",
  fMsg: "رسالتك",
  fSend: "إرسال الرسالة",
  fSending: "جارٍ الإرسال…",
  fSent: "شكرًا! وصلتني رسالتك.",
  fError: "صار خطأ، حاول مرة ثانية.",
  fRequired: "فضلًا عبّ كل الخانات.",
  footer: "© 2026 ساره",
  backTop: "للأعلى",
};

export const content = { en, ar };
export { shared };
