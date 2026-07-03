export const FRAMEWORKS = {
  COSTAR: 'CO-STAR',
  RISEN: 'RISEN',
  CRAFT: 'CRAFT',
  ORACLE: 'ORACLE',
  RACE: 'RACE',
  CARE: 'CARE',
  APE: 'APE',
  CREATE: 'CREATE',
  TAG: 'TAG',
  CREO: 'CREO',
  RISE: 'RISE',
  PAIN: 'PAIN',
  COAST: 'COAST',
  FREE: 'Freeform',
};

const MODELS = [
  { id: 'chatgpt', label: 'ChatGPT', desc: 'Optimized for GPT-4o' },
  { id: 'claude', label: 'Claude', desc: 'Optimized for Claude 4' },
  { id: 'gemini', label: 'Gemini', desc: 'Optimized for Gemini 2.5' },
  { id: 'midjourney', label: 'Midjourney', desc: 'Image generation prompts' },
  { id: 'grok', label: 'Grok', desc: 'Optimized for Grok 3' },
  { id: 'perplexity', label: 'Perplexity', desc: 'Research-optimized' },
];

const MODEL_PREFIXES = {
  chatgpt: '',
  claude: '',
  gemini: '',
  midjourney: '/imagine prompt: ',
  grok: '',
  perplexity: '',
};

const MODEL_SUFFIXES = {
  chatgpt: '',
  claude: '\n\nPlease provide a thorough, well-structured response.',
  gemini: '',
  midjourney: ' --ar 16:9 --v 6',
  grok: '\n\nProvide a concise, direct answer with sources where relevant.',
  perplexity: '\n\nCite sources for any factual claims.',
};

function applyModel(text, modelId) {
  const prefix = MODEL_PREFIXES[modelId] || '';
  const suffix = MODEL_SUFFIXES[modelId] || '';
  return prefix + text + suffix;
}

export const FRAMEWORK_META = {
  [FRAMEWORKS.COSTAR]: {
    label: 'CO-STAR',
    full: 'Context, Objective, Style, Tone, Audience, Response',
    description: 'Best for content creation and marketing copy',
    fields: [
      { key: 'context', label: 'Context', placeholder: 'Background information and situation' },
      { key: 'objective', label: 'Objective', placeholder: 'What you want the AI to accomplish' },
      { key: 'style', label: 'Style', placeholder: 'Writing style (e.g. professional, casual)' },
      { key: 'tone', label: 'Tone', placeholder: 'Emotional tone (e.g. persuasive, neutral)' },
      { key: 'audience', label: 'Audience', placeholder: 'Target audience description' },
      { key: 'response', label: 'Response', placeholder: 'Desired output format' },
    ],
  },
  [FRAMEWORKS.RISEN]: {
    label: 'RISEN',
    full: 'Role, Instructions, Steps, End Goal, Narrowing',
    description: 'Best for structured reports and multi-step tasks',
    fields: [
      { key: 'role', label: 'Role', placeholder: 'Expert persona for the AI' },
      { key: 'instructions', label: 'Instructions', placeholder: 'Core task instructions' },
      { key: 'steps', label: 'Steps', placeholder: 'Step-by-step process to follow' },
      { key: 'endgoal', label: 'End Goal', placeholder: 'Desired final outcome' },
      { key: 'narrowing', label: 'Narrowing', placeholder: 'Constraints and boundaries' },
    ],
  },
  [FRAMEWORKS.CRAFT]: {
    label: 'CRAFT',
    full: 'Context, Role, Action, Format, Target',
    description: 'Best for short-form, repeatable content at scale',
    fields: [
      { key: 'context', label: 'Context', placeholder: 'Situation or background' },
      { key: 'role', label: 'Role', placeholder: 'AI persona' },
      { key: 'action', label: 'Action', placeholder: 'Specific action to take' },
      { key: 'format', label: 'Format', placeholder: 'Output format' },
      { key: 'target', label: 'Target', placeholder: 'Target audience or goal' },
    ],
  },
  [FRAMEWORKS.ORACLE]: {
    label: 'ORACLE',
    full: 'Objective, Reasoning, Application, Calculation, Logic, Evaluation',
    description: 'Best for analytical and problem-solving tasks',
    fields: [
      { key: 'objective', label: 'Objective', placeholder: 'What needs to be solved' },
      { key: 'reasoning', label: 'Reasoning', placeholder: 'Step-by-step reasoning approach' },
      { key: 'application', label: 'Application', placeholder: 'How to apply the solution' },
      { key: 'calculation', label: 'Calculation', placeholder: 'Data or calculations needed' },
      { key: 'logic', label: 'Logic', placeholder: 'Logical rules or constraints' },
      { key: 'evaluation', label: 'Evaluation', placeholder: 'How to verify correctness' },
    ],
  },
  [FRAMEWORKS.RACE]: {
    label: 'RACE',
    full: 'Role, Action, Context, Expectation',
    description: 'Best for task delegation and project briefs',
    fields: [
      { key: 'role', label: 'Role', placeholder: 'Expert persona' },
      { key: 'action', label: 'Action', placeholder: 'What to do' },
      { key: 'context', label: 'Context', placeholder: 'Relevant background' },
      { key: 'expectation', label: 'Expectation', placeholder: 'Quality bar and deliverables' },
    ],
  },
  [FRAMEWORKS.CARE]: {
    label: 'CARE',
    full: 'Context, Action, Result, Example',
    description: 'Best for tasks needing a worked example',
    fields: [
      { key: 'context', label: 'Context', placeholder: 'Background and situation' },
      { key: 'action', label: 'Action', placeholder: 'Action to perform' },
      { key: 'result', label: 'Result', placeholder: 'Desired outcome' },
      { key: 'example', label: 'Example', placeholder: 'Reference example' },
    ],
  },
  [FRAMEWORKS.APE]: {
    label: 'APE',
    full: 'Action, Purpose, Expectation',
    description: 'Best for concise, goal-oriented instructions',
    fields: [
      { key: 'action', label: 'Action', placeholder: 'What to do' },
      { key: 'purpose', label: 'Purpose', placeholder: 'Why this matters' },
      { key: 'expectation', label: 'Expectation', placeholder: 'What success looks like' },
    ],
  },
  [FRAMEWORKS.CREATE]: {
    label: 'CREATE',
    full: 'Context, Reference, Examples, Action, Testing, Evaluation',
    description: 'Best for creative work needing inspiration',
    fields: [
      { key: 'context', label: 'Context', placeholder: 'Project background' },
      { key: 'reference', label: 'Reference', placeholder: 'Reference materials or sources' },
      { key: 'examples', label: 'Examples', placeholder: 'Examples of desired output' },
      { key: 'action', label: 'Action', placeholder: 'What to create' },
      { key: 'testing', label: 'Testing', placeholder: 'How to test the output' },
      { key: 'evaluation', label: 'Evaluation', placeholder: 'Success criteria' },
    ],
  },
  [FRAMEWORKS.TAG]: {
    label: 'TAG',
    full: 'Task, Action, Goal',
    description: 'Best for quick, simple task execution',
    fields: [
      { key: 'task', label: 'Task', placeholder: 'What needs to be done' },
      { key: 'action', label: 'Action', placeholder: 'How to approach it' },
      { key: 'goal', label: 'Goal', placeholder: 'What success looks like' },
    ],
  },
  [FRAMEWORKS.CREO]: {
    label: 'CREO',
    full: 'Context, Role, Expectation, Output',
    description: 'Best for output-specific content generation',
    fields: [
      { key: 'context', label: 'Context', placeholder: 'Situation and background' },
      { key: 'role', label: 'Role', placeholder: 'AI persona' },
      { key: 'expectation', label: 'Expectation', placeholder: 'Quality and depth expected' },
      { key: 'output', label: 'Output', placeholder: 'Exact output format' },
    ],
  },
  [FRAMEWORKS.RISE]: {
    label: 'RISE',
    full: 'Role, Input, Steps, Expectation',
    description: 'Best for process-oriented tasks',
    fields: [
      { key: 'role', label: 'Role', placeholder: 'Expert persona for the AI' },
      { key: 'input', label: 'Input', placeholder: 'Input data or materials' },
      { key: 'steps', label: 'Steps', placeholder: 'Step-by-step process' },
      { key: 'expectation', label: 'Expectation', placeholder: 'Expected outcome' },
    ],
  },
  [FRAMEWORKS.PAIN]: {
    label: 'PAIN',
    full: 'Problem, Audience, Implications, Need',
    description: 'Best for problem-diagnosis and consulting tasks',
    fields: [
      { key: 'problem', label: 'Problem', placeholder: 'The core problem' },
      { key: 'audience', label: 'Audience', placeholder: 'Who is affected' },
      { key: 'implications', label: 'Implications', placeholder: 'Consequences if unresolved' },
      { key: 'need', label: 'Need', placeholder: 'What solution requires' },
    ],
  },
  [FRAMEWORKS.COAST]: {
    label: 'COAST',
    full: 'Context, Objective, Audience, Style, Tone',
    description: 'Best for brand-aligned content creation',
    fields: [
      { key: 'context', label: 'Context', placeholder: 'Project or campaign context' },
      { key: 'objective', label: 'Objective', placeholder: 'Content goal' },
      { key: 'audience', label: 'Audience', placeholder: 'Target audience' },
      { key: 'style', label: 'Style', placeholder: 'Writing style' },
      { key: 'tone', label: 'Tone', placeholder: 'Emotional tone' },
    ],
  },
  [FRAMEWORKS.FREE]: {
    label: 'Freeform',
    full: 'Describe your prompt freely without a rigid framework',
    description: 'Maximum flexibility for any use case',
    fields: [
      { key: 'prompt', label: 'Your Prompt', placeholder: 'Write your prompt in plain language...' },
    ],
  },
};

export function compileFramework(framework, values, modelId) {
  const model = modelId || 'chatgpt';
  switch (framework) {
    case FRAMEWORKS.COSTAR:
      return applyModel(compileCOSTAR(values), model);
    case FRAMEWORKS.RISEN:
      return applyModel(compileRISEN(values), model);
    case FRAMEWORKS.CRAFT:
      return applyModel(compileCRAFT(values), model);
    case FRAMEWORKS.ORACLE:
      return applyModel(compileORACLE(values), model);
    case FRAMEWORKS.RACE:
      return applyModel(compileRACE(values), model);
    case FRAMEWORKS.CARE:
      return applyModel(compileCARE(values), model);
    case FRAMEWORKS.APE:
      return applyModel(compileAPE(values), model);
    case FRAMEWORKS.CREATE:
      return applyModel(compileCREATE(values), model);
    case FRAMEWORKS.TAG:
      return applyModel(compileTAG(values), model);
    case FRAMEWORKS.CREO:
      return applyModel(compileCREO(values), model);
    case FRAMEWORKS.RISE:
      return applyModel(compileRISE(values), model);
    case FRAMEWORKS.PAIN:
      return applyModel(compilePAIN(values), model);
    case FRAMEWORKS.COAST:
      return applyModel(compileCOAST(values), model);
    case FRAMEWORKS.FREE:
    default:
      return applyModel(values.prompt || '', model);
  }
}

function compileCOSTAR(v) {
  const parts = [];
  if (v.context) parts.push(`## Context\n${v.context}`);
  if (v.objective) parts.push(`## Objective\n${v.objective}`);
  if (v.style) parts.push(`## Style\n${v.style}`);
  if (v.tone) parts.push(`## Tone\n${v.tone}`);
  if (v.audience) parts.push(`## Audience\n${v.audience}`);
  if (v.response) parts.push(`## Response Format\n${v.response}`);
  return parts.join('\n\n');
}

function compileRISEN(v) {
  const parts = [];
  if (v.role) parts.push(`## Role\nYou are an expert ${v.role}.`);
  if (v.instructions) parts.push(`## Instructions\n${v.instructions}`);
  if (v.steps) parts.push(`## Steps\nFollow these steps:\n${v.steps}`);
  if (v.endgoal) parts.push(`## End Goal\n${v.endgoal}`);
  if (v.narrowing) parts.push(`## Constraints\n${v.narrowing}`);
  return parts.join('\n\n');
}

function compileCRAFT(v) {
  const parts = [];
  if (v.context) parts.push(`Context: ${v.context}`);
  if (v.role) parts.push(`Role: ${v.role}`);
  if (v.action) parts.push(`Action: ${v.action}`);
  if (v.format) parts.push(`Format: ${v.format}`);
  if (v.target) parts.push(`Target: ${v.target}`);
  return parts.join('\n');
}

function compileORACLE(v) {
  const parts = [];
  if (v.objective) parts.push(`## Objective\n${v.objective}`);
  if (v.reasoning) parts.push(`## Reasoning\nUse this reasoning approach:\n${v.reasoning}`);
  if (v.application) parts.push(`## Application\nApply the solution as follows:\n${v.application}`);
  if (v.calculation) parts.push(`## Data & Calculations\n${v.calculation}`);
  if (v.logic) parts.push(`## Logical Constraints\n${v.logic}`);
  if (v.evaluation) parts.push(`## Evaluation Criteria\n${v.evaluation}`);
  return parts.join('\n\n');
}

function compileRACE(v) {
  const parts = [];
  if (v.role) parts.push(`## Role\nYou are acting as ${v.role}.`);
  if (v.context) parts.push(`## Context\n${v.context}`);
  if (v.action) parts.push(`## Action Required\n${v.action}`);
  if (v.expectation) parts.push(`## Expected Quality\n${v.expectation}`);
  return parts.join('\n\n');
}

function compileCARE(v) {
  const parts = [];
  if (v.context) parts.push(`## Context\n${v.context}`);
  if (v.action) parts.push(`## Action\n${v.action}`);
  if (v.result) parts.push(`## Desired Result\n${v.result}`);
  if (v.example) parts.push(`## Reference Example\n${v.example}`);
  return parts.join('\n\n');
}

function compileAPE(v) {
  const parts = [];
  if (v.action) parts.push(`## Action\n${v.action}`);
  if (v.purpose) parts.push(`## Purpose\n${v.purpose}`);
  if (v.expectation) parts.push(`## Expected Outcome\n${v.expectation}`);
  return parts.join('\n\n');
}

function compileCREATE(v) {
  const parts = [];
  if (v.context) parts.push(`## Context\n${v.context}`);
  if (v.reference) parts.push(`## Reference Materials\n${v.reference}`);
  if (v.examples) parts.push(`## Examples of Desired Output\n${v.examples}`);
  if (v.action) parts.push(`## Task\n${v.action}`);
  if (v.testing) parts.push(`## Testing Criteria\n${v.testing}`);
  if (v.evaluation) parts.push(`## Evaluation\n${v.evaluation}`);
  return parts.join('\n\n');
}

function compileTAG(v) {
  const parts = [];
  if (v.task) parts.push(`## Task\n${v.task}`);
  if (v.action) parts.push(`## Approach\n${v.action}`);
  if (v.goal) parts.push(`## Goal\n${v.goal}`);
  return parts.join('\n\n');
}

function compileCREO(v) {
  const parts = [];
  if (v.context) parts.push(`## Context\n${v.context}`);
  if (v.role) parts.push(`## Role\nAct as ${v.role}.`);
  if (v.expectation) parts.push(`## Expectations\n${v.expectation}`);
  if (v.output) parts.push(`## Output Format\n${v.output}`);
  return parts.join('\n\n');
}

function compileRISE(v) {
  const parts = [];
  if (v.role) parts.push(`## Role\nYou are ${v.role}.`);
  if (v.input) parts.push(`## Input\n${v.input}`);
  if (v.steps) parts.push(`## Process\nFollow these steps:\n${v.steps}`);
  if (v.expectation) parts.push(`## Expected Outcome\n${v.expectation}`);
  return parts.join('\n\n');
}

function compilePAIN(v) {
  const parts = [];
  if (v.problem) parts.push(`## Problem Statement\n${v.problem}`);
  if (v.audience) parts.push(`## Affected Audience\n${v.audience}`);
  if (v.implications) parts.push(`## Implications\nIf this is not resolved:\n${v.implications}`);
  if (v.need) parts.push(`## Required Solution\n${v.need}`);
  return parts.join('\n\n');
}

function compileCOAST(v) {
  const parts = [];
  if (v.context) parts.push(`## Context\n${v.context}`);
  if (v.objective) parts.push(`## Objective\n${v.objective}`);
  if (v.audience) parts.push(`## Audience\n${v.audience}`);
  if (v.style) parts.push(`## Style\n${v.style}`);
  if (v.tone) parts.push(`## Tone\n${v.tone}`);
  return parts.join('\n\n');
}

export function getModels() {
  return MODELS;
}
