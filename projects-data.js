const projects = {
  zatca: {
    title: "ZATCA / FBR e-Invoicing Integration",
    status: "Phase 2 – Completed & Live in Production ✅",
    technologies: [
      "SAP BTP – CPI, ABAP Proxies, SOAP Web Services, eDocument Framework, Fatoora Portal",
    ],
    problem:
      "Saudi Arabia (ZATCA) Phase 2 required strict e-invoicing compliance. Manual handling was no longer viable, so the client needed real-time integration between SAP and the tax authority portal to ensure compliance and business continuity.",
    role:
      "As SAP ABAP & CPI Consultant, I designed and implemented the full Phase 2 rollout in production, covering CPI flows, ABAP proxies, certificate-based security, and eDocument framework integration.",
    solution: [
      "Configured secure SSL connectivity and certificate management in STRUST for production tenants",
      "Set up CPI tenants (test & production) and deployed credentials (Basic & OAuth2) for authentication",
      "Copied and configured standard SAP integration flows for ZATCA (Invoice Clearance, Invoice Reporting, CSID Operations, etc.)",
      "Developed ABAP Proxy implementations and logical ports in SOAMANAGER for SAP ↔ CPI communication",
      "Enabled real-time submission, monitoring, and error handling via SAP eDocument Cockpit",
      "Implemented OTP-based authentication, digital signatures, and certificate chain validation"
    ],
impact: [
  "Achieved successful go-live with ZATCA Phase 2, now stable and running in production",
  "Eliminated manual invoice submissions, reducing processing errors by over 90%",
  "Ensured full legal compliance with Saudi Fatoora e-invoicing regulations",
  "Delivered robust monitoring and error handling with complete audit traceability"
],

    images: Array.from({ length: 11 }, (_, i) => `zatca/ZATCA_${i + 1}.png`)
  },

  fbr: {
    title: "FBR e-Invoicing Integration (Pakistan)",
    status: "Custom Solution – Live in Production ✅",
    technologies: [
      "SAP BTP – CPI",
      "SAP RAP (Restful ABAP Programming Model)",
      "REST API",
      "SAP ERP"
    ],
    problem:
      "The Federal Board of Revenue (FBR) in Pakistan mandated e-invoicing compliance, but unlike ZATCA, no standard SAP integration package was available. The client required a secure and automated way to push invoices from SAP ERP directly to the FBR portal in real time.",
    role:
      "As SAP Technical Consultant, I designed and built a custom end-to-end integration solution using SAP CPI and RAP, ensuring compliance and smooth invoice posting.",
    solution: [
      "Developed a custom iFlow in SAP CPI to transform and transmit invoices from SAP ERP to the FBR REST APIs",
      "Built RAP applications in ABAP to trigger invoice submission events from SAP ERP",
      "Implemented secure authentication and payload mapping according to FBR’s schema",
      "Designed reprocessing and monitoring capabilities for failed or rejected invoices",
      "Integrated response handling to update SAP ERP with FBR invoice numbers and statuses"
    ],
impact: [
  "Achieved full FBR e-invoicing compliance with a custom solution, eliminating the need for external middleware",
  "Automated seamless invoice posting from SAP ERP directly to the FBR portal",
  "Eliminated manual submissions, ensuring accurate and real-time tax reporting",
  "Enabled full transparency and lifecycle tracking of invoices via RAP-based applications"
],

    images: Array.from({ length: 9 }, (_, i) => `fbr/fbr_${i + 1}.png`)
  },


ebiz: {
  title: "EBizCharge Order-to-Cash Integration",
  status: "Completed ✅",
  technologies: [
    "SAP S/4HANA",
    "ABAP Enhancements",
    "SOAP Web Services",
    "BAPI / BADI / BDC",
    "Module Pools",
    "Order-to-Cash"
  ],
  problem:
    "The client required seamless integration of the EBizCharge payment gateway with their full SAP Order-to-Cash cycle. Manual payment handling caused delays, reconciliation errors, and compliance risks.",
  role:
    "As SAP ABAP Consultant, I designed and implemented a full-stack integration using SOAP web services and custom ABAP development across the O2C lifecycle.",
  solution: [
    "Integrated EBizCharge SOAP Web Services with SAP SD & FI processes",
    "Enhanced Customer Master, Sales Orders (VA01), Deliveries, Invoices (VF01), Returns, and Credit Memos with payment options",
    "Developed ABAP enhancements and module pools to embed secure payment actions (AuthOnly, Hold, Charge, Capture, Refunds)",
    "Used BAPIs, BADIs, and BDC programs to automate payment postings and ensure smooth transaction flow",
    "Built middleware-enabled ABAP proxies for real-time transaction exchange with EBizCharge"
  ],
  impact: [
    "Enabled secure credit card & eCheck processing fully inside SAP transactions",
    "Streamlined the entire O2C cycle by embedding payments directly in SAP",
    "Reduced manual reconciliation and error rates significantly",
    "Improved compliance and provided full auditability of all payment events",
    "Delivered a robust, production-ready solution now live with end users"
  ],
  images: Array.from({ length: 20 }, (_, i) => `ebizcharge/ebizcharge_ss_${i + 1}.png`)
},


timetracks: {
  title: "TimeTracks – SAP HCM Integration",
  status: "Completed ✅",
  technologies: [
    "SAP HCM",
    "SOAP Web Services",
    "ABAP Enhancements",
    "BAPI / BADI",
    "Proxy Objects",
    "Payroll Integration"
  ],
  problem:
    "To avoid costly SAP user licenses for each employee, the client adopted TimeTracks, a 3rd-party web-based attendance app. However, data exchange with SAP HCM was manual and error-prone, causing payroll delays, mismatched records, and compliance issues.",
  role:
    "As SAP Technical Consultant, I developed a complete SOAP-based integration between SAP HCM and TimeTracks, ensuring secure and automated bidirectional data flow.",
  solution: [
    "Exposed employee master data from SAP HCM to TimeTracks using custom SOAP Web Services",
    "Consumed TimeTracks SOAP APIs in SAP via ABAP proxy classes for attendance and timesheet data",
    "Enhanced payroll processes with BADIs and BAPIs for automated time validation and posting",
    "Built error-handling and reprocessing framework to ensure reliability of data syncs",
    "Optimized ABAP logic for bulk loads and delta updates to handle high employee volumes"
  ],
  impact: [
    "Automated bidirectional integration eliminated manual data uploads",
    "Reduced payroll errors by over 80% through accurate time data synchronization",
    "Accelerated payroll cycle, enabling on-time salary processing",
    "Ensured compliance with labor regulations through auditable and reliable data flow",
    "Delivered a scalable integration framework still live in production"
  ],
  images: Array.from({ length: 7 }, (_, i) => `timetracks/timetracks_webapp_${i + 1}.png`)
},


mobile: {
  title: "Mobile App Integration with SAP REFX",
  status: "Completed ✅",
  technologies: [
    "SAP REFX",
    "ABAP REST APIs",
    "Mobile Backend",
    "JSON Data Services"
  ],
  problem:
    "The client required mobile access to SAP REFX data (contracts, assets, property details) for field staff. However, SAP GUI was desktop-only and lacked flexibility, while no standard APIs existed for REFX, creating a mobility and usability gap.",
  role:
    "As SAP Technical Consultant, I designed and implemented secure REST APIs in ABAP to expose SAP REFX data and processes for seamless consumption by 3rd-party mobile applications.",
  solution: [
    "Developed ABAP classes to expose SAP REFX contracts, assets, and property data as REST APIs",
    "Designed JSON payload structures optimized for mobile performance",
    "Added filtering, pagination, and caching logic to handle large data sets efficiently",
    "Collaborated with mobile app team to integrate APIs and validate end-to-end workflows"
  ],
  impact: [
    "Empowered field staff with secure mobile access to SAP REFX data",
    "Reduced reliance on SAP GUI, boosting productivity and user adoption",
    "Delivered real-time visibility of property and contract information outside SAP",
    "Established a reusable API framework to accelerate future mobile integrations"
  ],
  images: Array.from({ length: 10 }, (_, i) => `mobile/refx_mblapp_${i + 1}.png`)
},



  rap: {
    title: "RAP OData Projects",
    status: "Completed ✅",
    technologies: ["ABAP RAP Model", "OData V4", "Fiori Elements", "S/4HANA 2023"],
    purpose:
      "Build modern, scalable OData services using the ABAP RAP model for consumption in Fiori apps.",
    solution: [
      "Created CDS Views and behavior definitions for RAP-based services",
      "Implemented managed and unmanaged scenarios",
      "Integrated RAP OData with Fiori Elements templates",
      "Ensured compliance with Clean Core principles"
    ],
    images: Array.from({ length: 12 }, (_, i) => `rap/rap_cds_${i + 1}.png`)
  },

  abap: {
    title: "ABAP Reports & Enhancements",
    status: "Ongoing 🟡",
    technologies: ["Classical Reports", "ALV Reports", "CDS Views", "AMDP", "BADI & User Exits"],
    purpose:
      "Deliver custom reporting and system enhancements in SAP to meet specific business requirements.",
    solution: [
      "Developed classical and ALV-based custom reports",
      "Built CDS Views for analytical reporting in S/4HANA",
      "Implemented AMDP methods for HANA-optimized logic",
      "Extended standard SAP behavior using BADI/User Exits",
      "Created custom WRICEF objects for different business modules"
    ],
    images: Array.from({ length: 5 }, (_, i) => `abap/abap_${i + 1}.png`)
  }
};


