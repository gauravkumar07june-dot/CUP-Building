// CUP Building Issue Register - settings. This is the only file you need to edit.
window.CUP_CONFIG = {
  // true  = DEMO: no sign-in, data is kept only in the browser of the person using it (for trying the site).
  // false = LIVE: Microsoft sign-in, data saved in your company SharePoint site.
  demo: true,

  // From your IT team (Entra ID / Azure AD app registration)
  tenantId: "PASTE-TENANT-ID-HERE",
  clientId: "PASTE-CLIENT-ID-HERE",

  // The SharePoint site where the register is stored.
  // Example: site https://contoso.sharepoint.com/sites/CUPProject
  //   siteHostname: "contoso.sharepoint.com", sitePath: "/sites/CUPProject"
  siteHostname: "yourcompany.sharepoint.com",
  sitePath: "/sites/YourSiteName",

  // Company email IDs of the people who can issue the FINAL DECISION.
  // Leave empty [] to let every signed-in user do it.
  managers: [],

  // CUP completion target (YYYY-MM-DD)
  targetDate: "2026-12-31",

  departments: ["HVAC", "PHE", "FPS", "FMCS I&C", "FMCS PLC & RIO", "Electrical MV", "Electrical LV", "Chiller",
    "Cooling Tower", "CDA", "LSS", "Security System", "IT & Telecom", "Elevator", "UG & Trestle", "Civil & Structure",
    "Architecture", "Design / Engineering", "Procurement", "Planning", "QA/QC", "EHS", "Client / Consultant", "Management"]
};
