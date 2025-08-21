const mockJokes = {
  en: [
    {
      text: "Why don't scientists trust atoms? Because they make up everything!",
      category: "Science"
    },
    {
      text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      category: "Puns"
    },
    {
      text: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      category: "Relationship"
    },
    {
      text: "Why don't eggs tell jokes? They'd crack each other up!",
      category: "Food"
    },
    {
      text: "What do you call a bear with no teeth? A gummy bear!",
      category: "Animals"
    },
    {
      text: "Why did the coffee file a police report? It got mugged!",
      category: "Food"
    }
  ],
  es: [
    {
      text: "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter!",
      category: "Tecnología"
    },
    {
      text: "¿Qué le dice un taco al otro taco? ¿Quieres que te envuelva?",
      category: "Comida"
    },
    {
      text: "¿Por qué los peces no pagan impuestos? Porque viven en escuelas!",
      category: "Animales"
    },
    {
      text: "¿Cómo se llama el campeón de buceo japonés? Tokofondo!",
      category: "Deportes"
    },
    {
      text: "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
      category: "Ejercicio"
    }
  ],
  fr: [
    {
      text: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant? Parce que sinon, ils tombent dans le bateau!",
      category: "Sports"
    },
    {
      text: "Que dit un escargot quand il croise une limace? 'Regarde, un nudiste!'",
      category: "Animaux"
    },
    {
      text: "Pourquoi les poissons n'aiment pas jouer au tennis? Parce qu'ils ont peur du filet!",
      category: "Sports"
    },
    {
      text: "Comment appelle-t-on un chat tombé dans un pot de peinture le jour de Noël? Un chat-mallow!",
      category: "Animaux"
    },
    {
      text: "Que dit un café qui voit un thé? Théière moi!",
      category: "Nourriture"
    }
  ],
  de: [
    {
      text: "Warum nehmen Seeräuber keinen Kreisumfang? Weil sie Pi raten!",
      category: "Mathematik"
    },
    {
      text: "Was ist grün und klopft an der Tür? Ein Klopfsalat!",
      category: "Essen"
    },
    {
      text: "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsehen kann!",
      category: "Übernatürlich"
    },
    {
      text: "Was ist weiß und kann nicht durch die Tür? Eine Milch, die den Schlüssel vergessen hat!",
      category: "Absurd"
    },
    {
      text: "Wie nennt man einen Keks unter einem Baum? Ein schattiges Plätzchen!",
      category: "Wortspiel"
    }
  ],
  it: [
    {
      text: "Perché i pesci non giocano a calcio? Perché hanno paura della rete!",
      category: "Sport"
    },
    {
      text: "Cosa fa un gallo in chiesa? Il chicchirichè!",
      category: "Animali"
    },
    {
      text: "Perché i matematici confondono Halloween e Natale? Perché Oct 31 = Dec 25!",
      category: "Matematica"
    },
    {
      text: "Come si chiama un pesce senza occhi? Pesce CECO!",
      category: "Animali"
    },
    {
      text: "Cosa dice un muro a un altro muro? Ci vediamo all'angolo!",
      category: "Architettura"
    }
  ]
};

export const getMockJoke = (language = 'en') => {
  const jokes = mockJokes[language] || mockJokes.en;
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};