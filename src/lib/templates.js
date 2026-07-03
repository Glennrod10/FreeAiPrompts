export const TEMPLATE_CATEGORIES = [
  { id: 'writing', label: 'Writing & Content', icon: '✍' },
  { id: 'coding', label: 'Coding & Development', icon: '>' },
  { id: 'marketing', label: 'Marketing & Sales', icon: '📣' },
  { id: 'image', label: 'Image Generation', icon: '🎨' },
  { id: 'business', label: 'Business & Strategy', icon: '📊' },
  { id: 'research', label: 'Research & Analysis', icon: '🔬' },
  { id: 'education', label: 'Education & Learning', icon: '📚' },
  { id: 'social', label: 'Social Media', icon: '📱' },
];

export const TEMPLATES = [
  // ── Writing & Content ──
  {
    id: 'blog-post',
    category: 'writing',
    title: 'Blog Post Writer',
    description: 'Structure a comprehensive blog post from outline to conclusion',
    fields: [
      { key: 'topic', label: 'Topic', type: 'text' },
      { key: 'audience', label: 'Target Audience', type: 'text' },
      { key: 'tone', label: 'Tone', type: 'select', options: ['Professional', 'Casual', 'Friendly', 'Formal', 'Humorous', 'Inspirational', 'Authoritative'] },
      { key: 'wordCount', label: 'Target Word Count', type: 'text' },
    ],
  },
  {
    id: 'email-draft',
    category: 'writing',
    title: 'Email Composer',
    description: 'Draft professional emails for any context',
    fields: [
      { key: 'recipient', label: 'Recipient / Context', type: 'text' },
      { key: 'purpose', label: 'Purpose of Email', type: 'text' },
      { key: 'keyPoints', label: 'Key Points to Include', type: 'textarea' },
      { key: 'tone', label: 'Tone', type: 'select', options: ['Professional', 'Casual', 'Friendly', 'Formal', 'Humorous', 'Inspirational', 'Authoritative'] },
    ],
  },
  {
    id: 'copywriting',
    category: 'writing',
    title: 'Copywriting Framework',
    description: 'Generate persuasive copy using AIDA or PAS frameworks',
    fields: [
      { key: 'product', label: 'Product / Service', type: 'text' },
      { key: 'benefit', label: 'Core Benefit', type: 'text' },
      { key: 'audience', label: 'Target Audience', type: 'text' },
      { key: 'cta', label: 'Call to Action', type: 'text' },
    ],
  },
  {
    id: 'newsletter',
    category: 'writing',
    title: 'Newsletter Edition',
    description: 'Create engaging newsletter content with sections',
    fields: [
      { key: 'topic', label: 'Main Topic', type: 'text' },
      { key: 'audience', label: 'Audience', type: 'text' },
      { key: 'sections', label: 'Sections to Include', type: 'textarea' },
      { key: 'cta', label: 'Call to Action', type: 'text' },
    ],
  },

  // ── Coding & Development ──
  {
    id: 'code-review',
    category: 'coding',
    title: 'Code Review Request',
    description: 'Request a thorough code review with specific focus areas',
    fields: [
      { key: 'language', label: 'Language / Stack', type: 'text' },
      { key: 'codeContext', label: 'What the Code Does', type: 'textarea' },
      { key: 'focus', label: 'Focus Areas (security, perf, style)', type: 'text' },
      { key: 'constraints', label: 'Constraints / Standards', type: 'text' },
    ],
  },
  {
    id: 'debug-assist',
    category: 'coding',
    title: 'Debugging Assistant',
    description: 'Get help diagnosing and fixing bugs',
    fields: [
      { key: 'language', label: 'Language / Framework', type: 'text' },
      { key: 'symptom', label: 'Bug Symptom', type: 'textarea' },
      { key: 'tried', label: 'What You Tried', type: 'textarea' },
      { key: 'code', label: 'Relevant Code Snippet', type: 'textarea' },
    ],
  },
  {
    id: 'api-design',
    category: 'coding',
    title: 'API Design Spec',
    description: 'Design REST or GraphQL API endpoints',
    fields: [
      { key: 'purpose', label: 'API Purpose', type: 'text' },
      { key: 'resources', label: 'Key Resources', type: 'textarea' },
      { key: 'tech', label: 'Tech Stack', type: 'text' },
      { key: 'patterns', label: 'Pattern', type: 'select', options: ['REST', 'GraphQL', 'gRPC', 'WebSocket'] },
    ],
  },
  {
    id: 'architecture',
    category: 'coding',
    title: 'System Architecture',
    description: 'Design system architecture with trade-offs',
    fields: [
      { key: 'goal', label: 'System Goal', type: 'textarea' },
      { key: 'constraints', label: 'Constraints (scale, budget)', type: 'textarea' },
      { key: 'stack', label: 'Preferred Stack', type: 'text' },
      { key: 'concerns', label: 'Key Concerns', type: 'text' },
    ],
  },

  // ── Marketing & Sales ──
  {
    id: 'ad-copy',
    category: 'marketing',
    title: 'Ad Copy Generator',
    description: 'Generate high-converting ad copy for any platform',
    fields: [
      { key: 'product', label: 'Product / Offer', type: 'text' },
      { key: 'platform', label: 'Platform', type: 'select', options: ['Google', 'Facebook', 'LinkedIn', 'Instagram', 'Twitter/X', 'TikTok'] },
      { key: 'audience', label: 'Target Audience', type: 'text' },
      { key: 'angle', label: 'Key Angle / Hook', type: 'text' },
    ],
  },
  {
    id: 'seo-content',
    category: 'marketing',
    title: 'SEO Content Brief',
    description: 'Create an SEO-optimized content brief',
    fields: [
      { key: 'keyword', label: 'Target Keyword', type: 'text' },
      { key: 'intent', label: 'Search Intent', type: 'select', options: ['Informational', 'Navigational', 'Transactional', 'Commercial'] },
      { key: 'competitors', label: 'Top Competitors', type: 'textarea' },
      { key: 'angle', label: 'Unique Angle', type: 'text' },
    ],
  },
  {
    id: 'landing-page',
    category: 'marketing',
    title: 'Landing Page Copy',
    description: 'Structure high-converting landing page content',
    fields: [
      { key: 'offer', label: 'Core Offer', type: 'text' },
      { key: 'audience', label: 'Target Audience', type: 'text' },
      { key: 'usp', label: 'Unique Selling Proposition', type: 'textarea' },
      { key: 'cta', label: 'Primary CTA', type: 'text' },
    ],
  },

  // ── Image Generation ──
  {
    id: 'midjourney-prompt',
    category: 'image',
    title: 'Midjourney Image Prompt',
    description: 'Craft detailed Midjourney image generation prompts',
    fields: [
      { key: 'subject', label: 'Subject Description', type: 'textarea', placeholder: 'e.g. A vintage sports car driving through a neon-lit city at night' },
      { key: 'style', label: 'Art Style', type: 'text', placeholder: 'e.g. cinematic, oil painting, anime, cyberpunk, watercolor' },
      { key: 'mood', label: 'Mood / Lighting', type: 'select', options: ['Cinematic', 'Dramatic', 'Energetic', 'Moody', 'Serene', 'Dark', 'Bright', 'Mystical', 'Futuristic', 'Dreamy'] },
      { key: 'colors', label: 'Color Palette (optional)', type: 'text', placeholder: 'e.g. warm amber, cool blue, monochrome, pastel' },
    ],
  },
  {
    id: 'dalle-prompt',
    category: 'image',
    title: 'DALL·E Image Prompt',
    description: 'Generate detailed DALL·E prompts with style cues',
    fields: [
      { key: 'scene', label: 'Scene Description', type: 'textarea' },
      { key: 'style', label: 'Art Style', type: 'text' },
      { key: 'colors', label: 'Color Palette', type: 'text' },
      { key: 'mood', label: 'Mood / Atmosphere', type: 'select', options: ['Calm', 'Dramatic', 'Energetic', 'Moody', 'Serene', 'Dark', 'Bright', 'Mystical'] },
    ],
  },

  // ── Business & Strategy ──
  {
    id: 'swot-analysis',
    category: 'business',
    title: 'SWOT Analysis',
    description: 'Conduct a thorough SWOT analysis for any business',
    fields: [
      { key: 'business', label: 'Business / Project', type: 'text' },
      { key: 'market', label: 'Market Context', type: 'textarea' },
      { key: 'focus', label: 'Focus Area', type: 'text' },
    ],
  },
  {
    id: 'strategy-plan',
    category: 'business',
    title: 'Strategic Plan Outline',
    description: 'Build a comprehensive strategic plan',
    fields: [
      { key: 'vision', label: 'Vision Statement', type: 'text' },
      { key: 'goals', label: 'Key Goals', type: 'textarea' },
      { key: 'resources', label: 'Available Resources', type: 'textarea' },
      { key: 'timeline', label: 'Timeline', type: 'text' },
    ],
  },

  // ── Research & Analysis ──
  {
    id: 'research-paper',
    category: 'research',
    title: 'Research Paper Outline',
    description: 'Structure an academic research paper',
    fields: [
      { key: 'topic', label: 'Research Topic', type: 'text' },
      { key: 'thesis', label: 'Thesis Statement', type: 'textarea' },
      { key: 'methodology', label: 'Methodology', type: 'text' },
      { key: 'sources', label: 'Key Sources', type: 'textarea' },
    ],
  },
  {
    id: 'data-analysis',
    category: 'research',
    title: 'Data Analysis Brief',
    description: 'Define analysis approach for a dataset',
    fields: [
      { key: 'dataset', label: 'Dataset Description', type: 'textarea' },
      { key: 'questions', label: 'Key Questions', type: 'textarea' },
      { key: 'techniques', label: 'Analysis Techniques', type: 'text' },
      { key: 'output', label: 'Desired Output', type: 'text' },
    ],
  },

  // ── Education & Learning ──
  {
    id: 'lesson-plan',
    category: 'education',
    title: 'Lesson Plan Creator',
    description: 'Design structured lesson plans for any topic',
    fields: [
      { key: 'topic', label: 'Topic', type: 'text' },
      { key: 'level', label: 'Student Level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
      { key: 'duration', label: 'Duration', type: 'text' },
      { key: 'objectives', label: 'Learning Objectives', type: 'textarea' },
    ],
  },
  {
    id: 'study-guide',
    category: 'education',
    title: 'Study Guide Generator',
    description: 'Create comprehensive study guides',
    fields: [
      { key: 'subject', label: 'Subject', type: 'text' },
      { key: 'topics', label: 'Topics to Cover', type: 'textarea' },
      { key: 'format', label: 'Format', type: 'select', options: ['Outline', 'Flashcards', 'Summary', 'Mind Map', 'Cheat Sheet'] },
      { key: 'depth', label: 'Depth Level', type: 'text' },
    ],
  },

  // ── Social Media ──
  {
    id: 'twitter-thread',
    category: 'social',
    title: 'Twitter/X Thread',
    description: 'Structure an engaging Twitter thread',
    fields: [
      { key: 'topic', label: 'Thread Topic', type: 'text' },
      { key: 'hook', label: 'Hook Sentence', type: 'text' },
      { key: 'points', label: 'Key Points', type: 'textarea' },
      { key: 'cta', label: 'Ending CTA', type: 'text' },
    ],
  },
  {
    id: 'linkedin-post',
    category: 'social',
    title: 'LinkedIn Post',
    description: 'Create professional LinkedIn content',
    fields: [
      { key: 'topic', label: 'Topic / Insight', type: 'text' },
      { key: 'angle', label: 'Personal Angle', type: 'textarea' },
      { key: 'audience', label: 'Target Audience', type: 'text' },
      { key: 'cta', label: 'Engagement CTA', type: 'text' },
    ],
  },
];

export function getTemplatesByCategory(categoryId) {
  return TEMPLATES.filter(t => t.category === categoryId);
}

export function getTemplateById(id) {
  return TEMPLATES.find(t => t.id === id);
}
