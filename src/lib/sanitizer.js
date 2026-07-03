export function stripBackticks(text) {
  return text
    .replace(/```[\w]*\n?/g, '')
    .replace(/`{3,}/g, '')
    .replace(/`/g, '')
    .trim();
}

export function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/~~(.*?)~~/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/>\s+/gm, '')
    .replace(/[-*+]\s+/gm, '')
    .replace(/^\d+[.)]\s+/gm, '')
    .trim();
}

export function fixSmartQuotes(text) {
  return text
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '--')
    .replace(/\u2026/g, '...')
    .replace(/\u00A0/g, ' ')
    .trim();
}

export function stripUnicode(text) {
  return text
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/[\u2060\u2061\u2062\u2063\u2064]/g, '')
    .replace(/\u00AD/g, '')
    .replace(/[\u034F\u061C\u202A-\u202E\u2066-\u2069]/g, '')
    .trim();
}

const FLUFF_PATTERNS = [
  { pattern: /\bSure,? here is\b.*?[:.]/gi, replacement: '' },
  { pattern: /\bCertainly!?\b/gi, replacement: '' },
  { pattern: /\bOf course!?\b/gi, replacement: '' },
  { pattern: /\bHere(?:'s| is) (?:the |a |an )?(?:revised |updated |complete |full )?(?:text|version|response|answer|code|content|output|summary|list|guide|tutorial|example|explanation|breakdown|analysis|overview|walkthrough)\b.*?[:.]/gi, replacement: '' },
  { pattern: /\bI(?:'d| would) be happy to\b.*?[:.]/gi, replacement: '' },
  { pattern: /\b(?:Let me|I will|I'll) (?:provide|give you|share|write|create|generate|show you|help you with|explain|break down|walk you through)\b.*?[:.]/gi, replacement: '' },
  { pattern: /\bAs an AI\b.*?[,;]/gi, replacement: '' },
  { pattern: /\bI (?:can|cannot|do not|don't|am not|am|was) (?:provide|assist|help|generate|create|write|offer|suggest|recommend|access|browse|search)\b.*?[:.]/gi, replacement: '' },
  { pattern: /\b(?:Please |Feel free to |Don't hesitate to |You can |You may )(?:let me know|reach out|ask|contact|review|check|modify|adjust|customize|adapt|tailor)\b.*?[:.]/gi, replacement: '' },
  { pattern: /\b(?:I hope|Hopefully) (?:this|that|it) (?:helps|is|meets|answers|addresses|provides|clarifies|resolves)\b.*?[:.]/gi, replacement: '' },
  { pattern: /\bLet's (?:get started|begin|dive in|break it down|explore|look at|start)\b.*?[:.]/gi, replacement: '' },
  { pattern: /\b(?:In summary|To summarize|In conclusion|To conclude|All in all|Overall|In short|In brief|Essentially|Ultimately|After careful (?:consideration|analysis|review))\b.*?[:.]/gi, replacement: '' },
  { pattern: /\bHere you go[:.]/gi, replacement: '' },
  { pattern: /\bThere you (?:go|have it)[:.]/gi, replacement: '' },
  { pattern: /\bAbsolutely!?\b/gi, replacement: '' },
  { pattern: /\b(?:Great |Excellent |Perfect |Good |Awesome )?(?:question|point|observation|idea|suggestion|request|topic)[!.]/gi, replacement: '' },
  { pattern: /\bI understand (?:that |how |why |what |your |the )/gi, replacement: '' },
  { pattern: /\bThat('s| is) a (?:great |good |fair |valid |really good |really great |fantastic |interesting |excellent )?(?:question|point|observation|idea|suggestion|request|topic|concern|approach)[!.]/gi, replacement: '' },
];

export function removeFluff(text) {
  let result = text;
  for (const { pattern, replacement } of FLUFF_PATTERNS) {
    result = result.replace(pattern, replacement);
  }
  result = result.replace(/\n{3,}/g, '\n\n');
  result = result.replace(/^[:\s]+/gm, '');
  result = result.replace(/[:\s]+$/gm, '');
  return result.trim();
}

export function collapseSpaces(text) {
  return text
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\s*[\r\n]/gm, '\n')
    .trim();
}
