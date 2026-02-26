# Resume ATS Reviewer – AI Resume Alignment Analyzer PRD

### TL;DR

Resume ATS Reviewer is an AI-powered Discord DM bot that provides private, session-based resume-to-job description alignment analysis with structured and actionable feedback. Users privately upload their resume and job description through Discord DM, receive a detailed alignment report via email, and benefit from best-in-class privacy—no public uploads, no persistent storage, and no extra login requirements. Designed for job seekers and career coaches looking for secure and immediate resume insights.

---

## Goals

### Business Goals

* Achieve a ≥90% accuracy rate in AI-generated alignment feedback reports.

* Deliver alignment analysis reports to users in under 1 minute per session.

* Attain a ≥75% user satisfaction rating from pilot trial feedback.

* Reach 200+ unique DM user sessions within the first quarter post-launch.

* Build brand trust through demonstrable privacy and security practices from day one.

### User Goals

* Receive fast, private, and relevant resume-job alignment analysis without creating new accounts or risking data exposure.

* Obtain a clear, actionable feedback report sent directly to their email within minutes of submission.

* Experience a frictionless and confidential workflow inside Discord DMs—no complicated onboarding or public steps.

* Trust that their resume data is not stored or reused after session completion.

* Feel empowered to improve job application materials with concrete, AI-driven recommendations.

### Non-Goals

* No support for resume or job description uploads via public Discord server channels or communities in V1.

* No persistent user account system, login flow, or user data storage outside the active DM session.

* No web dashboard, LinkedIn scraping, or integration with external resume/job platforms in V1.

---

## User Stories

**Persona: University Student**

* As a university student looking for summer internships, I want to privately upload my resume and target job description via DM, so that I can safely get focused feedback before applying.

* As a student worried about online data exposure, I want assurance that my resume won’t be stored or visible to others, so that I feel comfortable using automation.

**Persona: Early-Career Job Seeker**

* As a job seeker, I want to receive an AI-powered analysis comparing my resume to a specific job description, so that I know how well I align and what to fix to increase my chances.

* As a frequent Discord user, I want the entire process within DM, so I don’t need to sign up elsewhere or learn a new tool.

**Persona: Career Coach**

* As a career coach helping multiple clients, I want a quick way to upload sample resumes and job descriptions for instant analysis, so that I can provide more value in coaching sessions.

* As a coach, I want to ensure feedback sessions are private between me and my client without exposing materials to a public channel.

---

## Functional Requirements

* **Discord DM Bot (Priority: High)**

  * DM-only workflow; no public server or multi-user channel support.

  * Welcomes user and provides clear, privacy-centric onboarding instructions.

* **File Upload & Job Description Input (Priority: High)**

  * Accepts common resume file formats via DM (PDF, DOCX).

  * Prompts user to paste or upload the target job description.

* **Session-Based Email Collection (Priority: High)**

  * Requests and validates an email address per analysis session solely for single-use report delivery.

  * No persistent linkage between Discord user and email; email is purged post-delivery.

* **AI-Powered Resume Analysis (Priority: High)**

  * Uses a large language model to analyze and compare resume and job description content.

  * Outputs structured feedback (e.g., JSON) for report formatting.

* **Report Generation & Delivery (Priority: High)**

  * Formats structured feedback into a user-friendly PDF or HTML report.

  * Sends the analysis report to the provided email address.

  * Deletes all session data after report is sent.

* **Privacy & Abuse Controls (Priority: High)**

  * Enforces file size limits and email format validation.

  * Applies per-user rate limiting (e.g., maximum N analyses per 24 hours).

  * Automatic session cleanup: deletes all resume, job, and email data post-delivery.

* **Not in Scope for V1 (Priority: Explicitly Excluded)**

  * No persistent user account management or server-side user/email database.

  * No public server functionality, moderator tooling, or community broadcast features.

  * No integrations with web dashboards or LinkedIn job/resume scraping.

---

## User Experience

**Entry Point & First-Time User Experience**

* Users find/are invited to the bot on Discord.

* Initiating a Direct Message with the bot, users are greeted with (optional) short onboarding, reinforcing privacy, security, and step-by-step instructions.

* Instructions clarify: “No data is stored after your report is sent. Your inputs are private. No logins needed.”

**Core Experience**

* **Step 1:** User uploads their resume file in DM.

  * Bot checks file type/size; prompts errors if invalid and suggests fixes.

* **Step 2:** Bot asks user to paste or upload the relevant job description.

  * Accepts pasted text or certain file types; checks for adequate length.

* **Step 3:** Bot requests an email address solely for report delivery.

  * Runs format validation, prompts on obvious errors.

* **Step 4:** Bot confirms all three inputs, summarizes the process, and asks for confirmation ("Ready to analyze?").

* **Step 5:** After confirmation, the system processes resume and job description via LLM, formats structured analysis, attaches report (PDF/HTML), and emails it to the user.

* **Step 6:** Bot sends final DM: “Your report is being sent. All session content will now be deleted.” Optionally, provides a session summary/reminder of privacy policy.

* **Step 7:** Temporary data is purged.

* **Step 8:** Optionally, bot surveys for satisfaction or improvement feedback.

**Advanced Features & Edge Cases**

* Detect abuse (e.g., excessive submissions, suspicious emails/inputs); trigger cool-down or soft block if abuse suspected.

* Graceful handling of corrupted files, giant attachments, or incomplete submissions with clear error messages.

* “Try again later” messaging for rate-limited users.

* Option for the user to abort or restart the session at any time.

**UI/UX Highlights**

* Absolute privacy: clear borders, prominent reassurances at every step.

* Accessible, readable message formatting and succinct prompts.

* Email addresses or file content never shown in non-DM context.

* Universal support for dark and light Discord themes.

* Minimalist interaction—no unnecessary clicks or steps.

---

## Narrative

Taylor, a recent graduate, is anxious about applying for her dream job but feels her resume may not match the desired posting. Unsure about using web-based tools due to privacy concerns, she discovers a Discord-based ATS analysis bot that operates entirely through private DMs. Taylor uploads her resume, pastes in the job description, and provides her email—all while feeling reassured by the bot’s privacy-first messaging and simple, frictionless experience.

Within a minute, Taylor receives a thorough alignment report in her inbox, highlighting exactly where her resume meets or falls short of the job requirements. The report is clear, actionable, and formatted professionally—giving her the insight and confidence to revise her resume effectively. Importantly, Taylor knows her files and personal information weren’t stored or exposed anywhere publicly. She’s empowered to apply to more roles and recommends the tool to her peers.

For the business, this pilot demonstrates demand for trustworthy, AI-powered career tools within the platforms users already inhabit (like Discord). The insights from V1 inform future expansions—potentially adding web support and multi-platform integrations while keeping user privacy and trust as the foundation.

---

## Success Metrics

### User-Centric Metrics

* Median report generation time under 1 minute (measured by backend logs).

* ≥75% positive user satisfaction in immediate DM feedback poll post-report.

* ≥50% of users return for multiple resume analyses within 4 weeks.

* User NPS of ≥30 from survey responses.

### Business Metrics

* 200+ unique DM sessions within the first quarter.

* <2% user abuse or false positive moderation events.

* Observable increase in Discord bot invites or recommendations.

### Technical Metrics

* ≥99% bot uptime.

* 

> 98% successful report delivery rate to valid emails.

* <1% error rate for data processing, AI inference, or email failures.

### Tracking Plan

* Resume submission event (anonymized).

* Job description input event (anonymized).

* Report generation initiated/completed.

* Report sent (success/failure).

* Abuse detection triggered.

* Session deletion event.

* User feedback/survey response.

---

## Technical Considerations

### Technical Needs

* Discord bot that operates exclusively in DM context, leveraging Discord’s user ID identity.

* Secure, time-limited temporary data storage for in-session files and email, with enforced deletion.

* Integration with LLM provider for AI-powered semantic analysis.

* Backend service to format structured analysis and handle secure email delivery.

* Basic abuse prevention service layer (rate limiting, input validation).

### Integration Points

* Discord platform (direct bot integration).

* LLM API provider(s) for resume analysis.

* Third-party transactional email service (e.g., SendGrid, Mailgun) for report delivery.

### Data Storage & Privacy

* Resume, job description, and email data are stored ephemerally, purged immediately post-report-delivery.

* No persistent or relational user database.

* Fully compliant with privacy best practices (can be expanded for GDPR/CCPA if needed).

### Scalability & Performance

* Expecting 200–500 sessions/month in V1 MVP; architecture supports easy scale-up.

* LLM compute and email delivery are bottlenecks; set conservative usage quotas as needed.

* Optimized for rapid response times (<1 min end-to-end).

### Potential Challenges

* Ensuring 100% data deletion after each session to maintain trust.

* Detecting and throttling spam or abuse from Discord DMs.

* Keeping email deliverability high and avoiding spam filters.

* Managing LLM usage/cost for unpredictable spikes.

---

## Milestones & Sequencing

### Project Estimate

* Small Team, 2–3 weeks

### Team Size & Composition

* Small Team: 1–2 people

  * Full-stack Engineer (bot, backend, LLM, email integration)

  * Product owner/UX (could be part-time/double as engineer)

### Suggested Phases

**Phase 1: Private DM-Only MVP Launch (1 week)**

* Key Deliverables: Discord DM bot (Engineer), session-based workflow, LLM resume/job analysis, email delivery, ephemeral storage, core privacy controls.

* Dependencies: Discord bot token, LLM API access, email sending service setup.

**Phase 2: Beta AB Testing & Feedback (1 week)**

* Key Deliverables: Manual moderation, tracking/reporting, integration of user feedback (Engineer, Product).

* Dependencies: Initial pilot users, satisfaction survey tooling.

**Phase 3: Iteration/Enhancement (1 week)**

* Key Deliverables: Improved abuse controls, UI/UX tweaks from feedback, prep for future roadmap (private docs; no public features).

* Dependencies: Feedback analysis.

Future phases may include web portals, persistent user features, and cross-platform expansion but remain out of scope for V1.