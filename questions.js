// OMK franchise application (FOFO) — questions used by franchise.html
// Field types: text, tel, email, number, long, radio (one choice), check (several), select (dropdown), ack (all must be ticked), date
// req: true = required.  showIf: { id, is: [...] } = only shown (and only required) when that answer is one of these.
const YN = ['Yes', 'No'];
window.OMK = {
  // Google Apps Script web-app link (Deploy → Web app → copy the URL ending in /exec)
  SHEET_URL: "https://script.google.com/macros/s/AKfycbw3OLD7FP9KD4Wrsn9O5peOsnhr2katxHQNV9dmzMoZ2em5HPtm0PIhswn8V8ebCDoitQ/exec",
  SECTIONS: [
    {
      title: "Applicant information",
      sub: "Tell us who you are and how we can reach you.",
      tag: "Applicant information",
      fields: [
        { id: "full_name", label: "Full name", type: "text", req: true, auto: "name" },
        { id: "mobile", label: "Mobile number", type: "tel", req: true, auto: "tel" },
        { id: "whatsapp", label: "WhatsApp number", type: "tel", req: true, help: "Same as mobile? Type it again." },
        { id: "email", label: "Email address", type: "email", req: true, auto: "email" },
        { id: "city", label: "Current residential city", type: "text", req: true },
        { id: "age_group", label: "Age group", type: "select", req: true, options: ["18–25", "26–35", "36–45", "46–55", "56 and above"] },
        { id: "occupation", label: "Current occupation", type: "radio", req: true,
          options: ["Business owner", "Salaried professional", "Entrepreneur / Startup founder", "Investor", "Family business", "Other"] },
        { id: "occupation_other", label: "Please specify your occupation", type: "text", req: true, showIf: { id: "occupation", is: ["Other"] } },
        { id: "linkedin", label: "LinkedIn profile (if available)", type: "text" }
      ]
    },
    {
      title: "Business and professional background",
      sub: "Your experience in business and in food.",
      tag: "Business background",
      fields: [
        { id: "running_business", label: "Are you currently running any business?", type: "radio", req: true, options: ["Yes", "No", "Planning to start one"] },
        { id: "business_details", label: "Mention the business name and industry.", type: "text", req: true, showIf: { id: "running_business", is: ["Yes"] } },
        { id: "experience_years", label: "How many years of business experience do you have?", type: "radio", req: true,
          options: ["No experience", "Less than 2 years", "2–5 years", "5–10 years", "More than 10 years"] },
        { id: "food_experience", label: "Have you previously operated a restaurant, café, food outlet or franchise?", type: "radio", req: true, options: YN },
        { id: "food_experience_details", label: "Provide details of the business, location and your role.", type: "long", rows: 3, req: true, showIf: { id: "food_experience", is: ["Yes"] } },
        { id: "employees_now", label: "How many employees are currently working under you?", type: "number", req: true, help: "Enter 0 if none." },
        { id: "managed_10_plus", label: "Have you ever managed a business with more than 10 employees?", type: "radio", req: true, options: YN },
        { id: "reason", label: "What is your primary reason for choosing the OMK franchise?", type: "long", req: true },
        { id: "suitable", label: "Why do you believe you would be a suitable OMK franchise partner?", type: "long", req: true },
        { id: "competing_brands", label: "Are you currently associated with any competing food or restaurant brands?", type: "radio", req: true, options: YN },
        { id: "competing_details", label: "Please mention the brand(s) and your association.", type: "text", req: true, showIf: { id: "competing_brands", is: ["Yes"] } }
      ]
    },
    {
      title: "Investment capacity and financial readiness",
      sub: "The expected investment range for an OMK outlet is ₹30–50 lakh.",
      tag: "Investment & finance",
      fields: [
        { id: "investment", label: "What is your total investment capacity?", type: "radio", req: true, options: ["Below ₹30 lakh", "₹30–40 lakh", "₹40–50 lakh", "Above ₹50 lakh"] },
        { id: "funding", label: "How will you arrange the investment?", type: "radio", req: true, options: ["Own funds", "Family funds", "Business partner", "Bank loan", "Combination"] },
        { id: "ready_capital", label: "How much capital is readily available?", type: "radio", req: true,
          options: ["Below ₹10 lakh", "₹10–20 lakh", "₹20–30 lakh", "₹30–50 lakh", "Above ₹50 lakh"] },
        { id: "invest_3_6_months", label: "Are you financially prepared to invest within the next 3–6 months?", type: "radio", req: true, options: ["Yes", "No", "Need time"] },
        { id: "existing_loans", label: "Do you have any existing business loans or financial commitments that may affect the investment?", type: "radio", req: true, options: YN },
        { id: "working_capital", label: "Will you maintain additional working capital apart from the initial investment?", type: "radio", req: true, options: ["Yes", "No", "Need clarification"] },
        { id: "launch_timeline", label: "What is your expected timeline for launching the outlet?", type: "text", req: true, help: "For example: within 3 months, by March 2027." },
        { id: "monthly_costs_ok", label: "Are you comfortable bearing monthly operating expenses such as rent, salaries, electricity, maintenance and other outlet expenses?", type: "radio", req: true, options: YN },
        { id: "returns_not_guaranteed", label: "Are you aware that business performance and returns are not guaranteed?", type: "radio", req: true, options: YN }
      ]
    },
    {
      title: "Property and location details",
      sub: "OMK requires a minimum 2,000 sq. ft. outlet.",
      tag: "Property & location",
      fields: [
        { id: "property_access", label: "Do you already own or have access to a commercial property?", type: "radio", req: true,
          options: ["Yes, owned by me", "Yes, leased", "Property identified, not finalised", "No, looking for a property"] },
        { id: "outlet_city", label: "Which city are you planning to open the outlet in?", type: "text", req: true },
        { id: "locality", label: "Mention the preferred locality / area.", type: "text", req: true },
        { id: "property_size", label: "What is the available property size?", type: "radio", req: true,
          options: ["Below 2,000 sq. ft.", "2,000–2,500 sq. ft.", "2,500–3,000 sq. ft.", "3,000–4,000 sq. ft.", "Above 4,000 sq. ft."] },
        { id: "configuration", label: "What is the property configuration?", type: "radio", req: true, options: ["Ground floor", "First floor", "Multiple floors", "Independent building"] },
        { id: "restaurant_suitable", label: "Is the property suitable for restaurant operations?", type: "radio", req: true, options: ["Yes", "No", "Need technical evaluation"] },
        { id: "parking", label: "Is parking available?", type: "radio", req: true, options: ["Yes", "No", "Limited parking"] },
        { id: "utilities", label: "Is there sufficient electricity, water supply, drainage and exhaust provision?", type: "radio", req: true, options: ["Yes", "No", "Not sure"] },
        { id: "rent", label: "What is the expected monthly rent, if applicable?", type: "text" },
        { id: "approvals", label: "Is the property commercially approved for the intended restaurant use, or will approvals need to be obtained?", type: "long", rows: 3, req: true },
        { id: "photos_link", label: "Property photographs, layout or floor plan (link, if available)", type: "text",
          help: "Share a Google Drive, Google Photos or Dropbox link with the photos / floor plan. Set it to “Anyone with the link can view”." },
        { id: "maps_location", label: "Share the Google Maps location or property address.", type: "long", rows: 2 }
      ]
    },
    {
      title: "Daily operations and involvement",
      sub: "OMK partners are actively involved in running their outlet.",
      tag: "Operations & involvement",
      fields: [
        { id: "involvement", label: "Will you personally be involved in the daily operations of the outlet?", type: "radio", req: true,
          options: ["Yes, full-time", "Yes, part-time", "No, I will appoint someone to manage it"] },
        { id: "responsible_person", label: "Who will take responsibility for daily business operations?", type: "text", req: true, help: "Name and role." },
        { id: "visit_frequency", label: "How frequently can you visit the outlet?", type: "radio", req: true, options: ["Daily", "3–4 times a week", "Weekly", "Only when required"] },
        { id: "appoint_manager", label: "Are you willing to appoint one dedicated outlet manager as per OMK's requirements?", type: "radio", req: true, options: YN },
        { id: "manager_reports_omk", label: "Are you comfortable with the outlet manager reporting operationally to OMK's central management team?", type: "radio", req: true, options: YN },
        { id: "pay_manager_marketing", label: "Are you willing to pay the dedicated outlet manager's salary and marketing-related costs?", type: "radio", req: true, options: YN },
        { id: "follow_sops", label: "Are you willing to follow OMK's prescribed operating procedures, recipes, menu, pricing and customer service standards?", type: "radio", req: true, options: YN },
        { id: "central_monitoring", label: "Are you comfortable with central monitoring of sales, billing, inventory, wastage, expenses and daily performance?", type: "radio", req: true, options: YN },
        { id: "inspections", label: "Will you support surprise outlet inspections and periodic operational audits?", type: "radio", req: true, options: YN },
        { id: "reconciliation", label: "Are you willing to maintain daily cash reconciliation, inventory reconciliation and financial reporting?", type: "radio", req: true, options: YN },
        { id: "quality_failure", label: "What would you do if your outlet consistently fails to maintain OMK's food quality and service standards?", type: "long", req: true },
        { id: "handle_issues", label: "How would you handle employee absenteeism, customer complaints and operational losses?", type: "long", req: true }
      ]
    },
    {
      title: "Brand value and long-term commitment",
      sub: "Protecting OMK's reputation, together.",
      tag: "Brand & long-term commitment",
      fields: [
        { id: "brand_reputation", label: "What does maintaining a food brand's reputation mean to you?", type: "long", req: true },
        { id: "same_recipes", label: "Are you willing to follow the same food recipes and portion sizes without unauthorised changes?", type: "radio", req: true, options: YN },
        { id: "approved_suppliers", label: "Will you avoid using unapproved ingredients or suppliers?", type: "radio", req: true, options: YN },
        { id: "policies", label: "Are you willing to follow OMK's hygiene, food safety, customer service and staff discipline policies?", type: "radio", req: true, options: YN },
        { id: "local_marketing", label: "Are you willing to participate in local marketing activities and brand promotions?", type: "radio", req: true, options: YN },
        { id: "quality_checks", label: "Are you comfortable with OMK having the right to conduct quality checks and operational audits?", type: "radio", req: true, options: YN },
        { id: "association_period", label: "What is your expected association period with OMK?", type: "radio", req: true, options: ["3 years", "5 years", "7 years", "10 years", "Open to discussion"] },
        { id: "more_outlets", label: "Are you planning to open more than one OMK outlet if the first outlet performs well?", type: "radio", req: true, options: ["Yes", "No", "Maybe in the future"] },
        { id: "expectations", label: "What are your expectations from OMK as a franchisor?", type: "long", req: true }
      ]
    },
    {
      title: "Final declaration and confirmation",
      sub: "Please read and tick every statement.",
      tag: "Declaration",
      fields: [
        { id: "ack", label: "Declaration", type: "ack", req: true,
          options: [
            "I confirm that the information provided in this application is accurate.",
            "I understand that the minimum outlet requirement is 2,000 sq. ft.",
            "I understand that the expected investment range is ₹30–50 lakh.",
            "I understand that this is a FOFO franchise model.",
            "I understand that I am responsible for daily outlet operations and operating expenses.",
            "I agree to appoint and fund a dedicated outlet manager who will report operationally to OMK.",
            "I understand that OMK will provide designated pre-mixes, pastes, systems, marketing support and staff training as agreed.",
            "I understand that franchise approval is subject to verification, location assessment, financial evaluation and execution of a formal franchise agreement.",
            "I understand that business revenue, profitability and returns are not guaranteed."
          ] },
        { id: "sign_name", label: "Applicant name", type: "text", req: true },
        { id: "sign_date", label: "Date", type: "date", req: true }
      ]
    }
  ]
};
