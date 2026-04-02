---
name: connecteam
description: Connecteam field management platform — API integration, store visit reports, scheduling, shift management, forms, webhooks, and team operations for field execution agencies.
  Activate on 'Connecteam', 'store report', 'store visit', 'shift schedule', 'field team', 'merchandiser report', 'Connecteam API', 'visit report', 'shift change'.
  NOT for general project management (use Notion), CRM (use a CRM skill), or financial reporting.
allowed-tools: Read,Write,Edit,Bash,WebSearch,WebFetch
metadata:
  category: Operations & Field Management
  pairs-with:
  - skill: bot-developer
    reason: Push Connecteam alerts and summaries via Telegram bot
  - skill: api-architect
    reason: Design data pipelines from Connecteam to dashboards
  tags:
  - connecteam
  - field-management
  - visual-merchandising
  - store-reports
  - scheduling
  - operations
---

# Connecteam — Field Management Integration Skill

Expert in Connecteam platform operations, API integration, and automation for field execution agencies.

## What Connecteam Is

Connecteam is an all-in-one employee management app for non-desk and field teams. It has three hubs:

- **Operations Hub** — scheduling, time clock, forms, checklists, tasks
- **Communications Hub** — team chat, updates feed, directory
- **HR & Skills Hub** — training, documents, recognition, time off

Field workers use the mobile app. Managers use the web dashboard.

## Mon and Co Context

Mon and Co Agency is a field execution / visual merchandising agency. They use Connecteam as their operational backbone:

- **Store visit reports** — merchandisers submit after every store visit via forms
- **Scheduling** — shift assignments for merchandisers across multiple clients and retailers
- **Team comms** — coordination between office and field team
- **Client reporting** — store visit data shared with brand clients

Mon and Co is on the **Expert plan** for both Operations and Communications hubs — this gives full REST API and webhook access.

## Connecteam API Reference

### Authentication

- API key passed in header: `X-API-KEY: <key>`
- Only account owners can generate API keys
- Base URL: `https://api.connecteam.com`
- Developer docs: https://developer.connecteam.com

### Core Endpoints

#### Forms (Store Visit Reports)

| Endpoint | Method | What It Does |
|---|---|---|
| `/forms/v1/forms` | GET | List all forms |
| `/forms/v1/forms/{formId}` | GET | Get a specific form structure |
| `/forms/v1/forms/{formId}/form-submissions` | GET | Get all submissions for a form (supports `limit` and `offset` params) |
| `/forms/v1/forms/{formId}/form-submissions/{formSubmissionId}` | GET | Get a specific submission |
| `/forms/v1/forms/{formId}/form-submissions/{formSubmissionId}` | PUT | Update manager fields on a submission |
| `/forms/v1/forms/{formId}/questions/{questionId}` | POST | Add dropdown options |
| `/forms/v1/forms/{formId}/questions/{questionId}` | GET | Get dropdown question options |

**API key stored in:** `~/my-assistant/.env` as `CONNECTEAM_API_KEY`

**Live form IDs (as of 2026-03-25):**

| Form ID | Form Name |
|---|---|
| 1529941 | O'Neill \| ANACONDA \| Visit Report |
| 1617439 | The North Face \| ANACONDA \| Store report |
| 1617455 | The North Face \| David Jones \| Store report |
| 1617751 | Helly Hansen \| ANACONDA \| Store Report |
| 2556183 | XTM \| Anaconda \| Visit Reports |
| 2593882 | Columbia \| ANACONDA \| Visit Reports |
| 2831079 | Mon + Co Agency \| Client Feedback Form |
| 2967030 | Expense Claim |
| 2967593 | Leave Request Form |
| 5402597 | Helly Hansen \| CYCA \| Visit Report |

**Scheduler IDs:**

| Scheduler ID | Name |
|---|---|
| 1410266 | Schedule (main) |
| 1434257 | Test Schedule |

**Store visit report structure (TNF Anaconda as reference):**

Each store visit report submission contains:
- `formSubmissionId` — unique ID
- `submittingUserId` — who submitted it
- `submissionTimestamp` — when
- `managerFields` — includes a `status` field and `date` field (what auto-review writes to)
- `answers` — array of answers, each with `questionId`, `questionType`, and value

**Rating fields** use `ratingValue` (numeric, appears to be 1-5 scale).
**Open text fields** use `value` (string).
**Image fields** use `images` array with `url` for each photo.
**Multiple choice fields** use `selectedAnswers` array.
**DateTime fields** use `timestamp` and timezone.

**Key form features:**
- Photo attachments (shelf photos, display compliance)
- GPS location stamp (where the merchandiser was when they submitted)
- Digital signatures
- Conditional logic within forms
- Submissions visible in real time on dashboard

#### Scheduler (Shifts)

| Endpoint | Method | What It Does |
|---|---|---|
| `/scheduler/v1/schedulers/{schedulerId}/shifts` | GET | Get shifts |
| `/scheduler/v1/schedulers/{schedulerId}/shifts` | POST | Create shifts |
| `/scheduler/v1/schedulers/{schedulerId}/shifts/{shiftId}` | GET | Get a specific shift |
| `/scheduler/v1/schedulers/{schedulerId}/unavailabilities` | GET | Get user unavailabilities |
| `/scheduler/v1/schedulers/{schedulerId}/layers` | GET | Get shift layers |

**Scheduling features:**
- Auto-scheduling (AI assigns based on qualifications, availability, preferences)
- Open shifts (workers claim, first-come or approval-based)
- Recurring shifts (daily, weekly, monthly)
- Shift tasks (specific tasks attached to each shift)
- Conflict detection (double-booking, qualifications, PTO)
- Multiple schedules (for multiple clients/regions)

#### Users

| Endpoint | Method | What It Does |
|---|---|---|
| `/users/v1/users` | GET | List all users |
| `/users/v1/users` | POST | Create a user |
| `/users/v1/users/{userId}` | PUT | Update a user |

#### Jobs

| Endpoint | Method | What It Does |
|---|---|---|
| `/jobs/v1/jobs` | GET | List all jobs |
| `/jobs/v1/jobs` | POST | Create a job |
| `/jobs/v1/jobs/{jobId}` | GET/PUT/DELETE | CRUD on a specific job |
| `/jobs/v1/jobs/{jobId}/sub-jobs` | GET/POST | Sub-jobs under a job |

#### Time Clock

| Endpoint | Method | What It Does |
|---|---|---|
| `/timeclock/v1/clock-in` | POST | Clock in a user |
| `/timeclock/v1/clock-out` | POST | Clock out a user |

#### Attachments

| Endpoint | Method | What It Does |
|---|---|---|
| `/attachments/v1/upload` | POST | Upload a file |
| `/attachments/v1/download/{attachmentId}` | GET | Download a file |

### Webhooks (Real-Time Events)

Connecteam supports 5 webhook types that fire in real time:

| Webhook Type | When It Fires |
|---|---|
| **Form submissions** | When a merchandiser submits a store visit report |
| **Time activity** | Clock in/out events |
| **Users** | New user created or updated |
| **Tasks** | Task created, updated, or completed |
| **Schedule** | Shift created, updated, or deleted |

**Webhook management via API:**
- `POST /webhooks/v1/webhooks` — Create a webhook
- `GET /webhooks/v1/webhooks` — List all webhooks
- `GET /webhooks/v1/webhooks/{webhookId}` — Get a specific webhook
- `PUT /webhooks/v1/webhooks/{webhookId}` — Update a webhook

### Auto-Reports (Built-In)

Connecteam can automatically email reports without any custom code:
- Schedule Excel, ZIP, or unified PDF reports
- Set frequency: daily, weekly, monthly
- Filter by criteria so each recipient only gets relevant data
- Can send to external email addresses (e.g. clients)

## Integration Patterns for Mon and Co

### Pattern 1: Store Report Auto-Review

```
Merchandiser submits report via Connecteam mobile app
    → Webhook fires to Wondr
    → AI reviews report against scoring criteria
    → If passes: mark as Approved (update manager fields via API)
    → If issues found: flag for Renee/Mon with specific concerns
```

### Pattern 2: Shift Change Automation

```
Merchandiser requests shift change
    → AI checks availability of other merchandisers (via Scheduler API)
    → AI suggests best replacement based on location, skills, client
    → If straightforward: auto-reassign
    → If complex: escalate to Renee/Mon with recommendation
```

### Pattern 3: Client Dashboard Data Pipeline

```
Approved store reports collected via Forms API
    → Data normalised and scored
    → Pushed to client dashboard (custom build by Emergent)
    → Clients query their own data ("top 5 stores this week")
    → Auto-refresh on schedule
```

### Pattern 4: Weekly Summary Reports

```
Every Friday at 5pm:
    → Pull all approved reports for the week (Forms API)
    → Summarise by client, region, merchandiser
    → Highlight flags, missed visits, standout stores
    → Push summary via WhatsApp/Telegram to Renee
    → Push client-specific summary to each client
```

## Key Data Fields in Store Visit Reports

When working with Connecteam form submissions, expect fields like:
- Store name / location
- Client / brand
- Merchandiser name
- Visit date and time
- GPS coordinates
- Photos (before/after, compliance shots)
- Checklist items (brand guidelines adherence)
- Presentation score (numeric or qualitative)
- Issues identified
- Actions taken
- Follow-up required (yes/no + details)
- Digital signature

## Connecteam Terminology

| Term | Meaning |
|---|---|
| Form | A digital report template (e.g. store visit checklist) |
| Entry | A single submitted report |
| Scheduler | A schedule container (one per client or region) |
| Shift | A single assigned work period |
| Layer | A grouping within a schedule |
| Job | A work category (used in scheduler and time clock) |
| Smart Group | Auto-updating group based on rules (department, location, skill) |
| Open Shift | Unassigned shift workers can claim |

## Important Notes

- **No built-in client portal** — clients cannot log into Connecteam directly. Data must be shared via auto-reports (email) or a custom-built dashboard.
- **Expert plan required** for API access — Mon and Co is on Expert for Operations and Communications.
- **API key security** — only account owners can generate keys. Store securely, never commit to code.
- **Rate limits** — respect API rate limits. Batch operations where possible.
- **Form structure first** — always fetch the form structure before processing entries, as field IDs are needed to interpret submission data.
- **GPS data** — store visit reports include location data, useful for verifying merchandisers were actually at the store.

## How to Use This Skill

When working on Mon and Co tasks involving Connecteam:

1. **Always reference the API docs** at https://developer.connecteam.com for exact parameter formats
2. **Check the Mon and Co context file** for business rules around report scoring and escalation
3. **Use Mon and Co's voice** — confident, expert, solutions-led — when drafting anything client-facing
4. **Tie everything to commercial outcome** — never frame success as "visits completed"
5. **Test with real data** before deploying any automation

## Getting Started Checklist

- [ ] Obtain Connecteam API key from Mon (account owner)
- [ ] Identify the store visit report form ID
- [ ] Map the form fields to understand submission data structure
- [ ] Set up a test webhook to receive form submissions
- [ ] Build the first automation: store report auto-review
