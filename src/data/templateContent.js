// Per-template SEO content: a direct-answer intro paragraph, a 4-question
// FAQ, and related-template slugs, used by scripts/generate-template-pages.js
// to build the static /templates/<slug> pages. Not every slug in
// src/data/templates.js has an entry yet, see that script's startup
// assertion for which ones are still missing.
//
// Formula for new entries (keep consistent so new templates are cheap to add):
//   intro: 50-100 words. "[Template name] is a printable card of 25 [things]
//     for/at [use case], grounded in specific items from the phrase list
//     (not generic filler). Use it [situation 1], or [situation 2]. Then a
//     short, varied closing line that it's free with no signup."
//   faq: exactly 4 { q, a } pairs, always covering (1) what it's for / what's
//     on it, (2) solo vs. group / how many players, (3) can it be customized,
//     (4) is it free, often pointing to a related template.
//   related: 5-8 slugs from the same category (see src/components/PhraseInput.jsx
//     for the existing category groupings).
//
// Voice rules (Alyssa's own writing style, not generic AI-blog copy):
//   - No em dashes, ever. Use a period, comma, or colon instead.
//   - Never use the "it's not X, it's Y" contrastive pattern.
//   - Vary sentence structure between entries, don't reuse the exact same
//     closing sentence verbatim across templates.
//   - Check ~/Documents/obsidian-vault/alyssaworld (especially
//     alyssaoutsideblog/things I actually posted) for real examples of her
//     voice before writing a new batch: direct, casual, concrete, no
//     corporate filler.

export const templateContent = {
  'hiking': {
    intro: "Hiking Adventures Bingo is a printable card of 25 things that happen on a trail: getting caught in the rain, spotting wildlife, losing the trail for a minute, packing out someone else's trash. Use it solo to notice the small moments of a hike, or hand it to a hiking buddy or trail crew and see who fills their card first. It's free, no signup needed. Print it before you head out or pull it up on your phone at the trailhead.",
    faq: [
      { q: "What is hiking bingo used for?", a: "It's a fun way to track memorable (and sometimes annoying) moments on a hike. Pass it around a trail crew, family hike, or scout troop, or just keep score solo." },
      { q: "How many hikers can play?", a: "Any number. Print one card per hiker, or share a single card and mark it together as a group." },
      { q: "Can I customize the squares?", a: "Yes, use these 25 as a starting point, then add or swap in your own on the free bingo card maker." },
      { q: "Do I need to sign up or pay?", a: "No. It's completely free, no account required. Generate, download, and print." }
    ],
    related: ['multi-day-backpacking', 'washington-trails', 'backpacking-gear', 'enchantments-day', 'snow-camping-winter', 'pnw-ski-season', 'after-work-seattle']
  },

  'tokyo-travel': {
    intro: "Tokyo Travel Bingo is a printable card of 25 experiences to spot or try on your first (or fifth) trip to Tokyo, from Senso-ji Temple to a proper ramen ticket-machine order. Use it on the flight over, hand it around at dinner with your travel group, or check things off as you explore Ueno, Ameya-Yokocho, and beyond. It's free and doesn't need an account. Print it before you go or pull it up on your phone mid-trip.",
    faq: [
      { q: "What's on a Tokyo travel bingo card?", a: "Landmarks, food moments, and small travel rituals specific to Tokyo: the Narita Skyliner, Senso-ji Temple, Ueno Park, and more." },
      { q: "Is this good for solo travelers or groups?", a: "Both. Solo travelers use it to notice more of the city, and groups use it to compare notes over dinner." },
      { q: "Can I make a bingo card for a different city?", a: "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch." },
      { q: "Is it free to use?", a: "Completely free, no signup. Generate, download the PDF, and print or share on your phone." }
    ],
    related: ['kyoto-travel', 'seoul-travel', 'bangkok-travel', 'singapore-travel', 'bali-travel', 'vietnam-travel']
  },

  'thanksgiving': {
    intro: "Thanksgiving Bingo is a printable card of 25 things that happen at almost every Thanksgiving table: someone burns a dish, the mashed potatoes disappear first, the parade plays in the background. Use it to keep the table entertained between courses, or hand it to the kids' table for something to do while the adults talk. No signup, totally free. Print it before guests arrive or share it on your phone.",
    faq: [
      { q: "When should I use Thanksgiving bingo?", a: "Anytime during the meal or the hours leading up to it. It works well as a conversation starter or a quiet activity for kids." },
      { q: "How many people can play?", a: "As many as you want. Print one card per guest, or make a few different versions with different phrase arrangements." },
      { q: "Can I add my own family's Thanksgiving traditions?", a: "Yes, edit any square in the free bingo card maker before you print." },
      { q: "Is there a Christmas version too?", a: "Yes, this site has a Christmas Bucket List bingo card and other holiday templates." }
    ],
    related: ['christmas-bucketlist', 'holiday-traditions', 'family-gathering', 'indoor-winter-family', 'outdoor-winter-family', 'winter-family-all']
  },

  'resolutions-2025': {
    intro: "2025 Resolutions Bingo is a printable card of 25 resolutions people actually make: save more money, exercise more, eat healthier, declutter personal space, pay off debt, meditate regularly. Use it solo to see how many of your own goals show up on the card, or bring it to a New Year's party and mark off everyone's resolutions as they announce them. It's free, no account needed. Print it before January 1st or pull it up on your phone at midnight.",
    faq: [
      { q: "What is 2025 Resolutions Bingo used for?", a: "It's a lighthearted way to track common New Year's resolutions, things like exercising more, saving money, or drinking more water, whether you're checking off your own goals or playing at a party." },
      { q: "Is this for one person or a group?", a: "Works either way. Play solo through the year to see how many resolutions you actually keep, or print a card for each guest at a New Year's gathering." },
      { q: "Can I swap in my own resolutions?", a: "Yes, edit any square on the free bingo card maker to match the goals you're actually setting this year." },
      { q: "Is it free to use?", a: "Yes, completely free with no account needed. If you want something more specific than 'exercise more,' check out the Ultra Specific Resolutions Bingo template too." }
    ],
    related: ['ultra-specific-resolutions', 'trends-2025', 'workout-fitness', 'happy-news-2026', 'hit-songs-2026', 'books-2025', 'movies-2025-new']
  },

  'icebreakers': {
    intro: "Get to Know You Bingo is a printable card of 25 things you might not know about the people around you: who speaks more than two languages, who's got a hidden talent, who's run a marathon, who can solve a Rubik's cube. Use it to break the ice on someone's first day at work, in a classroom, or at a team offsite where half the room are strangers. Free to use, no signup required. Print it before everyone arrives or share the link on your phone.",
    faq: [
      { q: "What is Get to Know You Bingo used for?", a: "It's an icebreaker game. Squares like 'has a hidden talent' or 'speaks more than two languages' get people talking and mingling to fill their card." },
      { q: "How many people can play?", a: "It's built for a group. The more people mingling, the faster squares get filled, so it works well for classrooms, offices, or any gathering of 10 or more." },
      { q: "Can I change the prompts?", a: "Yes, edit any square in the free bingo card maker to fit your group, whether that's coworkers, classmates, or new neighbors." },
      { q: "Is it free?", a: "Yes, no signup or payment required. For a party crowd instead of a work or school setting, try the Party Icebreaker Bingo template." }
    ],
    related: ['party-icebreakers', 'office-party', 'college-life', 'classroom-activities', 'deep-questions', 'family-gathering', 'baby-shower']
  },

  'wedding-reception': {
    intro: "Wedding Reception Bingo is a printable card of 25 guest prompts built for the reception: who knows the bride from college, who's caught a bouquet before, who's wearing something borrowed, who traveled the farthest to be here. Use it to get a table of half-strangers talking while they wait for dinner, or set it out with the place cards so guests have something to do before the toasts start. It's free and doesn't require an account. Print it before the big day or text guests the link.",
    faq: [
      { q: "What is Wedding Reception Bingo used for?", a: "It's a guest icebreaker for the reception. Squares like 'knows the groom from work' or 'is single and ready to mingle' get tables talking and comparing notes on how they know the couple." },
      { q: "How many guests can play?", a: "Any number. Print one per place setting so every table has a card, or hand them out just to the tables full of guests who don't know each other yet." },
      { q: "Can we customize it for our own wedding?", a: "Yes, swap in inside jokes, the couple's actual wedding colors, or details specific to how they met using the free bingo card maker." },
      { q: "Is it free to make?", a: "Yes, no signup needed. Hosting a baby shower next? There's a Baby Shower Bingo template built the same way." }
    ],
    related: ['baby-shower', 'office-party', 'family-gathering', 'deep-questions', 'party-icebreakers', 'icebreakers', 'college-life']
  },

  'summer-bucketlist': {
    intro: "Summer Bucket List Bingo is a printable card of 25 things to squeeze into the season: swim in a lake, make s'mores over a campfire, catch a sunrise hike, host a backyard barbecue. Use it solo to fill your summer with more than screen time, or tape it to the fridge and let the whole family cross things off together. Free, no signup. Print it out in June or pull it up on your phone at the farmers market.",
    faq: [
      { q: "What's on a summer bucket list bingo card?", a: "25 warm-weather activities pulled straight from summer: swimming, farmers markets, campfires, road trips, stargazing, and more." },
      { q: "Is this for one person or a whole family?", a: "Either. Play solo to make the most of your own summer, or print a card per family member and race to fill yours first." },
      { q: "Can I swap out squares?", a: "Yes, use these 25 as a starting point, then add or swap in your own on the free bingo card maker." },
      { q: "Is it free to use?", a: "Completely free, no signup. Generate, download, and print, or check out the fall, winter, and spring activity bingo cards too." }
    ],
    related: ['fall-activities', 'winter-activities', 'spring-activities', 'hiking', 'food-adventures', 'travel-experiences', 'road-trip-west']
  },

  'book-reading': {
    intro: "Book Reading Challenge Bingo is a printable card of 25 reading prompts to stretch your TBR pile: a cozy mystery with a punny title, a book with a non-human narrator, a novel with a dual timeline, a debut by a BIPOC author. Use it solo to break out of your usual genres, or run it with a book club and compare who fills a line first. No signup needed, completely free. Print it for the new year or track it on your phone as you read.",
    faq: [
      { q: "What kind of books does this bingo card call for?", a: "25 varied reading prompts: genre stretches, unusual formats like a story told in letters, and specifics like a book with a map in the front or a locked-room mystery." },
      { q: "Is this for solo reading or a book club?", a: "Both. Read solo to break your usual habits, or run it with a book club and see who fills a line first." },
      { q: "Can I customize the prompts?", a: "Yes, swap any square for your own on the free bingo card maker, which is handy for tailoring it to a specific book club theme." },
      { q: "Is it free?", a: "Completely free, no signup. If you want more, check out Acclaimed Books Bingo or 2025 Books Bingo for more reading challenges." }
    ],
    related: ['acclaimed-books', 'books-2025', 'summer-reading-experiences', 'popular-book-club-picks', 'progression-fantasy', 'nyt-fiction-bestsellers', 'pacific-northwest-books', 'most-anticipated-summer-2026']
  },

  'workout-fitness': {
    intro: "Fitness Challenge Bingo is a printable card of 25 workouts and fitness milestones: has run a 5K, tried hot yoga, done burpees (and survived), lifted weights. Use it solo as a fitness bucket list to check off over the month, or bring it to the gym and turn it into a friendly challenge with a workout buddy. Free to use, no account required. Print it before the new month starts or pull it up on your phone between sets.",
    faq: [
      { q: "What's on a fitness bingo card?", a: "25 workouts and fitness challenges: running, yoga, weightlifting, HIIT, swimming, and specific moves like planks and burpees." },
      { q: "Is this for solo workouts or a group challenge?", a: "Both. Use it solo to track your own fitness goals, or print copies for a gym group or workout buddy and race to fill a line." },
      { q: "Can I change the squares?", a: "Yes, these 25 are a starting point, so customize them on the free bingo card maker to match your own routine or equipment." },
      { q: "Is it free to use?", a: "Completely free, no signup. Generate, download, and print." }
    ],
    related: ['hiking', 'bouldering-gym', 'multi-day-backpacking', 'washington-trails', 'pnw-ski-season', 'snow-camping-winter', 'after-work-seattle', 'backpacking-gear']
  },

  'food-adventures': {
    intro: "Foodie Adventures Bingo is a printable card of 25 bold food moments: trying durian, eating balut, surviving a spicy dish that made you cry, ordering something off a street cart you couldn't identify. Use it while traveling to check off wild bites as you find them, or hand it to your most adventurous-eater friends and see who racks up the weirder card. It's free, no signup. Print it before your next trip or pull it up on your phone at the night market.",
    faq: [
      { q: "What's on the foodie adventures bingo card?", a: "Adventurous eats and food dares: durian, escargot, century eggs, chicken feet, fermented shark, and other things worth bragging about trying." },
      { q: "Is this for solo eating or a group?", a: "Both. Solo travelers use it to track their own food bucket list, or a group of friends can each grab a card and compare who's braver." },
      { q: "Can I customize the squares?", a: "Yes, swap in dishes specific to where you're eating, or add your own dares, using the free bingo card maker." },
      { q: "Is it free to use?", a: "Completely free, no signup required. If you're heading somewhere specific, check out our city travel bingo cards like Tokyo Travel or Bangkok Travel too." }
    ],
    related: ['travel-experiences', 'vietnam-trip', 'bangkok-travel', 'tokyo-travel', 'seoul-travel', 'mexico-city-travel', 'singapore-travel', 'cartagena-travel']
  },

  'enchantments-day': {
    intro: "Enchantments Day Hike Bingo is a printable card of 25 things from the actual Enchantments traverse: the Aasgard Pass crux, turquoise pools at Perfection and Leprechaun Lakes, fearless mountain goats eyeing your salty gear, the 5 am start. Use it solo to mark off the grind before you're too tired to remember it, or pass it to your shuttle car buddies and compare cards after the point-to-point. Free, no signup needed. Print it before permit day or pull it up on your phone at the trailhead.",
    faq: [
      { q: "What's on the Enchantments bingo card?", a: "Real details from the traverse: Aasgard Pass, Colchuck and Snow Lakes, turquoise granite pools, goats after your salt, vault toilets, and the two-car shuttle logistics." },
      { q: "Is this for one hiker or a group?", a: "Either. Solo hikers use it to mark the day's milestones, or a hiking group each takes a card and compares notes back at the car." },
      { q: "Can I customize the squares?", a: "Yes, add your own trail details or swap in squares specific to your route, like Stuart Lake vs Snow Lakes, on the free bingo card maker." },
      { q: "Is it free to use?", a: "Completely free, no signup. Generate, download, and print before you head out. If you're into other Washington trails, check out Washington Trails or Multi-Day Backpacking too." }
    ],
    related: ['hiking', 'washington-trails', 'multi-day-backpacking', 'backpacking-gear', 'snow-camping-winter', 'san-juan-islands', 'after-work-seattle', 'pnw-ski-season']
  },

  'paris-travel': {
    intro: "Paris Travel Bingo is a printable card of 25 things to see or do in Paris: the Eiffel Tower, Sacré-Cœur up in Montmartre, a Seine river cruise, macarons at Ladurée, a sunset picnic by the water. Use it on the plane to plan your itinerary, or hand it around to your travel group and check things off together as you wander Le Marais and the Latin Quarter. It's free and doesn't need an account. Print it before you go or pull it up on your phone between the Louvre and Musée d'Orsay.",
    faq: [
      { q: "What's on a Paris travel bingo card?", a: "Landmarks, museums, and food moments specific to Paris: the Eiffel Tower, Notre-Dame Cathedral, Sainte-Chapelle, and a stop for macarons at Ladurée." },
      { q: "Is this good for solo travelers or groups?", a: "Both. Solo travelers use it to plan out sightseeing, and groups use it to compare who's checked off more by dinner." },
      { q: "Can I make a bingo card for a different city?", a: "Yes, this site has travel bingo cards for 30+ other cities, including London and Rome, or you can build your own from scratch." },
      { q: "Is it free to use?", a: "Completely free, no signup. Generate, download the PDF, and print or share it on your phone." }
    ],
    related: ['london-travel', 'rome-travel', 'amsterdam-travel', 'barcelona-travel', 'dublin-travel', 'edinburgh-travel', 'prague-travel', 'lisbon-travel']
  },

  'california-highlights': {
    intro: "California Highlights Bingo is a printable card of 25 things to spot across the state: Yosemite Valley, Half Dome, Big Sur coastline, Napa Valley wine tours, the Hollywood sign, In-N-Out, fish tacos in San Diego. Use it on a PCH road trip from LA to San Francisco, or hand it out on a family trip hitting the national parks and the coast. No signup, completely free. Print it before you hit the road or pull it up on your phone at golden hour in Yosemite.",
    faq: [
      { q: "What's on a California highlights bingo card?", a: "State icons and experiences: Yosemite Valley, Half Dome, Big Sur coastline, Napa Valley wine tours, Disneyland, In-N-Out, and more, mixed in with a few food and beach stops." },
      { q: "Is this for a road trip group or solo travel?", a: "Both. Road trip crews use it to call out landmarks as they drive, and solo travelers use it as a checklist for a longer California itinerary." },
      { q: "Can I customize the squares?", a: "Yes, swap in your own California stops or food spots in the free bingo card maker before you print." },
      { q: "Is it free to use?", a: "Completely free, no signup. This site also has a West Coast Road Trip bingo card if you're driving through Oregon and Washington too." }
    ],
    related: ['road-trip-west', 'los-angeles-travel', 'san-francisco-travel', 'oregon-highlights', 'nevada-highlights', 'arizona-highlights', 'hawaii-highlights', 'utah-highlights']
  },

  'hit-songs-2026': {
    intro: "2026 #1 Hit Songs Bingo is a printable card of 25 song titles topping the charts this year: The Fate of Ophelia, Die With A Smile, Birds Of A Feather, Luther, A Bar Song Tipsy. Use it on a road trip with the radio on, or turn it into a party game where the aux cord decides who wins. Free to use, no signup. Print it before your next drive or pull it up on your phone at the next playlist party.",
    faq: [
      { q: "What's on the 2026 hit songs bingo card?", a: "25 song titles that topped the charts in 2026, from The Fate of Ophelia to Die With A Smile and Birds Of A Feather." },
      { q: "Is this for one person or a group?", a: "Works either way. Solo listeners mark it off as songs come on shuffle, and groups play it as a party game with the radio or a shared playlist." },
      { q: "Can I swap in different songs?", a: "Yes, edit any square in the free bingo card maker if you want your own playlist instead of the chart-topping list." },
      { q: "Is it free?", a: "Free, no signup. This site also has a 2026 Artists Right Now bingo card if you'd rather guess who's trending than which song is playing." }
    ],
    related: ['artists-2026', 'albums-forward-2026', 'movies-out-now-2026', 'movies-coming-soon-2026', 'trends-2025', 'tv-shows-2025', 'happy-news-2026']
  },

  'happy-news-2026': {
    intro: "Happy News 2026 Bingo is a printable card of 25 real feel-good headlines from this year: 700 vultures released back into the wild, a record-breaking Milwaukee river cleanup, Aspen and Toby's dog reunion, NASA growing stem cells in space. Use it while you catch up on the news, or read through it as a family to balance out the doom-scrolling. It's free, no signup needed. Print it before movie night or share it on your phone.",
    faq: [
      { q: "What kind of news is on this card?", a: "Real 2026 feel-good stories: animal rescues, environmental wins, and community milestones like 23,326 trees planted in 24 hours and 54 gharial hatchlings released." },
      { q: "Is this for solo reading or a group?", a: "Both. Read it solo while you scroll the news, or play it as a family to see who spots a matching headline first." },
      { q: "Can I customize the headlines?", a: "Yes, edit any square in the free bingo card maker to add stories you've been following." },
      { q: "Is it free to use?", a: "Completely free, no signup. This site also has a 2025 Trends bingo card if you want to look back at the year before." }
    ],
    related: ['trends-2025', 'tv-shows-2025', 'hit-songs-2026', 'artists-2026', 'deep-questions', 'movies-2025', 'albums-forward-2026']
  }
};
