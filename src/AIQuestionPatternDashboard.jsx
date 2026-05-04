import React, { useMemo, useState } from "react";

const metadata = {
  "courseCode": "CEP 101 / CEP 0711",
  "courseName": "Chemical Process Technology",
  "institution": "Shahjalal University of Science and Technology (SUST)",
  "department": "Industrial and Production Engineering + Chemical Engineering and Polymer Science question bank sources",
  "exam": "CEP 101 / CEP 0711 Question Bank Pattern Analysis",
  "artifactNote": "Exact frequency = same normalized question wording. Similar frequency = same repeated subtopic/pattern across the bank.",
  "years": [
    "Older",
    "2010",
    "2012",
    "2013",
    "2015",
    "2016",
    "2017-18 TT",
    "2018",
    "2021",
    "2022",
    "2023",
    "2024"
  ],
  "sections": [
    "Part A",
    "Part B",
    "Term Tests"
  ],
  "answerPattern": "Most full papers use separate Part A and Part B scripts; the 2024 paper contains OR choices and explicit subquestion marks.",
  "marksPattern": "Per-question marks are mostly unavailable in older papers; 2024 subquestion marks are captured where printed."
};

const questions = [
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "Clarify the terms \"unit process\" and \"unit operation\".",
    "topic": "Process Technology Basics",
    "subtopic": "Unit process, unit operation and process terms",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Paper manufacturing from woody and non-woody biomass involves several unit process/unit operation steps. Illustrate such steps in proper sequence with their usual functions.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "Distinguish among the Kraft and Sulfite pulping processes in terms of reaction routes, composition of cooking liquor, and operating conditions.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "Clarify the terms cellulose, hemicellulose, and lignin.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Cellulose, hemicellulose and lignin",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "Cooking liquor plays a major role in chemical pulping processes. Explain: (i) specific functions of cooking liquor in Kraft/Sulfite pulping; (ii) recovery of cooking liquor from Kraft black liquor.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "Why is beating of pulp necessary? Fourdrinier machine produces finished paper with the desired qualities at optimum operating conditions. Explain the working principle of the Fourdrinier machine.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Beating, Jordan engine and Beater/Hollander",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "Distinguish between soap and detergents.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap vs detergent difference",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 4,
    "frequencyLabel": "Exact 1 / Similar 4"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "Glycerin formation bottlenecks soap manufacturing in batch mode. How can you alleviate this and recover high-gravity glycerin at a higher rate? Explain with a relevant process diagram.",
    "topic": "Soap & Detergent",
    "subtopic": "Glycerin recovery from spent lye",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "Cement clinker typically forms in the rotary kiln during the manufacturing process. Specify the physical and chemical phenomena occurring in the rotary kiln with approximate temperature ranges.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "What is the main composition of ordinary Portland cement? Illustrate their usual functions.",
    "topic": "Cement Technology",
    "subtopic": "Cement composition, compounds and raw materials",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "Distinguish between the wet and dry processes for manufacturing cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement wet/dry process and process selection",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "Several steps are involved in the production of base lube oil from petroleum crude oil. Illustrate them in proper sequence and mention their functions.",
    "topic": "Lubricants",
    "subtopic": "Lubricant manufacturing and base oil selection",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 4,
    "frequencyLabel": "Exact 1 / Similar 4"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "What are the factors affecting the selection of cement manufacturing process?",
    "topic": "Cement Technology",
    "subtopic": "Cement wet/dry process and process selection",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "Briefly describe the manufacturing process of cement using dry and wet process.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "What are the functions of lubricant in an engine? Discuss lubricating oil additives and their mechanisms.",
    "topic": "Lubricants",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "Write short notes on: (i) biodegradability of detergent; (ii) builders and additives used in detergent; (iii) deinking.",
    "topic": "Soap & Detergent",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2023",
    "exam": "1. Final Examination 2023 (Session 2022-2023)",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "Explain the cleaning action of soap.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap cleansing action, micelles and hard water",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 9,
    "frequencyLabel": "Exact 1 / Similar 9"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "Clarify the following terms: (i) process; (ii) process technology; (iii) unit operation; (iv) waste product; and (v) by-products.",
    "topic": "Process Technology Basics",
    "subtopic": "Unit process, unit operation and process terms",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Briefly explain the operating mechanism, with an appropriate sketch, of the bag filter and electrostatic precipitator used to control air pollution during Portland cement manufacturing and ensure environmental safety.",
    "topic": "Air Pollution & Environment",
    "subtopic": "Air-pollution control in cement plants",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 1,
    "frequencyLabel": "Exact 1 / Similar 1"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "Apart from natural gas, what might be the other possible alternative raw materials for ammonia production in the context of Bangladesh? Give reasons for your answer.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "Briefly explain the paper production process with appropriate sketches from hardwood or softwood which generates black liquor. Also explain the raw-material recovery process from black liquor to improve the profitability of paper production.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "Granular, powder, and liquid forms of fertilizers are available in the market. Normal rice production in the Sylhet region needs nitrogen fertilizer. A farmer asks your advice for choosing fertilizer during the rainy season. Which one do you suggest and why?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "Write down the functions of five additives used to improve lubricant quality and explain their working mechanisms to improve lubricity.",
    "topic": "Lubricants",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "Discuss briefly, with a flow diagram, the preparation of detergent by the Alfol process.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent manufacturing - ABS/Alfol/anionic",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "Explain the following terms: (i) cellulose; (ii) hemicellulose; and (iii) lignin.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Cellulose, hemicellulose and lignin",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "Briefly explain the cement manufacturing process with proper diagram, operating conditions, and reactions for the mixture of argillaceous and calcareous materials containing about 47 wt.% moisture in Bangladesh in a sustainable way.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "Distinguish between cationic, anionic, nonionic, and amphoteric surfactants.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent classification, surfactants and formulation",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "\"Use of lubricants improves engine lifetime, production rate, and profitability of an industry\" - justify the statement from the application point of view in a metal processing industry.",
    "topic": "Lubricants",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "Why is Mg-based sulfite pulping more suitable than other bases?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Mg-based sulfite pulping suitability",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 2 / Similar 5"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "Write short notes on the applications of: (i) quick setting cement; (ii) high alumina cement; (iii) blast furnace cement; (iv) calcium chloride cement; and (v) expanding cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement types, OPC/PCC and applications",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "Differentiate between solid and liquid lubricants. Which one do you support for operation of a lathe machine and why?",
    "topic": "Lubricants",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "Why is bark not used in the pulping process? How can value be added to bark?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Bark, debarking and waste paper reuse",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 3,
    "frequencyLabel": "Exact 1 / Similar 3"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "Write down the importance of primary and secondary reformers to generate the main reacting materials for producing urea from natural gas in a sustainable way.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2022",
    "exam": "2. Final Examination 2022",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "\"Setting time is one of the most important properties for selecting cement to make a new infrastructure\" - briefly explain the statement.",
    "topic": "Cement Technology",
    "subtopic": "Cement setting and hardening",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "What is lubricant? What are the main desired properties of a lubricant?",
    "topic": "Lubricants",
    "subtopic": "Lubricant definition, functions and properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "What is viscosity index (VI)? What is the significance of viscosity VI in the lubricant industry?",
    "topic": "Lubricants",
    "subtopic": "Lubricant viscosity index and testing properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "What factors are considered in the selection of lubricants for industrial equipment? Briefly discuss.",
    "topic": "Lubricants",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "What are the functions of suds regulator and builders in detergent formulation?",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent biodegradability, builders, suds and environment",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "Briefly mention the cleansing action of soap and detergent.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap cleansing action, micelles and hard water",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 9,
    "frequencyLabel": "Exact 1 / Similar 9"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "Discuss briefly, with a flow diagram, a continuous soap manufacturing process.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "What are the essential requirements of good quality soap?",
    "topic": "Soap & Detergent",
    "subtopic": "Soap raw materials, additives and quality",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "What is spent lye? How is glycerine manufactured from spent lye?",
    "topic": "Soap & Detergent",
    "subtopic": "Glycerin recovery from spent lye",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "Describe the manufacturing process of Portland cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "10",
    "marks": null,
    "text": "What is meant by hardening and setting of cement?",
    "topic": "Cement Technology",
    "subtopic": "Cement setting and hardening",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "11",
    "marks": null,
    "text": "Write down the classification of cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement types, OPC/PCC and applications",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part A",
    "q": "12",
    "marks": null,
    "text": "Name some cement factories of Bangladesh.",
    "topic": "Cement Technology",
    "subtopic": "Cement gypsum, additives, naming and factories",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "Briefly describe the manufacturing process of TSP with flow diagram.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "SSP, TSP and phosphate fertilizers",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "Distinguish between super phosphate and Triple Super Phosphate.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "SSP, TSP and phosphate fertilizers",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 2 / Similar 6"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "Name some fertilizer factories of Bangladesh.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "What is a nitrogenous fertilizer? In what aspect does it differ from a phosphate fertilizer?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "What are the significances of using filling, sizing, and coloring materials in paper manufacturing process?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Paper additives, fillers, sizing and deinking",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 2 / Similar 2"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "Why is Mg-based sulfite pulping more suitable than other bases?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Mg-based sulfite pulping suitability",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 2 / Similar 5"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "What is black liquor? Describe the steps and reactions involved in recovery of black liquor.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Black liquor and chemical recovery",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "Distinguish between kraft and sulphite pulp.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "Explain the manufacturing process of urea from its raw materials.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "10",
    "marks": null,
    "text": "What are the basic raw materials for NH3 synthesis? What are their main sources?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2021",
    "exam": "3. Final Examination 2021",
    "section": "Part B",
    "q": "11",
    "marks": null,
    "text": "Explain Le Chatelier’s principle in NH3 manufacturing by the Haber synthetic process.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "Write down urea synthesis reaction mentioning whether it is endothermic or exothermic.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Why is methanation required in ammonia synthesis? Write down reactions occurring in the methanator.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "Describe how a plant receives nutrients from urea.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 2 / Similar 14"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "Point out the favorable conditions for good yield of urea. Mention the names and locations of urea fertilizer factories in Bangladesh.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 2 / Similar 14"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "Distinguish between soap and detergent.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap vs detergent difference",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 4,
    "frequencyLabel": "Exact 2 / Similar 4"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "Classify detergent with examples.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent classification, surfactants and formulation",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "Describe the continuous process of soap manufacturing with a simplified diagram and relevant reactions.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "Classify the raw materials and write down the ingredients of cement with proportions.",
    "topic": "Cement Technology",
    "subtopic": "Cement composition, compounds and raw materials",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "What are the differences between wet process and dry process for manufacturing Portland cement?",
    "topic": "Cement Technology",
    "subtopic": "Cement wet/dry process and process selection",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "10",
    "marks": null,
    "text": "What is clinker? Sketch and describe the rotary cement kiln mentioning the reactions at different zones.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part A",
    "q": "11",
    "marks": null,
    "text": "What is gypsum? Why is it used in cement?",
    "topic": "Cement Technology",
    "subtopic": "Cement gypsum, additives, naming and factories",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "How is glycerine recovered from spent lye?",
    "topic": "Soap & Detergent",
    "subtopic": "Glycerin recovery from spent lye",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "Write down the names of three industries and their raw materials for manufacturing cement and paper in Bangladesh.",
    "topic": "Cement Technology",
    "subtopic": "Bangladesh industry context",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "What is lubricant? Write down the main functions of lubricants.",
    "topic": "Lubricants",
    "subtopic": "Lubricant definition, functions and properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "Define: (i) viscosity index; (ii) flash point; and (iii) pour point.",
    "topic": "Lubricants",
    "subtopic": "Lubricant viscosity index and testing properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "Define black liquor. Describe chemical recovery from black liquor with reactions and the functional role of various units.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Black liquor and chemical recovery",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "Draw the flow diagram of paper manufacturing from pulp.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "Write the functions of: (i) Jordan engine; and (ii) Beater or Hollander.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Beating, Jordan engine and Beater/Hollander",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "Draw the flow diagram and discuss the urea production process from liquid ammonia and CO2.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "What raw materials are used for production of ammonia? Describe the removal technique for sulphur compounds from raw materials.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2018",
    "exam": "4. Final Examination 2018 (Session 2017-18)",
    "section": "Part B",
    "q": "10",
    "marks": null,
    "text": "What are nitrogenous fertilizers? Mention two examples.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "What are the components of Portland cement? Why is it named Portland cement?",
    "topic": "Cement Technology",
    "subtopic": "Cement gypsum, additives, naming and factories",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Why is gypsum used in Portland cement? What are the additives commonly used in Portland cement?",
    "topic": "Cement Technology",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "What is clinker? Describe how it can be manufactured using wet process.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 2 / Similar 16"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "Distinguish between soap and detergent.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap vs detergent difference",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 4,
    "frequencyLabel": "Exact 2 / Similar 4"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "Describe the cleaning action of soap.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap cleansing action, micelles and hard water",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 9,
    "frequencyLabel": "Exact 1 / Similar 9"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "Describe the manufacturing process of soap with a simplified diagram.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "Briefly describe the granular urea manufacturing process from NH3 and CO2.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 2 / Similar 21"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "What is biuret? Write the factors influencing biuret formation.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Biuret formation, factors and disadvantages",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 2 / Similar 7"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "What do you mean by prill urea?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Granular and prill urea comparison",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "Distinguish between super phosphate and triple super phosphate.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "SSP, TSP and phosphate fertilizers",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 2 / Similar 6"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "Why is methanation required in ammonia synthesis? Write down reactions occurring in methanator.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "Describe how a plant receives nutrients from urea.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 2 / Similar 14"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "Point out the favorable conditions for good yield of urea. Mention the names and locations of urea fertilizer factories in Bangladesh.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 2 / Similar 14"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "Mention the role of additives used in detergent with examples.",
    "topic": "Soap & Detergent",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "What is lubricant? State the functions of lubricant.",
    "topic": "Lubricants",
    "subtopic": "Lubricant definition, functions and properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "Explain the mechanism of lubricant.",
    "topic": "Lubricants",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "Describe the manufacturing process of pulp.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 2 / Similar 13"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "Distinguish kraft and sulphite pulp.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 2 / Similar 12"
  },
  {
    "year": "2016",
    "exam": "5. Semester Examination 2016",
    "section": "Part B",
    "q": "10",
    "marks": null,
    "text": "What do you mean by black liquor? How can black liquor be removed?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Black liquor and chemical recovery",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 2 / Similar 7"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "What are pulp and secondary pulp? Differentiate among three main pulping processes.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Briefly describe the Kraft pulping process with a flow diagram.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "\"Sulfite pulping process can be used to produce good quality paper, but its application steadily diminishes\" - justify the statement.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "Discuss the cleansing action of soap.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap cleansing action, micelles and hard water",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 9,
    "frequencyLabel": "Exact 1 / Similar 9"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "What additives are used in soap? State the role of binding materials and filler on the properties of soap.",
    "topic": "Soap & Detergent",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "Describe the glycerin recovery process from spent lye.",
    "topic": "Soap & Detergent",
    "subtopic": "Glycerin recovery from spent lye",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 2 / Similar 6"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "What is lubricant? What are the main desired properties of lubricants?",
    "topic": "Lubricants",
    "subtopic": "Lubricant definition, functions and properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "Briefly describe the manufacturing process of lubricants.",
    "topic": "Lubricants",
    "subtopic": "Lubricant manufacturing and base oil selection",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 4,
    "frequencyLabel": "Exact 1 / Similar 4"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "Which hydrocarbon classes would you select as base oil for lubricant production and why?",
    "topic": "Lubricants",
    "subtopic": "Lubricant manufacturing and base oil selection",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 4,
    "frequencyLabel": "Exact 1 / Similar 4"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part A",
    "q": "10",
    "marks": null,
    "text": "What is viscosity index (VI)? What is the significance of VI in lubricant industry?",
    "topic": "Lubricants",
    "subtopic": "Lubricant viscosity index and testing properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "What is fertilizer? What is the most important fertilizer and why?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "What is Benfield solution? Why is it used in ammonia synthesis?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 2 / Similar 21"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "Briefly describe the ammonia synthesis process with flow diagram.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Problem/Diagram",
    "exactFrequency": 2,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 2 / Similar 21"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "What is biuret? When is it formed?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Biuret formation, factors and disadvantages",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "Distinguish between ordinary Portland cement and Portland composite cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement types, OPC/PCC and applications",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 2 / Similar 5"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "Describe the manufacturing process of Portland cement mentioning the reactions occurring in the rotary kiln.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "Explain the hardening phenomenon of Portland cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement setting and hardening",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 2 / Similar 7"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "What are the significances of using filling, sizing, and coloring materials in paper manufacturing process?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Paper additives, fillers, sizing and deinking",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 2 / Similar 2"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "What are the chemical reactions involved in urea manufacturing? Mention favorable conditions for good yield of urea.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "10",
    "marks": null,
    "text": "What factors are considered during the selection of manufacturing process of cement?",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2015",
    "exam": "6. Semester Examination 2015",
    "section": "Part B",
    "q": "11",
    "marks": null,
    "text": "Why is Mg-based sulfite pulping technically more acceptable than other bases?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Mg-based sulfite pulping suitability",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "Distinguish between ordinary Portland cement and Portland composite cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement types, OPC/PCC and applications",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 2 / Similar 5"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Explain the hardening phenomenon of Portland cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement setting and hardening",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 2 / Similar 7"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "What are the chemical reactions occurring at different temperatures in the Portland cement manufacturing process?",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "Write down the strength contribution of various compounds in Portland cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement composition, compounds and raw materials",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "Discuss the cleansing mechanism of soap.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap cleansing action, micelles and hard water",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 9,
    "frequencyLabel": "Exact 1 / Similar 9"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "Write down the difference between soap and detergent.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap vs detergent difference",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 4,
    "frequencyLabel": "Exact 1 / Similar 4"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "Describe the glycerin recovery process from spent lye.",
    "topic": "Soap & Detergent",
    "subtopic": "Glycerin recovery from spent lye",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 2 / Similar 6"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "Why is desulphurization of natural gas required in ammonia synthesis? Describe the desulphurization process of natural gas.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "What is Benfield solution? Why is it used in ammonia synthesis?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 2 / Similar 21"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part A",
    "q": "10",
    "marks": null,
    "text": "Briefly describe the ammonia synthesis process with flow diagram.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Problem/Diagram",
    "exactFrequency": 2,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 2 / Similar 21"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "What chemical reactions are involved in urea manufacturing? Mention favorable conditions for good yield of urea.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "What is biuret? Write the factors influencing biuret formation.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Biuret formation, factors and disadvantages",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 2 / Similar 7"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "State the action of urea as fertilizer.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "Mention the names and locations of urea fertilizer factories in Bangladesh.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "How can the biodegradability of detergent be improved? Mention the functions of builders and suds regulator in detergent.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent biodegradability, builders, suds and environment",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "Write down the reactions occurring in anionic detergent manufacturing process.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent manufacturing - ABS/Alfol/anionic",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "Define and classify lubricant.",
    "topic": "Lubricants",
    "subtopic": "Lubricant definition, functions and properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "What are the effects of contaminants on lubricants? How can they be minimized?",
    "topic": "Lubricants",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "Describe the manufacturing process of pulp.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 2 / Similar 13"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "10",
    "marks": null,
    "text": "Distinguish kraft and sulphite pulp.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 2 / Similar 12"
  },
  {
    "year": "2015",
    "exam": "7. B.Sc. Engineering Examination 2015",
    "section": "Part B",
    "q": "11",
    "marks": null,
    "text": "What do you mean by black liquor? How can black liquor be removed?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Black liquor and chemical recovery",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 2 / Similar 7"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "Briefly describe the continuous process for soap manufacturing.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 2 / Similar 10"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Briefly describe the glycerin recovery process with associated operations in the soap industry.",
    "topic": "Soap & Detergent",
    "subtopic": "Glycerin recovery from spent lye",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "State the types of detergent with suitable examples.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent classification, surfactants and formulation",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "What are the raw materials and additives of cement?",
    "topic": "Cement Technology",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "Why is dry process preferred over wet process for manufacturing clinker?",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 2 / Similar 16"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "What is clinker? Describe how it can be manufactured using wet process.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 2 / Similar 16"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "What is pulping? Compare the three types of chemical pulping.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "Describe the manufacturing process of paper by Fourdrinier machine.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "Why are additives used in paper manufacturing?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 2 / Similar 18"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "Describe the manufacturing process of aryl benzene sulphonate detergent.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent manufacturing - ABS/Alfol/anionic",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "Briefly describe the granular urea manufacturing process from NH3 and CO2.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 2 / Similar 21"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "What is biuret? Summarize the factors influencing biuret formation.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Biuret formation, factors and disadvantages",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "Describe the CO2 recovery process in an ammonia plant.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "Briefly describe the manufacturing process of ammonia.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "Why is the steam/carbon ratio important in the primary reformer of an ammonia plant?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "What are the ingredients of liquid lubricants?",
    "topic": "Lubricants",
    "subtopic": "Lubricant manufacturing and base oil selection",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 4,
    "frequencyLabel": "Exact 1 / Similar 4"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "Mention where lubricants are used and also mention the causes of lubrication.",
    "topic": "Lubricants",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2013",
    "exam": "8. Final Examination 2013",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "Describe the cleansing mechanism of soap.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap cleansing action, micelles and hard water",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 9,
    "frequencyLabel": "Exact 1 / Similar 9"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "Write down the basic principle of soap manufacturing.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Briefly describe the manufacturing process of aryl benzene sulfonate.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent manufacturing - ABS/Alfol/anionic",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "Mention different types of detergent with suitable examples.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent classification, surfactants and formulation",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "Why is Mg(HSO3)2 used instead of Ca(HSO3)2 in the sulphite pulping process?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Mg-based sulfite pulping suitability",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "Draw the block diagram of the manufacturing process (dry process) of cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement wet/dry process and process selection",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "How is chemical pulp (kraft) produced from raw materials?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "What is biuret? What are the conditions favorable for biuret formation?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Biuret formation, factors and disadvantages",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "What reactions are involved in urea synthesis?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "Briefly mention the manufacturing process of urea with a simplified block diagram.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part A",
    "q": "10",
    "marks": null,
    "text": "Which of the following is better and why: (i) granular urea; (ii) prill urea?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Granular and prill urea comparison",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "What is chemical pulp? Compare the main three types of chemical pulp.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "How can waste paper be made usable?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Bark, debarking and waste paper reuse",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 3,
    "frequencyLabel": "Exact 1 / Similar 3"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "What is black liquor? Describe the recovery process of black liquor with relevant reactions.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Black liquor and chemical recovery",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "Write down the chemical composition of Portland cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement composition, compounds and raw materials",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "What is clinker? Describe how it can be manufactured.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "What do you mean by hardening and setting of cement?",
    "topic": "Cement Technology",
    "subtopic": "Cement setting and hardening",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "Define iodine value, acid value, and saponification value of oil/fat.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap raw materials, additives and quality",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "Describe the environmental problems created by the use of detergent.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent biodegradability, builders, suds and environment",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "Describe the importance of binding material, perfumes, fillers, and coloring agents in soap making with suitable examples.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap raw materials, additives and quality",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2012",
    "exam": "9. Semester Examination 2012",
    "section": "Part B",
    "q": "10",
    "marks": null,
    "text": "Why are additives used in paper manufacturing?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 2 / Similar 18"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "What is pulping? Why is Mg-based sulfite pulping more suitable than any other bases?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Mg-based sulfite pulping suitability",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Describe briefly, with flow diagram, the Kraft pulping process with chemical recovery.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "Why is waste/bark used in pulping process? How is its debarking done in pulping process?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Bark, debarking and waste paper reuse",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 3,
    "frequencyLabel": "Exact 1 / Similar 3"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "Compare the raw materials, composition of cooking liquor, cooking conditions, and pulp characteristics of the two main chemical pulping processes.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "Why is mineral oil used in soap manufacturing? Why?",
    "topic": "Soap & Detergent",
    "subtopic": "Soap raw materials, additives and quality",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "Discuss briefly, with flow diagram, the continuous process of soap manufacturing.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "What do you mean by biodegradability of detergent?",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent biodegradability, builders, suds and environment",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 2 / Similar 7"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "Define the term micelle. Discuss the cleaning action mechanism of soap.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap cleansing action, micelles and hard water",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 9,
    "frequencyLabel": "Exact 1 / Similar 9"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "Discuss briefly, with flow diagram, the manufacturing of ABS (alkyl benzene sulphonate).",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent manufacturing - ABS/Alfol/anionic",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "10",
    "marks": null,
    "text": "Why does not soap serve in hard water? Explain.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap cleansing action, micelles and hard water",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 9,
    "frequencyLabel": "Exact 1 / Similar 9"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part A",
    "q": "11",
    "marks": null,
    "text": "What are the environmental problems created by the use of detergents?",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent biodegradability, builders, suds and environment",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "What are the differences between SSP and TSP?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "SSP, TSP and phosphate fertilizers",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 2 / Similar 6"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "Describe the manufacturing process of TSP.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "SSP, TSP and phosphate fertilizers",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "What is nitrogen fixation? Explain the mechanism of nitrogen fixation.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Nitrogen fixation",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 1,
    "frequencyLabel": "Exact 1 / Similar 1"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "What are the functions of gypsum and activated silica in cement manufacturing?",
    "topic": "Cement Technology",
    "subtopic": "Cement gypsum, additives, naming and factories",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "Describe the wet processing of cement manufacturing.",
    "topic": "Cement Technology",
    "subtopic": "Cement wet/dry process and process selection",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "Briefly discuss the setting mechanism of Portland cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement setting and hardening",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "Compare wet process and dry process of cement manufacturing.",
    "topic": "Cement Technology",
    "subtopic": "Cement wet/dry process and process selection",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "Discuss briefly, with proper flow diagram, the manufacturing process of NH3 by Kellogg process.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "What is biuret? What are the disadvantages of biuret?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Biuret formation, factors and disadvantages",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "10",
    "marks": null,
    "text": "What are the factors that determine the efficient use of fertilizers?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "2010",
    "exam": "10. Semester Examination 2010",
    "section": "Part B",
    "q": "11",
    "marks": null,
    "text": "Write down the names of nitrogen fertilizers. What is mixed fertilizer? Give the advantages of mixed fertilizers.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "1",
    "marks": null,
    "text": "Define Portland cement. What are the different types of Portland cement?",
    "topic": "Cement Technology",
    "subtopic": "Cement types, OPC/PCC and applications",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "2",
    "marks": null,
    "text": "Why is dry process preferred over wet process for manufacturing clinker?",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 2 / Similar 16"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "3",
    "marks": null,
    "text": "Give the mechanism of setting and hardening of cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement setting and hardening",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "4",
    "marks": null,
    "text": "Write down the names and functions of the additives used in cement manufacturing.",
    "topic": "Cement Technology",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "5",
    "marks": null,
    "text": "What are the different chemical pulping processes? Compare the three types of chemical pulping.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "6",
    "marks": null,
    "text": "What is black liquor? Describe, with reactions, the recovery of black liquor.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Black liquor and chemical recovery",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "7",
    "marks": null,
    "text": "Why is Mg-based sulfite pulping more suitable than other bases? What are the functions of fillers and sizing materials in paper manufacturing process?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Soap raw materials, additives and quality",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "8",
    "marks": null,
    "text": "A lubricating oil has given Saybolt Universal Viscosity data at 210°F and 100°F. Calculate the viscosity index of the lubricating oil.",
    "topic": "Lubricants",
    "subtopic": "Lubricant viscosity index and testing properties",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "9",
    "marks": null,
    "text": "What is lubricant? What are the functions of lubricants? Write down the important characteristics of a good lubrication oil.",
    "topic": "Lubricants",
    "subtopic": "Lubricant definition, functions and properties",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "10",
    "marks": null,
    "text": "Write down two test methods of lubricant and describe them briefly.",
    "topic": "Lubricants",
    "subtopic": "Lubricant viscosity index and testing properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part A",
    "q": "11",
    "marks": null,
    "text": "What are the important additives used in manufacturing paper from pulp?",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "1",
    "marks": null,
    "text": "Draw a simplified block diagram of ammonia synthesis process.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "2",
    "marks": null,
    "text": "What is Benfield solution?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "3",
    "marks": null,
    "text": "Write down the urea synthesis reaction mentioning whether it is endothermic or exothermic.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "4",
    "marks": null,
    "text": "What is biuret? Write down the factors influencing biuret formation.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Biuret formation, factors and disadvantages",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "5",
    "marks": null,
    "text": "Briefly describe the continuous process for soap manufacturing.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Long",
    "exactFrequency": 2,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 2 / Similar 10"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "6",
    "marks": null,
    "text": "Distinguish between continuous and batch processes of soap manufacturing.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "7",
    "marks": null,
    "text": "What do you mean by biodegradability of detergent?",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent biodegradability, builders, suds and environment",
    "type": "Short",
    "exactFrequency": 2,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 2 / Similar 7"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "8",
    "marks": null,
    "text": "Classify detergent with suitable examples.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent classification, surfactants and formulation",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "9",
    "marks": null,
    "text": "Define the term micelle. Discuss the cleansing action mechanism of soap.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap cleansing action, micelles and hard water",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 9,
    "frequencyLabel": "Exact 1 / Similar 9"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "10",
    "marks": null,
    "text": "What are the important characteristics of good quality toilet soap?",
    "topic": "Soap & Detergent",
    "subtopic": "Soap raw materials, additives and quality",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 1 / Similar 6"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "11",
    "marks": null,
    "text": "What are the differences between SSP and TSP?",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "SSP, TSP and phosphate fertilizers",
    "type": "Compare",
    "exactFrequency": 2,
    "similarFrequency": 6,
    "frequencyLabel": "Exact 2 / Similar 6"
  },
  {
    "year": "Older",
    "exam": "11. Older Exam / Question Set",
    "section": "Part B",
    "q": "12",
    "marks": null,
    "text": "What are the problems and prospects of establishing fertilizer and cement industries in the Sylhet region? 12. Term Tests 2017-18",
    "topic": "Cement Technology",
    "subtopic": "Bangladesh industry context",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 2,
    "frequencyLabel": "Exact 1 / Similar 2"
  },
  {
    "year": "2017-18 TT",
    "exam": "12. Term Tests 2017-18 - Term Test 01 / 45 minutes",
    "section": "Term Test 01 / 45 minutes",
    "q": "1",
    "marks": null,
    "text": "Sketch the continuous process of manufacturing of soap and describe with reaction and function of every step.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2017-18 TT",
    "exam": "12. Term Tests 2017-18 - Term Test 01 / 45 minutes",
    "section": "Term Test 01 / 45 minutes",
    "q": "2",
    "marks": null,
    "text": "Draw the flow diagram of manufacture of pulp.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2017-18 TT",
    "exam": "12. Term Tests 2017-18 - Term Test 01 / 45 minutes",
    "section": "Term Test 01 / 45 minutes",
    "q": "3",
    "marks": null,
    "text": "How does eutrophication occur in water bodies due to detergent?",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent biodegradability, builders, suds and environment",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2017-18 TT",
    "exam": "12. Term Tests 2017-18 - Term Test 01 / 45 minutes",
    "section": "Term Test 01 / 45 minutes",
    "q": "4",
    "marks": null,
    "text": "Draw the flow sheet of chemical recovery from black liquor.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Black liquor and chemical recovery",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2017-18 TT",
    "exam": "12. Term Tests 2017-18 - Term Test 02 / 30 minutes",
    "section": "Term Test 02 / 30 minutes",
    "q": "1",
    "marks": null,
    "text": "Write down the relative proportions of raw materials of Portland cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement composition, compounds and raw materials",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2017-18 TT",
    "exam": "12. Term Tests 2017-18 - Term Test 02 / 30 minutes",
    "section": "Term Test 02 / 30 minutes",
    "q": "2",
    "marks": null,
    "text": "Define rotary kiln and describe the reactions occurring in rotary kiln with temperature ranges.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2017-18 TT",
    "exam": "12. Term Tests 2017-18 - Term Test 02 / 30 minutes",
    "section": "Term Test 02 / 30 minutes",
    "q": "3",
    "marks": null,
    "text": "Write the parameters which govern the choice of manufacturing process of cement.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  },
  {
    "year": "2017-18 TT",
    "exam": "12. Term Tests 2017-18 - Term Test 02 / 30 minutes",
    "section": "Term Test 02 / 30 minutes",
    "q": "4",
    "marks": null,
    "text": "What is gypsum? Why is it used? Explain with the reaction in the flow chart for manufacturing cement by wet process.",
    "topic": "Cement Technology",
    "subtopic": "Cement gypsum, additives, naming and factories",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 5,
    "frequencyLabel": "Exact 1 / Similar 5"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part A",
    "q": "1(a)",
    "marks": 2,
    "text": "Pulping is key operating in paper manufacturing. Define and classify the pulp and pulping process.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part A",
    "q": "1(b)",
    "marks": 8,
    "text": "Pulp manufacturing from woody or non-woody biomass involves several unit operation/unit process. Illustrate the steps with proper sequences and usual functions for Kraft process.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part A",
    "q": "1(c)",
    "marks": 5,
    "text": "Fourdrinier Machine produces finished paper with the desired qualities at optimum operating conditions. Explain the working principles of the Fourdrinier machine with sketch.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Pulp/paper manufacturing flow and Kraft process",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 13,
    "frequencyLabel": "Exact 1 / Similar 13"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part A",
    "q": "OR 1(a)",
    "marks": 7,
    "text": "Distinguish among the Kraft, Sulfite and NSSC pulping processes in terms of reaction route, composition of cooking liquor, and operating conditions.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Chemical pulping comparison and Kraft/Sulfite/NSSC",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 12,
    "frequencyLabel": "Exact 1 / Similar 12"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part A",
    "q": "OR 1(b)",
    "marks": 4,
    "text": "Explain the function of different additives in paper manufacturing.",
    "topic": "Paper & Pulp Technology",
    "subtopic": "Lubricant additives, mechanisms, selection and contamination",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 18,
    "frequencyLabel": "Exact 1 / Similar 18"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part A",
    "q": "OR 1(c)",
    "marks": 4,
    "text": "What basic raw materials used in cement manufacturing? Explain.",
    "topic": "Cement Technology",
    "subtopic": "Cement composition, compounds and raw materials",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part A",
    "q": "OR 2(a)",
    "marks": 4,
    "text": "Differentiate between soap and detergent. Classify detergent with suitable examples.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent classification, surfactants and formulation",
    "type": "Compare",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part A",
    "q": "OR 2(b)",
    "marks": 5,
    "text": "Sketch the continuous soap production process with proper label.",
    "topic": "Soap & Detergent",
    "subtopic": "Soap manufacturing process - continuous/batch",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part A",
    "q": "OR 2(c)",
    "marks": 6,
    "text": "Write short notes on: (i) Pyrex glass, (ii) Bullet-proof glass, and (iii) Refractive glass.",
    "topic": "Glass Technology",
    "subtopic": "Special glass types",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 1,
    "frequencyLabel": "Exact 1 / Similar 1"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part B",
    "q": "3(a)",
    "marks": 3,
    "text": "Explain NPK with suitable examples.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Fertilizer classification, nutrients, factories and use",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 14,
    "frequencyLabel": "Exact 1 / Similar 14"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part B",
    "q": "3(b)",
    "marks": 8,
    "text": "Sketch the steps involved in the Haldor Topsoe process for ammonia synthesis. Briefly explain the features of the process (reaction, temperature, catalyst use).",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Ammonia synthesis, reforming and gas purification",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 21,
    "frequencyLabel": "Exact 1 / Similar 21"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part B",
    "q": "3(c)",
    "marks": 4,
    "text": "Explain the raw materials used in formulating typical detergent.",
    "topic": "Soap & Detergent",
    "subtopic": "Detergent classification, surfactants and formulation",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part B",
    "q": "OR 3(a)",
    "marks": 3,
    "text": "Describe the reaction and processing parameter involved in urea synthesis.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part B",
    "q": "OR 3(b)",
    "marks": 8,
    "text": "Sketch the steps involved in Once Through and Stamicarbon process for the synthesis of urea.",
    "topic": "Fertilizer, Urea & Ammonia",
    "subtopic": "Urea synthesis, production and reactions",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 10,
    "frequencyLabel": "Exact 1 / Similar 10"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part B",
    "q": "OR 3(c)",
    "marks": 4,
    "text": "What are the main composition of ordinary Portland cement? Explain their usual functions.",
    "topic": "Cement Technology",
    "subtopic": "Cement composition, compounds and raw materials",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part B",
    "q": "OR 4(a)",
    "marks": 5,
    "text": "What is a lubricant? Explain types of lubricant with mentioning functions of the constituent elements.",
    "topic": "Lubricants",
    "subtopic": "Lubricant definition, functions and properties",
    "type": "Short",
    "exactFrequency": 1,
    "similarFrequency": 7,
    "frequencyLabel": "Exact 1 / Similar 7"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part B",
    "q": "OR 4(b)",
    "marks": 4,
    "text": "Calculate the percentage of C3S, C2S, C3A and C4AF from the following oxide analysis of a standard Portland cement: CaO (65%), SiO2 (22%), Al2O3 (6%), Fe2O3 (3%), MgO (2%), SO3 (1.5%), and ignition loss (0.5%).",
    "topic": "Cement Technology",
    "subtopic": "Cement compound calculation from oxide analysis",
    "type": "Problem/Diagram",
    "exactFrequency": 1,
    "similarFrequency": 1,
    "frequencyLabel": "Exact 1 / Similar 1"
  },
  {
    "year": "2024",
    "exam": "13. First Year Second Semester Exam 2024",
    "section": "Part B",
    "q": "OR 4(c)",
    "marks": 6,
    "text": "Cement clinker is typically forms in the rotary kiln. Specify the physical and chemical phenomena occurring in the rotary kiln with an approximate temperature range.",
    "topic": "Cement Technology",
    "subtopic": "Cement clinker, rotary kiln reactions and manufacturing",
    "type": "Long",
    "exactFrequency": 1,
    "similarFrequency": 16,
    "frequencyLabel": "Exact 1 / Similar 16"
  }
];

const insights = [
  "The most repeated similar pattern is ammonia synthesis/reforming/gas purification, appearing 21 times, so it is a must-prioritize area.",
  "Lubricant additives, mechanism, selection, contamination and applications appear 18 times; this is broader than only memorizing lubricant definition.",
  "Cement clinker/rotary kiln/manufacturing reactions appear 16 times and are often asked as process + temperature/reaction questions.",
  "Fertilizer classification, nutrients, factories and use appears 14 times; short theory questions around NPK, nitrogenous fertilizer and fertilizer factories repeat frequently.",
  "Paper/pulp manufacturing flow and Kraft process appears 13 times, while chemical pulping comparison appears 12 times; prepare both flow diagrams and comparison tables.",
  "Soap manufacturing and soap cleansing action are separately high-frequency; both process diagrams and micelle/cleaning mechanisms should be prepared.",
  "Exact duplicate questions are less common than similar questions: many questions repeat the same concept with slightly changed wording.",
  "Biuret, black liquor, Mg-based sulfite pulping, SSP vs TSP, and cement setting/hardening are compact high-return topics.",
  "2022-2024 papers include more applied/contextual questions such as sustainable cement, alternative ammonia raw materials, Sylhet-region fertilizer choice, and 2024 Bogue calculation.",
  "For exam preparation, use similar-frequency counts more than exact-frequency counts because examiners usually rephrase repeated questions.",
  "The 2024 paper adds glass short notes and Bogue compound calculation; these are low-frequency but recent, so keep them as revision extras.",
  "Part A and Part B placement changes across years, so topic importance should be based on total frequency rather than only section placement."
];

const yearOrder = new Map(metadata.years.map((year, index) => [year, index]));

function normalizeExact(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function sortYears(years) {
  return [...years].sort((a, b) => {
    const ai = yearOrder.has(a) ? yearOrder.get(a) : 999;
    const bi = yearOrder.has(b) ? yearOrder.get(b) : 999;
    return ai - bi || String(a).localeCompare(String(b));
  });
}

function sortRecentYears(years) {
  return sortYears(years).reverse();
}

function groupBy(items, keyGetter) {
  return items.reduce((acc, item) => {
    const key = keyGetter(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

function addFrequencies(items, allQuestions = questions) {
  const exactCounts = allQuestions.reduce((acc, item) => {
    const key = normalizeExact(item.text);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const similarCounts = allQuestions.reduce((acc, item) => {
    acc[item.subtopic] = (acc[item.subtopic] || 0) + 1;
    return acc;
  }, {});

  return items.map((item) => ({
    ...item,
    exactFrequency: exactCounts[normalizeExact(item.text)] || 1,
    similarFrequency: similarCounts[item.subtopic] || 1,
    frequencyLabel: `Exact ${exactCounts[normalizeExact(item.text)] || 1} / Similar ${similarCounts[item.subtopic] || 1}`,
  }));
}

function makeTopicStats(items) {
  return Object.entries(groupBy(items, (item) => item.topic))
    .map(([topic, qs]) => {
      const years = sortYears(unique(qs.map((q) => q.year)));
      const subtopics = unique(qs.map((q) => q.subtopic));
      const knownMarks = qs.filter((q) => typeof q.marks === "number");
      return {
        topic,
        questions: qs.length,
        years,
        subtopics,
        knownMarks: knownMarks.reduce((sum, q) => sum + q.marks, 0),
        high: qs.length >= 15 || years.length >= 5,
        qs,
      };
    })
    .sort((a, b) => b.questions - a.questions || b.years.length - a.years.length || a.topic.localeCompare(b.topic));
}

function makeSimilarStats(items) {
  return Object.entries(groupBy(items, (item) => item.subtopic))
    .map(([subtopic, qs]) => {
      const exactGroups = Object.values(groupBy(qs, (item) => normalizeExact(item.text)));
      const exactRepeatSets = exactGroups.filter((group) => group.length > 1);
      return {
        subtopic,
        topic: qs[0]?.topic || "",
        questions: qs.length,
        years: sortYears(unique(qs.map((q) => q.year))),
        exactRepeatSets: exactRepeatSets.length,
        exactRepeatQuestions: exactRepeatSets.reduce((sum, group) => sum + group.length, 0),
        sample: qs[0]?.text || "",
        qs,
      };
    })
    .sort((a, b) => b.questions - a.questions || b.years.length - a.years.length || a.subtopic.localeCompare(b.subtopic));
}

function makeExactStats(items) {
  return Object.values(groupBy(items, (item) => normalizeExact(item.text)))
    .filter((group) => group.length > 1)
    .map((group) => ({
      text: group[0].text,
      topic: group[0].topic,
      subtopic: group[0].subtopic,
      questions: group.length,
      years: sortYears(unique(group.map((q) => q.year))),
      qs: group,
    }))
    .sort((a, b) => b.questions - a.questions || b.years.length - a.years.length || a.text.localeCompare(b.text));
}

function typeCounts(items) {
  return Object.entries(items.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {})).sort((a, b) => b[1] - a[1]);
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</div>;
}

function Pill({ children, className = "" }) {
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${className}`}>{children}</span>;
}

function StatCard({ label, value, detail }) {
  return (
    <Card className="bg-gradient-to-br from-[#048c4b] via-[#048c4b] to-[#03743f] text-white">
      <div className="text-sm text-white/90">{label}</div>
      <div className="mt-2 text-3xl font-black tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-white/90">{detail}</div>
    </Card>
  );
}

function barWidth(value, max) {
  if (!max) return "0%";
  return `${Math.max(8, Math.round((value / max) * 100))}%`;
}

function Summary({ all, topicStats, similarStats, exactStats }) {
  const maxTopic = Math.max(...topicStats.map((s) => s.questions));
  const highSimilar = similarStats.filter((s) => s.questions >= 7);
  const exactDuplicateQuestions = exactStats.reduce((sum, item) => sum + item.questions, 0);
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Total questions" value={all.length} detail="All parsed subquestions from the bank" />
        <StatCard label="Topic areas" value={topicStats.length} detail="Normalized major CEP units" />
        <StatCard label="Similar groups" value={similarStats.length} detail="Repeated subtopic/question patterns" />
        <StatCard label="Exact duplicate sets" value={exactStats.length} detail={`${exactDuplicateQuestions} repeated question entries`} />
      </div>

      <Card>
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-black text-slate-900">Course-level frequency snapshot</h2>
            <p className="mt-1 text-sm text-slate-500">Exact repeats are strict wording repeats; similar repeats count rephrased questions from the same subtopic.</p>
          </div>
          <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">Exact + Similar counts included</Pill>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {topicStats.map((stat) => (
            <div key={stat.topic} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-black text-slate-900">{stat.topic}</div>
                  <div className="text-xs text-slate-500">{stat.questions} questions · {stat.years.length} years · {stat.subtopics.length} subtopics</div>
                </div>
                {stat.high ? <Pill className="border-[#048c4b]/20 bg-white text-[#048c4b]">High</Pill> : <Pill className="border-slate-200 bg-white text-slate-500">Low</Pill>}
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full rounded-full bg-[#048c4b]" style={{ width: barWidth(stat.questions, maxTopic) }} />
              </div>
              <div className="mt-2 text-xs text-slate-500">Years: {stat.years.join(", ")}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-black text-slate-900">Highest similar-frequency question patterns</h2>
            <p className="text-sm text-slate-500">These are the repeated question families most likely to return in rephrased form.</p>
          </div>
          <Pill className="border-amber-200 bg-amber-50 text-amber-700">{highSimilar.length} high-return groups</Pill>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {similarStats.slice(0, 10).map((stat, idx) => (
            <div key={stat.subtopic} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">{idx + 1}</div>
                <div>
                  <div className="font-black text-slate-900">{stat.subtopic}</div>
                  <div className="mt-1 text-sm text-slate-600">Similar frequency: <b>{stat.questions}</b> · Exact repeat sets: <b>{stat.exactRepeatSets}</b></div>
                  <div className="mt-1 text-xs text-slate-500">{stat.topic} · Years: {stat.years.join(", ")}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function TopicTable({ title, stats }) {
  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500">High-frequency = at least 15 questions or asked across at least 5 years.</p>
        </div>
        <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">{stats.filter((s) => s.high).length} high-frequency topics</Pill>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-separate border-spacing-y-2 text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2">Topic</th>
              <th className="px-3 py-2">Questions</th>
              <th className="px-3 py-2">Subtopics</th>
              <th className="px-3 py-2">Years</th>
              <th className="px-3 py-2">Signal</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => (
              <tr key={stat.topic} className="rounded-2xl bg-slate-50 align-top">
                <td className="rounded-l-2xl px-3 py-3 font-black text-slate-900">{stat.topic}</td>
                <td className="px-3 py-3">{stat.questions}</td>
                <td className="px-3 py-3">{stat.subtopics.length}</td>
                <td className="px-3 py-3 text-slate-600">{stat.years.join(", ")}</td>
                <td className="rounded-r-2xl px-3 py-3">{stat.high ? <Pill className="border-[#048c4b]/20 bg-white text-[#048c4b]">High-frequency</Pill> : <Pill className="border-slate-200 bg-white text-slate-500">Lower-frequency</Pill>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function FrequencyAnalysis({ all, similarStats, exactStats }) {
  const [mode, setMode] = useState("similar");
  return (
    <div className="space-y-5">
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Exact/similar question frequency count</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
              Exact frequency counts repeated wording after lowercasing and removing punctuation. Similar frequency counts all questions assigned to the same repeated subtopic/pattern, so it captures rephrased exam questions.
            </p>
          </div>
          <div className="flex rounded-2xl bg-slate-50 p-2">
            {["similar", "exact"].map((item) => (
              <button key={item} onClick={() => setMode(item)} className={`rounded-xl px-4 py-2 text-sm font-bold ${mode === item ? "bg-[#048c4b] text-white shadow" : "text-slate-600 hover:bg-white"}`}>
                {item === "similar" ? "Similar groups" : "Exact duplicates"}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {mode === "similar" ? (
        <Card>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-black text-slate-900">Similar-frequency groups</h3>
            <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">{similarStats.length} groups</Pill>
          </div>
          <div className="space-y-3">
            {similarStats.map((stat, idx) => (
              <details key={stat.subtopic} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer list-none">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-black uppercase tracking-wide text-[#048c4b]">#{idx + 1} · {stat.topic}</div>
                      <div className="mt-1 text-base font-black text-slate-900">{stat.subtopic}</div>
                      <div className="mt-1 text-sm text-slate-600">Similar frequency count: <b>{stat.questions}</b> · Exact repeat sets inside: <b>{stat.exactRepeatSets}</b></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Pill className="border-slate-200 bg-white text-slate-600">{stat.years.length} years</Pill>
                      <Pill className="border-slate-200 bg-white text-slate-600">{stat.questions} questions</Pill>
                    </div>
                  </div>
                </summary>
                <div className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                  {stat.qs.slice(0, 8).map((item) => (
                    <div key={`${item.year}-${item.section}-${item.q}-${item.text}`} className="rounded-xl bg-white p-3 text-sm">
                      <div className="mb-1 flex flex-wrap gap-2">
                        <Pill className="border-slate-200 bg-slate-50 text-slate-600">{item.year}</Pill>
                        <Pill className="border-slate-200 bg-slate-50 text-slate-600">{item.section} · Q{item.q}</Pill>
                        <Pill className="border-amber-200 bg-amber-50 text-amber-700">Exact {item.exactFrequency} / Similar {item.similarFrequency}</Pill>
                      </div>
                      <div className="text-slate-700">{item.text}</div>
                    </div>
                  ))}
                  {stat.qs.length > 8 && <div className="text-xs font-semibold text-slate-500">+{stat.qs.length - 8} more in this similar group</div>}
                </div>
              </details>
            ))}
          </div>
        </Card>
      ) : (
        <Card>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-black text-slate-900">Exact duplicate question wording</h3>
            <Pill className="border-amber-200 bg-amber-50 text-amber-700">{exactStats.length} exact duplicate sets</Pill>
          </div>
          <div className="space-y-3">
            {exactStats.map((stat, idx) => (
              <details key={stat.text} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer list-none">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-black uppercase tracking-wide text-amber-600">Exact duplicate #{idx + 1} · {stat.topic}</div>
                      <div className="mt-1 font-semibold text-slate-900">{stat.text}</div>
                      <div className="mt-1 text-sm text-slate-600">Exact frequency count: <b>{stat.questions}</b> · Similar group: {stat.subtopic}</div>
                    </div>
                    <Pill className="border-slate-200 bg-white text-slate-600">{stat.years.join(", ")}</Pill>
                  </div>
                </summary>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-200 pt-4">
                  {stat.qs.map((item) => <Pill key={`${item.year}-${item.section}-${item.q}`} className="border-slate-200 bg-white text-slate-700">{item.year} · {item.section} Q{item.q}</Pill>)}
                </div>
              </details>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

function QuestionList({ all }) {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const years = useMemo(() => ["All", ...sortRecentYears(unique(all.map((q) => q.year)))], [all]);
  const topics = useMemo(() => ["All", ...unique(all.map((q) => q.topic)).sort()], [all]);
  const filtered = useMemo(() => all.filter((q) => (selectedYear === "All" || q.year === selectedYear) && (selectedTopic === "All" || q.topic === selectedTopic)), [all, selectedYear, selectedTopic]);
  const grouped = useMemo(() => makeSimilarStats(filtered), [filtered]);

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Topicwise question list with exact/similar frequency</h2>
            <p className="mt-1 text-sm text-slate-500">Each card displays global frequency count: exact wording count and similar subtopic count.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
              {years.map((year) => <option key={year} value={year}>{year === "All" ? "All years" : year}</option>)}
            </select>
            <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
              {topics.map((topic) => <option key={topic} value={topic}>{topic === "All" ? "All topics" : topic}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill className="border-slate-200 bg-white text-slate-700">{filtered.length} questions shown</Pill>
          <Pill className="border-slate-200 bg-white text-slate-700">{grouped.length} similar groups</Pill>
        </div>
      </Card>

      {grouped.map((group) => (
        <details key={group.subtopic} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <summary className="cursor-pointer list-none">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-xs font-black uppercase tracking-wide text-[#048c4b]">{group.topic}</div>
                <div className="mt-1 text-lg font-black text-slate-900">{group.subtopic}</div>
                <div className="mt-1 text-sm text-slate-600">Similar frequency count: <b>{group.questions}</b> in current filter · Years: {group.years.join(", ")}</div>
              </div>
              <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">Show questions</Pill>
            </div>
          </summary>
          <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
            {group.qs.map((item) => (
              <div key={`${item.year}-${item.exam}-${item.section}-${item.q}-${item.text}`} className="rounded-2xl bg-slate-50 p-4">
                <div className="mb-2 flex flex-wrap gap-2">
                  <Pill className="border-slate-200 bg-white text-slate-600">{item.year}</Pill>
                  <Pill className="border-slate-200 bg-white text-slate-600">{item.section} · Q{item.q}</Pill>
                  <Pill className="border-slate-200 bg-white text-slate-600">{item.type}</Pill>
                  {typeof item.marks === "number" && <Pill className="border-slate-200 bg-white text-slate-600">{item.marks} marks</Pill>}
                  <Pill className="border-amber-200 bg-amber-50 text-amber-700">Exact {item.exactFrequency} / Similar {item.similarFrequency}</Pill>
                </div>
                <p className="text-sm leading-6 text-slate-700">{item.text}</p>
                <p className="mt-2 text-xs text-slate-500">{item.exam}</p>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

function Insights() {
  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-900">Examiner insights</h2>
          <p className="text-sm text-slate-500">Study signals based on topic repetition, exact repeats, and similar-question frequency.</p>
        </div>
        <Pill className="border-amber-200 bg-amber-50 text-amber-700">{insights.length} insights</Pill>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {insights.map((insight, idx) => (
          <div key={insight} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">{idx + 1}</div>
            <p className="text-sm leading-6 text-slate-700">{insight}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

const tabs = [
  { id: "summary", label: "Summary" },
  { id: "topics", label: "Topic Analysis" },
  { id: "frequency", label: "Frequency Analysis" },
  { id: "questions", label: "Question List" },
  { id: "insights", label: "Examiner Insights" },
];

export default function CEPQuestionPatternDashboard() {
  const [active, setActive] = useState("summary");
  const all = useMemo(() => addFrequencies(questions), []);
  const topicStats = useMemo(() => makeTopicStats(all), [all]);
  const similarStats = useMemo(() => makeSimilarStats(all), [all]);
  const exactStats = useMemo(() => makeExactStats(all), [all]);
  const counts = useMemo(() => typeCounts(all), [all]);

  return (
    <div className="dashboard-root min-h-screen bg-slate-100 p-4 text-slate-900 md:p-8">
      <style>{dashboardCss}</style>
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-gradient-to-br from-[#048c4b] via-[#048c4b] to-[#036638] p-6 text-white md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Question Pattern Dashboard</div>
                <h1 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">{metadata.courseCode}: {metadata.courseName}</h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/90">{metadata.institution} · {metadata.department}</p>
              </div>
              <div className="rounded-2xl bg-white/15 p-4 text-sm backdrop-blur">
                <div className="font-black">{metadata.exam}</div>
                <div className="mt-1 text-white/90">Years: {metadata.years.join(", ")}</div>
                <div className="text-white/90">{metadata.sections.join(" · ")}</div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 p-5 text-sm md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4"><span className="font-bold">Answer pattern:</span> {metadata.answerPattern}</div>
            <div className="rounded-2xl bg-slate-50 p-4"><span className="font-bold">Marks pattern:</span> {metadata.marksPattern}</div>
            <div className="rounded-2xl bg-slate-50 p-4"><span className="font-bold">Frequency note:</span> {metadata.artifactNote}</div>
          </div>
        </header>

        <nav className="sticky top-0 z-10 mb-6 rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-sm backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActive(tab.id)} className={`rounded-xl px-4 py-2 text-sm font-bold transition ${active === tab.id ? "bg-[#048c4b] text-white shadow" : "text-slate-600 hover:bg-[#048c4b]/6"}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <main>
          {active === "summary" && <Summary all={all} topicStats={topicStats} similarStats={similarStats} exactStats={exactStats} />}
          {active === "topics" && <TopicTable title="Topic analysis" stats={topicStats} />}
          {active === "frequency" && <FrequencyAnalysis all={all} similarStats={similarStats} exactStats={exactStats} />}
          {active === "questions" && <QuestionList all={all} />}
          {active === "insights" && <Insights />}
        </main>

        <footer className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-500">
          Question type distribution: {counts.map(([type, count]) => `${type}: ${count}`).join(" · ")}
        </footer>
      </div>
    </div>
  );
}

const dashboardCss = `
  :root {
    --cep-green: #048c4b;
    --cep-green-dark: #036638;
    --cep-green-deep: #03743f;
    --cep-slate-50: #f8fafc;
    --cep-slate-100: #f1f5f9;
    --cep-slate-200: #e2e8f0;
    --cep-slate-500: #64748b;
    --cep-slate-600: #475569;
    --cep-slate-700: #334155;
    --cep-slate-900: #0f172a;
    --cep-amber-50: #fffbeb;
    --cep-amber-200: #fde68a;
    --cep-amber-600: #d97706;
    --cep-amber-700: #b45309;
  }

  .dashboard-root {
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(4, 140, 75, 0.12), transparent 32rem),
      linear-gradient(180deg, #f8fafc 0%, var(--cep-slate-100) 100%);
    color: var(--cep-slate-900);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.5;
    padding: 1rem;
  }

  .dashboard-root * { box-sizing: border-box; }
  .dashboard-root h1,
  .dashboard-root h2,
  .dashboard-root h3,
  .dashboard-root p { margin: 0; }
  .dashboard-root button,
  .dashboard-root select {
    font: inherit;
  }
  .dashboard-root button {
    border: 0;
    background: transparent;
  }
  .dashboard-root button,
  .dashboard-root summary,
  .dashboard-root select { cursor: pointer; }
  .dashboard-root select {
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, #64748b 50%), linear-gradient(135deg, #64748b 50%, transparent 50%);
    background-position: calc(100% - 18px) 50%, calc(100% - 13px) 50%;
    background-size: 5px 5px, 5px 5px;
    background-repeat: no-repeat;
    padding-right: 2.25rem !important;
  }
  .dashboard-root button:focus-visible,
  .dashboard-root select:focus-visible,
  .dashboard-root summary:focus-visible {
    outline: 3px solid rgba(4, 140, 75, 0.28);
    outline-offset: 2px;
  }
  .dashboard-root table { border-collapse: separate; }
  .dashboard-root th,
  .dashboard-root td { vertical-align: top; }
  .dashboard-root ::selection { background: rgba(4, 140, 75, 0.18); }
  .dashboard-root details[open] summary + div { animation: dashboardSlideDown 180ms ease-out; }

  @keyframes dashboardSlideDown {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Tailwind-style utility fallback so this file works without installing Tailwind CSS. */
  .dashboard-root [class~="mx-auto"] { margin-left: auto; margin-right: auto; }
  .dashboard-root [class~="mb-1"] { margin-bottom: 0.25rem; }
  .dashboard-root [class~="mb-2"] { margin-bottom: 0.5rem; }
  .dashboard-root [class~="mb-4"] { margin-bottom: 1rem; }
  .dashboard-root [class~="mb-6"] { margin-bottom: 1.5rem; }
  .dashboard-root [class~="mt-1"] { margin-top: 0.25rem; }
  .dashboard-root [class~="mt-2"] { margin-top: 0.5rem; }
  .dashboard-root [class~="mt-3"] { margin-top: 0.75rem; }
  .dashboard-root [class~="mt-4"] { margin-top: 1rem; }
  .dashboard-root [class~="mt-6"] { margin-top: 1.5rem; }

  .dashboard-root [class~="p-2"] { padding: 0.5rem; }
  .dashboard-root [class~="p-3"] { padding: 0.75rem; }
  .dashboard-root [class~="p-4"] { padding: 1rem; }
  .dashboard-root [class~="p-5"] { padding: 1.25rem; }
  .dashboard-root [class~="p-6"] { padding: 1.5rem; }
  .dashboard-root [class~="pt-4"] { padding-top: 1rem; }
  .dashboard-root [class~="px-2.5"] { padding-left: 0.625rem; padding-right: 0.625rem; }
  .dashboard-root [class~="px-3"] { padding-left: 0.75rem; padding-right: 0.75rem; }
  .dashboard-root [class~="px-4"] { padding-left: 1rem; padding-right: 1rem; }
  .dashboard-root [class~="py-1"] { padding-top: 0.25rem; padding-bottom: 0.25rem; }
  .dashboard-root [class~="py-2"] { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .dashboard-root [class~="py-3"] { padding-top: 0.75rem; padding-bottom: 0.75rem; }

  .dashboard-root [class~="space-y-2"] > * + * { margin-top: 0.5rem; }
  .dashboard-root [class~="space-y-3"] > * + * { margin-top: 0.75rem; }
  .dashboard-root [class~="space-y-5"] > * + * { margin-top: 1.25rem; }
  .dashboard-root [class~="space-y-6"] > * + * { margin-top: 1.5rem; }

  .dashboard-root [class~="flex"] { display: flex; }
  .dashboard-root [class~="inline-flex"] { display: inline-flex; }
  .dashboard-root [class~="grid"] { display: grid; }
  .dashboard-root [class~="flex-wrap"] { flex-wrap: wrap; }
  .dashboard-root [class~="items-start"] { align-items: flex-start; }
  .dashboard-root [class~="items-center"] { align-items: center; }
  .dashboard-root [class~="justify-between"] { justify-content: space-between; }
  .dashboard-root [class~="justify-center"] { justify-content: center; }
  .dashboard-root [class~="gap-2"] { gap: 0.5rem; }
  .dashboard-root [class~="gap-3"] { gap: 0.75rem; }
  .dashboard-root [class~="gap-4"] { gap: 1rem; }
  .dashboard-root [class~="gap-6"] { gap: 1.5rem; }
  .dashboard-root [class~="shrink-0"] { flex-shrink: 0; }

  .dashboard-root [class~="h-2"] { height: 0.5rem; }
  .dashboard-root [class~="h-7"] { height: 1.75rem; }
  .dashboard-root [class~="h-8"] { height: 2rem; }
  .dashboard-root [class~="h-full"] { height: 100%; }
  .dashboard-root [class~="w-7"] { width: 1.75rem; }
  .dashboard-root [class~="w-8"] { width: 2rem; }
  .dashboard-root [class~="w-full"] { width: 100%; }
  .dashboard-root [class~="max-w-3xl"] { max-width: 48rem; }
  .dashboard-root [class~="max-w-7xl"] { max-width: 80rem; }
  .dashboard-root [class~="min-w-[800px]"] { min-width: 800px; }

  .dashboard-root [class~="min-h-screen"] { min-height: 100vh; }
  .dashboard-root [class~="overflow-hidden"] { overflow: hidden; }
  .dashboard-root [class~="overflow-x-auto"] { overflow-x: auto; }
  .dashboard-root [class~="sticky"] { position: sticky; }
  .dashboard-root [class~="top-0"] { top: 0; }
  .dashboard-root [class~="z-10"] { z-index: 10; }
  .dashboard-root [class~="list-none"] { list-style: none; }
  .dashboard-root [class~="list-none"]::-webkit-details-marker { display: none; }
  .dashboard-root [class~="cursor-pointer"] { cursor: pointer; }

  .dashboard-root [class~="rounded-xl"] { border-radius: 0.75rem; }
  .dashboard-root [class~="rounded-2xl"] { border-radius: 1rem; }
  .dashboard-root [class~="rounded-3xl"] { border-radius: 1.5rem; }
  .dashboard-root [class~="rounded-full"] { border-radius: 9999px; }
  .dashboard-root [class~="rounded-l-2xl"] { border-top-left-radius: 1rem; border-bottom-left-radius: 1rem; }
  .dashboard-root [class~="rounded-r-2xl"] { border-top-right-radius: 1rem; border-bottom-right-radius: 1rem; }

  .dashboard-root [class~="border"] { border-width: 1px; border-style: solid; }
  .dashboard-root [class~="border-t"] { border-top-width: 1px; border-top-style: solid; }
  .dashboard-root [class~="border-slate-200"] { border-color: var(--cep-slate-200); }
  .dashboard-root [class~="border-amber-200"] { border-color: var(--cep-amber-200); }
  .dashboard-root [class~="border-[#048c4b]/20"] { border-color: rgba(4, 140, 75, 0.2); }

  .dashboard-root [class~="bg-white"] { background-color: #ffffff; }
  .dashboard-root [class~="bg-white/15"] { background-color: rgba(255, 255, 255, 0.15); }
  .dashboard-root [class~="bg-white/90"] { background-color: rgba(255, 255, 255, 0.9); }
  .dashboard-root [class~="bg-slate-50"] { background-color: var(--cep-slate-50); }
  .dashboard-root [class~="bg-slate-100"] { background-color: var(--cep-slate-100); }
  .dashboard-root [class~="bg-slate-900"] { background-color: var(--cep-slate-900); }
  .dashboard-root [class~="bg-amber-50"] { background-color: var(--cep-amber-50); }
  .dashboard-root [class~="bg-[#048c4b]"] { background-color: var(--cep-green); }
  .dashboard-root [class~="bg-[#048c4b]/6"] { background-color: rgba(4, 140, 75, 0.06); }
  .dashboard-root [class~="from-[#048c4b]"] { --tw-gradient-from: var(--cep-green); }
  .dashboard-root [class~="via-[#048c4b]"] { --tw-gradient-via: var(--cep-green); }
  .dashboard-root [class~="to-[#036638]"] { --tw-gradient-to: var(--cep-green-dark); }
  .dashboard-root [class~="to-[#03743f]"] { --tw-gradient-to: var(--cep-green-deep); }
  .dashboard-root [class~="bg-gradient-to-br"] {
    background-image: linear-gradient(135deg, var(--tw-gradient-from, var(--cep-green)) 0%, var(--tw-gradient-via, var(--cep-green)) 52%, var(--tw-gradient-to, var(--cep-green-dark)) 100%);
  }

  .dashboard-root [class~="text-left"] { text-align: left; }
  .dashboard-root [class~="align-top"] { vertical-align: top; }
  .dashboard-root [class~="text-xs"] { font-size: 0.75rem; line-height: 1rem; }
  .dashboard-root [class~="text-sm"] { font-size: 0.875rem; line-height: 1.25rem; }
  .dashboard-root [class~="text-base"] { font-size: 1rem; line-height: 1.5rem; }
  .dashboard-root [class~="text-lg"] { font-size: 1.125rem; line-height: 1.75rem; }
  .dashboard-root [class~="text-xl"] { font-size: 1.25rem; line-height: 1.75rem; }
  .dashboard-root [class~="text-3xl"] { font-size: 1.875rem; line-height: 2.25rem; }
  .dashboard-root [class~="font-semibold"] { font-weight: 600; }
  .dashboard-root [class~="font-bold"] { font-weight: 700; }
  .dashboard-root [class~="font-black"] { font-weight: 900; }
  .dashboard-root [class~="uppercase"] { text-transform: uppercase; }
  .dashboard-root [class~="tracking-wide"] { letter-spacing: 0.025em; }
  .dashboard-root [class~="tracking-tight"] { letter-spacing: -0.025em; }
  .dashboard-root [class~="tracking-[0.2em]"] { letter-spacing: 0.2em; }
  .dashboard-root [class~="leading-6"] { line-height: 1.5rem; }

  .dashboard-root [class~="text-white"] { color: #ffffff; }
  .dashboard-root [class~="text-white/80"] { color: rgba(255, 255, 255, 0.8); }
  .dashboard-root [class~="text-white/90"] { color: rgba(255, 255, 255, 0.9); }
  .dashboard-root [class~="text-slate-500"] { color: var(--cep-slate-500); }
  .dashboard-root [class~="text-slate-600"] { color: var(--cep-slate-600); }
  .dashboard-root [class~="text-slate-700"] { color: var(--cep-slate-700); }
  .dashboard-root [class~="text-slate-900"] { color: var(--cep-slate-900); }
  .dashboard-root [class~="text-amber-600"] { color: var(--cep-amber-600); }
  .dashboard-root [class~="text-amber-700"] { color: var(--cep-amber-700); }
  .dashboard-root [class~="text-[#048c4b]"] { color: var(--cep-green); }

  .dashboard-root [class~="shadow"] { box-shadow: 0 8px 18px rgba(15, 23, 42, 0.14); }
  .dashboard-root [class~="shadow-sm"] { box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06), 0 10px 24px rgba(15, 23, 42, 0.04); }
  .dashboard-root [class~="backdrop-blur"] { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
  .dashboard-root [class~="transition"] { transition: all 160ms ease; }

  .dashboard-root [class~="border-separate"] { border-collapse: separate; }
  .dashboard-root [class~="border-spacing-y-2"] { border-spacing: 0 0.5rem; }

  .dashboard-root [class~="hover:bg-white"]:hover { background-color: #ffffff; }
  .dashboard-root [class~="hover:bg-[#048c4b]/6"]:hover { background-color: rgba(4, 140, 75, 0.06); }

  .dashboard-root details {
    transition: box-shadow 160ms ease, border-color 160ms ease, transform 160ms ease;
  }
  .dashboard-root details:hover {
    border-color: rgba(4, 140, 75, 0.28);
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07);
  }
  .dashboard-root summary { outline: none; }
  .dashboard-root summary > div { width: 100%; }
  .dashboard-root b { color: inherit; font-weight: 800; }

  @media (min-width: 768px) {
    .dashboard-root { padding: 2rem; }
    .dashboard-root [class~="md:p-8"] { padding: 2rem; }
    .dashboard-root [class~="md:grid-cols-3"] { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .dashboard-root [class~="md:grid-cols-4"] { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .dashboard-root [class~="md:text-4xl"] { font-size: 2.25rem; line-height: 2.5rem; }
  }

  @media (min-width: 1024px) {
    .dashboard-root [class~="lg:grid-cols-2"] { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 767px) {
    .dashboard-root [class~="text-3xl"] { font-size: 1.625rem; line-height: 2rem; }
    .dashboard-root [class~="p-6"] { padding: 1.25rem; }
    .dashboard-root nav { position: static; }
  }

  @media print {
    .dashboard-root nav,
    .dashboard-root button { position: static !important; }
    .dashboard-root { background: white !important; padding: 0 !important; }
    .dashboard-root [class~="shadow-sm"],
    .dashboard-root [class~="shadow"] { box-shadow: none !important; }
  }
`;

