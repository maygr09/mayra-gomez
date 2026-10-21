export type JournalEntry = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
};

// Entries
export const journalEntries: JournalEntry[] = [
  {
    slug: "F-R-M-S",
    date: "October 2026",
    title: "A Case of study: From Fatigue Risk Management to Human-Centred Aviation Scheduling",
    excerpt:
      "A data-driven examination of the gap between regulatory fatigue management practices and the broader factors shaping crew wellbeing. Scholar purposes",
    content: [
      "Commercial aviation has experienced sustained growth over recent decades, increasing the complexity of operations and placing greater pressure on crew scheduling, one of the most flexible components of operational planning. As a result, fatigue management has become a central element of aviation safety. Fatigue Risk Management System (FRMS), increasingly supported by operational data and predictive models,  have enabled airlines to optimise crew scheduling while reducing fatigue-related risks (International Air Transport Association [IATA], n.d.). Although these systems have strengthened operational safety, fatigue continues to be recognised as an important factor affecting human performance and aviation safety. As air traffic continues to expand worldwide, airlines face the challenge of balancing operational efficiency with the health and sustainability of their workforce, making fatigue management an increasingly relevant organisational and societal concern.",
      "Existing research has primarily focused on improving operational safety and ensuring compliance with regulatory limits governing duty periods, flight hours and minimum rest requirements. However, considerably less attention has been paid to whether these systems adequately represent crew wellbeing beyond regulatory compliance (Van den Berg, Signal, & Gander, 2020). Meeting minimum legal rest requirements does not necessarily guarantee effective recovery, as fatigue is also shaped by sleep quality, irregular schedules, circadian disruption, opportunities for adequate nutrition, work-life balance and other aspects of daily life experienced by crew members (Avers, K. B., Nei, D., King, J. S., Thomas, S., Roberts, C., Banks, J. O., & Nesthus, T. E., 2011). Consequently, organisations may be optimising schedules that satisfy regulatory requirements while overlooking broader determinants of wellbeing. This distinction is particularly important because wellbeing is a multidimensional concept that extends beyond physiological recovery (Connors, M. M., Rentmeister-Bryant, H. K., DeRoshia, C. A., Schroeder, D. J., & Nesthus, T. E., 2007).",
      "This research therefore asks: To what extent do current flight scheduling practices and fatigue management systems capture the operational and lifestyle factors that influence cumulative fatigue and psychological wellbeing among commercial flight crews? Psychological wellbeing would be operationalised using validated self-report wellbeing measures together with indicators of perceived fatigue, sleep quality and work-life operational variables –including night duties, time-zone transitions, duty length and roster variability– and contextual variables such as experience level and type of operation. By integrating operational and human-centred data, this study aims to assess whether current scheduling practices reflect the complexity of crew wellbeing. Rather than proposing immediate operational changes, the objective is to identify whether important determinants of wellbeing remain absent from current fatigue management approaches and to generate evidence that could support more human-centred scheduling practices.",
      "The proposed study would face several limitations. Access to detailed operational data may be restricted by commercial confidentiality and data protection regulations. Furthermore, psychological wellbeing would rely partly on validated self-report measures, which are inherently susceptible to response bias. Differences between airlines, operational contexts and regulatory frameworks could also limit the generalisability of the findings. Ethical considerations would therefore include informed consent, participant anonymity and the responsible handling of sensitive occupational data. Despite these limitations, the findings could contribute to evidence-based fatigue management strategies that move beyond regulatory compliance and place greater emphasis on the long-term wellbeing of flight crews.",
    ],
  },
  {
    slug: "what-flying-taught-me-about-systems",
    date: "July 2026",
    title: "What flying taught me about systems",
    excerpt:
      "Placeholder: a short two-line summary of what this entry is about.",
    content: [
      "Placeholder: opening paragraph setting up the situation or question behind this entry.",
      "Placeholder: what I noticed, learned, or decided.",
      "Placeholder: how it changed the way I think or work going forward.",
    ],
  },
];
