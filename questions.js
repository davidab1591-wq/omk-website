// OMK franchise application — questions (shared by index.html and admin.html)
window.OMK = {
  // Google Apps Script web-app link (Deploy → Web app → copy the URL ending in /exec)
  SHEET_URL: "https://script.google.com/macros/s/AKfycbw3OLD7FP9KD4Wrsn9O5peOsnhr2katxHQNV9dmzMoZ2em5HPtm0PIhswn8V8ebCDoitQ/exec",
  SECTIONS: [
    {
      title: "Let's build the next OMK story.",
      sub: "For committed partners who value quality, people and long-term growth.",
      tag: "About you",
      fields: [
        { id: "full_name", label: "Full name", type: "text", req: true, auto: "name" },
        { id: "mobile", label: "Mobile number", type: "tel", req: true, auto: "tel" },
        { id: "email", label: "Email address", type: "email", req: true, auto: "email" },
        { id: "current_city", label: "Current city", type: "text", req: true },
        { id: "occupation", label: "Current occupation / business", type: "text", req: true },
        { id: "outlet_city", label: "Proposed outlet city and locality", type: "text", req: true },
        { id: "partners", label: "Names and roles of all proposed partners / investors", type: "long", req: true, rows: 3,
          help: "Write “Only me” if there are no other partners or investors." },
        { id: "q1", label: "Why do you want to become an OMK franchise partner?", type: "long", req: true,
          help: "What attracts you to OMK specifically, and what would you want to build through this partnership beyond financial returns?" }
      ]
    },
    {
      title: "Experience & commitment",
      sub: "Help us understand you, your time and what you bring.",
      tag: "Experience & commitment",
      fields: [
        { id: "q2", label: "What has your experience of OMK been so far?", type: "long", req: true,
          help: "Mention the outlets you have visited, the dishes you have tried, and something you appreciated or believe could be improved." },
        { id: "q3", label: "Who will be accountable for the outlet's daily operations?", type: "long", req: true,
          help: "Share their name, responsibilities and hours per week, and how existing work or business commitments will be managed." },
        { id: "q4", label: "What relevant experience will you bring?", type: "long", req: true,
          help: "Business, hospitality, team management or customer service. If you are new to this, tell us how you will prepare." },
        { id: "q5", label: "Tell us about a commitment you continued through a difficult period.", type: "long", req: true,
          help: "What happened, how long it lasted, the actions you took and the outcome." }
      ]
    },
    {
      title: "Investment readiness",
      sub: "Restaurant ownership needs financial preparation and patience.",
      tag: "Budget & commitment",
      fields: [
        { id: "budget", label: "Your total investment budget", type: "radio", req: true,
          help: "Franchise fee + setup + initial operating funds.",
          options: ["₹20–30 lakh", "₹30–40 lakh", "₹40–50 lakh", "Other"] },
        { id: "budget_amount", label: "Please specify your investment budget (₹)", type: "text",
          help: "Optional if you picked a range above. Required if you picked “Other”.", showIf: null },
        { id: "funding", label: "Source of funding", type: "check", req: true,
          options: ["Own funds", "Bank loan", "Investors / partners", "Combination of the above"] },
        { id: "slow_months", label: "How many months can you fund a slow start?", type: "text", req: true },
        { id: "q7", label: "How will you fund the business?", type: "long", req: true,
          help: "Your setup budget, funding sources, any proposed borrowing and investor contributions. Separately, mention the funds reserved for operations." },
        { id: "q8", label: "How long could you support the outlet if sales were below expectations?", type: "long", req: true,
          help: "Your operating reserve (₹), estimated monthly shortfall and the months it would cover. Share your assumptions and how personal living expenses would be met." },
        { id: "q9", label: "Suppose the outlet records losses during its first three to four months. What would you do next?", type: "long", req: true,
          help: "How you would investigate, the immediate actions you would take, the support you would seek from OMK, and how you would decide whether to continue, improve or exit." },
        { id: "q10", label: "What are your financial expectations and commitment horizon?", type: "long", req: true,
          help: "When you expect to cover monthly costs, recover your investment and earn a personal income — and what you would do if these milestones take longer." }
      ]
    },
    {
      title: "Your proposed outlet",
      sub: "Tell us where you would like to open.",
      tag: "Location & premises",
      fields: [
        { id: "premises", label: "What is your plan for the premises?", type: "radio", req: true,
          options: [
            "I own a commercial space suitable for an outlet",
            "I own land where an outlet could be developed",
            "I have identified a commercial space to rent",
            "I will look for a rental space with OMK's guidance"
          ] },
        { id: "location", label: "Proposed location / locality", type: "text", req: true },
        { id: "area", label: "Approximate area (sq. ft.)", type: "text", req: true, mode: "numeric" },
        { id: "rent", label: "Expected monthly rent (if applicable)", type: "text" },
        { id: "q6", label: "What is your proposed location, and why do you believe it suits OMK?", type: "long", req: true,
          help: "Think about customers, competition, rent, visibility and delivery demand. Have you identified a property?" }
      ]
    },
    {
      title: "Running an OMK outlet",
      sub: "Quality, people and accountability — every day.",
      tag: "Operations, values & declaration",
      fields: [
        { id: "q11", label: "Are you prepared to complete practical training and demonstrate competence before opening?", type: "long", req: true,
          help: "Food preparation, service, billing, stock control, cleaning and closing. Share your availability and any constraints." },
        { id: "q12", label: "How would you respond if someone suggested a cheaper, unapproved ingredient or a recipe shortcut to improve margins or speed?", type: "long", req: true,
          help: "Your decision, the approval process you would follow, and other ways you would address the underlying problem." },
        { id: "q13", label: "During a busy shift, two employees are absent and a customer complains about a delayed order. How would you handle the situation?", type: "long", req: true,
          help: "How you would support the team, communicate with customers, and protect food quality and safety." },
        { id: "q14", label: "How would you put OMK's values into daily practice?", type: "long", req: true,
          help: "Timely salaries, staff meals and breaks, respectful treatment of staff and delivery partners, responsible packaging, and kindness towards animals while maintaining hygiene and customer comfort." },
        { id: "q15", label: "What does accountability in this partnership mean to you?", type: "long", req: true,
          help: "Approved recipes, suppliers and brand standards; accurate records; audits; confidentiality; corrective actions; the support you expect from OMK; and how you would handle disagreement." },
        { id: "ack", label: "Acknowledgement", type: "ack", req: true,
          options: [
            "The information provided is accurate, and all proposed partners and investors have been disclosed.",
            "I understand that sales, profits and investment recovery timelines are not guaranteed.",
            "I am willing to participate in interviews, practical assessment and reference or funding verification with my consent.",
            "I understand that submitting this application does not guarantee franchise approval. Applicant selection, site approval and opening approval are separate stages."
          ] },
        { id: "sign_name", label: "Applicant name", type: "text", req: true },
        { id: "sign_date", label: "Date", type: "date", req: true }
      ]
    }
  ]
};
