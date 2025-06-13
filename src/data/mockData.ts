import { QuizSection, CareerMatch, LearningResource, CareerPathStage } from '../types';
import { aiCareerMatches, aiLearningResources, aiCareerPaths } from './aiJobsData';

export const quizSections: QuizSection[] = [
  {
    id: 'interests',
    title: 'Interests & Passions',
    description: 'Help us understand what drives and motivates you',
    questions: [
      {
        id: 'work_interests',
        type: 'checkbox',
        question: 'Which areas interest you most?',
        options: [
          'Artificial Intelligence & Machine Learning',
          'Technology & Programming',
          'Creative Arts & Design',
          'Business & Finance',
          'Healthcare & Medicine',
          'Education & Training',
          'Sales & Marketing',
          'Engineering & Manufacturing',
          'Research & Analysis',
          'Social Work & Counseling',
          'Media & Communications',
          'Sustainability & Environment'
        ],
        required: true
      },
      {
        id: 'future_tech_interest',
        type: 'slider',
        question: 'How interested are you in emerging technologies and AI? (1-10)',
        min: 1,
        max: 10,
        required: true
      },
      {
        id: 'work_environment',
        type: 'multiple-choice',
        question: 'What work environment do you prefer?',
        options: [
          'Fast-paced startup',
          'Large established company',
          'Government organization',
          'Non-profit organization',
          'Remote/freelance',
          'Small team/agency',
          'Research institution'
        ],
        required: true
      },
      {
        id: 'work_style',
        type: 'multiple-choice',
        question: 'How do you prefer to work?',
        options: [
          'Independently',
          'In small teams',
          'In large groups',
          'Leading others',
          'Supporting others',
          'Collaborating with AI systems'
        ],
        required: true
      }
    ]
  },
  {
    id: 'skills',
    title: 'Skills & Abilities',
    description: 'Let us know about your current capabilities',
    questions: [
      {
        id: 'technical_skills',
        type: 'checkbox',
        question: 'Which technical skills do you have or want to develop?',
        options: [
          'Programming/Coding',
          'AI/Machine Learning',
          'Data Analysis',
          'Digital Marketing',
          'Graphic Design',
          'Project Management',
          'Financial Analysis',
          'Research Methods',
          'Writing & Communication',
          'Public Speaking',
          'Problem Solving',
          'Prompt Engineering',
          'Ethics & Governance'
        ],
        required: true
      },
      {
        id: 'ai_familiarity',
        type: 'slider',
        question: 'Rate your familiarity with AI tools and concepts (1-10)',
        min: 1,
        max: 10,
        required: true
      },
      {
        id: 'communication_level',
        type: 'slider',
        question: 'Rate your communication skills (1-10)',
        min: 1,
        max: 10,
        required: true
      },
      {
        id: 'leadership_level',
        type: 'slider',
        question: 'Rate your leadership experience (1-10)',
        min: 1,
        max: 10,
        required: true
      },
      {
        id: 'analytical_level',
        type: 'slider',
        question: 'Rate your analytical thinking (1-10)',
        min: 1,
        max: 10,
        required: true
      }
    ]
  },
  {
    id: 'values',
    title: 'Values & Priorities',
    description: 'What matters most to you in your career?',
    questions: [
      {
        id: 'career_priorities',
        type: 'checkbox',
        question: 'What are your top career priorities?',
        options: [
          'High salary potential',
          'Work-life balance',
          'Job security',
          'Creative freedom',
          'Making a difference',
          'Career advancement',
          'Flexible schedule',
          'Learning opportunities',
          'Recognition & status',
          'Travel opportunities',
          'Working with cutting-edge technology',
          'Solving complex problems'
        ],
        required: true
      },
      {
        id: 'innovation_importance',
        type: 'slider',
        question: 'How important is working with innovative technology? (1-10)',
        min: 1,
        max: 10,
        required: true
      },
      {
        id: 'salary_importance',
        type: 'slider',
        question: 'How important is salary to you? (1-10)',
        min: 1,
        max: 10,
        required: true
      },
      {
        id: 'stability_importance',
        type: 'slider',
        question: 'How important is job stability? (1-10)',
        min: 1,
        max: 10,
        required: true
      }
    ]
  },
  {
    id: 'education',
    title: 'Education & Background',
    description: 'Tell us about your educational journey',
    questions: [
      {
        id: 'education_level',
        type: 'multiple-choice',
        question: 'What is your highest level of education?',
        options: [
          'High School',
          'Some College',
          'Associate Degree',
          'Bachelor\'s Degree',
          'Master\'s Degree',
          'Doctoral Degree',
          'Professional Certification',
          'Self-taught/Online Learning'
        ],
        required: true
      },
      {
        id: 'field_of_study',
        type: 'multiple-choice',
        question: 'What was/is your primary field of study?',
        options: [
          'Computer Science/IT',
          'Artificial Intelligence/Data Science',
          'Business/Economics',
          'Engineering',
          'Liberal Arts/Humanities',
          'Sciences (Biology, Chemistry, Physics)',
          'Mathematics/Statistics',
          'Arts/Design',
          'Psychology/Social Sciences',
          'Healthcare/Medicine',
          'Other/Undecided'
        ],
        required: true
      },
      {
        id: 'learning_preference',
        type: 'multiple-choice',
        question: 'How do you prefer to learn new skills?',
        options: [
          'Online courses',
          'Hands-on practice',
          'Reading books/articles',
          'Video tutorials',
          'Mentorship/coaching',
          'Formal classroom setting',
          'AI-assisted learning',
          'Interactive simulations'
        ],
        required: true
      },
      {
        id: 'continuous_learning',
        type: 'slider',
        question: 'How committed are you to continuous learning? (1-10)',
        min: 1,
        max: 10,
        required: true
      }
    ]
  }
];

// Traditional career matches
export const traditionalCareerMatches: CareerMatch[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Design, develop, and maintain software applications and systems',
    matchPercentage: 95,
    salaryRange: { min: 70000, max: 150000 },
    demandLevel: 'Very High',
    requiredSkills: ['Programming', 'Problem Solving', 'Mathematics', 'System Design'],
    industry: 'Technology',
    workEnvironment: 'Office/Remote',
    education: 'Bachelor\'s Degree preferred',
    growthProjection: '22% growth projected through 2030'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze complex data to help organizations make informed decisions',
    matchPercentage: 87,
    salaryRange: { min: 80000, max: 160000 },
    demandLevel: 'Very High',
    requiredSkills: ['Statistics', 'Programming', 'Machine Learning', 'Data Visualization'],
    industry: 'Technology/Analytics',
    workEnvironment: 'Office/Remote',
    education: 'Bachelor\'s/Master\'s Degree',
    growthProjection: '35% growth projected through 2030'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Lead product development and strategy from concept to launch',
    matchPercentage: 82,
    salaryRange: { min: 85000, max: 170000 },
    demandLevel: 'High',
    requiredSkills: ['Strategy', 'Communication', 'Project Management', 'Market Analysis'],
    industry: 'Technology/Business',
    workEnvironment: 'Office/Hybrid',
    education: 'Bachelor\'s Degree',
    growthProjection: '15% growth projected through 2030'
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    description: 'Create intuitive and engaging user experiences for digital products',
    matchPercentage: 78,
    salaryRange: { min: 60000, max: 120000 },
    demandLevel: 'High',
    requiredSkills: ['Design Thinking', 'Prototyping', 'User Research', 'Visual Design'],
    industry: 'Design/Technology',
    workEnvironment: 'Office/Remote',
    education: 'Bachelor\'s Degree or Portfolio',
    growthProjection: '13% growth projected through 2030'
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketing Manager',
    description: 'Develop and execute online marketing strategies to drive business growth',
    matchPercentage: 75,
    salaryRange: { min: 55000, max: 110000 },
    demandLevel: 'High',
    requiredSkills: ['SEO/SEM', 'Analytics', 'Content Strategy', 'Social Media'],
    industry: 'Marketing/Technology',
    workEnvironment: 'Office/Remote',
    education: 'Bachelor\'s Degree',
    growthProjection: '10% growth projected through 2030'
  },
  {
    id: 'financial-analyst',
    title: 'Financial Analyst',
    description: 'Evaluate financial data and market trends to guide investment decisions',
    matchPercentage: 71,
    salaryRange: { min: 65000, max: 130000 },
    demandLevel: 'Medium',
    requiredSkills: ['Financial Modeling', 'Excel', 'Market Research', 'Risk Analysis'],
    industry: 'Finance',
    workEnvironment: 'Office',
    education: 'Bachelor\'s Degree in Finance/Economics',
    growthProjection: '6% growth projected through 2030'
  }
];

// Combine traditional and AI careers
export const careerMatches: CareerMatch[] = [...aiCareerMatches, ...traditionalCareerMatches];

export const learningResources: Record<string, LearningResource[]> = {
  ...aiLearningResources,
  'software-engineer': [
    {
      title: 'Complete Web Development Bootcamp',
      url: 'https://udemy.com',
      type: 'course',
      provider: 'Udemy',
      duration: '40 hours',
      free: false
    },
    {
      title: 'FreeCodeCamp - Full Stack Development',
      url: 'https://freecodecamp.org',
      type: 'course',
      provider: 'FreeCodeCamp',
      duration: '300+ hours',
      free: true
    },
    {
      title: 'LeetCode - Algorithm Practice',
      url: 'https://leetcode.com',
      type: 'course',
      provider: 'LeetCode',
      free: false
    }
  ],
  'data-scientist': [
    {
      title: 'Python for Data Science',
      url: 'https://coursera.org',
      type: 'course',
      provider: 'Coursera',
      duration: '30 hours',
      free: false
    },
    {
      title: 'Kaggle Learn - Data Science',
      url: 'https://kaggle.com/learn',
      type: 'course',
      provider: 'Kaggle',
      duration: '20 hours',
      free: true
    }
  ]
};

export const careerPaths: Record<string, CareerPathStage[]> = {
  ...aiCareerPaths,
  'software-engineer': [
    {
      title: 'Junior Developer',
      description: 'Entry-level position focusing on learning and basic development tasks',
      duration: '0-2 years',
      skills: ['Basic Programming', 'Version Control', 'Testing', 'Documentation'],
      salaryRange: { min: 50000, max: 80000 }
    },
    {
      title: 'Mid-Level Developer',
      description: 'Independent contributor with specialized skills and project ownership',
      duration: '2-5 years',
      skills: ['Advanced Programming', 'System Design', 'Code Review', 'Mentoring'],
      salaryRange: { min: 80000, max: 120000 }
    },
    {
      title: 'Senior Developer',
      description: 'Technical leader responsible for architecture and team guidance',
      duration: '5-8 years',
      skills: ['Architecture Design', 'Team Leadership', 'Strategic Planning', 'Cross-team Collaboration'],
      certifications: ['AWS Solutions Architect', 'Google Cloud Professional'],
      salaryRange: { min: 120000, max: 180000 }
    },
    {
      title: 'Staff/Principal Engineer',
      description: 'Company-wide technical leader driving engineering excellence',
      duration: '8+ years',
      skills: ['Technical Strategy', 'Engineering Culture', 'Innovation Leadership', 'Business Alignment'],
      salaryRange: { min: 180000, max: 300000 }
    }
  ]
};