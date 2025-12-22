export type Content = {
  header: {
    evolution: string;
    payoff: string;
  };
  sections: {
    id: string;
    text: string;
  }[];
  footer: {
    investors: string;
    whistleblowing: string;
    privacy: string;
  };
};

export const content: Record<'it' | 'en', Content> = {
  it: {
    header: {
      evolution: "Sito web\nin\nevoluzione",
      payoff: "Shaping the future",
    },
    sections: [
      {
        id: "01",
        text: "Affianchiamo i nostri clienti nel ripensare modelli, processi e strategie, guidandoli verso un futuro digitale e sostenibile.",
      },
      {
        id: "02",
        text: "Il nostro obiettivo è generare valore, trasformando la complessità in opportunità.\n\nLo facciamo con un approccio collaborativo, combinando visione strategica e concretezza operativa.",
      },
      {
        id: "03",
        text: "Crediamo nell’innovazione che parte dalle persone.\n\nValorizziamo la diversità dei punti di vista, il talento, la curiosità.\n\nPerché è solo così che nascono soluzioni davvero nuove.",
      },
      {
        id: "04",
        text: "Tecnologia, dati e cultura digitale sono strumenti potenti.\n\nMa è il modo in cui li usiamo, con responsabilità, empatia e competenza, a fare la differenza.",
      },
      {
        id: "05",
        text: "Be Shaping the Future.\n\nNon è solo un nome.\nÈ un impegno quotidiano.\nÈ il modo in cui guardiamo avanti.\n\nInsieme.",
      },
    ],
    footer: {
      investors: "Archivio investitori",
      whistleblowing: "Procedura segnalazioni anche anonime",
      privacy: "Privacy Policy",
    },
  },
  en: {
    header: {
      evolution: "Website\nin\nevolution",
      payoff: "Shaping the future",
    },
    sections: [
      {
        id: "01",
        text: "We support our clients in rethinking models, processes, and strategies, guiding them towards a digital and sustainable future.",
      },
      {
        id: "02",
        text: "Our goal is to generate value, transforming complexity into opportunity.\n\nWe do this with a collaborative approach, combining strategic vision and operational concreteness.",
      },
      {
        id: "03",
        text: "We believe in innovation that starts with people.\n\nWe value diversity of perspectives, talent, and curiosity.\n\nBecause only in this way are truly new solutions born.",
      },
      {
        id: "04",
        text: "Technology, data, and digital culture are powerful tools.\n\nBut it is the way we use them, with responsibility, empathy, and competence, that makes the difference.",
      },
      {
        id: "05",
        text: "Be Shaping the Future.\n\nIt’s not just a name.\nIt’s a daily commitment.\nIt’s the way we look forward.\n\nTogether.",
      },
    ],
    footer: {
      investors: "Investor Archive",
      whistleblowing: "Whistleblowing Procedure",
      privacy: "Privacy Policy",
    },
  },
};
