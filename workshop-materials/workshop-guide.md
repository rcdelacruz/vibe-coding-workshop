# Vibe Coding Workshop: AI-Assisted Development
*A 2-Hour Hands-On Workshop*

## What is "Vibe Coding"?

**Vibe Coding** is a structured approach to AI-assisted development that maintains creative flow while ensuring quality outcomes. Instead of chaotic back-and-forth with AI, you create a clear plan first, then execute with AI as your collaborative partner.

**The Vibe**: Think → Plan → Build → Ship

---

## Workshop Overview (120 Minutes)

### Module 1: Setup & Mindset (15 min)
### Module 2: The PRD Phase - Think Before You Code (30 min)
### Module 3: Task Generation - Plan Your Attack (25 min)
### Module 4: Vibe Implementation - Flow State Coding (40 min)
### Module 5: Wrap-up & Next Steps (10 min)

---

## Pre-Workshop Setup (5 minutes before start)

### Required Tools
- Any AI-powered editor (Cursor, Windsurf, VS Code + Copilot, etc.)
- Basic project environment (Node.js, Python, or your preferred stack)
- The 3 core template files (provided in workshop materials)

### Workshop Files Structure
```
vibe-coding-workshop/
├── templates/
│   ├── create-prd.mdc
│   ├── generate-tasks.mdc
│   └── process-task-list.mdc
├── projects/
│   └── [your-project-name]/
└── examples/
    ├── prd-habit-tracker.md
    └── tasks-prd-habit-tracker.md
```

---

## Module 1: Setup & Mindset (15 minutes)

### The Problem with Traditional AI Coding
**Demo: Chaotic AI Interaction** *(5 min)*
- Show typical messy AI conversation
- Point out issues: scope creep, context loss, inconsistent quality
- Highlight developer frustration and wasted time

### The Vibe Coding Solution
**Core Principles** *(5 min)*
1. **Think First**: Define WHAT before HOW
2. **Plan Structure**: Break big into small
3. **Maintain Control**: You approve each step
4. **Keep Flow**: AI handles implementation details

### Quick Environment Check *(5 min)*
**Everyone does together:**
1. Open your AI editor
2. Create workshop project folder
3. Copy template files to your project
4. Test AI response with simple question

**Success Check**: "Can you see my template files and respond to basic requests?"

---

## Module 2: The PRD Phase - Think Before You Code (30 minutes)

### What is a PRD and Why It Matters *(5 min)*
- **PRD = Product Requirements Document**
- Forces you to think through the problem
- Creates shared understanding with AI
- Prevents scope creep and confusion

### Live Demo: Creating a PRD *(10 min)*
**Instructor demonstrates live:**

**Scenario**: "I want to build a habit tracker app"

```
Prompt to AI:
Use @create-prd.mdc
I want to build: A simple habit tracker for personal use
This is a new project
```

**Show AI asking clarifying questions:**
- Who will use this?
- What habits should it track?
- How should progress be visualized?
- What should it NOT do?

**Demonstrate answering questions and reviewing generated PRD**

### Hands-On: Your First PRD *(15 min)*
**Individual Practice:**

**Choose your project** (pick one):
- Personal expense tracker
- Recipe collection app
- Workout log
- Book reading tracker
- Plant care reminder
- *Or suggest your own simple idea*

**Your turn:**
1. Start with the PRD template
2. Give your AI a clear initial prompt
3. Answer the clarifying questions thoughtfully
4. Review and refine the generated PRD

**Facilitation Tips:**
- Walk around and help individuals
- Common mistake: Being too vague in answers
- Encourage specific user stories

**Success Check**: Everyone has a clear, detailed PRD file

---

## Module 3: Task Generation - Plan Your Attack (25 minutes)

### From Vision to Actionable Steps *(5 min)*
- Why break down into tasks?
- The power of small, completable units
- How this maintains momentum and quality

### Live Demo: Generating Tasks *(10 min)*
**Using the habit tracker PRD from Module 2:**

```
Prompt to AI:
Take @prd-habit-tracker.md and create tasks using @generate-tasks.mdc
```

**Show the process:**
1. AI generates high-level tasks first
2. Review high-level structure
3. Give permission with "Go"
4. AI breaks down into detailed sub-tasks

**Point out good task characteristics:**
- Specific and actionable
- 15-30 minutes each
- Clear completion criteria
- Logical dependency order

### Hands-On: Generate Your Task List *(10 min)*
**Individual Practice:**
1. Use your PRD from Module 2
2. Generate high-level tasks first
3. Review and approve the structure
4. Get detailed sub-tasks
5. Scan for any missing pieces

**Common Issues to Address:**
- Tasks too large → Ask AI to break down further
- Missing setup tasks → Add infrastructure items
- Unclear requirements → Reference back to PRD

**Success Check**: Everyone has a detailed, actionable task list

---

## Module 4: Vibe Implementation - Flow State Coding (40 minutes)

### The Vibe Coding Workflow *(5 min)*
**The Magic Formula:**
1. **Start Small**: Pick first sub-task only
2. **AI Implements**: Let AI write the code
3. **You Review**: Check quality and functionality
4. **Approve or Refine**: "Yes" to continue, or give feedback
5. **Repeat**: One task at a time

**Why this works:**
- Maintains control without micromanaging
- Keeps AI focused on specific deliverables
- Allows for course correction at each step
- Creates natural checkpoint for testing

### Live Demo: First Implementation *(15 min)*
**Using our habit tracker example:**

```
Prompt to AI:
Please start on task 1.1 and use @process-task-list.mdc
```

**Demonstrate:**
1. AI focuses on just one sub-task
2. Shows code implementation
3. Marks task complete in the list
4. Asks for permission to continue

**Show review process:**
- Check if code meets requirements
- Test basic functionality
- Decide: approve or request changes

**Demonstrate saying "yes" to continue and "fix this first" to refine**

### Hands-On: Your First Implementation Sprint *(20 min)*
**Individual Practice:**

**Goal**: Complete 2-3 sub-tasks from your list

**Process:**
1. Start with task 1.1
2. Let AI implement
3. Review the code
4. Approve or request changes
5. Move to next task

**Facilitation:**
- Encourage participants to actually test the code
- Help with technical issues
- Remind them to maintain the approval gate process

**Common Patterns You'll See:**
- AI stays focused when given one task
- Quality improves with specific feedback
- Progress feels controllable and satisfying

**Success Check**: Everyone has working code for 2-3 completed tasks

---

## Module 5: Wrap-up & Next Steps (10 minutes)

### Workshop Reflection *(5 min)*
**Group Discussion:**
- What felt different about this approach?
- Where did you feel most/least in control?
- What would you do differently next time?

**Key Takeaways:**
- Structure doesn't kill creativity—it enhances it
- Small steps lead to big outcomes
- AI works best with clear, specific instructions
- The approval gate keeps quality high

### Beyond the Workshop *(5 min)*
**Immediate Next Steps:**
1. **Finish Your Project**: Complete remaining tasks using the same process
2. **Try Different Complexity**: Start with simple features, gradually increase scope
3. **Customize Templates**: Adapt the .mdc files to your team's standards

**Advanced Techniques:**
- **Team Coordination**: Share PRDs for alignment before coding
- **Legacy Integration**: Use PRDs to plan additions to existing projects
- **Quality Gates**: Add testing requirements to your task templates
- **Documentation**: Generate user guides alongside implementation

**Resources:**
- Template files (save these!)
- Example PRDs and task lists
- Community examples and variations

---

## Quick Reference

### Starting a new feature:
```
Use @create-prd.mdc
Feature: [your idea]
Files: @relevant-file.js (for existing projects)
```

### Ready to plan tasks:
```
Take @prd-filename.md and use @generate-tasks.mdc
```

### Time to code:
```
Start task 1.1 using @process-task-list.mdc
```

### After each task:
- Review the changes
- Say "yes" to continue or give feedback to improve

---

## Success Metrics

**Participants should leave with:**
- [ ] One completed PRD for their chosen project
- [ ] One detailed task list generated from that PRD
- [ ] 2-3 implemented and working sub-tasks
- [ ] Understanding of the approval gate workflow
- [ ] Confidence to continue the process independently

---

*"Vibe Coding isn't about replacing your creativity—it's about amplifying it through structure and collaboration with AI."*
