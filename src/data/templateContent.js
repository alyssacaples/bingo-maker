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
  "hiking": {
    "intro": "Hiking Adventures Bingo is a printable card of 25 things that happen on a trail: getting caught in the rain, spotting wildlife, losing the trail for a minute, packing out someone else's trash. Use it solo to notice the small moments of a hike, or hand it to a hiking buddy or trail crew and see who fills their card first. It's free, no signup needed. Print it before you head out or pull it up on your phone at the trailhead.",
    "faq": [
      {
        "q": "What is hiking bingo used for?",
        "a": "It's a fun way to track memorable (and sometimes annoying) moments on a hike. Pass it around a trail crew, family hike, or scout troop, or just keep score solo."
      },
      {
        "q": "How many hikers can play?",
        "a": "Any number. Print one card per hiker, or share a single card and mark it together as a group."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, use these 25 as a starting point, then add or swap in your own on the free bingo card maker."
      },
      {
        "q": "Do I need to sign up or pay?",
        "a": "No. It's completely free, no account required. Generate, download, and print."
      }
    ],
    "related": [
      "multi-day-backpacking",
      "washington-trails",
      "backpacking-gear",
      "enchantments-day",
      "snow-camping-winter",
      "pnw-ski-season",
      "after-work-seattle"
    ]
  },
  "tokyo-travel": {
    "intro": "Tokyo Travel Bingo is a printable card of 25 experiences to spot or try on your first (or fifth) trip to Tokyo, from Senso-ji Temple to a proper ramen ticket-machine order. Use it on the flight over, hand it around at dinner with your travel group, or check things off as you explore Ueno, Ameya-Yokocho, and beyond. It's free and doesn't need an account. Print it before you go or pull it up on your phone mid-trip.",
    "faq": [
      {
        "q": "What's on a Tokyo travel bingo card?",
        "a": "Landmarks, food moments, and small travel rituals specific to Tokyo: the Narita Skyliner, Senso-ji Temple, Ueno Park, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to notice more of the city, and groups use it to compare notes over dinner."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "kyoto-travel",
      "seoul-travel",
      "bangkok-travel",
      "singapore-travel",
      "bali-travel",
      "vietnam-travel"
    ]
  },
  "thanksgiving": {
    "intro": "Thanksgiving Bingo is a printable card of 25 things that happen at almost every Thanksgiving table: someone burns a dish, the mashed potatoes disappear first, the parade plays in the background. Use it to keep the table entertained between courses, or hand it to the kids' table for something to do while the adults talk. No signup, totally free. Print it before guests arrive or share it on your phone.",
    "faq": [
      {
        "q": "When should I use Thanksgiving bingo?",
        "a": "Anytime during the meal or the hours leading up to it. It works well as a conversation starter or a quiet activity for kids."
      },
      {
        "q": "How many people can play?",
        "a": "As many as you want. Print one card per guest, or make a few different versions with different phrase arrangements."
      },
      {
        "q": "Can I add my own family's Thanksgiving traditions?",
        "a": "Yes, edit any square in the free bingo card maker before you print."
      },
      {
        "q": "Is there a Christmas version too?",
        "a": "Yes, this site has a Christmas Bucket List bingo card and other holiday templates."
      }
    ],
    "related": [
      "christmas-bucketlist",
      "holiday-traditions",
      "family-gathering",
      "indoor-winter-family",
      "outdoor-winter-family",
      "winter-family-all"
    ]
  },
  "resolutions-2025": {
    "intro": "2025 Resolutions Bingo is a printable card of 25 resolutions people actually make: save more money, exercise more, eat healthier, declutter personal space, pay off debt, meditate regularly. Use it solo to see how many of your own goals show up on the card, or bring it to a New Year's party and mark off everyone's resolutions as they announce them. It's free, no account needed. Print it before January 1st or pull it up on your phone at midnight.",
    "faq": [
      {
        "q": "What is 2025 Resolutions Bingo used for?",
        "a": "It's a lighthearted way to track common New Year's resolutions, things like exercising more, saving money, or drinking more water, whether you're checking off your own goals or playing at a party."
      },
      {
        "q": "Is this for one person or a group?",
        "a": "Works either way. Play solo through the year to see how many resolutions you actually keep, or print a card for each guest at a New Year's gathering."
      },
      {
        "q": "Can I swap in my own resolutions?",
        "a": "Yes, edit any square on the free bingo card maker to match the goals you're actually setting this year."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, completely free with no account needed. If you want something more specific than 'exercise more,' check out the Ultra Specific Resolutions Bingo template too."
      }
    ],
    "related": [
      "ultra-specific-resolutions",
      "trends-2025",
      "workout-fitness",
      "happy-news-2026",
      "hit-songs-2026",
      "books-2025",
      "movies-2025-new"
    ]
  },
  "icebreakers": {
    "intro": "Get to Know You Bingo is a printable card of 25 things you might not know about the people around you: who speaks more than two languages, who's got a hidden talent, who's run a marathon, who can solve a Rubik's cube. Use it to break the ice on someone's first day at work, in a classroom, or at a team offsite where half the room are strangers. Free to use, no signup required. Print it before everyone arrives or share the link on your phone.",
    "faq": [
      {
        "q": "What is Get to Know You Bingo used for?",
        "a": "It's an icebreaker game. Squares like 'has a hidden talent' or 'speaks more than two languages' get people talking and mingling to fill their card."
      },
      {
        "q": "How many people can play?",
        "a": "It's built for a group. The more people mingling, the faster squares get filled, so it works well for classrooms, offices, or any gathering of 10 or more."
      },
      {
        "q": "Can I change the prompts?",
        "a": "Yes, edit any square in the free bingo card maker to fit your group, whether that's coworkers, classmates, or new neighbors."
      },
      {
        "q": "Is it free?",
        "a": "Yes, no signup or payment required. For a party crowd instead of a work or school setting, try the Party Icebreaker Bingo template."
      }
    ],
    "related": [
      "party-icebreakers",
      "office-party",
      "college-life",
      "classroom-activities",
      "deep-questions",
      "family-gathering",
      "baby-shower"
    ]
  },
  "wedding-reception": {
    "intro": "Wedding Reception Bingo is a printable card of 25 guest prompts built for the reception: who knows the bride from college, who's caught a bouquet before, who's wearing something borrowed, who traveled the farthest to be here. Use it to get a table of half-strangers talking while they wait for dinner, or set it out with the place cards so guests have something to do before the toasts start. It's free and doesn't require an account. Print it before the big day or text guests the link.",
    "faq": [
      {
        "q": "What is Wedding Reception Bingo used for?",
        "a": "It's a guest icebreaker for the reception. Squares like 'knows the groom from work' or 'is single and ready to mingle' get tables talking and comparing notes on how they know the couple."
      },
      {
        "q": "How many guests can play?",
        "a": "Any number. Print one per place setting so every table has a card, or hand them out just to the tables full of guests who don't know each other yet."
      },
      {
        "q": "Can we customize it for our own wedding?",
        "a": "Yes, swap in inside jokes, the couple's actual wedding colors, or details specific to how they met using the free bingo card maker."
      },
      {
        "q": "Is it free to make?",
        "a": "Yes, no signup needed. Hosting a baby shower next? There's a Baby Shower Bingo template built the same way."
      }
    ],
    "related": [
      "baby-shower",
      "office-party",
      "family-gathering",
      "deep-questions",
      "party-icebreakers",
      "icebreakers",
      "college-life"
    ]
  },
  "summer-bucketlist": {
    "intro": "Summer Bucket List Bingo is a printable card of 25 things to squeeze into the season: swim in a lake, make s'mores over a campfire, catch a sunrise hike, host a backyard barbecue. Use it solo to fill your summer with more than screen time, or tape it to the fridge and let the whole family cross things off together. Free, no signup. Print it out in June or pull it up on your phone at the farmers market.",
    "faq": [
      {
        "q": "What's on a summer bucket list bingo card?",
        "a": "25 warm-weather activities pulled straight from summer: swimming, farmers markets, campfires, road trips, stargazing, and more."
      },
      {
        "q": "Is this for one person or a whole family?",
        "a": "Either. Play solo to make the most of your own summer, or print a card per family member and race to fill yours first."
      },
      {
        "q": "Can I swap out squares?",
        "a": "Yes, use these 25 as a starting point, then add or swap in your own on the free bingo card maker."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download, and print, or check out the fall, winter, and spring activity bingo cards too."
      }
    ],
    "related": [
      "fall-activities",
      "winter-activities",
      "spring-activities",
      "hiking",
      "food-adventures",
      "travel-experiences",
      "road-trip-west"
    ]
  },
  "book-reading": {
    "intro": "Book Reading Challenge Bingo is a printable card of 25 reading prompts to stretch your TBR pile: a cozy mystery with a punny title, a book with a non-human narrator, a novel with a dual timeline, a debut by a BIPOC author. Use it solo to break out of your usual genres, or run it with a book club and compare who fills a line first. No signup needed, completely free. Print it for the new year or track it on your phone as you read.",
    "faq": [
      {
        "q": "What kind of books does this bingo card call for?",
        "a": "25 varied reading prompts: genre stretches, unusual formats like a story told in letters, and specifics like a book with a map in the front or a locked-room mystery."
      },
      {
        "q": "Is this for solo reading or a book club?",
        "a": "Both. Read solo to break your usual habits, or run it with a book club and see who fills a line first."
      },
      {
        "q": "Can I customize the prompts?",
        "a": "Yes, swap any square for your own on the free bingo card maker, which is handy for tailoring it to a specific book club theme."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. If you want more, check out Acclaimed Books Bingo or 2025 Books Bingo for more reading challenges."
      }
    ],
    "related": [
      "acclaimed-books",
      "books-2025",
      "summer-reading-experiences",
      "popular-book-club-picks",
      "progression-fantasy",
      "nyt-fiction-bestsellers",
      "pacific-northwest-books",
      "most-anticipated-summer-2026"
    ]
  },
  "workout-fitness": {
    "intro": "Fitness Challenge Bingo is a printable card of 25 workouts and fitness milestones: has run a 5K, tried hot yoga, done burpees (and survived), lifted weights. Use it solo as a fitness bucket list to check off over the month, or bring it to the gym and turn it into a friendly challenge with a workout buddy. Free to use, no account required. Print it before the new month starts or pull it up on your phone between sets.",
    "faq": [
      {
        "q": "What's on a fitness bingo card?",
        "a": "25 workouts and fitness challenges: running, yoga, weightlifting, HIIT, swimming, and specific moves like planks and burpees."
      },
      {
        "q": "Is this for solo workouts or a group challenge?",
        "a": "Both. Use it solo to track your own fitness goals, or print copies for a gym group or workout buddy and race to fill a line."
      },
      {
        "q": "Can I change the squares?",
        "a": "Yes, these 25 are a starting point, so customize them on the free bingo card maker to match your own routine or equipment."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download, and print."
      }
    ],
    "related": [
      "hiking",
      "bouldering-gym",
      "multi-day-backpacking",
      "washington-trails",
      "pnw-ski-season",
      "snow-camping-winter",
      "after-work-seattle",
      "backpacking-gear"
    ]
  },
  "food-adventures": {
    "intro": "Foodie Adventures Bingo is a printable card of 25 bold food moments: trying durian, eating balut, surviving a spicy dish that made you cry, ordering something off a street cart you couldn't identify. Use it while traveling to check off wild bites as you find them, or hand it to your most adventurous-eater friends and see who racks up the weirder card. It's free, no signup. Print it before your next trip or pull it up on your phone at the night market.",
    "faq": [
      {
        "q": "What's on the foodie adventures bingo card?",
        "a": "Adventurous eats and food dares: durian, escargot, century eggs, chicken feet, fermented shark, and other things worth bragging about trying."
      },
      {
        "q": "Is this for solo eating or a group?",
        "a": "Both. Solo travelers use it to track their own food bucket list, or a group of friends can each grab a card and compare who's braver."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in dishes specific to where you're eating, or add your own dares, using the free bingo card maker."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup required. If you're heading somewhere specific, check out our city travel bingo cards like Tokyo Travel or Bangkok Travel too."
      }
    ],
    "related": [
      "travel-experiences",
      "vietnam-trip",
      "bangkok-travel",
      "tokyo-travel",
      "seoul-travel",
      "mexico-city-travel",
      "singapore-travel",
      "cartagena-travel"
    ]
  },
  "enchantments-day": {
    "intro": "Enchantments Day Hike Bingo is a printable card of 25 things from the actual Enchantments traverse: the Aasgard Pass crux, turquoise pools at Perfection and Leprechaun Lakes, fearless mountain goats eyeing your salty gear, the 5 am start. Use it solo to mark off the grind before you're too tired to remember it, or pass it to your shuttle car buddies and compare cards after the point-to-point. Free, no signup needed. Print it before permit day or pull it up on your phone at the trailhead.",
    "faq": [
      {
        "q": "What's on the Enchantments bingo card?",
        "a": "Real details from the traverse: Aasgard Pass, Colchuck and Snow Lakes, turquoise granite pools, goats after your salt, vault toilets, and the two-car shuttle logistics."
      },
      {
        "q": "Is this for one hiker or a group?",
        "a": "Either. Solo hikers use it to mark the day's milestones, or a hiking group each takes a card and compares notes back at the car."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, add your own trail details or swap in squares specific to your route, like Stuart Lake vs Snow Lakes, on the free bingo card maker."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download, and print before you head out. If you're into other Washington trails, check out Washington Trails or Multi-Day Backpacking too."
      }
    ],
    "related": [
      "hiking",
      "washington-trails",
      "multi-day-backpacking",
      "backpacking-gear",
      "snow-camping-winter",
      "san-juan-islands",
      "after-work-seattle",
      "pnw-ski-season"
    ]
  },
  "paris-travel": {
    "intro": "Paris Travel Bingo is a printable card of 25 things to see or do in Paris: the Eiffel Tower, Sacré-Cœur up in Montmartre, a Seine river cruise, macarons at Ladurée, a sunset picnic by the water. Use it on the plane to plan your itinerary, or hand it around to your travel group and check things off together as you wander Le Marais and the Latin Quarter. It's free and doesn't need an account. Print it before you go or pull it up on your phone between the Louvre and Musée d'Orsay.",
    "faq": [
      {
        "q": "What's on a Paris travel bingo card?",
        "a": "Landmarks, museums, and food moments specific to Paris: the Eiffel Tower, Notre-Dame Cathedral, Sainte-Chapelle, and a stop for macarons at Ladurée."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan out sightseeing, and groups use it to compare who's checked off more by dinner."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ other cities, including London and Rome, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "london-travel",
      "rome-travel",
      "amsterdam-travel",
      "barcelona-travel",
      "dublin-travel",
      "edinburgh-travel",
      "prague-travel",
      "lisbon-travel"
    ]
  },
  "california-highlights": {
    "intro": "California Highlights Bingo is a printable card of 25 things to spot across the state: Yosemite Valley, Half Dome, Big Sur coastline, Napa Valley wine tours, the Hollywood sign, In-N-Out, fish tacos in San Diego. Use it on a PCH road trip from LA to San Francisco, or hand it out on a family trip hitting the national parks and the coast. No signup, completely free. Print it before you hit the road or pull it up on your phone at golden hour in Yosemite.",
    "faq": [
      {
        "q": "What's on a California highlights bingo card?",
        "a": "State icons and experiences: Yosemite Valley, Half Dome, Big Sur coastline, Napa Valley wine tours, Disneyland, In-N-Out, and more, mixed in with a few food and beach stops."
      },
      {
        "q": "Is this for a road trip group or solo travel?",
        "a": "Both. Road trip crews use it to call out landmarks as they drive, and solo travelers use it as a checklist for a longer California itinerary."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own California stops or food spots in the free bingo card maker before you print."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. This site also has a West Coast Road Trip bingo card if you're driving through Oregon and Washington too."
      }
    ],
    "related": [
      "road-trip-west",
      "los-angeles-travel",
      "san-francisco-travel",
      "oregon-highlights",
      "nevada-highlights",
      "arizona-highlights",
      "hawaii-highlights",
      "utah-highlights"
    ]
  },
  "hit-songs-2026": {
    "intro": "2026 #1 Hit Songs Bingo is a printable card of 25 song titles topping the charts this year: The Fate of Ophelia, Die With A Smile, Birds Of A Feather, Luther, A Bar Song Tipsy. Use it on a road trip with the radio on, or turn it into a party game where the aux cord decides who wins. Free to use, no signup. Print it before your next drive or pull it up on your phone at the next playlist party.",
    "faq": [
      {
        "q": "What's on the 2026 hit songs bingo card?",
        "a": "25 song titles that topped the charts in 2026, from The Fate of Ophelia to Die With A Smile and Birds Of A Feather."
      },
      {
        "q": "Is this for one person or a group?",
        "a": "Works either way. Solo listeners mark it off as songs come on shuffle, and groups play it as a party game with the radio or a shared playlist."
      },
      {
        "q": "Can I swap in different songs?",
        "a": "Yes, edit any square in the free bingo card maker if you want your own playlist instead of the chart-topping list."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a 2026 Artists Right Now bingo card if you'd rather guess who's trending than which song is playing."
      }
    ],
    "related": [
      "artists-2026",
      "albums-forward-2026",
      "movies-out-now-2026",
      "movies-coming-soon-2026",
      "trends-2025",
      "tv-shows-2025",
      "happy-news-2026"
    ]
  },
  "happy-news-2026": {
    "intro": "Happy News 2026 Bingo is a printable card of 25 real feel-good headlines from this year: 700 vultures released back into the wild, a record-breaking Milwaukee river cleanup, Aspen and Toby's dog reunion, NASA growing stem cells in space. Use it while you catch up on the news, or read through it as a family to balance out the doom-scrolling. It's free, no signup needed. Print it before movie night or share it on your phone.",
    "faq": [
      {
        "q": "What kind of news is on this card?",
        "a": "Real 2026 feel-good stories: animal rescues, environmental wins, and community milestones like 23,326 trees planted in 24 hours and 54 gharial hatchlings released."
      },
      {
        "q": "Is this for solo reading or a group?",
        "a": "Both. Read it solo while you scroll the news, or play it as a family to see who spots a matching headline first."
      },
      {
        "q": "Can I customize the headlines?",
        "a": "Yes, edit any square in the free bingo card maker to add stories you've been following."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. This site also has a 2025 Trends bingo card if you want to look back at the year before."
      }
    ],
    "related": [
      "trends-2025",
      "tv-shows-2025",
      "hit-songs-2026",
      "artists-2026",
      "deep-questions",
      "movies-2025",
      "albums-forward-2026"
    ]
  },
  "acclaimed-books": {
    "intro": "Acclaimed Books Bingo is a printable card of 25 buzzed-about titles, from Fourth Wing and The Seven Husbands of Evelyn Hugo to heavier hitters like Pachinko, 1984, and A Little Life. Use it to see how many you've already read, or hand it to your book club and mark off titles as people share what's on their shelf. It's free, no signup required. Print it for your next book club meeting or keep it on your phone for browsing the shelves.",
    "faq": [
      {
        "q": "What's on the Acclaimed Books Bingo card?",
        "a": "25 widely read and talked-about titles, spanning literary fiction, memoir, and a few genre hits like Fourth Wing, so there's something almost every reader has touched."
      },
      {
        "q": "Is this for solo reading or a book club?",
        "a": "Both work. Read solo and check off titles as you finish them, or bring it to book club and compare who's read the most."
      },
      {
        "q": "Can I swap in different books?",
        "a": "Yes, use these 25 as a jumping-off point, then customize the squares on the bingo maker with your own favorites or your club's reading list."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no account needed. If you want more recent releases, check out 2025 Books Bingo too."
      }
    ],
    "related": [
      "book-reading",
      "books-2025",
      "nyt-fiction-bestsellers",
      "popular-book-club-picks",
      "summer-reading-experiences",
      "pacific-northwest-books"
    ]
  },
  "party-icebreakers": {
    "intro": "Party Icebreaker Bingo is a printable card of 25 party-friendly facts, like has sung karaoke in public, can do a magic trick, or has a favorite dad joke. Use it to break the ice at a party where half the room doesn't know each other, or pass it around a mixer and get people talking as they hunt for matches. It's totally free and skips the signup. Print a stack before guests arrive or text the link so people can play from their phones.",
    "faq": [
      {
        "q": "What kind of bingo is this?",
        "a": "A 'find someone who' style card with 25 fun personal facts, built to get strangers or acquaintances talking at a party."
      },
      {
        "q": "How many people can play?",
        "a": "Works for any size group. Print one card per guest and have them mingle to fill in squares, or play as one big group."
      },
      {
        "q": "Can I change the squares?",
        "a": "Yes, edit any square on the free bingo maker to fit your crowd or the vibe of your event."
      },
      {
        "q": "Does it cost anything?",
        "a": "No cost, no account. If you want something more get-to-know-you, check out Get to Know You Bingo too."
      }
    ],
    "related": [
      "icebreakers",
      "office-party",
      "family-gathering",
      "wedding-reception",
      "college-life",
      "classroom-activities",
      "deep-questions"
    ]
  },
  "movies-2025": {
    "intro": "Popular Movies Bingo is a printable card of 25 acclaimed films, from Barbie and Oppenheimer to Parasite, Moonlight, and Get Out. Use it for a movie night marathon and mark off titles as you watch, or hand it out at a watch party and see who's seen the most. It's free with no signup needed. Print it before movie night or pull it up on your phone while you scroll for something to watch.",
    "faq": [
      {
        "q": "What movies are on this card?",
        "a": "25 acclaimed and popular films across the last decade or so, from blockbusters like Top Gun: Maverick to award winners like Parasite and Moonlight."
      },
      {
        "q": "Is this for one person or a group?",
        "a": "Either. Watch solo and track what you've seen, or use it at a group movie night to spark 'wait, you haven't seen that?' conversations."
      },
      {
        "q": "Can I customize the movie list?",
        "a": "Yes, swap in your own picks on the bingo maker if you want a card built around a specific genre or year."
      },
      {
        "q": "Is it free?",
        "a": "Yes, completely free and no account required. For the newest releases, check out 2026 Movies Out Now Bingo."
      }
    ],
    "related": [
      "movies-2025-new",
      "movies-out-now-2026",
      "movies-coming-soon-2026",
      "tv-shows-2025",
      "trends-2025"
    ]
  },
  "fall-activities": {
    "intro": "Fall Activities Bingo is a printable card of 25 things to do once the weather turns, like apple picking at an orchard, carving a pumpkin, or making caramel apples. Use it solo as a fall bucket list to work through, or turn it into a family challenge and see who fills their card first. It's free and doesn't need an account. Print it out for the fridge or save it to your phone for weekend planning.",
    "faq": [
      {
        "q": "What's on the Fall Activities Bingo card?",
        "a": "25 classic autumn activities: orchards, pumpkin patches, hayrides, bonfires, and cozy stuff like making chili and hot chocolate."
      },
      {
        "q": "Can I play this alone or with family?",
        "a": "Both. Use it solo as a seasonal to-do list, or give everyone in the house their own card and compare progress."
      },
      {
        "q": "Can I customize the activities?",
        "a": "Yes, add or remove squares on the bingo maker to match your area or what your family actually likes doing."
      },
      {
        "q": "Is it free to print?",
        "a": "Yes, free with no signup. When winter rolls around, Winter Activities Bingo picks up where this leaves off."
      }
    ],
    "related": [
      "winter-activities",
      "spring-activities",
      "thanksgiving",
      "christmas-bucketlist",
      "hiking",
      "food-adventures"
    ]
  },
  "winter-activities": {
    "intro": "Winter Activities Bingo is a printable card of 25 cold-weather things to do, like building a snowman, making a gingerbread house, or going ice skating. Use it as a family checklist to get through the season, or hand it out at a holiday gathering and see who's tried the most. It's free with no account required. Print it for the fridge or share it with family before the snow starts falling.",
    "faq": [
      {
        "q": "What's included on the Winter Activities Bingo card?",
        "a": "25 winter staples: sledding, snowball fights, holiday markets, hot cocoa, and cozy indoor stuff like board games and baking."
      },
      {
        "q": "Is this for kids, adults, or the whole family?",
        "a": "It works for anyone. Families use it as a season-long checklist, and adults use it for their own winter bucket list."
      },
      {
        "q": "Can I swap out activities?",
        "a": "Yes, customize any square on the bingo maker, or check out Indoor Winter Activities and Outdoor Winter Activities for more focused versions."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup needed. Generate, download, and print whenever you're ready."
      }
    ],
    "related": [
      "indoor-winter-family",
      "outdoor-winter-family",
      "indoor-winter-adult",
      "outdoor-winter-adult",
      "winter-adult-all",
      "winter-family-all",
      "snow-camping-winter"
    ]
  },
  "spring-activities": {
    "intro": "Spring Activities Bingo is a printable card of 25 things to do once the weather warms up, like planting a garden, going strawberry picking, or having a picnic in the park. Use it as a personal reset-and-get-outside checklist, or share it with the family and turn spring cleaning weekends into something more fun. It's free, no signup. Print it out and stick it on the fridge or keep it on your phone for spontaneous weekend plans.",
    "faq": [
      {
        "q": "What kind of activities are on this card?",
        "a": "25 spring staples: gardening, farmers markets, biking, outdoor concerts, and the usual spring cleaning tasks too."
      },
      {
        "q": "Can this be a solo bucket list or a group thing?",
        "a": "Both. Use it alone to get motivated after winter, or give everyone in the family their own card."
      },
      {
        "q": "Can I edit the squares?",
        "a": "Yes, the bingo maker lets you swap in your own local spots or seasonal activities."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, no cost and no account. Once summer hits, Summer Bucket List Bingo has you covered too."
      }
    ],
    "related": [
      "fall-activities",
      "winter-activities",
      "summer-bucketlist",
      "hiking",
      "food-adventures",
      "workout-fitness"
    ]
  },
  "classroom-activities": {
    "intro": "Classroom Fun Bingo is a printable card of 25 school experiences, like has been in the school play, has won a spelling bee, or has fallen asleep in class. Use it as an icebreaker on the first day of school, or hand it out at a class reunion and see who's had the most of these moments. It's free with no signup required. Print a class set or share it digitally before your next event.",
    "faq": [
      {
        "q": "What is Classroom Fun Bingo for?",
        "a": "It's a 'find someone who' style card built around common school experiences, good for icebreakers, reunions, or end-of-year fun."
      },
      {
        "q": "How many students can play?",
        "a": "Any number. Print one per student and have them mingle to find matches, or use it as a whole-class activity."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, edit them on the bingo maker to fit your grade level or school."
      },
      {
        "q": "Is it free?",
        "a": "Free, no account needed. For a get-to-know-you card outside the classroom, try Get to Know You Bingo."
      }
    ],
    "related": [
      "icebreakers",
      "party-icebreakers",
      "college-life",
      "numbers",
      "deep-questions"
    ]
  },
  "office-party": {
    "intro": "Office Party Bingo is a printable card of 25 coworker personality types, like has the messiest desk, is the office comedian, or always knows the latest office gossip. Use it at a holiday party or team happy hour, and have people mark off which square matches which coworker. It's free and skips the signup entirely. Print copies for the break room or send the link around before your next office event.",
    "faq": [
      {
        "q": "What's the point of Office Party Bingo?",
        "a": "It's a lighthearted way to call out coworker quirks, good for holiday parties, team building, or just a fun break room activity."
      },
      {
        "q": "Is this for a small team or a whole office?",
        "a": "Works either way. Small teams can play as a group, and bigger offices can print a stack for everyone at the party."
      },
      {
        "q": "Can I change the squares to match my office?",
        "a": "Yes, edit any square on the bingo maker to fit your actual coworkers and inside jokes."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no account required. Party Icebreaker Bingo is a good pairing if you want more mingling."
      }
    ],
    "related": [
      "party-icebreakers",
      "icebreakers",
      "family-gathering",
      "wedding-reception",
      "deep-questions"
    ]
  },
  "baby-shower": {
    "intro": "Baby Shower Bingo is a printable card of 25 guest facts, like is expecting their first baby, has twin children, or has used a doula. Use it to get guests chatting while they wait for the mom-to-be to arrive, or play it as a mingling game before the gifts start. It's free with no signup needed. Print it for the shower or text it to guests ahead of time.",
    "faq": [
      {
        "q": "What is Baby Shower Bingo used for?",
        "a": "It's a 'find someone who' mingling game built around parenting and pregnancy facts, perfect for breaking the ice before the shower games start."
      },
      {
        "q": "How many guests can play?",
        "a": "Any number. Print one card per guest and let them work the room to fill it in."
      },
      {
        "q": "Can I customize it for the mom-to-be?",
        "a": "Yes, swap in squares specific to her or her family on the bingo maker."
      },
      {
        "q": "Is it free?",
        "a": "Yes, completely free, no account needed. Family Gathering Bingo works well for other family events too."
      }
    ],
    "related": [
      "family-gathering",
      "wedding-reception",
      "icebreakers",
      "party-icebreakers",
      "deep-questions"
    ]
  },
  "travel-experiences": {
    "intro": "Travel Experiences Bingo is a printable card of 25 travel facts, like has been to all 50 states, has traveled solo, or has gotten lost in a foreign city. Use it to spark stories at a travel-themed party, or hand it around a group of friends before a trip and see who's done the most. It's free, no account required. Print it for your next gathering or share it before a group trip.",
    "faq": [
      {
        "q": "What's this bingo card about?",
        "a": "25 travel milestones and experiences, from cruises and safaris to jet lag and missed flights, meant to get people swapping stories."
      },
      {
        "q": "Is this for solo travelers or groups?",
        "a": "Both. Solo travelers can use it as a personal bucket list, and groups use it to compare travel history at a party or gathering."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, edit them on the bingo maker to fit your friend group or the trip you're planning."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. If you're planning a specific trip, check out city-specific cards like Tokyo Travel or Paris Travel Bingo."
      }
    ],
    "related": [
      "tokyo-travel",
      "paris-travel",
      "london-travel",
      "road-trip-west",
      "vietnam-trip",
      "california-highlights"
    ]
  },
  "holiday-traditions": {
    "intro": "Holiday Traditions Bingo is a printable card of 25 family and seasonal habits, like opens one present on Christmas Eve, leaves cookies for Santa, or has an ugly sweater collection. Use it at a family gathering to compare traditions, or play it solo and see how many of your own habits show up. It's free with no signup. Print it before the holidays start or share it in the family group chat.",
    "faq": [
      {
        "q": "What's on the Holiday Traditions card?",
        "a": "25 common holiday habits and rituals, covering gifts, food, decorations, and family customs across different celebrations."
      },
      {
        "q": "Is this for one family or a bigger group?",
        "a": "Both. One family can play together at a gathering, or use it across extended family to see whose traditions match."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own family's specific traditions on the bingo maker."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no account needed. Christmas Bucket List Bingo is a good follow-up if you want a more specific checklist."
      }
    ],
    "related": [
      "christmas-bucketlist",
      "thanksgiving",
      "family-gathering",
      "winter-activities",
      "indoor-winter-family"
    ]
  },
  "college-life": {
    "intro": "College Life Bingo is a printable card of 25 things that happen in college, like has pulled an all-nighter studying, has done laundry at 2 AM, or has eaten ramen for multiple meals. Use it solo to laugh at your own past, or pass it around a dorm floor and see who's lived through the most. It's free, no signup needed. Print it for a dorm night or share it with your roommate group chat.",
    "faq": [
      {
        "q": "What's this bingo card about?",
        "a": "25 relatable college experiences, from finals week chaos to dorm life and campus jobs."
      },
      {
        "q": "Is this for one person or a group of students?",
        "a": "Either. Play solo to reminisce, or use it with a dorm floor, club, or graduating class as a group activity."
      },
      {
        "q": "Can I edit the squares?",
        "a": "Yes, customize them on the bingo maker to fit your specific school or major."
      },
      {
        "q": "Is it free?",
        "a": "Yes, free with no account required. Classroom Fun Bingo covers similar ground for younger students."
      }
    ],
    "related": [
      "classroom-activities",
      "party-icebreakers",
      "icebreakers",
      "deep-questions",
      "workout-fitness"
    ]
  },
  "numbers": {
    "intro": "Numbers Bingo is a classic printable card with the digits 1 through 100 filled into 25 squares, built for straightforward call-and-mark play. Use it in a classroom to help kids practice counting and number recognition, or run it as a simple game night with a caller reading numbers off a list. It's free with no signup required. Print a class set or grab one card for a quick game at home.",
    "faq": [
      {
        "q": "What is Numbers Bingo used for?",
        "a": "It's a classic numbers-based bingo card, good for classrooms teaching kids to count and recognize numbers, or any group wanting a simple call-and-mark game."
      },
      {
        "q": "How many players can join?",
        "a": "As many as you want. Print a card per player and use a caller to read numbers aloud."
      },
      {
        "q": "Can I change the number range or layout?",
        "a": "Yes, generate a new card on the bingo maker if you want a different range or fewer numbers for younger kids."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no account needed. Classroom Fun Bingo is a good pairing for classroom use."
      }
    ],
    "related": [
      "classroom-activities",
      "icebreakers",
      "family-gathering",
      "college-life",
      "book-reading"
    ]
  },
  "books-2025": {
    "intro": "2025 Books Bingo is a printable card of 25 of the year's most talked-about titles, from James and Atmosphere to Onyx Storm and Sunrise on the Reaping. Use it to track what you've read this year, or bring it to book club and see how many overlap with everyone else's stack. It's free and doesn't require an account. Print it for your next book club meeting or keep it handy while you build your library holds list.",
    "faq": [
      {
        "q": "What books are on this card?",
        "a": "25 of 2025's buzziest titles across fiction, fantasy, and nonfiction, from bestsellers to award contenders."
      },
      {
        "q": "Is this good for solo reading or a book club?",
        "a": "Both. Track your own reading solo, or use it at book club to compare who's read the most this year."
      },
      {
        "q": "Can I swap in different titles?",
        "a": "Yes, customize the squares on the bingo maker with your own to-be-read list."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. Acclaimed Books Bingo is a good pick if you want a mix of older favorites too."
      }
    ],
    "related": [
      "acclaimed-books",
      "book-reading",
      "nyt-fiction-bestsellers",
      "popular-book-club-picks",
      "summer-reading-experiences",
      "southern-books"
    ]
  },
  "movies-2025-new": {
    "intro": "2025 Movies Bingo is a printable card of 25 movies that came out this year, from One Battle After Another and Sinners to Wicked: For Good and The Naked Gun. Use it to track what you've actually watched during awards season, or turn it into a game with friends guessing who's seen the most. Free to use, no signup. Print it before movie night or pull it up on your phone at the theater.",
    "faq": [
      {
        "q": "What movies are on the 2025 movies bingo card?",
        "a": "25 movies from this year, everything from One Battle After Another and Frankenstein to Zootopia 2 and Wicked: For Good."
      },
      {
        "q": "Is this for one person or a group?",
        "a": "Both work. Mark it off solo as you watch throughout the year, or compare cards with friends to see who's seen the most."
      },
      {
        "q": "Can I swap out the movies?",
        "a": "Yes, edit any square in the free bingo card maker if you want to add a title that's missing or drop one you haven't seen."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a 2025 TV Shows bingo card if movies alone don't cover your watch list."
      }
    ],
    "related": [
      "tv-shows-2025",
      "trends-2025",
      "movies-out-now-2026",
      "movies-coming-soon-2026",
      "books-2025",
      "hit-songs-2026",
      "artists-2026"
    ]
  },
  "trends-2025": {
    "intro": "2025 Trends Bingo is a printable card of 25 things that defined the year, from matcha and beef tallow to Love Island marathons and Katy Perry's space voyage. Use it as a year-end reflection with friends, or fill it out solo to see how terminally online you were in 2025. Free, no signup needed. Print it for a New Year's party or send it around the group chat.",
    "faq": [
      {
        "q": "What's on the 2025 trends bingo card?",
        "a": "25 moments and habits that defined 2025, from wearing animal print and drinking matcha to watching K-pop Demon Hunters and tracking fitness with a wearable."
      },
      {
        "q": "Is this a solo thing or a group game?",
        "a": "Either. Fill it out alone as a personal year-in-review, or hand cards out at a party and see whose year had the most overlap."
      },
      {
        "q": "Can I change the trends listed?",
        "a": "Yes, edit any square in the free bingo card maker to swap in trends that actually happened in your circle."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. Check out the Happy News 2026 bingo card too if you want to start the new year on a lighter note."
      }
    ],
    "related": [
      "movies-2025-new",
      "tv-shows-2025",
      "happy-news-2026",
      "hit-songs-2026",
      "artists-2026",
      "resolutions-2025",
      "ultra-specific-resolutions"
    ]
  },
  "tv-shows-2025": {
    "intro": "2025 TV Shows Bingo is a printable card of 25 shows that had everyone talking this year, from Severance and The Studio to Squid Game and The Last of Us. Use it to track what's actually made it onto your watchlist, or turn it into a party game where whoever's seen the most picks the next show. Totally free, no signup. Print it out for a watch party or keep it open on your phone between episodes.",
    "faq": [
      {
        "q": "What shows are on the 2025 TV bingo card?",
        "a": "25 shows people watched and talked about this year, including Andor, Adolescence, The Bear, and Stranger Things 5."
      },
      {
        "q": "Can I play this alone or with a group?",
        "a": "Both work well. Solo viewers check off shows as they finish them, and groups compare cards to see who has the most watched."
      },
      {
        "q": "Can I customize the list?",
        "a": "Yes, edit any square in the free bingo card maker to add shows you're watching that aren't on the default list."
      },
      {
        "q": "Is it free to use?",
        "a": "Free, no signup required. This site also has a 2025 Movies bingo card if you want to cover the big screen too."
      }
    ],
    "related": [
      "movies-2025-new",
      "trends-2025",
      "movies-out-now-2026",
      "books-2025",
      "artists-2026",
      "hit-songs-2026"
    ]
  },
  "christmas-bucketlist": {
    "intro": "Christmas Bucket List Bingo is a printable card of 25 holiday activities like decorating the tree, making a gingerbread house, and going Christmas light viewing. Use it to plan out the season with your family, or check things off as you go so December doesn't fly by without the fun stuff. Free with no signup. Print it out and stick it on the fridge, or share it in the family group chat.",
    "faq": [
      {
        "q": "What's on the Christmas bucket list bingo card?",
        "a": "25 holiday activities like decorating the tree, baking Christmas cookies, going ice skating, and writing letters to Santa."
      },
      {
        "q": "Is this for one person or the whole family?",
        "a": "Works great as a family project. Print one big card for everyone to check off together, or give each kid their own."
      },
      {
        "q": "Can I add our own family traditions?",
        "a": "Yes, edit any square in the free bingo card maker to swap in whatever your family actually does over the holidays."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. There's also a Thanksgiving bingo card on this site if you want to start the season a little earlier."
      }
    ],
    "related": [
      "thanksgiving",
      "holiday-traditions",
      "winter-family-all",
      "indoor-winter-family",
      "outdoor-winter-family",
      "family-gathering"
    ]
  },
  "deep-questions": {
    "intro": "Deep Questions Bingo is a printable card of 25 conversation starters, like what's the best book you've read in five years or if you had to give aliens three gifts representing humanity, what would they be. Use it to break the ice at a dinner party, or pass it around when small talk needs a boost. No signup, completely free. Print it before guests arrive or pull it up on your phone at the table.",
    "faq": [
      {
        "q": "What's this bingo card for?",
        "a": "Each square is a question, not a task. Someone reads it out loud and answers, so it works as a conversation-starter game instead of an activity checklist."
      },
      {
        "q": "How many people can play?",
        "a": "Any size group. Pass the card around and have each person answer a different square, or use it one-on-one for a deeper catch-up."
      },
      {
        "q": "Can I swap in my own questions?",
        "a": "Yes, edit any square in the free bingo card maker if you want more personal or more random questions."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a Family Gathering bingo card with questions built for holiday dinners specifically."
      }
    ],
    "related": [
      "family-gathering",
      "icebreakers",
      "party-icebreakers",
      "office-party",
      "wedding-reception",
      "baby-shower"
    ]
  },
  "family-gathering": {
    "intro": "Family Gathering Bingo is a printable card of 25 questions for the dinner table, like what's your family's funniest holiday story or what's one thing you're grateful for this year that surprises you. Use it to get everyone talking during the meal, or pass it around after dinner when the conversation needs a nudge. Free, no signup at all. Keep it on your phone for the drive over or print it before everyone arrives.",
    "faq": [
      {
        "q": "What's on this bingo card?",
        "a": "25 questions for family members to answer out loud, covering holiday memories, gratitude, and goals for the year ahead."
      },
      {
        "q": "How does this work with a big group?",
        "a": "Great for any size. Go around the table and have each person answer a square, or let people pick which questions they want to answer."
      },
      {
        "q": "Can I add our own questions?",
        "a": "Yes, edit any square in the free bingo card maker to fit your family's specific traditions or inside jokes."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. There's also a Deep Questions bingo card on this site if you want a version that's less holiday-specific."
      }
    ],
    "related": [
      "deep-questions",
      "thanksgiving",
      "christmas-bucketlist",
      "holiday-traditions",
      "icebreakers",
      "party-icebreakers"
    ]
  },
  "indoor-winter-adult": {
    "intro": "Indoor Winter Activities (Adult) Bingo is a printable card of 25 things to do when it's too cold to go outside, like taking a pottery class, hosting a dinner party, or hitting up karaoke night. Use it to plan out a winter's worth of date nights, or turn it into a challenge with friends to see who fills their card first. Free, no signup necessary. Pin it up at home or save it to your phone for planning weekends.",
    "faq": [
      {
        "q": "What's on the indoor winter adult bingo card?",
        "a": "25 grown-up activities for cold months, from pottery classes and wine tastings to escape rooms and board game tournaments."
      },
      {
        "q": "Is this for couples, friend groups, or solo?",
        "a": "All of the above. Use it as a date night list, a group challenge with friends, or a personal to-do list for winter."
      },
      {
        "q": "Can I customize the activities?",
        "a": "Yes, edit any square in the free bingo card maker to swap in things that are actually available where you live."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has an Indoor Winter Activities (Family) bingo card if kids are joining in too."
      }
    ],
    "related": [
      "indoor-winter-family",
      "outdoor-winter-adult",
      "winter-adult-all",
      "snow-camping-winter",
      "pnw-ski-season",
      "ultra-specific-resolutions"
    ]
  },
  "indoor-winter-family": {
    "intro": "Indoor Winter Activities (Family) Bingo is a printable card of 25 things to do with kids when it's too cold outside, like building a blanket fort, making a hot chocolate bar, or doing a puzzle challenge. Use it to fight off cabin fever on snow days, or work through it as a winter break checklist. Free, no account needed. Print it out for the fridge or keep it handy on a snowy afternoon.",
    "faq": [
      {
        "q": "What's on the indoor winter family bingo card?",
        "a": "25 kid-friendly activities for cold days, like making gingerbread houses, building forts, and having an indoor snowball fight."
      },
      {
        "q": "How many kids can play at once?",
        "a": "As many as you want. Print one card per kid, or use one big card as a family checklist to work through together."
      },
      {
        "q": "Can I change the activities?",
        "a": "Yes, edit any square in the free bingo card maker to match your kids' ages or what you have on hand."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. There's also an Outdoor Winter Activities (Family) bingo card on this site for when the snow clears up."
      }
    ],
    "related": [
      "indoor-winter-adult",
      "outdoor-winter-family",
      "winter-family-all",
      "christmas-bucketlist",
      "classroom-activities",
      "holiday-traditions"
    ]
  },
  "alma-maters": {
    "intro": "Alma Mater Bingo is a printable card of 25 schools people actually rep, from Harvard and Michigan to Spelman, RISD, Ole Miss and Berklee. Use it as an icebreaker when nobody in the room knows each other yet, or at a reunion where everyone knows each other far too well and will argue about football regardless. Free, no signup. Print a stack before people arrive, or pull it up on your phone and start asking.",
    "faq": [
      {
        "q": "What schools are on an alma mater bingo card?",
        "a": "The pool holds 57: the Ivies and their neighbors, big public flagships like Michigan and UT Austin, SEC football powers, small liberal arts colleges, HBCUs including Spelman and Howard, and art schools like RISD and Juilliard. Each card draws 25, so no two come out the same."
      },
      {
        "q": "How many people do you need to play?",
        "a": "It works from about six upward, and it gets better the more mixed the room is, because you need real range to fill a card. At a smaller dinner, play it as a conversation starter rather than a race to five in a row."
      },
      {
        "q": "Can I swap in different schools?",
        "a": "Yes. Edit the list before you print. Drop in the schools that actually turn up in your circle, add your regional favorites, or narrow the whole thing down to one conference if that is the crowd."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup and no account. If your group has more schools in common than not, College Life Bingo asks about the experience instead of the name on the diploma."
      }
    ],
    "related": [
      "college-life",
      "icebreakers",
      "party-icebreakers",
      "deep-questions",
      "office-party"
    ]
  },
  "fast-food-brands": {
    "intro": "Fast Food Chains Bingo is a printable card of 25 places you have definitely eaten at, from McDonald's and Taco Bell to In-N-Out, Whataburger, Cook Out and Portillo's. Use it on a road trip to mark off every sign you pass, or at a party to settle once and for all which regional chain is genuinely the best. Free, no signup needed. Print it before you leave, or keep it open on your phone from the passenger seat.",
    "faq": [
      {
        "q": "What chains are on the card?",
        "a": "44 in the pool: the national giants, the ones that top customer satisfaction surveys like Jersey Mike's and Culver's, regional cult favorites including Whataburger, Cook Out and Bojangles, and newer arrivals like Dave's Hot Chicken, CAVA and Mixue."
      },
      {
        "q": "Is this better on a road trip or at a party?",
        "a": "Both, and they play differently. On the road you are marking off signs as they go past, which rewards a long drive. At a party you are marking off what people have actually eaten, which turns into an argument about regional loyalty almost immediately."
      },
      {
        "q": "Can I add local chains?",
        "a": "Yes, and you should. The card is far funnier with the places only your area has. Edit the phrase list before printing and swap the national names for whatever counts as a landmark where you live."
      },
      {
        "q": "Does it cost anything?",
        "a": "No, it is free with no signup. For something broader than drive-thrus, Food Adventures Bingo covers everything people have eaten rather than where they bought it."
      }
    ],
    "related": [
      "food-adventures",
      "travel-experiences",
      "road-trip-west",
      "summer-bucketlist",
      "icebreakers",
      "party-icebreakers"
    ]
  },
  "vacation-styles": {
    "intro": "Types of Vacation Bingo is a printable card of 25 ways to take a trip, from a bachelorette weekend and a river cruise to a silent retreat, a gap year and full bleisure. Use it to work out what kind of traveler everyone in the group actually is, or as an icebreaker that gets people telling stories instead of listing job titles. Free and no signup. Print it for the trip, or open it on your phone over dinner.",
    "faq": [
      {
        "q": "What counts as a vacation style?",
        "a": "47 of them are in the pool, covering who you go with, how you get there and why. Girls trips and family reunions, RV trips and train journeys and sailing charters, safaris and silent retreats, plus the modern ones like set-jetting, digital nomad stints and sports tourism built around the World Cup or the Olympics."
      },
      {
        "q": "Is this for planning a trip or playing at one?",
        "a": "Either. As a planning tool it surfaces the kind of trip nobody thought to suggest. As a game it works best at a dinner where people have traveled differently, because every marked square comes with a story attached."
      },
      {
        "q": "Can I make my own version?",
        "a": "Yes. Edit the list before you print and keep only the styles your group would realistically consider, or go the other way and load it with the trips nobody has taken yet and treat it as a bucket list."
      },
      {
        "q": "Is it free to use?",
        "a": "Free, no signup. If you would rather track the things you did on a trip than the kind of trip it was, Travel Experiences Bingo covers that instead."
      }
    ],
    "related": [
      "travel-experiences",
      "road-trip-west",
      "summer-bucketlist",
      "food-adventures",
      "christmas-bucketlist",
      "icebreakers"
    ]
  },
  "outdoor-winter-adult": {
    "intro": "Outdoor Winter Activities (Adult) Bingo is a printable card of 25 cold-weather adventures, like backcountry ski touring, ice climbing, dog sledding, and chasing the Northern Lights. Use it to plan out an ambitious winter of trip ideas, or turn it into a challenge with your ski buddies to see who checks off the most. Free, no account required. Print it before the season starts or save it to your phone for trip planning.",
    "faq": [
      {
        "q": "What's on the outdoor winter adult bingo card?",
        "a": "25 outdoor winter activities for adults, from downhill skiing and snowmobiling to ice fishing and staying at an ice hotel."
      },
      {
        "q": "Is this for solo trips or groups?",
        "a": "Works either way. Use it as a personal adventure list or a shared challenge with a group of friends over a whole season."
      },
      {
        "q": "Can I swap in activities specific to where I live?",
        "a": "Yes, edit any square in the free bingo card maker to add local trails, resorts, or trips."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a PNW Ski Season bingo card if you're specifically chasing Pacific Northwest powder."
      }
    ],
    "related": [
      "outdoor-winter-family",
      "indoor-winter-adult",
      "winter-adult-all",
      "snow-camping-winter",
      "pnw-ski-season",
      "winter-activities"
    ]
  },
  "outdoor-winter-family": {
    "intro": "Outdoor Winter Activities (Family) Bingo is a printable card of 25 things to do in the snow with kids, like building a snow fort, making frozen bubbles, or going on a winter scavenger hunt. Use it to get everyone off the couch on a snow day, or work through it over a whole winter break. Free, no signup required. Print it before the first snowfall or bring it along on your next winter outing.",
    "faq": [
      {
        "q": "What's on the outdoor winter family bingo card?",
        "a": "25 snow day activities for families, like building snowmen, going sledding, and searching for animal tracks."
      },
      {
        "q": "How many kids can use one card?",
        "a": "Print as many as you need, one per kid or one shared card the whole family works through together."
      },
      {
        "q": "Can I add our own local activities?",
        "a": "Yes, edit any square in the free bingo card maker to include a favorite sledding hill or nearby winter festival."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. There's also an Indoor Winter Activities (Family) bingo card for when the weather doesn't cooperate."
      }
    ],
    "related": [
      "indoor-winter-family",
      "outdoor-winter-adult",
      "winter-family-all",
      "snow-camping-winter",
      "christmas-bucketlist",
      "winter-activities"
    ]
  },
  "ultra-specific-resolutions": {
    "intro": "Ultra Specific Resolutions Bingo is a printable card of 25 concrete goals, like drinking 8 glasses of water daily, saving $100 a month, or reading 12 books this year. Use it to make your New Year's resolutions actually trackable, or pin it up as a reminder of what you're working toward. Free with no signup. Print it out on January 1st or save it to your phone to check off as you go.",
    "faq": [
      {
        "q": "What's different about this resolutions card?",
        "a": "Instead of vague goals like 'get healthier,' every square is a specific, measurable habit like exercising 3 times a week or meditating for 10 minutes daily."
      },
      {
        "q": "Is this for one person or can a group do it together?",
        "a": "Works solo as a personal tracker, or as a shared challenge with friends or family working on resolutions together."
      },
      {
        "q": "Can I change the goals to match mine?",
        "a": "Yes, edit any square in the free bingo card maker to swap in resolutions that actually fit your life."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a 2025 Resolutions bingo card if you want a broader, less specific version."
      }
    ],
    "related": [
      "resolutions-2025",
      "book-reading",
      "hiking",
      "winter-adult-all",
      "trends-2025",
      "happy-news-2026"
    ]
  },
  "winter-adult-all": {
    "intro": "Winter Activities (Adult) Bingo is a printable card of 25 things to do all season long, mixing indoor picks like paint and sip nights with outdoor ones like downhill skiing and the Northern Lights. Use it to plan a well-rounded winter instead of just hibernating, or turn it into a friendly competition with your crew. No cost, no signup. Print it out at the start of the season or save it for weekend planning.",
    "faq": [
      {
        "q": "What's on the winter activities adult bingo card?",
        "a": "25 mixed indoor and outdoor activities for winter, from pottery classes and karaoke to skiing, ice skating, and hot springs trips."
      },
      {
        "q": "Is this for solo use or a group?",
        "a": "Both. Use it as your own winter bucket list or share it with friends to compare who's done the most by spring."
      },
      {
        "q": "Can I customize the list?",
        "a": "Yes, edit any square in the free bingo card maker to fit what's actually available near you."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has separate Indoor and Outdoor Winter Activities (Adult) cards if you want to focus on one or the other."
      }
    ],
    "related": [
      "indoor-winter-adult",
      "outdoor-winter-adult",
      "winter-family-all",
      "snow-camping-winter",
      "pnw-ski-season",
      "ultra-specific-resolutions"
    ]
  },
  "winter-family-all": {
    "intro": "Winter Activities (Family) Bingo is a printable card of 25 things to do together all season, mixing indoor picks like making a gingerbread house with outdoor ones like sledding and building snow forts. Use it to keep the whole winter full of plans instead of just the holidays, or work through it as a family challenge. No signup, free to print. Print it out for the fridge or bring it along wherever winter takes you.",
    "faq": [
      {
        "q": "What's on the winter activities family bingo card?",
        "a": "25 mixed indoor and outdoor activities for families, like baking cookies, having snowball fights, and visiting a winter festival."
      },
      {
        "q": "How many kids can use this?",
        "a": "Print one per kid or use a single card as a shared family checklist for the whole season."
      },
      {
        "q": "Can I swap in our own activities?",
        "a": "Yes, edit any square in the free bingo card maker to match your family's winter traditions."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has separate Indoor and Outdoor Winter Activities (Family) cards if you want to narrow it down."
      }
    ],
    "related": [
      "indoor-winter-family",
      "outdoor-winter-family",
      "winter-adult-all",
      "christmas-bucketlist",
      "snow-camping-winter",
      "holiday-traditions"
    ]
  },
  "bouldering-gym": {
    "intro": "Bouldering Gym Chaos Bingo is a printable card of 25 things that happen on the mat: getting beta sprayed by a total stranger, ripping a flapper, slipping off a volume, watching a 10-year-old flash your project. Use it solo to make an off night funnier, or bring it to the gym and pass it around your climbing crew. Free, no signup, just print it or pull it up on your phone before your next session.",
    "faq": [
      {
        "q": "What's on the bouldering bingo card?",
        "a": "Gym chaos: flappers ripping, chalk bag explosions, beta spray from strangers, someone climbing in jeans, and the eternal complaint that the grading is soft."
      },
      {
        "q": "Is this for one climber or a whole group?",
        "a": "Both. Mark it solo during a session, or hand cards out to your climbing partners and see who bingos first."
      },
      {
        "q": "Can I change the squares?",
        "a": "Yes, swap in your own gym's inside jokes on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no account needed. If you're into other niche hobby cards, check out Crafting & Fiber Arts Bingo too."
      }
    ],
    "related": [
      "crafting-fiber-arts",
      "workout-fitness",
      "progression-fantasy",
      "hiking",
      "multi-day-backpacking",
      "washington-trails",
      "backpacking-gear"
    ]
  },
  "progression-fantasy": {
    "intro": "Progression Fantasy & LitRPG Bingo is a printable card of 25 genre staples: an overpowered unique skill, a sentient weapon with a sarcastic personality, a system message interrupting a serious conversation, an arrogant young master demanding face. Use it while you binge your current series, or pass it to your book club and see who spots the tropes first. It's free with no signup, print it out or keep it open on your phone for your next reading binge.",
    "faq": [
      {
        "q": "What's on the LitRPG bingo card?",
        "a": "Genre tropes: system messages, secret bloodlines, rigged tournament arcs, forbidden ancient magic, and villains monologuing about ants."
      },
      {
        "q": "Can a group play together?",
        "a": "Sure. Read solo and mark tropes as you go, or get your whole book club or Discord server on cards and compare notes."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in tropes from your favorite series on the free bingo card maker."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, totally free and no signup. If you're a big reader, Book Reading Challenge Bingo is a good next one to try."
      }
    ],
    "related": [
      "book-reading",
      "workout-fitness",
      "crafting-fiber-arts",
      "acclaimed-books",
      "bouldering-gym"
    ]
  },
  "multi-day-backpacking": {
    "intro": "Multi-Day Backpacking Bingo is a printable card of 25 things that happen out on trail: forgetting the spork, tent condensation dripping on your face, a bear canister stuck closed, mosquitos ignoring your bug spray completely. Use it solo to track the chaos of a long trip, or hand it to your backpacking crew and compare cards at camp. It's free with no signup, print it before you head into the backcountry or save it to your phone for camp.",
    "faq": [
      {
        "q": "What's on the backpacking bingo card?",
        "a": "Real trail moments: blisters on mile one, sleeping pads deflating overnight, raccoons after your food, and that one lie about being almost at the top."
      },
      {
        "q": "How many backpackers can play?",
        "a": "Any number. Print a card per person or share one and mark it together around the fire."
      },
      {
        "q": "Can I customize it?",
        "a": "Yes, add your own trip's running jokes on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. Pair it with Backpacking Gear Bingo if you want to track your gear woes too."
      }
    ],
    "related": [
      "backpacking-gear",
      "washington-trails",
      "snow-camping-winter",
      "hiking",
      "after-work-seattle",
      "garmin-hike-stats"
    ]
  },
  "crafting-fiber-arts": {
    "intro": "Crafting & Fiber Arts Bingo is a printable card of 25 things that happen mid-project: playing yarn chicken and losing, frogging the entire thing, a cat attacking the yarn ball, tension going completely uneven. Use it solo during a crafting binge, or bring it to your stitch and bitch group and see who relates hardest. Free, no signup, print it out or keep it handy next to your project bag.",
    "faq": [
      {
        "q": "What's on the crafting bingo card?",
        "a": "Crafting chaos: dropped stitches, tangled embroidery thread, buying supplies for a new hobby before finishing the last one, and glitter that shows up days later."
      },
      {
        "q": "Is this for solo crafters or groups?",
        "a": "Both work. Mark it alone while you craft, or pass cards around your knitting circle or craft night."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own craft mishaps on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no account required. If you climb too, Bouldering Gym Chaos Bingo has the same kind of energy."
      }
    ],
    "related": [
      "bouldering-gym",
      "progression-fantasy",
      "book-reading",
      "artists-2026",
      "workout-fitness"
    ]
  },
  "washington-trails": {
    "intro": "Washington Trails Bingo is a printable card of 25 real Washington hikes: Rattlesnake Ledge, Lake Serene, the Enchantments day hike, Hoh Rain Forest, Rialto Beach. Use it to plan out your hiking season, or hand it to a hiking buddy and race to check off the most trails first. It's free with no signup, print it out and pin it to your gear closet or save it to your phone for trip planning.",
    "faq": [
      {
        "q": "What's on the Washington trails bingo card?",
        "a": "25 real PNW hikes across the state, from Little Si and Mailbox Peak to Colchuck Lake and Cape Flattery."
      },
      {
        "q": "Is this for solo hikers or a hiking group?",
        "a": "Either. Use it as a personal hike list, or pass cards around a hiking group and compare progress."
      },
      {
        "q": "Can I customize the trails?",
        "a": "Yes, swap in your own must-hike list on the free bingo card maker."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, free and no signup. If you want something closer to home, After-Work Seattle Hiking Bingo covers quick evening hikes."
      }
    ],
    "related": [
      "after-work-seattle",
      "multi-day-backpacking",
      "garmin-hike-stats",
      "enchantments-day",
      "backpacking-gear",
      "snow-camping-winter"
    ]
  },
  "backpacking-gear": {
    "intro": "Backpacking Gear Bingo is a printable card of 25 real pieces of gear and gear rituals: the Gossamer Gear Mariposa, a Sawyer Micro Squeeze, Darn Tough socks, a cut-in-half toothbrush, an enamel bird mug. Use it to track your own gear obsessions, or bring it to camp and see whose pack matches the most squares. It's free with no signup, print it before your next trip or pull it up while you're packing.",
    "faq": [
      {
        "q": "What's on the backpacking gear bingo card?",
        "a": "Real gear: packs, sleeping pads, water filters, bear canisters, camp shoes, and rituals like renting from REI or shaving ounces off every item."
      },
      {
        "q": "Is this for one backpacker or a group?",
        "a": "Both. Mark your own gear solo, or pass cards around at camp and compare setups with your crew."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own gear list on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup needed. Pair it with Multi-Day Backpacking Bingo for the trail moments too."
      }
    ],
    "related": [
      "multi-day-backpacking",
      "snow-camping-winter",
      "washington-trails",
      "garmin-hike-stats",
      "pnw-ski-season"
    ]
  },
  "after-work-seattle": {
    "intro": "Seattle Hiking Bingo is a printable card of 25 things that happen on an after-work hike: starting by 5:30, chasing golden hour, hiking Cougar Mountain or Margaret's Way, coming down by headlamp. Use it solo to make weeknight hikes feel like a game, or share it with your hiking group and compare who logged the most squares. Free, no signup, print it out or save it to your phone before you head to the trailhead.",
    "faq": [
      {
        "q": "What's on the Seattle hiking bingo card?",
        "a": "Local after-work hiking life: Discover Pass on the dash, I-90 Exit 38, sunset payoffs, and coffee runs to Gearhouse after."
      },
      {
        "q": "Solo or group hiking?",
        "a": "Either. Track your own after-work hikes, or share cards with a hiking group like Club Cascadia or Seattle Scramble."
      },
      {
        "q": "Can I customize it?",
        "a": "Yes, add your own regular routes on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Yes, completely free. Washington Trails Bingo is a good next card if you want to range further from the city."
      }
    ],
    "related": [
      "washington-trails",
      "garmin-hike-stats",
      "battling-seattle-freeze",
      "multi-day-backpacking",
      "pnw-ski-season",
      "seattle-travel"
    ]
  },
  "garmin-hike-stats": {
    "intro": "Garmin & Hiking Stats Bingo is a printable card of 25 things that happen when you're obsessive about hike data: a bogus Garmin track, leaving your watch running after you stop, GPS gain reading low in the snow, checking the WTA guide stats before you even leave the house. Use it solo to laugh at your own data habits, or pass it to a hiking friend who also can't stop checking moving time versus elapsed time. It's free with no signup, print it or keep it open next to your Garmin app.",
    "faq": [
      {
        "q": "What's this bingo card about?",
        "a": "The specific chaos of tracking hikes obsessively: Garmin glitches, permit types, GPS mismatches, and comparing your stats to AllTrails or WTA."
      },
      {
        "q": "Is this for solo hikers or a group?",
        "a": "Mostly a solo, nerdy tracking habit, but it's fun to compare cards with a hiking partner who's just as into the data."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own tracking quirks on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. After-Work Seattle Hiking Bingo pairs well if you want the trail side of things too."
      }
    ],
    "related": [
      "after-work-seattle",
      "washington-trails",
      "backpacking-gear",
      "snow-camping-winter",
      "multi-day-backpacking"
    ]
  },
  "snow-camping-winter": {
    "intro": "Winter Snow Camping Bingo is a printable card of 25 things that happen on a snow camping trip: renting snowshoes from REI, stomping out a tent platform, following footprints instead of a marked trail, warming up with a HotHands and a hot tea. Use it solo to track your first winter backpacking trip, or bring it along with your winter camping crew and compare cards at Kendall Lakes or Commonwealth Basin. Free, no signup, print it before the trip or pull it up in your tent.",
    "faq": [
      {
        "q": "What's on the winter camping bingo card?",
        "a": "Snow camping specifics: rental gear, wag bags, insulated pads, Sno-Park permits, and the quiet of a frozen lake at camp."
      },
      {
        "q": "Is this for a solo trip or a group?",
        "a": "Works either way. Mark it alone on a first winter trip, or hand cards out to your whole camping group."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own winter trip details on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. Backpacking Gear Bingo is a good companion if you're gearing up for the trip."
      }
    ],
    "related": [
      "backpacking-gear",
      "multi-day-backpacking",
      "pnw-ski-season",
      "washington-trails",
      "garmin-hike-stats"
    ]
  },
  "pnw-ski-season": {
    "intro": "PNW Ski Season Bingo is a printable card of 25 things that happen on a Pacific Northwest ski day: fighting Highway 2 traffic, debating Epic Pass versus Ikon Pass, a $30 Thursday night at Summit at Snoqualmie, chasing bluebird days at Crystal Mountain. Use it solo to track your season, or bring it to the mountain and pass it around your ski crew. It's free with no signup, print it out or save it to your phone for lift line boredom.",
    "faq": [
      {
        "q": "What's on the ski season bingo card?",
        "a": "PNW ski life: resort runs, pass debates, gear gripes about goggles and mittens, and the eternal Highway 2 traffic complaint."
      },
      {
        "q": "Solo skier or a whole crew?",
        "a": "Either. Track your own season, or hand cards to your ski buddies and compare who fills theirs first."
      },
      {
        "q": "Can I customize it?",
        "a": "Yes, swap in your own resort or gear list on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Yes, free and no signup. Winter Snow Camping Bingo is a good one to pair with it if you're outside all winter."
      }
    ],
    "related": [
      "snow-camping-winter",
      "washington-trails",
      "backpacking-gear",
      "after-work-seattle",
      "battling-seattle-freeze"
    ]
  },
  "san-juan-islands": {
    "intro": "San Juan Islands Weekend Bingo is a printable card of 25 things that happen on an island getaway: catching the ferry from Anacortes, biking Orcas Island's hills, whale watching between May and September, that panicked 10 pm ferry disembark. Use it solo to track your own island weekend, or bring it along and pass it to whoever you're traveling with. Free, no signup, print it before you leave or pull it up on the ferry.",
    "faq": [
      {
        "q": "What's on the San Juan Islands bingo card?",
        "a": "Ferry logistics, island specifics like Friday Harbor and Moran State Park, whale season, and the classic biking-Orcas-hills struggle."
      },
      {
        "q": "Is this for solo travelers or a group?",
        "a": "Both. Track your own trip, or hand cards to friends on the same ferry."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own island stops on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup needed. San Juan Islands Travel Bingo is a good companion if you want more general trip squares too."
      }
    ],
    "related": [
      "san-juan-islands-travel",
      "seattle-travel",
      "washington-trails",
      "battling-seattle-freeze",
      "road-trip-west",
      "travel-experiences"
    ]
  },
  "battling-seattle-freeze": {
    "intro": "Seattle Freeze Bingo is a printable card of 25 things that happen when you're trying to make friends through a Seattle winter: surviving the Big Dark, joining a run club like Club Cascadia, going to a Puzzled Pint Tarot night, admitting that showing up is the hardest part. Use it solo to gamify your own effort to get out there, or bring it to a friend also fighting the freeze. It's free with no signup, print it out or keep it on your phone through the dark months.",
    "faq": [
      {
        "q": "What's this bingo card about?",
        "a": "The specific grind of making friends in Seattle: group activities, hobby classes, and honest admissions about how hard showing up can be."
      },
      {
        "q": "Is this for one person or a group?",
        "a": "Mostly solo, to track your own effort, but it's a fun one to compare with a friend doing the same thing."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own go-to activities on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Yes, totally free, no signup. Seattle Travel Bingo is a good one to check out too if you're new to the city."
      }
    ],
    "related": [
      "seattle-travel",
      "after-work-seattle",
      "garmin-hike-stats",
      "pnw-ski-season",
      "travel-experiences"
    ]
  },
  "vietnam-trip": {
    "intro": "Vietnam Trip Bingo is a printable card of 25 things from an actual trip to Vietnam: pho for breakfast, haggling at Ben Thanh Market, three rounds of egg coffee, the Ha Giang Loop, a $28 cat-eye manicure. Use it solo to track your own trip highlights, or hand it to your travel buddies and compare cards over drinks. Free, no signup, print it before you fly or pull it up on your phone between stops.",
    "faq": [
      {
        "q": "What's on the Vietnam bingo card?",
        "a": "Real trip details: street food, market haggling, ATM logistics, the Ha Giang Loop, and specific spots like KKV and 7 Bridges."
      },
      {
        "q": "Is this for solo travelers or a group?",
        "a": "Either. Solo travelers track their own trip, or a travel group each takes a card and compares notes at the end."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own trip stops on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. Vietnam Travel Bingo is a good companion if you want a more general version too."
      }
    ],
    "related": [
      "vietnam-travel",
      "road-trip-west",
      "san-juan-islands",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "road-trip-west": {
    "intro": "West Coast Road Trip Bingo is a printable card of 25 real stops from a Banff-to-redwoods drive: Garfield Peak at Crater Lake, larches in Larch Valley, Fern Canyon, the drive-thru tree, a star party at Logan Pass. Use it solo to track your route, or hand it to whoever's in the passenger seat and see who spots stops first. It's free with no signup, print it before you leave or save it to your phone for the drive.",
    "faq": [
      {
        "q": "What's on the road trip bingo card?",
        "a": "Real stops across a Banff-to-California route: national parks, waterfalls, redwood groves, and scenic overlooks along the way."
      },
      {
        "q": "Is this for a solo driver or a carful of people?",
        "a": "Both. Solo drivers can track their own route, or everyone in the car gets a card and compares at each stop."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own route's stops on the free bingo card maker."
      },
      {
        "q": "Is it free?",
        "a": "Yes, free and no signup. California Highlights Bingo or Oregon Highlights Bingo make good companions for parts of this route."
      }
    ],
    "related": [
      "california-highlights",
      "oregon-highlights",
      "banff-travel",
      "washington-state-highlights",
      "travel-experiences",
      "san-juan-islands"
    ]
  },
  "london-travel": {
    "intro": "London Travel Bingo is a printable card of 25 things to see, eat, and do across London, from Borough Market and Big Ben to a proper afternoon tea at the Savoy. Use it while planning your itinerary, or hand it to your travel group to check off as you wander from Westminster Bridge to Covent Garden. It's free, no signup required. Print it before your flight or keep it open on your phone for the whole trip.",
    "faq": [
      {
        "q": "What's on a London travel bingo card?",
        "a": "Landmarks and food stops around the city: Big Ben, Borough Market, the London Eye, a West End show, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a day out, and groups use it to compare who's spotted what over pints at a pub."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "dublin-travel",
      "edinburgh-travel",
      "ireland-travel",
      "scotland-travel",
      "paris-travel",
      "amsterdam-travel",
      "berlin-travel",
      "prague-travel"
    ]
  },
  "finland-travel": {
    "intro": "Finland Travel Bingo is a printable card of 25 things to see and try around Helsinki and beyond, from a sauna jump at Löyly to grilled makkara from a street kiosk. Use it while mapping out your trip, or pass it around with friends as you hit Suomenlinna fortress and the Design District. It's free and doesn't ask for an account. Print it at home or pull it up on your phone once you land.",
    "faq": [
      {
        "q": "What's on a Finland travel bingo card?",
        "a": "Helsinki sights and local rituals: Suomenlinna fortress, Temppeliaukio Rock Church, sauna culture, and food like makkara from a grill kiosk."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both work well. Solo travelers use it to structure a day, and groups use it to turn sauna nights into a friendly competition."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities and countries, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "copenhagen-travel",
      "iceland-travel",
      "amsterdam-travel",
      "berlin-travel",
      "prague-travel",
      "edinburgh-travel"
    ]
  },
  "vietnam-travel": {
    "intro": "Vietnam Travel Bingo is a printable card of 25 things to see, eat, and do across the country, from egg coffee in Hanoi to the Ha Giang Loop and a boat ride through Ha Long Bay. Use it while planning your route, or hand it to your travel group as you move between Hanoi's Old Quarter and Hoi An's lantern-lit streets. It's totally free, no login needed. Print it before you fly or save it to your phone for the road.",
    "faq": [
      {
        "q": "What's on a Vietnam travel bingo card?",
        "a": "Landmarks, food, and travel moments from north to south: the Cu Chi Tunnels, Ha Long Bay, egg coffee, and the Ha Giang Loop."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to shape their route, and groups use it to compare notes over pho."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, there's also a Vietnam Trip Bingo card with a different set of stops, plus cards for 30+ other cities and countries."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate the card, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "vietnam-trip",
      "bangkok-travel",
      "singapore-travel",
      "seoul-travel",
      "tokyo-travel",
      "kyoto-travel",
      "food-adventures"
    ]
  },
  "rome-travel": {
    "intro": "Rome Travel Bingo is a printable card of 25 things to see and eat around the city, from the Colosseum and Trevi Fountain to a plate of cacio e pepe in Trastevere. Use it while planning your days, or bring it along and check things off as you wander from the Pantheon to Piazza Navona. It's free to use, no signup involved. Print it before your trip or keep it handy on your phone while you walk the city.",
    "faq": [
      {
        "q": "What's on a Rome travel bingo card?",
        "a": "Ancient sites, piazzas, and food stops: the Colosseum, the Vatican Museums, Trevi Fountain, and a gelato break in between."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a walking route, and groups use it to race each other to the next landmark."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "athens-travel",
      "greece-travel",
      "barcelona-travel",
      "paris-travel",
      "lisbon-travel",
      "prague-travel"
    ]
  },
  "new-york-city-travel": {
    "intro": "New York City Travel Bingo is a printable card of 25 things to see and do across the boroughs, from the Statue of Liberty and Empire State Building to a bagel and lox breakfast and a pizza slice in Manhattan. Use it while mapping out your days, or hand it to your travel group as you move from Central Park to DUMBO. It's free, no account necessary. Print it before you land or pull it up on your phone between subway stops.",
    "faq": [
      {
        "q": "What's on a New York City travel bingo card?",
        "a": "Iconic sights and food stops across the city: the Brooklyn Bridge, Central Park, Times Square, and a proper bagel with lox."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a day of walking, and groups use it to divide and conquer the boroughs."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate the card, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "chicago-travel",
      "san-francisco-travel",
      "seattle-travel",
      "food-adventures",
      "travel-experiences",
      "road-trip-west"
    ]
  },
  "barcelona-travel": {
    "intro": "Barcelona Travel Bingo is a printable card of 25 things to see and try around the city, from Sagrada Familia and Park Güell to a tapas crawl through the Gothic Quarter. Use it while planning your itinerary, or pass it around your travel group as you wander from La Boqueria Market to Barceloneta Beach. It's free and doesn't require signing up. Print it at home or save it to your phone for the tapas crawl.",
    "faq": [
      {
        "q": "What's on a Barcelona travel bingo card?",
        "a": "Gaudí landmarks, neighborhoods, and food stops: Sagrada Familia, Park Güell, La Boqueria Market, and a proper tapas crawl."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a day of sightseeing, and groups use it to plan the tapas route together."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "lisbon-travel",
      "rome-travel",
      "paris-travel",
      "athens-travel",
      "greece-travel",
      "prague-travel"
    ]
  },
  "seattle-travel": {
    "intro": "Seattle Travel Bingo is a printable card of 25 things to see and do around the city, from Pike Place Market and the Space Needle to hunting down the Fremont Troll. Use it while planning a weekend in the city, or hand it to your travel group as you ferry out to Bainbridge Island. It's free with no strings attached, no signup. Print it before you go or keep it open on your phone while you explore.",
    "faq": [
      {
        "q": "What's on a Seattle travel bingo card?",
        "a": "Seattle landmarks and local spots: Pike Place Market, the Space Needle, the Fremont Troll, and the Ballard Locks."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a self-guided day, and groups use it to turn exploring into a game."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "san-francisco-travel",
      "vancouver-bc-travel",
      "banff-travel",
      "washington-state-highlights",
      "road-trip-west",
      "chicago-travel"
    ]
  },
  "dublin-travel": {
    "intro": "Dublin Travel Bingo is a printable card of 25 things to see and do around the city, from Trinity College and the Book of Kells to a pint at the Guinness Storehouse. Use it while mapping out your trip, or bring it along and check things off with your travel group at a trad music session in Temple Bar. It's free, and you don't need to make an account. Print it before you fly out or pull it up on your phone at the pub.",
    "faq": [
      {
        "q": "What's on a Dublin travel bingo card?",
        "a": "Dublin sights and traditions: Trinity College, the Guinness Storehouse, Kilmainham Gaol, and a live trad music session."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a walking day, and groups use it to compare notes over a pint."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site also has a broader Ireland travel bingo card, plus cards for 30+ other cities and countries."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "ireland-travel",
      "edinburgh-travel",
      "scotland-travel",
      "london-travel",
      "iceland-travel"
    ]
  },
  "iceland-travel": {
    "intro": "Iceland Travel Bingo is a printable card of 25 things to see and do around the country, from soaking in the Blue Lagoon to chasing the Northern Lights and driving the Golden Circle. Use it while planning your route, or hand it to your travel group as you stop at Gullfoss and Seljalandsfoss along the way. It's completely free, no signup required. Print it before your trip or save it to your phone for the drive.",
    "faq": [
      {
        "q": "What's on an Iceland travel bingo card?",
        "a": "Waterfalls, geothermal spots, and road trip stops: the Blue Lagoon, Gullfoss, Jökulsárlón glacier lagoon, and the Northern Lights."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a self-drive route, and groups use it to keep everyone looking out the window."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities and countries, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "finland-travel",
      "copenhagen-travel",
      "edinburgh-travel",
      "scotland-travel",
      "dublin-travel",
      "travel-experiences"
    ]
  },
  "bangkok-travel": {
    "intro": "Bangkok Travel Bingo is a printable card of 25 things to see, eat, and do around the city, from the Grand Palace and Wat Arun to a plate of pad thai from a street stall. Use it while planning your days, or pass it around your travel group as you cruise the Chao Phraya river or haggle at Chatuchak Weekend Market. It's free, no email or account needed. Print it before your flight or keep it on your phone for the tuk tuk ride.",
    "faq": [
      {
        "q": "What's on a Bangkok travel bingo card?",
        "a": "Temples, markets, and street food: the Grand Palace, Wat Pho, Chatuchak Weekend Market, and pad thai from a street stall."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a day of temple hopping, and groups use it to race through the night markets."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities and countries, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "vietnam-travel",
      "vietnam-trip",
      "singapore-travel",
      "seoul-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "seoul-travel": {
    "intro": "Seoul Travel Bingo is a printable card of 25 things to see, eat, and do around the city, from Gyeongbokgung Palace and N Seoul Tower to a Korean BBQ dinner and late-night noraebang. Use it while planning your itinerary, or hand it to your travel group as you shop through Myeongdong and Hongdae. It's free to generate, no signup. Print it before you land or pull it up on your phone between palace visits.",
    "faq": [
      {
        "q": "What's on a Seoul travel bingo card?",
        "a": "Palaces, neighborhoods, and food stops: Gyeongbokgung Palace, Bukchon Hanok Village, Gwangjang Market, and Korean BBQ."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a day of sightseeing, and groups use it to plan the karaoke night."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "tokyo-travel",
      "kyoto-travel",
      "bangkok-travel",
      "singapore-travel",
      "vietnam-travel",
      "food-adventures"
    ]
  },
  "lisbon-travel": {
    "intro": "Lisbon Travel Bingo is a printable card of 25 things to see and try around the city, from Belém Tower and Tram 28 to a warm pastel de nata straight from the bakery. Use it while planning your trip, or bring it along and check things off with your travel group as you wander the Alfama district. It's free and skips the account creation step. Print it before your flight or save it to your phone for the tram ride.",
    "faq": [
      {
        "q": "What's on a Lisbon travel bingo card?",
        "a": "Lisbon landmarks and local rituals: Belém Tower, Tram 28, São Jorge Castle, and a proper pastel de nata."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a walking route, and groups use it to hunt down the best miradouro sunset together."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "barcelona-travel",
      "rome-travel",
      "athens-travel",
      "greece-travel",
      "paris-travel",
      "prague-travel"
    ]
  },
  "chicago-travel": {
    "intro": "Chicago Travel Bingo is a printable card of 25 things to see and eat around the city, from Cloud Gate in Millennium Park to a slice of deep dish pizza and a Chicago-style hot dog. Use it while planning your weekend, or hand it to your travel group as you walk the Riverwalk or ride up Willis Tower Skydeck. It's free, no login or signup needed. Print it before you go or keep it open on your phone downtown.",
    "faq": [
      {
        "q": "What's on a Chicago travel bingo card?",
        "a": "Chicago landmarks and food: Cloud Gate, Willis Tower Skydeck, deep dish pizza, and a proper Chicago-style hot dog."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a day downtown, and groups use it to argue over the best deep dish spot."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "new-york-city-travel",
      "san-francisco-travel",
      "seattle-travel",
      "food-adventures",
      "travel-experiences",
      "road-trip-west"
    ]
  },
  "banff-travel": {
    "intro": "Banff Travel Bingo is a printable card of 25 things to see and do in the Canadian Rockies, from Lake Louise and Moraine Lake to spotting elk right on the lawn. Use it while planning your road trip, or hand it to your travel group as you drive the Icefields Parkway and hike Johnston Canyon. It's free, plain and simple, no signup. Print it before you head out or keep it on your phone for the road trip.",
    "faq": [
      {
        "q": "What's on a Banff travel bingo card?",
        "a": "Mountain lakes, hikes, and wildlife: Lake Louise, Moraine Lake, the Icefields Parkway, and elk sightings along the way."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a hiking route, and groups use it to keep everyone watching for wildlife on the drive."
      },
      {
        "q": "Can I customize it or get a card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities and countries, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "vancouver-bc-travel",
      "seattle-travel",
      "washington-state-highlights",
      "road-trip-west",
      "travel-experiences"
    ]
  },
  "amsterdam-travel": {
    "intro": "Amsterdam Travel Bingo is a printable card of 25 things to see and do in Amsterdam, from the Rijksmuseum and Anne Frank House to a canal cruise through the Jordaan and a fresh stroopwafel off a cart. Use it while you're mapping out your itinerary, or hand it to your travel group so everyone's chasing something different. It's free and doesn't ask for an email. Print it before your flight, or keep it open on your phone while you bike along the canals.",
    "faq": [
      {
        "q": "What's on an Amsterdam travel bingo card?",
        "a": "Landmarks, food, and canal-city rituals specific to Amsterdam: the Rijksmuseum, Anne Frank House, a canal cruise, stroopwafels, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a day of wandering, and groups use it to turn sightseeing into a friendly competition."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "london-travel",
      "paris-travel",
      "berlin-travel",
      "prague-travel",
      "copenhagen-travel",
      "barcelona-travel",
      "edinburgh-travel"
    ]
  },
  "singapore-travel": {
    "intro": "Singapore Travel Bingo is a printable card of 25 things to see and eat in Singapore, from Marina Bay Sands and Gardens by the Bay to a plate of chili crab and a proper hawker centre lunch. Use it while you're planning your route through the city, or pass it around at dinner with whoever you're traveling with. No signup, no cost, just a free PDF. Print a copy before you land, or pull it up on your phone between stops.",
    "faq": [
      {
        "q": "What's on a Singapore travel bingo card?",
        "a": "Landmarks, hawker food, and city rituals specific to Singapore: Marina Bay Sands, Gardens by the Bay, chili crab, hawker centres, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it as a food and sightseeing checklist, and groups use it to settle who's tried the most."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "tokyo-travel",
      "sydney-travel",
      "food-adventures",
      "athens-travel",
      "mexico-city-travel",
      "cartagena-travel",
      "london-travel"
    ]
  },
  "sydney-travel": {
    "intro": "Sydney Travel Bingo is a printable card of 25 things to see and do in Sydney, from the Opera House sails and a Harbour Bridge climb to Bondi Beach and the Manly ferry ride. Use it while you're plotting your days around the harbour, or hand it out to your group so everyone's spotting something different. It's totally free, nothing to sign up for. Print it before you fly out, or save it to your phone for the ferry ride over.",
    "faq": [
      {
        "q": "What's on a Sydney travel bingo card?",
        "a": "Landmarks, beaches, and harbour-city rituals specific to Sydney: the Opera House, Harbour Bridge, Bondi Beach, the Manly ferry, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a day around the harbour, and groups use it to compare who saw what."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "singapore-travel",
      "los-angeles-travel",
      "san-francisco-travel",
      "california-highlights",
      "athens-travel",
      "food-adventures"
    ]
  },
  "prague-travel": {
    "intro": "Prague Travel Bingo is a printable card of 25 things to see and try in Prague, from Prague Castle and the Charles Bridge to the Astronomical Clock in Old Town Square and a warm trdelník off the street. Use it while you're routing your walk through the old town, or bring it along for your group to argue over who spots what first. Free to use, no login required. Print it at home, or keep it on your phone for the walk across the river.",
    "faq": [
      {
        "q": "What's on a Prague travel bingo card?",
        "a": "Landmarks, food, and old-town rituals specific to Prague: Prague Castle, the Charles Bridge, the Astronomical Clock, trdelník, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to wander the old town with a purpose, and groups use it to make sightseeing a game."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "berlin-travel",
      "amsterdam-travel",
      "edinburgh-travel",
      "copenhagen-travel",
      "athens-travel",
      "london-travel",
      "paris-travel"
    ]
  },
  "edinburgh-travel": {
    "intro": "Edinburgh Travel Bingo is a printable card of 25 things to see and try in Edinburgh, from Edinburgh Castle and a walk down the Royal Mile to hiking Arthur's Seat and a whisky tasting flight. Use it while you're planning out your trip, or bring it along for your group to tick off along the way. It won't ask for an email or a login. Print it before you leave, or pull it up on your phone for the climb up Arthur's Seat.",
    "faq": [
      {
        "q": "What's on an Edinburgh travel bingo card?",
        "a": "Landmarks, food, and Scottish rituals specific to Edinburgh: Edinburgh Castle, the Royal Mile, Arthur's Seat, whisky tasting, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a day of wandering the Old Town, and groups use it to compare notes over a pub dinner."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "scotland-travel",
      "london-travel",
      "prague-travel",
      "amsterdam-travel",
      "berlin-travel",
      "copenhagen-travel",
      "paris-travel"
    ]
  },
  "san-francisco-travel": {
    "intro": "San Francisco Travel Bingo is a printable card of 25 things to see and do in San Francisco, from the Golden Gate Bridge and Alcatraz Island to a cable car ride and a sourdough bread bowl at the wharf. Use it while you're mapping your route through the hills, or hand it around to your travel crew as you go. Free to generate, no account needed. Print a copy before you land, or keep it on your phone for the cable car ride.",
    "faq": [
      {
        "q": "What's on a San Francisco travel bingo card?",
        "a": "Landmarks, food, and city rituals specific to San Francisco: the Golden Gate Bridge, Alcatraz, cable cars, sourdough, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to map out a day of hills and views, and groups use it to make the walking more fun."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "los-angeles-travel",
      "portland-travel",
      "seattle-travel",
      "california-highlights",
      "road-trip-west",
      "oregon-highlights",
      "washington-state-highlights"
    ]
  },
  "mexico-city-travel": {
    "intro": "Mexico City Travel Bingo is a printable card of 25 things to see and eat in Mexico City, from the Zócalo and Frida Kahlo Museum to the pyramids at Teotihuacan and street tacos al pastor. Use it while you're mapping out your trip, or bring it along for your group to fill in over tacos and mezcal. There's no signup, no cost, nothing to download but the PDF. Print it before you go, or keep it open on your phone while you ride the trajinera boats through Xochimilco.",
    "faq": [
      {
        "q": "What's on a Mexico City travel bingo card?",
        "a": "Landmarks, food, and neighborhood rituals specific to Mexico City: the Zócalo, Frida Kahlo Museum, Teotihuacan, street tacos, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a day of museums and markets, and groups use it to turn a food crawl into a game."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "cartagena-travel",
      "cusco-travel",
      "costa-rica-travel",
      "food-adventures",
      "texas-highlights",
      "new-orleans-travel"
    ]
  },
  "athens-travel": {
    "intro": "Athens Travel Bingo is a printable card of 25 things to see and try in Athens, from the Acropolis and Parthenon to wandering Plaka and grabbing souvlaki from a street stand. Use it while you're planning your days around the ruins, or bring it along for your group to fill in between museums and tavernas. Free, always has been, no account required. Print it before your trip, or keep it on your phone for the walk up to the Acropolis.",
    "faq": [
      {
        "q": "What's on an Athens travel bingo card?",
        "a": "Landmarks, food, and ancient-city rituals specific to Athens: the Acropolis, the Parthenon, Plaka, souvlaki, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a day among the ruins, and groups use it to compare who found what first."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "greece-travel",
      "rome-travel",
      "barcelona-travel",
      "prague-travel",
      "cusco-travel",
      "edinburgh-travel"
    ]
  },
  "cartagena-travel": {
    "intro": "Cartagena Travel Bingo is a printable card of 25 things to see and do in Cartagena, from the Walled Old City and Castillo San Felipe to a day trip out to the Rosario Islands and a plate of ceviche by the water. Use it while you're planning your itinerary, or bring it along for your group to fill in between the beach and salsa dancing at night. No login, no cost, just a free download. Print it before you fly out, or pull it up on your phone while you wander the old walls.",
    "faq": [
      {
        "q": "What's on a Cartagena travel bingo card?",
        "a": "Landmarks, food, and coastal rituals specific to Cartagena: the Walled Old City, Castillo San Felipe, the Rosario Islands, ceviche, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to explore the old town with a purpose, and groups use it to make the beach days more fun."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "mexico-city-travel",
      "costa-rica-travel",
      "cusco-travel",
      "food-adventures",
      "new-orleans-travel",
      "austin-travel"
    ]
  },
  "san-juan-islands-travel": {
    "intro": "San Juan Islands Travel Bingo is a printable card of 25 things to see and do around the San Juan Islands, from Friday Harbor and Orcas Island to a whale watching tour and the view from Mount Constitution. Use it while you're planning your ferry hops between islands, or bring it along for your group to fill in over a slow weekend. It's free, no account, no catch. Print it before you catch the ferry, or keep it on your phone for the ride over.",
    "faq": [
      {
        "q": "What's on a San Juan Islands travel bingo card?",
        "a": "Ferries, landmarks, and island rituals specific to the San Juans: Friday Harbor, Orcas Island, whale watching, Mount Constitution, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a slow island trip, and groups use it to compare what each island hop turned up."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "san-juan-islands",
      "seattle-travel",
      "portland-travel",
      "washington-state-highlights",
      "oregon-highlights",
      "road-trip-west"
    ]
  },
  "portland-travel": {
    "intro": "Portland Travel Bingo is a printable card of 25 things to see and try in Portland, from Powell's City of Books and the International Rose Test Garden to a Voodoo Doughnut run and lunch at a food cart pod. Use it while you're mapping out your days, or bring it along for your group to fill in between bookstores and breweries. Free to use, nothing to sign up for. Print it before you go, or keep it open on your phone while you work through a food cart pod.",
    "faq": [
      {
        "q": "What's on a Portland travel bingo card?",
        "a": "Landmarks, food, and neighborhood rituals specific to Portland: Powell's Books, the Rose Test Garden, food carts, Voodoo Doughnut, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to wander neighborhoods with a purpose, and groups use it to turn a donut crawl into a game."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "seattle-travel",
      "san-juan-islands-travel",
      "san-juan-islands",
      "oregon-highlights",
      "washington-state-highlights",
      "road-trip-west",
      "food-adventures"
    ]
  },
  "los-angeles-travel": {
    "intro": "Los Angeles Travel Bingo is a printable card of 25 things to see and do in LA, from the Hollywood Walk of Fame and Griffith Observatory to Santa Monica Pier and a taco truck lunch. Use it while you're planning your route across the city, or bring it along for your group to fill in as you drive from neighborhood to neighborhood. It's free and doesn't need an account. Print it before your trip, or pull it up on your phone for the drive down the Pacific Coast Highway.",
    "faq": [
      {
        "q": "What's on a Los Angeles travel bingo card?",
        "a": "Landmarks, food, and neighborhood rituals specific to LA: the Hollywood Walk of Fame, Griffith Observatory, Santa Monica Pier, taco trucks, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a sprawling city into a day plan, and groups use it to make the driving more fun."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "san-francisco-travel",
      "california-highlights",
      "road-trip-west",
      "sydney-travel",
      "food-adventures"
    ]
  },
  "austin-travel": {
    "intro": "Austin Travel Bingo is a printable card of 25 things to see and try in Austin, from the Texas State Capitol and a swim at Barton Springs Pool to 6th Street nightlife and standing in the Franklin Barbecue line. Use it while you're planning your trip, or bring it along for your group to fill in over breakfast tacos and live music. Free, no signup, no strings. Print it before you go, or keep it on your phone for the walk down Sixth Street.",
    "faq": [
      {
        "q": "What's on an Austin travel bingo card?",
        "a": "Landmarks, food, and live-music rituals specific to Austin: the Capitol, Barton Springs, 6th Street, Franklin Barbecue, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a day between barbecue and swimming holes, and groups use it to make bar hopping more fun."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "texas-highlights",
      "new-orleans-travel",
      "nashville-travel",
      "mexico-city-travel",
      "food-adventures"
    ]
  },
  "berlin-travel": {
    "intro": "Berlin Travel Bingo is a printable card of 25 things to see and try in Berlin, from the Brandenburg Gate and Berlin Wall Memorial to the East Side Gallery and a currywurst stand on the corner. Use it while you're building out your itinerary, or bring it along for your group to fill in between museums and biergartens. Free to download, no email required. Print it before you fly out, or keep it on your phone for the walk along the East Side Gallery.",
    "faq": [
      {
        "q": "What's on a Berlin travel bingo card?",
        "a": "Landmarks, food, and history-heavy rituals specific to Berlin: the Brandenburg Gate, the Berlin Wall Memorial, the East Side Gallery, currywurst, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a day heavy on history, and groups use it to make museum hopping less of a slog."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate, download the PDF, and print or share on your phone."
      }
    ],
    "related": [
      "amsterdam-travel",
      "prague-travel",
      "copenhagen-travel",
      "london-travel",
      "paris-travel",
      "edinburgh-travel",
      "barcelona-travel"
    ]
  },
  "copenhagen-travel": {
    "intro": "Copenhagen Travel Bingo is a printable card of 25 things to see and do around Copenhagen, from Nyhavn's colorful harbor to a proper smørrebrød lunch and the spiral tower at Church of Our Saviour. Use it while planning your itinerary, or hand it to your travel group as you bike between Tivoli Gardens and Torvehallerne market. It's free with no signup required. Print it before your flight or pull it up on your phone once you land.",
    "faq": [
      {
        "q": "What's on a Copenhagen travel bingo card?",
        "a": "Landmarks, food, and small rituals specific to Copenhagen: Nyhavn harbor, Rosenborg Castle, smørrebrød, a canal boat tour, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it as a checklist while wandering, and groups use it to split up and compare notes over pastries later."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "amsterdam-travel",
      "prague-travel",
      "athens-travel",
      "greece-travel",
      "new-york-city-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "miami-travel": {
    "intro": "Miami Travel Bingo is a printable card of 25 things to see, eat, and do around Miami, covering South Beach's Art Deco strip, Wynwood Walls, Little Havana's Calle Ocho, and a proper cafecito and pastelito break. Use it while mapping out your weekend, or pass it around the car with your travel group between the beach and Bayside Marketplace. No signup, totally free. Grab the PDF before you go or pull it up poolside.",
    "faq": [
      {
        "q": "What's on a Miami travel bingo card?",
        "a": "South Beach Art Deco, Wynwood murals, Little Havana, cafecito, stone crab season, and other Miami staples."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to explore more neighborhoods, and groups use it to keep everyone moving between the beach and Wynwood."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it from your phone."
      }
    ],
    "related": [
      "orlando-travel",
      "florida-highlights",
      "new-orleans-travel",
      "puerto-rico-travel",
      "cartagena-travel",
      "nashville-travel",
      "food-adventures"
    ]
  },
  "new-orleans-travel": {
    "intro": "New Orleans Travel Bingo is a printable card of 25 things to see, eat, and hear around the city, from Bourbon Street and Jackson Square to a plate of beignets at Café du Monde and a brass band on Frenchmen Street. Use it while planning your trip, or pass it around the table with your travel group between po'boys and jazz sets. It's free, no account needed. Print it ahead of time or keep it open on your phone in the French Quarter.",
    "faq": [
      {
        "q": "What's on a New Orleans travel bingo card?",
        "a": "French Quarter landmarks, food like gumbo and po'boys, live music stops, and a few only-in-NOLA moments like a second line parade."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it as an excuse to wander further, and groups use it to argue over who's buying the next round of beignets."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "nashville-travel",
      "miami-travel",
      "florida-highlights",
      "boston-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "kyoto-travel": {
    "intro": "Kyoto Travel Bingo is a printable card of 25 things to see and try around Kyoto, from the endless torii gates at Fushimi Inari to Arashiyama's bamboo grove and a proper matcha and wagashi break. Use it while mapping your temple route, or hand it to your travel group as you wander Gion looking for maiko. It's free and doesn't require an account. Print it before your trip or pull it up between temple stops.",
    "faq": [
      {
        "q": "What's on a Kyoto travel bingo card?",
        "a": "Temples and shrines like Fushimi Inari and Kinkaku-ji, food moments like matcha and yuba tofu, and rituals like a tea ceremony or kimono rental."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to slow down at each temple, and groups use it to divide up a packed itinerary."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "tokyo-travel",
      "seoul-travel",
      "bangkok-travel",
      "singapore-travel",
      "bali-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "orlando-travel": {
    "intro": "Orlando Travel Bingo is a printable card of 25 things to see and do around Orlando, from Magic Kingdom fireworks to the Wizarding World of Harry Potter and a dole whip break between rides. Use it while planning your park days, or pass it around the resort room with your travel group before an early theme park entry morning. It's free with no signup. Print it before you fly out or keep it loaded on your phone in line.",
    "faq": [
      {
        "q": "What's on an Orlando travel bingo card?",
        "a": "Theme park moments across Disney and Universal, plus snacks like a Mickey pretzel or butterbeer, and a few non-park stops like Kennedy Space Center."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to stay on track through a big park day, and families use it to keep kids engaged between rides."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ destinations, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "miami-travel",
      "florida-highlights",
      "new-orleans-travel",
      "puerto-rico-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "boston-travel": {
    "intro": "Boston Travel Bingo is a printable card of 25 things to see, eat, and do around Boston, from the Freedom Trail and Fenway Park to swan boats in the Public Garden and a proper lobster roll lunch. Use it while planning your walking route, or hand it around with your travel group between the North End and Harvard Square. It's completely free, no account required. Print it before you land or share it with your group chat.",
    "faq": [
      {
        "q": "What's on a Boston travel bingo card?",
        "a": "Freedom Trail stops, Fenway Park, North End food, Harvard Square, and a couple easy day trips like Salem or Cape Cod."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it as a walking route through the city, and groups use it to settle where to eat next."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it from your phone."
      }
    ],
    "related": [
      "new-york-city-travel",
      "nashville-travel",
      "new-orleans-travel",
      "seattle-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "marrakech-travel": {
    "intro": "Marrakech Travel Bingo is a printable card of 25 things to see and try around the city, from the chaos of Jemaa el-Fnaa to Majorelle Garden, a mint tea ceremony, and a slow-cooked tagine dinner. Use it while planning your medina route, or pass it around your travel group between souks and rooftop terraces. It's free and doesn't need an account. Print it before your trip or pull it up on your phone while you haggle in the carpet souk.",
    "faq": [
      {
        "q": "What's on a Marrakech travel bingo card?",
        "a": "Medina landmarks like Bahia Palace and Koutoubia Mosque, food and tea rituals, souk haggling, and a rooftop sunset or two."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to navigate the medina with a bit of purpose, and groups use it to compare finds from the souks."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "athens-travel",
      "greece-travel",
      "cartagena-travel",
      "bali-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "bali-travel": {
    "intro": "Bali Travel Bingo is a printable card of 25 things to see and try around the island, from the Tegallalang rice terraces to Uluwatu Temple, a sunrise hike up Mount Batur, and a plate of nasi goreng for breakfast. Use it while planning your route between Ubud and the coast, or pass it around your travel group at a beach club in Seminyak. It's free, no signup needed. Print it before you land or keep it open on your phone between temples.",
    "faq": [
      {
        "q": "What's on a Bali travel bingo card?",
        "a": "Rice terraces, temples like Uluwatu and Tanah Lot, food like nasi goreng and babi guling, and rituals like a Balinese massage."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan out Ubud versus the coast, and groups use it to divide up who's doing the sunrise hike."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ destinations, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "bangkok-travel",
      "singapore-travel",
      "maui-travel",
      "hawaii-highlights",
      "costa-rica-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "vancouver-bc-travel": {
    "intro": "Vancouver BC Travel Bingo is a printable card of 25 things to see and do around the city, from the Stanley Park seawall to Granville Island Market, the Capilano Suspension Bridge, and a plate of poutine to end the day. Use it while planning your trip, or hand it to your travel group between Gastown and a Grouse Mountain gondola ride. It's free with no account needed. Print it before you go or pull it up on your phone downtown.",
    "faq": [
      {
        "q": "What's on a Vancouver BC travel bingo card?",
        "a": "Stanley Park, Granville Island Market, Capilano Suspension Bridge, poutine, and a couple day trips like Whistler."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to structure a day around the seawall, and groups use it to pick between a gondola ride or a market crawl."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "banff-travel",
      "seattle-travel",
      "costa-rica-travel",
      "hawaii-highlights",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "nashville-travel": {
    "intro": "Nashville Travel Bingo is a printable card of 25 things to see, eat, and hear around Music City, from the honky-tonks on Broadway to the Grand Ole Opry, a plate of Hot Chicken from Hattie B's, and a songwriter round at the Bluebird Cafe. Use it while planning your bar crawl, or pass it around your travel group between line dancing lessons. It's free, no signup required. Print it before your trip or keep it on your phone for the weekend.",
    "faq": [
      {
        "q": "What's on a Nashville travel bingo card?",
        "a": "Broadway honky-tonks, the Grand Ole Opry, hot chicken, murals in the Gulch, and a songwriter round at the Bluebird Cafe."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to pick which bar to duck into next, and groups use it to keep a bachelorette or girls' trip on track."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "new-orleans-travel",
      "miami-travel",
      "boston-travel",
      "new-york-city-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "maui-travel": {
    "intro": "Maui Travel Bingo is a printable card of 25 things to see and try around the island, from the Road to Hana to Haleakalā sunrise, Molokini snorkeling, and a cup of shave ice from Ululani's. Use it while mapping your island route, or hand it around your travel group between waterfalls and plate lunch stops. It's completely free, no account needed. Print it before you land or pull it up on your phone at the beach.",
    "faq": [
      {
        "q": "What's on a Maui travel bingo card?",
        "a": "The Road to Hana, Haleakalā sunrise, snorkeling at Molokini, shave ice, and other Maui staples."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a Hana drive, and groups use it to compare beach finds over plate lunch."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ destinations, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "hawaii-highlights",
      "bali-travel",
      "costa-rica-travel",
      "puerto-rico-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "costa-rica-travel": {
    "intro": "Costa Rica Travel Bingo is a printable card of 25 things to see and try around the country, from Arenal Volcano and La Fortuna waterfall to sloth spotting in the canopy and a plate of gallo pinto for breakfast. Use it while planning your route between the cloud forest and the coast, or pass it around your travel group on a zip line day. It's free, no signup. Print it before your trip or keep it loaded on your phone in the jungle.",
    "faq": [
      {
        "q": "What's on a Costa Rica travel bingo card?",
        "a": "Arenal Volcano, cloud forest zip lines, sloth and monkey spotting, gallo pinto, and a few beach and rainforest stops."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to keep track of wildlife spotted, and groups use it to settle who's doing the zip line first."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ destinations, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "cartagena-travel",
      "puerto-rico-travel",
      "bali-travel",
      "maui-travel",
      "hawaii-highlights",
      "travel-experiences"
    ]
  },
  "cusco-travel": {
    "intro": "Cusco Travel Bingo is a printable card of 25 things to see and try around the city and Sacred Valley, from Machu Picchu at sunrise to the Sacsayhuamán fortress, Pisac market, and a cup of coca tea for the altitude. Use it while planning your Inca Trail trip, or pass it around your travel group during your acclimation day in Plaza de Armas. It's free, no account required. Print it before you fly out or keep it on your phone on the train to Aguas Calientes.",
    "faq": [
      {
        "q": "What's on a Cusco travel bingo card?",
        "a": "Machu Picchu, the Sacred Valley, Sacsayhuamán, Pisac market, and altitude staples like coca tea and an acclimation day."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to pace the Inca Trail and side trips, and groups use it to keep everyone on the same itinerary."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ destinations, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "cartagena-travel",
      "costa-rica-travel",
      "marrakech-travel",
      "athens-travel",
      "greece-travel",
      "food-adventures",
      "travel-experiences"
    ]
  },
  "puerto-rico-travel": {
    "intro": "Puerto Rico Travel Bingo is a printable card of 25 things to see and try around the island, from Old San Juan's cobblestones and El Morro fortress to Flamenco Beach, El Yunque rainforest, and a plate of mofongo for dinner. Use it while planning your island-hopping route, or hand it to your travel group between the fort and a bioluminescent bay tour. It's free, no signup needed. Print it before your trip or pull it up on your phone at the beach.",
    "faq": [
      {
        "q": "What's on a Puerto Rico travel bingo card?",
        "a": "Old San Juan landmarks, El Yunque rainforest, beaches like Flamenco and Condado, and food like mofongo and alcapurrias."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to explore beyond San Juan, and groups use it to plan a mix of forts, beaches, and rainforest."
      },
      {
        "q": "Can I make a bingo card for a different city?",
        "a": "Yes, this site has travel bingo cards for 30+ destinations, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "cartagena-travel",
      "miami-travel",
      "costa-rica-travel",
      "maui-travel",
      "hawaii-highlights",
      "food-adventures"
    ]
  },
  "ireland-travel": {
    "intro": "Ireland Travel Bingo is a printable card of 25 things to see and try across the country, from the Cliffs of Moher to a proper full Irish breakfast. Spot the Ring of Kerry drive, wander Galway's colorful streets, or catch a trad session in Temple Bar. Use it while planning your route, or hand it to the car and mark things off as you go. It's free, no signup required. Print it before the flight or share it with whoever's riding shotgun.",
    "faq": [
      {
        "q": "What's on an Ireland travel bingo card?",
        "a": "Landmarks and local moments from around the country: the Cliffs of Moher, Blarney Castle, a pint of Guinness, and more."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to notice more along the drive, and groups use it to compare finds over a pub dinner."
      },
      {
        "q": "Can I get a bingo card for a different destination?",
        "a": "Yes, this site has travel bingo cards for 30+ cities and countries, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it, download the PDF, and print or share it on your phone."
      }
    ],
    "related": [
      "dublin-travel",
      "edinburgh-travel",
      "scotland-travel",
      "london-travel",
      "athens-travel",
      "greece-travel"
    ]
  },
  "scotland-travel": {
    "intro": "Scotland Travel Bingo is a printable card of 25 things to spot on a trip north, from Edinburgh Castle to a Highland cow photo op. Hike toward the Fairy Pools, drive through Glencoe, or catch a ceilidh dance night with your group. Use it while road-tripping the Highlands or checking things off over a haggis dinner. It's free with no account needed. Print it before you land or pass it around the car.",
    "faq": [
      {
        "q": "What's on a Scotland travel bingo card?",
        "a": "Highland landmarks and local moments: Edinburgh Castle, the Isle of Skye, a bagpipe busker, a proper whisky flight."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to slow down and notice more, groups use it to turn long drives into a game."
      },
      {
        "q": "Can I make a bingo card for a different destination?",
        "a": "Yes, this site has travel bingo cards for 30+ cities and countries, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, totally free and no signup. Download the PDF and print it or keep it on your phone."
      }
    ],
    "related": [
      "edinburgh-travel",
      "ireland-travel",
      "dublin-travel",
      "london-travel",
      "greece-travel"
    ]
  },
  "greece-travel": {
    "intro": "Greece Travel Bingo is a printable card of 25 things to see and taste around the country, from a Santorini caldera sunset to fresh octopus by the sea. Wander Oia's blue domes, hike Crete's Samaria Gorge, or hop a boat between islands with your group. Use it while planning your itinerary or mark things off island by island. It's free with no signup. Print it before you go or save it to your phone for the ferry rides.",
    "faq": [
      {
        "q": "What's on a Greece travel bingo card?",
        "a": "Island and mainland highlights: Santorini's caldera, Meteora's monasteries, a gyro lunch, and an ouzo and meze night."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to explore more of each island, and groups use it to plan the day around what's left to check off."
      },
      {
        "q": "Can I get a bingo card for another destination?",
        "a": "Yes, this site has travel bingo cards for 30+ cities and countries, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no account required. Generate it and print or share the PDF on your phone."
      }
    ],
    "related": [
      "athens-travel",
      "ireland-travel",
      "scotland-travel",
      "london-travel",
      "edinburgh-travel"
    ]
  },
  "australia-travel": {
    "intro": "Australia Travel Bingo is a printable card of 25 things to see, eat, and try across the country, from a Great Barrier Reef dive to a proper flat white. Watch the sunrise at Uluru, wander Melbourne's laneways, or dare each other to try Vegemite on toast. Use it while road-tripping the coast or checking things off with your travel group over a BBQ. It's free, no signup needed. Print it before the flight or pull it up on your phone.",
    "faq": [
      {
        "q": "What's on an Australia travel bingo card?",
        "a": "Landmarks and local moments from across the country: the Great Barrier Reef, Uluru, a koala cuddle photo, and a Tim Tam slam."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to explore more of each city, and groups use it to turn road trips into a game."
      },
      {
        "q": "Can I make a bingo card for a different destination?",
        "a": "Yes, this site has travel bingo cards for 30+ cities and countries, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, completely free with no signup. Download the PDF and print it or share it on your phone."
      }
    ],
    "related": [
      "sydney-travel",
      "greece-travel",
      "hawaii-highlights",
      "maui-travel",
      "ireland-travel",
      "london-travel"
    ]
  },
  "washington-state-highlights": {
    "intro": "Washington State Highlights Bingo is a printable card of 25 things to see and do across the state, from Mount Rainier to the San Juan Islands ferry. Hike the Hoh Rain Forest, wander Pike Place Market, or catch tulip season in Skagit Valley. Use it for a weekend road trip, a summer bucket list, or checking things off with the family as you drive around the state. It's free, no signup required. Print it for the car or pull it up at the trailhead.",
    "faq": [
      {
        "q": "What's on a Washington highlights bingo card?",
        "a": "Landmarks and moments from across the state: Mount Rainier, the Hoh Rain Forest, Pike Place Market, and the Skagit tulip fields."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan weekend trips, and groups or families use it to turn road trips into a game."
      },
      {
        "q": "Is there a bingo card for a different state?",
        "a": "Yes, this site has highlights cards for Oregon, Colorado, Utah, and more, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no account needed. Generate it and print or save the PDF to your phone."
      }
    ],
    "related": [
      "oregon-highlights",
      "seattle-travel",
      "portland-travel",
      "washington-trails",
      "road-trip-west",
      "california-highlights",
      "hiking"
    ]
  },
  "oregon-highlights": {
    "intro": "Oregon Highlights Bingo is a printable card of 25 things to see and try across the state, from Crater Lake to a stop at Powell's Books. Chase waterfalls along the Columbia River Gorge, walk the tide pools at Ecola State Park, or grab a doughnut in Portland. Use it for a coast-to-desert road trip or as a state bucket list with your travel group. It's free with no signup. Print it before you go or send it to whoever's driving.",
    "faq": [
      {
        "q": "What's on an Oregon highlights bingo card?",
        "a": "Landmarks and stops from across the state: Crater Lake, Multnomah Falls, Haystack Rock, and the Portland food carts."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a route, and groups use it to compare what everyone's checked off along the way."
      },
      {
        "q": "Is there a bingo card for another state?",
        "a": "Yes, this site has highlights cards for Washington, Colorado, Utah, and more, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, totally free and no account required. Download the PDF and print it or keep it on your phone."
      }
    ],
    "related": [
      "washington-state-highlights",
      "portland-travel",
      "seattle-travel",
      "washington-trails",
      "road-trip-west",
      "california-highlights",
      "hiking"
    ]
  },
  "florida-highlights": {
    "intro": "Florida Highlights Bingo is a printable card of 25 things to see and try across the state, from an Everglades airboat ride to a slice of key lime pie. Watch the sunset in Key West, spot a manatee in Crystal River, or catch the fireworks at Disney World. Use it for a family road trip down the coast or checking things off with your group between beach days. It's free, no signup needed. Print it for the drive down or save it to your phone for the parks.",
    "faq": [
      {
        "q": "What's on a Florida highlights bingo card?",
        "a": "Landmarks and moments from across the state: the Everglades, Key West sunsets, Kennedy Space Center, and a Cuban sandwich in Tampa."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to explore more of the state, and families or groups use it to keep road trips fun."
      },
      {
        "q": "Is there a bingo card for a different destination?",
        "a": "Yes, this site has cards for Orlando, Miami, and other states, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no account required. Generate it and print or share the PDF on your phone."
      }
    ],
    "related": [
      "orlando-travel",
      "miami-travel",
      "hawaii-highlights",
      "texas-highlights",
      "california-highlights"
    ]
  },
  "hawaii-highlights": {
    "intro": "Hawaii Highlights Bingo is a printable card of 25 things to see and try across the islands, from a Road to Hana drive to a plate lunch with loco moco. Watch the sunrise at Haleakalā, snorkel Hanauma Bay, or catch a luau with your travel group. Use it island-hopping or checking things off between beach days. It's free with no signup. Print it before the flight or pull it up poolside.",
    "faq": [
      {
        "q": "What's on a Hawaii highlights bingo card?",
        "a": "Island moments and landmarks: the Road to Hana, Diamond Head, a shave ice treat, and a sunset catamaran sail."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to explore more of each island, and groups use it to compare notes over dinner."
      },
      {
        "q": "Is there a bingo card for a different destination?",
        "a": "Yes, this site has a Maui-specific card plus other states and cities, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, completely free and no account needed. Download the PDF and print it or share it on your phone."
      }
    ],
    "related": [
      "maui-travel",
      "florida-highlights",
      "australia-travel",
      "california-highlights",
      "travel-experiences"
    ]
  },
  "colorado-highlights": {
    "intro": "Colorado Highlights Bingo is a printable card of 25 things to see and do across the state, from Rocky Mountain National Park to a green chili breakfast. Drive Trail Ridge Road, hike a 14er, or catch a show at Red Rocks Amphitheatre with your group. Use it for a mountain road trip or as a state bucket list checked off town by town. It's free, no signup required. Grab it before the drive up or share it with your cabin crew.",
    "faq": [
      {
        "q": "What's on a Colorado highlights bingo card?",
        "a": "Landmarks and local moments from across the state: Rocky Mountain National Park, Garden of the Gods, a 14er summit, and a craft beer taproom stop."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan hikes and stops, and groups use it to turn a mountain trip into a game."
      },
      {
        "q": "Is there a bingo card for a different state?",
        "a": "Yes, this site has highlights cards for Utah, Wyoming, Montana, and more, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it and print or save the PDF to your phone."
      }
    ],
    "related": [
      "utah-highlights",
      "wyoming-highlights",
      "arizona-highlights",
      "montana-highlights",
      "hiking",
      "california-highlights"
    ]
  },
  "utah-highlights": {
    "intro": "Utah Highlights Bingo is a printable card of 25 things to see and do across the state, from Zion's Angels Landing hike to a plate of Utah fry sauce. Wade through the Narrows, drive to Delicate Arch, or catch the Milky Way at a dark sky park. Use it road-tripping the Mighty 5 or checking things off with your group between trailheads. It's free with no account needed. Print it for the glovebox or share it with your road trip crew.",
    "faq": [
      {
        "q": "What's on a Utah highlights bingo card?",
        "a": "National park landmarks and local moments: Zion, Bryce Canyon's hoodoos, Delicate Arch, and a Dutch oven dinner."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan hikes, and groups use it to compare finds across the Mighty 5."
      },
      {
        "q": "Is there a bingo card for another state?",
        "a": "Yes, this site has highlights cards for Colorado, Arizona, and more, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, totally free and no signup. Download the PDF and print it or keep it on your phone."
      }
    ],
    "related": [
      "colorado-highlights",
      "arizona-highlights",
      "wyoming-highlights",
      "hiking",
      "montana-highlights",
      "california-highlights"
    ]
  },
  "arizona-highlights": {
    "intro": "Arizona Highlights Bingo is a printable card of 25 things to see and try across the state, from the Grand Canyon's South Rim to a Sonoran hot dog. Watch the light beams inside Antelope Canyon, drive out to Monument Valley, or catch a red rock sunset in Sedona. Use it for a desert road trip or a state bucket list checked off stop by stop. It's free, no signup needed. Print it before you hit the road or keep it on your phone for the trailhead.",
    "faq": [
      {
        "q": "What's on an Arizona highlights bingo card?",
        "a": "Landmarks and local moments across the state: the Grand Canyon, Antelope Canyon, Sedona's red rocks, and a Navajo taco."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan stops, and groups use it to turn a desert road trip into a game."
      },
      {
        "q": "Is there a bingo card for a different state?",
        "a": "Yes, this site has highlights cards for Utah, Colorado, and more, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no account required. Generate it and print or share the PDF on your phone."
      }
    ],
    "related": [
      "utah-highlights",
      "colorado-highlights",
      "texas-highlights",
      "hiking",
      "california-highlights"
    ]
  },
  "texas-highlights": {
    "intro": "Texas Highlights Bingo is a printable card of 25 things to see and eat across the state, from Big Bend National Park to a Franklin Barbecue line. Walk the San Antonio River Walk, catch bluebonnet season in the Hill Country, or grab a breakfast taco with your group. Use it for a state-wide road trip or checking things off between BBQ stops. It's free to download, no signup. Print it for the truck or share it with whoever's riding along.",
    "faq": [
      {
        "q": "What's on a Texas highlights bingo card?",
        "a": "Landmarks and food stops from across the state: the Alamo, Big Bend, a brisket plate, and bluebonnet season."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a route, and groups use it to compare stops on a long drive."
      },
      {
        "q": "Is there a bingo card for a different destination?",
        "a": "Yes, this site has an Austin-specific card plus other states, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, completely free with no account needed. Download the PDF and print it or save it to your phone."
      }
    ],
    "related": [
      "austin-travel",
      "arizona-highlights",
      "colorado-highlights",
      "florida-highlights",
      "new-orleans-travel"
    ]
  },
  "alaska-highlights": {
    "intro": "Alaska Highlights Bingo is a printable card of 25 things to see and try across the state, from Denali to a plate of king crab. Watch a glacier calve in Glacier Bay, hunt the northern lights out of Fairbanks, or catch a bear fishing at Katmai with your group. Use it on a cruise through the Inside Passage or checking things off during a summer road trip. It's free with no account needed. Print it before the cruise or keep it loaded on your phone for the ferry.",
    "faq": [
      {
        "q": "What's on an Alaska highlights bingo card?",
        "a": "Landmarks and wildlife moments from across the state: Denali, Glacier Bay, a bear viewing at Katmai, and the northern lights."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to notice more on a long ferry ride, and groups use it to compare sightings on deck."
      },
      {
        "q": "Is there a bingo card for a different state?",
        "a": "Yes, this site has highlights cards for Montana, Wyoming, and more, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. Generate it and print or share the PDF on your phone."
      }
    ],
    "related": [
      "montana-highlights",
      "wyoming-highlights",
      "washington-state-highlights",
      "hiking",
      "travel-experiences"
    ]
  },
  "montana-highlights": {
    "intro": "Montana Highlights Bingo is a printable card of 25 things to see and do across the state, from Glacier National Park to a huckleberry ice cream stop. Drive the Going-to-the-Sun Road, spot a bison herd near Yellowstone's north entrance, or soak in a hot spring after a day of fly fishing. Use it for a big-sky road trip or as a state bucket list with your group. No signup, free to print. Grab it before the drive or share it with your ranch-stay crew.",
    "faq": [
      {
        "q": "What's on a Montana highlights bingo card?",
        "a": "Landmarks and local moments from across the state: Glacier National Park, the Going-to-the-Sun Road, a bison sighting, and a huckleberry treat."
      },
      {
        "q": "Is this good for solo travelers or groups?",
        "a": "Both. Solo travelers use it to plan a route through the mountains, and groups use it to turn long drives into a game."
      },
      {
        "q": "Is there a bingo card for a different state?",
        "a": "Yes, this site has highlights cards for Wyoming, Colorado, and more, or you can build your own from scratch."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, totally free and no account needed. Download the PDF and print it or keep it on your phone."
      }
    ],
    "related": [
      "wyoming-highlights",
      "colorado-highlights",
      "alaska-highlights",
      "utah-highlights",
      "hiking",
      "washington-trails"
    ]
  },
  "wyoming-highlights": {
    "intro": "Wyoming Highlights Bingo is a printable card of 25 things to see across the state: Old Faithful erupting, the Grand Prismatic Spring, Jackson Hole's town square, Devils Tower, and a bison traffic jam holding up your car in the park. Use it on a Yellowstone and Grand Teton road trip, or as a checklist for a slower summer spent chasing wildlife and mountain views. Free to use, no signup required. Print it before you leave home or pull it up on your phone at the next scenic overlook.",
    "faq": [
      {
        "q": "What's on a Wyoming highlights bingo card?",
        "a": "Yellowstone icons like Old Faithful and the Grand Prismatic Spring, Grand Teton NP, Devils Tower, Jackson Hole, and things you actually run into out there, like a bison jam or an elk bugling in fall."
      },
      {
        "q": "Is this for a road trip or a family trip?",
        "a": "Either. Families use it to keep kids looking out the window between stops, and road trip groups use it to call out sights as they drive the loop through Yellowstone and the Tetons."
      },
      {
        "q": "Can I customize the squares, or is there a card for another state?",
        "a": "Yes, swap in your own Wyoming stops in the free bingo card maker. There are highlights cards for Idaho, Montana, and Colorado too if your trip crosses state lines."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup needed. Print as many copies as your group needs before you head out."
      }
    ],
    "related": [
      "montana-highlights",
      "idaho-highlights",
      "colorado-highlights",
      "utah-highlights",
      "arizona-highlights",
      "new-mexico-highlights"
    ]
  },
  "maine-highlights": {
    "intro": "Maine Highlights Bingo is a printable card of 25 things to spot across the state: Acadia National Park, Cadillac Mountain sunrise, Bar Harbor, a proper lobster roll, and lighthouses like Portland Head and Bass Harbor Head. Use it on a coastal drive from Portland up through Bar Harbor, or as a running list for a summer of island ferries and blueberry pancakes. It's free with no signup. Print it at home before your trip or save it to your phone for the ferry ride.",
    "faq": [
      {
        "q": "What's on a Maine highlights bingo card?",
        "a": "Coastal stops like Acadia National Park, Cadillac Mountain, Bar Harbor, and Portland's Old Port, plus food squares like lobster rolls, whoopie pies, and blueberry pancakes."
      },
      {
        "q": "Is this good for a solo trip or a group?",
        "a": "Both. Couples and families use it on a coastal road trip, and solo travelers use it as a checklist while island-hopping from Portland to Bar Harbor."
      },
      {
        "q": "Can I customize it, or is there a card for another New England state?",
        "a": "Yes, edit any square in the free bingo card maker to add your own Maine stops. This site also has cards for Vermont, Massachusetts, and New York if you're touring more of New England."
      },
      {
        "q": "Is it free?",
        "a": "Yes, completely free and no signup. Print it or share the link before you head up the coast."
      }
    ],
    "related": [
      "vermont-highlights",
      "massachusetts-highlights",
      "new-york-state-highlights",
      "boston-travel",
      "michigan-highlights",
      "north-carolina-highlights"
    ]
  },
  "nevada-highlights": {
    "intro": "Nevada Highlights Bingo is a printable card of 25 things to see across the state: the Las Vegas Strip, Red Rock Canyon, Lake Tahoe's Nevada side, Hoover Dam, and the Extraterrestrial Highway out toward Area 51. Use it on a Vegas weekend that mixes casino nights with desert hikes, or as a checklist for a longer loop through the Great Basin and Black Rock Desert. No signup, totally free. Print it before your flight or text the link to whoever's driving.",
    "faq": [
      {
        "q": "What's on a Nevada highlights bingo card?",
        "a": "Vegas staples like the Strip, Fremont Street, and a Bellagio fountain show, plus desert spots like Red Rock Canyon, Valley of Fire, Hoover Dam, and the Extraterrestrial Highway."
      },
      {
        "q": "Is this for a Vegas trip or a road trip through the whole state?",
        "a": "Works for both. Bachelorette and birthday groups use it on the Strip, and road trippers use it to track stops from Reno down through the desert to Vegas."
      },
      {
        "q": "Can I customize the squares, or is there a card for a neighboring state?",
        "a": "Yes, swap in your own stops in the free bingo card maker. There are highlights cards for California, Arizona, and Utah too if your trip goes further."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, completely free with no signup. Print copies for the whole group before the trip."
      }
    ],
    "related": [
      "california-highlights",
      "arizona-highlights",
      "utah-highlights",
      "road-trip-west",
      "colorado-highlights"
    ]
  },
  "new-mexico-highlights": {
    "intro": "New Mexico Highlights Bingo is a printable card of 25 things to see across the state: White Sands, Carlsbad Caverns, Santa Fe Plaza, Taos Pueblo, and a smothered breakfast burrito with green chile on top. Use it on a road trip down the Turquoise Trail from Santa Fe to Albuquerque, or as a bucket list for a longer Southwest loop hitting the deserts and pueblos. It's free, no signup needed. Print it before you go or pull it up at the balloon fiesta.",
    "faq": [
      {
        "q": "What's on a New Mexico highlights bingo card?",
        "a": "Landmarks like White Sands, Carlsbad Caverns, Santa Fe Plaza, and Taos Pueblo, plus food squares like green chile, breakfast burritos, and sopaipillas."
      },
      {
        "q": "Good for a solo trip or a group road trip?",
        "a": "Both. Groups use it to call out landmarks while driving Route 66 or the Turquoise Trail, and solo travelers use it as a checklist for a longer Southwest itinerary."
      },
      {
        "q": "Can I customize it, or is there a card for another Southwest state?",
        "a": "Yes, edit any square in the free bingo card maker. This site also has highlights cards for Arizona, Texas, and Nevada if you're covering more of the Southwest."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. Print it at home or share the link with your travel group."
      }
    ],
    "related": [
      "arizona-highlights",
      "texas-highlights",
      "colorado-highlights",
      "nevada-highlights",
      "utah-highlights"
    ]
  },
  "tennessee-highlights": {
    "intro": "Tennessee Highlights Bingo is a printable card of 25 things to see across the state: Great Smoky Mountains National Park, Nashville's Broadway honky-tonks, Graceland, Beale Street, and a plate of hot chicken. Use it on a drive across the state from Memphis to Nashville to the Smokies, or as a checklist for a long weekend bouncing between mountain views and music venues. Free to use, no signup. Print it before your trip or keep it open on your phone between bars on Broadway.",
    "faq": [
      {
        "q": "What's on a Tennessee highlights bingo card?",
        "a": "Mountain stops like the Smokies and Clingmans Dome, music city landmarks like the Grand Ole Opry and Beale Street, and food squares like hot chicken and Memphis BBQ."
      },
      {
        "q": "Is this for a bachelorette trip or a family road trip?",
        "a": "Both work. Bachelorette and birthday groups use it for a Nashville honky-tonk crawl, and families use it as a checklist driving from Memphis through the Smoky Mountains."
      },
      {
        "q": "Can I customize the squares, or is there a card just for Nashville?",
        "a": "Yes, edit any square in the free bingo card maker. This site also has a Nashville Travel bingo card if you're staying just in Music City."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup required. Print it or text the link to your group before the trip."
      }
    ],
    "related": [
      "nashville-travel",
      "north-carolina-highlights",
      "georgia-highlights",
      "south-carolina-highlights",
      "louisiana-highlights",
      "new-orleans-travel"
    ]
  },
  "south-carolina-highlights": {
    "intro": "South Carolina Highlights Bingo is a printable card of 25 things to see across the state: Charleston's Rainbow Row, Fort Sumter, Myrtle Beach's boardwalk, Congaree National Park, and a bowl of shrimp and grits. Use it on a coast-to-mountains road trip from Charleston up to Table Rock, or as a checklist for a beach week spent hopping between Hilton Head and Kiawah Island. It's free with no signup. Print it before you pack the car or share it with whoever's riding shotgun.",
    "faq": [
      {
        "q": "What's on a South Carolina highlights bingo card?",
        "a": "Charleston landmarks like Rainbow Row and Fort Sumter, beach spots like Myrtle Beach and Hilton Head, and food squares like shrimp and grits and Lowcountry boil."
      },
      {
        "q": "Is this for a beach trip or a road trip across the state?",
        "a": "Both. Beach week groups use it at Myrtle Beach or Hilton Head, and road trippers use it to track stops from Charleston up to the mountains at Table Rock."
      },
      {
        "q": "Can I customize it, or is there a card for a neighboring state?",
        "a": "Yes, swap in your own stops in the free bingo card maker. There are highlights cards for North Carolina and Georgia too if your trip covers more coastline."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, completely free and no signup needed. Print it at home before your trip."
      }
    ],
    "related": [
      "north-carolina-highlights",
      "georgia-highlights",
      "florida-highlights",
      "tennessee-highlights",
      "louisiana-highlights"
    ]
  },
  "massachusetts-highlights": {
    "intro": "Massachusetts Highlights Bingo is a printable card of 25 things to see across the state: the Freedom Trail in Boston, Cape Cod beaches, Salem's witch history, the Berkshires in fall, and a lobster roll on the way to Provincetown. Use it on a loop from Boston out to the Cape and the islands, or as a checklist for a fall foliage drive through the western part of the state. Free to use, no signup required. Print it before you go or keep it open on your phone at the ferry dock.",
    "faq": [
      {
        "q": "What's on a Massachusetts highlights bingo card?",
        "a": "Boston landmarks like the Freedom Trail and Harvard Yard, Cape Cod and island stops like Nantucket and Martha's Vineyard, and food squares like lobster rolls and Boston cream pie."
      },
      {
        "q": "Is this for a Boston weekend or a whole-state road trip?",
        "a": "Both. City groups use it walking the Freedom Trail, and road trippers use it for a longer loop out to the Cape, the islands, and the Berkshires."
      },
      {
        "q": "Can I customize the squares, or is there a card just for Boston?",
        "a": "Yes, edit any square in the free bingo card maker. This site also has a Boston Travel bingo card if you're sticking to the city."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup needed. Print it or share the link with whoever's coming along."
      }
    ],
    "related": [
      "boston-travel",
      "maine-highlights",
      "vermont-highlights",
      "new-york-state-highlights",
      "michigan-highlights",
      "north-carolina-highlights"
    ]
  },
  "new-york-state-highlights": {
    "intro": "New York State Highlights Bingo is a printable card of 25 things to see beyond the city: Niagara Falls, the Adirondack High Peaks, Finger Lakes wine country, Watkins Glen gorge, and apple cider donuts from an upstate orchard. Use it on a drive from the city up through the Catskills and Finger Lakes to Niagara, or as a checklist for a fall foliage trip through the mountains. It's free, no signup needed. Print it before you head upstate or save it for the drive.",
    "faq": [
      {
        "q": "What's on a New York State highlights bingo card?",
        "a": "Upstate landmarks like Niagara Falls, the Adirondacks, and the Finger Lakes, plus a few city icons like the Statue of Liberty and Broadway, mixed with food squares like bagels and apple cider donuts."
      },
      {
        "q": "Is this for an upstate road trip or a mix of the city too?",
        "a": "Both. It leans upstate with the Adirondacks and Finger Lakes, but keeps a few classic city squares in for groups splitting time between Manhattan and the mountains."
      },
      {
        "q": "Can I customize the squares, or is there a card just for the city?",
        "a": "Yes, edit any square in the free bingo card maker to focus more on the city or more on upstate, whichever fits your trip."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, completely free with no signup. Print it before you head out."
      }
    ],
    "related": [
      "vermont-highlights",
      "maine-highlights",
      "massachusetts-highlights",
      "boston-travel",
      "michigan-highlights"
    ]
  },
  "georgia-highlights": {
    "intro": "Georgia Highlights Bingo is a printable card of 25 things to see across the state: Savannah's historic squares, the Georgia Aquarium, Stone Mountain, the Blue Ridge Mountains, and a plate of fried chicken with peach cobbler after. Use it on a road trip from Atlanta down to the coast at Savannah and Jekyll Island, or as a checklist for a weekend split between mountain towns and moss-draped squares. Free with no signup. Print it before you leave or share the link with the car.",
    "faq": [
      {
        "q": "What's on a Georgia highlights bingo card?",
        "a": "Savannah's historic squares, Atlanta stops like the Georgia Aquarium and Stone Mountain, coastal spots like Jekyll Island, and food squares like peach cobbler and fried chicken."
      },
      {
        "q": "Is this for a Savannah weekend or a road trip across the state?",
        "a": "Both. Weekend groups use it walking Savannah's squares, and road trippers use it for a longer loop from Atlanta to the coast and up into the mountains."
      },
      {
        "q": "Can I customize it, or is there a card for a neighboring state?",
        "a": "Yes, swap in your own stops in the free bingo card maker. There are highlights cards for South Carolina, North Carolina, and Florida too if you're covering more of the South."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup needed. Print it at home before your trip."
      }
    ],
    "related": [
      "south-carolina-highlights",
      "north-carolina-highlights",
      "florida-highlights",
      "tennessee-highlights",
      "louisiana-highlights"
    ]
  },
  "michigan-highlights": {
    "intro": "Michigan Highlights Bingo is a printable card of 25 things to see across the state: Mackinac Island with no cars allowed, Sleeping Bear Dunes, the Detroit Riverwalk, Traverse City cherries, and a Coney dog done the Detroit way. Use it on a loop from Detroit up through the Upper Peninsula, or as a checklist for a summer of Great Lakes beach days and ferry rides. It's free, no signup required. Print it before your trip or pull it up on the ferry to the island.",
    "faq": [
      {
        "q": "What's on a Michigan highlights bingo card?",
        "a": "Great Lakes landmarks like Mackinac Island and Sleeping Bear Dunes, Detroit stops like the Riverwalk and Motown Museum, and food squares like Coney dogs, pasties, and Mackinac fudge."
      },
      {
        "q": "Is this for a lakeside trip or a road trip across the whole state?",
        "a": "Both. Families use it for a summer beach trip on the lakeshore, and road trippers use it to track stops driving up through the Upper Peninsula."
      },
      {
        "q": "Can I customize the squares, or is there a card for a neighboring state?",
        "a": "Yes, edit any square in the free bingo card maker. There are highlights cards for Minnesota and Wisconsin too if your trip covers more of the Great Lakes."
      },
      {
        "q": "Is it free?",
        "a": "Yes, completely free with no signup. Print it before you hit the road."
      }
    ],
    "related": [
      "wisconsin-highlights",
      "minnesota-highlights",
      "new-york-state-highlights",
      "maine-highlights",
      "massachusetts-highlights"
    ]
  },
  "louisiana-highlights": {
    "intro": "Louisiana Highlights Bingo is a printable card of 25 things to see across the state: the French Quarter, a bayou swamp tour, Oak Alley Plantation, Cajun country around Lafayette, and beignets from Café du Monde. Use it on a drive from New Orleans out through Cajun country, or as a checklist for a trip built around gumbo, jazz, and swamp tours. Free to use, no signup needed. Print it before you go or keep it open on your phone between courses.",
    "faq": [
      {
        "q": "What's on a Louisiana highlights bingo card?",
        "a": "French Quarter and swamp tour stops, Cajun country landmarks like Lafayette and Avery Island, and food squares like gumbo, beignets, and crawfish boils."
      },
      {
        "q": "Is this for a New Orleans weekend or a road trip across the state?",
        "a": "Both. City groups use it in the French Quarter, and road trippers use it for a longer loop out through Cajun country and the plantations along River Road."
      },
      {
        "q": "Can I customize it, or is there a card just for New Orleans?",
        "a": "Yes, edit any square in the free bingo card maker. This site also has a New Orleans Travel bingo card if you're staying in the city."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup required. Print it or share the link before your trip."
      }
    ],
    "related": [
      "new-orleans-travel",
      "texas-highlights",
      "tennessee-highlights",
      "georgia-highlights",
      "nashville-travel"
    ]
  },
  "north-carolina-highlights": {
    "intro": "North Carolina Highlights Bingo is a printable card of 25 things to see across the state: the Blue Ridge Parkway, Asheville's Biltmore Estate, the Outer Banks, and barbecue done both the eastern and western way. Use it on a drive from the mountains down to the coast, or as a checklist for a week split between Asheville breweries and Outer Banks beaches. It's free, no signup needed. Print it before you pack up or share the link with the group.",
    "faq": [
      {
        "q": "What's on a North Carolina highlights bingo card?",
        "a": "Mountain stops like the Blue Ridge Parkway and Biltmore Estate, coastal spots like Cape Hatteras and Nags Head, and food squares covering both eastern and western style barbecue."
      },
      {
        "q": "Is this for a mountain trip or a beach trip?",
        "a": "It covers both. Mountain town groups use it around Asheville, and beach week crews use it out on the Outer Banks, since the card spans the whole state."
      },
      {
        "q": "Can I customize the squares, or is there a card for a neighboring state?",
        "a": "Yes, swap in your own stops in the free bingo card maker. There are highlights cards for South Carolina, Tennessee, and Georgia too if your trip crosses state lines."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, completely free with no signup. Print it before you head out."
      }
    ],
    "related": [
      "south-carolina-highlights",
      "tennessee-highlights",
      "georgia-highlights",
      "florida-highlights",
      "nashville-travel"
    ]
  },
  "vermont-highlights": {
    "intro": "Vermont Highlights Bingo is a printable card of 25 things to see across the state: Stowe's ski slopes, the Ben and Jerry's factory, Church Street in Burlington, a covered bridge photo stop, and maple syrup straight from the sugarhouse. Use it on a fall foliage drive through the mountains, or as a checklist for a ski weekend that hits a few farm stands along the way. Free to use, no signup required. Print it before you go or pull it up at the sugarhouse.",
    "faq": [
      {
        "q": "What's on a Vermont highlights bingo card?",
        "a": "Ski town stops like Stowe and Killington, Burlington landmarks like Church Street and Lake Champlain, and food squares like maple syrup, cheddar, and maple creemees."
      },
      {
        "q": "Is this for a ski trip or a fall foliage road trip?",
        "a": "Both. Ski groups use it during a winter weekend at Stowe or Killington, and foliage drivers use it as a checklist for covered bridges and farm stands in the fall."
      },
      {
        "q": "Can I customize the squares, or is there a card for a neighboring state?",
        "a": "Yes, edit any square in the free bingo card maker. There are highlights cards for New York and Maine too if your trip covers more of New England."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup needed. Print it before your trip or share the link with your group."
      }
    ],
    "related": [
      "new-york-state-highlights",
      "maine-highlights",
      "massachusetts-highlights",
      "boston-travel",
      "colorado-highlights"
    ]
  },
  "idaho-highlights": {
    "intro": "Idaho Highlights Bingo is a printable card of 25 things to see across the state: Craters of the Moon, Shoshone Falls, the Sawtooth Mountains, Sun Valley skiing, and a huckleberry shake somewhere along the way. Use it on a road trip looping through the Sawtooths and up toward the Yellowstone west entrance, or as a checklist for a summer of hot springs and river floats. It's free, no signup needed. Print it before you go or keep it open on your phone at the trailhead.",
    "faq": [
      {
        "q": "What's on an Idaho highlights bingo card?",
        "a": "Landmarks like Craters of the Moon, Shoshone Falls, and the Sawtooth Mountains, plus food and outdoor squares like huckleberry shakes, hot springs soaks, and river rafting."
      },
      {
        "q": "Is this for a ski trip or a summer road trip?",
        "a": "Both. Winter groups use it around Sun Valley, and summer road trippers use it for a loop through the Sawtooths, Hells Canyon, and the Boise river greenbelt."
      },
      {
        "q": "Can I customize the squares, or is there a card for a neighboring state?",
        "a": "Yes, swap in your own stops in the free bingo card maker. There are highlights cards for Wyoming, Montana, and Utah too if your trip crosses state lines."
      },
      {
        "q": "Is it free to use?",
        "a": "Yes, completely free with no signup. Print it before you hit the road."
      }
    ],
    "related": [
      "wyoming-highlights",
      "montana-highlights",
      "utah-highlights",
      "colorado-highlights",
      "nevada-highlights"
    ]
  },
  "minnesota-highlights": {
    "intro": "Minnesota Highlights Bingo is a printable card of 25 things to spot around the state: Boundary Waters canoe trips, Split Rock Lighthouse, Mall of America, Minnehaha Falls, a Juicy Lucy burger, State Fair butter sculptures. Use it on a North Shore road trip past Duluth's Aerial Lift Bridge, or hand it out at the lake cabin for a weekend of hotdish and loon calls. No signup, totally free. Print it before you head up north or keep it open on your phone at the cabin.",
    "faq": [
      {
        "q": "What's on the Minnesota highlights bingo card?",
        "a": "Classic Minnesota spots and moments: Boundary Waters canoe trips, Split Rock Lighthouse, Mall of America, the North Shore scenic drive, plus food squares like Juicy Lucy burgers and hotdish."
      },
      {
        "q": "Is this for a family trip or a group of friends?",
        "a": "Both work. Families use it on road trips up the North Shore, and cabin groups play it over a weekend of ice fishing or lake days."
      },
      {
        "q": "Can I change the squares?",
        "a": "Yes, edit any square in the free bingo card maker if you want to swap in your own Minnesota spots."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. There's also a Wisconsin Highlights card if your trip crosses the border for cheese curds and Door County."
      }
    ],
    "related": [
      "wisconsin-highlights",
      "michigan-highlights",
      "south-dakota-highlights",
      "north-carolina-highlights",
      "new-york-state-highlights",
      "summer-bucketlist"
    ]
  },
  "wisconsin-highlights": {
    "intro": "Wisconsin Highlights Bingo is a printable card of 25 things to spot across the state: Door County peninsula, Apostle Islands sea caves, the House on the Rock, Lambeau Field, cheese curds, and a Friday fish fry. Use it on a Door County getaway, or bring it to a Packers tailgate with the cheesehead hats out in force. Free to use, nothing to sign up for. Print it before the trip or send the link to whoever's riding shotgun.",
    "faq": [
      {
        "q": "What's on the Wisconsin highlights bingo card?",
        "a": "State favorites like Door County, Apostle Islands sea caves, the Wisconsin Dells, Lambeau Field, plus food squares for cheese curds, bratwurst, and frozen custard."
      },
      {
        "q": "Does this work for a solo trip or a group?",
        "a": "Either one. Solo road trippers use it as a checklist for the state, and groups play it at tailgates or supper clubs."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, the free bingo card maker lets you swap in your own Wisconsin stops before you print."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a Minnesota Highlights card if you're headed further north."
      }
    ],
    "related": [
      "minnesota-highlights",
      "michigan-highlights",
      "south-dakota-highlights",
      "pennsylvania-highlights",
      "boston-travel",
      "summer-bucketlist"
    ]
  },
  "pennsylvania-highlights": {
    "intro": "Pennsylvania Highlights Bingo is a printable card of 25 things to spot across the state: Gettysburg battlefield, Independence Hall, the Rocky steps at the Philadelphia Museum of Art, Fallingwater, Hershey's Chocolate World, and a proper Philly cheesesteak debate. Use it on a Philly-to-Pittsburgh road trip, or hand it out for a family history trip through Amish Country and Gettysburg. Completely free, no signup. Print it before you go or share the link with everyone piling into the car.",
    "faq": [
      {
        "q": "What's on the Pennsylvania highlights bingo card?",
        "a": "Landmarks and local favorites: Gettysburg, Independence Hall, the Liberty Bell, Fallingwater, plus food squares like cheesesteaks, soft pretzels, and Primanti Bros sandwiches."
      },
      {
        "q": "Is this for a road trip or a school history trip?",
        "a": "Both. Families use it driving between Philly and Pittsburgh, and it works well for school trips through Gettysburg and Valley Forge too."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own Pennsylvania stops in the free bingo card maker before printing."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. There's also a Virginia Highlights card if your trip keeps heading south."
      }
    ],
    "related": [
      "virginia-highlights",
      "new-york-state-highlights",
      "massachusetts-highlights",
      "north-carolina-highlights",
      "boston-travel",
      "wisconsin-highlights"
    ]
  },
  "virginia-highlights": {
    "intro": "Virginia Highlights Bingo is a printable card of 25 things to spot around the state: Shenandoah National Park, Skyline Drive overlooks, Colonial Williamsburg, Monticello, Virginia Beach boardwalk, and the wild ponies of Chincoteague. Use it on a Blue Ridge Parkway drive, or bring it along for a Virginia Beach week with the boardwalk and oyster roasts. Free, no account needed. Print it before the drive or text the link to your travel crew.",
    "faq": [
      {
        "q": "What's on the Virginia highlights bingo card?",
        "a": "State landmarks and local color: Shenandoah National Park, Skyline Drive, Colonial Williamsburg, Monticello, plus food squares like Smithfield ham biscuits and Brunswick stew."
      },
      {
        "q": "Is this for a family trip or solo travel?",
        "a": "Both. Families use it on drives through Shenandoah and the Blue Ridge, and solo travelers use it as a checklist for a longer Virginia loop."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, edit any square in the free bingo card maker to add your own Virginia stops."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup needed. This site also has a North Carolina Highlights card if you're continuing south."
      }
    ],
    "related": [
      "north-carolina-highlights",
      "pennsylvania-highlights",
      "massachusetts-highlights",
      "new-york-state-highlights",
      "boston-travel",
      "summer-bucketlist"
    ]
  },
  "south-dakota-highlights": {
    "intro": "South Dakota Highlights Bingo is a printable card of 25 things to spot across the state: Mount Rushmore, Crazy Horse Memorial, Badlands National Park, Custer State Park bison, the Needles Highway, and Wall Drug's roadside signs. Use it on a Black Hills road trip, or hand it out for a family trip hitting Rushmore and the Badlands back to back. Totally free, no login required. Print it before you hit I-90 or pull it up at the next overlook.",
    "faq": [
      {
        "q": "What's on the South Dakota highlights bingo card?",
        "a": "Big landmarks like Mount Rushmore, Crazy Horse Memorial, Badlands National Park, and Custer State Park, plus quirky ones like Wall Drug and roadside attraction photos."
      },
      {
        "q": "Is this for a road trip group or solo travel?",
        "a": "Both. Road trip crews call out landmarks as they drive, and solo travelers use it as a checklist through the Black Hills."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, swap in your own South Dakota stops in the free bingo card maker before you print."
      },
      {
        "q": "Is it free to use?",
        "a": "Completely free, no signup. There's also a Minnesota Highlights card if your route continues east."
      }
    ],
    "related": [
      "minnesota-highlights",
      "wisconsin-highlights",
      "michigan-highlights",
      "virginia-highlights",
      "north-carolina-highlights",
      "summer-bucketlist"
    ]
  },
  "movies-out-now-2026": {
    "intro": "2026 Movies Out Now Bingo is a printable card of 25 movies currently in theaters: Michael, Project Hail Mary, The Mandalorian and Grogu, Wuthering Heights, Scream 7, Dog Man, Hamnet. Use it to plan your next theater run, or turn it into a game where you mark off titles as trailers roll. Free to use, no signup. Print it before your next multiplex trip or send it to the group chat on your way in.",
    "faq": [
      {
        "q": "What's on the 2026 movies out now bingo card?",
        "a": "25 movies currently playing in theaters, from Michael and Project Hail Mary to Scream 7 and Dog Man."
      },
      {
        "q": "Is this for a solo moviegoer or a group?",
        "a": "Works either way. Solo moviegoers use it as a watchlist, and groups mark it off together as they hit different theaters or streaming releases."
      },
      {
        "q": "Can I swap in different movies?",
        "a": "Yes, edit any square in the free bingo card maker if you want your own list of movies instead."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a 2026 Movies Coming Soon card if you'd rather plan ahead than catch up."
      }
    ],
    "related": [
      "movies-coming-soon-2026",
      "movies-2025-new",
      "tv-shows-2025",
      "artists-2026",
      "albums-forward-2026",
      "trends-2025"
    ]
  },
  "movies-coming-soon-2026": {
    "intro": "2026 Movies Coming Soon Bingo is a printable card of 25 movies on the way: Toy Story 5, Avengers Doomsday, Dune Part Three, Moana live-action, Spider-Man Brand New Day, Jumanji Open World. Use it to track what's worth getting excited about, or turn it into a prediction game with friends over who actually shows up in theaters. No cost, no login. Print it now or save it on your phone to check off as release dates roll around.",
    "faq": [
      {
        "q": "What's on the 2026 movies coming soon bingo card?",
        "a": "25 upcoming movies, from Toy Story 5 and Avengers Doomsday to Dune Part Three and Spider-Man Brand New Day."
      },
      {
        "q": "Is this for one person or a group?",
        "a": "Either. Solo movie fans use it as a watchlist, and groups play it as a guessing game about what actually gets delayed."
      },
      {
        "q": "Can I swap in different titles?",
        "a": "Yes, the free bingo card maker lets you edit any square if you want a different lineup of upcoming movies."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. There's also a 2026 Movies Out Now card if you'd rather track what's already in theaters."
      }
    ],
    "related": [
      "movies-out-now-2026",
      "movies-2025-new",
      "tv-shows-2025",
      "artists-2026",
      "albums-forward-2026",
      "trends-2025"
    ]
  },
  "artists-2026": {
    "intro": "2026 Artists Right Now Bingo is a printable card of 25 names dominating the charts and playlists: Sabrina Carpenter, Bad Bunny, Chappell Roan, Kendrick Lamar, Tate McRae, Zara Larsson, Doja Cat. Use it on a road trip with the radio on shuffle, or turn it into a party game where whoever guesses the artist first wins. Free, no signup required. Print it before your next drive or pull it up on your phone at the next playlist party.",
    "faq": [
      {
        "q": "What's on the 2026 artists right now bingo card?",
        "a": "25 of the biggest names in music right now, from Bruno Mars and Taylor Swift to Bad Bunny and Kendrick Lamar."
      },
      {
        "q": "Is this for one person or a group?",
        "a": "Works either way. Solo listeners mark it off as artists come on shuffle, and groups play it as a guessing game over a shared playlist."
      },
      {
        "q": "Can I swap in different artists?",
        "a": "Yes, edit any square in the free bingo card maker if you want your own list of artists."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a 2026 Hit Songs card if you'd rather guess the song than the artist."
      }
    ],
    "related": [
      "albums-forward-2026",
      "hit-songs-2026",
      "movies-out-now-2026",
      "movies-coming-soon-2026",
      "trends-2025",
      "tv-shows-2025"
    ]
  },
  "albums-forward-2026": {
    "intro": "2026 Albums to Look Forward To Bingo is a printable card of 25 releases worth watching for: a new BTS album, BLACKPINK's DEADLINE, Harry Styles' fourth album, Bruno Mars' The Romantic, Drake's Iceman, a possible Rolling Stones record. Use it to track release dates with a music-obsessed friend group, or just as a checklist for your own listening queue this year. Free, no strings attached. Print it now or keep it on your phone to check off as albums drop.",
    "faq": [
      {
        "q": "What's on the 2026 albums bingo card?",
        "a": "25 anticipated album releases, from a new BTS album and BLACKPINK's DEADLINE to Bruno Mars' The Romantic and Drake's Iceman."
      },
      {
        "q": "Is this for one person or a group?",
        "a": "Either. Solo music fans use it as a release calendar, and groups play it together as albums actually drop."
      },
      {
        "q": "Can I customize the list?",
        "a": "Yes, swap in your own anticipated albums in the free bingo card maker before you print."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. There's also a 2026 Artists Right Now card if you want to track people instead of releases."
      }
    ],
    "related": [
      "artists-2026",
      "hit-songs-2026",
      "movies-coming-soon-2026",
      "movies-out-now-2026",
      "trends-2025"
    ]
  },
  "summer-stories-and-feelings": {
    "intro": "Summer Stories and Feelings Bingo is a printable card of 25 reading prompts built around themes and emotions: find a book about found family, grief, hope, or a monster story, or one with a flower on the cover. Use it for a summer reading program at the library, or run it as a personal challenge to stretch what you normally pick up. Free to use, no login needed. Print it before the library run or save it for your next bookstore trip.",
    "faq": [
      {
        "q": "What's on the summer stories and feelings bingo card?",
        "a": "25 reading prompts based on themes and emotions, like found family, grief, hope, monsters, and books with a flower on the cover."
      },
      {
        "q": "Is this for a solo reader or a group?",
        "a": "Both. Solo readers use it as a personal challenge, and book clubs or library programs use it as a shared summer challenge."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, edit any square in the free bingo card maker if you want different prompts or themes."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a Summer Reading Prompts card if you want a mix of themes and formats instead."
      }
    ],
    "related": [
      "summer-reading-prompts",
      "more-summer-reading-prompts",
      "teen-summer-reading",
      "book-reading",
      "acclaimed-books",
      "popular-book-club-picks"
    ]
  },
  "summer-reading-prompts": {
    "intro": "Summer Reading Prompts Bingo is a printable card of 25 reading challenges to fill with any book that fits: a story set in outer space, a book under 150 pages, a translated novel, a memoir, or one recommended by a friend. Use it for a library summer reading program, or run it solo as a way to branch out from your usual picks. No signup, just free to use. Print it before your next library visit or pull it up at the bookstore.",
    "faq": [
      {
        "q": "What's on the summer reading prompts bingo card?",
        "a": "25 reading prompts covering genre, format, and subject matter, like outer space, horror, poetry, memoir, and short books under 150 pages."
      },
      {
        "q": "Is this for one reader or a group?",
        "a": "Both. Solo readers use it as a personal challenge, and libraries or book clubs run it as a group summer reading program."
      },
      {
        "q": "Can I customize the prompts?",
        "a": "Yes, the free bingo card maker lets you swap in your own reading prompts before printing."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a More Summer Reading Prompts card with a second set of themes if you finish this one."
      }
    ],
    "related": [
      "more-summer-reading-prompts",
      "summer-stories-and-feelings",
      "teen-summer-reading",
      "kids-summer-reading-bingo",
      "summer-genre-challenge",
      "book-reading"
    ]
  },
  "more-summer-reading-prompts": {
    "intro": "More Summer Reading Prompts Bingo is a printable card of 25 fresh reading challenges: a beach read, a locked room mystery, an enemies-to-lovers romance, a heist story, or a cozy fantasy. Use it as a follow-up once you've filled the first summer reading card, or hand it out at a book club looking for a new round of prompts. Completely free, nothing to log into. Print it for your next reading challenge or share it with your book club group chat.",
    "faq": [
      {
        "q": "What's on the more summer reading prompts bingo card?",
        "a": "A second set of 25 reading prompts, covering genres and tropes like beach reads, locked room mysteries, romantasy, and Southern Gothic."
      },
      {
        "q": "Is this for a solo challenge or a book club?",
        "a": "Both. Solo readers use it to branch into new genres, and book clubs use it to pick their next round of reads together."
      },
      {
        "q": "Can I customize the prompts?",
        "a": "Yes, swap in your own prompts using the free bingo card maker before you print."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has the original Summer Reading Prompts card if you haven't started that one yet."
      }
    ],
    "related": [
      "summer-reading-prompts",
      "summer-stories-and-feelings",
      "summer-genre-challenge",
      "summer-reading-experiences",
      "popular-book-club-picks",
      "nyt-fiction-bestsellers"
    ]
  },
  "teen-summer-reading": {
    "intro": "Teen Summer Reading Bingo is a printable card of 25 reading prompts made for teens: read a graphic novel, try dark academia, pick a book published in your birth year, or read something after midnight. Use it for a school or library summer reading assignment, or just as a personal challenge to read outside your usual genre. Free, plain and simple, no signup. Print it before summer break starts or keep it on your phone for the library.",
    "faq": [
      {
        "q": "What's on the teen summer reading bingo card?",
        "a": "25 prompts aimed at teen readers, like dark academia, graphic novels, banned books, poetry, and a book that made you cry."
      },
      {
        "q": "Is this for individual reading or a class assignment?",
        "a": "Both. It works as a personal reading challenge or as an assignment for a school or library summer reading program."
      },
      {
        "q": "Can I customize the squares?",
        "a": "Yes, edit any square in the free bingo card maker to match your own reading list."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. This site also has a Summer Reading Prompts card if you want a version aimed at all ages."
      }
    ],
    "related": [
      "summer-reading-prompts",
      "more-summer-reading-prompts",
      "summer-stories-and-feelings",
      "kids-summer-reading-bingo",
      "book-reading",
      "acclaimed-books"
    ]
  },
  "kids-summer-reading-bingo": {
    "intro": "Kids Summer Reading Bingo is a printable card of 25 ways to make summer reading fun for kids: read to a pet, build a blanket fort and read inside it, try a graphic novel or comic, read outside under a tree. Use it solo to turn a summer reading list into a game, or hand it out at a classroom or library reading party and see who fills a line first. Free to use, no signup required. Print it for the first day of summer break or keep it on the fridge all season.",
    "faq": [
      {
        "q": "What's on this bingo card?",
        "a": "25 kid-friendly reading habits and prompts, things like reading to a stuffed animal, trying an audiobook, or reading a mystery book, mixed with cozy spots like a blanket fort or reading with a flashlight."
      },
      {
        "q": "Is this for one kid or a group?",
        "a": "Works either way. One kid can play it solo over the summer, or a classroom, library group, or family can each get a card and race to fill a line."
      },
      {
        "q": "Can I change the squares?",
        "a": "Yes, the free bingo card maker lets you swap in your own prompts, handy if you want to match a specific reading list or age group."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. If you're picking books for a specific age range, check out Elementary Summer Picks Bingo or Middle School Summer Picks Bingo too."
      }
    ],
    "related": [
      "summer-genre-challenge",
      "summer-reading-experiences",
      "elementary-summer-picks",
      "middle-school-summer-picks",
      "teen-summer-reading",
      "classroom-activities",
      "summer-reading-prompts"
    ]
  },
  "summer-genre-challenge": {
    "intro": "Summer Genre Challenge Bingo is a printable card of 25 reading prompts to push you outside your usual shelf: a fantasy world, a memoir or biography, a book with a map inside, a translated novel, a debut author. Use it solo to finally read that genre you keep skipping, or run it with a book club and compare cards at the end of summer. No signup, totally free. Print it out now or save it to your phone for the next library trip.",
    "faq": [
      {
        "q": "What kind of prompts are on this card?",
        "a": "25 genre and format challenges: mystery or thriller, science fiction, poetry collection, short stories, plus specifics like a one-word title or a book over 400 pages."
      },
      {
        "q": "Solo reading or a group challenge?",
        "a": "Either works. Read through it alone to break out of your comfort zone, or turn it into a book club challenge and see who finishes a row first."
      },
      {
        "q": "Can I swap out the prompts?",
        "a": "Yes, use the free bingo card maker to replace any square, good for tailoring the genres to what your group actually wants to read."
      },
      {
        "q": "Is it free to use?",
        "a": "Free, no signup needed. Book Reading Challenge Bingo and Summer Reading Prompts Bingo have more of the same if you want another round."
      }
    ],
    "related": [
      "book-reading",
      "summer-reading-prompts",
      "more-summer-reading-prompts",
      "summer-reading-experiences",
      "acclaimed-books",
      "progression-fantasy",
      "books-2025"
    ]
  },
  "summer-reading-experiences": {
    "intro": "Summer Reading Experiences Bingo is a printable card of 25 ways to fold reading into the season: read at the beach, buddy read a book with a friend, visit the library, log your reading streak, finish a book series. Use it solo as a summer reading bucket list, or bring it to a summer book club and knock squares out together. Free with no signup required. Print it before your first beach day or pin it up for the whole summer.",
    "faq": [
      {
        "q": "What's on the card?",
        "a": "25 reading experiences and habits for summer, things like reading on the porch during a storm, buddy reading with a friend, or going to an author event, plus small wins like finishing a book in one day."
      },
      {
        "q": "Is this a solo thing or for a group?",
        "a": "Both work. Use it as a personal summer reading bucket list, or hand out cards to a summer book club and compare progress."
      },
      {
        "q": "Can I edit the squares?",
        "a": "Yes, swap any square on the free bingo card maker to fit your library's programs or your own reading goals."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. Pair it with Summer Genre Challenge Bingo if you want to mix in some genre prompts too."
      }
    ],
    "related": [
      "summer-genre-challenge",
      "kids-summer-reading-bingo",
      "summer-reading-prompts",
      "more-summer-reading-prompts",
      "teen-summer-reading",
      "popular-book-club-picks",
      "classroom-activities"
    ]
  },
  "elementary-summer-picks": {
    "intro": "Elementary Summer Picks Bingo is a printable card of 25 book titles built for elementary-aged readers: The Aquanaut, Manatee Summer, Treasure in the Lake, The Shelterlings, Finally Seen. Use it to spot books you've already read or want to read this summer, or send it home with a class as a summer reading tracker. Free, no signup required. Print it for the school library or a family road trip to the bookstore.",
    "faq": [
      {
        "q": "What books are on this card?",
        "a": "25 titles aimed at elementary readers, like The Girl Who Built a Spider, Home Away from Home, and The Ultimate Goal, mixed with adventure, mystery, and animal stories."
      },
      {
        "q": "Is this for one kid or a whole class?",
        "a": "Either. One kid can mark off books as they read them over the summer, or a teacher can print a class set for a shared reading challenge."
      },
      {
        "q": "Can I swap in different titles?",
        "a": "Yes, the free bingo card maker lets you replace any book with one from your own reading list or classroom shelf."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. If the reader in your house is a bit older, Middle School Summer Picks Bingo is the next step up."
      }
    ],
    "related": [
      "middle-school-summer-picks",
      "high-school-summer-picks",
      "kids-summer-reading-bingo",
      "classroom-activities",
      "teen-summer-reading",
      "summer-reading-experiences"
    ]
  },
  "middle-school-summer-picks": {
    "intro": "Middle School Summer Picks Bingo is a printable card of 25 book titles picked for middle schoolers: Skandar and the Unicorn Thief, Simon Sort of Says, The Last Mapmaker, Winnie Zeng Unleashes a Legend. Use it to track books you've read or want to read this summer, or hand it out at a middle school library for a reading incentive. No signup, completely free. Print it for the last day of school or share it with a classroom before break.",
    "faq": [
      {
        "q": "What books are on this card?",
        "a": "25 titles for middle school readers, from adventure and fantasy like Skandar and the Unicorn Thief to realistic stories like Invisible and The Fort."
      },
      {
        "q": "Is this for solo reading or a class?",
        "a": "Both. Read through it on your own over the summer, or a teacher or librarian can print copies for a whole grade to compete."
      },
      {
        "q": "Can I change which books are on it?",
        "a": "Yes, swap any title on the free bingo card maker if you want to match your school's specific reading list."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. Elementary Summer Picks Bingo and High School Summer Picks Bingo cover the grades on either side."
      }
    ],
    "related": [
      "elementary-summer-picks",
      "high-school-summer-picks",
      "teen-summer-reading",
      "classroom-activities",
      "kids-summer-reading-bingo",
      "summer-genre-challenge"
    ]
  },
  "high-school-summer-picks": {
    "intro": "High School Summer Picks Bingo is a printable card of 25 YA titles for teen readers: Rez Ball, Twelfth Knight, Star Splitter, The Girl with the Glass Heart, Long Live the Pumpkin Queen. Use it to spot books you've read or add to your summer stack, or print copies for a high school library display and let students mark up their own. Free to use, no signup. Print it before summer break starts or share the link with your class.",
    "faq": [
      {
        "q": "What books are on this card?",
        "a": "25 YA titles across genres, thrillers like Going Dark, fantasy like Star Splitter, and contemporary reads like Pieces of Me and All the Noise at Once."
      },
      {
        "q": "Is this for one reader or a class?",
        "a": "Works both ways. A teen can use it solo as a summer reading checklist, or a teacher can print it for a class-wide reading challenge."
      },
      {
        "q": "Can I swap out titles?",
        "a": "Yes, the free bingo card maker lets you replace any book, useful if your school has its own required summer reading list."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup needed. Teen Summer Reading Bingo and Middle School Summer Picks Bingo are good companions if you want more."
      }
    ],
    "related": [
      "teen-summer-reading",
      "middle-school-summer-picks",
      "elementary-summer-picks",
      "classroom-activities",
      "popular-book-club-picks",
      "most-anticipated-summer-2026"
    ]
  },
  "nyt-fiction-bestsellers": {
    "intro": "NYT Fiction Bestsellers Bingo is a printable card of 25 titles topping the New York Times fiction list: James by Percival Everett, Fourth Wing, Onyx Storm, The Women by Kristin Hannah, Never Flinch by Stephen King. Use it to spot which bestsellers you've already read, or bring it to book club and see who's the most caught up. Free, no signup needed. Print it for your next library visit or keep it open on your phone at the bookstore.",
    "faq": [
      {
        "q": "What's on this card?",
        "a": "25 current New York Times fiction bestsellers, spanning thrillers, romance, literary fiction, and a few big fantasy sequels like Onyx Storm and Iron Flame."
      },
      {
        "q": "Is this solo or a group activity?",
        "a": "Both. Mark off titles solo as you read them, or compare cards with a book club or coworkers to see who's read the most."
      },
      {
        "q": "Can I update the list?",
        "a": "Yes, since bestseller lists change, use the free bingo card maker to swap in newer titles whenever you want."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. Popular Book Club Picks Bingo and Most Anticipated Summer 2026 Bingo round out the current bestseller lineup."
      }
    ],
    "related": [
      "popular-book-club-picks",
      "most-anticipated-summer-2026",
      "acclaimed-books",
      "books-2025",
      "book-reading"
    ]
  },
  "most-anticipated-summer-2026": {
    "intro": "Most Anticipated Summer 2026 Bingo is a printable card of 25 upcoming releases readers are counting down to: Whistler, Land, The Housewife, Sublimation, Heart of Glass. Use it to track which ones you've preordered or already read early, or bring it to a book club to plan out the next few months of picks. Free with no signup. Print it now and start checking off titles as they land on shelves.",
    "faq": [
      {
        "q": "What's on this card?",
        "a": "25 buzzy titles releasing in summer 2026, across romance, literary fiction, thrillers, and a few genre-benders like Dead but Dreaming of Electric Sheep."
      },
      {
        "q": "Is this for solo readers or a group?",
        "a": "Either. Track your own preorders and reads solo, or use it with a book club to plan out shared summer picks."
      },
      {
        "q": "Can I customize the titles?",
        "a": "Yes, release dates shift, so the free bingo card maker lets you swap any title in or out as needed."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. NYT Fiction Bestsellers Bingo is a good next stop if you want more current titles to track."
      }
    ],
    "related": [
      "nyt-fiction-bestsellers",
      "popular-book-club-picks",
      "acclaimed-books",
      "books-2025",
      "progression-fantasy"
    ]
  },
  "popular-book-club-picks": {
    "intro": "Popular Book Club Picks Bingo is a printable card of 25 titles that show up in book clubs again and again: Lessons in Chemistry, The Seven Husbands of Evelyn Hugo, Demon Copperhead, Circe, Where the Crawdads Sing. Use it to see how many club favorites you've already read, or pass it around at your next meeting and compare cards. No signup, completely free. Print it before your next book club pick or share it in your group chat.",
    "faq": [
      {
        "q": "What books are on this card?",
        "a": "25 titles that are staples of book club discussion, from literary hits like Demon Copperhead to popular fiction like Beach Read and It Ends with Us."
      },
      {
        "q": "Is this for one reader or a whole club?",
        "a": "Both. Use it solo to see how well-read you are on club favorites, or print copies for the whole group and compare at your next meeting."
      },
      {
        "q": "Can I change the titles?",
        "a": "Yes, the free bingo card maker lets you swap in your own club's past picks or upcoming reads."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. NYT Fiction Bestsellers Bingo and Acclaimed Books Bingo make good follow-ups for your next meeting."
      }
    ],
    "related": [
      "nyt-fiction-bestsellers",
      "acclaimed-books",
      "books-2025",
      "most-anticipated-summer-2026",
      "book-reading"
    ]
  },
  "pacific-northwest-books": {
    "intro": "Pacific Northwest Books Bingo is a printable card of 25 titles set in or around the Pacific Northwest: Snow Falling on Cedars, The Boys in the Boat, Where'd You Go Bernadette, The Orchardist, Wild Life. Use it solo if you love books that capture the region's rain and forests, or bring it to a local book club for a regional reading theme. Free to use, no signup. Print it for your next rainy-day reading stack or share it with a Pacific Northwest book club.",
    "faq": [
      {
        "q": "What's the theme of this card?",
        "a": "25 books set in or written about the Pacific Northwest, from literary fiction like The Boys in the Boat to novels steeped in the region's landscape like Mink River and The River Why."
      },
      {
        "q": "Is this for solo reading or a group?",
        "a": "Either. Read through it solo if you're drawn to regional fiction, or use it with a local book club for a themed reading challenge."
      },
      {
        "q": "Can I customize the titles?",
        "a": "Yes, swap any book on the free bingo card maker if you want to focus on a specific era or subregion."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup needed. Southern Books Bingo and California Books Bingo cover other regions if you want to keep the theme going."
      }
    ],
    "related": [
      "southern-books",
      "new-england-books",
      "midwest-books",
      "california-books",
      "popular-book-club-picks",
      "acclaimed-books"
    ]
  },
  "southern-books": {
    "intro": "Southern Books Bingo is a printable card of 25 titles set in or about the American South: To Kill a Mockingbird, The Color Purple, Beloved, Their Eyes Were Watching God, The Help. Use it solo to work through a stack of Southern literature, or bring it to a local book club built around regional reads. No signup, completely free. Print it for your next book club meeting or keep it handy as a reading list all year.",
    "faq": [
      {
        "q": "What's the theme of this card?",
        "a": "25 novels set in or written about the American South, spanning classics like As I Lay Dying to modern titles like The Nickel Boys and The Vanishing Half."
      },
      {
        "q": "Solo reading or a book club?",
        "a": "Both. Work through it on your own, or hand it out at a book club focused on Southern literature."
      },
      {
        "q": "Can I swap the titles?",
        "a": "Yes, the free bingo card maker lets you replace any book, handy if you want to focus on a specific era or author."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. New England Books Bingo and Midwest Books Bingo cover other regions if you want to keep exploring."
      }
    ],
    "related": [
      "new-england-books",
      "midwest-books",
      "california-books",
      "pacific-northwest-books",
      "acclaimed-books",
      "popular-book-club-picks"
    ]
  },
  "new-england-books": {
    "intro": "New England Books Bingo is a printable card of 25 titles set in or about New England: Little Women, The Scarlet Letter, Moby-Dick, Olive Kitteridge, The Secret History. Use it solo to work through classic and contemporary New England fiction, or bring it to a local book club for a regional theme night. Free with no signup required. Print it before your next library trip or pin it up for a season of regional reading.",
    "faq": [
      {
        "q": "What's the theme?",
        "a": "25 books set in New England, mixing classics like Walden and The Scarlet Letter with modern titles like The Dutch House and Defending Jacob."
      },
      {
        "q": "Is this for solo reading or a group?",
        "a": "Either. Read through it alone, or use it for a local book club with a New England theme."
      },
      {
        "q": "Can I customize the titles?",
        "a": "Yes, swap any book on the free bingo card maker to match your own regional reading list."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. Southern Books Bingo and Midwest Books Bingo are good picks if you want to explore more regions."
      }
    ],
    "related": [
      "southern-books",
      "midwest-books",
      "california-books",
      "pacific-northwest-books",
      "popular-book-club-picks",
      "acclaimed-books"
    ]
  },
  "midwest-books": {
    "intro": "Midwest Books Bingo is a printable card of 25 titles set in or about the Midwest: The Great Gatsby, Little Fires Everywhere, The Round House, Gilead, American Gods. Use it solo to dig into Midwestern literature, or bring it to a book club built around regional reads. Totally free, no signup needed. Print it for your next Midwest-themed book swap or keep it as a running list all year.",
    "faq": [
      {
        "q": "What's the theme of this card?",
        "a": "25 books set in the Midwest, from classics like The Great Gatsby and Sister Carrie to modern titles like The Overstory and A Visit from the Goon Squad."
      },
      {
        "q": "Solo or group reading?",
        "a": "Both. Use it as a personal reading list, or bring it to a book club focused on Midwestern fiction."
      },
      {
        "q": "Can I swap the titles?",
        "a": "Yes, the free bingo card maker lets you replace any book to match your own list or club's picks."
      },
      {
        "q": "Is it free?",
        "a": "Free, no signup. California Books Bingo and New England Books Bingo are good next stops for more regional reading."
      }
    ],
    "related": [
      "california-books",
      "new-england-books",
      "southern-books",
      "pacific-northwest-books",
      "popular-book-club-picks",
      "acclaimed-books"
    ]
  },
  "california-books": {
    "intro": "California Books Bingo is a printable card of 25 titles set in or about California: East of Eden, Cannery Row, The Joy Luck Club, The Grapes of Wrath, On the Road. Use it solo to work through California literature front to back, or bring it to a local book club for a West Coast theme. Free to use, no signup required. Print it before your next coastal road trip or pass it along to your book club.",
    "faq": [
      {
        "q": "What's the theme of this card?",
        "a": "25 books set in California, spanning classics like East of Eden and The Grapes of Wrath to modern titles like Malibu Rising and The Sympathizer."
      },
      {
        "q": "Is this for solo reading or a group?",
        "a": "Either. Read through it on your own, or use it with a book club for a California-themed reading month."
      },
      {
        "q": "Can I customize the titles?",
        "a": "Yes, swap any book on the free bingo card maker to fit your own reading list."
      },
      {
        "q": "Is it free?",
        "a": "Completely free, no signup. Pacific Northwest Books Bingo and Southern Books Bingo are good picks if you want to keep touring the country."
      }
    ],
    "related": [
      "pacific-northwest-books",
      "southern-books",
      "new-england-books",
      "midwest-books",
      "popular-book-club-picks",
      "acclaimed-books"
    ]
  }
};
