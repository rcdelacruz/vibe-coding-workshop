# Vibe Coding Quick Reference Card

## The 3-Step Process

### Step 1: Create PRD
```
Use @create-prd.mdc
I want to build: [describe your feature]
Context files: @existing-file.js (if adding to existing project)
```

### Step 2: Generate Tasks
```
Take @prd-[filename].md and create tasks using @generate-tasks.mdc
```
Then when AI shows high-level tasks, respond with:
```
Go
```

### Step 3: Implement
```
Please start on task 1.1 and use @process-task-list.mdc
```
After each task completion:
- **"yes" or "y"** = continue to next task
- **"fix this first..."** = improve current task

---

## Common Prompts

### For New Projects
```
Use @create-prd.mdc
I want to build: [your idea]
This is a new project starting from scratch
```

### For Existing Projects
```
Use @create-prd.mdc
I want to add: [new feature] to my existing [type] app
Reference these files: @component.tsx @api.js @package.json
```

### When AI Gets Off Track
```
Stop. Please focus only on task [X.X] from our task list.
Reference the original PRD: @prd-[filename].md
```

### When Tasks Are Too Big
```
This task seems too large. Can you break task [X.X] into smaller sub-tasks?
```

---

## File Naming Convention

- **PRD Files**: `prd-[feature-name].md`
- **Task Files**: `tasks-prd-[feature-name].md`
- **Location**: `/tasks/` folder in your project

---

## Success Indicators

✅ **You're doing it right when:**
- AI asks clarifying questions before writing PRD
- Tasks are small (15-30 minutes each)
- AI waits for your approval between tasks
- You feel in control of the process
- Code quality stays consistently high

❌ **Red flags:**
- AI starts coding without a PRD
- Tasks are vague or too large
- AI jumps ahead without approval
- You feel lost or overwhelmed
- Code quality is inconsistent

---

## Troubleshooting

**Problem**: AI doesn't see my .mdc files
**Solution**: Copy-paste the template content directly

**Problem**: Tasks are too complex
**Solution**: Ask AI to break them down further

**Problem**: AI goes off-topic
**Solution**: Reference the original PRD and restart with specific task

**Problem**: Code doesn't work
**Solution**: Ask AI to debug, or request simpler approach

---

## Core Principle

**Think → Plan → Build → Ship**

*Structure amplifies creativity, it doesn't limit it.*