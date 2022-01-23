var quotes = [
  '"Simplicity is the keynote of all true elegance." <br>- Coco Chanel',
  '"Simplicity is the final achievement. After one has played a vast quantity of notes and more notes, it is simplicity that emerges as the crowning reward of art." <br> - Frederic Chopin',
    '"Never get so busy making a living that you forget to make a life." <br> — Dolly Parton',
  '"Nature is pleased with simplicity. And nature is no dummy." <br>- Isaac Newton',
  '“I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.” <br> - Lao Tzu',
  '“Simplicity is the ultimate sophistication.” <br> - Leonardo da Vinci',
  '“Beauty of style and harmony and grace and good rhythm depend on simplicity.” <br> - Plato',
  '“That’s been one of my mantras – focus and simplicity. Simple can be harder than complex…” <br> - Steve Jobs',
  '“You can’t truly be considered successful in your business life if your home life is in shambles.” <br> — Zig Ziglar',
  '“We think, mistakenly, that success is the result of the amount of time we put in at work, instead of the quality of time we put in.” <br> — Arianna Huffington',
  '“Mental toughness is many things. It is humility because it behooves all of us to remember that simplicity is the sign of greatness and meekness is the sign of true strength.” <br> - Vince Lombardi',
  '“A vocabulary of truth and simplicity will be of service throughout your life.” <br> - Winston Churchill',
  '“Everything should be made as simple as possible, but not simpler.” <br> - Albert Einstein',
  '“A little simplification would be the first step toward rational living, I think.” <br> - Eleanor Roosevelt',
  '“Regret for the things we did can be tempered by time; it is regret for the things we did not do that is inconsolable" <br> - Si Sydney J. Harris',
  '“The key is in not spending time, but in investing it.” <br> — Stephen R. Covey',
  '“Great leaders are almost always great simplifiers, who can cut through argument, debate, and doubt to offer a solution everybody can understand.” <br> - General Colin Powell',
  '“Don\’t make the process harder than it is.” <br> - Jack Welch',
  '“Simplicity is an exact medium between too little and too much.” <br> - Joshua Reynolds',
  '“Tis the gift to be simple, Tis the gift to be free…” <br> - Joseph Brackett',
  '"Simplicity is a choice, a discrimination, a crystallization. Its object is purity.” <br> - Le Corbusier',
  '"The ability to simplify means to eliminate the unnecessary so that the necessary may speak.” <br> - Hans Hofmann',
  '“Making the simple complicated is commonplace; making the complicated simple, awesomely simple, that\'s creativity.” <br> - Charles Mingus',
  '“The greatest ideas are the simplest.” <br> - William Golding',
  '“Three rules of work: out of clutter find simplicity. From discord find harmony. In the middle of difficulty lies opportunity.” <br> - Albert Einstein',
  '“The core of beauty is simplicity” <br> - Paulo Coelho',
  '“I have the simplest tastes. I am always satisfied with the best.” <br> - Oscar Wilde',
  '“It is the essence of genius to make use of the simplest ideas.” <br> - Charles Péguy',

  ]
function newQuote() {
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber]; 
  window.addEventListener('load', newQuote, true);
}
