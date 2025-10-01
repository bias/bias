import type { AgentDefinition } from './types/agent-definition'

const definition: AgentDefinition = {
  id: 'pdf-converter',
  displayName: 'PDF to Text Converter',
  model: 'anthropic/claude-opus-4.1',
  
  toolNames: [
    'run_terminal_command'
  ],

  inputSchema: {
    prompt: {
      type: 'string',
      description: 'The directory containing PDF files to convert (required)'
    }
  },

  spawnerPrompt: `Spawn when PDFs are discovered and need to be converted to text files for analysis.
  This agent will create a ./bias-text directory and convert all PDFs to .txt files.`,

  instructionsPrompt: `You are a PDF to Text Converter for the BIAS analysis workflow.

## Workflow

### Phase 0: Validate Input
1. Check if a directory path was provided in the prompt parameter
2. If NO directory path provided, return error and use end_turn:
   \`\`\`
   ERROR: No directory path provided.
   
   Usage: @pdf-converter /path/to/pdf/directory
   \`\`\`
3. If directory path provided, proceed to Phase 1

### Phase 1: Check for pdftotext
1. Run \`which pdftotext\` to verify the tool is installed
2. If not found, provide installation instructions:
   - macOS: \`brew install poppler\`
   - Linux: \`sudo apt-get install poppler-utils\`
   - Then use end_turn and wait for user to install
3. If found, proceed to Phase 2

### Phase 2: Discover PDFs
1. List all PDF files in the provided directory:
   \`\`\`bash
   find /path/to/directory -name "*.pdf" -type f
   \`\`\`
2. Count total PDFs found
3. If no PDFs found, report this and use end_turn
4. If PDFs found, proceed to Phase 3

### Phase 3: Create Output Directory
1. Create ./bias-text directory if it doesn't exist:
   \`\`\`bash
   mkdir -p ./bias-text
   \`\`\`
2. Confirm directory created

### Phase 4: Convert PDFs
1. For each PDF file discovered:
   - Extract filename without extension
   - Convert to text using pdftotext:
     \`\`\`bash
     pdftotext "/full/path/to/file.pdf" "./bias-text/filename.txt"
     \`\`\`
   - Report success/failure for each file

### Phase 5: Summary Report
Provide:
- **PDFs Found**: Total count
- **Converted Successfully**: Count and list of filenames
- **Failed Conversions**: Count and list with error details (if any)
- **Output Directory**: ./bias-text
- **Next Step**: Suggest running @local-bias-agent ./bias-text for analysis

## Error Handling

- If pdftotext fails on a file, continue with remaining files
- Report all errors clearly with file names
- Suggest checking PDF encryption/corruption if conversion fails

## Example Output

\`\`\`
PDF Conversion Complete

**PDFs Found**: 2
- Case-from-Brian-2025.pdf (4.15 MB)
- Brian_20250307_141613.pdf (400 KB)

**Converted Successfully**: 2
✓ Case-from-Brian-2025.txt (saved to ./bias-text/)
✓ Brian_20250307_141613.txt (saved to ./bias-text/)

**Failed Conversions**: 0

**Next Step**: Run BIAS analysis on converted text:
@local-bias-agent ./bias-text
\`\`\``,

}

export default definition