import { QuizSection, CareerMatch, LearningResource, CareerPathStage } from '../types';

// AI and Future Jobs Data
export const aiCareerMatches: CareerMatch[] = [
  {
    id: 'ai-prompt-engineer',
    title: 'AI Prompt Engineer',
    description: 'Design and optimize prompts for AI systems to generate desired outputs across various applications',
    matchPercentage: 92,
    salaryRange: { min: 80000, max: 180000 },
    demandLevel: 'Very High',
    requiredSkills: ['Natural Language Processing', 'AI/ML Understanding', 'Creative Writing', 'Critical Thinking'],
    industry: 'AI/Technology',
    workEnvironment: 'Remote/Hybrid',
    education: 'Bachelor\'s Degree or Equivalent Experience',
    growthProjection: '300% growth projected through 2030'
  },
  {
    id: 'ai-ethics-specialist',
    title: 'AI Ethics Specialist',
    description: 'Ensure AI systems are developed and deployed responsibly, addressing bias, fairness, and societal impact',
    matchPercentage: 88,
    salaryRange: { min: 90000, max: 200000 },
    demandLevel: 'Very High',
    requiredSkills: ['Ethics', 'AI/ML Knowledge', 'Policy Development', 'Risk Assessment'],
    industry: 'AI/Governance',
    workEnvironment: 'Office/Remote',
    education: 'Master\'s Degree preferred',
    growthProjection: '250% growth projected through 2030'
  },
  {
    id: 'human-ai-interaction-designer',
    title: 'Human-AI Interaction Designer',
    description: 'Design intuitive interfaces and experiences for human-AI collaboration and interaction',
    matchPercentage: 85,
    salaryRange: { min: 75000, max: 160000 },
    demandLevel: 'High',
    requiredSkills: ['UX/UI Design', 'AI Understanding', 'Psychology', 'Prototyping'],
    industry: 'Design/AI',
    workEnvironment: 'Office/Remote',
    education: 'Bachelor\'s Degree in Design or related field',
    growthProjection: '200% growth projected through 2030'
  },
  {
    id: 'ai-trainer-specialist',
    title: 'AI Training Specialist',
    description: 'Develop training programs and curricula to help organizations adopt and effectively use AI tools',
    matchPercentage: 82,
    salaryRange: { min: 70000, max: 150000 },
    demandLevel: 'High',
    requiredSkills: ['Training Development', 'AI/ML Knowledge', 'Communication', 'Curriculum Design'],
    industry: 'Education/AI',
    workEnvironment: 'Hybrid/Travel',
    education: 'Bachelor\'s Degree + Certifications',
    growthProjection: '180% growth projected through 2030'
  },
  {
    id: 'autonomous-vehicle-safety-engineer',
    title: 'Autonomous Vehicle Safety Engineer',
    description: 'Ensure the safety and reliability of self-driving vehicles through testing and validation',
    matchPercentage: 79,
    salaryRange: { min: 95000, max: 220000 },
    demandLevel: 'High',
    requiredSkills: ['Safety Engineering', 'AI/ML', 'Automotive Systems', 'Testing Protocols'],
    industry: 'Automotive/AI',
    workEnvironment: 'Office/Testing Facilities',
    education: 'Bachelor\'s/Master\'s in Engineering',
    growthProjection: '150% growth projected through 2030'
  },
  {
    id: 'digital-twin-architect',
    title: 'Digital Twin Architect',
    description: 'Create virtual replicas of physical systems for simulation, monitoring, and optimization',
    matchPercentage: 76,
    salaryRange: { min: 85000, max: 190000 },
    demandLevel: 'High',
    requiredSkills: ['3D Modeling', 'IoT', 'Simulation', 'Data Analytics'],
    industry: 'Manufacturing/Technology',
    workEnvironment: 'Office/Remote',
    education: 'Bachelor\'s/Master\'s in Engineering or Computer Science',
    growthProjection: '140% growth projected through 2030'
  },
  {
    id: 'quantum-ai-researcher',
    title: 'Quantum AI Researcher',
    description: 'Develop quantum computing applications for artificial intelligence and machine learning',
    matchPercentage: 73,
    salaryRange: { min: 120000, max: 300000 },
    demandLevel: 'Medium',
    requiredSkills: ['Quantum Computing', 'AI/ML', 'Physics', 'Advanced Mathematics'],
    industry: 'Research/Technology',
    workEnvironment: 'Research Labs/Universities',
    education: 'PhD preferred',
    growthProjection: '500% growth projected through 2035'
  },
  {
    id: 'ai-content-moderator',
    title: 'AI Content Moderation Specialist',
    description: 'Develop and manage AI systems for content moderation across digital platforms',
    matchPercentage: 70,
    salaryRange: { min: 60000, max: 130000 },
    demandLevel: 'High',
    requiredSkills: ['Content Policy', 'AI/ML', 'Data Analysis', 'Communication'],
    industry: 'Social Media/Technology',
    workEnvironment: 'Remote/Office',
    education: 'Bachelor\'s Degree',
    growthProjection: '120% growth projected through 2030'
  }
];

export const aiLearningResources: Record<string, LearningResource[]> = {
  'ai-prompt-engineer': [
    {
      title: 'Prompt Engineering for ChatGPT',
      url: 'https://coursera.org',
      type: 'course',
      provider: 'Coursera',
      duration: '15 hours',
      free: false
    },
    {
      title: 'OpenAI Prompt Engineering Guide',
      url: 'https://platform.openai.com/docs/guides/prompt-engineering',
      type: 'article',
      provider: 'OpenAI',
      free: true
    },
    {
      title: 'Advanced Prompt Engineering Techniques',
      url: 'https://youtube.com',
      type: 'video',
      provider: 'YouTube',
      duration: '2 hours',
      free: true
    }
  ],
  'ai-ethics-specialist': [
    {
      title: 'AI Ethics and Governance',
      url: 'https://edx.org',
      type: 'course',
      provider: 'edX',
      duration: '40 hours',
      free: false
    },
    {
      title: 'Responsible AI Practices',
      url: 'https://ai.google/education/',
      type: 'course',
      provider: 'Google AI',
      duration: '20 hours',
      free: true
    }
  ],
  'human-ai-interaction-designer': [
    {
      title: 'Designing Human-AI Interactions',
      url: 'https://interaction-design.org',
      type: 'course',
      provider: 'IxDF',
      duration: '30 hours',
      free: false
    },
    {
      title: 'AI UX Design Principles',
      url: 'https://uxdesign.cc',
      type: 'article',
      provider: 'UX Design',
      free: true
    }
  ]
};

export const aiCareerPaths: Record<string, CareerPathStage[]> = {
  'ai-prompt-engineer': [
    {
      title: 'Junior Prompt Engineer',
      description: 'Learn basic prompt engineering techniques and work on simple AI applications',
      duration: '0-1 years',
      skills: ['Basic Prompt Writing', 'AI Tool Usage', 'Documentation', 'Testing'],
      salaryRange: { min: 50000, max: 80000 }
    },
    {
      title: 'Prompt Engineer',
      description: 'Develop complex prompts for various AI models and applications',
      duration: '1-3 years',
      skills: ['Advanced Prompting', 'Model Fine-tuning', 'API Integration', 'Performance Optimization'],
      salaryRange: { min: 80000, max: 130000 }
    },
    {
      title: 'Senior Prompt Engineer',
      description: 'Lead prompt engineering initiatives and mentor junior engineers',
      duration: '3-5 years',
      skills: ['Team Leadership', 'Strategy Development', 'Cross-functional Collaboration', 'Innovation'],
      certifications: ['OpenAI Certified', 'Google AI Certified'],
      salaryRange: { min: 130000, max: 180000 }
    },
    {
      title: 'AI Prompt Architect',
      description: 'Design enterprise-level prompt engineering frameworks and standards',
      duration: '5+ years',
      skills: ['Architecture Design', 'Enterprise Strategy', 'Thought Leadership', 'Research & Development'],
      salaryRange: { min: 180000, max: 250000 }
    }
  ]
};

// Learning Roadmaps for AI Careers
export const aiLearningRoadmaps: Record<string, {
  title: string;
  description: string;
  phases: {
    title: string;
    duration: string;
    skills: string[];
    resources: string[];
    projects: string[];
  }[];
}> = {
  'ai-prompt-engineer': {
    title: 'AI Prompt Engineer Learning Roadmap',
    description: 'A comprehensive path to becoming a skilled AI Prompt Engineer',
    phases: [
      {
        title: 'Foundation Phase',
        duration: '2-3 months',
        skills: ['AI Basics', 'Natural Language Processing', 'Python Programming', 'API Usage'],
        resources: ['AI for Everyone (Coursera)', 'Python Crash Course', 'OpenAI Documentation'],
        projects: ['Simple Chatbot', 'Text Summarizer', 'Basic Prompt Templates']
      },
      {
        title: 'Intermediate Phase',
        duration: '3-4 months',
        skills: ['Advanced Prompting', 'Model Fine-tuning', 'Evaluation Metrics', 'Bias Detection'],
        resources: ['Prompt Engineering Guide', 'Hugging Face Course', 'LangChain Documentation'],
        projects: ['Multi-modal AI App', 'Prompt Optimization Tool', 'AI Content Generator']
      },
      {
        title: 'Advanced Phase',
        duration: '4-6 months',
        skills: ['Enterprise Integration', 'Performance Optimization', 'Security Considerations', 'Team Leadership'],
        resources: ['Enterprise AI Course', 'AI Security Best Practices', 'Leadership in Tech'],
        projects: ['Enterprise AI Solution', 'Prompt Engineering Framework', 'Team Training Program']
      }
    ]
  },
  'ai-ethics-specialist': {
    title: 'AI Ethics Specialist Learning Roadmap',
    description: 'Develop expertise in responsible AI development and deployment',
    phases: [
      {
        title: 'Ethics Foundation',
        duration: '2-3 months',
        skills: ['Philosophy of Ethics', 'AI Fundamentals', 'Bias in AI', 'Regulatory Landscape'],
        resources: ['AI Ethics Course (MIT)', 'Algorithmic Bias Research', 'AI Governance Papers'],
        projects: ['Bias Detection Tool', 'Ethics Framework', 'Policy Analysis Report']
      },
      {
        title: 'Applied Ethics',
        duration: '3-4 months',
        skills: ['Risk Assessment', 'Stakeholder Engagement', 'Policy Development', 'Audit Procedures'],
        resources: ['Responsible AI Toolkit', 'Stakeholder Engagement Guide', 'AI Audit Frameworks'],
        projects: ['AI Risk Assessment', 'Stakeholder Workshop', 'Ethics Audit System']
      },
      {
        title: 'Leadership & Strategy',
        duration: '4-6 months',
        skills: ['Strategic Planning', 'Cross-functional Leadership', 'Public Speaking', 'Research Methods'],
        resources: ['Strategic Leadership Course', 'Public Policy Development', 'Research Methodology'],
        projects: ['Organization-wide Ethics Program', 'Industry Best Practices Guide', 'Research Publication']
      }
    ]
  }
};