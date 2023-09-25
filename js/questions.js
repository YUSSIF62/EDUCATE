// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    "numb": 2,
    "question": "Compilers, Editors software come under which type of software?",
    "answer": "System software",
    "options": [
      "System software",
      "Application software",
      "Scientific software",
      "None of the above"
    ]
  },
  {
    "numb": 3,
    "question": "Software Engineering is defined as systematic, disciplined and quantifiable approach for the development, operation and maintenance of software.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ]
  },
  {
    "numb": 4,
    "question": "RAD Software process model stands for _____ .",
    "answer": "Rapid Application Development.",
    "options": [
      "Rapid Application Development.",
      "Relative Application Development.",
      "Rapid Application Design.",
      "Recent Application Development."
    ]
  },
  {
    "numb": 5,
    "question": "Software project management comprises of a number of activities, which contains _________.",
    "answer": "All mentioned above",
    "options": [
      "Project planning",
      "Scope management",
      "Project estimation",
      "All mentioned above"
    ]
  },
  {
    "numb": 6,
    "question": "COCOMO stands for ______ .",
    "answer": "COnstructive COst MOdel",
    "options": [
      "COnsumed COst MOdel",
      "COnstructive COst MOdel",
      "COmmon COntrol MOdel",
      "COmposition COst MOdel"
    ]
  },
  {
    "numb": 7,
    "question": "Which of the following is not defined in a good Software Requirement Specification (SRS.) document?",
    "answer": "Algorithm for software implementation.",
    "options": [
      "Functional Requirement.",
      "Nonfunctional Requirement.",
      "Goals of implementation.",
      "Algorithm for software implementation."
    ]
  },
  {
    "numb": 8,
    "question": "What is the simplest model of software development paradigm?",
    "answer": "Waterfall model",
    "options": [
      "Spiral model",
      "Big Bang model",
      "V-model",
      "Waterfall model"
    ]
  },
  {
    "numb": 9,
    "question": "Which of the following is the understanding of software product limitations, learning system related problems or changes to be done in existing systems beforehand, identifying and addressing the impact of project on organization and personnel etc?",
    "answer": "System Analysis",
    "options": [
      "Software Design",
      "Feasibility Study",
      "Requirement Gathering",
      "System Analysis"
    ]
  },
  {
    "numb": 10,
    "question": "Which design identifies the software as a system with many components interacting with each other?",
    "answer": "Architectural design",
    "options": [
      "Architectural design",
      "High-level design",
      "Detailed design",
      "Both B & C"
    ]
  },
  {
    "numb": 11,
    "question": "Software consists of ______ .",
    "answer": "Programs + documentation + operating procedures",
    "options": [
      "Set of instructions + operating procedures",
      "Programs + documentation + operating procedures",
      "Programs + hardware manuals",
      "Set of programs"
    ]
  },
  {
    "numb": 12,
    "question": "Which is the most important feature of spiral model?",
    "answer": "Risk management",
    "options": [
      "Quality management",
      "Risk management",
      "Performance management",
      "Efficiency management"
    ]
  },
  {
    "numb": 13,
    "question": "If every requirement stated in the Software Requirement Specification (SRS.) has only one interpretation, SRS is said to be correct _____ .",
    "answer": "Unambiguous",
    "options": [
      "Unambiguous",
      "Consistent",
      "Verifiable",
      "None of the above"
    ]
  },
  {
    "numb": 14,
    "question": "Which is not a step of Requirement Engineering?",
    "answer": "Requirements design",
    "options": [
      "Requirements elicitation",
      "Requirements analysis",
      "Requirements design",
      "Requirements documentation"
    ]
  },
  {
    "numb": 15,
    "question": "FAST stands for ________ .",
    "answer": "Facilitated Application Specification Technique",
    "options": [
      "Functional Application Specification Technique",
      "Fast Application Specification Technique",
      "Facilitated Application Specification Technique",
      "None of the above"
    ]
    // question 16 and 17 are missing
  },
  {
    "numb": 18,
    "question": "If every requirement can be checked by a cost-effective process, then the SRS is _________ .",
    "answer": "Verifiable",
    "options": [
      "Verifiable",
      "Traceable",
      "Modifiable",
      "Complete"
    ]
  },
  {
    "numb": 19,
    "question": "Aggregation represents ______ .",
    "answer": "composed_of relationship",
    "options": [
      "is_a relationship",
      "part_of relationship",
      "composed_of relationship",
      "none of above"
    ]
  },
  {
    "numb": 20,
    "question": "If P is risk probability, L is loss, then Risk Exposure (RE.) is computed as_____ .",
    "answer": "RE = P*L",
    "options": [
      "RE = P/L",
      "RE = P + L",
      "RE = P*L",
      "RE = 2* P *L"
    ]
  },
  {
    "numb": 21,
    "question": "Number of clauses used in ISO 9001 to specify quality system requirements are _____ .",
    "answer": "20",
    "options": [
      "15",
      "20",
      "25",
      "28"
    ]
  },
  {
    "numb": 22,
    "question": "ER model shows the _______ .",
    "answer": "Static view",
    "options": [
      "Static view",
      "Functional view",
      "Dynamic view",
      "All the above"
    ]
  },
  {
    "numb": 23,
    "question": "IEEE 830-1993 is a IEEE recommended standard for _______ .",
    "answer": "Software Requirement Specification",
    "options": [
      "Software Requirement Specification",
      "Software design",
      "Testing",
      "Both (A. and (B)"
    ]
  },
  {
    "numb": 24,
    "question": "One of the fault base testing techniques is ______ .",
    "answer": "Mutation Testing",
    "options": [
      "Unit Testing",
      "Beta Testing",
      "Stress Testing",
      "Mutation Testing"
    ]
  },
  {
    "numb": 25,
    "question": "If the objects focus on the problem domain, then we are concerned with ______.",
    "answer": "Object Oriented Analysis",
    "options": [
      "Object Oriented Analysis",
      "Object Oriented Design",
      "Object Oriented Analysis and Design",
      "None of the above"
    ]
  },
  {
    "numb": 26,
    "question": "In a risk-based approach the risks identified may be used to:\ni. Determine the test technique to be employed\nii. Determine the extent of testing to be carried out\niii. Prioritize testing in an attempt to find critical defects as early as possible.\niv. Determine the cost of the project\nA. ii is True; i, iii, iv and v are False\nB. i,ii,iii are true and iv is false\nC. ii and iii are True; i, iv are False\nD. ii, iii and iv are True; i is false",
    "answer": "i,ii,iii are true and iv is false",
    "options": [
      "ii is True; i, iii, iv and v are False",
      "i,ii,iii are true and iv is false",
      "ii and iii are True; i, iv are False",
      "ii, iii and iv are True; i is false"
    ]
  },
  {
    "numb": 27,
    "question": "Which of the following is not a part of the Test Implementation and Execution Phase?",
    "answer": "Designing the Tests",
    "options": [
      "Creating test suites from the test cases",
      "Executing test cases either manually or by using test execution tools",
      "Comparing actual results",
      "Designing the Tests"
    ]
  },
  {
    "numb": 28,
    "question": "The Test Cases Derived from use cases _______ .",
    "answer": "Are most useful in uncovering defects in the process flows during real world use of the system.",
    "options": [
      "Are most useful in uncovering defects in the process flows during real world use of the system.",
      "Are most useful in uncovering defects in the process flows during the testing use of the system.",
      "Are most useful in covering the defects in the process flows during real world use of the system.",
      "Are most useful in covering the defects at the Integration Level."
    ]
  },
  {
    "numb": 29,
    "question": "What can static analysis NOT find?",
    "answer": "Memory leaks.",
    "options": [
      "The use of a variable before it has been defined.",
      "Unreachable (“dead”. code.",
      "Memory leaks.",
      "Array bound violations."
    ]
  },
  {
    "numb": 30,
    "question": "Which plan describes how the skills and experience of the project team members will be developed ?",
    "answer": "Staff Development Plan",
    "options": [
      "HR Plan",
      "Manager Plan",
      "Team Plan",
      "Staff Development Plan"
    ]
  },
  {
    "numb": 31,
    "question": "Alpha and Beta Testing are forms of _______ .",
    "answer": "Acceptance testing",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System Testing",
      "Unit testing"
    ]
  },
  {
    "numb": 32,
    "question": "The model in which the requirements are implemented by its category is ______ .",
    "answer": "Evolutionary Development Model",
    "options": [
      "Evolutionary Development Model",
      "Waterfall Model",
      "Prototyping",
      "Iterative Enhancement Model"
    ]
  },
  {
    "numb": 33,
    "question": "A COCOMO model is ________ .",
    "answer": "Constructive Cost Estimation Model.",
    "options": [
      "Common Cost Estimation Model.",
      "Constructive Cost Estimation Model.",
      "Complete Cost Estimation Model.",
      "Comprehensive Cost Estimation Model"
    ]
  },
  {
    "numb": 34,
    "question": "SRD stands for _______ .",
    "answer": "Structured Requirements Definition",
    "options": [
      "Software Requirements Definition",
      "Structured Requirements Definition",
      "Software Requirements Diagram",
      "Structured Requirements Diagram"
    ]
  },
  {
    "numb": 35,
    "question": "The tools that support different stages of software development life cycle are called _______ .",
    "answer": "CASE Tools",
    "options": [
      "CASE Tools",
      "CAME tools",
      "CAQE tools",
      "CARE tools"
    ]
  },
  {
    "numb": 36,
    "question": "Which defect amplification model is used to illustrate the generation and detection of errors during the preliminary steps of a software engineering process?",
    "answer": "All mentioned above",
    "options": [
      "Design",
      "Detailed design",
      "Coding",
      "All mentioned above"
    ]
  },
  {
    "numb": 37,
    "question": "Which method is used for evaluating the expression that passes the function as an argument?",
    "answer": "Strict evaluation",
    "options": [
      "Strict evaluation",
      "Recursion",
      "Calculus",
      "Pure functions"
    ]
  },
  {
    "numb": 38,
    "question": "Which factors affect the probable consequences if a risk occur?",
    "answer": "Risk timing",
    "options": [
      "Risk avoidance",
      "Risk monitoring",
      "Risk timing",
      "Contingency planning"
    ]
  },
  {
    "numb": 39,
    "question": "Staff turnover, poor communication with the customer are risks that are extrapolated from past experience are called _____ .",
    "answer": "Predictable risks",
    "options": [
      "Business risks",
      "Predictable risks",
      "Project risks",
      "Technical risks"
    ]
  },
  {
    "numb": 40,
    "question": "Organization can have in-house inspection, direct involvement of users and release of beta version are few of them and it also includes usability, compatibility, user acceptance etC. is called ______ .",
    "answer": "Testing",
    "options": [
      "Task analysis",
      "GUI requirement gathering",
      "GUI design & implementation",
      "Testing"
    ]
  },
  {
    "numb": 41,
    "question": "Which project is undertaken as a consequence of a specific customer request?",
    "answer": "New application development projects",
    "options": [
      "Concept development projects",
      "Application enhancement projects",
      "New application development projects",
      "Application maintenance projects"
    ]
  },
  {
    "numb": 42,
    "question": "Requirement engineering process includes which of these steps?",
    "answer": "All mentioned above",
    "options": [
      "Feasibility study",
      "Requirement Gathering",
      "Software Requirement specification & Validation",
      "All mentioned above"
    ]
  },
  {
    "numb": 43,
    "question": "Software safety is a quality assurance activity that focuses on hazards that may cause an entire system to fall.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ]
  },
  {
    "numb": 44,
    "question": "Give the disadvantages of modularization.",
    "answer": "None of the above",
    "options": [
      "Smaller components are easier to maintain",
      "Program can be divided based on functional aspects",
      "Desired level of abstraction can be brought in the program",
      "None of the above"
    ]
  },
  {
    "numb": 45,
    "question": "Effective software project management focuses on the four P’s. What are those four P’s?",
    "answer": "People, product, process, project",
    "options": [
      "People, performance, payment, product",
      "People, product, process, project",
      "People, product, performance, project",
      "All of the above."
    ]
  },
  {
    "numb": 46,
    "question": "Give the Real-world factors affecting maintenance Cost.",
    "answer": "All mentioned above",
    "options": [
      "As technology advances, it becomes costly to maintain old software.",
      "The standard age of any software is considered up to 10 to 15 years.",
      "Most maintenance engineers are newbie and use trial and error method to rectify problem.",
      "All mentioned above"
    ]
  },
  {
    "numb": 47,
    "question": "Mention any two indirect measures of product.",
    "answer": "Both A and B",
    "options": [
      "Quality",
      "Efficiency",
      "Accuracy",
      "Both A and B"
    ]
  },
  {
    "numb": 48,
    "question": "Which testing is the re-execution of some subset of tests that have already been conducted to ensure the changes that are not propagated?",
    "answer": "Regression testing",
    "options": [
      "Unit testing",
      "Regression testing",
      "Integration testing",
      "Thread-based testing"
    ]
  },
  {
    "numb": 49,
    "question": "State if the following are true for Project Management.\nDuring Project Scope management, it is necessary to –\n1. Define the scope\n2. Decide its verification and control\n3. Divide the project into various smaller parts for ease of management.\n4. Verify the scope",
    "answer": "True",
    "options": [
      "True",
      "False"
    ]
  },
  {
    "numb": 50,
    "question": "Software Requirement Specification (SRS.) is also known as specification of _______",
    "answer": "Black box testing",
    "options": [
      "White box testing",
      "Acceptance testing",
      "Integrated testing",
      "Black box testing"
    ]
  },
  {
    "numb": 51,
    "question": "Which of the following is/are considered stakeholder in the software process?",
    "answer": "All of the above.",
    "options": [
      "Customers",
      "End-users",
      "Project managers",
      "All of the above."
    ]
  },
  {
    "numb": 52,
    "question": "Software components provide interfaces, which can be used to establish communication among different components.",
    "answer": "Yes",
    "options": [
      "Yes",
      "No"
    ]
  },
  {
    "numb": 53,
    "question": "Which SDLC activity does the user initiates the request for a desired software product?",
    "answer": "Communication",
    "options": [
      "Requirement gathering",
      "Implementation",
      "Disposition",
      "Communication"
    ]
  },
  {
    "numb": 54,
    "question": "In Risk management process what makes a note of all possible risks, that may occur in the project?",
    "answer": "Identification",
    "options": [
      "Manage",
      "Monitor",
      "Categorize",
      "Identification"
    ]
  },
  {
    "numb": 55,
    "question": "What is a measure of how well a computer system facilities learning?",
    "answer": "Usability",
    "options": [
      "Usability",
      "Functionality",
      "Reliability",
      "None of the above"
    ]
  },
  {
    "numb": 56,
    "question": "The process to gather the software requirements from Client, Analyze and Document is known as ______ .",
    "answer": "Requirement engineering process",
    "options": [
      "Requirement engineering process",
      "Requirement elicitation process",
      "User interface requirements",
      "Software system analyst"
    ]
  },
  {
    "numb": 57,
    "question": "Refinement is actually a process of elaboration.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ]
  },
  {
    "numb": 58,
    "question": "Who manages the effects of change throughout the software process?",
    "answer": "Software configuration management",
    "options": [
      "Software project tracking and control",
      "Software configuration management",
      "Measurement",
      "Technical reviews"
    ]
  },
  {
    "numb": 59,
    "question": "When elements of module are grouped together that are executed sequentially in order to perform a task, is called ______ .",
    "answer": "Procedural cohesion",
    "options": [
      "Procedural cohesion",
      "Logical cohesion",
      "Temporal cohesion",
      "Co-incidental cohesion"
    ]
  },
  {
    "numb": 60,
    "question": "Which coupling is also known as “Global coupling”?",
    "answer": "Common coupling",
    "options": [
      "Content coupling",
      "Stamp coupling",
      "Data coupling",
      "Common coupling"
    ]
  },
  {
    "numb": 61,
    "question": "What is the detailed sequence of steps that describes the interaction between the user and the application?",
    "answer": "Scenario scripts",
    "options": [
      "Scenario scripts",
      "Support classes",
      "Key classes",
      "Subsystems"
    ]
  },
  {
    "numb": 62,
    "question": "Which risks identify Potential Design, Implementation, Interface, Verification and Maintenance Problems?",
    "answer": "Technical risk",
    "options": [
      "Project risk",
      "Business risk",
      "Technical risk",
      "Schedule risk"
    ]
  },
  {
    "numb": 63,
    "question": "Abbreviate the term BSS.",
    "answer": "Box Structure Specification",
    "options": [
      "Box Structure Specification",
      "Box Statistical Specification",
      "Box Statistical System",
      "Box Structure Sampling"
    ]
  },
  {
    "numb": 64,
    "question": "What is the testing to ensure the WebApp properly interfaces with other applications or databases?",
    "answer": "Interoperability",
    "options": [
      "Compatibility",
      "Interoperability",
      "Performance",
      "Security"
    ]
  },
  {
    "numb": 65,
    "question": "Which Variation control in the context of software engineering involves controlling variation?",
    "answer": "All mentioned above",
    "options": [
      "Process applied",
      "Resources expended",
      "Product quality attributes",
      "All mentioned above"
    ]
  },
  {
    "numb": 66,
    "question": "Which classes represent data stores (e.g., a database. that will persist beyond the execution of the software?",
    "answer": "Persistent classes",
    "options": [
      "Process classes",
      "System classes",
      "Persistent classes",
      "User interface classes"
    ]
  },
  {
    "numb": 67,
    "question": "Abbreviate the term CMMI.",
    "answer": "Capability Maturity Model Integration",
    "options": [
      "Capability Maturity Model Integration",
      "Capability Model Maturity Integration",
      "Capability Maturity Model Instructions",
      "Capability Model Maturity Instructions"
    ]
  },
  {
    "numb": 68,
    "question": "First level of prototype is evaluated by ______ .",
    "answer": "User",
    "options": [
      "Developer",
      "Tester",
      "User",
      "System Analyst"
    ]
  },
  {
    "numb": 69,
    "question": "Which of these software characteristics are used to determine the scope of a software project?",
    "answer": "Information objectives, function, performance",
    "options": [
      "Only performance.",
      "Only context.",
      "Information objectives, function, performance",
      "None of the above."
    ]
  },
  {
    "numb": 70,
    "question": "Which level of sub-system is used of an application?",
    "answer": "Component level",
    "options": [
      "Application level",
      "Component level",
      "Modules level",
      "None of the above"
    ]
  },
  {
    "numb": 71,
    "question": "SDLC is not a well-defined, structured sequence of stages in software engineering to develop the intended software product.",
    "answer": "False",
    "options": [
      "True",
      "False"
    ]
  },
  {
    "numb": 72,
    "question": "In the Empirical Estimation Technique which model is developed by Barry W. Boehm?",
    "answer": "COCOMO",
    "options": [
      "Putnam model",
      "COCOMO",
      "Both A & B",
      "None of the above"
    ]
  },
  {
    "numb": 73,
    "question": "From the following select the correct option that is used to display the available option for selection.",
    "answer": "Radio-Button",
    "options": [
      "Check-box",
      "Text-box",
      "Button",
      "Radio-Button"
    ]
  },
  {
    "numb": 74,
    "question": "CMM model in Software Engineering is a technique of ______ .",
    "answer": "Improve the software process.",
    "options": [
      "Develop the software.",
      "Improve the software process.",
      "Improve the testing process.",
      "All of the above."
    ]
  },
  {
    "numb": 75,
    "question": "Constantine suggests four “organizational paradigms” for software engineering teams. The best project team organizational model to use when handling extremely complex problems is ________ .",
    "answer": "Random paradigm",
    "options": [
      "Random paradigm",
      "Open paradigm",
      "Synchronous paradigm",
      "Closed paradigm"
    ]
  },
  {
    "numb": 76,
    "question": "For the best Software model suitable for the project, in which of the phase the developers decide a roadmap for project plan?",
    "answer": "System Analysis",
    "options": [
      "Software Design",
      "System Analysis",
      "Coding",
      "Testing"
    ]
  },
  {
    "numb": 77,
    "question": "Which is not a step of Requirement Engineering?",
    "answer": "Requirements design",
    "options": [
      "Requirements elicitation",
      "Requirements analysis",
      "Requirements design",
      "Requirements documentation"
    ]
  },
  {
    "numb": 78,
    "question": "Software validation ensures that the software meets the specifications.",
    "answer": "False",
    "options": [
      "True",
      "False"
    ]
  },
  {
    "numb": 79,
    "question": "In the Empirical Estimation Technique which model is developed by Barry W. Boehm?",
    "answer": "COCOMO",
    "options": [
      "Putnam model",
      "COCOMO",
      "Both A & B",
      "None of the above"
    ]
  },
  {
    "numb": 80,
    "question": "From the following select the correct option that is used to display the available option for selection.",
    "answer": "Radio-Button",
    "options": [
      "Check-box",
      "Text-box",
      "Button",
      "Radio-Button"
    ]
  },
  {
    "numb": 81,
    "question": "CMM model in Software Engineering is a technique of ______ .",
    "answer": "Improve the software process.",
    "options": [
      "Develop the software.",
      "Improve the software process.",
      "Improve the testing process.",
      "All of the above."
    ]
  },
  {
    "numb": 82,
    "question": "For the best Software model suitable for the project, in which of the phase the developers decide a roadmap for project plan?",
    "answer": "System Analysis",
    "options": [
      "Software Design",
      "System Analysis",
      "Coding",
      "Testing"
    ]
  },
  {
    "numb": 83,
    "question": "Which is not a step of Requirement Engineering?",
    "answer": "Requirements design",
    "options": [
      "Requirements elicitation",
      "Requirements analysis",
      "Requirements design",
      "Requirements documentation"
    ]
  },
  {
    "numb": 84,
    "question": "Software validation ensures that the software meets the specifications.",
    "answer": "False",
    "options": [
      "True",
      "False"
    ]
  },
  {
    "numb": 85,
    "question": "Which of the level carries out goal, objective, work tasks, work products and other activities of the software process?",
    "answer": "Performed",
    "options": [
      "Performed",
      "INCOMPLETE",
      "Optimized",
      "Quantitatively Managed"
    ]
  },
  {
    "numb": 86,
    "question": "If you have no clue of how to improve the process for the quality software which model is used?",
    "answer": "A Staged model",
    "options": [
      "A Continuous model",
      "A Staged model",
      "Both A & B",
      "None of the above"
    ]
  },
  {
    "numb": 87,
    "question": "In Software validation, requirements can be checked against following conditions:",
    "answer": "True",
    "options": [
      "True",
      "False"
    ]
  },
  {
    "numb": 88,
    "question": "In OOD, the attributes(data variables. and methods( operation on the datA. are bundled together is called ______ .",
    "answer": "Encapsulation",
    "options": [
      "Classes",
      "Objects",
      "Encapsulation",
      "Inheritance"
    ]
  },
  {
    "numb": 89,
    "question": "Which design defines the logical structure of each module and their interfaces that is used to communicate with other modules?",
    "answer": "Detailed design",
    "options": [
      "High-level designs",
      "Architectural designs",
      "Detailed design",
      "All mentioned above"
    ]
  },
  {
    "numb": 90,
    "question": "Which tools are used in Implementation, Testing and Maintenance?",
    "answer": "Lower case tools",
    "options": [
      "Upper case tools",
      "Lower case tools",
      "Integrated case tools",
      "None of the above"
    ]
  },
  {
    "numb": 91,
    "question": "Which tools are used for project planning, cost, effort estimation, project scheduling and resource planning?",
    "answer": "Project management tools",
    "options": [
      "Process modeling tools",
      "Project management tools",
      "Diagram tools",
      "Documentation tools"
    ]
  },
  {
    "numb": 92,
    "question": "Which design deals with the implementation part in which it shows a system and its sub-systems in the previous two designs?",
    "answer": "Detailed design",
    "options": [
      "Architectural design",
      "High-level design",
      "Detailed design",
      "Both A & B"
    ]
  },
  {
    "numb": 93,
    "question": "Modularization is a technique to divide a software system into multiple discrete and independent modules.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ]
  },
  {
    "numb": 94,
    "question": "What is the project and process level that provides the Quality Metric benefit?",
    "answer": "Defect removal efficiency",
    "options": [
      "Defect amplification",
      "Defect removal efficiency",
      "Measuring quality",
      "All mentioned above"
    ]
  },
  {
    "numb": 95,
    "question": "Cohesion metrics and coupling metrics are metrics in which level of design?",
    "answer": "Component-level design",
    "options": [
      "User interface design",
      "Pattern-based design",
      "Architectural design",
      "Component-level design"
    ]
  },
  {
    "numb": 96,
    "question": "Which condition defines the circumstances for a particular operation is valid?",
    "answer": "Precondition",
    "options": [
      "Postcondition",
      "Precondition",
      "Invariant",
      "None of the above"
    ]
  },
  {
    "numb": 97,
    "question": "Which requirement validation technique uses formal mathematical techniques?",
    "answer": "Proof of correctness",
    "options": [
      "Proof of correctness",
      "Error guessing",
      "Change analysis",
      "Inspection"
    ]
  },
  {
    "numb": 98,
    "question": "Which is the sub-process of requirement engineering in which each requirement is checked to find out the errors present or not?",
    "answer": "Requirements validation",
    "options": [
      "Requirement gathering",
      "Requirement documentation",
      "Requirements validation",
      "All of the above"
    ]
  },
  {
    "numb": 99,
    "question": "Which of the following is not a part of the project manager’s role in software project management?",
    "answer": "Creating software",
    "options": [
      "Initiating the project",
      "Planning the project",
      "Executing the project plan",
      "Creating software"
    ]
  },
  {
    "numb": 100,
    "question": "Risk is defined as a possibility of ________ .",
    "answer": "Loss",
    "options": [
      "Profit",
      "Project",
      "Software",
      "Loss"
    ]
  } 
  
  
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];