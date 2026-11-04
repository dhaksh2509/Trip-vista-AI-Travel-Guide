export interface RawDocument {
  id: string;
  destination: string;
  title: string;
  category: 'Attractions' | 'Food' | 'Culture' | 'Transportation' | 'Tips' | 'Safety' | 'History';
  sections: {
    sectionTitle: string;
    content: string;
    tags: string[];
  }[];
}

export const KNOWLEDGE_BASE_DOCUMENTS: RawDocument[] = [
  {
    "id": "doc-araku-valley-attractions",
    "destination": "Araku Valley",
    "title": "Top Attractions, Sights & Overview of Araku Valley",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Araku Valley",
        "content": "Araku Valley is a premier destination in Andhra Pradesh. Ooty of Andhra - Misty hills, cascading waterfalls, and aromatic coffee. Description: A picturesque hill station in the Eastern Ghats renowned for lush coffee plantations, tribal culture, and ancient limestone caves. Best time to visit: September to March. Recommended trip duration: 3 days. Popular travel interests: Nature, Food, Photography, Adventure. Official Tourism: https://tourism.ap.gov.in.",
        "tags": [
          "araku valley",
          "araku valley",
          "andhra pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Borra Caves (Nature)",
        "content": "Million-year-old limestone caves featuring stalactites and stalagmites. Location: Araku Valley. Estimated visit duration: 120 minutes. Estimated entry fee: ₹80. Tips: Wear shoes with good grip ",
        "tags": [
          "araku valley",
          "araku valley",
          "andhra pradesh",
          "nature",
          "borra caves",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Katiki Waterfalls (Adventure)",
        "content": "Cascading mountain waterfall accessed via 4x4 off-road jeep drive and forest trek. Location: Araku Valley. Estimated visit duration: 150 minutes. Estimated entry fee: ₹300. Tips: Carry extra dry clothes ",
        "tags": [
          "araku valley",
          "araku valley",
          "andhra pradesh",
          "adventure",
          "katiki waterfalls",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-araku-valley-culture-logistics",
    "destination": "Araku Valley",
    "title": "Culture, Food & Transportation Guide for Araku Valley",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Araku Valley",
        "content": "Cultural highlights of Araku Valley, Andhra Pradesh: Dhimsa tribal dance. Organic Araku Arabica coffee. Bamboo woodcrafts. Recognized destination category: Hill Stations & Mountains. Known aliases: Araku, Ananthagiri Hills, Borra Caves.",
        "tags": [
          "araku valley",
          "araku valley",
          "andhra pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Araku Valley",
        "content": "Renowned food and dining specialties in Araku Valley: Vasundhara Tribal Kitchen (Tribal Andhra Lunch): Famous for Charcoal roasted Bongu Lo Kodi (Bamboo Chicken). Avg cost per person: ₹300.",
        "tags": [
          "araku valley",
          "araku valley",
          "andhra pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Araku Valley",
        "content": "Reaching Araku Valley, Andhra Pradesh: Nearest Airport: Visakhapatnam Airport (VTZ) - 115 km. Nearest Railway: Araku Railway Station (ARK). Road Connectivity: Ghat road via SH 39 from Visakhapatnam.",
        "tags": [
          "araku valley",
          "araku valley",
          "andhra pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-visakhapatnam-attractions",
    "destination": "Visakhapatnam",
    "title": "Top Attractions, Sights & Overview of Visakhapatnam",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Visakhapatnam",
        "content": "Visakhapatnam is a premier destination in Andhra Pradesh. The Jewel of the East Coast - Eastern Ghats meeting Bay of Bengal. Description: Vibrant coastal metropolis offering golden beaches, INS Kursura submarine museum, Kailasagiri hilltop, and scenic marine drives. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: Beaches, History, Food, Sightseeing. Official Tourism: https://tourism.ap.gov.in.",
        "tags": [
          "visakhapatnam",
          "visakhapatnam",
          "andhra pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "INS Kursura Submarine Museum (History)",
        "content": "Preserved Soviet-built submarine on RK Beach offering guided tours of the engine room. Location: Visakhapatnam. Estimated visit duration: 90 minutes. Estimated entry fee: ₹70. Tips: Visit early to avoid ticketing queues ",
        "tags": [
          "visakhapatnam",
          "visakhapatnam",
          "andhra pradesh",
          "history",
          "ins kursura submarine museum",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Kailasagiri Hilltop Park (Sightseeing)",
        "content": "Hilltop park reached via passenger ropeway with sweeping panoramic coastal views. Location: Visakhapatnam. Estimated visit duration: 120 minutes. Estimated entry fee: ₹100. Tips: Take the scenic cable car ropeway up ",
        "tags": [
          "visakhapatnam",
          "visakhapatnam",
          "andhra pradesh",
          "sightseeing",
          "kailasagiri hilltop park",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-visakhapatnam-culture-logistics",
    "destination": "Visakhapatnam",
    "title": "Culture, Food & Transportation Guide for Visakhapatnam",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Visakhapatnam",
        "content": "Cultural highlights of Visakhapatnam, Andhra Pradesh: Andhra seafood coastal delicacies. Naval command traditions. Buddhist heritage. Recognized destination category: Beaches & Coastal. Known aliases: Vizag, Waltair, City of Destiny.",
        "tags": [
          "visakhapatnam",
          "visakhapatnam",
          "andhra pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Visakhapatnam",
        "content": "Renowned food and dining specialties in Visakhapatnam: Sea Inn (Raju Gaari Dhaba) (Andhra Coastal Lunch): Famous for Spicy Royyala Vepudu (Prawn Fry) & Crab Roast. Avg cost per person: ₹350.",
        "tags": [
          "visakhapatnam",
          "visakhapatnam",
          "andhra pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Visakhapatnam",
        "content": "Reaching Visakhapatnam, Andhra Pradesh: Nearest Airport: Visakhapatnam International Airport (VTZ). Nearest Railway: Visakhapatnam Junction (VSKP). Road Connectivity: Golden Quadrilateral NH 16.",
        "tags": [
          "visakhapatnam",
          "visakhapatnam",
          "andhra pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-tirupati-attractions",
    "destination": "Tirupati",
    "title": "Top Attractions, Sights & Overview of Tirupati",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Tirupati",
        "content": "Tirupati is a premier destination in Andhra Pradesh. Spiritual Capital of Andhra - Foothills of Seven Sacred Hills. Description: World-famous pilgrimage destination housing the sacred Sri Venkateswara Swamy Temple on Tirumala hills. Best time to visit: September to March. Recommended trip duration: 2 days. Popular travel interests: Temples, History, Culture. Official Tourism: https://ttdevasthanams.ap.gov.in.",
        "tags": [
          "tirupati",
          "tirupati",
          "andhra pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Sri Venkateswara Swamy Temple (Temples)",
        "content": "Ancient Dravidian temple atop Tirumala hills revered as Kaliyuga Vaikuntam. Location: Tirupati. Estimated visit duration: 180 minutes. Estimated entry fee: ₹300. Tips: Book darshan tokens online in advance ",
        "tags": [
          "tirupati",
          "tirupati",
          "andhra pradesh",
          "temples",
          "sri venkateswara swamy temple",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-tirupati-culture-logistics",
    "destination": "Tirupati",
    "title": "Culture, Food & Transportation Guide for Tirupati",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Tirupati",
        "content": "Cultural highlights of Tirupati, Andhra Pradesh: GI-tagged Tirupati Laddu Prasadam. Kalamkari textiles. Recognized destination category: Religious & Pilgrimage. Known aliases: Tirumala, Venkateswara, Balaji Temple.",
        "tags": [
          "tirupati",
          "tirupati",
          "andhra pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Tirupati",
        "content": "Renowned food and dining specialties in Tirupati: Bhimas Deluxe Diner (South Indian Lunch): Famous for Pure Ghee Andhra Meals with Gongura. Avg cost per person: ₹200.",
        "tags": [
          "tirupati",
          "tirupati",
          "andhra pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Tirupati",
        "content": "Reaching Tirupati, Andhra Pradesh: Nearest Airport: Tirupati Airport (TIR). Nearest Railway: Tirupati Main (TPTY). Road Connectivity: NH 71.",
        "tags": [
          "tirupati",
          "tirupati",
          "andhra pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-gandikota-attractions",
    "destination": "Gandikota",
    "title": "Top Attractions, Sights & Overview of Gandikota",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Gandikota",
        "content": "Gandikota is a premier destination in Andhra Pradesh. The Grand Canyon of India - Pennar River Gorge and Historic Fort. Description: A breathtaking gorge carved by the River Pennar through red granite hills, crowned by a massive 12th-century stone fort. Best time to visit: September to February. Recommended trip duration: 2 days. Popular travel interests: Adventure, Nature, Photography. Official Tourism: https://tourism.ap.gov.in.",
        "tags": [
          "gandikota",
          "gandikota",
          "andhra pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Pennar River Canyon Viewpoint (Nature)",
        "content": "Dramatic 300-foot red granite cliffs framing the emerald waters of Pennar River. Location: Gandikota. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Sunrise offers phenomenal lighting ",
        "tags": [
          "gandikota",
          "gandikota",
          "andhra pradesh",
          "nature",
          "pennar river canyon viewpoint",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-gandikota-culture-logistics",
    "destination": "Gandikota",
    "title": "Culture, Food & Transportation Guide for Gandikota",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Gandikota",
        "content": "Cultural highlights of Gandikota, Andhra Pradesh: Raghunatha Swamy stone temple. Stargazing cliff camping. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Grand Canyon of India, Pennar Gorge.",
        "tags": [
          "gandikota",
          "gandikota",
          "andhra pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Gandikota",
        "content": "Renowned food and dining specialties in Gandikota: Haritha Heritage Restaurant (Rayalaseema Lunch): Famous for Ragi Mudda with spicy Natu Kodi Pulusu. Avg cost per person: ₹250.",
        "tags": [
          "gandikota",
          "gandikota",
          "andhra pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Gandikota",
        "content": "Reaching Gandikota, Andhra Pradesh: Nearest Airport: Kadapa Airport (CDP) - 77 km. Nearest Railway: Jammalamadugu (18 km). Road Connectivity: NH 67 via Kadapa.",
        "tags": [
          "gandikota",
          "gandikota",
          "andhra pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-tawang-attractions",
    "destination": "Tawang",
    "title": "Top Attractions, Sights & Overview of Tawang",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Tawang",
        "content": "Tawang is a premier destination in Arunachal Pradesh. Land of Dawn-lit Mountains - Monasteries, Glacial Lakes & Sela Pass. Description: High-altitude Himalayan wonderland at 3,048m housing India’s largest monastery, dramatic Sela Pass, and crystal alpine lakes. Best time to visit: March to June & September to November. Recommended trip duration: 4 days. Popular travel interests: Adventure, Culture, Nature, Temples. Official Tourism: https://arunachaltourism.com.",
        "tags": [
          "tawang",
          "tawang",
          "arunachal pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Tawang Monastery (History)",
        "content": "400-year-old largest Buddhist monastery in India housing ancient manuscripts and an 8-meter gilded Buddha. Location: Tawang. Estimated visit duration: 150 minutes. Estimated entry fee: ₹20. Tips: Spin prayer wheels clockwise ",
        "tags": [
          "tawang",
          "tawang",
          "arunachal pradesh",
          "history",
          "tawang monastery",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Sela Pass & Sela Lake (Nature)",
        "content": "Mountain pass at 4,170m elevation featuring snow-capped peaks and sacred alpine lake. Location: Tawang. Estimated visit duration: 60 minutes. Estimated entry fee: ₹0. Tips: Dress in thermal layers ",
        "tags": [
          "tawang",
          "tawang",
          "arunachal pradesh",
          "nature",
          "sela pass & sela lake",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-tawang-culture-logistics",
    "destination": "Tawang",
    "title": "Culture, Food & Transportation Guide for Tawang",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Tawang",
        "content": "Cultural highlights of Tawang, Arunachal Pradesh: Monpa tribal customs. Losar and Torgya Tibetan Buddhist festivals. Yak butter tea. Recognized destination category: Hill Stations & Mountains. Known aliases: Tawang Monastery, Monpa Land.",
        "tags": [
          "tawang",
          "tawang",
          "arunachal pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Tawang",
        "content": "Renowned food and dining specialties in Tawang: Dragon Monpa Kitchen (Tibetan & Monpa Dinner): Famous for Steaming Thukpa and Yak Cheese Momos. Avg cost per person: ₹220.",
        "tags": [
          "tawang",
          "tawang",
          "arunachal pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Tawang",
        "content": "Reaching Tawang, Arunachal Pradesh: Nearest Airport: Tezpur Airport (320 km) / Guwahati (440 km). Nearest Railway: Bhalukpong Station (280 km). Road Connectivity: NH 13 via Bomdila & Sela Pass.",
        "tags": [
          "tawang",
          "tawang",
          "arunachal pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-ziro-valley-attractions",
    "destination": "Ziro Valley",
    "title": "Top Attractions, Sights & Overview of Ziro Valley",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Ziro Valley",
        "content": "Ziro Valley is a premier destination in Arunachal Pradesh. UNESCO World Heritage Nominee - Apatani Pine Groves & Music Festival. Description: Charming plateau encircled by pine-clad hills, celebrated for the unique agrarian lifestyle of the Apatani tribe and the outdoor Ziro Festival of Music. Best time to visit: March to October. Recommended trip duration: 3 days. Popular travel interests: Culture, Nature, Photography. Official Tourism: https://arunachaltourism.com.",
        "tags": [
          "ziro valley",
          "ziro valley",
          "arunachal pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Hong & Hari Apatani Villages (History)",
        "content": "Authentic bamboo stilt villages known for ancient agricultural co-cultivation. Location: Ziro Valley. Estimated visit duration: 180 minutes. Estimated entry fee: ₹100. Tips: Hire a local guide to learn customs ",
        "tags": [
          "ziro valley",
          "ziro valley",
          "arunachal pradesh",
          "history",
          "hong & hari apatani villages",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-ziro-valley-culture-logistics",
    "destination": "Ziro Valley",
    "title": "Culture, Food & Transportation Guide for Ziro Valley",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Ziro Valley",
        "content": "Cultural highlights of Ziro Valley, Arunachal Pradesh: Apatani sustainable fish-paddy farming. Ziro Music Festival. Recognized destination category: Cultural & Local Experiences. Known aliases: Ziro, Apatani Valley.",
        "tags": [
          "ziro valley",
          "ziro valley",
          "arunachal pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Ziro Valley",
        "content": "Renowned food and dining specialties in Ziro Valley: Apatani Heritage Diner (Tribal Arunachal Lunch): Famous for Bamboo-smoked pork with organic red sticky rice. Avg cost per person: ₹250.",
        "tags": [
          "ziro valley",
          "ziro valley",
          "arunachal pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Ziro Valley",
        "content": "Reaching Ziro Valley, Arunachal Pradesh: Nearest Airport: Hollongi Airport, Itanagar (125 km). Nearest Railway: Naharlagun (100 km). Road Connectivity: Mountain road from Itanagar.",
        "tags": [
          "ziro valley",
          "ziro valley",
          "arunachal pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-kaziranga-attractions",
    "destination": "Kaziranga National Park",
    "title": "Top Attractions, Sights & Overview of Kaziranga National Park",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Kaziranga National Park",
        "content": "Kaziranga National Park is a premier destination in Assam. UNESCO World Heritage Sanctuary - Home of the Great One-Horned Rhinoceros. Description: World-renowned biodiversity hotspot harboring two-thirds of the world’s one-horned rhinoceroses and dense elephant grass marshes. Best time to visit: November to April. Recommended trip duration: 3 days. Popular travel interests: Wildlife, Nature, Photography, Adventure. Official Tourism: https://assamtourism.gov.in.",
        "tags": [
          "kaziranga national park",
          "kaziranga national park",
          "assam",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Kohora Range Wildlife Safari (Nature)",
        "content": "Guided safari through marshlands with close sightings of rhinos, wild buffalos, and swamp deer. Location: Kaziranga National Park. Estimated visit duration: 180 minutes. Estimated entry fee: ₹800. Tips: Book morning slots for highest activity ",
        "tags": [
          "kaziranga national park",
          "kaziranga national park",
          "assam",
          "nature",
          "kohora range wildlife safari",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-kaziranga-culture-logistics",
    "destination": "Kaziranga National Park",
    "title": "Culture, Food & Transportation Guide for Kaziranga National Park",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Kaziranga National Park",
        "content": "Cultural highlights of Kaziranga National Park, Assam: Assamese Bihu folk dance. Assam Orthodox tea estates. Recognized destination category: Wildlife & National Parks. Known aliases: Kaziranga, Rhino Sanctuary.",
        "tags": [
          "kaziranga national park",
          "kaziranga national park",
          "assam",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Kaziranga National Park",
        "content": "Renowned food and dining specialties in Kaziranga National Park: Maihang Assamese Diner (Assamese Lunch): Famous for Masor Tenga (Tangy fish curry) with Joha rice. Avg cost per person: ₹300.",
        "tags": [
          "kaziranga national park",
          "kaziranga national park",
          "assam",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Kaziranga National Park",
        "content": "Reaching Kaziranga National Park, Assam: Nearest Airport: Jorhat Airport (97 km). Nearest Railway: Furkating Junction (75 km). Road Connectivity: NH 715 arterial highway.",
        "tags": [
          "kaziranga national park",
          "kaziranga national park",
          "assam",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-guwahati-attractions",
    "destination": "Guwahati",
    "title": "Top Attractions, Sights & Overview of Guwahati",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Guwahati",
        "content": "Guwahati is a premier destination in Assam. Gateway to Northeast India - Sacred Brahmaputra River & Kamakhya Shakti Peeth. Description: Thriving riverside metropolis combining ancient Shakti shrines, river island temples, and modern Assamese gastronomy. Best time to visit: October to April. Recommended trip duration: 2 days. Popular travel interests: Temples, History, Food, Culture. Official Tourism: https://assamtourism.gov.in.",
        "tags": [
          "guwahati",
          "guwahati",
          "assam",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Kamakhya Temple (Temples)",
        "content": "One of the oldest of the 51 Shakti Peethas atop Nilachal Hill. Location: Guwahati. Estimated visit duration: 150 minutes. Estimated entry fee: ₹50. Tips: Visit early at 6 AM ",
        "tags": [
          "guwahati",
          "guwahati",
          "assam",
          "temples",
          "kamakhya temple",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-guwahati-culture-logistics",
    "destination": "Guwahati",
    "title": "Culture, Food & Transportation Guide for Guwahati",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Guwahati",
        "content": "Cultural highlights of Guwahati, Assam: Kamakhya Temple Ambubachi Mela. Brahmaputra sunset cruises. Muga silk. Recognized destination category: Major Cities & Towns. Known aliases: Gauhati, Pragjyotishpura.",
        "tags": [
          "guwahati",
          "guwahati",
          "assam",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Guwahati",
        "content": "Renowned food and dining specialties in Guwahati: Paradise Restaurant (Assamese Dinner): Famous for Traditional Assamese Thali with Khar and Pitika. Avg cost per person: ₹350.",
        "tags": [
          "guwahati",
          "guwahati",
          "assam",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Guwahati",
        "content": "Reaching Guwahati, Assam: Nearest Airport: Guwahati Airport (GAU) in city. Nearest Railway: Guwahati Junction (GHY). Road Connectivity: NH 27 and NH 17.",
        "tags": [
          "guwahati",
          "guwahati",
          "assam",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-majuli-attractions",
    "destination": "Majuli",
    "title": "Top Attractions, Sights & Overview of Majuli",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Majuli",
        "content": "Majuli is a premier destination in Assam. World’s Largest River Island - Neo-Vaishnavite Satras & Mask Making. Description: Enchanting river island on the Brahmaputra River, acting as the spiritual epicenter of Assamese culture, monastic Satras, and traditional pottery. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: Culture, Nature, Photography. Official Tourism: https://assamtourism.gov.in.",
        "tags": [
          "majuli",
          "majuli",
          "assam",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Chamaguri Satra Mask Makers (History)",
        "content": "Monastery where master artisans sculpt traditional masks from bamboo and clay. Location: Majuli. Estimated visit duration: 120 minutes. Estimated entry fee: ₹50. Tips: Watch a live mask crafting demonstration ",
        "tags": [
          "majuli",
          "majuli",
          "assam",
          "history",
          "chamaguri satra mask makers",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-majuli-culture-logistics",
    "destination": "Majuli",
    "title": "Culture, Food & Transportation Guide for Majuli",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Majuli",
        "content": "Cultural highlights of Majuli, Assam: Neo-Vaishnavite Satra dance & music. Handmade bamboo & clay theatrical masks. Recognized destination category: Cultural & Local Experiences. Known aliases: Majuli Island.",
        "tags": [
          "majuli",
          "majuli",
          "assam",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Majuli",
        "content": "Renowned food and dining specialties in Majuli: Ural Mishing Kitchen (Mishing Tribal Lunch): Famous for Fish baked inside fresh banana leaf with wild herbs. Avg cost per person: ₹250.",
        "tags": [
          "majuli",
          "majuli",
          "assam",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Majuli",
        "content": "Reaching Majuli, Assam: Nearest Airport: Jorhat Airport (20 km to ferry ghat). Nearest Railway: Jorhat Station. Road Connectivity: Ferry service from Nimati Ghat.",
        "tags": [
          "majuli",
          "majuli",
          "assam",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-bodh-gaya-attractions",
    "destination": "Bodh Gaya",
    "title": "Top Attractions, Sights & Overview of Bodh Gaya",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Bodh Gaya",
        "content": "Bodh Gaya is a premier destination in Bihar. The Cradle of Buddhism - The Sacred Bodhi Tree & UNESCO Mahabodhi Temple. Description: Sacred pilgrimage site where Siddhartha Gautama attained supreme enlightenment under the sacred Bodhi Tree. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: Temples, History, Culture. Official Tourism: https://tourism.bihar.gov.in.",
        "tags": [
          "bodh gaya",
          "bodh gaya",
          "bihar",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Mahabodhi Temple & Bodhi Tree (Temples)",
        "content": "UNESCO World Heritage 50m stone temple marking the sacred Bodhi Tree. Location: Bodh Gaya. Estimated visit duration: 180 minutes. Estimated entry fee: ₹0. Tips: Electronic items stored at counter ",
        "tags": [
          "bodh gaya",
          "bodh gaya",
          "bihar",
          "temples",
          "mahabodhi temple & bodhi tree",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-bodh-gaya-culture-logistics",
    "destination": "Bodh Gaya",
    "title": "Culture, Food & Transportation Guide for Bodh Gaya",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Bodh Gaya",
        "content": "Cultural highlights of Bodh Gaya, Bihar: Monastic meditation walks. International Buddhist monasteries. Buddha Jayanti. Recognized destination category: Religious & Pilgrimage. Known aliases: Bodhgaya, Mahabodhi, Gaya.",
        "tags": [
          "bodh gaya",
          "bodh gaya",
          "bihar",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Bodh Gaya",
        "content": "Renowned food and dining specialties in Bodh Gaya: Fujiya Green Diner (Pan-Asian & Bihari Lunch): Famous for Bihari Litti Chokha & Vegetable Wontons. Avg cost per person: ₹200.",
        "tags": [
          "bodh gaya",
          "bodh gaya",
          "bihar",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Bodh Gaya",
        "content": "Reaching Bodh Gaya, Bihar: Nearest Airport: Gaya Airport (12 km) / Patna (110 km). Nearest Railway: Gaya Junction (16 km). Road Connectivity: Grand Trunk Road NH 19.",
        "tags": [
          "bodh gaya",
          "bodh gaya",
          "bihar",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-nalanda-attractions",
    "destination": "Nalanda & Rajgir",
    "title": "Top Attractions, Sights & Overview of Nalanda & Rajgir",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Nalanda & Rajgir",
        "content": "Nalanda & Rajgir is a premier destination in Bihar. Ancient Seat of Global Learning - Monastic University Ruins & Vulture Peak. Description: Archaeological ruins of Nalanda Mahavihara, the world’s first residential university, paired with the scenic hills and hot springs of Rajgir. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Culture, Sightseeing. Official Tourism: https://tourism.bihar.gov.in.",
        "tags": [
          "nalanda & rajgir",
          "nalanda & rajgir",
          "bihar",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Ruins of Nalanda University (History)",
        "content": "UNESCO World Heritage monastic brick ruins where 10,000 scholars once studied. Location: Nalanda & Rajgir. Estimated visit duration: 150 minutes. Estimated entry fee: ₹40. Tips: Visit the adjacent museum ",
        "tags": [
          "nalanda & rajgir",
          "nalanda & rajgir",
          "bihar",
          "history",
          "ruins of nalanda university",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-nalanda-culture-logistics",
    "destination": "Nalanda & Rajgir",
    "title": "Culture, Food & Transportation Guide for Nalanda & Rajgir",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Nalanda & Rajgir",
        "content": "Cultural highlights of Nalanda & Rajgir, Bihar: Ancient Buddhist & Jain heritage. Rajgir peace pagoda ropeway. Recognized destination category: Historical Monuments & Heritage. Known aliases: Nalanda University, Rajgir.",
        "tags": [
          "nalanda & rajgir",
          "nalanda & rajgir",
          "bihar",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Nalanda & Rajgir",
        "content": "Renowned food and dining specialties in Nalanda & Rajgir: Rajgir Heritage Bhojanalaya (Bihari Lunch): Famous for Charcoal roasted Litti Chokha with sattu sharbat. Avg cost per person: ₹150.",
        "tags": [
          "nalanda & rajgir",
          "nalanda & rajgir",
          "bihar",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Nalanda & Rajgir",
        "content": "Reaching Nalanda & Rajgir, Bihar: Nearest Airport: Patna Airport (85 km). Nearest Railway: Rajgir Station. Road Connectivity: NH 20 and NH 120.",
        "tags": [
          "nalanda & rajgir",
          "nalanda & rajgir",
          "bihar",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-patna-attractions",
    "destination": "Patna",
    "title": "Top Attractions, Sights & Overview of Patna",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Patna",
        "content": "Patna is a premier destination in Bihar. Ancient Pataliputra - Ganga Riverfront, Golghar & Takht Sri Patna Sahib. Description: Capital of Bihar along the Ganges, steeped in three millennia of history from the Mauryan Empire to Sikh spiritual heritage. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Culture, Temples, Food. Official Tourism: https://tourism.bihar.gov.in.",
        "tags": [
          "patna",
          "patna",
          "bihar",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Golghar Granary & Ganga View (History)",
        "content": "Colossal beehive-shaped British granary built in 1786 with spiral stairs. Location: Patna. Estimated visit duration: 60 minutes. Estimated entry fee: ₹20. Tips: Climb the spiral stairs for skyline views ",
        "tags": [
          "patna",
          "patna",
          "bihar",
          "history",
          "golghar granary & ganga view",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-patna-culture-logistics",
    "destination": "Patna",
    "title": "Culture, Food & Transportation Guide for Patna",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Patna",
        "content": "Cultural highlights of Patna, Bihar: Takht Sri Harmandir Sahib. Bihari Khaja sweet. Madhubani art. Recognized destination category: Major Cities & Towns. Known aliases: Pataliputra, Patna Sahib.",
        "tags": [
          "patna",
          "patna",
          "bihar",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Patna",
        "content": "Renowned food and dining specialties in Patna: Bhojpur Litti Hut (Bihari Lunch): Famous for Authentic Ghee Litti Chokha & Mutton curry. Avg cost per person: ₹200.",
        "tags": [
          "patna",
          "patna",
          "bihar",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Patna",
        "content": "Reaching Patna, Bihar: Nearest Airport: Patna Airport (PAT). Nearest Railway: Patna Junction (PNBE). Road Connectivity: NH 31 and NH 19.",
        "tags": [
          "patna",
          "patna",
          "bihar",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-chitrakote-attractions",
    "destination": "Chitrakote & Bastar",
    "title": "Top Attractions, Sights & Overview of Chitrakote & Bastar",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Chitrakote & Bastar",
        "content": "Chitrakote & Bastar is a premier destination in Chhattisgarh. The Niagara of India - Horseshoe Cataract & Bell Metal Dhokra Craft. Description: Spectacular 300-meter wide horseshoe waterfall on the Indravati River surrounded by ancient Sal forests and indigenous Bastar tribal art. Best time to visit: July to February. Recommended trip duration: 3 days. Popular travel interests: Waterfalls, Nature, Culture. Official Tourism: https://chhattisgarhtourism.cg.gov.in.",
        "tags": [
          "chitrakote & bastar",
          "chitrakote & bastar",
          "chhattisgarh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Chitrakote Horseshoe Falls (Nature)",
        "content": "Widest waterfall in India dropping 95 feet into a churning mist basin. Location: Chitrakote & Bastar. Estimated visit duration: 150 minutes. Estimated entry fee: ₹30. Tips: Take the government paddle boat ",
        "tags": [
          "chitrakote & bastar",
          "chitrakote & bastar",
          "chhattisgarh",
          "nature",
          "chitrakote horseshoe falls",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-chitrakote-culture-logistics",
    "destination": "Chitrakote & Bastar",
    "title": "Culture, Food & Transportation Guide for Chitrakote & Bastar",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Chitrakote & Bastar",
        "content": "Cultural highlights of Chitrakote & Bastar, Chhattisgarh: Dhokra lost-wax metal craft. Bastar Dussehra 75-day festival. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Chitrakote Falls, Bastar, Jagdalpur.",
        "tags": [
          "chitrakote & bastar",
          "chitrakote & bastar",
          "chhattisgarh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Chitrakote & Bastar",
        "content": "Renowned food and dining specialties in Chitrakote & Bastar: Bastar Tribal Kitchen (Tribal Lunch): Famous for Rice flour Chousela and Dubki Kadhi. Avg cost per person: ₹180.",
        "tags": [
          "chitrakote & bastar",
          "chitrakote & bastar",
          "chhattisgarh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Chitrakote & Bastar",
        "content": "Reaching Chitrakote & Bastar, Chhattisgarh: Nearest Airport: Jagdalpur Airport (40 km). Nearest Railway: Jagdalpur Station (38 km). Road Connectivity: NH 30 via Raipur.",
        "tags": [
          "chitrakote & bastar",
          "chitrakote & bastar",
          "chhattisgarh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-raipur-attractions",
    "destination": "Raipur",
    "title": "Top Attractions, Sights & Overview of Raipur",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Raipur",
        "content": "Raipur is a premier destination in Chhattisgarh. Rice Bowl of India - Modern Capital & Ancient Sirpur Heritage. Description: Dynamic capital city blending modern urban waterfronts with gateway access to the 5th-century brick temples of Sirpur. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Culture, Food. Official Tourism: https://chhattisgarhtourism.cg.gov.in.",
        "tags": [
          "raipur",
          "raipur",
          "chhattisgarh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Sirpur Archaeological Site (History)",
        "content": "Ancient capital of South Kosala featuring 7th-century brick Lakshman Temple. Location: Raipur. Estimated visit duration: 180 minutes. Estimated entry fee: ₹25. Tips: Visit early to explore brick temples and viharas ",
        "tags": [
          "raipur",
          "raipur",
          "chhattisgarh",
          "history",
          "sirpur archaeological site",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-raipur-culture-logistics",
    "destination": "Raipur",
    "title": "Culture, Food & Transportation Guide for Raipur",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Raipur",
        "content": "Cultural highlights of Raipur, Chhattisgarh: Bell metal craft emporiums. Chhattisgarhi Bafauri snack. Recognized destination category: Major Cities & Towns. Known aliases: Naya Raipur, Atal Nagar.",
        "tags": [
          "raipur",
          "raipur",
          "chhattisgarh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Raipur",
        "content": "Renowned food and dining specialties in Raipur: Gadh Kalava Thali (Chhattisgarhi Lunch): Famous for Fara steamed rice dumplings & Chana Bafauri. Avg cost per person: ₹160.",
        "tags": [
          "raipur",
          "raipur",
          "chhattisgarh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Raipur",
        "content": "Reaching Raipur, Chhattisgarh: Nearest Airport: Swami Vivekananda Airport (RPR). Nearest Railway: Raipur Junction (R). Road Connectivity: NH 53 and NH 30.",
        "tags": [
          "raipur",
          "raipur",
          "chhattisgarh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-goa-attractions",
    "destination": "Goa",
    "title": "Top Attractions, Sights & Overview of Goa",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Goa",
        "content": "Goa is a premier destination in Goa. Sun, Sand & Portuguese Charm - Golden Beaches, Historic Forts & Night Markets. Description: World-famous beach haven boasting Portuguese heritage in Panaji Fontainhas, vibrant shorelines at Calangute and Anjuna, and clifftop Chapora Fort. Best time to visit: October to April. Recommended trip duration: 4 days. Popular travel interests: Beaches, Food, History, Adventure. Official Tourism: https://goatourism.gov.in.",
        "tags": [
          "goa",
          "goa",
          "goa",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Fort Aguada & Lighthouse (History)",
        "content": "17th-century Portuguese fortress overlooking Sinquerim Beach with a four-storey lighthouse. Location: Goa. Estimated visit duration: 90 minutes. Estimated entry fee: ₹50. Tips: Arrive early for clear sea views ",
        "tags": [
          "goa",
          "goa",
          "goa",
          "history",
          "fort aguada & lighthouse",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Fontainhas Latin Quarter (History)",
        "content": "Heritage precinct in Panaji with brightly painted Portuguese colonial villas and cafes. Location: Goa. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Great walking photography tour ",
        "tags": [
          "goa",
          "goa",
          "goa",
          "history",
          "fontainhas latin quarter",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-goa-culture-logistics",
    "destination": "Goa",
    "title": "Culture, Food & Transportation Guide for Goa",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Goa",
        "content": "Cultural highlights of Goa, Goa: Goan Fish Curry & Bebinca. Portuguese Latin Quarter architecture. Saturday Night Flea Markets. Recognized destination category: Beaches & Coastal. Known aliases: North Goa, Panaji, Calangute, Anjuna, Baga, Panjim.",
        "tags": [
          "goa",
          "goa",
          "goa",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Goa",
        "content": "Renowned food and dining specialties in Goa: Vinayak Family Restaurant (Goan Coastal Lunch): Famous for Authentic Goan Fish Curry Thali with Kingfish Rava fry. Avg cost per person: ₹300.",
        "tags": [
          "goa",
          "goa",
          "goa",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Goa",
        "content": "Reaching Goa, Goa: Nearest Airport: Manohar International Airport (MOPA) / Dabolim (GOI). Nearest Railway: Thivim (THVM) & Karmali (KRMI). Road Connectivity: NH 66 coastal highway.",
        "tags": [
          "goa",
          "goa",
          "goa",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-south-goa-attractions",
    "destination": "South Goa",
    "title": "Top Attractions, Sights & Overview of South Goa",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of South Goa",
        "content": "South Goa is a premier destination in Goa. Serene Coastal Paradise - White Sand Shores, Cabo de Rama & Old Goa Churches. Description: Tranquil coastal haven known for pristine crescent beaches like Palolem, the UNESCO World Heritage Basilica of Bom Jesus, and spice plantations. Best time to visit: October to April. Recommended trip duration: 3 days. Popular travel interests: Beaches, History, Nature, Food. Official Tourism: https://goatourism.gov.in.",
        "tags": [
          "south goa",
          "south goa",
          "goa",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Basilica of Bom Jesus (History)",
        "content": "UNESCO World Heritage 16th-century Baroque church holding sacred mortal remains of St. Francis Xavier. Location: South Goa. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Dress modestly covering knees and shoulders ",
        "tags": [
          "south goa",
          "south goa",
          "goa",
          "history",
          "basilica of bom jesus",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Palolem Crescent Beach (Beaches)",
        "content": "Crescent-shaped white sand beach backed by leaning coconut palms with gentle waves. Location: South Goa. Estimated visit duration: 150 minutes. Estimated entry fee: ₹0. Tips: Take a dolphin watching boat ride ",
        "tags": [
          "south goa",
          "south goa",
          "goa",
          "beaches",
          "palolem crescent beach",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-south-goa-culture-logistics",
    "destination": "South Goa",
    "title": "Culture, Food & Transportation Guide for South Goa",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of South Goa",
        "content": "Cultural highlights of South Goa, Goa: UNESCO Baroque churches of Old Goa. Organic Sahakari spice plantation walks. Recognized destination category: Beaches & Coastal. Known aliases: Palolem, Colva, Old Goa, Margao.",
        "tags": [
          "south goa",
          "south goa",
          "goa",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in South Goa",
        "content": "Renowned food and dining specialties in South Goa: Fisherman’s Wharf (Goan Coastal & Seafood Dinner): Famous for Prawn Balchao, Crab Xacuti and Bebinca. Avg cost per person: ₹600.",
        "tags": [
          "south goa",
          "south goa",
          "goa",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to South Goa",
        "content": "Reaching South Goa, Goa: Nearest Airport: Dabolim Airport (GOI) in South Goa. Nearest Railway: Madgaon Junction (MAO). Road Connectivity: NH 66.",
        "tags": [
          "south goa",
          "south goa",
          "goa",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-dudhsagar-falls-attractions",
    "destination": "Dudhsagar Falls",
    "title": "Top Attractions, Sights & Overview of Dudhsagar Falls",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Dudhsagar Falls",
        "content": "Dudhsagar Falls is a premier destination in Goa. Sea of Milk - Majestic 310m Tiered Waterfall in Bhagwan Mahaveer Sanctuary. Description: One of India’s tallest four-tiered waterfalls tumbling 310 meters through dense Western Ghats rainforest on the Mandovi River. Best time to visit: June to February. Recommended trip duration: 2 days. Popular travel interests: Waterfalls, Adventure, Nature, Photography. Official Tourism: https://goatourism.gov.in.",
        "tags": [
          "dudhsagar falls",
          "dudhsagar falls",
          "goa",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Dudhsagar Plunge Pool & Forest Trail (Nature)",
        "content": "Majestic milky torrent pouring down steep granite cliffs into a refreshing natural freshwater pool. Location: Dudhsagar Falls. Estimated visit duration: 180 minutes. Estimated entry fee: ₹500. Tips: Life jacket mandatory for swimming in the natural pool ",
        "tags": [
          "dudhsagar falls",
          "dudhsagar falls",
          "goa",
          "nature",
          "dudhsagar plunge pool & forest trail",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-dudhsagar-falls-culture-logistics",
    "destination": "Dudhsagar Falls",
    "title": "Culture, Food & Transportation Guide for Dudhsagar Falls",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Dudhsagar Falls",
        "content": "Cultural highlights of Dudhsagar Falls, Goa: Bhagwan Mahaveer Wildlife Sanctuary biodiversity. Trek along railway viaduct arches. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Dudhsagar, Sea of Milk.",
        "tags": [
          "dudhsagar falls",
          "dudhsagar falls",
          "goa",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Dudhsagar Falls",
        "content": "Renowned food and dining specialties in Dudhsagar Falls: Kulem Jungle Safari Canteen (Goan Lunch): Famous for Simple coastal vegetable thali and fish curry. Avg cost per person: ₹180.",
        "tags": [
          "dudhsagar falls",
          "dudhsagar falls",
          "goa",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Dudhsagar Falls",
        "content": "Reaching Dudhsagar Falls, Goa: Nearest Airport: Dabolim Airport (70 km). Nearest Railway: Kulem Railway Station (QLM) - 12 km. Road Connectivity: Forest department 4x4 jeeps from Kulem.",
        "tags": [
          "dudhsagar falls",
          "dudhsagar falls",
          "goa",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-ahmedabad-attractions",
    "destination": "Ahmedabad",
    "title": "Top Attractions, Sights & Overview of Ahmedabad",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Ahmedabad",
        "content": "Ahmedabad is a premier destination in Gujarat. India’s First UNESCO World Heritage City - Sabarmati Ashram & Pol Architecture. Description: Historic and commercial powerhouse celebrated for Mahatma Gandhi’s Sabarmati Ashram, intricately carved stepwells, and midnight street food. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: History, Culture, Food, Shopping. Official Tourism: https://www.gujarattourism.com.",
        "tags": [
          "ahmedabad",
          "ahmedabad",
          "gujarat",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Sabarmati Ashram (Gandhi Smarak Sangrahalaya) (History)",
        "content": "Headquarters of Mahatma Gandhi from 1917 to 1930 and launching point of the historic Dandi Salt March. Location: Ahmedabad. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Walk through Hriday Kunj and view handwritten letters ",
        "tags": [
          "ahmedabad",
          "ahmedabad",
          "gujarat",
          "history",
          "sabarmati ashram (gandhi smarak sangrahalaya)",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Adalaj Stepwell (Rudabai Stepwell) (History)",
        "content": "Stunning 5-storey deep subterranean sandstone stepwell carved with Solanki architectural motifs in 1498. Location: Ahmedabad. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Marvel at the octagonal shafts and cooling breeze ",
        "tags": [
          "ahmedabad",
          "ahmedabad",
          "gujarat",
          "history",
          "adalaj stepwell (rudabai stepwell)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-ahmedabad-culture-logistics",
    "destination": "Ahmedabad",
    "title": "Culture, Food & Transportation Guide for Ahmedabad",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Ahmedabad",
        "content": "Cultural highlights of Ahmedabad, Gujarat: Sabarmati Riverfront promenade. Manek Chowk midnight food market. Adalaj Stepwell. Recognized destination category: Major Cities & Towns. Known aliases: Amdavad, Karnavati.",
        "tags": [
          "ahmedabad",
          "ahmedabad",
          "gujarat",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Ahmedabad",
        "content": "Renowned food and dining specialties in Ahmedabad: Agashiye Heritage Rooftop (Gujarati Fine Dining Dinner): Famous for Grand Gujarati Thali with Dhokla, Kadhi, Ringan No Oro & Jalebi. Avg cost per person: ₹700.",
        "tags": [
          "ahmedabad",
          "ahmedabad",
          "gujarat",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Ahmedabad",
        "content": "Reaching Ahmedabad, Gujarat: Nearest Airport: Sardar Vallabhbhai Patel International Airport (AMD) in city. Nearest Railway: Ahmedabad Junction (ADI). Road Connectivity: NE 1 expressway and NH 48.",
        "tags": [
          "ahmedabad",
          "ahmedabad",
          "gujarat",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-rann-of-kutch-attractions",
    "destination": "Rann of Kutch",
    "title": "Top Attractions, Sights & Overview of Rann of Kutch",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Rann of Kutch",
        "content": "Rann of Kutch is a premier destination in Gujarat. The Great White Salt Desert - Full Moon Spectacle, Rann Utsav & Bhuj Textiles. Description: Vast expanse of blinding white salt desert stretching to the horizon, coming alive under moonlight and during the winter Rann Utsav. Best time to visit: November to February. Recommended trip duration: 3 days. Popular travel interests: Nature, Culture, Photography, Shopping. Official Tourism: https://www.gujarattourism.com.",
        "tags": [
          "rann of kutch",
          "rann of kutch",
          "gujarat",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "White Rann Salt Desert Sunset Viewpoint (Nature)",
        "content": "Witness the boundless white salt crust turn iridescent pink and violet as the sun sinks beneath the horizon. Location: Rann of Kutch. Estimated visit duration: 180 minutes. Estimated entry fee: ₹100. Tips: Visit during full moon nights for the surreal glowing salt experience ",
        "tags": [
          "rann of kutch",
          "rann of kutch",
          "gujarat",
          "nature",
          "white rann salt desert sunset viewpoint",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Kala Dungar (Black Hill) (Sightseeing)",
        "content": "Highest point in Kutch at 458 meters providing panoramic views of the entire White Rann and the historic Dattatreya temple. Location: Rann of Kutch. Estimated visit duration: 120 minutes. Estimated entry fee: ₹20. Tips: Jackals are fed temple sweet rice every day at noon ",
        "tags": [
          "rann of kutch",
          "rann of kutch",
          "gujarat",
          "sightseeing",
          "kala dungar (black hill)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-rann-of-kutch-culture-logistics",
    "destination": "Rann of Kutch",
    "title": "Culture, Food & Transportation Guide for Rann of Kutch",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Rann of Kutch",
        "content": "Cultural highlights of Rann of Kutch, Gujarat: Rann Utsav cultural dance nights. Rogan hand-painting and Rogan art. Kutchi mirror embroidery. Recognized destination category: Offbeat & Scenic Places. Known aliases: Great Rann, Kutch, Dhordo, White Rann.",
        "tags": [
          "rann of kutch",
          "rann of kutch",
          "gujarat",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Rann of Kutch",
        "content": "Renowned food and dining specialties in Rann of Kutch: Toran Kutchi Bhojanalaya (Kutchi Traditional Lunch): Famous for Bajra No Rotlo with pure white butter, Gor (Jaggery) and Sev Tameta Nu Shaak. Avg cost per person: ₹250.",
        "tags": [
          "rann of kutch",
          "rann of kutch",
          "gujarat",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Rann of Kutch",
        "content": "Reaching Rann of Kutch, Gujarat: Nearest Airport: Bhuj Airport (BHU) - 80 km. Nearest Railway: Bhuj Railway Station (80 km). Road Connectivity: Well-paved highway from Bhuj to Dhordo Tent City.",
        "tags": [
          "rann of kutch",
          "rann of kutch",
          "gujarat",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-gir-national-park-attractions",
    "destination": "Gir National Park",
    "title": "Top Attractions, Sights & Overview of Gir National Park",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Gir National Park",
        "content": "Gir National Park is a premier destination in Gujarat. Last Refuge of the Asiatic Lion - Rugged Teak Forests & Wild Safaris. Description: The sole remaining global sanctuary of the pure Asiatic lion in the wild, set in a dry deciduous teak and scrub forest ecosystem. Best time to visit: December to March. Recommended trip duration: 2 days. Popular travel interests: Wildlife, Nature, Photography. Official Tourism: https://www.gujarattourism.com.",
        "tags": [
          "gir national park",
          "gir national park",
          "gujarat",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Sasan Gir Jungle Safari Trail (Nature)",
        "content": "Open gypsy safari tracking prides of Asiatic lions, leopards, striped hyenas, and spotted chital deer. Location: Gir National Park. Estimated visit duration: 180 minutes. Estimated entry fee: ₹900. Tips: Safaris must be booked on the official forest department portal well in advance ",
        "tags": [
          "gir national park",
          "gir national park",
          "gujarat",
          "nature",
          "sasan gir jungle safari trail",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-gir-national-park-culture-logistics",
    "destination": "Gir National Park",
    "title": "Culture, Food & Transportation Guide for Gir National Park",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Gir National Park",
        "content": "Cultural highlights of Gir National Park, Gujarat: Maldhari pastoral tribal culture. Siddi tribal African-origin folk dance. Kesar mango orchards. Recognized destination category: Wildlife & National Parks. Known aliases: Sasan Gir, Gir Forest, Lion Sanctuary.",
        "tags": [
          "gir national park",
          "gir national park",
          "gujarat",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Gir National Park",
        "content": "Renowned food and dining specialties in Gir National Park: Gir Kathiyawadi Dhaba (Kathiyawadi Lunch): Famous for Spicy Lasaniya Bataka with fresh buttermilk and Bajra Roti. Avg cost per person: ₹200.",
        "tags": [
          "gir national park",
          "gir national park",
          "gujarat",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Gir National Park",
        "content": "Reaching Gir National Park, Gujarat: Nearest Airport: Keshod Airport (60 km) / Rajkot Airport (160 km). Nearest Railway: Junagadh (60 km) & Veraval (45 km). Road Connectivity: State highways connecting Junagadh and Somnath.",
        "tags": [
          "gir national park",
          "gir national park",
          "gujarat",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-somnath-dwarka-attractions",
    "destination": "Somnath & Dwarka",
    "title": "Top Attractions, Sights & Overview of Somnath & Dwarka",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Somnath & Dwarka",
        "content": "Somnath & Dwarka is a premier destination in Gujarat. First Jyotirlinga & Kingdom of Lord Krishna - Sacred Coastal Pilgrimage. Description: Ancient pilgrim trail linking Somnath on the roaring Arabian Sea shore with Dwarkadhish Temple, one of the four cardinal Char Dham shrines. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: Temples, History, Culture, Beaches. Official Tourism: https://www.gujarattourism.com.",
        "tags": [
          "somnath & dwarka",
          "somnath & dwarka",
          "gujarat",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Somnath Jyotirlinga Temple (Temples)",
        "content": "Magnificent Chalukya-style honey-colored sandstone temple directly kissing the waves of the Arabian Sea. Location: Somnath & Dwarka. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Attend the evening sound and light show narrated by Amitabh Bachchan ",
        "tags": [
          "somnath & dwarka",
          "somnath & dwarka",
          "gujarat",
          "temples",
          "somnath jyotirlinga temple",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-somnath-dwarka-culture-logistics",
    "destination": "Somnath & Dwarka",
    "title": "Culture, Food & Transportation Guide for Somnath & Dwarka",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Somnath & Dwarka",
        "content": "Cultural highlights of Somnath & Dwarka, Gujarat: Evening light and sound show at Somnath Sea Temple. Dwarka 52-yard sacred flag changing ceremony (Dhwajarohan). Recognized destination category: Religious & Pilgrimage. Known aliases: Somnath, Dwarka, Dwarkadhish, Prabhas Patan.",
        "tags": [
          "somnath & dwarka",
          "somnath & dwarka",
          "gujarat",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Somnath & Dwarka",
        "content": "Renowned food and dining specialties in Somnath & Dwarka: Sagar Darshan Dining Hall (Gujarati Jain & Vaishnav Lunch): Famous for Pure vegetarian Gujarati thali with sweet dal and Khichdi Kadhi. Avg cost per person: ₹150.",
        "tags": [
          "somnath & dwarka",
          "somnath & dwarka",
          "gujarat",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Somnath & Dwarka",
        "content": "Reaching Somnath & Dwarka, Gujarat: Nearest Airport: Porbandar Airport (120 km) / Rajkot (190 km). Nearest Railway: Somnath Station (SMNH) & Dwarka (DWK). Road Connectivity: Coastal NH 51.",
        "tags": [
          "somnath & dwarka",
          "somnath & dwarka",
          "gujarat",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-statue-of-unity-attractions",
    "destination": "Statue of Unity",
    "title": "Top Attractions, Sights & Overview of Statue of Unity",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Statue of Unity",
        "content": "Statue of Unity is a premier destination in Gujarat. World’s Tallest Monument - 182-Meter Iron Man of India on Narmada River. Description: The tallest statue in the world standing at 182 meters, honoring Sardar Vallabhbhai Patel with high-speed viewing galleries overlooking the Sardar Sarovar Dam. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Sightseeing, Photography. Official Tourism: https://statueofunity.in.",
        "tags": [
          "statue of unity",
          "statue of unity",
          "gujarat",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Viewing Gallery at 153 Meters (Sightseeing)",
        "content": "High-speed elevator ride to the chest of the statue providing panoramic vistas of the Vindhyachal and Satpura ranges and dam. Location: Statue of Unity. Estimated visit duration: 120 minutes. Estimated entry fee: ₹380. Tips: Book express entry tickets online to bypass elevator queues ",
        "tags": [
          "statue of unity",
          "statue of unity",
          "gujarat",
          "sightseeing",
          "viewing gallery at 153 meters",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-statue-of-unity-culture-logistics",
    "destination": "Statue of Unity",
    "title": "Culture, Food & Transportation Guide for Statue of Unity",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Statue of Unity",
        "content": "Cultural highlights of Statue of Unity, Gujarat: Narmada Maha Aarti at Gora Ghat. Valley of Flowers and Glow Garden laser show. Recognized destination category: Historical Monuments & Heritage. Known aliases: Kevadia, Ekta Nagar, Sardar Patel Statue.",
        "tags": [
          "statue of unity",
          "statue of unity",
          "gujarat",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Statue of Unity",
        "content": "Renowned food and dining specialties in Statue of Unity: Ekta Food Court (Multi-Cuisine Indian Lunch): Famous for Authentic Gujarati Thali, Punjabi delicacies and street snacks. Avg cost per person: ₹250.",
        "tags": [
          "statue of unity",
          "statue of unity",
          "gujarat",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Statue of Unity",
        "content": "Reaching Statue of Unity, Gujarat: Nearest Airport: Vadodara Airport (BDQ) - 90 km. Nearest Railway: Ekta Nagar Railway Station (EKNR) - 5 km. Road Connectivity: 4-lane highway from Vadodara.",
        "tags": [
          "statue of unity",
          "statue of unity",
          "gujarat",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-kurukshetra-attractions",
    "destination": "Kurukshetra",
    "title": "Top Attractions, Sights & Overview of Kurukshetra",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Kurukshetra",
        "content": "Kurukshetra is a premier destination in Haryana. Land of the Bhagavad Gita - Holy Brahma Sarovar & Mahabharata Heritage. Description: Ancient battlefield where the epic Mahabharata was fought and Lord Krishna delivered the timeless message of the Bhagavad Gita to Arjuna. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Temples, Culture. Official Tourism: https://haryanatourism.gov.in.",
        "tags": [
          "kurukshetra",
          "kurukshetra",
          "haryana",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Brahma Sarovar & Jyotisar (Temples)",
        "content": "Massive sacred water reservoir and the holy Banyan tree at Jyotisar where the Gita was spoken. Location: Kurukshetra. Estimated visit duration: 150 minutes. Estimated entry fee: ₹0. Tips: Attend the tranquil evening aarti ceremony at the ghats ",
        "tags": [
          "kurukshetra",
          "kurukshetra",
          "haryana",
          "temples",
          "brahma sarovar & jyotisar",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-kurukshetra-culture-logistics",
    "destination": "Kurukshetra",
    "title": "Culture, Food & Transportation Guide for Kurukshetra",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Kurukshetra",
        "content": "Cultural highlights of Kurukshetra, Haryana: Gita Mahotsav global festival. Holy dip in Brahma Sarovar during solar eclipse. Panorama of Mahabharata war. Recognized destination category: Religious & Pilgrimage. Known aliases: Dharmakshetra, Jyotisar, Thanesar.",
        "tags": [
          "kurukshetra",
          "kurukshetra",
          "haryana",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Kurukshetra",
        "content": "Renowned food and dining specialties in Kurukshetra: Neelkanthi Krishna Bhojanalaya (Haryanvi & Punjabi Lunch): Famous for Haryanvi Bajra Khichdi with homemade ghee and lassi. Avg cost per person: ₹150.",
        "tags": [
          "kurukshetra",
          "kurukshetra",
          "haryana",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Kurukshetra",
        "content": "Reaching Kurukshetra, Haryana: Nearest Airport: Chandigarh Airport (90 km) / Delhi (160 km). Nearest Railway: Kurukshetra Junction (KKDE). Road Connectivity: Directly on Grand Trunk Road NH 44.",
        "tags": [
          "kurukshetra",
          "kurukshetra",
          "haryana",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-sultanpur-national-park-attractions",
    "destination": "Sultanpur National Park & Gurgaon",
    "title": "Top Attractions, Sights & Overview of Sultanpur National Park & Gurgaon",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Sultanpur National Park & Gurgaon",
        "content": "Sultanpur National Park & Gurgaon is a premier destination in Haryana. Birdwatcher’s Haven & Millennial Cyber City - Migratory Wetlands. Description: Renowned wetland sanctuary hosting over 250 species of winter migratory birds from Siberia and Central Asia, alongside the gleaming skyscrapers of Gurugram. Best time to visit: November to February. Recommended trip duration: 2 days. Popular travel interests: Wildlife, Nature, Photography. Official Tourism: https://haryanatourism.gov.in.",
        "tags": [
          "sultanpur national park & gurgaon",
          "sultanpur national park & gurgaon",
          "haryana",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Sultanpur Wetland Bird Watching Trail (Nature)",
        "content": "Serene walking track punctuated by 4 observation watchtowers providing prime viewing of aquatic bird colonies. Location: Sultanpur National Park & Gurgaon. Estimated visit duration: 180 minutes. Estimated entry fee: ₹10. Tips: Bring binoculars or a telephoto lens for viewing ",
        "tags": [
          "sultanpur national park & gurgaon",
          "sultanpur national park & gurgaon",
          "haryana",
          "nature",
          "sultanpur wetland bird watching trail",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-sultanpur-national-park-culture-logistics",
    "destination": "Sultanpur National Park & Gurgaon",
    "title": "Culture, Food & Transportation Guide for Sultanpur National Park & Gurgaon",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Sultanpur National Park & Gurgaon",
        "content": "Cultural highlights of Sultanpur National Park & Gurgaon, Haryana: Winter migratory flocks of Siberian cranes, pelicans, and flamingos. Heritage Transport Museum in Taoru. Recognized destination category: Wildlife & National Parks. Known aliases: Sultanpur Bird Sanctuary, Gurgaon, Gurugram.",
        "tags": [
          "sultanpur national park & gurgaon",
          "sultanpur national park & gurgaon",
          "haryana",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Sultanpur National Park & Gurgaon",
        "content": "Renowned food and dining specialties in Sultanpur National Park & Gurgaon: Haveli Heritage Dhaba (Haryanvi & Punjabi Lunch): Famous for Makki di Roti with Sarson da Saag and white butter. Avg cost per person: ₹300.",
        "tags": [
          "sultanpur national park & gurgaon",
          "sultanpur national park & gurgaon",
          "haryana",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Sultanpur National Park & Gurgaon",
        "content": "Reaching Sultanpur National Park & Gurgaon, Haryana: Nearest Airport: Indira Gandhi International Airport, Delhi (35 km). Nearest Railway: Gurgaon Railway Station (15 km). Road Connectivity: Gurgaon-Farrukhnagar Road.",
        "tags": [
          "sultanpur national park & gurgaon",
          "sultanpur national park & gurgaon",
          "haryana",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-manali-attractions",
    "destination": "Manali",
    "title": "Top Attractions, Sights & Overview of Manali",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Manali",
        "content": "Manali is a premier destination in Himachal Pradesh. Valley of the Gods - Snow Peaks, Solang Adventures & Rohtang Pass. Description: High-altitude Himalayan retreat nestled along the Beas River, renowned for paragliding in Solang, Atal Tunnel, ancient Hadimba Temple, and Bohemian Old Manali. Best time to visit: October to June. Recommended trip duration: 4 days. Popular travel interests: Adventure, Nature, Snow, Culture. Official Tourism: https://himachaltourism.gov.in.",
        "tags": [
          "manali",
          "manali",
          "himachal pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Solang Valley Adventure Hub (Adventure)",
        "content": "Premier adventure hub at 2,560m for paragliding, zorbing, snow quad-biking, and skiing. Location: Manali. Estimated visit duration: 180 minutes. Estimated entry fee: ₹1200. Tips: Rent snow suits from authorized HP government stalls ",
        "tags": [
          "manali",
          "manali",
          "himachal pradesh",
          "adventure",
          "solang valley adventure hub",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Hadimba Wooden Pagoda Temple (Temples)",
        "content": "Built in 1553, this four-tiered pagoda temple rests peacefully within a dense deodar pine forest. Location: Manali. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Explore the Dhungri Van Vihar pine sanctuary trail right behind ",
        "tags": [
          "manali",
          "manali",
          "himachal pradesh",
          "temples",
          "hadimba wooden pagoda temple",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-manali-culture-logistics",
    "destination": "Manali",
    "title": "Culture, Food & Transportation Guide for Manali",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Manali",
        "content": "Cultural highlights of Manali, Himachal Pradesh: Himachali handloom Kullu shawls. Siddu steamed bread with ghee. Old Manali indie live music cafes. Recognized destination category: Hill Stations & Mountains. Known aliases: Kullu Manali, Solang Valley, Old Manali.",
        "tags": [
          "manali",
          "manali",
          "himachal pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Manali",
        "content": "Renowned food and dining specialties in Manali: Cafe 1947 Old Manali (Himachali & Italian Dinner): Famous for Pan-seared Beas River trout and wood-fired artisanal pizza. Avg cost per person: ₹450.",
        "tags": [
          "manali",
          "manali",
          "himachal pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Manali",
        "content": "Reaching Manali, Himachal Pradesh: Nearest Airport: Kullu-Manali Airport, Bhuntar (50 km). Nearest Railway: Chandigarh Junction (310 km) / Joginder Nagar (165 km). Road Connectivity: NH 3 through Chandigarh, Bilaspur, and Mandi.",
        "tags": [
          "manali",
          "manali",
          "himachal pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-shimla-attractions",
    "destination": "Shimla",
    "title": "Top Attractions, Sights & Overview of Shimla",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Shimla",
        "content": "Shimla is a premier destination in Himachal Pradesh. The Queen of Hills - UNESCO Toy Train, The Ridge & Colonial Heritage. Description: Former summer capital of British India perched on seven hills, featuring the neo-Gothic Christ Church, pedestrian Mall Road, and the UNESCO Kalka-Shimla Toy Train. Best time to visit: March to June & November to February. Recommended trip duration: 3 days. Popular travel interests: History, Nature, Photography, Sightseeing. Official Tourism: https://himachaltourism.gov.in.",
        "tags": [
          "shimla",
          "shimla",
          "himachal pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "The Ridge & Christ Church (Sightseeing)",
        "content": "Open public esplanade facing snow peaks, anchored by the iconic 1857 stained-glass Christ Church. Location: Shimla. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Pedestrian-only zone, no motorized traffic permitted ",
        "tags": [
          "shimla",
          "shimla",
          "himachal pradesh",
          "sightseeing",
          "the ridge & christ church",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-shimla-culture-logistics",
    "destination": "Shimla",
    "title": "Culture, Food & Transportation Guide for Shimla",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Shimla",
        "content": "Cultural highlights of Shimla, Himachal Pradesh: UNESCO Mountain Toy Train traversing 102 tunnels. Colonial Gaiety Theatre performances. Himachali Chha Gosht and Madra. Recognized destination category: Hill Stations & Mountains. Known aliases: Simla, Queen of Hills, Mall Road Shimla.",
        "tags": [
          "shimla",
          "shimla",
          "himachal pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Shimla",
        "content": "Renowned food and dining specialties in Shimla: Baljees & Fascination (Himachali & North Indian Lunch): Famous for Authentic Himachali Sepu Vadi, hot Gulab Jamuns and Kurkure Chaat. Avg cost per person: ₹300.",
        "tags": [
          "shimla",
          "shimla",
          "himachal pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Shimla",
        "content": "Reaching Shimla, Himachal Pradesh: Nearest Airport: Jubarhatti Airport, Shimla (22 km) / Chandigarh (120 km). Nearest Railway: Shimla Railway Station (SML) on UNESCO Toy Train line. Road Connectivity: 4-lane Himalayan expressway NH 5 from Chandigarh.",
        "tags": [
          "shimla",
          "shimla",
          "himachal pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-dharamshala-mcleodganj-attractions",
    "destination": "Dharamshala & McLeodganj",
    "title": "Top Attractions, Sights & Overview of Dharamshala & McLeodganj",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Dharamshala & McLeodganj",
        "content": "Dharamshala & McLeodganj is a premier destination in Himachal Pradesh. Little Lhasa of India - Residence of the Dalai Lama & Dhauladhar Treks. Description: Spiritual haven in the Kangra Valley surrounded by cedar forests and snow peaks, serving as the seat of the Tibetan government-in-exile and starting point for Triund. Best time to visit: March to June & September to November. Recommended trip duration: 3 days. Popular travel interests: Culture, Adventure, Nature, Temples. Official Tourism: https://himachaltourism.gov.in.",
        "tags": [
          "dharamshala & mcleodganj",
          "dharamshala & mcleodganj",
          "himachal pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Tsuglagkhang Complex (Dalai Lama Temple) (History)",
        "content": "Serene monastery housing the Namgyal monks, gilded statues of Avalokiteshvara, and Tibetan museum. Location: Dharamshala & McLeodganj. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Circumambulate the Lingkor meditation path through prayer flags ",
        "tags": [
          "dharamshala & mcleodganj",
          "dharamshala & mcleodganj",
          "himachal pradesh",
          "history",
          "tsuglagkhang complex (dalai lama temple)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-dharamshala-mcleodganj-culture-logistics",
    "destination": "Dharamshala & McLeodganj",
    "title": "Culture, Food & Transportation Guide for Dharamshala & McLeodganj",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Dharamshala & McLeodganj",
        "content": "Cultural highlights of Dharamshala & McLeodganj, Himachal Pradesh: Tsuglagkhang Complex & Dalai Lama temple teachings. Norbulingka Institute Tibetan arts. Triund ridge trek. Recognized destination category: Cultural & Local Experiences. Known aliases: Dharamsala, McLeod Ganj, Little Lhasa, Kangra.",
        "tags": [
          "dharamshala & mcleodganj",
          "dharamshala & mcleodganj",
          "himachal pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Dharamshala & McLeodganj",
        "content": "Renowned food and dining specialties in Dharamshala & McLeodganj: Tibet Kitchen McLeodganj (Tibetan & Himalayan Lunch): Famous for Tingmo steamed buns with spicy Shapta and Thukpa. Avg cost per person: ₹250.",
        "tags": [
          "dharamshala & mcleodganj",
          "dharamshala & mcleodganj",
          "himachal pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Dharamshala & McLeodganj",
        "content": "Reaching Dharamshala & McLeodganj, Himachal Pradesh: Nearest Airport: Gaggal Airport, Kangra (15 km). Nearest Railway: Pathankot Junction (85 km). Road Connectivity: NH 503 from Kangra / Pathankot.",
        "tags": [
          "dharamshala & mcleodganj",
          "dharamshala & mcleodganj",
          "himachal pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-spiti-valley-attractions",
    "destination": "Spiti Valley",
    "title": "Top Attractions, Sights & Overview of Spiti Valley",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Spiti Valley",
        "content": "Spiti Valley is a premier destination in Himachal Pradesh. The Middle Land - High-Altitude Cold Desert, Ancient Key Monastery & Chandratal. Description: Surreal Tibetan-border desert valley at 3,800m with 1,000-year-old cliffside monasteries, fossil villages, and sapphire blue Chandratal Lake. Best time to visit: May to October. Recommended trip duration: 6 days. Popular travel interests: Adventure, Nature, Culture, Photography. Official Tourism: https://himachaltourism.gov.in.",
        "tags": [
          "spiti valley",
          "spiti valley",
          "himachal pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Key Monastery (Kye Gompa) (History)",
        "content": "11th-century cliff-perched monastery fortress at 4,166m with ancient murals, wind instruments, and monk dormitories. Location: Spiti Valley. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Drink herbal tea served generously by the resident monks ",
        "tags": [
          "spiti valley",
          "spiti valley",
          "himachal pradesh",
          "history",
          "key monastery (kye gompa)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-spiti-valley-culture-logistics",
    "destination": "Spiti Valley",
    "title": "Culture, Food & Transportation Guide for Spiti Valley",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Spiti Valley",
        "content": "Cultural highlights of Spiti Valley, Himachal Pradesh: Key Gompa Buddhist fortress monastery. World’s highest post office at Hikkim (4,400m). Dark-sky stargazing. Recognized destination category: Offbeat & Scenic Places. Known aliases: Spiti, Kaza, Key Monastery, Chandratal.",
        "tags": [
          "spiti valley",
          "spiti valley",
          "himachal pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Spiti Valley",
        "content": "Renowned food and dining specialties in Spiti Valley: The Himalayan Cafe Kaza (Spitian & Tibetan Dinner): Famous for Sea buckthorn tea, Spitian barley pancakes and vegetable Thenthuk. Avg cost per person: ₹250.",
        "tags": [
          "spiti valley",
          "spiti valley",
          "himachal pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Spiti Valley",
        "content": "Reaching Spiti Valley, Himachal Pradesh: Nearest Airport: Bhuntar Airport (245 km) / Shimla (420 km). Nearest Railway: Shimla / Chandigarh. Road Connectivity: Accessible via Manali-Atal Tunnel-Kunzum Pass (Summer) or Shimla-Kinnaur route.",
        "tags": [
          "spiti valley",
          "spiti valley",
          "himachal pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-kasol-attractions",
    "destination": "Kasol & Parvati Valley",
    "title": "Top Attractions, Sights & Overview of Kasol & Parvati Valley",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Kasol & Parvati Valley",
        "content": "Kasol & Parvati Valley is a premier destination in Himachal Pradesh. Mini Israel of the Himalayas - Parvati River Treks & Manikaran Hot Springs. Description: Laidback riverside hamlet surrounded by towering pine forests, serving as the base for the Kheerganga natural sulphur spring trek and Tosh village. Best time to visit: April to June & October to November. Recommended trip duration: 3 days. Popular travel interests: Adventure, Nature, Food. Official Tourism: https://himachaltourism.gov.in.",
        "tags": [
          "kasol & parvati valley",
          "kasol & parvati valley",
          "himachal pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Manikaran Sahib Gurudwara & Thermal Springs (Temples)",
        "content": "Revered spiritual center on the rushing Parvati River where natural boiling sulphur springs cook community langar meals. Location: Kasol & Parvati Valley. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Bathe in the natural healing hot spring mineral pools ",
        "tags": [
          "kasol & parvati valley",
          "kasol & parvati valley",
          "himachal pradesh",
          "temples",
          "manikaran sahib gurudwara & thermal springs",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-kasol-culture-logistics",
    "destination": "Kasol & Parvati Valley",
    "title": "Culture, Food & Transportation Guide for Kasol & Parvati Valley",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Kasol & Parvati Valley",
        "content": "Cultural highlights of Kasol & Parvati Valley, Himachal Pradesh: Israeli shakshuka and falafel cafes. Manikaran Sahib sacred Sikh hot springs Gurudwara. Pine forest trails. Recognized destination category: Adventure & Trekking. Known aliases: Kasol, Parvati Valley, Manikaran, Tosh, Kheerganga.",
        "tags": [
          "kasol & parvati valley",
          "kasol & parvati valley",
          "himachal pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Kasol & Parvati Valley",
        "content": "Renowned food and dining specialties in Kasol & Parvati Valley: Moon Dance Cafe Kasol (Israeli & Continental Lunch): Famous for Fresh Hummus Platter, Shakshuka and Apple Cinnamon Crumble. Avg cost per person: ₹300.",
        "tags": [
          "kasol & parvati valley",
          "kasol & parvati valley",
          "himachal pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Kasol & Parvati Valley",
        "content": "Reaching Kasol & Parvati Valley, Himachal Pradesh: Nearest Airport: Bhuntar Airport (31 km). Nearest Railway: Joginder Nagar (145 km). Road Connectivity: Route via Bhuntar through Parvati Valley.",
        "tags": [
          "kasol & parvati valley",
          "kasol & parvati valley",
          "himachal pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-ranchi-attractions",
    "destination": "Ranchi",
    "title": "Top Attractions, Sights & Overview of Ranchi",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Ranchi",
        "content": "Ranchi is a premier destination in Jharkhand. City of Waterfalls - Hundru Falls, Jonha & Chotanagpur Plateau Panoramas. Description: Capital city situated on the scenic Chotanagpur Plateau, celebrated for tumbling stepped waterfalls, Tagore Hill, and Dhurwa Dam. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: Waterfalls, Nature, Culture. Official Tourism: https://tourism.jharkhand.gov.in.",
        "tags": [
          "ranchi",
          "ranchi",
          "jharkhand",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Hundru Falls on Subarnarekha River (Nature)",
        "content": "River Subarnarekha plunges 320 feet over tiered polished granite rocks into a serene forest gorge. Location: Ranchi. Estimated visit duration: 150 minutes. Estimated entry fee: ₹20. Tips: Walk down the 700 steps for dramatic views ",
        "tags": [
          "ranchi",
          "ranchi",
          "jharkhand",
          "nature",
          "hundru falls on subarnarekha river",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-ranchi-culture-logistics",
    "destination": "Ranchi",
    "title": "Culture, Food & Transportation Guide for Ranchi",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Ranchi",
        "content": "Cultural highlights of Ranchi, Jharkhand: Tribal terracotta and Sohrai wall murals. Dhuska savory snack with Ghugni. Tagore Hill ashram. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Ranchi City, City of Waterfalls.",
        "tags": [
          "ranchi",
          "ranchi",
          "jharkhand",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Ranchi",
        "content": "Renowned food and dining specialties in Ranchi: Bhojpur Tribal Kitchen (Jharkhandi Traditional Lunch): Famous for Crispy Dhuska served with spicy Aloo-Chana and Arsa sweet. Avg cost per person: ₹120.",
        "tags": [
          "ranchi",
          "ranchi",
          "jharkhand",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Ranchi",
        "content": "Reaching Ranchi, Jharkhand: Nearest Airport: Birsa Munda Airport (IXR) in city. Nearest Railway: Ranchi Junction (RNC) & Hatia (HTE). Road Connectivity: NH 20 and NH 43.",
        "tags": [
          "ranchi",
          "ranchi",
          "jharkhand",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-deoghar-attractions",
    "destination": "Deoghar",
    "title": "Top Attractions, Sights & Overview of Deoghar",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Deoghar",
        "content": "Deoghar is a premier destination in Jharkhand. Abode of the Gods - Baba Baidyanath Jyotirlinga Dham & Trikut Ropeway. Description: Revered spiritual holy city housing one of the twelve sacred Jyotirlingas of Lord Shiva, attracting millions during the annual Shravani Mela. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: Temples, History, Culture. Official Tourism: https://tourism.jharkhand.gov.in.",
        "tags": [
          "deoghar",
          "deoghar",
          "jharkhand",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Baba Baidyanath Jyotirlinga Temple (Temples)",
        "content": "Ancient stone temple complex with pyramidal towers where Ravana worshipped Shiva to obtain the Atmalinga. Location: Deoghar. Estimated visit duration: 150 minutes. Estimated entry fee: ₹0. Tips: Special VIP darshan passes available during crowded morning hours ",
        "tags": [
          "deoghar",
          "deoghar",
          "jharkhand",
          "temples",
          "baba baidyanath jyotirlinga temple",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-deoghar-culture-logistics",
    "destination": "Deoghar",
    "title": "Culture, Food & Transportation Guide for Deoghar",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Deoghar",
        "content": "Cultural highlights of Deoghar, Jharkhand: Shravani Mela holy Kanwar pilgrimage. Baidyanath Peda sweet specialty. Recognized destination category: Religious & Pilgrimage. Known aliases: Baidyanath Dham, Deogarh.",
        "tags": [
          "deoghar",
          "deoghar",
          "jharkhand",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Deoghar",
        "content": "Renowned food and dining specialties in Deoghar: Hari Om Peda & Sweets (Traditional Sweets & Snacks Breakfast): Famous for Caramelized Mawa Peda and Kachori with Hing Aloo Sabzi. Avg cost per person: ₹100.",
        "tags": [
          "deoghar",
          "deoghar",
          "jharkhand",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Deoghar",
        "content": "Reaching Deoghar, Jharkhand: Nearest Airport: Deoghar International Airport (DGH) in city. Nearest Railway: Jasidih Junction (JSME) - 7 km. Road Connectivity: Connected via NH 114A.",
        "tags": [
          "deoghar",
          "deoghar",
          "jharkhand",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-bengaluru-attractions",
    "destination": "Bengaluru",
    "title": "Top Attractions, Sights & Overview of Bengaluru",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Bengaluru",
        "content": "Bengaluru is a premier destination in Karnataka. Silicon Valley & Garden City of India - Lalbagh, Tech Parks & Craft Beer. Description: Vibrant cosmopolitan hub blending botanical gardens from the 18th century, Tudor-style palaces, thriving IT parks, and India’s best microbrewery culture. Best time to visit: September to March. Recommended trip duration: 3 days. Popular travel interests: Food, Culture, History, Sightseeing. Official Tourism: https://karnatakatourism.org.",
        "tags": [
          "bengaluru",
          "bengaluru",
          "karnataka",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Lalbagh Botanical Garden & Glass House (Nature)",
        "content": "240-acre botanical haven commissioned by Hyder Ali in 1760, centered around a Victorian Glass House modeled on London’s Crystal Palace. Location: Bengaluru. Estimated visit duration: 120 minutes. Estimated entry fee: ₹30. Tips: Visit between 6 AM and 9 AM for peaceful morning birdwatching ",
        "tags": [
          "bengaluru",
          "bengaluru",
          "karnataka",
          "nature",
          "lalbagh botanical garden & glass house",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Bangalore Palace & Grounds (History)",
        "content": "Tudor-style royal estate built by Chamaraja Wadiyar in 1887 with turrets, wood carvings, and historical oil paintings. Location: Bengaluru. Estimated visit duration: 90 minutes. Estimated entry fee: ₹250. Tips: Audio guide included with admission ticket ",
        "tags": [
          "bengaluru",
          "bengaluru",
          "karnataka",
          "history",
          "bangalore palace & grounds",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-bengaluru-culture-logistics",
    "destination": "Bengaluru",
    "title": "Culture, Food & Transportation Guide for Bengaluru",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Bengaluru",
        "content": "Cultural highlights of Bengaluru, Karnataka: Vidyarthi Bhavan masala dosa heritage. Cubbon Park Sunday dog runs. Craft beer culture in Indiranagar & Koramangala. Recognized destination category: Major Cities & Towns. Known aliases: Bangalore, Garden City, Bengaluru City.",
        "tags": [
          "bengaluru",
          "bengaluru",
          "karnataka",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Bengaluru",
        "content": "Renowned food and dining specialties in Bengaluru: Vidyarthi Bhavan (Est. 1943) (South Indian Breakfast): Famous for Crispy golden Butter Masala Dosa with thick coconut chutney. Avg cost per person: ₹150.",
        "tags": [
          "bengaluru",
          "bengaluru",
          "karnataka",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Bengaluru",
        "content": "Reaching Bengaluru, Karnataka: Nearest Airport: Kempegowda International Airport (BLR) in Devanahalli. Nearest Railway: KSR Bengaluru (SBC) & Yesvantpur (YPR). Road Connectivity: Hub for NH 44, NH 48, and NH 75.",
        "tags": [
          "bengaluru",
          "bengaluru",
          "karnataka",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-mysuru-attractions",
    "destination": "Mysuru",
    "title": "Top Attractions, Sights & Overview of Mysuru",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Mysuru",
        "content": "Mysuru is a premier destination in Karnataka. City of Palaces - Indo-Saracenic Royal Opulence, Sandalwood & Silk. Description: Heritage city famed for the illuminated Mysore Palace, Chamundeshwari Temple on Chamundi Hills, Devaraja Market, and fragrant sandalwood. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Culture, Shopping, Food. Official Tourism: https://karnatakatourism.org.",
        "tags": [
          "mysuru",
          "mysuru",
          "karnataka",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Mysore Palace (Amba Vilas) (History)",
        "content": "Indo-Saracenic architectural masterpiece adorned with stained glass domes, carved rosewood doors, and illuminated by 97,000 light bulbs. Location: Mysuru. Estimated visit duration: 150 minutes. Estimated entry fee: ₹100. Tips: Sunday evening palace illumination from 7:00 PM to 8:00 PM is unmissable ",
        "tags": [
          "mysuru",
          "mysuru",
          "karnataka",
          "history",
          "mysore palace (amba vilas)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-mysuru-culture-logistics",
    "destination": "Mysuru",
    "title": "Culture, Food & Transportation Guide for Mysuru",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Mysuru",
        "content": "Cultural highlights of Mysuru, Karnataka: Mysore Dasara Jumbo Savari procession. Mysore Pak melt-in-mouth sweet. Pure Mysore Silk sarees. Recognized destination category: Historical Monuments & Heritage. Known aliases: Mysore, City of Palaces.",
        "tags": [
          "mysuru",
          "mysuru",
          "karnataka",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Mysuru",
        "content": "Renowned food and dining specialties in Mysuru: Guru Sweets (Original Mysore Pak) (Traditional Karnataka Sweets Snacks): Famous for Hot Ghee Mysore Pak prepared by the royal recipe lineage. Avg cost per person: ₹120.",
        "tags": [
          "mysuru",
          "mysuru",
          "karnataka",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Mysuru",
        "content": "Reaching Mysuru, Karnataka: Nearest Airport: Mysuru Airport (MYQ) / Bengaluru Airport (170 km). Nearest Railway: Mysuru Junction (MYS). Road Connectivity: Bengaluru-Mysuru 10-lane Expressway.",
        "tags": [
          "mysuru",
          "mysuru",
          "karnataka",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-hampi-attractions",
    "destination": "Hampi",
    "title": "Top Attractions, Sights & Overview of Hampi",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Hampi",
        "content": "Hampi is a premier destination in Karnataka. UNESCO World Heritage - Boulders, Stone Chariots & Vijayanagara Empire. Description: Surreal boulder-strewn landscape dotted with magnificent 14th-century ruins of the Vijayanagara Empire along the Tungabhadra River. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: History, Photography, Architecture, Culture. Official Tourism: https://karnatakatourism.org.",
        "tags": [
          "hampi",
          "hampi",
          "karnataka",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Vittala Temple & Iconic Stone Chariot (History)",
        "content": "15th-century temple complex renowned for its monolithic carved stone chariot shrine and pillars that resonate with musical notes. Location: Hampi. Estimated visit duration: 150 minutes. Estimated entry fee: ₹40. Tips: Electric battery buggies available from parking area to main gate ",
        "tags": [
          "hampi",
          "hampi",
          "karnataka",
          "history",
          "vittala temple & iconic stone chariot",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-hampi-culture-logistics",
    "destination": "Hampi",
    "title": "Culture, Food & Transportation Guide for Hampi",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Hampi",
        "content": "Cultural highlights of Hampi, Karnataka: Vittala Temple musical pillars and Stone Chariot. Coracle boat rides on the Tungabhadra. Sunset from Matanga Hill. Recognized destination category: Historical Monuments & Heritage. Known aliases: Hampi Ruins, Vijayanagara, Kishkindha.",
        "tags": [
          "hampi",
          "hampi",
          "karnataka",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Hampi",
        "content": "Renowned food and dining specialties in Hampi: Mango Tree Restaurant (South Indian & Continental Lunch): Famous for Traditional South Indian Thali served on fresh banana leaf. Avg cost per person: ₹220.",
        "tags": [
          "hampi",
          "hampi",
          "karnataka",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Hampi",
        "content": "Reaching Hampi, Karnataka: Nearest Airport: Jindal Vidyanagar Airport, Toranagallu (40 km) / Hubli (160 km). Nearest Railway: Hosapete Junction (HPT) - 13 km. Road Connectivity: NH 50 and NH 67.",
        "tags": [
          "hampi",
          "hampi",
          "karnataka",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-coorg-attractions",
    "destination": "Coorg (Kodagu)",
    "title": "Top Attractions, Sights & Overview of Coorg (Kodagu)",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Coorg (Kodagu)",
        "content": "Coorg (Kodagu) is a premier destination in Karnataka. Scotland of India - Coffee Plantations, Abbey Falls & Kodava Hospitality. Description: Lush mountain district draped in emerald coffee plantations, misty valleys, Abbey Falls, and the rich martial culture of the Kodavas. Best time to visit: September to March. Recommended trip duration: 3 days. Popular travel interests: Nature, Food, Culture, Adventure. Official Tourism: https://karnatakatourism.org.",
        "tags": [
          "coorg (kodagu)",
          "coorg (kodagu)",
          "karnataka",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Abbey Falls Cascades (Nature)",
        "content": "70-foot waterfall roaring down jagged rocks amidst coffee estates and spice groves, viewed from a hanging bridge. Location: Coorg (Kodagu). Estimated visit duration: 90 minutes. Estimated entry fee: ₹20. Tips: Wear non-slip footwear for the 200m walkway ",
        "tags": [
          "coorg (kodagu)",
          "coorg (kodagu)",
          "karnataka",
          "nature",
          "abbey falls cascades",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-coorg-culture-logistics",
    "destination": "Coorg (Kodagu)",
    "title": "Culture, Food & Transportation Guide for Coorg (Kodagu)",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Coorg (Kodagu)",
        "content": "Cultural highlights of Coorg (Kodagu), Karnataka: Kodava Pandi Curry and Akki Roti. Namdroling Golden Temple Tibetan monastery in Bylakuppe. Recognized destination category: Hill Stations & Mountains. Known aliases: Kodagu, Madikeri, Scotland of India.",
        "tags": [
          "coorg (kodagu)",
          "coorg (kodagu)",
          "karnataka",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Coorg (Kodagu)",
        "content": "Renowned food and dining specialties in Coorg (Kodagu): Coorg Cuisine Madikeri (Kodava Traditional Lunch): Famous for Authentic Kodava Pandi Curry with soft Kadambuttu rice balls. Avg cost per person: ₹350.",
        "tags": [
          "coorg (kodagu)",
          "coorg (kodagu)",
          "karnataka",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Coorg (Kodagu)",
        "content": "Reaching Coorg (Kodagu), Karnataka: Nearest Airport: Kannur Airport (CNN) - 90 km / Mangalore (135 km) / Bangalore (260 km). Nearest Railway: Mysuru Junction (120 km). Road Connectivity: NH 275 from Mysuru.",
        "tags": [
          "coorg (kodagu)",
          "coorg (kodagu)",
          "karnataka",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-gokarna-attractions",
    "destination": "Gokarna",
    "title": "Top Attractions, Sights & Overview of Gokarna",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Gokarna",
        "content": "Gokarna is a premier destination in Karnataka. Sacred Shores & Coastal Cliff Treks - Om Beach, Kudle & Mahabaleshwar. Description: Atmospheric coastal town where sacred Shaivite pilgrimage meets pristine secluded beaches linked by cliffside walking paths. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: Beaches, Temples, Adventure, Nature. Official Tourism: https://karnatakatourism.org.",
        "tags": [
          "gokarna",
          "gokarna",
          "karnataka",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Om Beach & Cliff Walk (Beaches)",
        "content": "Naturally curved beach shaped like the sacred Hindu symbol Om, famous for boat rides and cliffside sunsets. Location: Gokarna. Estimated visit duration: 150 minutes. Estimated entry fee: ₹0. Tips: Trek across the headland to Half Moon Beach ",
        "tags": [
          "gokarna",
          "gokarna",
          "karnataka",
          "beaches",
          "om beach & cliff walk",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-gokarna-culture-logistics",
    "destination": "Gokarna",
    "title": "Culture, Food & Transportation Guide for Gokarna",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Gokarna",
        "content": "Cultural highlights of Gokarna, Karnataka: Atmalinga Mahabaleshwar Temple rituals. Famous 5-beach cliff trek (Belekan to Kudle). Recognized destination category: Beaches & Coastal. Known aliases: Om Beach, Kudle Beach.",
        "tags": [
          "gokarna",
          "gokarna",
          "karnataka",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Gokarna",
        "content": "Renowned food and dining specialties in Gokarna: Namaste Cafe Om Beach (Coastal & Continental Lunch): Famous for Fresh catch Kingfish fry and banana Nutella pancakes. Avg cost per person: ₹300.",
        "tags": [
          "gokarna",
          "gokarna",
          "karnataka",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Gokarna",
        "content": "Reaching Gokarna, Karnataka: Nearest Airport: Goa Dabolim Airport (140 km). Nearest Railway: Gokarna Road (GOK) - 8 km. Road Connectivity: NH 66 coastal corridor.",
        "tags": [
          "gokarna",
          "gokarna",
          "karnataka",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-munnar-attractions",
    "destination": "Munnar",
    "title": "Top Attractions, Sights & Overview of Munnar",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Munnar",
        "content": "Munnar is a premier destination in Kerala. Kashmir of South India - Rolling Tea Carpets, Anamudi & Nilgiri Tahr. Description: Enchanting hill resort at 1,600m in the Western Ghats, blanketed in manicured tea gardens, mist-kissed waterfalls, and Eravikulam National Park. Best time to visit: September to May. Recommended trip duration: 3 days. Popular travel interests: Nature, Wildlife, Photography, Food. Official Tourism: https://keralatourism.org.",
        "tags": [
          "munnar",
          "munnar",
          "kerala",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Eravikulam National Park (Rajamalai) (Nature)",
        "content": "Sanctuary housing the endangered Nilgiri Tahr and offering panoramic vistas of Anamudi, South India’s highest peak (2,695m). Location: Munnar. Estimated visit duration: 180 minutes. Estimated entry fee: ₹200. Tips: Book entry bus slots online in advance ",
        "tags": [
          "munnar",
          "munnar",
          "kerala",
          "nature",
          "eravikulam national park (rajamalai)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-munnar-culture-logistics",
    "destination": "Munnar",
    "title": "Culture, Food & Transportation Guide for Munnar",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Munnar",
        "content": "Cultural highlights of Munnar, Kerala: KDHP Tea Museum & fresh factory tasting. Kathakali and Kalaripayattu martial arts shows. Kerala Appam with stew. Recognized destination category: Hill Stations & Mountains. Known aliases: Munnar Hills, Tea Gardens Munnar.",
        "tags": [
          "munnar",
          "munnar",
          "kerala",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Munnar",
        "content": "Renowned food and dining specialties in Munnar: Saravana Bhavan Munnar (Kerala South Indian Breakfast): Famous for Hot Ghee Roast Dosa, Puttu with Kadala Curry and cardamom tea. Avg cost per person: ₹150.",
        "tags": [
          "munnar",
          "munnar",
          "kerala",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Munnar",
        "content": "Reaching Munnar, Kerala: Nearest Airport: Cochin International Airport (COK) - 110 km. Nearest Railway: Aluva (110 km) / Ernakulam (130 km). Road Connectivity: Scenic mountain highway NH 85 (Kochi-Dhanushkodi).",
        "tags": [
          "munnar",
          "munnar",
          "kerala",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-alleppey-attractions",
    "destination": "Alleppey (Alappuzha)",
    "title": "Top Attractions, Sights & Overview of Alleppey (Alappuzha)",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Alleppey (Alappuzha)",
        "content": "Alleppey (Alappuzha) is a premier destination in Kerala. Venice of the East - Houseboats, Serene Backwaters & Vembanad Lake. Description: World-famous backwater haven renowned for overnight houseboat cruises through palm-fringed canals, paddy fields below sea level, and Nehru Trophy boat race. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: Nature, Beaches, Food, Culture. Official Tourism: https://keralatourism.org.",
        "tags": [
          "alleppey (alappuzha)",
          "alleppey (alappuzha)",
          "kerala",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Vembanad Lake Houseboat Cruise (Nature)",
        "content": "Gliding along quiet lagoons and village canals on an eco-friendly converted rice barge with fresh coconut water. Location: Alleppey (Alappuzha). Estimated visit duration: 240 minutes. Estimated entry fee: ₹1500. Tips: Choose day cruises for maximum canal scenery ",
        "tags": [
          "alleppey (alappuzha)",
          "alleppey (alappuzha)",
          "kerala",
          "nature",
          "vembanad lake houseboat cruise",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-alleppey-culture-logistics",
    "destination": "Alleppey (Alappuzha)",
    "title": "Culture, Food & Transportation Guide for Alleppey (Alappuzha)",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Alleppey (Alappuzha)",
        "content": "Cultural highlights of Alleppey (Alappuzha), Kerala: Traditional Kettuvallam thatch-roof houseboats. Karimeen Pollichathu pearl spot fish. Snake boat races in August. Recognized destination category: Beaches & Coastal. Known aliases: Alappuzha, Alleppey Backwaters, Venice of the East.",
        "tags": [
          "alleppey (alappuzha)",
          "alleppey (alappuzha)",
          "kerala",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Alleppey (Alappuzha)",
        "content": "Renowned food and dining specialties in Alleppey (Alappuzha): Thaff Delicacy Alleppey (Kerala Coastal Lunch): Famous for Karimeen Pollichathu wrapped in banana leaf and Malabar Biryani. Avg cost per person: ₹350.",
        "tags": [
          "alleppey (alappuzha)",
          "alleppey (alappuzha)",
          "kerala",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Alleppey (Alappuzha)",
        "content": "Reaching Alleppey (Alappuzha), Kerala: Nearest Airport: Cochin Airport (85 km). Nearest Railway: Alappuzha Railway Station (ALLP). Road Connectivity: NH 66 along coastal corridor.",
        "tags": [
          "alleppey (alappuzha)",
          "alleppey (alappuzha)",
          "kerala",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-kochi-attractions",
    "destination": "Kochi (Cochin)",
    "title": "Top Attractions, Sights & Overview of Kochi (Cochin)",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Kochi (Cochin)",
        "content": "Kochi (Cochin) is a premier destination in Kerala. Queen of the Arabian Sea - Chinese Fishing Nets, Fort Kochi & Spice Trade. Description: Cosmopolitan historic port fusing Portuguese, Dutch, British, and Jewish heritage with cantilevered Chinese fishing nets and contemporary Kochi-Muziris Biennale arts. Best time to visit: October to April. Recommended trip duration: 3 days. Popular travel interests: History, Culture, Food, Shopping. Official Tourism: https://keralatourism.org.",
        "tags": [
          "kochi (cochin)",
          "kochi (cochin)",
          "kerala",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Fort Kochi Chinese Fishing Nets (History)",
        "content": "Historic shore-operated cantilevered fishing nets introduced by Chinese explorer Zheng He in the 14th century. Location: Kochi (Cochin). Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Best photographed at sunrise or sunset ",
        "tags": [
          "kochi (cochin)",
          "kochi (cochin)",
          "kerala",
          "history",
          "fort kochi chinese fishing nets",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-kochi-culture-logistics",
    "destination": "Kochi (Cochin)",
    "title": "Culture, Food & Transportation Guide for Kochi (Cochin)",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Kochi (Cochin)",
        "content": "Cultural highlights of Kochi (Cochin), Kerala: Cantilevered Chinese Fishing Nets along Vasco da Gama Square. Jew Town antique shops and Paradesi Synagogue (Est. 1568). Recognized destination category: Historical Monuments & Heritage. Known aliases: Cochin, Fort Kochi, Ernakulam.",
        "tags": [
          "kochi (cochin)",
          "kochi (cochin)",
          "kerala",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Kochi (Cochin)",
        "content": "Renowned food and dining specialties in Kochi (Cochin): Kashi Art Cafe Fort Kochi (Continental & Kerala Fusion Breakfast): Famous for Fresh roast filter coffee, artisanal toast and Chocolate Pie. Avg cost per person: ₹250.",
        "tags": [
          "kochi (cochin)",
          "kochi (cochin)",
          "kerala",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Kochi (Cochin)",
        "content": "Reaching Kochi (Cochin), Kerala: Nearest Airport: Cochin International Airport (COK) in Nedumbassery (30 km). Nearest Railway: Ernakulam Junction (ERS) & Ernakulam Town (ERN). Road Connectivity: NH 544 and NH 66.",
        "tags": [
          "kochi (cochin)",
          "kochi (cochin)",
          "kerala",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-wayanad-attractions",
    "destination": "Wayanad",
    "title": "Top Attractions, Sights & Overview of Wayanad",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Wayanad",
        "content": "Wayanad is a premier destination in Kerala. Green Paradise - Prehistoric Edakkal Caves, Chembra Peak & Waterfalls. Description: Pristine highland district nestled in the Western Ghats, famed for Neolithic petroglyphs at Edakkal Caves, tea estates, and Banasura Sagar earthen dam. Best time to visit: October to May. Recommended trip duration: 3 days. Popular travel interests: Adventure, Nature, History. Official Tourism: https://keralatourism.org.",
        "tags": [
          "wayanad",
          "wayanad",
          "kerala",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Edakkal Caves Neolithic Petroglyphs (History)",
        "content": "Natural split-rock cave shelter containing pictorial stone carvings dating back to 6000 BCE. Location: Wayanad. Estimated visit duration: 150 minutes. Estimated entry fee: ₹50. Tips: Steep climb of 300 steps requires good walking shoes ",
        "tags": [
          "wayanad",
          "wayanad",
          "kerala",
          "history",
          "edakkal caves neolithic petroglyphs",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-wayanad-culture-logistics",
    "destination": "Wayanad",
    "title": "Culture, Food & Transportation Guide for Wayanad",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Wayanad",
        "content": "Cultural highlights of Wayanad, Kerala: Edakkal Caves Stone Age rock carvings. Chembra heart-shaped mountain lake trek. Recognized destination category: Adventure & Trekking. Known aliases: Wayanad Hills, Kalpetta, Sulthan Bathery.",
        "tags": [
          "wayanad",
          "wayanad",
          "kerala",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Wayanad",
        "content": "Renowned food and dining specialties in Wayanad: 1980’s A Nostalgic Restaurant (Kerala Traditional Lunch): Famous for Grand Kerala Meals with bamboo chicken and fish fry. Avg cost per person: ₹280.",
        "tags": [
          "wayanad",
          "wayanad",
          "kerala",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Wayanad",
        "content": "Reaching Wayanad, Kerala: Nearest Airport: Calicut International Airport, Kozhikode (CCJ) - 85 km. Nearest Railway: Kozhikode Railway Station (CLT) - 75 km. Road Connectivity: Thamarassery Churam Ghat road NH 766.",
        "tags": [
          "wayanad",
          "wayanad",
          "kerala",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-khajuraho-attractions",
    "destination": "Khajuraho",
    "title": "Top Attractions, Sights & Overview of Khajuraho",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Khajuraho",
        "content": "Khajuraho is a premier destination in Madhya Pradesh. UNESCO Monument of Love - Erotic Sculptures & Chandela Temple Art. Description: World-famous temple complex built between 950 and 1050 CE by the Chandela dynasty, celebrated for sublime Nagara architecture and intricate stone carvings. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Architecture, Culture, Photography. Official Tourism: https://www.mptourism.com.",
        "tags": [
          "khajuraho",
          "khajuraho",
          "madhya pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Western Group of Temples & Kandariya Mahadeva (History)",
        "content": "Spectacular UNESCO monument complex featuring the towering 31m Kandariya Mahadeva and Lakshmana temples. Location: Khajuraho. Estimated visit duration: 180 minutes. Estimated entry fee: ₹40. Tips: Hire an ASI certified guide for detailed architectural explanations ",
        "tags": [
          "khajuraho",
          "khajuraho",
          "madhya pradesh",
          "history",
          "western group of temples & kandariya mahadeva",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-khajuraho-culture-logistics",
    "destination": "Khajuraho",
    "title": "Culture, Food & Transportation Guide for Khajuraho",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Khajuraho",
        "content": "Cultural highlights of Khajuraho, Madhya Pradesh: Khajuraho Dance Festival in February. Kandariya Mahadeva Temple friezes. Recognized destination category: Historical Monuments & Heritage. Known aliases: Khajuraho Temples, Kandariya Mahadeva.",
        "tags": [
          "khajuraho",
          "khajuraho",
          "madhya pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Khajuraho",
        "content": "Renowned food and dining specialties in Khajuraho: Raja Cafe Western Group (Indian & Continental Lunch): Famous for Authentic Bundelkhandi Thali with Dal Bafla and fresh lime soda. Avg cost per person: ₹300.",
        "tags": [
          "khajuraho",
          "khajuraho",
          "madhya pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Khajuraho",
        "content": "Reaching Khajuraho, Madhya Pradesh: Nearest Airport: Khajuraho Airport (HJR) in city. Nearest Railway: Khajuraho Railway Station (KURJ). Road Connectivity: NH 39 from Jhansi and Satna.",
        "tags": [
          "khajuraho",
          "khajuraho",
          "madhya pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-bhopal-sanchi-attractions",
    "destination": "Bhopal & Sanchi",
    "title": "Top Attractions, Sights & Overview of Bhopal & Sanchi",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Bhopal & Sanchi",
        "content": "Bhopal & Sanchi is a premier destination in Madhya Pradesh. City of Lakes & UNESCO Sanchi Stupa - Ashokan Heritage & Upper Lake. Description: Capital of MP known for its majestic historic mosques and Upper Lake, alongside the ancient 3rd-century BCE Great Stupa of Sanchi commissioned by Emperor Ashoka. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: History, Culture, Sightseeing, Food. Official Tourism: https://www.mptourism.com.",
        "tags": [
          "bhopal & sanchi",
          "bhopal & sanchi",
          "madhya pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "The Great Stupa of Sanchi (History)",
        "content": "Oldest stone structure in India commissioned by Emperor Ashoka, featuring four exquisitely carved stone gateways (Toranas). Location: Bhopal & Sanchi. Estimated visit duration: 150 minutes. Estimated entry fee: ₹40. Tips: Walk around the perimeter terrace clockwise ",
        "tags": [
          "bhopal & sanchi",
          "bhopal & sanchi",
          "madhya pradesh",
          "history",
          "the great stupa of sanchi",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-bhopal-sanchi-culture-logistics",
    "destination": "Bhopal & Sanchi",
    "title": "Culture, Food & Transportation Guide for Bhopal & Sanchi",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Bhopal & Sanchi",
        "content": "Cultural highlights of Bhopal & Sanchi, Madhya Pradesh: UNESCO Great Stupa of Sanchi stone toranas. Bhimbetka Stone Age cave paintings (45 km). Bhopali Paan & street food. Recognized destination category: Historical Monuments & Heritage. Known aliases: Bhopal, Sanchi, Great Stupa Sanchi.",
        "tags": [
          "bhopal & sanchi",
          "bhopal & sanchi",
          "madhya pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Bhopal & Sanchi",
        "content": "Renowned food and dining specialties in Bhopal & Sanchi: Manohar Dairy & Restaurant (Central Indian & Sweets Lunch): Famous for Bhopali Poha Jalebi, Chhole Bhature and Rabdi Malpua. Avg cost per person: ₹200.",
        "tags": [
          "bhopal & sanchi",
          "bhopal & sanchi",
          "madhya pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Bhopal & Sanchi",
        "content": "Reaching Bhopal & Sanchi, Madhya Pradesh: Nearest Airport: Raja Bhoj Airport, Bhopal (BHO). Nearest Railway: Bhopal Junction (BPL) & Rani Kamlapati (RKMP). Road Connectivity: NH 46 and NH 146 to Sanchi.",
        "tags": [
          "bhopal & sanchi",
          "bhopal & sanchi",
          "madhya pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-indore-ujjain-attractions",
    "destination": "Indore & Ujjain",
    "title": "Top Attractions, Sights & Overview of Indore & Ujjain",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Indore & Ujjain",
        "content": "Indore & Ujjain is a premier destination in Madhya Pradesh. Cleanest City of India & Mahakaleshwar Jyotirlinga - Midnight Sarafa Bazar. Description: Indore, India’s cleanest city and street food capital, paired with ancient Ujjain, sacred city of Lord Mahakaleshwar along the Shipra River. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: Food, Temples, History, Culture. Official Tourism: https://www.mptourism.com.",
        "tags": [
          "indore & ujjain",
          "indore & ujjain",
          "madhya pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Shri Mahakaleshwar Jyotirlinga Temple & Mahakal Lok (Temples)",
        "content": "One of the 12 sacred Jyotirlingas with a south-facing lingam (Dakshinamurti) and the grand 900-meter Mahakal Lok corridor. Location: Indore & Ujjain. Estimated visit duration: 180 minutes. Estimated entry fee: ₹0. Tips: Book online Bhasma Aarti tokens weeks in advance ",
        "tags": [
          "indore & ujjain",
          "indore & ujjain",
          "madhya pradesh",
          "temples",
          "shri mahakaleshwar jyotirlinga temple & mahakal lok",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Sarafa Night Food Market (Food)",
        "content": "Famous jewelry bazaar that transforms after 9 PM into a bustling open-air night market serving 50+ unique street delicacies. Location: Indore & Ujjain. Estimated visit duration: 120 minutes. Estimated entry fee: ₹250. Tips: Must taste Bhutte Ka Kees, Garadu and oversized Malpua ",
        "tags": [
          "indore & ujjain",
          "indore & ujjain",
          "madhya pradesh",
          "food",
          "sarafa night food market",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-indore-ujjain-culture-logistics",
    "destination": "Indore & Ujjain",
    "title": "Culture, Food & Transportation Guide for Indore & Ujjain",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Indore & Ujjain",
        "content": "Cultural highlights of Indore & Ujjain, Madhya Pradesh: Bhasma Aarti at Mahakaleshwar Temple at 4 AM. Sarafa midnight jewelry street transformed into food paradise. Chappan Dukan street treats. Recognized destination category: Religious & Pilgrimage. Known aliases: Indore, Ujjain, Mahakal, Sarafa Bazar.",
        "tags": [
          "indore & ujjain",
          "indore & ujjain",
          "madhya pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Indore & Ujjain",
        "content": "Renowned food and dining specialties in Indore & Ujjain: Chappan Dukan Food Street (Indori Street Food Lunch): Famous for Johny Hot Dog, Khopra Patties and Shikanji. Avg cost per person: ₹180.",
        "tags": [
          "indore & ujjain",
          "indore & ujjain",
          "madhya pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Indore & Ujjain",
        "content": "Reaching Indore & Ujjain, Madhya Pradesh: Nearest Airport: Devi Ahilyabai Holkar Airport, Indore (IDR). Nearest Railway: Indore Junction (INDB) & Ujjain Junction (UJN). Road Connectivity: 4-lane Indore-Ujjain expressway (55 km).",
        "tags": [
          "indore & ujjain",
          "indore & ujjain",
          "madhya pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-mumbai-attractions",
    "destination": "Mumbai",
    "title": "Top Attractions, Sights & Overview of Mumbai",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Mumbai",
        "content": "Mumbai is a premier destination in Maharashtra. City of Dreams - Gateway of India, Marine Drive, Bollywood & Elephanta. Description: India’s bustling financial and entertainment capital on the Arabian Sea, famed for Victorian Gothic architecture, coastal boulevards, street snacks, and film culture. Best time to visit: October to March. Recommended trip duration: 4 days. Popular travel interests: Food, History, Culture, Sightseeing, Shopping. Official Tourism: https://www.maharashtratourism.gov.in.",
        "tags": [
          "mumbai",
          "mumbai",
          "maharashtra",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Gateway of India & Taj Mahal Palace (History)",
        "content": "Iconic 26-meter basalt arch built in 1924 overlooking Mumbai Harbour, fronting the historic Taj Mahal Palace Hotel. Location: Mumbai. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Take harbour ferry boats to Elephanta Caves right from the jetty ",
        "tags": [
          "mumbai",
          "mumbai",
          "maharashtra",
          "history",
          "gateway of india & taj mahal palace",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Marine Drive & Chowpatty Beach Promenade (Sightseeing)",
        "content": "3.6-kilometer C-shaped coastal boulevard known as the Queen’s Necklace, bustling with walkers and sunset crowds. Location: Mumbai. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Sit on the sea-facing promenade wall during golden hour ",
        "tags": [
          "mumbai",
          "mumbai",
          "maharashtra",
          "sightseeing",
          "marine drive & chowpatty beach promenade",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-mumbai-culture-logistics",
    "destination": "Mumbai",
    "title": "Culture, Food & Transportation Guide for Mumbai",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Mumbai",
        "content": "Cultural highlights of Mumbai, Maharashtra: UNESCO CSMT Victorian Gothic terminus. Ferry ride to Elephanta Caves rock art. Marine Drive Queen’s Necklace evening breeze. Recognized destination category: Major Cities & Towns. Known aliases: Bombay, Maximum City, City of Dreams.",
        "tags": [
          "mumbai",
          "mumbai",
          "maharashtra",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Mumbai",
        "content": "Renowned food and dining specialties in Mumbai: Cannon Pav Bhaji CSMT (Maharashtrian Street Food Lunch): Famous for Buttery Pav Bhaji with special 60-year-old spice blend recipe. Avg cost per person: ₹150.",
        "tags": [
          "mumbai",
          "mumbai",
          "maharashtra",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Mumbai",
        "content": "Reaching Mumbai, Maharashtra: Nearest Airport: Chhatrapati Shivaji Maharaj International Airport (BOM) in city. Nearest Railway: Chhatrapati Shivaji Maharaj Terminus (CSMT) & Mumbai Central. Road Connectivity: Mumbai-Pune Expressway and coastal NH 66.",
        "tags": [
          "mumbai",
          "mumbai",
          "maharashtra",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-pune-attractions",
    "destination": "Pune",
    "title": "Top Attractions, Sights & Overview of Pune",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Pune",
        "content": "Pune is a premier destination in Maharashtra. Oxford of the East - Maratha Empire Capital, Shaniwar Wada & Sinhagad Fort. Description: Cultural capital of Maharashtra blending Maratha Peshwa history, hilltop fortress treks, Osho International Ashram, and vibrant student-driven cafe culture. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Culture, Food, Adventure. Official Tourism: https://www.maharashtratourism.gov.in.",
        "tags": [
          "pune",
          "pune",
          "maharashtra",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Shaniwar Wada Palace Fortress (History)",
        "content": "Historic seat of the Peshwa rulers of the Maratha Empire built in 1732 featuring fortified teak gates and fountain courtyards. Location: Pune. Estimated visit duration: 90 minutes. Estimated entry fee: ₹25. Tips: Attend the evening sound and light show ",
        "tags": [
          "pune",
          "pune",
          "maharashtra",
          "history",
          "shaniwar wada palace fortress",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-pune-culture-logistics",
    "destination": "Pune",
    "title": "Culture, Food & Transportation Guide for Pune",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Pune",
        "content": "Cultural highlights of Pune, Maharashtra: Shaniwar Wada 18th-century Peshwa palace ruins. Misal Pav breakfast trails in Sadashiv Peth. Aga Khan Palace memorial. Recognized destination category: Major Cities & Towns. Known aliases: Poona, Cultural Capital of Maharashtra.",
        "tags": [
          "pune",
          "pune",
          "maharashtra",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Pune",
        "content": "Renowned food and dining specialties in Pune: Kattakirrr Misal (Maharashtrian Breakfast): Famous for Fiery Kolhapuri Misal Pav served with fresh curd and pav. Avg cost per person: ₹120.",
        "tags": [
          "pune",
          "pune",
          "maharashtra",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Pune",
        "content": "Reaching Pune, Maharashtra: Nearest Airport: Pune International Airport (PNQ) in Lohegaon. Nearest Railway: Pune Junction (PUNE). Road Connectivity: Mumbai-Pune Expressway (2 hours).",
        "tags": [
          "pune",
          "pune",
          "maharashtra",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-lonavala-khandala-attractions",
    "destination": "Lonavala & Khandala",
    "title": "Top Attractions, Sights & Overview of Lonavala & Khandala",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Lonavala & Khandala",
        "content": "Lonavala & Khandala is a premier destination in Maharashtra. Jewels of the Sahyadri - Karla Caves, Tiger’s Leap & Famous Chikki. Description: Popular twin hill stations in the Western Ghats famous for monsoon waterfalls, Karla and Bhaja rock-cut Buddhist caves, and artisanal sweet chikki. Best time to visit: July to September & October to March. Recommended trip duration: 2 days. Popular travel interests: Nature, Adventure, History. Official Tourism: https://www.maharashtratourism.gov.in.",
        "tags": [
          "lonavala & khandala",
          "lonavala & khandala",
          "maharashtra",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Karla Caves Buddhist Complex (History)",
        "content": "Ancient rock-cut caves featuring India’s largest preserved Chaitya hall with carved teak timber roof ribs and ashokan pillars. Location: Lonavala & Khandala. Estimated visit duration: 120 minutes. Estimated entry fee: ₹25. Tips: Climb the 350 stone steps in morning hours ",
        "tags": [
          "lonavala & khandala",
          "lonavala & khandala",
          "maharashtra",
          "history",
          "karla caves buddhist complex",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-lonavala-khandala-culture-logistics",
    "destination": "Lonavala & Khandala",
    "title": "Culture, Food & Transportation Guide for Lonavala & Khandala",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Lonavala & Khandala",
        "content": "Cultural highlights of Lonavala & Khandala, Maharashtra: Karla Caves 2nd-century BCE Chaitya hall. Maganlal Lonavala Chikki sweets. Tiger’s Leap clifftop viewpoint. Recognized destination category: Hill Stations & Mountains. Known aliases: Lonavala, Khandala, Karla Caves.",
        "tags": [
          "lonavala & khandala",
          "lonavala & khandala",
          "maharashtra",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Lonavala & Khandala",
        "content": "Renowned food and dining specialties in Lonavala & Khandala: Maganlal Chikki Heritage Store (Maharashtrian Sweets Snacks): Famous for Fresh peanut, cashew and crushed dry-fruit Chikki. Avg cost per person: ₹100.",
        "tags": [
          "lonavala & khandala",
          "lonavala & khandala",
          "maharashtra",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Lonavala & Khandala",
        "content": "Reaching Lonavala & Khandala, Maharashtra: Nearest Airport: Pune Airport (70 km) / Mumbai (85 km). Nearest Railway: Lonavala Railway Station (LNL). Road Connectivity: Directly on Mumbai-Pune Expressway.",
        "tags": [
          "lonavala & khandala",
          "lonavala & khandala",
          "maharashtra",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-ajanta-ellora-attractions",
    "destination": "Chhatrapati Sambhajinagar (Ajanta & Ellora)",
    "title": "Top Attractions, Sights & Overview of Chhatrapati Sambhajinagar (Ajanta & Ellora)",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Chhatrapati Sambhajinagar (Ajanta & Ellora)",
        "content": "Chhatrapati Sambhajinagar (Ajanta & Ellora) is a premier destination in Maharashtra. UNESCO Monolithic Wonders - Kailash Temple & Ajanta Fresco Caves. Description: Home of the jaw-dropping Kailash Temple at Ellora carved out of a single rock cliff, alongside 30 rock-cut Buddhist mural caves at Ajanta dating to 2nd century BCE. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: History, Architecture, Culture, Photography. Official Tourism: https://www.maharashtratourism.gov.in.",
        "tags": [
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "maharashtra",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Kailash Temple (Ellora Cave 16) (History)",
        "content": "The largest monolithic rock-cut monument in the world, carved downwards from a basalt cliff using 200,000 tonnes of excavated rock. Location: Chhatrapati Sambhajinagar (Ajanta & Ellora). Estimated visit duration: 180 minutes. Estimated entry fee: ₹40. Tips: Closed on Tuesdays; visit early morning for best lighting ",
        "tags": [
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "maharashtra",
          "history",
          "kailash temple (ellora cave 16)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-ajanta-ellora-culture-logistics",
    "destination": "Chhatrapati Sambhajinagar (Ajanta & Ellora)",
    "title": "Culture, Food & Transportation Guide for Chhatrapati Sambhajinagar (Ajanta & Ellora)",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Chhatrapati Sambhajinagar (Ajanta & Ellora)",
        "content": "Cultural highlights of Chhatrapati Sambhajinagar (Ajanta & Ellora), Maharashtra: Monolithic Kailash Temple (Cave 16) carved top-to-bottom. Ancient Ajanta Jataka tale mural paintings. Himroo shawls & Naan Qalia. Recognized destination category: Historical Monuments & Heritage. Known aliases: Aurangabad, Ajanta Caves, Ellora Caves, Kailash Temple.",
        "tags": [
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "maharashtra",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Chhatrapati Sambhajinagar (Ajanta & Ellora)",
        "content": "Renowned food and dining specialties in Chhatrapati Sambhajinagar (Ajanta & Ellora): Yelli Naan Qalia Kitchen (Mughlai & Deccani Dinner): Famous for Slow-cooked Naan Qalia served with hot tandoori fermented bread. Avg cost per person: ₹250.",
        "tags": [
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "maharashtra",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Chhatrapati Sambhajinagar (Ajanta & Ellora)",
        "content": "Reaching Chhatrapati Sambhajinagar (Ajanta & Ellora), Maharashtra: Nearest Airport: Chhatrapati Sambhajinagar Airport (IXU) in city. Nearest Railway: Aurangabad Railway Station (AWB). Road Connectivity: Connected via Samruddhi Mahamarg Expressway.",
        "tags": [
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "chhatrapati sambhajinagar (ajanta & ellora)",
          "maharashtra",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-imphal-attractions",
    "destination": "Imphal",
    "title": "Top Attractions, Sights & Overview of Imphal",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Imphal",
        "content": "Imphal is a premier destination in Manipur. Heart of Manipur - Kangla Fort, Ima Keithel Women’s Market & Polo Heritage. Description: Scenic capital city nestled in a lush valley, famous for the historic Kangla Fort, the world-famous all-women Ima Keithel market, and being the birthplace of modern polo (Sagol Kangjei). Best time to visit: October to April. Recommended trip duration: 2 days. Popular travel interests: History, Culture, Shopping, Food. Official Tourism: https://manipurtourism.gov.in.",
        "tags": [
          "imphal",
          "imphal",
          "manipur",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Kangla Fort & Royal Palace (History)",
        "content": "Ancient seat of the Meitei rulers surrounded by scenic moats, housing royal coronation halls, Govindaji temple ruins, and sacred shrines. Location: Imphal. Estimated visit duration: 120 minutes. Estimated entry fee: ₹20. Tips: Rent a bicycle at the main gate to explore the expansive fort grounds ",
        "tags": [
          "imphal",
          "imphal",
          "manipur",
          "history",
          "kangla fort & royal palace",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Ima Keithel (Mother’s Market) (Shopping)",
        "content": "Asia’s largest unique market managed entirely by married women traders selling vibrant Phanek textiles, indigenous herbs, fresh lake fish, and handicrafts. Location: Imphal. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Taste local black rice baked snacks and buy handloom shawls ",
        "tags": [
          "imphal",
          "imphal",
          "manipur",
          "shopping",
          "ima keithel (mother’s market)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-imphal-culture-logistics",
    "destination": "Imphal",
    "title": "Culture, Food & Transportation Guide for Imphal",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Imphal",
        "content": "Cultural highlights of Imphal, Manipur: Ima Keithel - 500-year-old market run exclusively by 5,000+ women. Manipuri Classical Raas Leela dance. Sagol Kangjei indigenous polo grounds. Recognized destination category: Major Cities & Towns. Known aliases: Kangla, Sanaleipak.",
        "tags": [
          "imphal",
          "imphal",
          "manipur",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Imphal",
        "content": "Renowned food and dining specialties in Imphal: Luxmi Kitchen (Manipuri Meitei Lunch): Famous for Traditional Manipuri Thali with Chak-Hao Kheer (Black Rice Pudding), Eromba, and Singju salad. Avg cost per person: ₹250.",
        "tags": [
          "imphal",
          "imphal",
          "manipur",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Imphal",
        "content": "Reaching Imphal, Manipur: Nearest Airport: Bir Tikendrajit International Airport, Imphal (IMF) - 7 km. Nearest Railway: Dimapur Railway Station (200 km) / Jiribam Station. Road Connectivity: Connected via NH 2 and NH 37.",
        "tags": [
          "imphal",
          "imphal",
          "manipur",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-loktak-lake-attractions",
    "destination": "Loktak Lake & Keibul Lamjao",
    "title": "Top Attractions, Sights & Overview of Loktak Lake & Keibul Lamjao",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Loktak Lake & Keibul Lamjao",
        "content": "Loktak Lake & Keibul Lamjao is a premier destination in Manipur. World’s Only Floating National Park & Dancing Sangai Deer. Description: The largest natural freshwater lake in Northeast India, famous for phumdis (floating circular biomass islands) and Keibul Lamjao, the world’s sole floating national park housing endangered Sangai brow-antlered deer. Best time to visit: November to March. Recommended trip duration: 2 days. Popular travel interests: Wildlife, Nature, Photography. Official Tourism: https://manipurtourism.gov.in.",
        "tags": [
          "loktak lake & keibul lamjao",
          "loktak lake & keibul lamjao",
          "manipur",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Sendra Island Viewpoint & Boat Safari (Nature)",
        "content": "Elevated island hill offering 360-degree vistas of the circular green phumdis floating on azure waters, paired with traditional wooden boat rides. Location: Loktak Lake & Keibul Lamjao. Estimated visit duration: 150 minutes. Estimated entry fee: ₹200. Tips: Take an early morning canoe ride through the maze of floating biomass rings ",
        "tags": [
          "loktak lake & keibul lamjao",
          "loktak lake & keibul lamjao",
          "manipur",
          "nature",
          "sendra island viewpoint & boat safari",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-loktak-lake-culture-logistics",
    "destination": "Loktak Lake & Keibul Lamjao",
    "title": "Culture, Food & Transportation Guide for Loktak Lake & Keibul Lamjao",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Loktak Lake & Keibul Lamjao",
        "content": "Cultural highlights of Loktak Lake & Keibul Lamjao, Manipur: Endangered Sangai dancing deer in their native marsh habitat. Fishermen living on floating phumdi homestays. INA War Museum in Moirang where Indian flag was first unfurled in 1944. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Loktak, Keibul Lamjao, Sendra Island, Moirang.",
        "tags": [
          "loktak lake & keibul lamjao",
          "loktak lake & keibul lamjao",
          "manipur",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Loktak Lake & Keibul Lamjao",
        "content": "Renowned food and dining specialties in Loktak Lake & Keibul Lamjao: Sendra Heritage Cafe (Manipuri Lake Speciality Lunch): Famous for Fresh lake fish curry with lotus stems and steaming aromatic indigenous rice. Avg cost per person: ₹300.",
        "tags": [
          "loktak lake & keibul lamjao",
          "loktak lake & keibul lamjao",
          "manipur",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Loktak Lake & Keibul Lamjao",
        "content": "Reaching Loktak Lake & Keibul Lamjao, Manipur: Nearest Airport: Imphal Airport (45 km). Nearest Railway: Dimapur / Silchar. Road Connectivity: 45 km scenic drive from Imphal via Tiddim Road NH 2.",
        "tags": [
          "loktak lake & keibul lamjao",
          "loktak lake & keibul lamjao",
          "manipur",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-shillong-attractions",
    "destination": "Shillong",
    "title": "Top Attractions, Sights & Overview of Shillong",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Shillong",
        "content": "Shillong is a premier destination in Meghalaya. Scotland of the East - Pine Hills, Cascading Waterfalls & Indie Rock Music. Description: Charming capital hill station perched at 1,525 meters, celebrated for rolling pine slopes, Umiam Lake, Elephant Falls, cafe culture, and vibrant Khasi indigenous music. Best time to visit: September to May. Recommended trip duration: 3 days. Popular travel interests: Nature, Music, Culture, Photography. Official Tourism: https://www.meghalayatourism.in.",
        "tags": [
          "shillong",
          "shillong",
          "meghalaya",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Elephant Falls (Nature)",
        "content": "Spectacular three-tiered waterfall cascading over dark fern-draped rocks, easily accessible through stone pathways. Location: Shillong. Estimated visit duration: 90 minutes. Estimated entry fee: ₹30. Tips: Visit in the morning when morning rays illuminate the third fall mist ",
        "tags": [
          "shillong",
          "shillong",
          "meghalaya",
          "nature",
          "elephant falls",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Umiam Lake (Barapani) (Nature)",
        "content": "Vast emerald reservoir framed by coniferous forested hills, offering kayaking, speedboating, and picturesque lakeside sunset strolls. Location: Shillong. Estimated visit duration: 120 minutes. Estimated entry fee: ₹50. Tips: Great spot for photography and tranquil pine forest walks ",
        "tags": [
          "shillong",
          "shillong",
          "meghalaya",
          "nature",
          "umiam lake (barapani)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-shillong-culture-logistics",
    "destination": "Shillong",
    "title": "Culture, Food & Transportation Guide for Shillong",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Shillong",
        "content": "Cultural highlights of Shillong, Meghalaya: Khasi matrilineal traditions. Live indie acoustic music scene. Ward’s Lake colonial gardens & Shillong Peak. Recognized destination category: Hill Stations & Mountains. Known aliases: Scotland of the East, Umiam.",
        "tags": [
          "shillong",
          "shillong",
          "meghalaya",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Shillong",
        "content": "Renowned food and dining specialties in Shillong: Cafe Shillong (Khasi & Continental Dinner): Famous for Smoked Pork with bamboo shoot, roasted chicken steak, and local Meghalaya ginger tea. Avg cost per person: ₹450.",
        "tags": [
          "shillong",
          "shillong",
          "meghalaya",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Shillong",
        "content": "Reaching Shillong, Meghalaya: Nearest Airport: Shillong Umroi Airport (30 km) / Guwahati Airport (120 km). Nearest Railway: Guwahati Railway Station (GHY) - 100 km. Road Connectivity: 4-lane expressway NH 6 from Guwahati.",
        "tags": [
          "shillong",
          "shillong",
          "meghalaya",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-cherrapunji-attractions",
    "destination": "Cherrapunji & Nongriat",
    "title": "Top Attractions, Sights & Overview of Cherrapunji & Nongriat",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Cherrapunji & Nongriat",
        "content": "Cherrapunji & Nongriat is a premier destination in Meghalaya. Land of Rainclouds - Double Decker Living Root Bridges & Nohkalikai Falls. Description: Fabled clifftop tableland world-renowned for torrential monsoon rains, deep canyon gorges, Nohkalikai Falls (India’s tallest plunge waterfall), and the botanical marvel of centuries-old bioengineered living root bridges in Nongriat. Best time to visit: September to April (Sightseeing) / June to August (Monsoon spectacle). Recommended trip duration: 2 days. Popular travel interests: Adventure, Nature, Trekking, Photography. Official Tourism: https://www.meghalayatourism.in.",
        "tags": [
          "cherrapunji & nongriat",
          "cherrapunji & nongriat",
          "meghalaya",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Nohkalikai Falls Viewpoint (Nature)",
        "content": "Dramatic 1,115-foot direct plunge waterfall dropping from red sandstone cliffs into an intense emerald-turquoise plunge pool. Location: Cherrapunji & Nongriat. Estimated visit duration: 90 minutes. Estimated entry fee: ₹20. Tips: Visit mid-morning after early mist clears for unobstructed gorge views ",
        "tags": [
          "cherrapunji & nongriat",
          "cherrapunji & nongriat",
          "meghalaya",
          "nature",
          "nohkalikai falls viewpoint",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Nongriat Double Decker Living Root Bridge (Adventure)",
        "content": "Iconic two-tier natural bridge woven by Khasi tribes from living rubber tree roots across the roaring Umshiang River, reached via a 3,000-step rainforest trek. Location: Cherrapunji & Nongriat. Estimated visit duration: 300 minutes. Estimated entry fee: ₹50. Tips: Carry trekking poles and refillable water bottles; take a dip in Rainbow Falls natural pool ",
        "tags": [
          "cherrapunji & nongriat",
          "cherrapunji & nongriat",
          "meghalaya",
          "adventure",
          "nongriat double decker living root bridge",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-cherrapunji-culture-logistics",
    "destination": "Cherrapunji & Nongriat",
    "title": "Culture, Food & Transportation Guide for Cherrapunji & Nongriat",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Cherrapunji & Nongriat",
        "content": "Cultural highlights of Cherrapunji & Nongriat, Meghalaya: Khasi bioengineered Ficus elastica living root bridges. Limestone Mawsmai and Arwah spelunking caves. Seven Sisters Falls. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Sohra, Nohkalikai, Double Decker Root Bridge, Nongriat.",
        "tags": [
          "cherrapunji & nongriat",
          "cherrapunji & nongriat",
          "meghalaya",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Cherrapunji & Nongriat",
        "content": "Renowned food and dining specialties in Cherrapunji & Nongriat: Orange Roots (Pure Veg & Thali) (North & South Indian Thali Lunch): Famous for Deluxe vegetarian thali and steaming masala tea overlooking Sohra canyons. Avg cost per person: ₹220.",
        "tags": [
          "cherrapunji & nongriat",
          "cherrapunji & nongriat",
          "meghalaya",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Cherrapunji & Nongriat",
        "content": "Reaching Cherrapunji & Nongriat, Meghalaya: Nearest Airport: Guwahati (150 km) / Shillong (54 km). Nearest Railway: Guwahati Junction (145 km). Road Connectivity: Spectacular cloud-shrouded highway SH 5 from Shillong.",
        "tags": [
          "cherrapunji & nongriat",
          "cherrapunji & nongriat",
          "meghalaya",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-dawki-mawlynnong-attractions",
    "destination": "Dawki & Mawlynnong",
    "title": "Top Attractions, Sights & Overview of Dawki & Mawlynnong",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Dawki & Mawlynnong",
        "content": "Dawki & Mawlynnong is a premier destination in Meghalaya. Crystal Umngot Waters & Asia’s Cleanest Eco-Village. Description: Border paradise renowned for the Umngot River where water is so glass-transparent that wooden boats appear floating in mid-air, paired with Mawlynnong, recognized as Asia’s cleanest village. Best time to visit: November to April. Recommended trip duration: 2 days. Popular travel interests: Nature, Boating, Culture, Photography. Official Tourism: https://www.meghalayatourism.in.",
        "tags": [
          "dawki & mawlynnong",
          "dawki & mawlynnong",
          "meghalaya",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Umngot River Glass Boating & Shnongpdeng (Nature)",
        "content": "Country boat ride gliding over crystal clear riverbed stones visible up to 20 feet deep, framed by lush jungle riverbanks. Location: Dawki & Mawlynnong. Estimated visit duration: 120 minutes. Estimated entry fee: ₹800. Tips: Winter months (Dec-Feb) offer the absolute clearest water clarity ",
        "tags": [
          "dawki & mawlynnong",
          "dawki & mawlynnong",
          "meghalaya",
          "nature",
          "umngot river glass boating & shnongpdeng",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-dawki-mawlynnong-culture-logistics",
    "destination": "Dawki & Mawlynnong",
    "title": "Culture, Food & Transportation Guide for Dawki & Mawlynnong",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Dawki & Mawlynnong",
        "content": "Cultural highlights of Dawki & Mawlynnong, Meghalaya: Crystal glass boating on Umngot River. Spotless bamboo-lined streets and living root bridge in Mawlynnong. Indo-Bangladesh friendship gate. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Dawki River, Umngot, Mawlynnong Village, Shnongpdeng.",
        "tags": [
          "dawki & mawlynnong",
          "dawki & mawlynnong",
          "meghalaya",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Dawki & Mawlynnong",
        "content": "Renowned food and dining specialties in Dawki & Mawlynnong: Shnongpdeng Riverfront Tribal Diner (Khasi Local Lunch): Famous for Freshly caught river fish fry with Jadoh rice and seasonal bamboo chutney. Avg cost per person: ₹250.",
        "tags": [
          "dawki & mawlynnong",
          "dawki & mawlynnong",
          "meghalaya",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Dawki & Mawlynnong",
        "content": "Reaching Dawki & Mawlynnong, Meghalaya: Nearest Airport: Shillong (85 km) / Guwahati (175 km). Nearest Railway: Guwahati (170 km). Road Connectivity: Scenic southern highway through Pynursla.",
        "tags": [
          "dawki & mawlynnong",
          "dawki & mawlynnong",
          "meghalaya",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-aizawl-attractions",
    "destination": "Aizawl",
    "title": "Top Attractions, Sights & Overview of Aizawl",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Aizawl",
        "content": "Aizawl is a premier destination in Mizoram. Highland Citadel of Peace - Solomon’s Temple, Durtlang Hills & Bamboo Culture. Description: Charming ridge-top capital situated at 1,132 meters, known for its tranquil traffic discipline (honk-free streets), Solomon’s Temple, vibrant Bara Bazar, and sweeping panoramic views of the Tlawng River valley. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: Culture, Nature, Photography. Official Tourism: https://tourism.mizoram.gov.in.",
        "tags": [
          "aizawl",
          "aizawl",
          "mizoram",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Durtlang Hills Clifftop Viewpoint (Nature)",
        "content": "Dramatic rocky ridge offering sweeping panoramic vistas of the pastel-colored houses of Aizawl sprawling across the ridgeline. Location: Aizawl. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Visit at sunrise to see clouds blanket the surrounding river valleys below ",
        "tags": [
          "aizawl",
          "aizawl",
          "mizoram",
          "nature",
          "durtlang hills clifftop viewpoint",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-aizawl-culture-logistics",
    "destination": "Aizawl",
    "title": "Culture, Food & Transportation Guide for Aizawl",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Aizawl",
        "content": "Cultural highlights of Aizawl, Mizoram: Cheraw bamboo dance. Bara Bazar handloom Puan skirts. Solomon’s white marble Temple. Recognized destination category: Hill Stations & Mountains. Known aliases: Zoram, Durtlang.",
        "tags": [
          "aizawl",
          "aizawl",
          "mizoram",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Aizawl",
        "content": "Renowned food and dining specialties in Aizawl: Red Pepper Heritage Kitchen (Traditional Mizo Dinner): Famous for Bai (steamed pork with seasonal vegetables and fermented bamboo shoot) and Sawhchiar. Avg cost per person: ₹250.",
        "tags": [
          "aizawl",
          "aizawl",
          "mizoram",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Aizawl",
        "content": "Reaching Aizawl, Mizoram: Nearest Airport: Lengpui Airport, Aizawl (AJL) - 32 km. Nearest Railway: Bairabi Railway Station (130 km) / Silchar (170 km). Road Connectivity: NH 54 connects Aizawl to Silchar in Assam.",
        "tags": [
          "aizawl",
          "aizawl",
          "mizoram",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-reiek-attractions",
    "destination": "Reiek Heritage Village",
    "title": "Top Attractions, Sights & Overview of Reiek Heritage Village",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Reiek Heritage Village",
        "content": "Reiek Heritage Village is a premier destination in Mizoram. Mist-Shrouded Peak & Traditional Mizo Village Heritage. Description: Spectacular mountain peak rising to 1,548 meters offering cliff edge trekking, pristine cloud seas, and a living museum of traditional Mizo thatched huts and chieftain residences. Best time to visit: October to April. Recommended trip duration: 2 days. Popular travel interests: Trekking, Culture, Nature, Adventure. Official Tourism: https://tourism.mizoram.gov.in.",
        "tags": [
          "reiek heritage village",
          "reiek heritage village",
          "mizoram",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Reiek Tlang Summit Trek (Adventure)",
        "content": "Moderate 45-minute nature trail through sub-tropical forests opening into windswept grassy ridge with breathtaking sheer vertical cliffs. Location: Reiek Heritage Village. Estimated visit duration: 180 minutes. Estimated entry fee: ₹20. Tips: Wear sturdy trekking shoes; stay cautious near unfenced cliff edges ",
        "tags": [
          "reiek heritage village",
          "reiek heritage village",
          "mizoram",
          "adventure",
          "reiek tlang summit trek",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-reiek-culture-logistics",
    "destination": "Reiek Heritage Village",
    "title": "Culture, Food & Transportation Guide for Reiek Heritage Village",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Reiek Heritage Village",
        "content": "Cultural highlights of Reiek Heritage Village, Mizoram: Anthurium Festival celebrations. Preserved replica of 18th-century Mizo tribal village. Sheer rocky precipices overlooking Bangladesh plains. Recognized destination category: Adventure & Trekking. Known aliases: Reiek Tlang, Reiek Peak.",
        "tags": [
          "reiek heritage village",
          "reiek heritage village",
          "mizoram",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Reiek Heritage Village",
        "content": "Renowned food and dining specialties in Reiek Heritage Village: Reiek Tourist Lodge Canteen (Mizo & Indian Lunch): Famous for Hot aromatic Mizo chicken stew with mountain leafy greens. Avg cost per person: ₹200.",
        "tags": [
          "reiek heritage village",
          "reiek heritage village",
          "mizoram",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Reiek Heritage Village",
        "content": "Reaching Reiek Heritage Village, Mizoram: Nearest Airport: Lengpui Airport (40 km). Nearest Railway: Silchar (180 km). Road Connectivity: 29 km scenic hill road from Aizawl.",
        "tags": [
          "reiek heritage village",
          "reiek heritage village",
          "mizoram",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-kohima-attractions",
    "destination": "Kohima",
    "title": "Top Attractions, Sights & Overview of Kohima",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Kohima",
        "content": "Kohima is a premier destination in Nagaland. Land of Warriors & Hornbill Festival - WWII War Cemetery & Kisama Heritage. Description: Historic Naga hilltop capital at 1,444 meters, renowned for the poignant WWII Commonwealth War Cemetery, Naga heritage villages, Kisama Heritage Complex (home of the legendary Hornbill Festival), and Angami crafts. Best time to visit: October to May (December 1-10 for Hornbill Festival). Recommended trip duration: 3 days. Popular travel interests: Culture, History, Festivals, Food. Official Tourism: https://tourism.nagaland.gov.in.",
        "tags": [
          "kohima",
          "kohima",
          "nagaland",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Kohima Commonwealth War Cemetery (History)",
        "content": "Serene terraced lawn memorial on Garrison Hill honoring Allied soldiers who halted the Japanese advance in the pivotal 1944 Battle of Kohima. Location: Kohima. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Read the famous Kohima Epitaph inscribed at the base ",
        "tags": [
          "kohima",
          "kohima",
          "nagaland",
          "history",
          "kohima commonwealth war cemetery",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Kisama Naga Heritage Village (History)",
        "content": "Authentic permanent village featuring traditional Morung bachelor dormitories, carved wooden totem pillars, and ceremonial festival grounds. Location: Kohima. Estimated visit duration: 150 minutes. Estimated entry fee: ₹50. Tips: Visit the World War II museum located inside the complex ",
        "tags": [
          "kohima",
          "kohima",
          "nagaland",
          "history",
          "kisama naga heritage village",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-kohima-culture-logistics",
    "destination": "Kohima",
    "title": "Culture, Food & Transportation Guide for Kohima",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Kohima",
        "content": "Cultural highlights of Kohima, Nagaland: Hornbill Festival showcasing 17 indigenous Naga tribes. WWII Battle of Kohima memorial (\"When you go home, tell them of us\"). Khonoma Green Village - India’s first green village. Recognized destination category: Hill Stations & Mountains. Known aliases: Kisama, Naga Hills.",
        "tags": [
          "kohima",
          "kohima",
          "nagaland",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Kohima",
        "content": "Renowned food and dining specialties in Kohima: Dream Cafe & Naga Kitchen (Traditional Naga Lunch): Famous for Smoked Pork cooked with Axone (fermented soybean) and Raja Mircha (Bhut Jolokia). Avg cost per person: ₹300.",
        "tags": [
          "kohima",
          "kohima",
          "nagaland",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Kohima",
        "content": "Reaching Kohima, Nagaland: Nearest Airport: Dimapur Airport (DMU) - 74 km. Nearest Railway: Dimapur Railway Station (DMV) - 72 km. Road Connectivity: NH 29 connects Dimapur to Kohima.",
        "tags": [
          "kohima",
          "kohima",
          "nagaland",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-dzukou-valley-attractions",
    "destination": "Dzukou Valley",
    "title": "Top Attractions, Sights & Overview of Dzukou Valley",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Dzukou Valley",
        "content": "Dzukou Valley is a premier destination in Nagaland. Valley of Flowers of the East - Emerald Rolling Hills & Rare Dzukou Lilies. Description: High-altitude wonderland sitting at 2,452 meters along the Nagaland-Manipur border, famous for undulating carpeted green knolls, serpentine streams, cave camping, and endemic pink Dzukou lilies. Best time to visit: June to September (Flowers) / October to March (Clear skies and frost). Recommended trip duration: 2 days. Popular travel interests: Trekking, Adventure, Nature, Photography. Official Tourism: https://tourism.nagaland.gov.in.",
        "tags": [
          "dzukou valley",
          "dzukou valley",
          "nagaland",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Dzukou Valley Alpine Trail (Adventure)",
        "content": "Iconic trek via Viswema trail leading through dense bamboo dwarf forests onto a vast amphitheater of emerald rolling hillocks. Location: Dzukou Valley. Estimated visit duration: 360 minutes. Estimated entry fee: ₹100. Tips: Hire a local Angami guide and carry a sleeping bag for the dormitory rest house ",
        "tags": [
          "dzukou valley",
          "dzukou valley",
          "nagaland",
          "adventure",
          "dzukou valley alpine trail",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-dzukou-valley-culture-logistics",
    "destination": "Dzukou Valley",
    "title": "Culture, Food & Transportation Guide for Dzukou Valley",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Dzukou Valley",
        "content": "Cultural highlights of Dzukou Valley, Nagaland: Rare Dzukou Lily blossoming in monsoon. Natural rock caves used by trekkers for fire campouts. Pristine frozen winter landscapes. Recognized destination category: Adventure & Trekking. Known aliases: Dzukou, Japfu Range.",
        "tags": [
          "dzukou valley",
          "dzukou valley",
          "nagaland",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Dzukou Valley",
        "content": "Renowned food and dining specialties in Dzukou Valley: Dzukou Rest House Canteen (Rustic Camp Meal Dinner): Famous for Hot boiled local rice, spicy dal, and roasted potato mash with Naga chili paste. Avg cost per person: ₹150.",
        "tags": [
          "dzukou valley",
          "dzukou valley",
          "nagaland",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Dzukou Valley",
        "content": "Reaching Dzukou Valley, Nagaland: Nearest Airport: Dimapur Airport (95 km). Nearest Railway: Dimapur Junction (90 km). Road Connectivity: Drive from Kohima to Viswema or Jakhama village base points.",
        "tags": [
          "dzukou valley",
          "dzukou valley",
          "nagaland",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-puri-attractions",
    "destination": "Puri",
    "title": "Top Attractions, Sights & Overview of Puri",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Puri",
        "content": "Puri is a premier destination in Odisha. Spiritual Coastal Haven - Sacred Jagannath Temple & Golden Beach. Description: One of the four sacred Char Dham pilgrimage sites, celebrated for the 12th-century Shree Jagannath Temple, the world-famous annual Ratha Yatra (Chariot Festival), and blue-flag certified Golden Beach sands. Best time to visit: October to March (July for Ratha Yatra). Recommended trip duration: 3 days. Popular travel interests: Temples, Beaches, Culture, Food. Official Tourism: https://odishatourism.gov.in.",
        "tags": [
          "puri",
          "puri",
          "odisha",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Shree Jagannath Temple (Temples)",
        "content": "Majestic 65-meter high Kalinga-style temple consecrated to Lord Jagannath, Balabhadra, and Subhadra featuring India’s largest traditional kitchen. Location: Puri. Estimated visit duration: 180 minutes. Estimated entry fee: ₹0. Tips: Phones and leather items prohibited inside; taste hot Ananda Bazar Mahaprasad ",
        "tags": [
          "puri",
          "puri",
          "odisha",
          "temples",
          "shree jagannath temple",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Puri Golden Beach (Blue Flag) (Beaches)",
        "content": "Pristine, certified clean sandy beach famous for sand art sculptures by Sudarsan Pattnaik and colorful camel rides. Location: Puri. Estimated visit duration: 120 minutes. Estimated entry fee: ₹20. Tips: Visit early evening to see sand art creations and taste fresh jhalmuri ",
        "tags": [
          "puri",
          "puri",
          "odisha",
          "beaches",
          "puri golden beach (blue flag)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-puri-culture-logistics",
    "destination": "Puri",
    "title": "Culture, Food & Transportation Guide for Puri",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Puri",
        "content": "Cultural highlights of Puri, Odisha: Lord Jagannath Mahaprasad (56 Bhog cooked in clay pots). Blue Flag Golden Beach promenade. Pipili applique lampshade village nearby. Recognized destination category: Religious & Pilgrimage. Known aliases: Jagannath Puri, Srikshetra, Shankhakshetra.",
        "tags": [
          "puri",
          "puri",
          "odisha",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Puri",
        "content": "Renowned food and dining specialties in Puri: Ananda Bazar (Jagannath Temple Complex) (Sacred Odia Temple Mahaprasad Lunch): Famous for Abadha (steamed rice, sweet dal, potal rasa, and Khaja sweets baked in clay pots). Avg cost per person: ₹150.",
        "tags": [
          "puri",
          "puri",
          "odisha",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Puri",
        "content": "Reaching Puri, Odisha: Nearest Airport: Biju Patnaik International Airport, Bhubaneswar (BBI) - 60 km. Nearest Railway: Puri Railway Station (PURI) in town. Road Connectivity: 4-lane National Highway NH 316 from Bhubaneswar.",
        "tags": [
          "puri",
          "puri",
          "odisha",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-konark-attractions",
    "destination": "Konark",
    "title": "Top Attractions, Sights & Overview of Konark",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Konark",
        "content": "Konark is a premier destination in Odisha. UNESCO Sun Temple - 13th-Century Architectural Chariot Marvel. Description: Home of the colossal 13th-century UNESCO World Heritage Sun Temple engineered as a monumental stone chariot with 24 elaborately carved sun-dial wheels pulled by seven horses, alongside serene Chandrabhaga Beach. Best time to visit: October to March (December for Konark Dance Festival). Recommended trip duration: 2 days. Popular travel interests: History, Architecture, Photography, Beaches. Official Tourism: https://odishatourism.gov.in.",
        "tags": [
          "konark",
          "konark",
          "odisha",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Konark Sun Temple & Archaeological Museum (History)",
        "content": "Colossal stone chariot temple dedicated to Surya the Sun God, decorated with intricate bas-relief carvings of celestial musicians, lions, and everyday medieval life. Location: Konark. Estimated visit duration: 150 minutes. Estimated entry fee: ₹40. Tips: Hire a licensed guide to explain the astronomical calculation on the 24 wheels ",
        "tags": [
          "konark",
          "konark",
          "odisha",
          "history",
          "konark sun temple & archaeological museum",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-konark-culture-logistics",
    "destination": "Konark",
    "title": "Culture, Food & Transportation Guide for Konark",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Konark",
        "content": "Cultural highlights of Konark, Odisha: Ornate sundial wheels telling exact time to the minute. Annual Konark Classical Dance Festival against the illuminated temple facade. Chandrabhaga sunrise beach. Recognized destination category: Historical Monuments & Heritage. Known aliases: Sun Temple, Black Pagoda, Chandrabhaga.",
        "tags": [
          "konark",
          "konark",
          "odisha",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Konark",
        "content": "Renowned food and dining specialties in Konark: Kammat Heritage Diner (Traditional Odia Lunch): Famous for Chhena Poda (baked caramelized cheese dessert) and Odia Dalma thali. Avg cost per person: ₹200.",
        "tags": [
          "konark",
          "konark",
          "odisha",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Konark",
        "content": "Reaching Konark, Odisha: Nearest Airport: Bhubaneswar Airport (65 km). Nearest Railway: Puri Railway Station (35 km). Road Connectivity: Spectacular Marine Drive road along the coast from Puri.",
        "tags": [
          "konark",
          "konark",
          "odisha",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-bhubaneswar-attractions",
    "destination": "Bhubaneswar",
    "title": "Top Attractions, Sights & Overview of Bhubaneswar",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Bhubaneswar",
        "content": "Bhubaneswar is a premier destination in Odisha. Temple City of India - Lingaraj Temple & Ancient Udayagiri Rock Caves. Description: Capital of Odisha blending modern smart infrastructure with over 500 historic sandstone temples, including 11th-century Lingaraj, Rajarani temple, and the ancient Jain rock-cut caves of Udayagiri and Khandagiri. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Temples, Food, Culture. Official Tourism: https://odishatourism.gov.in.",
        "tags": [
          "bhubaneswar",
          "bhubaneswar",
          "odisha",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Lingaraj Temple Complex (Temples)",
        "content": "Exquisite 180-foot deula tower dominating the Ekamra Kshetra skyline, dedicated to Harihara (Shiva and Vishnu blended). Location: Bhubaneswar. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Non-Hindus can view the temple courtyards from the elevated viewing platform outside ",
        "tags": [
          "bhubaneswar",
          "bhubaneswar",
          "odisha",
          "temples",
          "lingaraj temple complex",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Udayagiri & Khandagiri Rock-Cut Caves (History)",
        "content": "2nd-century BCE rock-cut Jain residential cells and ornate carvings built by King Kharavela featuring the famous Rani Gumpha two-story palace cave. Location: Bhubaneswar. Estimated visit duration: 120 minutes. Estimated entry fee: ₹25. Tips: Beware of friendly monkeys around Khandagiri hill steps ",
        "tags": [
          "bhubaneswar",
          "bhubaneswar",
          "odisha",
          "history",
          "udayagiri & khandagiri rock-cut caves",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-bhubaneswar-culture-logistics",
    "destination": "Bhubaneswar",
    "title": "Culture, Food & Transportation Guide for Bhubaneswar",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Bhubaneswar",
        "content": "Cultural highlights of Bhubaneswar, Odisha: Lingaraj Temple 1,000-year-old Shiva shrine. Pahala Rasagola sweet hub on Cuttack highway. Tribal Research Institute Museum. Recognized destination category: Major Cities & Towns. Known aliases: Temple City, Ekamra Kshetra.",
        "tags": [
          "bhubaneswar",
          "bhubaneswar",
          "odisha",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Bhubaneswar",
        "content": "Renowned food and dining specialties in Bhubaneswar: Dalma Restaurant (Traditional Odia Lunch): Famous for Odia Dalma (lentils simmered with raw papaya and pumpkin), Pakhala Bhata, and Chhena Jhili. Avg cost per person: ₹250.",
        "tags": [
          "bhubaneswar",
          "bhubaneswar",
          "odisha",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Bhubaneswar",
        "content": "Reaching Bhubaneswar, Odisha: Nearest Airport: Biju Patnaik International Airport (BBI) in city center. Nearest Railway: Bhubaneswar Railway Station (BBS). Road Connectivity: Golden Quadrilateral NH 16.",
        "tags": [
          "bhubaneswar",
          "bhubaneswar",
          "odisha",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-amritsar-attractions",
    "destination": "Amritsar",
    "title": "Top Attractions, Sights & Overview of Amritsar",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Amritsar",
        "content": "Amritsar is a premier destination in Punjab. The Golden City - Sri Harmandir Sahib, Wagah Border & Legendary Kulchas. Description: Spiritual and cultural heart of Sikhism, world-renowned for the magnificent 24-karat gold-gilded Sri Harmandir Sahib (Golden Temple), the solemn Jallianwala Bagh memorial, the electrifying Wagah Border retreat ceremony, and mouthwatering buttery Amritsari kulchas. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: Temples, History, Food, Culture. Official Tourism: https://punjabtourism.punjab.gov.in.",
        "tags": [
          "amritsar",
          "amritsar",
          "punjab",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Sri Harmandir Sahib (Golden Temple) (Temples)",
        "content": "The holiest Gurudwara in Sikhism shimmering over the Amrit Sarovar sacred pool, open 24 hours to all people of all backgrounds and faiths. Location: Amritsar. Estimated visit duration: 180 minutes. Estimated entry fee: ₹0. Tips: Cover your head, wash your feet at the entrance, and experience the communal Langar ",
        "tags": [
          "amritsar",
          "amritsar",
          "punjab",
          "temples",
          "sri harmandir sahib (golden temple)",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Wagah Border Beating Retreat Ceremony (History)",
        "content": "Electrifying military drill conducted daily at sunset by the Indian Border Security Force (BSF) and Pakistan Rangers with high kicks and martial pageantry. Location: Amritsar. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Reach the stadium by 3:30 PM for good stadium grandstand seats ",
        "tags": [
          "amritsar",
          "amritsar",
          "punjab",
          "history",
          "wagah border beating retreat ceremony",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-amritsar-culture-logistics",
    "destination": "Amritsar",
    "title": "Culture, Food & Transportation Guide for Amritsar",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Amritsar",
        "content": "Cultural highlights of Amritsar, Punjab: World’s largest free community kitchen (Guru Ka Langar) feeding 100,000 people daily. Wagah Border Beating Retreat ceremony at sunset. Phulkari embroidery and Punjabi Juttis in Hall Bazar. Recognized destination category: Religious & Pilgrimage. Known aliases: Golden Temple City, Harmandir Sahib, Ambarsar.",
        "tags": [
          "amritsar",
          "amritsar",
          "punjab",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Amritsar",
        "content": "Renowned food and dining specialties in Amritsar: Bhai Kulwant Singh Kulchian Wale (Punjabi Breakfast Breakfast): Famous for Crispy tandoor-baked Amritsari Aloo Pyaaz Kulcha dripping with homemade butter and chole. Avg cost per person: ₹120. Kesar Da Dhaba (Est. 1916) (Traditional Punjabi Dinner): Famous for Slow-cooked Maa ki Dal (12 hours in pure desi ghee) and Phirni in earthen pots. Avg cost per person: ₹250.",
        "tags": [
          "amritsar",
          "amritsar",
          "punjab",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Amritsar",
        "content": "Reaching Amritsar, Punjab: Nearest Airport: Sri Guru Ram Dass Jee International Airport (ATQ) - 11 km. Nearest Railway: Amritsar Junction (ASR). Road Connectivity: Grand Trunk Road NH 3 from Delhi & Chandigarh.",
        "tags": [
          "amritsar",
          "amritsar",
          "punjab",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-jaipur-attractions",
    "destination": "Jaipur",
    "title": "Top Attractions, Sights & Overview of Jaipur",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Jaipur",
        "content": "Jaipur is a premier destination in Rajasthan. The Pink City - Hawa Mahal, Amer Fort & Royal Rajput Palaces. Description: UNESCO World Heritage capital city renowned for terracotta-pink stone architecture, hilltop Amber Fort, the iconic honeycomb facade of Hawa Mahal, astronomical marvel Jantar Mantar, and bustling Johari handloom bazaars. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: History, Architecture, Shopping, Food. Official Tourism: https://www.tourism.rajasthan.gov.in.",
        "tags": [
          "jaipur",
          "jaipur",
          "rajasthan",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Amber (Amer) Fort & Palace (History)",
        "content": "Majestic 16th-century hill fortress built by Raja Man Singh featuring courtyards of yellow sandstone, marble Sheesh Mahal mirror mosaics, and sweeping ramparts over Maota Lake. Location: Jaipur. Estimated visit duration: 180 minutes. Estimated entry fee: ₹100. Tips: Visit early morning to beat afternoon desert heat; take the jeep ride up ",
        "tags": [
          "jaipur",
          "jaipur",
          "rajasthan",
          "history",
          "amber (amer) fort & palace",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Hawa Mahal (Palace of Winds) (History)",
        "content": "Pyramidal five-story pink sandstone palace adorned with 953 ornate latticed jharokha windows engineered so royal ladies could view street processions undisturbed. Location: Jaipur. Estimated visit duration: 75 minutes. Estimated entry fee: ₹50. Tips: Visit the rooftop cafes across the street for iconic front facade photography ",
        "tags": [
          "jaipur",
          "jaipur",
          "rajasthan",
          "history",
          "hawa mahal (palace of winds)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-jaipur-culture-logistics",
    "destination": "Jaipur",
    "title": "Culture, Food & Transportation Guide for Jaipur",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Jaipur",
        "content": "Cultural highlights of Jaipur, Rajasthan: Amer Fort sheesh mahal (mirror palace). Blue pottery and Block-print textiles in Bapu Bazaar. Authentic Dal Baati Churma feasts. Recognized destination category: Historical Monuments & Heritage. Known aliases: Pink City, Amer, Amber.",
        "tags": [
          "jaipur",
          "jaipur",
          "rajasthan",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Jaipur",
        "content": "Renowned food and dining specialties in Jaipur: LMB (Laxmi Misthan Bhandar) Johari Bazar (Rajasthani Royal Thali Lunch): Famous for Authentic Dal Baati Churma, Ker Sangri, Gatte ki Sabzi, and hot Ghewar. Avg cost per person: ₹450.",
        "tags": [
          "jaipur",
          "jaipur",
          "rajasthan",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Jaipur",
        "content": "Reaching Jaipur, Rajasthan: Nearest Airport: Jaipur International Airport (JAI) in Sanganer. Nearest Railway: Jaipur Junction (JP). Road Connectivity: Delhi-Jaipur Expressway NH 48 (3.5 hours).",
        "tags": [
          "jaipur",
          "jaipur",
          "rajasthan",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-udaipur-attractions",
    "destination": "Udaipur",
    "title": "Top Attractions, Sights & Overview of Udaipur",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Udaipur",
        "content": "Udaipur is a premier destination in Rajasthan. City of Lakes & Venice of the East - Lake Pichola & Majestic City Palace. Description: Enchanting romantic city nestled among the Aravalli Hills, famous for shimmering Lake Pichola, the whitewashed Lake Palace, the towering City Palace complex, and sunset boat cruises. Best time to visit: September to March. Recommended trip duration: 3 days. Popular travel interests: History, Architecture, Romance, Photography. Official Tourism: https://www.tourism.rajasthan.gov.in.",
        "tags": [
          "udaipur",
          "udaipur",
          "rajasthan",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Udaipur City Palace Complex (History)",
        "content": "Rajasthan’s largest palace complex perched over Lake Pichola, featuring mirror mosaics, marble balconies, peacock courtyards, and royal Mewar museum galleries. Location: Udaipur. Estimated visit duration: 180 minutes. Estimated entry fee: ₹300. Tips: Pair your visit with a boat ride from Rameshwar Ghat to Jag Mandir ",
        "tags": [
          "udaipur",
          "udaipur",
          "rajasthan",
          "history",
          "udaipur city palace complex",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-udaipur-culture-logistics",
    "destination": "Udaipur",
    "title": "Culture, Food & Transportation Guide for Udaipur",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Udaipur",
        "content": "Cultural highlights of Udaipur, Rajasthan: Dharohar folk dance performances at Bagore Ki Haveli. Sunset boat cruise around Jag Mandir island. Miniature Rajput painting ateliers. Recognized destination category: Historical Monuments & Heritage. Known aliases: City of Lakes, Venice of the East, Lake Pichola.",
        "tags": [
          "udaipur",
          "udaipur",
          "rajasthan",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Udaipur",
        "content": "Renowned food and dining specialties in Udaipur: Ambrai Waterfront Restaurant (Mewari & North Indian Dinner): Famous for Mewari Laal Maas and butter naan with illuminated night views of City Palace across Lake Pichola. Avg cost per person: ₹600.",
        "tags": [
          "udaipur",
          "udaipur",
          "rajasthan",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Udaipur",
        "content": "Reaching Udaipur, Rajasthan: Nearest Airport: Maharana Pratap Airport (UDR) - 22 km. Nearest Railway: Udaipur City Railway Station (UDZ). Road Connectivity: NH 58 and NH 48.",
        "tags": [
          "udaipur",
          "udaipur",
          "rajasthan",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-jaisalmer-attractions",
    "destination": "Jaisalmer",
    "title": "Top Attractions, Sights & Overview of Jaisalmer",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Jaisalmer",
        "content": "Jaisalmer is a premier destination in Rajasthan. The Golden City - Living Sandstone Fort & Thar Desert Sam Sand Dunes. Description: Breathtaking desert jewel rising out of the Great Thar Desert, famous for Sonar Qila (a living golden sandstone fort housing 4,000 residents), camel safaris across rolling Sam sand dunes, and sunset desert camps. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: Adventure, History, Culture, Photography. Official Tourism: https://www.tourism.rajasthan.gov.in.",
        "tags": [
          "jaisalmer",
          "jaisalmer",
          "rajasthan",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Jaisalmer Fort (Sonar Qila) (History)",
        "content": "12th-century golden sandstone bastion crowned by 99 watchtowers, containing ancient royal palace museum and 7 medieval Jain temples. Location: Jaisalmer. Estimated visit duration: 180 minutes. Estimated entry fee: ₹100. Tips: Walk through the narrow cobblestone alleys inside the living fort ",
        "tags": [
          "jaisalmer",
          "jaisalmer",
          "rajasthan",
          "history",
          "jaisalmer fort (sonar qila)",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Sam Sand Dunes Camel Safari (Adventure)",
        "content": "Vast expanse of wind-rippled desert dunes offering golden hour camel treks, quad biking, and sunset cultural folk campouts. Location: Jaisalmer. Estimated visit duration: 180 minutes. Estimated entry fee: ₹500. Tips: Book an overnight desert Swiss tent camp with stargazing ",
        "tags": [
          "jaisalmer",
          "jaisalmer",
          "rajasthan",
          "adventure",
          "sam sand dunes camel safari",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-jaisalmer-culture-logistics",
    "destination": "Jaisalmer",
    "title": "Culture, Food & Transportation Guide for Jaisalmer",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Jaisalmer",
        "content": "Cultural highlights of Jaisalmer, Rajasthan: Sonar Qila - One of the world’s very few living forts with shops, homes, and Jain temples inside. Kalbelia folk music and fire dance in desert camps. Patwon Ki Haveli filigree stone carvings. Recognized destination category: Adventure & Trekking. Known aliases: Golden City, Sonar Qila, Thar Desert, Sam Dunes.",
        "tags": [
          "jaisalmer",
          "jaisalmer",
          "rajasthan",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Jaisalmer",
        "content": "Renowned food and dining specialties in Jaisalmer: The Trio Restaurant (Mandir Palace View) (Rajasthani Desert Cuisine Dinner): Famous for Ker Sangri (wild desert beans), Bajra Roti with garlic chutney, and Laal Maas. Avg cost per person: ₹400.",
        "tags": [
          "jaisalmer",
          "jaisalmer",
          "rajasthan",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Jaisalmer",
        "content": "Reaching Jaisalmer, Rajasthan: Nearest Airport: Jaisalmer Airport (JSA) in city. Nearest Railway: Jaisalmer Railway Station (JSM). Road Connectivity: NH 11 from Jodhpur (4.5 hours).",
        "tags": [
          "jaisalmer",
          "jaisalmer",
          "rajasthan",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-gangtok-attractions",
    "destination": "Gangtok",
    "title": "Top Attractions, Sights & Overview of Gangtok",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Gangtok",
        "content": "Gangtok is a premier destination in Sikkim. Capital of the Eastern Himalayas - Kanchenjunga Vistas & Buddhist Monasteries. Description: Clean mountain capital set on a steep ridge at 1,650 meters, renowned for unobstructed views of Mount Kanchenjunga, Rumtek Monastery, vehicle-free MG Marg promenade, and alpine cable cars. Best time to visit: March to May & October to mid-December. Recommended trip duration: 3 days. Popular travel interests: Nature, Culture, Temples, Photography. Official Tourism: https://www.sikkimtourism.gov.in.",
        "tags": [
          "gangtok",
          "gangtok",
          "sikkim",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Rumtek Monastery (Dharma Chakra Centre) (Temples)",
        "content": "Venerated Tibetan Buddhist monastery showcasing rare golden stupas, centuries-old thangkas, and monk chanting rituals. Location: Gangtok. Estimated visit duration: 120 minutes. Estimated entry fee: ₹20. Tips: Visit during morning prayer hours (around 9 AM) to witness horn instruments and chanting ",
        "tags": [
          "gangtok",
          "gangtok",
          "sikkim",
          "temples",
          "rumtek monastery (dharma chakra centre)",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "MG Marg Walking Boulevard (Shopping)",
        "content": "Lively pedestrian-only cobblestone boulevard decorated with flowerbeds, Victorian streetlamps, souvenir boutiques, and cafes. Location: Gangtok. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Completely litter-free and smoke-free zone; enjoy hot steamed momos ",
        "tags": [
          "gangtok",
          "gangtok",
          "sikkim",
          "shopping",
          "mg marg walking boulevard",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-gangtok-culture-logistics",
    "destination": "Gangtok",
    "title": "Culture, Food & Transportation Guide for Gangtok",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Gangtok",
        "content": "Cultural highlights of Gangtok, Sikkim: Rumtek Dharma Chakra Centre - seat of the Karmapa. Organic clean mountain lifestyle (India’s first 100% organic state). Flower Exhibition Centre orchids. Recognized destination category: Hill Stations & Mountains. Known aliases: MG Marg Gangtok, Rumtek.",
        "tags": [
          "gangtok",
          "gangtok",
          "sikkim",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Gangtok",
        "content": "Renowned food and dining specialties in Gangtok: Taste of Tibet (MG Marg) (Tibetan & Sikkimese Dinner): Famous for Steamed Beef/Chicken Momos, Thukpa noodle soup, and Gyathuk. Avg cost per person: ₹220.",
        "tags": [
          "gangtok",
          "gangtok",
          "sikkim",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Gangtok",
        "content": "Reaching Gangtok, Sikkim: Nearest Airport: Pakyong Airport (PYG) - 30 km / Bagdogra Airport (IXB) - 124 km. Nearest Railway: New Jalpaiguri Junction (NJP) - 120 km. Road Connectivity: NH 10 connects Siliguri to Gangtok along Teesta River.",
        "tags": [
          "gangtok",
          "gangtok",
          "sikkim",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-tsomgo-nathula-attractions",
    "destination": "Tsomgo Lake & Nathu La Pass",
    "title": "Top Attractions, Sights & Overview of Tsomgo Lake & Nathu La Pass",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Tsomgo Lake & Nathu La Pass",
        "content": "Tsomgo Lake & Nathu La Pass is a premier destination in Sikkim. Glacial Holy Lake & Historic Silk Route Indo-China Border at 14,140 Feet. Description: High-altitude wonderland featuring sacred glacial Tsomgo Lake at 12,310 feet, Yak rides, and Nathu La Pass on the historic Old Silk Route along the Indo-China international border. Best time to visit: March to May (Snow/Rhododendrons) & October to November (Crystal clarity). Recommended trip duration: 1 days. Popular travel interests: Adventure, Nature, Photography. Official Tourism: https://www.sikkimtourism.gov.in.",
        "tags": [
          "tsomgo lake & nathu la pass",
          "tsomgo lake & nathu la pass",
          "sikkim",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Tsomgo (Changu) Glacial Lake (Nature)",
        "content": "Breathtaking 1-km long alpine oval lake fed by melting glaciers, surrounded by jagged snow-covered peaks with decorated shaggy yaks along the banks. Location: Tsomgo Lake & Nathu La Pass. Estimated visit duration: 120 minutes. Estimated entry fee: ₹200. Tips: Apply for Protected Area Permit (PAP) one day in advance via registered tour agency in Gangtok ",
        "tags": [
          "tsomgo lake & nathu la pass",
          "tsomgo lake & nathu la pass",
          "sikkim",
          "nature",
          "tsomgo (changu) glacial lake",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-tsomgo-nathula-culture-logistics",
    "destination": "Tsomgo Lake & Nathu La Pass",
    "title": "Culture, Food & Transportation Guide for Tsomgo Lake & Nathu La Pass",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Tsomgo Lake & Nathu La Pass",
        "content": "Cultural highlights of Tsomgo Lake & Nathu La Pass, Sikkim: Sacred lake revered by Lamas with waters reflecting changing seasonal hues. Historic Old Silk Route border trade post with Chinese soldiers visible across the wire fence. Baba Harbhajan Singh memorial shrine. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Changu Lake, Nathu La, Baba Mandir.",
        "tags": [
          "tsomgo lake & nathu la pass",
          "tsomgo lake & nathu la pass",
          "sikkim",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Tsomgo Lake & Nathu La Pass",
        "content": "Renowned food and dining specialties in Tsomgo Lake & Nathu La Pass: Lake View Yak Canteen (Mountain Tiffin Lunch): Famous for Steaming Maggi noodles, hot butter tea, and boiled eggs in high-altitude cold. Avg cost per person: ₹100.",
        "tags": [
          "tsomgo lake & nathu la pass",
          "tsomgo lake & nathu la pass",
          "sikkim",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Tsomgo Lake & Nathu La Pass",
        "content": "Reaching Tsomgo Lake & Nathu La Pass, Sikkim: Nearest Airport: Bagdogra (165 km) / Pakyong (60 km). Nearest Railway: NJP (160 km). Road Connectivity: Jawaharlal Nehru Road from Gangtok (requires Protected Area Permit).",
        "tags": [
          "tsomgo lake & nathu la pass",
          "tsomgo lake & nathu la pass",
          "sikkim",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-ooty-attractions",
    "destination": "Ooty (Udhagamandalam)",
    "title": "Top Attractions, Sights & Overview of Ooty (Udhagamandalam)",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Ooty (Udhagamandalam)",
        "content": "Ooty (Udhagamandalam) is a premier destination in Tamil Nadu. Queen of Hill Stations - Nilgiri Mountain Toy Train & Doddabetta Peak. Description: Premier hill resort in the Nilgiri Hills at 2,240 meters, famous for the UNESCO Nilgiri Mountain Railway steam toy train, vast tea estates, Government Botanical Gardens, and fragrant eucalyptus forests. Best time to visit: October to June. Recommended trip duration: 3 days. Popular travel interests: Nature, Trekking, Culture, Photography. Official Tourism: https://www.tamilnadutourism.tn.gov.in.",
        "tags": [
          "ooty (udhagamandalam)",
          "ooty (udhagamandalam)",
          "tamil nadu",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Government Botanical Gardens (Nature)",
        "content": "Vast 55-acre terraced botanical sanctuary established in 1848, home to over a thousand exotic plant species, a 20-million-year-old fossilized tree trunk, and Italian gardens. Location: Ooty (Udhagamandalam). Estimated visit duration: 120 minutes. Estimated entry fee: ₹40. Tips: Visit early to experience morning mist lifting off the manicured glasshouse lawns ",
        "tags": [
          "ooty (udhagamandalam)",
          "ooty (udhagamandalam)",
          "tamil nadu",
          "nature",
          "government botanical gardens",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Doddabetta Peak & Telescope House (Nature)",
        "content": "The highest point in the Nilgiri Mountains at 2,637 meters, offering telescope viewing chambers with panoramic views over Bandipur forests and Coimbatore plains. Location: Ooty (Udhagamandalam). Estimated visit duration: 90 minutes. Estimated entry fee: ₹20. Tips: Carry warm clothing as summit winds can be chilly even in summer ",
        "tags": [
          "ooty (udhagamandalam)",
          "ooty (udhagamandalam)",
          "tamil nadu",
          "nature",
          "doddabetta peak & telescope house",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-ooty-culture-logistics",
    "destination": "Ooty (Udhagamandalam)",
    "title": "Culture, Food & Transportation Guide for Ooty (Udhagamandalam)",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Ooty (Udhagamandalam)",
        "content": "Cultural highlights of Ooty (Udhagamandalam), Tamil Nadu: UNESCO heritage steam toy train crossing viaduct bridges and tunnels. Toda tribal bamboo embroidery and round barrel huts. Nilgiri tea and homemade artisanal chocolates. Recognized destination category: Hill Stations & Mountains. Known aliases: Udhagai, Nilgiris, Queen of Hills.",
        "tags": [
          "ooty (udhagamandalam)",
          "ooty (udhagamandalam)",
          "tamil nadu",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Ooty (Udhagamandalam)",
        "content": "Renowned food and dining specialties in Ooty (Udhagamandalam): Nahar’s Sidewalk Cafe & Chandan (South Indian & Italian Lunch): Famous for Wood-fired thin crust pizzas, South Indian thali, and homemade Nilgiri hot chocolate. Avg cost per person: ₹300.",
        "tags": [
          "ooty (udhagamandalam)",
          "ooty (udhagamandalam)",
          "tamil nadu",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Ooty (Udhagamandalam)",
        "content": "Reaching Ooty (Udhagamandalam), Tamil Nadu: Nearest Airport: Coimbatore International Airport (CJB) - 88 km. Nearest Railway: Udhagamandalam Railway Station (UAM) / Mettupalayam (MTP) - 51 km. Road Connectivity: Hairpin bend ghat road NH 181 from Coimbatore.",
        "tags": [
          "ooty (udhagamandalam)",
          "ooty (udhagamandalam)",
          "tamil nadu",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-madurai-attractions",
    "destination": "Madurai",
    "title": "Top Attractions, Sights & Overview of Madurai",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Madurai",
        "content": "Madurai is a premier destination in Tamil Nadu. The Cultural Soul of Tamil Nadu - Meenakshi Amman Temple & Jigarthanda. Description: One of the oldest continuously inhabited cities in the world, renowned for the colossal 14-tower Meenakshi Sundareswarar Temple complex, 1,000-pillar hall, night bedtime ceremonies, and refreshing Jigarthanda dessert. Best time to visit: October to March (April for Chithirai Festival). Recommended trip duration: 2 days. Popular travel interests: Temples, History, Culture, Food. Official Tourism: https://www.tamilnadutourism.tn.gov.in.",
        "tags": [
          "madurai",
          "madurai",
          "tamil nadu",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Arulmigu Meenakshi Sundareswarar Temple (Temples)",
        "content": "Architectural wonder featuring 14 towering gopurams encrusted with thousands of brightly painted stucco mythological deities, sacred Golden Lotus pond, and musical pillars. Location: Madurai. Estimated visit duration: 180 minutes. Estimated entry fee: ₹0. Tips: Phones and cameras are prohibited inside; attend the 9:00 PM evening procession of Lord Sundareswarar ",
        "tags": [
          "madurai",
          "madurai",
          "tamil nadu",
          "temples",
          "arulmigu meenakshi sundareswarar temple",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-madurai-culture-logistics",
    "destination": "Madurai",
    "title": "Culture, Food & Transportation Guide for Madurai",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Madurai",
        "content": "Cultural highlights of Madurai, Tamil Nadu: Meenakshi Temple 1,000-pillar hall and daily night Palliarai ceremony (9:00 PM). Famous GI-tagged Madurai Malli (Jasmine flowers). Thirumalai Nayakkar Palace light & sound show. Recognized destination category: Religious & Pilgrimage. Known aliases: Thoonga Nagaram (City that never sleeps), Temple City.",
        "tags": [
          "madurai",
          "madurai",
          "tamil nadu",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Madurai",
        "content": "Renowned food and dining specialties in Madurai: Famous Jigarthanda Stall (Since 1977) (Madurai Special Dessert Snacks): Famous for Royal Special Jigarthanda with almond gum, condensed milk, nannari syrup, and basundi ice cream. Avg cost per person: ₹70. Murugan Idli Shop (West Masi Street) (Traditional South Indian Breakfast): Famous for Ultra-soft steamed idlis served with four distinct coconut, tomato, and mint chutneys and hot sambar. Avg cost per person: ₹120.",
        "tags": [
          "madurai",
          "madurai",
          "tamil nadu",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Madurai",
        "content": "Reaching Madurai, Tamil Nadu: Nearest Airport: Madurai International Airport (IXM) - 12 km. Nearest Railway: Madurai Junction (MDU). Road Connectivity: Golden Quadrilateral NH 44 and NH 38.",
        "tags": [
          "madurai",
          "madurai",
          "tamil nadu",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-chennai-attractions",
    "destination": "Chennai",
    "title": "Top Attractions, Sights & Overview of Chennai",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Chennai",
        "content": "Chennai is a premier destination in Tamil Nadu. Gateway to South India - Marina Beach, Kapaleeshwarar Temple & Carnatic Music. Description: Vibrant cultural coastal capital renowned for Marina Beach (one of the world’s longest natural urban beaches), 7th-century Kapaleeshwarar Temple in Mylapore, colonial Fort St. George, and UNESCO Mahabalipuram shore temples nearby. Best time to visit: November to February (Margazhi music season in Dec-Jan). Recommended trip duration: 3 days. Popular travel interests: History, Culture, Beaches, Food. Official Tourism: https://www.tamilnadutourism.tn.gov.in.",
        "tags": [
          "chennai",
          "chennai",
          "tamil nadu",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Arulmigu Kapaleeshwarar Temple, Mylapore (Temples)",
        "content": "Magnificent Dravidian temple dedicated to Lord Shiva featuring a rainbow-hued 120-foot gopuram, ancient sacred pond, and peacocks in the courtyards. Location: Chennai. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Walk through the surrounding Mylapore temple car streets for fresh filter coffee and silk sarees ",
        "tags": [
          "chennai",
          "chennai",
          "tamil nadu",
          "temples",
          "arulmigu kapaleeshwarar temple, mylapore",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Marina Beach Promenade (Beaches)",
        "content": "Vast 13-km sandy coast bustling with sea breezes, historical statues, carousel rides, and stalls serving crispy fresh seafood and sundal. Location: Chennai. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Visit near the lighthouse during golden hour sunset ",
        "tags": [
          "chennai",
          "chennai",
          "tamil nadu",
          "beaches",
          "marina beach promenade",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-chennai-culture-logistics",
    "destination": "Chennai",
    "title": "Culture, Food & Transportation Guide for Chennai",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Chennai",
        "content": "Cultural highlights of Chennai, Tamil Nadu: Margazhi Carnatic classical music and Bharatanatyam dance festival. Degree filter coffee and crispy masala dosas in Mylapore. UNESCO Shore Temples and monolithic rathas in nearby Mahabalipuram. Recognized destination category: Major Cities & Towns. Known aliases: Madras, Mylapore, Marina.",
        "tags": [
          "chennai",
          "chennai",
          "tamil nadu",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Chennai",
        "content": "Renowned food and dining specialties in Chennai: Saravana Bhavan (Mylapore) (Traditional Tamil Tiffins Breakfast): Famous for Crispy Ghee Roast Dosa, Medu Vada, and piping hot brass tumbler Filter Coffee. Avg cost per person: ₹150.",
        "tags": [
          "chennai",
          "chennai",
          "tamil nadu",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Chennai",
        "content": "Reaching Chennai, Tamil Nadu: Nearest Airport: Chennai International Airport (MAA) in Meenambakkam. Nearest Railway: Chennai Central (MAS) & Chennai Egmore (MS). Road Connectivity: Golden Quadrilateral NH 16 and NH 48.",
        "tags": [
          "chennai",
          "chennai",
          "tamil nadu",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-kanyakumari-attractions",
    "destination": "Kanyakumari",
    "title": "Top Attractions, Sights & Overview of Kanyakumari",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Kanyakumari",
        "content": "Kanyakumari is a premier destination in Tamil Nadu. Southernmost Tip of Mainland India - Triveni Sangam, Vivekananda Rock & Thiruvalluvar Statue. Description: The geographic terminus of India where the Arabian Sea, Indian Ocean, and Bay of Bengal converge (Triveni Sangam), celebrated for spectacular simultaneous sunrises and sunsets, the offshore Vivekananda Rock Memorial, and the 133-foot stone statue of saint-poet Thiruvalluvar. Best time to visit: October to March (Chitra Pournami full moon in April-May). Recommended trip duration: 2 days. Popular travel interests: History, Nature, Culture, Photography. Official Tourism: https://www.tamilnadutourism.tn.gov.in.",
        "tags": [
          "kanyakumari",
          "kanyakumari",
          "tamil nadu",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Vivekananda Rock Memorial & Thiruvalluvar Statue (History)",
        "content": "Monumental rock island monument reached via passenger ferry, housing meditation halls overlooking the dramatic meeting point of three seas. Location: Kanyakumari. Estimated visit duration: 150 minutes. Estimated entry fee: ₹70. Tips: Take the first ferry at 8:00 AM to avoid midday ticketing queues and ocean spray winds ",
        "tags": [
          "kanyakumari",
          "kanyakumari",
          "tamil nadu",
          "history",
          "vivekananda rock memorial & thiruvalluvar statue",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-kanyakumari-culture-logistics",
    "destination": "Kanyakumari",
    "title": "Culture, Food & Transportation Guide for Kanyakumari",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Kanyakumari",
        "content": "Cultural highlights of Kanyakumari, Tamil Nadu: Viewing sunset and moonrise simultaneously over three ocean waters on full moon days. Ferry ride to Vivekananda Rock Memorial where Swami Vivekananda meditated in 1892. 3,000-year-old Bhagavathi Amman coastal temple with luminous diamond nose ring. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Cape Comorin, Triveni Sangam, Vivekananda Rock.",
        "tags": [
          "kanyakumari",
          "kanyakumari",
          "tamil nadu",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Kanyakumari",
        "content": "Renowned food and dining specialties in Kanyakumari: Sea View Coastal Restaurant (Tamil Coastal & South Indian Lunch): Famous for Traditional South Indian Fish Thali and coconut payasam. Avg cost per person: ₹250.",
        "tags": [
          "kanyakumari",
          "kanyakumari",
          "tamil nadu",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Kanyakumari",
        "content": "Reaching Kanyakumari, Tamil Nadu: Nearest Airport: Trivandrum International Airport (TRV) - 90 km. Nearest Railway: Kanyakumari Railway Station (CAPE). Road Connectivity: Southern terminus of Grand National Highway NH 44.",
        "tags": [
          "kanyakumari",
          "kanyakumari",
          "tamil nadu",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-hyderabad-attractions",
    "destination": "Hyderabad",
    "title": "Top Attractions, Sights & Overview of Hyderabad",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Hyderabad",
        "content": "Hyderabad is a premier destination in Telangana. City of Pearls & Nizams - Charminar, Golconda Fort & World-Famous Dum Biryani. Description: Dynamic metropolis seamlessly combining 400-year-old Qutb Shahi and Asaf Jahi heritage with cyber cities, world-renowned for the 1591 Charminar, acoustic wonder Golconda Fort, and authentic slow-cooked Hyderabadi Dum Biryani. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: History, Food, Culture, Architecture. Official Tourism: https://tourism.telangana.gov.in.",
        "tags": [
          "hyderabad",
          "hyderabad",
          "telangana",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Charminar & Laad Bazaar (History)",
        "content": "Iconic 16th-century square monument with 4 soaring 56-meter minarets built by Muhammad Quli Qutb Shah, surrounded by vibrant pearl and glass bangle markets. Location: Hyderabad. Estimated visit duration: 120 minutes. Estimated entry fee: ₹25. Tips: Climb the spiral stairs to the upper balcony for sweeping street views; taste Irani chai nearby ",
        "tags": [
          "hyderabad",
          "hyderabad",
          "telangana",
          "history",
          "charminar & laad bazaar",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Golconda Fort Complex (History)",
        "content": "Massive medieval fortress featuring incredible acoustic architecture where a handclap at the entrance portico resonates at the hilltop Bala Hissar pavilion 1 km away. Location: Hyderabad. Estimated visit duration: 180 minutes. Estimated entry fee: ₹25. Tips: Stay for the spectacular evening sound and light show narrated by Amitabh Bachchan ",
        "tags": [
          "hyderabad",
          "hyderabad",
          "telangana",
          "history",
          "golconda fort complex",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-hyderabad-culture-logistics",
    "destination": "Hyderabad",
    "title": "Culture, Food & Transportation Guide for Hyderabad",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Hyderabad",
        "content": "Cultural highlights of Hyderabad, Telangana: Acoustic hand-clap signaling engineering at Golconda Fort. Irani Chai and Osmania biscuits at Nimrah Cafe by Charminar. Laad Bazaar lacquer and pearl bangles. Recognized destination category: Major Cities & Towns. Known aliases: Cyberabad, City of Pearls, Charminar City.",
        "tags": [
          "hyderabad",
          "hyderabad",
          "telangana",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Hyderabad",
        "content": "Renowned food and dining specialties in Hyderabad: Paradise Heritage (Secunderabad - Est. 1953) (Hyderabadi Mughlai Lunch): Famous for World-famous Royal Mutton Dum Biryani with Mirchi ka Salan, Dahi Chutney, and Double ka Meetha. Avg cost per person: ₹350. Nimrah Cafe & Bakery (Beside Charminar) (Irani Bakery Breakfast): Famous for Zaffrani Irani Chai with hot freshly baked melt-in-mouth Osmania biscuits. Avg cost per person: ₹50.",
        "tags": [
          "hyderabad",
          "hyderabad",
          "telangana",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Hyderabad",
        "content": "Reaching Hyderabad, Telangana: Nearest Airport: Rajiv Gandhi International Airport (HYD) in Shamshabad. Nearest Railway: Secunderabad Junction (SC) & Hyderabad Deccan (HYB). Road Connectivity: Intersection of NH 44 and NH 65.",
        "tags": [
          "hyderabad",
          "hyderabad",
          "telangana",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-warangal-attractions",
    "destination": "Warangal",
    "title": "Top Attractions, Sights & Overview of Warangal",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Warangal",
        "content": "Warangal is a premier destination in Telangana. Capital of Kakatiya Dynasty - Thousand Pillar Temple & UNESCO Ramappa Temple. Description: Ancient capital of the Kakatiya rulers, famous for the monolithic stone entrance gates (Kakatiya Thoranam), the 12th-century Thousand Pillar Temple, Warangal Fort, and the UNESCO World Heritage Ramappa Temple engineered with floating bricks. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Architecture, Culture. Official Tourism: https://tourism.telangana.gov.in.",
        "tags": [
          "warangal",
          "warangal",
          "telangana",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Thousand Pillar Temple (Rudreshwara Swamy) (Temples)",
        "content": "12th-century star-shaped Kakatiya masterpiece with intricately carved monolithic granite pillars, dedicated to Shiva, Vishnu, and Surya. Location: Warangal. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Admire the 6-foot monolithic black basalt Nandi bull facing the shrine ",
        "tags": [
          "warangal",
          "warangal",
          "telangana",
          "temples",
          "thousand pillar temple (rudreshwara swamy)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-warangal-culture-logistics",
    "destination": "Warangal",
    "title": "Culture, Food & Transportation Guide for Warangal",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Warangal",
        "content": "Cultural highlights of Warangal, Telangana: UNESCO Ramappa Temple built with lightweight floating terracotta bricks and mirror-polished basalt carvings. Kakatiya Kala Thoranam arch emblem of Telangana state. Bhadrakali temple lake. Recognized destination category: Historical Monuments & Heritage. Known aliases: Orugallu, Hanamkonda, Ramappa.",
        "tags": [
          "warangal",
          "warangal",
          "telangana",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Warangal",
        "content": "Renowned food and dining specialties in Warangal: Kakatiya Heritage Thali Restaurant (Telangana Spicy Specialities Lunch): Famous for Sarva Pindi (spicy rice flour pancake), Jowar Roti, and Bagara Rice with Gongura Mutton. Avg cost per person: ₹220.",
        "tags": [
          "warangal",
          "warangal",
          "telangana",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Warangal",
        "content": "Reaching Warangal, Telangana: Nearest Airport: Hyderabad International Airport (160 km). Nearest Railway: Warangal Railway Station (WL) / Kazipet Junction (KZJ). Road Connectivity: 4-lane National Highway NH 163 from Hyderabad (3 hours).",
        "tags": [
          "warangal",
          "warangal",
          "telangana",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-agartala-attractions",
    "destination": "Agartala & Ujjayanta Palace",
    "title": "Top Attractions, Sights & Overview of Agartala & Ujjayanta Palace",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Agartala & Ujjayanta Palace",
        "content": "Agartala & Ujjayanta Palace is a premier destination in Tripura. Land of Manikya Royalty - Neoclassical Ujjayanta Palace & Neermahal Water Palace. Description: Charming northeastern capital famed for the gleaming white neoclassical Ujjayanta Palace set in Mughal-style gardens, Neermahal (the only water palace in eastern India set inside Rudrasagar Lake), and rich bamboo craftsmanship. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Culture, Architecture. Official Tourism: https://tripuratourism.gov.in.",
        "tags": [
          "agartala & ujjayanta palace",
          "agartala & ujjayanta palace",
          "tripura",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Ujjayanta Palace (Tripura State Museum) (History)",
        "content": "Exquisite 1901 royal palace of the Manikya dynasty featuring ornate neoclassical domes, tiled floors, wooden carved ceilings, and expansive fountain courtyards. Location: Agartala & Ujjayanta Palace. Estimated visit duration: 120 minutes. Estimated entry fee: ₹20. Tips: Visit the museum galleries showcasing Northeast ethnographic tribal artifacts ",
        "tags": [
          "agartala & ujjayanta palace",
          "agartala & ujjayanta palace",
          "tripura",
          "history",
          "ujjayanta palace (tripura state museum)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-agartala-culture-logistics",
    "destination": "Agartala & Ujjayanta Palace",
    "title": "Culture, Food & Transportation Guide for Agartala & Ujjayanta Palace",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Agartala & Ujjayanta Palace",
        "content": "Cultural highlights of Agartala & Ujjayanta Palace, Tripura: Ujjayanta Palace State Museum (named by Nobel Laureate Rabindranath Tagore). Neermahal water castle reached via motorboat across Rudrasagar Lake. Tripura Sundari Matabari 51 Shaktipeeth temple in Udaipur. Recognized destination category: Historical Monuments & Heritage. Known aliases: Tripura Sundari, Ujjayanta, Neermahal.",
        "tags": [
          "agartala & ujjayanta palace",
          "agartala & ujjayanta palace",
          "tripura",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Agartala & Ujjayanta Palace",
        "content": "Renowned food and dining specialties in Agartala & Ujjayanta Palace: Kurry Club & Tribal Kitchen (Tripuri & Bengali Dinner): Famous for Mui Borok (traditional Tripuri berma fermented fish stew) and Chakhwi bamboo dish. Avg cost per person: ₹250.",
        "tags": [
          "agartala & ujjayanta palace",
          "agartala & ujjayanta palace",
          "tripura",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Agartala & Ujjayanta Palace",
        "content": "Reaching Agartala & Ujjayanta Palace, Tripura: Nearest Airport: Maharaja Bir Bikram Airport, Agartala (IXA) - 12 km. Nearest Railway: Agartala Railway Station (AGTL). Road Connectivity: NH 8 connects Tripura to Assam.",
        "tags": [
          "agartala & ujjayanta palace",
          "agartala & ujjayanta palace",
          "tripura",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-unakoti-attractions",
    "destination": "Unakoti Heritage Rock Carvings",
    "title": "Top Attractions, Sights & Overview of Unakoti Heritage Rock Carvings",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Unakoti Heritage Rock Carvings",
        "content": "Unakoti Heritage Rock Carvings is a premier destination in Tripura. Angkor Wat of the North East - One Less Than a Crore Rock Sculptures. Description: Mystical ancient Shaivite pilgrimage site hidden in a forested valley, featuring colossal 7th to 9th-century rock-cut bas-relief sculptures of Lord Shiva (Unakotiswara Kal Bhairava) carved directly into hill precipices. Best time to visit: October to April. Recommended trip duration: 2 days. Popular travel interests: History, Archaeology, Photography, Nature. Official Tourism: https://tripuratourism.gov.in.",
        "tags": [
          "unakoti heritage rock carvings",
          "unakoti heritage rock carvings",
          "tripura",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Unakotiswara Kal Bhairava Rock Reliefs (History)",
        "content": "Colossal stone carvings depicting Shiva with an elaborate headdress, flanked by river goddesses Ganga and Yamuna with a natural mountain stream cascading past. Location: Unakoti Heritage Rock Carvings. Estimated visit duration: 150 minutes. Estimated entry fee: ₹25. Tips: Wear comfortable sneakers to climb stone steps leading up and down the forested gorge ",
        "tags": [
          "unakoti heritage rock carvings",
          "unakoti heritage rock carvings",
          "tripura",
          "history",
          "unakotiswara kal bhairava rock reliefs",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-unakoti-culture-logistics",
    "destination": "Unakoti Heritage Rock Carvings",
    "title": "Culture, Food & Transportation Guide for Unakoti Heritage Rock Carvings",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Unakoti Heritage Rock Carvings",
        "content": "Cultural highlights of Unakoti Heritage Rock Carvings, Tripura: 30-foot tall head of Shiva carved on cliff walls alongside Ganesha and celestial figures. Ashokastami Mela grand tribal gathering. Scenic mountain waterfalls trickling over the carvings. Recognized destination category: Historical Monuments & Heritage. Known aliases: Unakoti Rock Carvings, Kailashahar.",
        "tags": [
          "unakoti heritage rock carvings",
          "unakoti heritage rock carvings",
          "tripura",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Unakoti Heritage Rock Carvings",
        "content": "Renowned food and dining specialties in Unakoti Heritage Rock Carvings: Kailashahar Heritage Canteen (Tripuri & Bengali Thali Lunch): Famous for Fish Kaliya with hot steamed Gobindobhog rice and sweet tomato chutney. Avg cost per person: ₹180.",
        "tags": [
          "unakoti heritage rock carvings",
          "unakoti heritage rock carvings",
          "tripura",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Unakoti Heritage Rock Carvings",
        "content": "Reaching Unakoti Heritage Rock Carvings, Tripura: Nearest Airport: Agartala Airport (178 km). Nearest Railway: Kumarghat Railway Station (20 km). Road Connectivity: Drive from Agartala via NH 8 and NH 208.",
        "tags": [
          "unakoti heritage rock carvings",
          "unakoti heritage rock carvings",
          "tripura",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-varanasi-attractions",
    "destination": "Varanasi",
    "title": "Top Attractions, Sights & Overview of Varanasi",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Varanasi",
        "content": "Varanasi is a premier destination in Uttar Pradesh. The Spiritual Capital of India - Sacred Ganga Ghats, Kashi Vishwanath & Evening Aarti. Description: One of the world’s oldest continuously inhabited sacred cities, renowned for the 84 stone riverfront ghats along the River Ganga, the golden spire of Kashi Vishwanath Temple, the sublime Dashashwamedh evening Ganga Aarti, and Sarnath where Lord Buddha gave his first sermon. Best time to visit: October to March (Dev Deepawali in Nov is magical). Recommended trip duration: 3 days. Popular travel interests: Temples, History, Culture, Photography, Food. Official Tourism: https://www.uptourism.gov.in.",
        "tags": [
          "varanasi",
          "varanasi",
          "uttar pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Kashi Vishwanath Corridor & Golden Temple (Temples)",
        "content": "Revered Jyotirlinga shrine of Lord Shiva recently expanded into a grand marble corridor connecting directly to the holy ghats of the Ganges. Location: Varanasi. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Deposit phones and leather items in designated locker counters before entering ",
        "tags": [
          "varanasi",
          "varanasi",
          "uttar pradesh",
          "temples",
          "kashi vishwanath corridor & golden temple",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Dashashwamedh Ghat Evening Ganga Aarti (History)",
        "content": "Hypnotic synchronized ritual performed by saffron-clad priests swinging tiered brass fire lamps accompanied by conch shells, bells, and Vedic chants. Location: Varanasi. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Hire a wooden rowboat on the river by 5:30 PM for a spectacular floating view of the aarti ",
        "tags": [
          "varanasi",
          "varanasi",
          "uttar pradesh",
          "history",
          "dashashwamedh ghat evening ganga aarti",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-varanasi-culture-logistics",
    "destination": "Varanasi",
    "title": "Culture, Food & Transportation Guide for Varanasi",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Varanasi",
        "content": "Cultural highlights of Varanasi, Uttar Pradesh: Dashashwamedh Ghat daily grand sunset Ganga Aarti with rhythmic brass lamps. Subah-e-Banaras sunrise wooden boat ride watching morning ablutions and sun salutations. Banarasi silk handloom weaving in ancient weavers’ mohallas. Recognized destination category: Religious & Pilgrimage. Known aliases: Kashi, Benares, Banaras, Dashashwamedh Ghat.",
        "tags": [
          "varanasi",
          "varanasi",
          "uttar pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Varanasi",
        "content": "Renowned food and dining specialties in Varanasi: Kashi Chaat Bhandar (Godowlia) (Banarasi Street Food Dinner): Famous for Famous Tamatar Chaat (hot spiced tomato mash served in earthen kulhads), Palak Chaat, and Gulab Jamun. Avg cost per person: ₹100. Blue Lassi Shop (Manikarnika Ghat Lane) (Banarasi Lassi & Dairy Snacks): Famous for Thick creamy hand-churned Malai Lassi topped with fresh pomegranate, rabri, and dry fruits. Avg cost per person: ₹80.",
        "tags": [
          "varanasi",
          "varanasi",
          "uttar pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Varanasi",
        "content": "Reaching Varanasi, Uttar Pradesh: Nearest Airport: Lal Bahadur Shastri International Airport (VNS) in Babatpur - 26 km. Nearest Railway: Varanasi Junction (BSB) & Pt. Deen Dayal Upadhyaya Junction (DDU). Road Connectivity: Grand Trunk Road NH 19.",
        "tags": [
          "varanasi",
          "varanasi",
          "uttar pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-agra-attractions",
    "destination": "Agra",
    "title": "Top Attractions, Sights & Overview of Agra",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Agra",
        "content": "Agra is a premier destination in Uttar Pradesh. City of the Taj Mahal - UNESCO Wonder of the World & Mughal Fortresses. Description: Mughal capital on the banks of Yamuna River, internationally revered for the Taj Mahal (white marble mausoleum built by Shah Jahan), the formidable red sandstone Agra Fort, and the abandoned royal city of Fatehpur Sikri. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Architecture, Romance, Photography. Official Tourism: https://www.uptourism.gov.in.",
        "tags": [
          "agra",
          "agra",
          "uttar pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "The Taj Mahal (History)",
        "content": "UNESCO World Heritage masterpiece of pure white Makrana marble built between 1631 and 1648, featuring flawless symmetry, calligraphy, and four minarets framing the central dome. Location: Agra. Estimated visit duration: 180 minutes. Estimated entry fee: ₹50. Tips: Closed on Fridays; enter at 6:00 AM through the East or West gate for pristine sunrise crowd-free photography ",
        "tags": [
          "agra",
          "agra",
          "uttar pradesh",
          "history",
          "the taj mahal",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Agra Fort (Red Sandstone Citadel) (History)",
        "content": "Imposing 16th-century Mughal fortress containing Jahangiri Mahal, Khas Mahal, Diwan-i-Khas, and the octagonal Musamman Burj tower where Shah Jahan gazed at the Taj. Location: Agra. Estimated visit duration: 120 minutes. Estimated entry fee: ₹50. Tips: Great vantage point of the Taj Mahal framed through arched marble windows ",
        "tags": [
          "agra",
          "agra",
          "uttar pradesh",
          "history",
          "agra fort (red sandstone citadel)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-agra-culture-logistics",
    "destination": "Agra",
    "title": "Culture, Food & Transportation Guide for Agra",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Agra",
        "content": "Cultural highlights of Agra, Uttar Pradesh: Taj Mahal sunrise view with pink-golden morning reflections in the Yamuna. Pietra Dura marble inlay artisan workshops in old Agra lanes. Famous translucent Agra Petha sweets in dozens of flavors. Recognized destination category: Historical Monuments & Heritage. Known aliases: Taj Mahal, Fatehpur Sikri, Akbarabad.",
        "tags": [
          "agra",
          "agra",
          "uttar pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Agra",
        "content": "Renowned food and dining specialties in Agra: Panchi Petha Store (Sadar Bazar) (Agra Confectionery Snacks): Famous for Original Kesar Angoori Petha, Chocolate Petha, and Dalmoth savory namkeen. Avg cost per person: ₹100.",
        "tags": [
          "agra",
          "agra",
          "uttar pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Agra",
        "content": "Reaching Agra, Uttar Pradesh: Nearest Airport: Agra Airport (AGR) / IGI Airport Delhi (210 km). Nearest Railway: Agra Cantt (AGC) - Gatimaan Express connects from Delhi in 100 minutes. Road Connectivity: Yamuna Expressway from Delhi (2.5 hours).",
        "tags": [
          "agra",
          "agra",
          "uttar pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-lucknow-attractions",
    "destination": "Lucknow",
    "title": "Top Attractions, Sights & Overview of Lucknow",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Lucknow",
        "content": "Lucknow is a premier destination in Uttar Pradesh. The City of Nawabs - Bara Imambara, Chikankari & Royal Galouti Kebabs. Description: Refined capital city celebrated for legendary Awadhi hospitality (Tehzeeb), architectural marvels including the gravity-defying unsupported roof of Bara Imambara and its labyrinthine Bhool Bhulaiya, delicate shadow-work Chikankari textiles, and melt-in-the-mouth Galouti kebabs. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: History, Food, Culture, Shopping. Official Tourism: https://www.uptourism.gov.in.",
        "tags": [
          "lucknow",
          "lucknow",
          "uttar pradesh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Bara Imambara & Bhool Bhulaiya (History)",
        "content": "Monumental 1784 hall built by Nawab Asaf-ud-Daula with an arched central hall constructed without any supporting pillars, crowned by a maze of 1,000 interlocking labyrinth corridors. Location: Lucknow. Estimated visit duration: 150 minutes. Estimated entry fee: ₹50. Tips: Hire an official guide to navigate the thrilling upper rooftop labyrinth passages ",
        "tags": [
          "lucknow",
          "lucknow",
          "uttar pradesh",
          "history",
          "bara imambara & bhool bhulaiya",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-lucknow-culture-logistics",
    "destination": "Lucknow",
    "title": "Culture, Food & Transportation Guide for Lucknow",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Lucknow",
        "content": "Cultural highlights of Lucknow, Uttar Pradesh: Bhool Bhulaiya acoustic labyrinth corridors in Bara Imambara. Hand-stitched GI-tagged Lucknowi Chikankari in Aminabad and Chowk. Kathak classical dance Lucknow Gharana traditions. Recognized destination category: Major Cities & Towns. Known aliases: City of Nawabs, Awadh, Bara Imambara.",
        "tags": [
          "lucknow",
          "lucknow",
          "uttar pradesh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Lucknow",
        "content": "Renowned food and dining specialties in Lucknow: Tunday Kababi (Chowk - Est. 1905) (Awadhi Nawabi Dinner): Famous for Original 160-spice soft melt-in-mouth Galouti Kebabs served with flaky Mughlai Ulte Tawe ka Paratha. Avg cost per person: ₹200.",
        "tags": [
          "lucknow",
          "lucknow",
          "uttar pradesh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Lucknow",
        "content": "Reaching Lucknow, Uttar Pradesh: Nearest Airport: Chaudhary Charan Singh International Airport (LKO) in Amausi. Nearest Railway: Lucknow Charbagh (LKO). Road Connectivity: Agra-Lucknow Expressway (connects to Delhi in 5.5 hours).",
        "tags": [
          "lucknow",
          "lucknow",
          "uttar pradesh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-rishikesh-haridwar-attractions",
    "destination": "Rishikesh & Haridwar",
    "title": "Top Attractions, Sights & Overview of Rishikesh & Haridwar",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Rishikesh & Haridwar",
        "content": "Rishikesh & Haridwar is a premier destination in Uttarakhand. Yoga Capital of the World & Har Ki Pauri Ganga Aarti - White Water Rafting. Description: Twin spiritual and adventure epicenters at the Himalayan foothills where the holy River Ganges enters the northern plains, famous for Har Ki Pauri evening Aarti, Ram Jhula suspension bridges, ashram yoga retreats, and thrilling Grade IV white water river rafting. Best time to visit: September to November & February to May (Rafting season). Recommended trip duration: 3 days. Popular travel interests: Adventure, Temples, Yoga, Nature. Official Tourism: https://uttarakhandtourism.gov.in.",
        "tags": [
          "rishikesh & haridwar",
          "rishikesh & haridwar",
          "uttarakhand",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Shivpuri to Rishikesh White Water River Rafting (Adventure)",
        "content": "Exhilarating 16-km river rafting expedition navigating famous Grade III & IV rapids including Roller Coaster, Golf Course, and Club House on the turquoise Ganges. Location: Rishikesh & Haridwar. Estimated visit duration: 180 minutes. Estimated entry fee: ₹800. Tips: Always raft with certified river guides and ensure lifejackets and helmets are secured ",
        "tags": [
          "rishikesh & haridwar",
          "rishikesh & haridwar",
          "uttarakhand",
          "adventure",
          "shivpuri to rishikesh white water river rafting",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Har Ki Pauri Ghat Evening Ganga Aarti (Temples)",
        "content": "Venerated sacred riverbank where thousands gather at dusk as bells chime and priests perform Maha Aarti with colossal flaming lamps reflecting in the waters. Location: Rishikesh & Haridwar. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Arrive by 5:00 PM to find peaceful seating on the opposite bank steps ",
        "tags": [
          "rishikesh & haridwar",
          "rishikesh & haridwar",
          "uttarakhand",
          "temples",
          "har ki pauri ghat evening ganga aarti",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-rishikesh-haridwar-culture-logistics",
    "destination": "Rishikesh & Haridwar",
    "title": "Culture, Food & Transportation Guide for Rishikesh & Haridwar",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Rishikesh & Haridwar",
        "content": "Cultural highlights of Rishikesh & Haridwar, Uttarakhand: Har Ki Pauri evening Ganga Aarti floating leaf diyas down the swirling river. International Yoga Festival in Parmarth Niketan Ashram. Beatles Ashram (Chaurasi Kutia) graffiti and meditation domes. Recognized destination category: Adventure & Trekking. Known aliases: Rishikesh, Haridwar, Yoga Capital, Har Ki Pauri, Ram Jhula.",
        "tags": [
          "rishikesh & haridwar",
          "rishikesh & haridwar",
          "uttarakhand",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Rishikesh & Haridwar",
        "content": "Renowned food and dining specialties in Rishikesh & Haridwar: Chotiwala Restaurant (Ram Jhula - Est. 1958) (Pure Satvik North Indian Lunch): Famous for Satvik Garhwali Thali, piping hot Aloo Puri, and fresh Badam Lassi. Avg cost per person: ₹200.",
        "tags": [
          "rishikesh & haridwar",
          "rishikesh & haridwar",
          "uttarakhand",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Rishikesh & Haridwar",
        "content": "Reaching Rishikesh & Haridwar, Uttarakhand: Nearest Airport: Dehradun Jolly Grant Airport (DED) - 20 km to Rishikesh. Nearest Railway: Yog Nagari Rishikesh (YNRK) & Haridwar Junction (HW). Road Connectivity: Delhi-Dehradun Expressway NH 334 (4 hours).",
        "tags": [
          "rishikesh & haridwar",
          "rishikesh & haridwar",
          "uttarakhand",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-nainital-attractions",
    "destination": "Nainital",
    "title": "Top Attractions, Sights & Overview of Nainital",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Nainital",
        "content": "Nainital is a premier destination in Uttarakhand. Lake District of India - Emerald Naini Lake, Naina Devi & Snow View. Description: Popular Himalayan lake retreat set in a wooded mountain basin at 2,000 meters, famous for the emerald eye-shaped Naini Lake, colorful yacht sailing, Naina Devi temple, and cable car views of Nanda Devi peaks. Best time to visit: March to June (Summer) & November to February (Snowfall). Recommended trip duration: 2 days. Popular travel interests: Nature, Boating, Photography, Culture. Official Tourism: https://uttarakhandtourism.gov.in.",
        "tags": [
          "nainital",
          "nainital",
          "uttarakhand",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Naini Lake Boating & Naina Devi Temple (Nature)",
        "content": "Scenic natural freshwater lake framed by seven surrounding hills, offering paddle and gondola-style rowing boat rides past sacred Naina Devi temple. Location: Nainital. Estimated visit duration: 90 minutes. Estimated entry fee: ₹250. Tips: Take an evening boat ride when Mall Road lights shimmer on the water surface ",
        "tags": [
          "nainital",
          "nainital",
          "uttarakhand",
          "nature",
          "naini lake boating & naina devi temple",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-nainital-culture-logistics",
    "destination": "Nainital",
    "title": "Culture, Food & Transportation Guide for Nainital",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Nainital",
        "content": "Cultural highlights of Nainital, Uttarakhand: Yacht sailing and wooden paddle boating on Naini Lake. Mall Road colonial strolls and Tibetan market momos. Handcrafted aroma candles made by local artisans. Recognized destination category: Hill Stations & Mountains. Known aliases: Lake City, Naini Lake, Bhimtal.",
        "tags": [
          "nainital",
          "nainital",
          "uttarakhand",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Nainital",
        "content": "Renowned food and dining specialties in Nainital: Sakley’s Restaurant & Pastry Shop (Continental & Himalayan Bakery Dinner): Famous for Roast Chicken, shepherd’s pie, Apple Strudel, and hot chocolate brownies. Avg cost per person: ₹350.",
        "tags": [
          "nainital",
          "nainital",
          "uttarakhand",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Nainital",
        "content": "Reaching Nainital, Uttarakhand: Nearest Airport: Pantnagar Airport (PGH) - 70 km / Delhi (300 km). Nearest Railway: Kathgodam Railway Station (KGM) - 34 km. Road Connectivity: NH 109 connects Kathgodam to Nainital.",
        "tags": [
          "nainital",
          "nainital",
          "uttarakhand",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-mussoorie-attractions",
    "destination": "Mussoorie",
    "title": "Top Attractions, Sights & Overview of Mussoorie",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Mussoorie",
        "content": "Mussoorie is a premier destination in Uttarakhand. Queen of the Hills - Kempty Falls, Gun Hill & The Winterline Spectacle. Description: Charming colonial hill station perched on a 2,000-meter ridge overlooking the Doon Valley, famous for Kempty Falls, Camel’s Back Road, the rare Winterline sunset atmospheric phenomenon, and author Ruskin Bond’s mountain hometown. Best time to visit: March to June & September to November. Recommended trip duration: 2 days. Popular travel interests: Nature, Sightseeing, Photography, Food. Official Tourism: https://uttarakhandtourism.gov.in.",
        "tags": [
          "mussoorie",
          "mussoorie",
          "uttarakhand",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Kempty Falls Cascades (Nature)",
        "content": "Vibrant 40-foot mountain waterfall cascading into a natural swimming pool accessed via scenic cable ropeway. Location: Mussoorie. Estimated visit duration: 120 minutes. Estimated entry fee: ₹50. Tips: Visit early morning before midday tourist buses arrive ",
        "tags": [
          "mussoorie",
          "mussoorie",
          "uttarakhand",
          "nature",
          "kempty falls cascades",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-mussoorie-culture-logistics",
    "destination": "Mussoorie",
    "title": "Culture, Food & Transportation Guide for Mussoorie",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Mussoorie",
        "content": "Cultural highlights of Mussoorie, Uttarakhand: Landour heritage bakehouses and Char Dukan. Rare Winterline sunset horizon phenomenon visible in winter months. Historic library and vintage churches along Mall Road. Recognized destination category: Hill Stations & Mountains. Known aliases: Queen of the Hills, Kempty Falls, Landour.",
        "tags": [
          "mussoorie",
          "mussoorie",
          "uttarakhand",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Mussoorie",
        "content": "Renowned food and dining specialties in Mussoorie: Char Dukan Heritage Cafe (Landour) (Hill Station Bakery & Cafe Breakfast): Famous for Fresh Banana Nutella Pancakes, Bun Maska, Wai Wai bhel, and ginger lemon honey tea. Avg cost per person: ₹180.",
        "tags": [
          "mussoorie",
          "mussoorie",
          "uttarakhand",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Mussoorie",
        "content": "Reaching Mussoorie, Uttarakhand: Nearest Airport: Dehradun Jolly Grant Airport (60 km). Nearest Railway: Dehradun Railway Station (DDN) - 34 km. Road Connectivity: Scenic mountain climb road from Dehradun.",
        "tags": [
          "mussoorie",
          "mussoorie",
          "uttarakhand",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-kolkata-attractions",
    "destination": "Kolkata",
    "title": "Top Attractions, Sights & Overview of Kolkata",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Kolkata",
        "content": "Kolkata is a premier destination in West Bengal. City of Joy - Victoria Memorial, Howrah Bridge & Cultural Gastronomy. Description: Cultural, artistic, and intellectual capital of India, renowned for the gleaming white marble Victoria Memorial, the cantilever marvel Howrah Bridge, hand-pulled rickshaws, yellow ambassador cabs, Durga Puja festival, and delectable roshogollas and kathi rolls. Best time to visit: October to March (October for Durga Puja). Recommended trip duration: 3 days. Popular travel interests: History, Culture, Food, Architecture. Official Tourism: https://www.wbtourism.gov.in.",
        "tags": [
          "kolkata",
          "kolkata",
          "west bengal",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Victoria Memorial Hall & Gardens (History)",
        "content": "Magnificent Makrana white marble palace built between 1906 and 1921 set in 64 acres of landscaped gardens, housing rare Raj-era oil paintings and historic galleries. Location: Kolkata. Estimated visit duration: 150 minutes. Estimated entry fee: ₹50. Tips: Visit early morning to enjoy peaceful garden walks along the fountain ponds ",
        "tags": [
          "kolkata",
          "kolkata",
          "west bengal",
          "history",
          "victoria memorial hall & gardens",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Howrah Bridge (Rabindra Setu) & River Ferry (History)",
        "content": "Iconic 1943 balanced cantilever steel bridge without nuts and bolts spanning the Hooghly River, carrying over 100,000 vehicles and millions of commuters daily. Location: Kolkata. Estimated visit duration: 60 minutes. Estimated entry fee: ₹10. Tips: Take the ₹6 passenger ferry from Howrah Ghat to Babughat for a panoramic view of the bridge ",
        "tags": [
          "kolkata",
          "kolkata",
          "west bengal",
          "history",
          "howrah bridge (rabindra setu) & river ferry",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-kolkata-culture-logistics",
    "destination": "Kolkata",
    "title": "Culture, Food & Transportation Guide for Kolkata",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Kolkata",
        "content": "Cultural highlights of Kolkata, West Bengal: UNESCO Intangible Cultural Heritage Durga Puja celebrations. Historic Indian Coffee House debates on College Street (world’s largest secondhand book market). Pottery and clay idol ateliers in Kumartuli. Recognized destination category: Major Cities & Towns. Known aliases: Calcutta, City of Joy, Howrah.",
        "tags": [
          "kolkata",
          "kolkata",
          "west bengal",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Kolkata",
        "content": "Renowned food and dining specialties in Kolkata: Kewpie’s Kitchen / Peter Cat (Traditional Bengali & Continental Dinner): Famous for Authentic Bengali Fish Thali with Shorshe Ilish (Hilsa in mustard gravy), Kosha Mangsho, and Chelo Kebab. Avg cost per person: ₹450. K.C. Das (Esplanade - Est. 1866) (Traditional Bengali Sweets Snacks): Famous for Warm spongy authentic Rossogolla (Rasgulla invented by Nobin Chandra Das) and Mishti Doi. Avg cost per person: ₹60.",
        "tags": [
          "kolkata",
          "kolkata",
          "west bengal",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Kolkata",
        "content": "Reaching Kolkata, West Bengal: Nearest Airport: Netaji Subhash Chandra Bose International Airport (CCU) in Dum Dum. Nearest Railway: Howrah Junction (HWH) & Sealdah (SDAH). Road Connectivity: Golden Quadrilateral NH 16 and NH 19.",
        "tags": [
          "kolkata",
          "kolkata",
          "west bengal",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-darjeeling-attractions",
    "destination": "Darjeeling",
    "title": "Top Attractions, Sights & Overview of Darjeeling",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Darjeeling",
        "content": "Darjeeling is a premier destination in West Bengal. Queen of the Hills - Himalayan Toy Train, Tiger Hill Sunrise & World-Famous Tea. Description: Breathtaking Himalayan hill station at 2,050 meters, renowned for golden sunrise views of Kanchenjunga from Tiger Hill, the UNESCO Darjeeling Himalayan Railway steam toy train, emerald slope tea gardens, and Tibetan monasteries. Best time to visit: March to May & October to December. Recommended trip duration: 3 days. Popular travel interests: Nature, Culture, Photography, Trekking. Official Tourism: https://www.wbtourism.gov.in.",
        "tags": [
          "darjeeling",
          "darjeeling",
          "west bengal",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Tiger Hill Kanchenjunga Sunrise Viewpoint (Nature)",
        "content": "Vantage point at 2,590 meters famous for dawn vistas as the rising sun casts glowing pink and fiery orange hues across the twin peaks of Kanchenjunga and Mount Everest. Location: Darjeeling. Estimated visit duration: 120 minutes. Estimated entry fee: ₹50. Tips: Depart your hotel at 4:00 AM; dress in warm fleece and gloves as dawn temperatures drop near freezing ",
        "tags": [
          "darjeeling",
          "darjeeling",
          "west bengal",
          "nature",
          "tiger hill kanchenjunga sunrise viewpoint",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Batasia Loop & War Memorial (History)",
        "content": "Engineering marvel spiral railway loop where the Toy Train negotiates a 360-degree curve through landscaped gardens with the Gorkha soldier war memorial at the center. Location: Darjeeling. Estimated visit duration: 60 minutes. Estimated entry fee: ₹20. Tips: Listen for the whistle of the vintage steam locomotive passing through ",
        "tags": [
          "darjeeling",
          "darjeeling",
          "west bengal",
          "history",
          "batasia loop & war memorial",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-darjeeling-culture-logistics",
    "destination": "Darjeeling",
    "title": "Culture, Food & Transportation Guide for Darjeeling",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Darjeeling",
        "content": "Cultural highlights of Darjeeling, West Bengal: UNESCO Darjeeling Himalayan Railway steam engine circling the Batasia Loop war memorial. Tasting fresh first-flush champagne Darjeeling tea on heritage estates. Himalayan Mountaineering Institute & Zoo housing Red Pandas and Snow Leopards. Recognized destination category: Hill Stations & Mountains. Known aliases: Tiger Hill, Ghum, Batasia Loop.",
        "tags": [
          "darjeeling",
          "darjeeling",
          "west bengal",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Darjeeling",
        "content": "Renowned food and dining specialties in Darjeeling: Glenary’s Bakery & Cafe (Est. 1885) (Colonial British Bakery & Continental Breakfast): Famous for Fresh Darjeeling first-flush tea in porcelain teapots, cinnamon buns, apple pies, and English breakfast. Avg cost per person: ₹250.",
        "tags": [
          "darjeeling",
          "darjeeling",
          "west bengal",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Darjeeling",
        "content": "Reaching Darjeeling, West Bengal: Nearest Airport: Bagdogra Airport (IXB) - 70 km. Nearest Railway: New Jalpaiguri Junction (NJP) - 72 km / Ghum (highest altitude station in India). Road Connectivity: Hill Cart Road NH 110 from Siliguri.",
        "tags": [
          "darjeeling",
          "darjeeling",
          "west bengal",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-sundarbans-attractions",
    "destination": "Sundarbans National Park",
    "title": "Top Attractions, Sights & Overview of Sundarbans National Park",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Sundarbans National Park",
        "content": "Sundarbans National Park is a premier destination in West Bengal. World’s Largest Mangrove Delta - Royal Bengal Tigers & Estuarine Wildlife. Description: UNESCO World Heritage and biosphere reserve spanning the Ganges-Brahmaputra delta, hosting the world’s largest mangrove forest, swimming Royal Bengal Tigers, saltwater crocodiles, and Gangetic river dolphins. Best time to visit: November to March. Recommended trip duration: 2 days. Popular travel interests: Wildlife, Adventure, Nature, Photography. Official Tourism: https://www.wbtourism.gov.in.",
        "tags": [
          "sundarbans national park",
          "sundarbans national park",
          "west bengal",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Sajnekhali Watchtower & Creek Boat Safari (Nature)",
        "content": "Thrilling silent motorized boat cruise navigating mangrove waterways with watchtowers overlooking fresh water ponds frequented by deer, wild boars, and tigers. Location: Sundarbans National Park. Estimated visit duration: 300 minutes. Estimated entry fee: ₹600. Tips: Carry binoculars; winter mornings offer prime crocodile sunbathing sightings on mudflats ",
        "tags": [
          "sundarbans national park",
          "sundarbans national park",
          "west bengal",
          "nature",
          "sajnekhali watchtower & creek boat safari",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-sundarbans-culture-logistics",
    "destination": "Sundarbans National Park",
    "title": "Culture, Food & Transportation Guide for Sundarbans National Park",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Sundarbans National Park",
        "content": "Cultural highlights of Sundarbans National Park, West Bengal: Boat safaris cruising winding mangrove creeks where tigers swim between islands. Sundari mangrove trees with breath-taking aerial pneumatophore roots. Bonnobibi folk theatre and honey collector folklore. Recognized destination category: Wildlife & National Parks. Known aliases: Sundarban Tiger Reserve, Sajnekhali.",
        "tags": [
          "sundarbans national park",
          "sundarbans national park",
          "west bengal",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Sundarbans National Park",
        "content": "Renowned food and dining specialties in Sundarbans National Park: Sundarban Jungle Camp Diners (Rustic Bengali Coastal Lunch): Famous for Steamed rice, Bhetki fish paturi steamed in banana leaf, prawn malai curry, and wild mangrove honey. Avg cost per person: ₹300.",
        "tags": [
          "sundarbans national park",
          "sundarbans national park",
          "west bengal",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Sundarbans National Park",
        "content": "Reaching Sundarbans National Park, West Bengal: Nearest Airport: Kolkata Airport (110 km). Nearest Railway: Canning Railway Station (48 km). Road Connectivity: Drive to Godkhali boat ferry jetty (3 hours from Kolkata).",
        "tags": [
          "sundarbans national park",
          "sundarbans national park",
          "west bengal",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-port-blair-attractions",
    "destination": "Port Blair",
    "title": "Top Attractions, Sights & Overview of Port Blair",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Port Blair",
        "content": "Port Blair is a premier destination in Andaman and Nicobar Islands (Union Territory). Gateway to the Andamans - Historic Cellular Jail & Ross Island. Description: Capital island port town surrounded by turquoise waters, famous for the solemn Cellular Jail (Kala Pani) national memorial, Ross Island (Netaji Subhash Chandra Bose Dweep) ruins draped in banyan roots, and scenic coastal coromandel drives. Best time to visit: October to May. Recommended trip duration: 3 days. Popular travel interests: History, Beaches, Culture, Photography. Official Tourism: https://www.andamantourism.gov.in.",
        "tags": [
          "port blair",
          "port blair",
          "andaman and nicobar islands",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Cellular Jail National Memorial (History)",
        "content": "Colonial 7-wing solitary confinement prison built between 1896 and 1906 where Indian freedom fighters were exiled, now a revered national pilgrimage memorial. Location: Port Blair. Estimated visit duration: 150 minutes. Estimated entry fee: ₹30. Tips: Book tickets in advance for the evening sound and light show ",
        "tags": [
          "port blair",
          "port blair",
          "andaman and nicobar islands",
          "history",
          "cellular jail national memorial",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-port-blair-culture-logistics",
    "destination": "Port Blair",
    "title": "Culture, Food & Transportation Guide for Port Blair",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Port Blair",
        "content": "Cultural highlights of Port Blair, Andaman and Nicobar Islands: Cellular Jail poignant evening sound and light show narrated in the voice of the ancient Peepal tree. Ross Island deer and peacocks roaming among British colonial ballroom ruins. Samudrika Naval Marine Museum. Recognized destination category: Historical Monuments & Heritage. Known aliases: Cellular Jail, Kala Pani, Andaman.",
        "tags": [
          "port blair",
          "port blair",
          "andaman and nicobar islands",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Port Blair",
        "content": "Renowned food and dining specialties in Port Blair: New Lighthouse Restaurant (Andaman Coastal Seafood Dinner): Famous for Fresh grilled red snapper, butter garlic tiger prawns, and crab curry with coconut rice. Avg cost per person: ₹450.",
        "tags": [
          "port blair",
          "port blair",
          "andaman and nicobar islands",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Port Blair",
        "content": "Reaching Port Blair, Andaman and Nicobar Islands: Nearest Airport: Veer Savarkar International Airport (IXZ) in Port Blair. Nearest Railway: None (Connected via flights and sea passenger ships from Chennai/Kolkata/Vizag). Road Connectivity: Great Andaman Trunk Road NH 4 connects to North Andaman.",
        "tags": [
          "port blair",
          "port blair",
          "andaman and nicobar islands",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-havelock-island-attractions",
    "destination": "Havelock Island (Swaraj Dweep)",
    "title": "Top Attractions, Sights & Overview of Havelock Island (Swaraj Dweep)",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Havelock Island (Swaraj Dweep)",
        "content": "Havelock Island (Swaraj Dweep) is a premier destination in Andaman and Nicobar Islands (Union Territory). Asia’s Best Beach - Radhanagar White Sands & Scuba Diving Reefs. Description: World-famous tropical paradise island celebrated for Radhanagar Beach (Beach No. 7), consistently rated among the world’s most beautiful beaches, paired with vibrant coral reefs, Elephant Beach water sports, and sea kayaking through mangrove tunnels. Best time to visit: October to May. Recommended trip duration: 3 days. Popular travel interests: Beaches, Adventure, Scuba Diving, Photography. Official Tourism: https://www.andamantourism.gov.in.",
        "tags": [
          "havelock island (swaraj dweep)",
          "havelock island (swaraj dweep)",
          "andaman and nicobar islands",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Radhanagar Beach (Beach No. 7) (Beaches)",
        "content": "Two-kilometer curve of powder-white coral sand flanked by dense tropical greenery and gentle turquoise waves, offering breathtaking sunset panoramas. Location: Havelock Island (Swaraj Dweep). Estimated visit duration: 180 minutes. Estimated entry fee: ₹0. Tips: Sunset at 5:00-5:30 PM is unmissable; lifeguards on duty make swimming very safe ",
        "tags": [
          "havelock island (swaraj dweep)",
          "havelock island (swaraj dweep)",
          "andaman and nicobar islands",
          "beaches",
          "radhanagar beach (beach no. 7)",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Elephant Beach Coral Snorkeling (Adventure)",
        "content": "Vibrant fringing coral reef accessed via speed boat or a 30-minute forest trek, popular for snorkeling, sea walking, and glass-bottom boat rides. Location: Havelock Island (Swaraj Dweep). Estimated visit duration: 150 minutes. Estimated entry fee: ₹500. Tips: Visit in the morning before high tide causes rough currents ",
        "tags": [
          "havelock island (swaraj dweep)",
          "havelock island (swaraj dweep)",
          "andaman and nicobar islands",
          "adventure",
          "elephant beach coral snorkeling",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-havelock-island-culture-logistics",
    "destination": "Havelock Island (Swaraj Dweep)",
    "title": "Culture, Food & Transportation Guide for Havelock Island (Swaraj Dweep)",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Havelock Island (Swaraj Dweep)",
        "content": "Cultural highlights of Havelock Island (Swaraj Dweep), Andaman and Nicobar Islands: Radhanagar sunset with emerald waters, powder-soft white sand, and tropical Mahua rainforest canopy. PADI-certified scuba diving at Dixon’s Pinnacle and Nemo Reef with manta rays and sea turtles. Bioluminescent night kayaking at mangrove lagoons. Recognized destination category: Beaches & Coastal. Known aliases: Havelock, Swaraj Dweep, Radhanagar Beach, Elephant Beach.",
        "tags": [
          "havelock island (swaraj dweep)",
          "havelock island (swaraj dweep)",
          "andaman and nicobar islands",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Havelock Island (Swaraj Dweep)",
        "content": "Renowned food and dining specialties in Havelock Island (Swaraj Dweep): Full Moon Cafe (Govind Nagar) (Seafood & Tropical Continental Dinner): Famous for Grilled catch of the day in banana leaf with lemon garlic butter and fresh fruit smoothies. Avg cost per person: ₹450.",
        "tags": [
          "havelock island (swaraj dweep)",
          "havelock island (swaraj dweep)",
          "andaman and nicobar islands",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Havelock Island (Swaraj Dweep)",
        "content": "Reaching Havelock Island (Swaraj Dweep), Andaman and Nicobar Islands: Nearest Airport: Port Blair Airport (54 km by sea). Nearest Railway: None. Road Connectivity: High-speed catamarans (Makruzz, Nautika, Green Ocean) run 90-minute ferries from Port Blair.",
        "tags": [
          "havelock island (swaraj dweep)",
          "havelock island (swaraj dweep)",
          "andaman and nicobar islands",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-chandigarh-attractions",
    "destination": "Chandigarh",
    "title": "Top Attractions, Sights & Overview of Chandigarh",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Chandigarh",
        "content": "Chandigarh is a premier destination in Chandigarh (Union Territory). The City Beautiful - Le Corbusier Architecture, Rock Garden & Sukhna Lake. Description: India’s premier modern planned masterwork designed by Swiss-French architect Le Corbusier, famous for Nek Chand’s visionary Rock Garden created entirely from recycled urban waste, tranquil Sukhna Lake, and rose-scented garden boulevards. Best time to visit: October to March. Recommended trip duration: 2 days. Popular travel interests: Architecture, Nature, Art, Food. Official Tourism: https://chandigarhtourism.gov.in.",
        "tags": [
          "chandigarh",
          "chandigarh",
          "chandigarh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Nek Chand’s Rock Garden (History)",
        "content": "Visionary 40-acre wonderland featuring courtyards, waterfalls, and thousands of sculptures made from discarded ceramic bangles, electrical porcelain, tiles, and household waste. Location: Chandigarh. Estimated visit duration: 150 minutes. Estimated entry fee: ₹30. Tips: Comfortable walking shoes are essential to navigate narrow stone doorways and amphitheatres ",
        "tags": [
          "chandigarh",
          "chandigarh",
          "chandigarh",
          "history",
          "nek chand’s rock garden",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Sukhna Lake Promenade (Nature)",
        "content": "Serene 3-sq-km man-made reservoir at the foothills of the Shivalik range, popular for paddle boating, sunset jogging, and migratory bird watching. Location: Chandigarh. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Hire a swan paddleboat and stroll along the illuminated promenade ",
        "tags": [
          "chandigarh",
          "chandigarh",
          "chandigarh",
          "nature",
          "sukhna lake promenade",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-chandigarh-culture-logistics",
    "destination": "Chandigarh",
    "title": "Culture, Food & Transportation Guide for Chandigarh",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Chandigarh",
        "content": "Cultural highlights of Chandigarh, Chandigarh: UNESCO Capitol Complex featuring the Open Hand Monument. Zakir Hussain Rose Garden (Asia’s largest with 50,000 rose bushes). Sector 17 pedestrian shopping plaza. Recognized destination category: Major Cities & Towns. Known aliases: The City Beautiful, Rock Garden, Sukhna Lake.",
        "tags": [
          "chandigarh",
          "chandigarh",
          "chandigarh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Chandigarh",
        "content": "Renowned food and dining specialties in Chandigarh: Pal Dhaba (Sector 28 - Est. 1968) (Authentic Punjabi Dinner): Famous for Butter Chicken, Dal Makhani, Mutton Curry, and tandoori garlic naan. Avg cost per person: ₹300.",
        "tags": [
          "chandigarh",
          "chandigarh",
          "chandigarh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Chandigarh",
        "content": "Reaching Chandigarh, Chandigarh: Nearest Airport: Shaheed Bhagat Singh International Airport, Chandigarh (IXC) in Mohali. Nearest Railway: Chandigarh Junction (CDG). Road Connectivity: Himalayan Expressway and NH 44 connects to Delhi in 3.5 hours.",
        "tags": [
          "chandigarh",
          "chandigarh",
          "chandigarh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-daman-diu-attractions",
    "destination": "Daman & Diu",
    "title": "Top Attractions, Sights & Overview of Daman & Diu",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Daman & Diu",
        "content": "Daman & Diu is a premier destination in Dadra and Nagar Haveli and Daman and Diu (Union Territory). Portuguese Coastal Enclaves - Moti Daman Fort & Diu Island Fortress. Description: Charming former Portuguese territories along the Arabian Sea, renowned for the formidable 16th-century sea-facing Diu Fort, St. Paul’s Baroque Church, shell-shaped Nagoa Beach, and the walled citadel of Moti Daman. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: History, Beaches, Architecture, Culture. Official Tourism: https://www.ddd.gov.in.",
        "tags": [
          "daman & diu",
          "daman & diu",
          "dadra and nagar haveli and daman and diu",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Diu Sea Fortress & Lighthouse (History)",
        "content": "Imposing 1535 stone citadel jutting into the Arabian Sea with three moats, double ramparts mounted with bronze cannons, and sweeping panoramic ocean vistas. Location: Daman & Diu. Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Climb to the lighthouse parapet for panoramic views of Diu town and crashing sea waves ",
        "tags": [
          "daman & diu",
          "daman & diu",
          "dadra and nagar haveli and daman and diu",
          "history",
          "diu sea fortress & lighthouse",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-daman-diu-culture-logistics",
    "destination": "Daman & Diu",
    "title": "Culture, Food & Transportation Guide for Daman & Diu",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Daman & Diu",
        "content": "Cultural highlights of Daman & Diu, Dadra and Nagar Haveli and Daman and Diu: St. Paul’s Church intricate wood carvings and Portuguese Baroque facade. Nagoa Beach unique Hoka palm trees brought from Africa. Lighthouse and sea canyon at Naida Caves. Recognized destination category: Beaches & Coastal. Known aliases: Daman, Diu, Nagoa Beach, Moti Daman.",
        "tags": [
          "daman & diu",
          "daman & diu",
          "dadra and nagar haveli and daman and diu",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Daman & Diu",
        "content": "Renowned food and dining specialties in Daman & Diu: O Coqueiro Heritage Restaurant (Portuguese-Goan & Seafood Lunch): Famous for Goan Fish Curry with rice, Crab Masala, and Bebinca layer cake. Avg cost per person: ₹300.",
        "tags": [
          "daman & diu",
          "daman & diu",
          "dadra and nagar haveli and daman and diu",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Daman & Diu",
        "content": "Reaching Daman & Diu, Dadra and Nagar Haveli and Daman and Diu: Nearest Airport: Diu Airport (DIU) / Surat Airport (120 km from Daman) / Mumbai (170 km). Nearest Railway: Vapi Railway Station (12 km from Daman) / Veraval (90 km from Diu). Road Connectivity: NH 48 connects Daman to Mumbai and Surat.",
        "tags": [
          "daman & diu",
          "daman & diu",
          "dadra and nagar haveli and daman and diu",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-delhi-attractions",
    "destination": "Delhi",
    "title": "Top Attractions, Sights & Overview of Delhi",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Delhi",
        "content": "Delhi is a premier destination in Delhi (Union Territory). Heart of the Nation - Red Fort, Qutub Minar, India Gate & Chandni Chowk. Description: The historic and dynamic national capital uniting eight medieval empire cities with modern Lutyens boulevards, famous for the red sandstone Red Fort, the 73-meter Qutub Minar, India Gate war memorial, Lotus Temple, and the sensory street food frenzy of Chandni Chowk. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: History, Food, Culture, Shopping, Architecture. Official Tourism: https://delhitourism.gov.in.",
        "tags": [
          "delhi",
          "delhi",
          "delhi",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Red Fort (Lal Qila) (History)",
        "content": "Magnificent 1648 red sandstone palace fortress constructed by Shah Jahan, housing the Diwan-i-Aam, Diwan-i-Khas, and Chhatta Chowk covered bazaar. Location: Delhi. Estimated visit duration: 150 minutes. Estimated entry fee: ₹50. Tips: Closed on Mondays; explore Chandni Chowk street food right across the road afterward ",
        "tags": [
          "delhi",
          "delhi",
          "delhi",
          "history",
          "red fort (lal qila)",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Qutub Minar & Mehrauli Archaeological Complex (History)",
        "content": "World’s tallest brick minaret standing at 72.5 meters built in 1192, featuring flute carvings, Quranic calligraphy, and the rust-resistant 1,600-year-old Iron Pillar of Chandragupta II. Location: Delhi. Estimated visit duration: 120 minutes. Estimated entry fee: ₹50. Tips: Visit in late afternoon when warm sunlight brings out the red sandstone carvings ",
        "tags": [
          "delhi",
          "delhi",
          "delhi",
          "history",
          "qutub minar & mehrauli archaeological complex",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "India Gate & Kartavya Path (History)",
        "content": "Imposing 42-meter triumphal arch war memorial honoring 84,000 Indian soldiers, framed by fountains, illuminated lawns, and the Amar Jawan Jyoti flame. Location: Delhi. Estimated visit duration: 60 minutes. Estimated entry fee: ₹0. Tips: Ideal for an evening stroll; enjoy ice cream from street carts along the illuminated promenade ",
        "tags": [
          "delhi",
          "delhi",
          "delhi",
          "history",
          "india gate & kartavya path",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-delhi-culture-logistics",
    "destination": "Delhi",
    "title": "Culture, Food & Transportation Guide for Delhi",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Delhi",
        "content": "Cultural highlights of Delhi, Delhi: UNESCO monuments: Qutub Minar, Humayun’s Tomb, and Red Fort. Paranthe Wali Gali and spice aromas of Khari Baoli (Asia’s largest wholesale spice market). Sufi Qawwali sessions on Thursday evenings at Hazrat Nizamuddin Dargah. Recognized destination category: Major Cities & Towns. Known aliases: New Delhi, NCR, Old Delhi, Dilli, Chandni Chowk, Red Fort.",
        "tags": [
          "delhi",
          "delhi",
          "delhi",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Delhi",
        "content": "Renowned food and dining specialties in Delhi: Karim’s (Jama Masjid - Est. 1913) (Mughlai Royal Dinner): Famous for Mutton Burra Kebab, Butter Chicken, Rogan Josh, and hot Khamiri Roti. Avg cost per person: ₹400. Pandit Gaya Prasad Shiv Charan (Paranthe Wali Gali - Est. 1872) (Old Delhi Street Food Lunch): Famous for Crispy deep-fried paranthas stuffed with Rabri, Khoya, Paneer, or Green Peas, served with pumpkin sabzi and sweet tamarind dip. Avg cost per person: ₹150.",
        "tags": [
          "delhi",
          "delhi",
          "delhi",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Delhi",
        "content": "Reaching Delhi, Delhi: Nearest Airport: Indira Gandhi International Airport (DEL) in Palam. Nearest Railway: New Delhi (NDLS), Old Delhi (DLI) & Hazrat Nizamuddin (NZM). Road Connectivity: Delhi-Mumbai Expressway, Yamuna Expressway, GT Road.",
        "tags": [
          "delhi",
          "delhi",
          "delhi",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-srinagar-attractions",
    "destination": "Srinagar",
    "title": "Top Attractions, Sights & Overview of Srinagar",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Srinagar",
        "content": "Srinagar is a premier destination in Jammu and Kashmir (Union Territory). Paradise on Earth - Dal Lake Shikara, Floating Vegetable Markets & Mughal Gardens. Description: Fabled crown jewel of Kashmir situated along the Jhelum River, renowned for intricately carved cedar wood houseboats on Dal Lake, early morning floating vegetable markets, saffron gardens, and terraced Mughal Gardens (Shalimar & Nishat). Best time to visit: April to October (Tulip Festival in April) / December to February (Snowfall). Recommended trip duration: 3 days. Popular travel interests: Nature, Culture, Photography, Romance, Food. Official Tourism: https://www.jktourism.jk.gov.in.",
        "tags": [
          "srinagar",
          "srinagar",
          "jammu and kashmir",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Dal Lake Shikara Cruise & Char Chinar (Nature)",
        "content": "Tranquil gondola-style Shikara boat ride gliding past lotus pads, water lilies, floating handicraft shops, and the iconic four Chinar trees island. Location: Srinagar. Estimated visit duration: 120 minutes. Estimated entry fee: ₹500. Tips: Take the sunrise cruise (5:30 AM) to experience the historic floating vegetable trade ",
        "tags": [
          "srinagar",
          "srinagar",
          "jammu and kashmir",
          "nature",
          "dal lake shikara cruise & char chinar",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Nishat Bagh & Shalimar Bagh (History)",
        "content": "17th-century terraced pleasure gardens designed by Emperor Jahangir and Asif Khan featuring cascades, carved stone water chutes, and towering centuries-old Chinar trees. Location: Srinagar. Estimated visit duration: 120 minutes. Estimated entry fee: ₹25. Tips: Autumn (Oct-Nov) turns the Chinar leaves into brilliant golden crimson red ",
        "tags": [
          "srinagar",
          "srinagar",
          "jammu and kashmir",
          "history",
          "nishat bagh & shalimar bagh",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-srinagar-culture-logistics",
    "destination": "Srinagar",
    "title": "Culture, Food & Transportation Guide for Srinagar",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Srinagar",
        "content": "Cultural highlights of Srinagar, Jammu and Kashmir: Overnight stay on vintage hand-carved cedar wooden houseboats. Dawn Shikara cruise through Dal Lake floating vegetable market. Pashmina shawl weaving and walnut wood carving in Old Srinagar craft mohallas. Recognized destination category: Hill Stations & Mountains. Known aliases: Dal Lake, Kashmir, Shikara, Mughal Gardens.",
        "tags": [
          "srinagar",
          "srinagar",
          "jammu and kashmir",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Srinagar",
        "content": "Renowned food and dining specialties in Srinagar: Ahdoos (The Bund - Est. 1918) (Authentic Kashmiri Wazwan Dinner): Famous for Royal Wazwan multi-course banquet: Rista (meatballs in saffron gravy), Rogan Josh, Gushtaba, and warm Kahwa tea. Avg cost per person: ₹600.",
        "tags": [
          "srinagar",
          "srinagar",
          "jammu and kashmir",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Srinagar",
        "content": "Reaching Srinagar, Jammu and Kashmir: Nearest Airport: Sheikh ul-Alam International Airport, Srinagar (SXR) - 12 km. Nearest Railway: Srinagar Railway Station / Jammu Tawi (260 km) / Vande Bharat to Katra. Road Connectivity: NH 44 through the Chenani-Nashri and Qazigund twin tunnels.",
        "tags": [
          "srinagar",
          "srinagar",
          "jammu and kashmir",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-gulmarg-attractions",
    "destination": "Gulmarg",
    "title": "Top Attractions, Sights & Overview of Gulmarg",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Gulmarg",
        "content": "Gulmarg is a premier destination in Jammu and Kashmir (Union Territory). Meadow of Flowers & Asia’s Highest Gondola Cable Car at 13,780 Feet. Description: Premier skiing destination of India nestled at 2,650 meters, famous for the Gulmarg Gondola (one of the world’s highest operational cable cars climbing up Mount Apharwat), powder snow ski slopes, and lush springtime alpine wildflower meadows. Best time to visit: December to March (Skiing & Powder Snow) / May to September (Green Meadows). Recommended trip duration: 2 days. Popular travel interests: Adventure, Skiing, Nature, Photography. Official Tourism: https://www.jktourism.jk.gov.in.",
        "tags": [
          "gulmarg",
          "gulmarg",
          "jammu and kashmir",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Gulmarg Gondola Cable Car (Phase 1 & Phase 2) (Adventure)",
        "content": "Breathtaking two-phase cable car lifting passengers above pine canopies up to Apharwat peak ridge with panoramic vistas of Nanga Parbat and Pir Panjal peaks. Location: Gulmarg. Estimated visit duration: 240 minutes. Estimated entry fee: ₹1700. Tips: Tickets must be booked strictly online via official JK Tourism portal weeks in advance ",
        "tags": [
          "gulmarg",
          "gulmarg",
          "jammu and kashmir",
          "adventure",
          "gulmarg gondola cable car (phase 1 & phase 2)",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-gulmarg-culture-logistics",
    "destination": "Gulmarg",
    "title": "Culture, Food & Transportation Guide for Gulmarg",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Gulmarg",
        "content": "Cultural highlights of Gulmarg, Jammu and Kashmir: Two-stage Gondola lift ascending to 3,980 meters on Apharwat Peak. St. Mary’s Church Victorian stone architecture surrounded by pine forests. World’s highest 18-hole green golf course at 2,650 meters. Recognized destination category: Adventure & Trekking. Known aliases: Meadow of Flowers, Apharwat Peak, Gulmarg Gondola.",
        "tags": [
          "gulmarg",
          "gulmarg",
          "jammu and kashmir",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Gulmarg",
        "content": "Renowned food and dining specialties in Gulmarg: Bakshi Green View Dhaba (Kashmiri & North Indian Lunch): Famous for Hot steaming Rajma Chawal with pure desi ghee and aromatic Kashmiri Kahwa with saffron and crushed almonds. Avg cost per person: ₹200.",
        "tags": [
          "gulmarg",
          "gulmarg",
          "jammu and kashmir",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Gulmarg",
        "content": "Reaching Gulmarg, Jammu and Kashmir: Nearest Airport: Srinagar Airport (55 km). Nearest Railway: Jammu Tawi (290 km) / Srinagar Station. Road Connectivity: Tangmarg to Gulmarg scenic mountain road (snow chains required in winter).",
        "tags": [
          "gulmarg",
          "gulmarg",
          "jammu and kashmir",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-leh-attractions",
    "destination": "Leh",
    "title": "Top Attractions, Sights & Overview of Leh",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Leh",
        "content": "Leh is a premier destination in Ladakh (Union Territory). Land of High Passes - 17th-Century Leh Palace, Shanti Stupa & Hemis Monastery. Description: High-altitude cold desert capital situated at 3,500 meters along the Indus River valley, renowned for the 9-story Leh Palace resembling Tibet’s Potala, the gleaming white Shanti Stupa, Buddhist gompas, and magnetic hill optical illusions. Best time to visit: May to September (Highway passes open). Recommended trip duration: 3 days. Popular travel interests: Culture, Adventure, Monasteries, Photography. Official Tourism: https://www.ladakhtourism.in.",
        "tags": [
          "leh",
          "leh",
          "ladakh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Shanti Stupa White Dome Pagoda (History)",
        "content": "White-domed Buddhist pagoda perched on a steep hill in Changspa, built in 1991 by Japanese Buddhists, offering 360-degree sunset panoramas of Leh town and the snow-clad Stok Kangri range. Location: Leh. Estimated visit duration: 90 minutes. Estimated entry fee: ₹0. Tips: Climb the 500 stone stairs in the late afternoon for golden hour photography ",
        "tags": [
          "leh",
          "leh",
          "ladakh",
          "history",
          "shanti stupa white dome pagoda",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Leh Royal Palace (History)",
        "content": "Formidable 9-story 17th-century mud-brick palace fortress built by King Sengge Namgyal towering over the old town bazaar, containing royal crown jewelry and centuries-old thangkas. Location: Leh. Estimated visit duration: 90 minutes. Estimated entry fee: ₹25. Tips: Take the scenic rooftop ramparts walk for sweeping views over Indus valley oasis ",
        "tags": [
          "leh",
          "leh",
          "ladakh",
          "history",
          "leh royal palace",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-leh-culture-logistics",
    "destination": "Leh",
    "title": "Culture, Food & Transportation Guide for Leh",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Leh",
        "content": "Cultural highlights of Leh, Ladakh: Day 1 mandatory rest and acclimatization to avoid Acute Mountain Sickness (AMS). Hemis Cham masked dances celebrating Guru Padmasambhava in vibrant silk brocades. Apricot blossom festivals and hand-spun Ladakhi wool pashmina. Recognized destination category: Hill Stations & Mountains. Known aliases: Ladakh, Little Tibet, Shanti Stupa, Hemis.",
        "tags": [
          "leh",
          "leh",
          "ladakh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Leh",
        "content": "Renowned food and dining specialties in Leh: The Tibetan Kitchen (Fort Road) (Ladakhi & Tibetan Dinner): Famous for Tingmo (fluffy steamed bread), Thentuk handmade pulled noodle soup, and Yak Cheese pizza. Avg cost per person: ₹300.",
        "tags": [
          "leh",
          "leh",
          "ladakh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Leh",
        "content": "Reaching Leh, Ladakh: Nearest Airport: Kushok Bakula Rimpochee Airport (IXL) in Leh - 3 km. Nearest Railway: None (Broad gauge rail under construction from Bilaspur-Manali). Road Connectivity: Manali-Leh Highway (428 km) & Srinagar-Leh Highway (434 km).",
        "tags": [
          "leh",
          "leh",
          "ladakh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-pangong-tso-attractions",
    "destination": "Pangong Tso & Nubra Valley",
    "title": "Top Attractions, Sights & Overview of Pangong Tso & Nubra Valley",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Pangong Tso & Nubra Valley",
        "content": "Pangong Tso & Nubra Valley is a premier destination in Ladakh (Union Territory). Color-Changing Endorheic Salt Lake at 14,270 Feet & Hunder Sand Dunes. Description: Iconic trans-Himalayan wonderland spanning the Indo-China LAC at 4,350 meters, famous for crystal saline waters shifting from emerald green to deep azure blue, paired with Nubra Valley’s double-humped Bactrian camel safaris across silver Hunder sand dunes. Best time to visit: May to September. Recommended trip duration: 2 days. Popular travel interests: Adventure, Nature, Photography, Wildlife. Official Tourism: https://www.ladakhtourism.in.",
        "tags": [
          "pangong tso & nubra valley",
          "pangong tso & nubra valley",
          "ladakh",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Pangong Tso Blue Water Viewpoint (Nature)",
        "content": "Breathtaking 134-km long alpine saline lake framed by dramatic barren brown mountains, made famous globally in the film 3 Idiots. Location: Pangong Tso & Nubra Valley. Estimated visit duration: 180 minutes. Estimated entry fee: ₹0. Tips: Inner Line Permit (ILP) is mandatory; dress in windproof fleece; stargaze at night under crystal Milky Way skies ",
        "tags": [
          "pangong tso & nubra valley",
          "pangong tso & nubra valley",
          "ladakh",
          "nature",
          "pangong tso blue water viewpoint",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-pangong-tso-culture-logistics",
    "destination": "Pangong Tso & Nubra Valley",
    "title": "Culture, Food & Transportation Guide for Pangong Tso & Nubra Valley",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Pangong Tso & Nubra Valley",
        "content": "Cultural highlights of Pangong Tso & Nubra Valley, Ladakh: Endorheic lake completely freezing solid in winter despite high salinity. Double-humped woolly Bactrian camels remnants of the ancient Silk Route trade caravans. Diskit Monastery colossal 106-foot golden Maitreya Buddha statue. Recognized destination category: Waterfalls, Lakes & Viewpoints. Known aliases: Pangong Lake, Nubra Valley, Hunder Dunes, Khardung La, Chang La.",
        "tags": [
          "pangong tso & nubra valley",
          "pangong tso & nubra valley",
          "ladakh",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Pangong Tso & Nubra Valley",
        "content": "Renowned food and dining specialties in Pangong Tso & Nubra Valley: Pangong Lakeside Swiss Camp Dining (Warm North Indian & Tibetan Dinner): Famous for Hot dal tadka, steamed basmati rice, vegetable thukpa, and butter tea in biting night cold. Avg cost per person: ₹300.",
        "tags": [
          "pangong tso & nubra valley",
          "pangong tso & nubra valley",
          "ladakh",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Pangong Tso & Nubra Valley",
        "content": "Reaching Pangong Tso & Nubra Valley, Ladakh: Nearest Airport: Leh Airport (150 km to Pangong via Chang La Pass at 17,688 ft). Nearest Railway: None. Road Connectivity: Crosses Chang La Pass (Pangong) and Khardung La Pass (Nubra Valley at 18,380 ft).",
        "tags": [
          "pangong tso & nubra valley",
          "pangong tso & nubra valley",
          "ladakh",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-lakshadweep-attractions",
    "destination": "Lakshadweep (Agatti & Bangaram)",
    "title": "Top Attractions, Sights & Overview of Lakshadweep (Agatti & Bangaram)",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Lakshadweep (Agatti & Bangaram)",
        "content": "Lakshadweep (Agatti & Bangaram) is a premier destination in Lakshadweep (Union Territory). Hundred Thousand Islands - Coral Atolls, Turquoise Lagoons & Pristine Diving. Description: Archipelago of 36 pristine coral atolls in the Arabian Sea, world-renowned for Agatti Island’s strip runway surrounded by turquoise water, Bangaram tear-drop uninhabited lagoon, sea turtle sanctuaries, and world-class scuba diving. Best time to visit: October to May. Recommended trip duration: 4 days. Popular travel interests: Beaches, Scuba Diving, Adventure, Nature. Official Tourism: https://www.lakshadweeptourism.com.",
        "tags": [
          "lakshadweep (agatti & bangaram)",
          "lakshadweep (agatti & bangaram)",
          "lakshadweep",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "Bangaram Island Coral Atoll & Lagoon (Beaches)",
        "content": "Tear-drop shaped uninhabited coral island enclosed by a turquoise lagoon with shallow coral gardens populated by rays, reef sharks, and tropical fish. Location: Lakshadweep (Agatti & Bangaram). Estimated visit duration: 240 minutes. Estimated entry fee: ₹1000. Tips: Entry requires an approved Lakshadweep Tourism permit obtained in advance ",
        "tags": [
          "lakshadweep (agatti & bangaram)",
          "lakshadweep (agatti & bangaram)",
          "lakshadweep",
          "beaches",
          "bangaram island coral atoll & lagoon",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-lakshadweep-culture-logistics",
    "destination": "Lakshadweep (Agatti & Bangaram)",
    "title": "Culture, Food & Transportation Guide for Lakshadweep (Agatti & Bangaram)",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Lakshadweep (Agatti & Bangaram)",
        "content": "Cultural highlights of Lakshadweep (Agatti & Bangaram), Lakshadweep: Landing on Agatti’s airstrip where ocean waves lap both sides of the runway. Bangaram Island uninhabited lagoon swimming with green sea turtles. Fresh coconut tuna preparation (Masmin) and traditional lava dance. Recognized destination category: Islands & Remote Destinations. Known aliases: Agatti Island, Bangaram Island, Kavaratti, Minicoy.",
        "tags": [
          "lakshadweep (agatti & bangaram)",
          "lakshadweep (agatti & bangaram)",
          "lakshadweep",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Lakshadweep (Agatti & Bangaram)",
        "content": "Renowned food and dining specialties in Lakshadweep (Agatti & Bangaram): Agatti Island Beach Resort Dining (Lakshadweep Maldivic Coastal Lunch): Famous for Curried Skipjack Tuna with freshly grated coconut, Appam, and sweet coconut milk puddings. Avg cost per person: ₹350.",
        "tags": [
          "lakshadweep (agatti & bangaram)",
          "lakshadweep (agatti & bangaram)",
          "lakshadweep",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Lakshadweep (Agatti & Bangaram)",
        "content": "Reaching Lakshadweep (Agatti & Bangaram), Lakshadweep: Nearest Airport: Agatti Airport (AGX) - Daily flights connect from Kochi (COK). Nearest Railway: None (Kochi is the nearest railhead on the mainland). Road Connectivity: Inter-island transit via high-speed speedboats and passenger catamarans.",
        "tags": [
          "lakshadweep (agatti & bangaram)",
          "lakshadweep (agatti & bangaram)",
          "lakshadweep",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  },
  {
    "id": "doc-puducherry-attractions",
    "destination": "Puducherry (Pondicherry)",
    "title": "Top Attractions, Sights & Overview of Puducherry (Pondicherry)",
    "category": "Attractions",
    "sections": [
      {
        "sectionTitle": "Overview, Best Time & Geography of Puducherry (Pondicherry)",
        "content": "Puducherry (Pondicherry) is a premier destination in Puducherry (Union Territory). The French Riviera of the East - White Town, Promenade & Auroville Matrimandir. Description: Charming French colonial coastal enclave celebrated for mustard-yellow colonial villas draped with bougainvillea in White Town, the oceanfront Promenade Beach, Sri Aurobindo Ashram, and the golden geodesic dome of Matrimandir in the universal township of Auroville. Best time to visit: October to March. Recommended trip duration: 3 days. Popular travel interests: History, Culture, Architecture, Beaches, Food. Official Tourism: https://www.pondytourism.in.",
        "tags": [
          "puducherry (pondicherry)",
          "puducherry (pondicherry)",
          "puducherry",
          "overview",
          "best time",
          "weather",
          "geography"
        ]
      },
      {
        "sectionTitle": "White Town (French Quarter) & Promenade (History)",
        "content": "Preserved French colonial grid quarter with grand wrought-iron gateways, pastel facades, chic art boutiques, and seaside pedestrian walkway. Location: Puducherry (Pondicherry). Estimated visit duration: 120 minutes. Estimated entry fee: ₹0. Tips: Rent a vintage pastel bicycle to explore the peaceful French street architecture ",
        "tags": [
          "puducherry (pondicherry)",
          "puducherry (pondicherry)",
          "puducherry",
          "history",
          "white town (french quarter) & promenade",
          "sightseeing",
          "travel"
        ]
      },
      {
        "sectionTitle": "Auroville & Matrimandir Golden Sphere (History)",
        "content": "Experimental international township founded by Mirra Alfassa (The Mother) centered on the golden geodesic dome housing the world’s largest optically worked glass globe. Location: Puducherry (Pondicherry). Estimated visit duration: 180 minutes. Estimated entry fee: ₹0. Tips: Viewing point passes are free at the visitor center; inner chamber requires prior online booking ",
        "tags": [
          "puducherry (pondicherry)",
          "puducherry (pondicherry)",
          "puducherry",
          "history",
          "auroville & matrimandir golden sphere",
          "sightseeing",
          "travel"
        ]
      }
    ]
  },
  {
    "id": "doc-puducherry-culture-logistics",
    "destination": "Puducherry (Pondicherry)",
    "title": "Culture, Food & Transportation Guide for Puducherry (Pondicherry)",
    "category": "Food",
    "sections": [
      {
        "sectionTitle": "Cultural Traditions & Highlights of Puducherry (Pondicherry)",
        "content": "Cultural highlights of Puducherry (Pondicherry), Puducherry: Strolling or bicycling along cobblestone Rue Suffren and Rue Romain Rolland in French Quarter. Matrimandir golden globe silent concentration chamber in Auroville. French creperies, freshly baked baguettes, and artisanal sourdough. Recognized destination category: Historical Monuments & Heritage. Known aliases: Pondicherry, Pondy, White Town, Auroville, Matrimandir.",
        "tags": [
          "puducherry (pondicherry)",
          "puducherry (pondicherry)",
          "puducherry",
          "culture",
          "heritage",
          "tradition"
        ]
      },
      {
        "sectionTitle": "Authentic Regional Cuisine & Dining in Puducherry (Pondicherry)",
        "content": "Renowned food and dining specialties in Puducherry (Pondicherry): Cafe des Arts (Rue Suffren) (French Bistro & Creperie Breakfast): Famous for Buckwheat savory galettes, sweet Nutella banana crepes, Croque Monsieur, and espresso. Avg cost per person: ₹300.",
        "tags": [
          "puducherry (pondicherry)",
          "puducherry (pondicherry)",
          "puducherry",
          "food",
          "cuisine",
          "dining",
          "restaurants"
        ]
      },
      {
        "sectionTitle": "Transport, Access & Connectivity to Puducherry (Pondicherry)",
        "content": "Reaching Puducherry (Pondicherry), Puducherry: Nearest Airport: Puducherry Airport (PNY) / Chennai International Airport (MAA) - 135 km. Nearest Railway: Puducherry Railway Station (PDY). Road Connectivity: Picturesque East Coast Road (ECR) highway from Chennai.",
        "tags": [
          "puducherry (pondicherry)",
          "puducherry (pondicherry)",
          "puducherry",
          "transport",
          "connectivity",
          "airport",
          "railway",
          "roads"
        ]
      }
    ]
  }
];
