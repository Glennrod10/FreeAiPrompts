const CRITERIA = [
  {
    id: 'role',
    label: 'Role Assignment',
    weight: 15,
    description: 'Assigns a specific expert persona to guide the AI',
    check: (text) => {
      const patterns = [
        /\b(?:act as|you are|you're|role|persona|expert|specialist|professional)\b/i,
        /\byou are an?\s+(?:expert\s+)?\w+/i,
        /\bacting\s+as\b/i,
      ];
      return patterns.some(p => p.test(text));
    },
  },
  {
    id: 'objective',
    label: 'Clear Objective',
    weight: 20,
    description: 'Defines a specific, measurable goal for the AI',
    check: (text) => {
      const patterns = [
        /\b(?:goal|objective|purpose|aim|task|your (?:job|task|mission) is)\b/i,
        /\byou (?:will|should|must|need to)\b/i,
        /\b(?:create|generate|write|analyze|design|develop|build|produce|draft|compose)\b/i,
      ];
      return patterns.some(p => p.test(text));
    },
  },
  {
    id: 'context',
    label: 'Background Context',
    weight: 15,
    description: 'Provides relevant background information',
    check: (text) => {
      const patterns = [
        /\b(?:context|background|situation|scenario|environment|setting)\b/i,
        /\bconsider(?:ing)?\s+that\b/i,
        /\bgiven\s+that\b/i,
        /\bworking\s+(?:with|on|in)\b/i,
        /\busing\s+(?:the\s+)?(?:following|these)\b/i,
      ];
      return patterns.some(p => p.test(text));
    },
  },
  {
    id: 'constraints',
    label: 'Constraints & Rules',
    weight: 15,
    description: 'Sets clear boundaries and limitations',
    check: (text) => {
      const patterns = [
        /\b(?:constraint|limit|restriction|boundary|rule|guideline|requirement)\b/i,
        /\bdo (?:not|n't)\b/i,
        /\bavoid\b/i,
        /\bmust (?:not|avoid|never)\b/i,
        /\b(?:only|exclusively)\b/i,
        /\b(?:max|minimum|at most|at least)\b/i,
        /\b(?:no\s+\w+\s+(?:allowed|permitted|acceptable))\b/i,
      ];
      return patterns.some(p => p.test(text));
    },
  },
  {
    id: 'format',
    label: 'Output Format',
    weight: 15,
    description: 'Specifies the desired output structure',
    check: (text) => {
      const patterns = [
        /\b(?:format|output|structure|layout|template)\b/i,
        /\b(?:return|output|respond|reply)\s+(?:in|as|with|using)\b/i,
        /\b(?:json|markdown|table|list|bullets?|paragraph|summary|report)\b/i,
        /\b(?:format|structure)\s+(?:your|the)\s+(?:response|output|answer|reply)\b/i,
      ];
      return patterns.some(p => p.test(text));
    },
  },
  {
    id: 'specificity',
    label: 'Specificity & Details',
    weight: 10,
    description: 'Includes concrete details rather than vague language',
    check: (text) => {
      const vagueWords = [
        /\b(good|nice|better|best|great|amazing|awesome|fantastic)\b/i,
        /\b(something|anything|stuff|things|various|multiple)\b/i,
      ];
      const specificPatterns = [
        /(?:specifically|exactly|precisely|particularly)/i,
        /\b\d+%/,
        /\b\d+\s*(?:pages?|words?|items?|paragraphs?|sentences?)\b/,
        /\b(?:e\.g\.|i\.e\.|for example|such as|including)\b/,
      ];
      const hasVague = vagueWords.some(p => p.test(text));
      const hasSpecific = specificPatterns.some(p => p.test(text));
      if (hasSpecific) return true;
      if (!hasVague && text.length > 100) return true;
      return false;
    },
  },
  {
    id: 'tone',
    label: 'Tone & Style',
    weight: 10,
    description: 'Defines the desired tone, style, or voice',
    check: (text) => {
      const patterns = [
        /\b(?:tone|style|voice|vibe|register|mood|attitude)\b/i,
        /\b(?:professional|casual|formal|informal|conversational|academic|technical|creative)\b/i,
        /\b(?:persuasive|authoritative|friendly|warm|neutral|enthusiastic|empathetic)\b/i,
        /\bin\s+(?:a|an)\s+\w+\s+(?:tone|style|manner|way)\b/i,
      ];
      return patterns.some(p => p.test(text));
    },
  },
];

export function analyzePrompt(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return {
      score: 0,
      maxScore: 100,
      criteria: CRITERIA.map(c => ({ ...c, passed: false })),
      feedback: 'Enter a prompt to analyze.',
      strengths: [],
      improvements: [],
      category: 'empty',
    };
  }

  const results = CRITERIA.map(c => ({
    ...c,
    passed: c.check(trimmed),
  }));

  const totalWeight = results.reduce((sum, r) => sum + r.weight, 0);
  const earnedWeight = results.filter(r => r.passed).reduce((sum, r) => sum + r.weight, 0);
  const score = Math.round((earnedWeight / totalWeight) * 100);

  const strengths = results.filter(r => r.passed).map(r => r.label);
  const improvements = results.filter(r => !r.passed).map(r => r.label);

  let feedback;
  let category;
  if (score >= 85) {
    feedback = 'Well-structured prompt. Minor refinements could polish it further.';
    category = 'excellent';
  } else if (score >= 65) {
    feedback = 'Good foundation. Adding missing elements will significantly improve output quality.';
    category = 'good';
  } else if (score >= 40) {
    feedback = 'Needs structural improvements. Several key prompt elements are missing.';
    category = 'fair';
  } else {
    feedback = 'Your prompt lacks most structural elements. Use the builder to add role, context, and constraints.';
    category = 'weak';
  }

  return {
    score,
    maxScore: 100,
    criteria: results,
    feedback,
    strengths,
    improvements,
    category,
    length: trimmed.length,
    wordCount: trimmed.split(/\s+/).length,
  };
}
