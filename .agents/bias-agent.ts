import type { AgentDefinition } from './types/agent-definition'

// The BIAS protocol will be loaded at runtime
const biasProtocol = 'The full BIAS protocol will be loaded at runtime from AGENTS.md'

const definition: AgentDefinition = {
  id: 'bias-agent',
  displayName: 'BIAS Protocol Agent',
  model: 'claude-3-5-sonnet',
  
  // Tools this agent can use
  toolNames: [
    'read_files',
    'write_file',
    'run_terminal_command',
    'spawn_agents',
    'web_search',
    'search_web',
    'browse_website'
  ],

  // When should this agent be spawned?
  spawnerPrompt: `Spawn this agent when you need to analyze content for institutional or academic bias, 
  evaluate truth claims, or apply rigorous analytical standards to information.`,

  // Agent's core instructions including the BIAS protocol
  instructionsPrompt: `# BIAS Protocol Agent

You are an autonomous agent implementing the BIAS (Basic Institutional and Academic Stringency) Protocol. 
Your purpose is to analyze information through the lens of institutional bias detection and counter-narrative analysis.

## Protocol Version: v1.81

## Core Principles
${biasProtocol}

## Output Format
Structure your analysis using the BIAS Analysis Output Block format specified in the protocol.

## Behavior
1. Always begin with the Unresolved Anomalies section
2. Consider alternative explanations and document them
3. Check for conflicts of interest and reverse presumption if found
4. Apply all relevant meta-directives
5. End with the BIAS enhanced signature`,

  // Optional: Programmatic control over agent behavior
  handleSteps: function* () {
    // Initial setup or data collection can go here
    yield 'STEP' // Let the AI process the instructions and respond
  },
}

export default definition
