import { ActivityItem, MealRecommendation } from '../types';

export interface DestinationCatalogueItem {
  id: string;
  name: string;
  normalizedName: string;
  state: string;
  isUnionTerritory: boolean;
  district?: string;
  category: string;
  tagline: string;
  description: string;
  coordinates: { lat: number; lng: number };
  bestMonths: string;
  idealDays: number;
  popularInterests: string[];
  bannerUrl: string;
  aliases: string[];
  transportInfo: {
    nearestAirport: string;
    nearestRailway?: string;
    roadConnectivity: string;
    nearestPort?: string;
  };
  culturalHighlights: string[];
  sourceUrl: string;
  attractions: ActivityItem[];
  meals: MealRecommendation[];
}

export const ALL_INDIA_DESTINATIONS: DestinationCatalogueItem[] = [
  {
    "id": "agartala",
    "name": "Agartala & Ujjayanta Palace",
    "normalizedName": "agartala & ujjayanta palace",
    "state": "Tripura",
    "isUnionTerritory": false,
    "district": "West Tripura",
    "category": "Historical Monuments & Heritage",
    "tagline": "Land of Manikya Royalty - Neoclassical Ujjayanta Palace & Neermahal Water Palace",
    "description": "Charming northeastern capital famed for the gleaming white neoclassical Ujjayanta Palace set in Mughal-style gardens, Neermahal (the only water palace in eastern India set inside Rudrasagar Lake), and rich bamboo craftsmanship.",
    "coordinates": {
      "lat": 23.8315,
      "lng": 91.2868
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Culture",
      "Architecture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Agartala & Ujjayanta Palace",
      "Tripura Sundari",
      "Ujjayanta",
      "Neermahal"
    ],
    "transportInfo": {
      "nearestAirport": "Maharaja Bir Bikram Airport, Agartala (IXA) - 12 km",
      "nearestRailway": "Agartala Railway Station (AGTL)",
      "roadConnectivity": "NH 8 connects Tripura to Assam"
    },
    "culturalHighlights": [
      "Ujjayanta Palace State Museum (named by Nobel Laureate Rabindranath Tagore)",
      "Neermahal water castle reached via motorboat across Rudrasagar Lake",
      "Tripura Sundari Matabari 51 Shaktipeeth temple in Udaipur"
    ],
    "sourceUrl": "https://tripuratourism.gov.in",
    "attractions": [
      {
        "id": "agt-ujjayanta",
        "name": "Ujjayanta Palace (Tripura State Museum)",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Exquisite 1901 royal palace of the Manikya dynasty featuring ornate neoclassical domes, tiled floors, wooden carved ceilings, and expansive fountain courtyards.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 23.836,
          "lng": 91.282
        },
        "address": "Agartala & Ujjayanta Palace, Tripura",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit the museum galleries showcasing Northeast ethnographic tribal artifacts"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-agt-1",
        "name": "Kurry Club & Tribal Kitchen",
        "mealType": "Dinner",
        "cuisine": "Tripuri & Bengali",
        "famousFor": "Mui Borok (traditional Tripuri berma fermented fish stew) and Chakhwi bamboo dish",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 23.834,
          "lng": 91.28
        }
      }
    ]
  },
  {
    "id": "agra",
    "name": "Agra",
    "normalizedName": "agra",
    "state": "Uttar Pradesh",
    "isUnionTerritory": false,
    "district": "Agra",
    "category": "Historical Monuments & Heritage",
    "tagline": "City of the Taj Mahal - UNESCO Wonder of the World & Mughal Fortresses",
    "description": "Mughal capital on the banks of Yamuna River, internationally revered for the Taj Mahal (white marble mausoleum built by Shah Jahan), the formidable red sandstone Agra Fort, and the abandoned royal city of Fatehpur Sikri.",
    "coordinates": {
      "lat": 27.1767,
      "lng": 78.0081
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Romance",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Agra",
      "Taj Mahal",
      "Fatehpur Sikri",
      "Akbarabad"
    ],
    "transportInfo": {
      "nearestAirport": "Agra Airport (AGR) / IGI Airport Delhi (210 km)",
      "nearestRailway": "Agra Cantt (AGC) - Gatimaan Express connects from Delhi in 100 minutes",
      "roadConnectivity": "Yamuna Expressway from Delhi (2.5 hours)"
    },
    "culturalHighlights": [
      "Taj Mahal sunrise view with pink-golden morning reflections in the Yamuna",
      "Pietra Dura marble inlay artisan workshops in old Agra lanes",
      "Famous translucent Agra Petha sweets in dozens of flavors"
    ],
    "sourceUrl": "https://www.uptourism.gov.in",
    "attractions": [
      {
        "id": "agr-taj-mahal",
        "name": "The Taj Mahal",
        "category": "History",
        "timeSlot": "Morning",
        "description": "UNESCO World Heritage masterpiece of pure white Makrana marble built between 1631 and 1648, featuring flawless symmetry, calligraphy, and four minarets framing the central dome.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 27.1751,
          "lng": 78.0421
        },
        "address": "Agra, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Closed on Fridays; enter at 6:00 AM through the East or West gate for pristine sunrise crowd-free photography"
        ]
      },
      {
        "id": "agr-fort",
        "name": "Agra Fort (Red Sandstone Citadel)",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Imposing 16th-century Mughal fortress containing Jahangiri Mahal, Khas Mahal, Diwan-i-Khas, and the octagonal Musamman Burj tower where Shah Jahan gazed at the Taj.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 27.1795,
          "lng": 78.0211
        },
        "address": "Agra, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Great vantage point of the Taj Mahal framed through arched marble windows"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-agr-1",
        "name": "Panchi Petha Store (Sadar Bazar)",
        "mealType": "Snacks",
        "cuisine": "Agra Confectionery",
        "famousFor": "Original Kesar Angoori Petha, Chocolate Petha, and Dalmoth savory namkeen",
        "estimatedCostPerPersonInr": 100,
        "coordinates": {
          "lat": 27.16,
          "lng": 78.01
        }
      }
    ]
  },
  {
    "id": "ahmedabad",
    "name": "Ahmedabad",
    "normalizedName": "ahmedabad",
    "state": "Gujarat",
    "isUnionTerritory": false,
    "district": "Ahmedabad",
    "category": "Major Cities & Towns",
    "tagline": "India’s First UNESCO World Heritage City - Sabarmati Ashram & Pol Architecture",
    "description": "Historic and commercial powerhouse celebrated for Mahatma Gandhi’s Sabarmati Ashram, intricately carved stepwells, and midnight street food.",
    "coordinates": {
      "lat": 23.0225,
      "lng": 72.5714
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Culture",
      "Food",
      "Shopping"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Ahmedabad",
      "Amdavad",
      "Karnavati"
    ],
    "transportInfo": {
      "nearestAirport": "Sardar Vallabhbhai Patel International Airport (AMD) in city",
      "nearestRailway": "Ahmedabad Junction (ADI)",
      "roadConnectivity": "NE 1 expressway and NH 48"
    },
    "culturalHighlights": [
      "Sabarmati Riverfront promenade",
      "Manek Chowk midnight food market",
      "Adalaj Stepwell"
    ],
    "sourceUrl": "https://www.gujarattourism.com",
    "attractions": [
      {
        "id": "ahm-ashram",
        "name": "Sabarmati Ashram (Gandhi Smarak Sangrahalaya)",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Headquarters of Mahatma Gandhi from 1917 to 1930 and launching point of the historic Dandi Salt March.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 23.0605,
          "lng": 72.58
        },
        "address": "Ahmedabad, Gujarat",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Walk through Hriday Kunj and view handwritten letters"
        ]
      },
      {
        "id": "ahm-adalaj",
        "name": "Adalaj Stepwell (Rudabai Stepwell)",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Stunning 5-storey deep subterranean sandstone stepwell carved with Solanki architectural motifs in 1498.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 23.1667,
          "lng": 72.5833
        },
        "address": "Ahmedabad, Gujarat",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Marvel at the octagonal shafts and cooling breeze"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ahm-1",
        "name": "Agashiye Heritage Rooftop",
        "mealType": "Dinner",
        "cuisine": "Gujarati Fine Dining",
        "famousFor": "Grand Gujarati Thali with Dhokla, Kadhi, Ringan No Oro & Jalebi",
        "estimatedCostPerPersonInr": 700,
        "coordinates": {
          "lat": 23.027,
          "lng": 72.585
        }
      }
    ]
  },
  {
    "id": "aizawl",
    "name": "Aizawl",
    "normalizedName": "aizawl",
    "state": "Mizoram",
    "isUnionTerritory": false,
    "district": "Aizawl",
    "category": "Hill Stations & Mountains",
    "tagline": "Highland Citadel of Peace - Solomon’s Temple, Durtlang Hills & Bamboo Culture",
    "description": "Charming ridge-top capital situated at 1,132 meters, known for its tranquil traffic discipline (honk-free streets), Solomon’s Temple, vibrant Bara Bazar, and sweeping panoramic views of the Tlawng River valley.",
    "coordinates": {
      "lat": 23.7271,
      "lng": 92.7176
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Culture",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Aizawl",
      "Zoram",
      "Durtlang"
    ],
    "transportInfo": {
      "nearestAirport": "Lengpui Airport, Aizawl (AJL) - 32 km",
      "nearestRailway": "Bairabi Railway Station (130 km) / Silchar (170 km)",
      "roadConnectivity": "NH 54 connects Aizawl to Silchar in Assam"
    },
    "culturalHighlights": [
      "Cheraw bamboo dance",
      "Bara Bazar handloom Puan skirts",
      "Solomon’s white marble Temple"
    ],
    "sourceUrl": "https://tourism.mizoram.gov.in",
    "attractions": [
      {
        "id": "aiz-durtlang",
        "name": "Durtlang Hills Clifftop Viewpoint",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Dramatic rocky ridge offering sweeping panoramic vistas of the pastel-colored houses of Aizawl sprawling across the ridgeline.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 23.77,
          "lng": 92.73
        },
        "address": "Aizawl, Mizoram",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit at sunrise to see clouds blanket the surrounding river valleys below"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-aiz-1",
        "name": "Red Pepper Heritage Kitchen",
        "mealType": "Dinner",
        "cuisine": "Traditional Mizo",
        "famousFor": "Bai (steamed pork with seasonal vegetables and fermented bamboo shoot) and Sawhchiar",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 23.725,
          "lng": 92.715
        }
      }
    ]
  },
  {
    "id": "alleppey",
    "name": "Alleppey (Alappuzha)",
    "normalizedName": "alleppey (alappuzha)",
    "state": "Kerala",
    "isUnionTerritory": false,
    "district": "Alappuzha",
    "category": "Beaches & Coastal",
    "tagline": "Venice of the East - Houseboats, Serene Backwaters & Vembanad Lake",
    "description": "World-famous backwater haven renowned for overnight houseboat cruises through palm-fringed canals, paddy fields below sea level, and Nehru Trophy boat race.",
    "coordinates": {
      "lat": 9.4981,
      "lng": 76.3388
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Nature",
      "Beaches",
      "Food",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Alleppey (Alappuzha)",
      "Alappuzha",
      "Alleppey Backwaters",
      "Venice of the East"
    ],
    "transportInfo": {
      "nearestAirport": "Cochin Airport (85 km)",
      "nearestRailway": "Alappuzha Railway Station (ALLP)",
      "roadConnectivity": "NH 66 along coastal corridor"
    },
    "culturalHighlights": [
      "Traditional Kettuvallam thatch-roof houseboats",
      "Karimeen Pollichathu pearl spot fish",
      "Snake boat races in August"
    ],
    "sourceUrl": "https://keralatourism.org",
    "attractions": [
      {
        "id": "all-backwaters",
        "name": "Vembanad Lake Houseboat Cruise",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Gliding along quiet lagoons and village canals on an eco-friendly converted rice barge with fresh coconut water.",
        "visitDurationMinutes": 240,
        "estimatedCostInr": 1500,
        "coordinates": {
          "lat": 9.5,
          "lng": 76.35
        },
        "address": "Alleppey (Alappuzha), Kerala",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Choose day cruises for maximum canal scenery"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-all-1",
        "name": "Thaff Delicacy Alleppey",
        "mealType": "Lunch",
        "cuisine": "Kerala Coastal",
        "famousFor": "Karimeen Pollichathu wrapped in banana leaf and Malabar Biryani",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 9.495,
          "lng": 76.332
        }
      }
    ]
  },
  {
    "id": "amritsar",
    "name": "Amritsar",
    "normalizedName": "amritsar",
    "state": "Punjab",
    "isUnionTerritory": false,
    "district": "Amritsar",
    "category": "Religious & Pilgrimage",
    "tagline": "The Golden City - Sri Harmandir Sahib, Wagah Border & Legendary Kulchas",
    "description": "Spiritual and cultural heart of Sikhism, world-renowned for the magnificent 24-karat gold-gilded Sri Harmandir Sahib (Golden Temple), the solemn Jallianwala Bagh memorial, the electrifying Wagah Border retreat ceremony, and mouthwatering buttery Amritsari kulchas.",
    "coordinates": {
      "lat": 31.634,
      "lng": 74.8723
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "Temples",
      "History",
      "Food",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Amritsar",
      "Golden Temple City",
      "Harmandir Sahib",
      "Ambarsar"
    ],
    "transportInfo": {
      "nearestAirport": "Sri Guru Ram Dass Jee International Airport (ATQ) - 11 km",
      "nearestRailway": "Amritsar Junction (ASR)",
      "roadConnectivity": "Grand Trunk Road NH 3 from Delhi & Chandigarh"
    },
    "culturalHighlights": [
      "World’s largest free community kitchen (Guru Ka Langar) feeding 100,000 people daily",
      "Wagah Border Beating Retreat ceremony at sunset",
      "Phulkari embroidery and Punjabi Juttis in Hall Bazar"
    ],
    "sourceUrl": "https://punjabtourism.punjab.gov.in",
    "attractions": [
      {
        "id": "asr-golden-temple",
        "name": "Sri Harmandir Sahib (Golden Temple)",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "The holiest Gurudwara in Sikhism shimmering over the Amrit Sarovar sacred pool, open 24 hours to all people of all backgrounds and faiths.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 31.62,
          "lng": 74.8765
        },
        "address": "Amritsar, Punjab",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Cover your head, wash your feet at the entrance, and experience the communal Langar"
        ]
      },
      {
        "id": "asr-wagah",
        "name": "Wagah Border Beating Retreat Ceremony",
        "category": "History",
        "timeSlot": "Evening",
        "description": "Electrifying military drill conducted daily at sunset by the Indian Border Security Force (BSF) and Pakistan Rangers with high kicks and martial pageantry.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 31.604,
          "lng": 74.573
        },
        "address": "Amritsar, Punjab",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Reach the stadium by 3:30 PM for good stadium grandstand seats"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-asr-1",
        "name": "Bhai Kulwant Singh Kulchian Wale",
        "mealType": "Breakfast",
        "cuisine": "Punjabi Breakfast",
        "famousFor": "Crispy tandoor-baked Amritsari Aloo Pyaaz Kulcha dripping with homemade butter and chole",
        "estimatedCostPerPersonInr": 120,
        "coordinates": {
          "lat": 31.622,
          "lng": 74.874
        }
      },
      {
        "id": "m-asr-2",
        "name": "Kesar Da Dhaba (Est. 1916)",
        "mealType": "Dinner",
        "cuisine": "Traditional Punjabi",
        "famousFor": "Slow-cooked Maa ki Dal (12 hours in pure desi ghee) and Phirni in earthen pots",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 31.624,
          "lng": 74.878
        }
      }
    ]
  },
  {
    "id": "araku-valley",
    "name": "Araku Valley",
    "normalizedName": "araku valley",
    "state": "Andhra Pradesh",
    "isUnionTerritory": false,
    "district": "Alluri Sitharama Raju",
    "category": "Hill Stations & Mountains",
    "tagline": "Ooty of Andhra - Misty hills, cascading waterfalls, and aromatic coffee",
    "description": "A picturesque hill station in the Eastern Ghats renowned for lush coffee plantations, tribal culture, and ancient limestone caves.",
    "coordinates": {
      "lat": 18.3273,
      "lng": 82.8775
    },
    "bestMonths": "September to March",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Food",
      "Photography",
      "Adventure"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Araku Valley",
      "Araku",
      "Ananthagiri Hills",
      "Borra Caves"
    ],
    "transportInfo": {
      "nearestAirport": "Visakhapatnam Airport (VTZ) - 115 km",
      "nearestRailway": "Araku Railway Station (ARK)",
      "roadConnectivity": "Ghat road via SH 39 from Visakhapatnam"
    },
    "culturalHighlights": [
      "Dhimsa tribal dance",
      "Organic Araku Arabica coffee",
      "Bamboo woodcrafts"
    ],
    "sourceUrl": "https://tourism.ap.gov.in",
    "attractions": [
      {
        "id": "araku-borra",
        "name": "Borra Caves",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Million-year-old limestone caves featuring stalactites and stalagmites.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 80,
        "coordinates": {
          "lat": 18.2804,
          "lng": 83.0396
        },
        "address": "Araku Valley, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Wear shoes with good grip"
        ]
      },
      {
        "id": "araku-katiki",
        "name": "Katiki Waterfalls",
        "category": "Adventure",
        "timeSlot": "Afternoon",
        "description": "Cascading mountain waterfall accessed via 4x4 off-road jeep drive and forest trek.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 300,
        "coordinates": {
          "lat": 18.2917,
          "lng": 83.0039
        },
        "address": "Araku Valley, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Carry extra dry clothes"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-araku-1",
        "name": "Vasundhara Tribal Kitchen",
        "mealType": "Lunch",
        "cuisine": "Tribal Andhra",
        "famousFor": "Charcoal roasted Bongu Lo Kodi (Bamboo Chicken)",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 18.3285,
          "lng": 82.8732
        }
      }
    ]
  },
  {
    "id": "bengaluru",
    "name": "Bengaluru",
    "normalizedName": "bengaluru",
    "state": "Karnataka",
    "isUnionTerritory": false,
    "district": "Bengaluru Urban",
    "category": "Major Cities & Towns",
    "tagline": "Silicon Valley & Garden City of India - Lalbagh, Tech Parks & Craft Beer",
    "description": "Vibrant cosmopolitan hub blending botanical gardens from the 18th century, Tudor-style palaces, thriving IT parks, and India’s best microbrewery culture.",
    "coordinates": {
      "lat": 12.9716,
      "lng": 77.5946
    },
    "bestMonths": "September to March",
    "idealDays": 3,
    "popularInterests": [
      "Food",
      "Culture",
      "History",
      "Sightseeing"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Bengaluru",
      "Bangalore",
      "Garden City",
      "Bengaluru City"
    ],
    "transportInfo": {
      "nearestAirport": "Kempegowda International Airport (BLR) in Devanahalli",
      "nearestRailway": "KSR Bengaluru (SBC) & Yesvantpur (YPR)",
      "roadConnectivity": "Hub for NH 44, NH 48, and NH 75"
    },
    "culturalHighlights": [
      "Vidyarthi Bhavan masala dosa heritage",
      "Cubbon Park Sunday dog runs",
      "Craft beer culture in Indiranagar & Koramangala"
    ],
    "sourceUrl": "https://karnatakatourism.org",
    "attractions": [
      {
        "id": "blr-lalbagh",
        "name": "Lalbagh Botanical Garden & Glass House",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "240-acre botanical haven commissioned by Hyder Ali in 1760, centered around a Victorian Glass House modeled on London’s Crystal Palace.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 30,
        "coordinates": {
          "lat": 12.9507,
          "lng": 77.5848
        },
        "address": "Bengaluru, Karnataka",
        "imageUrl": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit between 6 AM and 9 AM for peaceful morning birdwatching"
        ]
      },
      {
        "id": "blr-palace",
        "name": "Bangalore Palace & Grounds",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Tudor-style royal estate built by Chamaraja Wadiyar in 1887 with turrets, wood carvings, and historical oil paintings.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 250,
        "coordinates": {
          "lat": 12.9988,
          "lng": 77.5921
        },
        "address": "Bengaluru, Karnataka",
        "imageUrl": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Audio guide included with admission ticket"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-blr-1",
        "name": "Vidyarthi Bhavan (Est. 1943)",
        "mealType": "Breakfast",
        "cuisine": "South Indian",
        "famousFor": "Crispy golden Butter Masala Dosa with thick coconut chutney",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 12.943,
          "lng": 77.57
        }
      }
    ]
  },
  {
    "id": "bhopal-sanchi",
    "name": "Bhopal & Sanchi",
    "normalizedName": "bhopal & sanchi",
    "state": "Madhya Pradesh",
    "isUnionTerritory": false,
    "district": "Bhopal and Raisen",
    "category": "Historical Monuments & Heritage",
    "tagline": "City of Lakes & UNESCO Sanchi Stupa - Ashokan Heritage & Upper Lake",
    "description": "Capital of MP known for its majestic historic mosques and Upper Lake, alongside the ancient 3rd-century BCE Great Stupa of Sanchi commissioned by Emperor Ashoka.",
    "coordinates": {
      "lat": 23.2599,
      "lng": 77.4126
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Culture",
      "Sightseeing",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Bhopal & Sanchi",
      "Bhopal",
      "Sanchi",
      "Great Stupa Sanchi"
    ],
    "transportInfo": {
      "nearestAirport": "Raja Bhoj Airport, Bhopal (BHO)",
      "nearestRailway": "Bhopal Junction (BPL) & Rani Kamlapati (RKMP)",
      "roadConnectivity": "NH 46 and NH 146 to Sanchi"
    },
    "culturalHighlights": [
      "UNESCO Great Stupa of Sanchi stone toranas",
      "Bhimbetka Stone Age cave paintings (45 km)",
      "Bhopali Paan & street food"
    ],
    "sourceUrl": "https://www.mptourism.com",
    "attractions": [
      {
        "id": "sanchi-stupa",
        "name": "The Great Stupa of Sanchi",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Oldest stone structure in India commissioned by Emperor Ashoka, featuring four exquisitely carved stone gateways (Toranas).",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 40,
        "coordinates": {
          "lat": 23.4794,
          "lng": 77.7397
        },
        "address": "Bhopal & Sanchi, Madhya Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Walk around the perimeter terrace clockwise"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-bho-1",
        "name": "Manohar Dairy & Restaurant",
        "mealType": "Lunch",
        "cuisine": "Central Indian & Sweets",
        "famousFor": "Bhopali Poha Jalebi, Chhole Bhature and Rabdi Malpua",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 23.27,
          "lng": 77.41
        }
      }
    ]
  },
  {
    "id": "bhubaneswar",
    "name": "Bhubaneswar",
    "normalizedName": "bhubaneswar",
    "state": "Odisha",
    "isUnionTerritory": false,
    "district": "Khurda",
    "category": "Major Cities & Towns",
    "tagline": "Temple City of India - Lingaraj Temple & Ancient Udayagiri Rock Caves",
    "description": "Capital of Odisha blending modern smart infrastructure with over 500 historic sandstone temples, including 11th-century Lingaraj, Rajarani temple, and the ancient Jain rock-cut caves of Udayagiri and Khandagiri.",
    "coordinates": {
      "lat": 20.2961,
      "lng": 85.8245
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Temples",
      "Food",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Bhubaneswar",
      "Temple City",
      "Ekamra Kshetra"
    ],
    "transportInfo": {
      "nearestAirport": "Biju Patnaik International Airport (BBI) in city center",
      "nearestRailway": "Bhubaneswar Railway Station (BBS)",
      "roadConnectivity": "Golden Quadrilateral NH 16"
    },
    "culturalHighlights": [
      "Lingaraj Temple 1,000-year-old Shiva shrine",
      "Pahala Rasagola sweet hub on Cuttack highway",
      "Tribal Research Institute Museum"
    ],
    "sourceUrl": "https://odishatourism.gov.in",
    "attractions": [
      {
        "id": "bbsr-lingaraj",
        "name": "Lingaraj Temple Complex",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Exquisite 180-foot deula tower dominating the Ekamra Kshetra skyline, dedicated to Harihara (Shiva and Vishnu blended).",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 20.2382,
          "lng": 85.8338
        },
        "address": "Bhubaneswar, Odisha",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Non-Hindus can view the temple courtyards from the elevated viewing platform outside"
        ]
      },
      {
        "id": "bbsr-udayagiri",
        "name": "Udayagiri & Khandagiri Rock-Cut Caves",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "2nd-century BCE rock-cut Jain residential cells and ornate carvings built by King Kharavela featuring the famous Rani Gumpha two-story palace cave.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 20.26,
          "lng": 85.787
        },
        "address": "Bhubaneswar, Odisha",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Beware of friendly monkeys around Khandagiri hill steps"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-bbsr-1",
        "name": "Dalma Restaurant",
        "mealType": "Lunch",
        "cuisine": "Traditional Odia",
        "famousFor": "Odia Dalma (lentils simmered with raw papaya and pumpkin), Pakhala Bhata, and Chhena Jhili",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 20.29,
          "lng": 85.82
        }
      }
    ]
  },
  {
    "id": "bodh-gaya",
    "name": "Bodh Gaya",
    "normalizedName": "bodh gaya",
    "state": "Bihar",
    "isUnionTerritory": false,
    "district": "Gaya",
    "category": "Religious & Pilgrimage",
    "tagline": "The Cradle of Buddhism - The Sacred Bodhi Tree & UNESCO Mahabodhi Temple",
    "description": "Sacred pilgrimage site where Siddhartha Gautama attained supreme enlightenment under the sacred Bodhi Tree.",
    "coordinates": {
      "lat": 24.6961,
      "lng": 84.9869
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Temples",
      "History",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Bodh Gaya",
      "Bodhgaya",
      "Mahabodhi",
      "Gaya"
    ],
    "transportInfo": {
      "nearestAirport": "Gaya Airport (12 km) / Patna (110 km)",
      "nearestRailway": "Gaya Junction (16 km)",
      "roadConnectivity": "Grand Trunk Road NH 19"
    },
    "culturalHighlights": [
      "Monastic meditation walks",
      "International Buddhist monasteries",
      "Buddha Jayanti"
    ],
    "sourceUrl": "https://tourism.bihar.gov.in",
    "attractions": [
      {
        "id": "bg-temple",
        "name": "Mahabodhi Temple & Bodhi Tree",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "UNESCO World Heritage 50m stone temple marking the sacred Bodhi Tree.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 24.6959,
          "lng": 84.9913
        },
        "address": "Bodh Gaya, Bihar",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Electronic items stored at counter"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-bg-1",
        "name": "Fujiya Green Diner",
        "mealType": "Lunch",
        "cuisine": "Pan-Asian & Bihari",
        "famousFor": "Bihari Litti Chokha & Vegetable Wontons",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 24.696,
          "lng": 84.988
        }
      }
    ]
  },
  {
    "id": "chandigarh",
    "name": "Chandigarh",
    "normalizedName": "chandigarh",
    "state": "Chandigarh",
    "isUnionTerritory": true,
    "district": "Chandigarh",
    "category": "Major Cities & Towns",
    "tagline": "The City Beautiful - Le Corbusier Architecture, Rock Garden & Sukhna Lake",
    "description": "India’s premier modern planned masterwork designed by Swiss-French architect Le Corbusier, famous for Nek Chand’s visionary Rock Garden created entirely from recycled urban waste, tranquil Sukhna Lake, and rose-scented garden boulevards.",
    "coordinates": {
      "lat": 30.7333,
      "lng": 76.7794
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Architecture",
      "Nature",
      "Art",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Chandigarh",
      "The City Beautiful",
      "Rock Garden",
      "Sukhna Lake"
    ],
    "transportInfo": {
      "nearestAirport": "Shaheed Bhagat Singh International Airport, Chandigarh (IXC) in Mohali",
      "nearestRailway": "Chandigarh Junction (CDG)",
      "roadConnectivity": "Himalayan Expressway and NH 44 connects to Delhi in 3.5 hours"
    },
    "culturalHighlights": [
      "UNESCO Capitol Complex featuring the Open Hand Monument",
      "Zakir Hussain Rose Garden (Asia’s largest with 50,000 rose bushes)",
      "Sector 17 pedestrian shopping plaza"
    ],
    "sourceUrl": "https://chandigarhtourism.gov.in",
    "attractions": [
      {
        "id": "chd-rock-garden",
        "name": "Nek Chand’s Rock Garden",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Visionary 40-acre wonderland featuring courtyards, waterfalls, and thousands of sculptures made from discarded ceramic bangles, electrical porcelain, tiles, and household waste.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 30,
        "coordinates": {
          "lat": 30.7525,
          "lng": 76.8072
        },
        "address": "Chandigarh, Chandigarh",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Comfortable walking shoes are essential to navigate narrow stone doorways and amphitheatres"
        ]
      },
      {
        "id": "chd-sukhna-lake",
        "name": "Sukhna Lake Promenade",
        "category": "Nature",
        "timeSlot": "Evening",
        "description": "Serene 3-sq-km man-made reservoir at the foothills of the Shivalik range, popular for paddle boating, sunset jogging, and migratory bird watching.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 30.742,
          "lng": 76.818
        },
        "address": "Chandigarh, Chandigarh",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Hire a swan paddleboat and stroll along the illuminated promenade"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-chd-1",
        "name": "Pal Dhaba (Sector 28 - Est. 1968)",
        "mealType": "Dinner",
        "cuisine": "Authentic Punjabi",
        "famousFor": "Butter Chicken, Dal Makhani, Mutton Curry, and tandoori garlic naan",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 30.72,
          "lng": 76.79
        }
      }
    ]
  },
  {
    "id": "chennai",
    "name": "Chennai",
    "normalizedName": "chennai",
    "state": "Tamil Nadu",
    "isUnionTerritory": false,
    "district": "Chennai",
    "category": "Major Cities & Towns",
    "tagline": "Gateway to South India - Marina Beach, Kapaleeshwarar Temple & Carnatic Music",
    "description": "Vibrant cultural coastal capital renowned for Marina Beach (one of the world’s longest natural urban beaches), 7th-century Kapaleeshwarar Temple in Mylapore, colonial Fort St. George, and UNESCO Mahabalipuram shore temples nearby.",
    "coordinates": {
      "lat": 13.0827,
      "lng": 80.2707
    },
    "bestMonths": "November to February (Margazhi music season in Dec-Jan)",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Culture",
      "Beaches",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Chennai",
      "Madras",
      "Mylapore",
      "Marina"
    ],
    "transportInfo": {
      "nearestAirport": "Chennai International Airport (MAA) in Meenambakkam",
      "nearestRailway": "Chennai Central (MAS) & Chennai Egmore (MS)",
      "roadConnectivity": "Golden Quadrilateral NH 16 and NH 48"
    },
    "culturalHighlights": [
      "Margazhi Carnatic classical music and Bharatanatyam dance festival",
      "Degree filter coffee and crispy masala dosas in Mylapore",
      "UNESCO Shore Temples and monolithic rathas in nearby Mahabalipuram"
    ],
    "sourceUrl": "https://www.tamilnadutourism.tn.gov.in",
    "attractions": [
      {
        "id": "chn-kapaleeshwarar",
        "name": "Arulmigu Kapaleeshwarar Temple, Mylapore",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Magnificent Dravidian temple dedicated to Lord Shiva featuring a rainbow-hued 120-foot gopuram, ancient sacred pond, and peacocks in the courtyards.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 13.0336,
          "lng": 80.2699
        },
        "address": "Chennai, Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Walk through the surrounding Mylapore temple car streets for fresh filter coffee and silk sarees"
        ]
      },
      {
        "id": "chn-marina-beach",
        "name": "Marina Beach Promenade",
        "category": "Beaches",
        "timeSlot": "Evening",
        "description": "Vast 13-km sandy coast bustling with sea breezes, historical statues, carousel rides, and stalls serving crispy fresh seafood and sundal.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 13.05,
          "lng": 80.2824
        },
        "address": "Chennai, Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit near the lighthouse during golden hour sunset"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-chn-1",
        "name": "Saravana Bhavan (Mylapore)",
        "mealType": "Breakfast",
        "cuisine": "Traditional Tamil Tiffins",
        "famousFor": "Crispy Ghee Roast Dosa, Medu Vada, and piping hot brass tumbler Filter Coffee",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 13.034,
          "lng": 80.271
        }
      }
    ]
  },
  {
    "id": "cherrapunji",
    "name": "Cherrapunji & Nongriat",
    "normalizedName": "cherrapunji & nongriat",
    "state": "Meghalaya",
    "isUnionTerritory": false,
    "district": "East Khasi Hills",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "Land of Rainclouds - Double Decker Living Root Bridges & Nohkalikai Falls",
    "description": "Fabled clifftop tableland world-renowned for torrential monsoon rains, deep canyon gorges, Nohkalikai Falls (India’s tallest plunge waterfall), and the botanical marvel of centuries-old bioengineered living root bridges in Nongriat.",
    "coordinates": {
      "lat": 25.2702,
      "lng": 91.7323
    },
    "bestMonths": "September to April (Sightseeing) / June to August (Monsoon spectacle)",
    "idealDays": 2,
    "popularInterests": [
      "Adventure",
      "Nature",
      "Trekking",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Cherrapunji & Nongriat",
      "Sohra",
      "Nohkalikai",
      "Double Decker Root Bridge",
      "Nongriat"
    ],
    "transportInfo": {
      "nearestAirport": "Guwahati (150 km) / Shillong (54 km)",
      "nearestRailway": "Guwahati Junction (145 km)",
      "roadConnectivity": "Spectacular cloud-shrouded highway SH 5 from Shillong"
    },
    "culturalHighlights": [
      "Khasi bioengineered Ficus elastica living root bridges",
      "Limestone Mawsmai and Arwah spelunking caves",
      "Seven Sisters Falls"
    ],
    "sourceUrl": "https://www.meghalayatourism.in",
    "attractions": [
      {
        "id": "sohra-nohkalikai",
        "name": "Nohkalikai Falls Viewpoint",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Dramatic 1,115-foot direct plunge waterfall dropping from red sandstone cliffs into an intense emerald-turquoise plunge pool.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 25.275,
          "lng": 91.685
        },
        "address": "Cherrapunji & Nongriat, Meghalaya",
        "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit mid-morning after early mist clears for unobstructed gorge views"
        ]
      },
      {
        "id": "sohra-double-decker",
        "name": "Nongriat Double Decker Living Root Bridge",
        "category": "Adventure",
        "timeSlot": "Afternoon",
        "description": "Iconic two-tier natural bridge woven by Khasi tribes from living rubber tree roots across the roaring Umshiang River, reached via a 3,000-step rainforest trek.",
        "visitDurationMinutes": 300,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 25.2508,
          "lng": 91.6744
        },
        "address": "Cherrapunji & Nongriat, Meghalaya",
        "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Carry trekking poles and refillable water bottles; take a dip in Rainbow Falls natural pool"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-sohra-1",
        "name": "Orange Roots (Pure Veg & Thali)",
        "mealType": "Lunch",
        "cuisine": "North & South Indian Thali",
        "famousFor": "Deluxe vegetarian thali and steaming masala tea overlooking Sohra canyons",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 25.28,
          "lng": 91.72
        }
      }
    ]
  },
  {
    "id": "ajanta-ellora",
    "name": "Chhatrapati Sambhajinagar (Ajanta & Ellora)",
    "normalizedName": "chhatrapati sambhajinagar (ajanta & ellora)",
    "state": "Maharashtra",
    "isUnionTerritory": false,
    "district": "Chhatrapati Sambhajinagar",
    "category": "Historical Monuments & Heritage",
    "tagline": "UNESCO Monolithic Wonders - Kailash Temple & Ajanta Fresco Caves",
    "description": "Home of the jaw-dropping Kailash Temple at Ellora carved out of a single rock cliff, alongside 30 rock-cut Buddhist mural caves at Ajanta dating to 2nd century BCE.",
    "coordinates": {
      "lat": 19.8762,
      "lng": 75.3433
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Architecture",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Chhatrapati Sambhajinagar (Ajanta & Ellora)",
      "Aurangabad",
      "Ajanta Caves",
      "Ellora Caves",
      "Kailash Temple"
    ],
    "transportInfo": {
      "nearestAirport": "Chhatrapati Sambhajinagar Airport (IXU) in city",
      "nearestRailway": "Aurangabad Railway Station (AWB)",
      "roadConnectivity": "Connected via Samruddhi Mahamarg Expressway"
    },
    "culturalHighlights": [
      "Monolithic Kailash Temple (Cave 16) carved top-to-bottom",
      "Ancient Ajanta Jataka tale mural paintings",
      "Himroo shawls & Naan Qalia"
    ],
    "sourceUrl": "https://www.maharashtratourism.gov.in",
    "attractions": [
      {
        "id": "ellora-kailash",
        "name": "Kailash Temple (Ellora Cave 16)",
        "category": "History",
        "timeSlot": "Morning",
        "description": "The largest monolithic rock-cut monument in the world, carved downwards from a basalt cliff using 200,000 tonnes of excavated rock.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 40,
        "coordinates": {
          "lat": 20.0238,
          "lng": 75.1794
        },
        "address": "Chhatrapati Sambhajinagar (Ajanta & Ellora), Maharashtra",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Closed on Tuesdays; visit early morning for best lighting"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-aur-1",
        "name": "Yelli Naan Qalia Kitchen",
        "mealType": "Dinner",
        "cuisine": "Mughlai & Deccani",
        "famousFor": "Slow-cooked Naan Qalia served with hot tandoori fermented bread",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 19.88,
          "lng": 75.33
        }
      }
    ]
  },
  {
    "id": "chitrakote",
    "name": "Chitrakote & Bastar",
    "normalizedName": "chitrakote & bastar",
    "state": "Chhattisgarh",
    "isUnionTerritory": false,
    "district": "Bastar",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "The Niagara of India - Horseshoe Cataract & Bell Metal Dhokra Craft",
    "description": "Spectacular 300-meter wide horseshoe waterfall on the Indravati River surrounded by ancient Sal forests and indigenous Bastar tribal art.",
    "coordinates": {
      "lat": 19.201,
      "lng": 81.705
    },
    "bestMonths": "July to February",
    "idealDays": 3,
    "popularInterests": [
      "Waterfalls",
      "Nature",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Chitrakote & Bastar",
      "Chitrakote Falls",
      "Bastar",
      "Jagdalpur"
    ],
    "transportInfo": {
      "nearestAirport": "Jagdalpur Airport (40 km)",
      "nearestRailway": "Jagdalpur Station (38 km)",
      "roadConnectivity": "NH 30 via Raipur"
    },
    "culturalHighlights": [
      "Dhokra lost-wax metal craft",
      "Bastar Dussehra 75-day festival"
    ],
    "sourceUrl": "https://chhattisgarhtourism.cg.gov.in",
    "attractions": [
      {
        "id": "chitrakote-falls",
        "name": "Chitrakote Horseshoe Falls",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Widest waterfall in India dropping 95 feet into a churning mist basin.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 30,
        "coordinates": {
          "lat": 19.2015,
          "lng": 81.706
        },
        "address": "Chitrakote & Bastar, Chhattisgarh",
        "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take the government paddle boat"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ck-1",
        "name": "Bastar Tribal Kitchen",
        "mealType": "Lunch",
        "cuisine": "Tribal",
        "famousFor": "Rice flour Chousela and Dubki Kadhi",
        "estimatedCostPerPersonInr": 180,
        "coordinates": {
          "lat": 19.07,
          "lng": 82.02
        }
      }
    ]
  },
  {
    "id": "coorg",
    "name": "Coorg (Kodagu)",
    "normalizedName": "coorg (kodagu)",
    "state": "Karnataka",
    "isUnionTerritory": false,
    "district": "Kodagu",
    "category": "Hill Stations & Mountains",
    "tagline": "Scotland of India - Coffee Plantations, Abbey Falls & Kodava Hospitality",
    "description": "Lush mountain district draped in emerald coffee plantations, misty valleys, Abbey Falls, and the rich martial culture of the Kodavas.",
    "coordinates": {
      "lat": 12.3375,
      "lng": 75.8069
    },
    "bestMonths": "September to March",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Food",
      "Culture",
      "Adventure"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Coorg (Kodagu)",
      "Kodagu",
      "Madikeri",
      "Scotland of India"
    ],
    "transportInfo": {
      "nearestAirport": "Kannur Airport (CNN) - 90 km / Mangalore (135 km) / Bangalore (260 km)",
      "nearestRailway": "Mysuru Junction (120 km)",
      "roadConnectivity": "NH 275 from Mysuru"
    },
    "culturalHighlights": [
      "Kodava Pandi Curry and Akki Roti",
      "Namdroling Golden Temple Tibetan monastery in Bylakuppe"
    ],
    "sourceUrl": "https://karnatakatourism.org",
    "attractions": [
      {
        "id": "coorg-abbey",
        "name": "Abbey Falls Cascades",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "70-foot waterfall roaring down jagged rocks amidst coffee estates and spice groves, viewed from a hanging bridge.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 12.45,
          "lng": 75.718
        },
        "address": "Coorg (Kodagu), Karnataka",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Wear non-slip footwear for the 200m walkway"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-coorg-1",
        "name": "Coorg Cuisine Madikeri",
        "mealType": "Lunch",
        "cuisine": "Kodava Traditional",
        "famousFor": "Authentic Kodava Pandi Curry with soft Kadambuttu rice balls",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 12.42,
          "lng": 75.738
        }
      }
    ]
  },
  {
    "id": "daman-diu",
    "name": "Daman & Diu",
    "normalizedName": "daman & diu",
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "isUnionTerritory": true,
    "district": "Daman / Diu",
    "category": "Beaches & Coastal",
    "tagline": "Portuguese Coastal Enclaves - Moti Daman Fort & Diu Island Fortress",
    "description": "Charming former Portuguese territories along the Arabian Sea, renowned for the formidable 16th-century sea-facing Diu Fort, St. Paul’s Baroque Church, shell-shaped Nagoa Beach, and the walled citadel of Moti Daman.",
    "coordinates": {
      "lat": 20.4283,
      "lng": 72.8397
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Beaches",
      "Architecture",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Daman & Diu",
      "Daman",
      "Diu",
      "Nagoa Beach",
      "Moti Daman"
    ],
    "transportInfo": {
      "nearestAirport": "Diu Airport (DIU) / Surat Airport (120 km from Daman) / Mumbai (170 km)",
      "nearestRailway": "Vapi Railway Station (12 km from Daman) / Veraval (90 km from Diu)",
      "roadConnectivity": "NH 48 connects Daman to Mumbai and Surat"
    },
    "culturalHighlights": [
      "St. Paul’s Church intricate wood carvings and Portuguese Baroque facade",
      "Nagoa Beach unique Hoka palm trees brought from Africa",
      "Lighthouse and sea canyon at Naida Caves"
    ],
    "sourceUrl": "https://www.ddd.gov.in",
    "attractions": [
      {
        "id": "diu-fort",
        "name": "Diu Sea Fortress & Lighthouse",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Imposing 1535 stone citadel jutting into the Arabian Sea with three moats, double ramparts mounted with bronze cannons, and sweeping panoramic ocean vistas.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 20.713,
          "lng": 70.995
        },
        "address": "Daman & Diu, Dadra and Nagar Haveli and Daman and Diu",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Climb to the lighthouse parapet for panoramic views of Diu town and crashing sea waves"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-diu-1",
        "name": "O Coqueiro Heritage Restaurant",
        "mealType": "Lunch",
        "cuisine": "Portuguese-Goan & Seafood",
        "famousFor": "Goan Fish Curry with rice, Crab Masala, and Bebinca layer cake",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 20.71,
          "lng": 70.985
        }
      }
    ]
  },
  {
    "id": "darjeeling",
    "name": "Darjeeling",
    "normalizedName": "darjeeling",
    "state": "West Bengal",
    "isUnionTerritory": false,
    "district": "Darjeeling",
    "category": "Hill Stations & Mountains",
    "tagline": "Queen of the Hills - Himalayan Toy Train, Tiger Hill Sunrise & World-Famous Tea",
    "description": "Breathtaking Himalayan hill station at 2,050 meters, renowned for golden sunrise views of Kanchenjunga from Tiger Hill, the UNESCO Darjeeling Himalayan Railway steam toy train, emerald slope tea gardens, and Tibetan monasteries.",
    "coordinates": {
      "lat": 27.041,
      "lng": 88.2663
    },
    "bestMonths": "March to May & October to December",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Culture",
      "Photography",
      "Trekking"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Darjeeling",
      "Tiger Hill",
      "Ghum",
      "Batasia Loop"
    ],
    "transportInfo": {
      "nearestAirport": "Bagdogra Airport (IXB) - 70 km",
      "nearestRailway": "New Jalpaiguri Junction (NJP) - 72 km / Ghum (highest altitude station in India)",
      "roadConnectivity": "Hill Cart Road NH 110 from Siliguri"
    },
    "culturalHighlights": [
      "UNESCO Darjeeling Himalayan Railway steam engine circling the Batasia Loop war memorial",
      "Tasting fresh first-flush champagne Darjeeling tea on heritage estates",
      "Himalayan Mountaineering Institute & Zoo housing Red Pandas and Snow Leopards"
    ],
    "sourceUrl": "https://www.wbtourism.gov.in",
    "attractions": [
      {
        "id": "dar-tiger-hill",
        "name": "Tiger Hill Kanchenjunga Sunrise Viewpoint",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Vantage point at 2,590 meters famous for dawn vistas as the rising sun casts glowing pink and fiery orange hues across the twin peaks of Kanchenjunga and Mount Everest.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 27.008,
          "lng": 88.286
        },
        "address": "Darjeeling, West Bengal",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Depart your hotel at 4:00 AM; dress in warm fleece and gloves as dawn temperatures drop near freezing"
        ]
      },
      {
        "id": "dar-batasia-loop",
        "name": "Batasia Loop & War Memorial",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Engineering marvel spiral railway loop where the Toy Train negotiates a 360-degree curve through landscaped gardens with the Gorkha soldier war memorial at the center.",
        "visitDurationMinutes": 60,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 27.016,
          "lng": 88.246
        },
        "address": "Darjeeling, West Bengal",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Listen for the whistle of the vintage steam locomotive passing through"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-dar-1",
        "name": "Glenary’s Bakery & Cafe (Est. 1885)",
        "mealType": "Breakfast",
        "cuisine": "Colonial British Bakery & Continental",
        "famousFor": "Fresh Darjeeling first-flush tea in porcelain teapots, cinnamon buns, apple pies, and English breakfast",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 27.044,
          "lng": 88.267
        }
      }
    ]
  },
  {
    "id": "dawki-mawlynnong",
    "name": "Dawki & Mawlynnong",
    "normalizedName": "dawki & mawlynnong",
    "state": "Meghalaya",
    "isUnionTerritory": false,
    "district": "West Jaintia Hills",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "Crystal Umngot Waters & Asia’s Cleanest Eco-Village",
    "description": "Border paradise renowned for the Umngot River where water is so glass-transparent that wooden boats appear floating in mid-air, paired with Mawlynnong, recognized as Asia’s cleanest village.",
    "coordinates": {
      "lat": 25.188,
      "lng": 92.019
    },
    "bestMonths": "November to April",
    "idealDays": 2,
    "popularInterests": [
      "Nature",
      "Boating",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Dawki & Mawlynnong",
      "Dawki River",
      "Umngot",
      "Mawlynnong Village",
      "Shnongpdeng"
    ],
    "transportInfo": {
      "nearestAirport": "Shillong (85 km) / Guwahati (175 km)",
      "nearestRailway": "Guwahati (170 km)",
      "roadConnectivity": "Scenic southern highway through Pynursla"
    },
    "culturalHighlights": [
      "Crystal glass boating on Umngot River",
      "Spotless bamboo-lined streets and living root bridge in Mawlynnong",
      "Indo-Bangladesh friendship gate"
    ],
    "sourceUrl": "https://www.meghalayatourism.in",
    "attractions": [
      {
        "id": "dwk-umngot",
        "name": "Umngot River Glass Boating & Shnongpdeng",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Country boat ride gliding over crystal clear riverbed stones visible up to 20 feet deep, framed by lush jungle riverbanks.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 800,
        "coordinates": {
          "lat": 25.188,
          "lng": 92.019
        },
        "address": "Dawki & Mawlynnong, Meghalaya",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Winter months (Dec-Feb) offer the absolute clearest water clarity"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-dwk-1",
        "name": "Shnongpdeng Riverfront Tribal Diner",
        "mealType": "Lunch",
        "cuisine": "Khasi Local",
        "famousFor": "Freshly caught river fish fry with Jadoh rice and seasonal bamboo chutney",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 25.2,
          "lng": 92.03
        }
      }
    ]
  },
  {
    "id": "delhi",
    "name": "Delhi",
    "normalizedName": "delhi",
    "state": "Delhi",
    "isUnionTerritory": true,
    "district": "New Delhi & Central Delhi",
    "category": "Major Cities & Towns",
    "tagline": "Heart of the Nation - Red Fort, Qutub Minar, India Gate & Chandni Chowk",
    "description": "The historic and dynamic national capital uniting eight medieval empire cities with modern Lutyens boulevards, famous for the red sandstone Red Fort, the 73-meter Qutub Minar, India Gate war memorial, Lotus Temple, and the sensory street food frenzy of Chandni Chowk.",
    "coordinates": {
      "lat": 28.6139,
      "lng": 77.209
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Food",
      "Culture",
      "Shopping",
      "Architecture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Delhi",
      "New Delhi",
      "NCR",
      "Old Delhi",
      "Dilli",
      "Chandni Chowk",
      "Red Fort"
    ],
    "transportInfo": {
      "nearestAirport": "Indira Gandhi International Airport (DEL) in Palam",
      "nearestRailway": "New Delhi (NDLS), Old Delhi (DLI) & Hazrat Nizamuddin (NZM)",
      "roadConnectivity": "Delhi-Mumbai Expressway, Yamuna Expressway, GT Road"
    },
    "culturalHighlights": [
      "UNESCO monuments: Qutub Minar, Humayun’s Tomb, and Red Fort",
      "Paranthe Wali Gali and spice aromas of Khari Baoli (Asia’s largest wholesale spice market)",
      "Sufi Qawwali sessions on Thursday evenings at Hazrat Nizamuddin Dargah"
    ],
    "sourceUrl": "https://delhitourism.gov.in",
    "attractions": [
      {
        "id": "del-red-fort",
        "name": "Red Fort (Lal Qila)",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Magnificent 1648 red sandstone palace fortress constructed by Shah Jahan, housing the Diwan-i-Aam, Diwan-i-Khas, and Chhatta Chowk covered bazaar.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 28.6562,
          "lng": 77.241
        },
        "address": "Delhi, Delhi",
        "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Closed on Mondays; explore Chandni Chowk street food right across the road afterward"
        ]
      },
      {
        "id": "del-qutub-minar",
        "name": "Qutub Minar & Mehrauli Archaeological Complex",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "World’s tallest brick minaret standing at 72.5 meters built in 1192, featuring flute carvings, Quranic calligraphy, and the rust-resistant 1,600-year-old Iron Pillar of Chandragupta II.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 28.5244,
          "lng": 77.1855
        },
        "address": "Delhi, Delhi",
        "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit in late afternoon when warm sunlight brings out the red sandstone carvings"
        ]
      },
      {
        "id": "del-india-gate",
        "name": "India Gate & Kartavya Path",
        "category": "History",
        "timeSlot": "Evening",
        "description": "Imposing 42-meter triumphal arch war memorial honoring 84,000 Indian soldiers, framed by fountains, illuminated lawns, and the Amar Jawan Jyoti flame.",
        "visitDurationMinutes": 60,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 28.6129,
          "lng": 77.2295
        },
        "address": "Delhi, Delhi",
        "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Ideal for an evening stroll; enjoy ice cream from street carts along the illuminated promenade"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-del-1",
        "name": "Karim’s (Jama Masjid - Est. 1913)",
        "mealType": "Dinner",
        "cuisine": "Mughlai Royal",
        "famousFor": "Mutton Burra Kebab, Butter Chicken, Rogan Josh, and hot Khamiri Roti",
        "estimatedCostPerPersonInr": 400,
        "coordinates": {
          "lat": 28.6505,
          "lng": 77.2335
        }
      },
      {
        "id": "m-del-2",
        "name": "Pandit Gaya Prasad Shiv Charan (Paranthe Wali Gali - Est. 1872)",
        "mealType": "Lunch",
        "cuisine": "Old Delhi Street Food",
        "famousFor": "Crispy deep-fried paranthas stuffed with Rabri, Khoya, Paneer, or Green Peas, served with pumpkin sabzi and sweet tamarind dip",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 28.655,
          "lng": 77.231
        }
      }
    ]
  },
  {
    "id": "deoghar",
    "name": "Deoghar",
    "normalizedName": "deoghar",
    "state": "Jharkhand",
    "isUnionTerritory": false,
    "district": "Deoghar",
    "category": "Religious & Pilgrimage",
    "tagline": "Abode of the Gods - Baba Baidyanath Jyotirlinga Dham & Trikut Ropeway",
    "description": "Revered spiritual holy city housing one of the twelve sacred Jyotirlingas of Lord Shiva, attracting millions during the annual Shravani Mela.",
    "coordinates": {
      "lat": 24.4826,
      "lng": 86.7004
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Temples",
      "History",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Deoghar",
      "Baidyanath Dham",
      "Deogarh"
    ],
    "transportInfo": {
      "nearestAirport": "Deoghar International Airport (DGH) in city",
      "nearestRailway": "Jasidih Junction (JSME) - 7 km",
      "roadConnectivity": "Connected via NH 114A"
    },
    "culturalHighlights": [
      "Shravani Mela holy Kanwar pilgrimage",
      "Baidyanath Peda sweet specialty"
    ],
    "sourceUrl": "https://tourism.jharkhand.gov.in",
    "attractions": [
      {
        "id": "deo-baidyanath",
        "name": "Baba Baidyanath Jyotirlinga Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Ancient stone temple complex with pyramidal towers where Ravana worshipped Shiva to obtain the Atmalinga.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 24.492,
          "lng": 86.7
        },
        "address": "Deoghar, Jharkhand",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Special VIP darshan passes available during crowded morning hours"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-deo-1",
        "name": "Hari Om Peda & Sweets",
        "mealType": "Breakfast",
        "cuisine": "Traditional Sweets & Snacks",
        "famousFor": "Caramelized Mawa Peda and Kachori with Hing Aloo Sabzi",
        "estimatedCostPerPersonInr": 100,
        "coordinates": {
          "lat": 24.485,
          "lng": 86.698
        }
      }
    ]
  },
  {
    "id": "dharamshala-mcleodganj",
    "name": "Dharamshala & McLeodganj",
    "normalizedName": "dharamshala & mcleodganj",
    "state": "Himachal Pradesh",
    "isUnionTerritory": false,
    "district": "Kangra",
    "category": "Cultural & Local Experiences",
    "tagline": "Little Lhasa of India - Residence of the Dalai Lama & Dhauladhar Treks",
    "description": "Spiritual haven in the Kangra Valley surrounded by cedar forests and snow peaks, serving as the seat of the Tibetan government-in-exile and starting point for Triund.",
    "coordinates": {
      "lat": 32.219,
      "lng": 76.3234
    },
    "bestMonths": "March to June & September to November",
    "idealDays": 3,
    "popularInterests": [
      "Culture",
      "Adventure",
      "Nature",
      "Temples"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Dharamshala & McLeodganj",
      "Dharamsala",
      "McLeod Ganj",
      "Little Lhasa",
      "Kangra"
    ],
    "transportInfo": {
      "nearestAirport": "Gaggal Airport, Kangra (15 km)",
      "nearestRailway": "Pathankot Junction (85 km)",
      "roadConnectivity": "NH 503 from Kangra / Pathankot"
    },
    "culturalHighlights": [
      "Tsuglagkhang Complex & Dalai Lama temple teachings",
      "Norbulingka Institute Tibetan arts",
      "Triund ridge trek"
    ],
    "sourceUrl": "https://himachaltourism.gov.in",
    "attractions": [
      {
        "id": "dharam-dalai-lama",
        "name": "Tsuglagkhang Complex (Dalai Lama Temple)",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Serene monastery housing the Namgyal monks, gilded statues of Avalokiteshvara, and Tibetan museum.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 32.235,
          "lng": 76.326
        },
        "address": "Dharamshala & McLeodganj, Himachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Circumambulate the Lingkor meditation path through prayer flags"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-dhar-1",
        "name": "Tibet Kitchen McLeodganj",
        "mealType": "Lunch",
        "cuisine": "Tibetan & Himalayan",
        "famousFor": "Tingmo steamed buns with spicy Shapta and Thukpa",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 26.237,
          "lng": 76.327
        }
      }
    ]
  },
  {
    "id": "dudhsagar-falls",
    "name": "Dudhsagar Falls",
    "normalizedName": "dudhsagar falls",
    "state": "Goa",
    "isUnionTerritory": false,
    "district": "South Goa",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "Sea of Milk - Majestic 310m Tiered Waterfall in Bhagwan Mahaveer Sanctuary",
    "description": "One of India’s tallest four-tiered waterfalls tumbling 310 meters through dense Western Ghats rainforest on the Mandovi River.",
    "coordinates": {
      "lat": 15.3144,
      "lng": 74.3144
    },
    "bestMonths": "June to February",
    "idealDays": 2,
    "popularInterests": [
      "Waterfalls",
      "Adventure",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Dudhsagar Falls",
      "Dudhsagar",
      "Sea of Milk"
    ],
    "transportInfo": {
      "nearestAirport": "Dabolim Airport (70 km)",
      "nearestRailway": "Kulem Railway Station (QLM) - 12 km",
      "roadConnectivity": "Forest department 4x4 jeeps from Kulem"
    },
    "culturalHighlights": [
      "Bhagwan Mahaveer Wildlife Sanctuary biodiversity",
      "Trek along railway viaduct arches"
    ],
    "sourceUrl": "https://goatourism.gov.in",
    "attractions": [
      {
        "id": "dudhsagar-pool",
        "name": "Dudhsagar Plunge Pool & Forest Trail",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Majestic milky torrent pouring down steep granite cliffs into a refreshing natural freshwater pool.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 500,
        "coordinates": {
          "lat": 15.314,
          "lng": 74.314
        },
        "address": "Dudhsagar Falls, Goa",
        "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Life jacket mandatory for swimming in the natural pool"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-dudh-1",
        "name": "Kulem Jungle Safari Canteen",
        "mealType": "Lunch",
        "cuisine": "Goan",
        "famousFor": "Simple coastal vegetable thali and fish curry",
        "estimatedCostPerPersonInr": 180,
        "coordinates": {
          "lat": 15.32,
          "lng": 74.24
        }
      }
    ]
  },
  {
    "id": "dzukou-valley",
    "name": "Dzukou Valley",
    "normalizedName": "dzukou valley",
    "state": "Nagaland",
    "isUnionTerritory": false,
    "district": "Kohima",
    "category": "Adventure & Trekking",
    "tagline": "Valley of Flowers of the East - Emerald Rolling Hills & Rare Dzukou Lilies",
    "description": "High-altitude wonderland sitting at 2,452 meters along the Nagaland-Manipur border, famous for undulating carpeted green knolls, serpentine streams, cave camping, and endemic pink Dzukou lilies.",
    "coordinates": {
      "lat": 25.56,
      "lng": 94.07
    },
    "bestMonths": "June to September (Flowers) / October to March (Clear skies and frost)",
    "idealDays": 2,
    "popularInterests": [
      "Trekking",
      "Adventure",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Dzukou Valley",
      "Dzukou",
      "Japfu Range"
    ],
    "transportInfo": {
      "nearestAirport": "Dimapur Airport (95 km)",
      "nearestRailway": "Dimapur Junction (90 km)",
      "roadConnectivity": "Drive from Kohima to Viswema or Jakhama village base points"
    },
    "culturalHighlights": [
      "Rare Dzukou Lily blossoming in monsoon",
      "Natural rock caves used by trekkers for fire campouts",
      "Pristine frozen winter landscapes"
    ],
    "sourceUrl": "https://tourism.nagaland.gov.in",
    "attractions": [
      {
        "id": "dzukou-trek",
        "name": "Dzukou Valley Alpine Trail",
        "category": "Adventure",
        "timeSlot": "Morning",
        "description": "Iconic trek via Viswema trail leading through dense bamboo dwarf forests onto a vast amphitheater of emerald rolling hillocks.",
        "visitDurationMinutes": 360,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 25.56,
          "lng": 94.07
        },
        "address": "Dzukou Valley, Nagaland",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Hire a local Angami guide and carry a sleeping bag for the dormitory rest house"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-dzu-1",
        "name": "Dzukou Rest House Canteen",
        "mealType": "Dinner",
        "cuisine": "Rustic Camp Meal",
        "famousFor": "Hot boiled local rice, spicy dal, and roasted potato mash with Naga chili paste",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 25.562,
          "lng": 94.072
        }
      }
    ]
  },
  {
    "id": "gandikota",
    "name": "Gandikota",
    "normalizedName": "gandikota",
    "state": "Andhra Pradesh",
    "isUnionTerritory": false,
    "district": "YSR Kadapa",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "The Grand Canyon of India - Pennar River Gorge and Historic Fort",
    "description": "A breathtaking gorge carved by the River Pennar through red granite hills, crowned by a massive 12th-century stone fort.",
    "coordinates": {
      "lat": 14.8155,
      "lng": 78.2864
    },
    "bestMonths": "September to February",
    "idealDays": 2,
    "popularInterests": [
      "Adventure",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Gandikota",
      "Grand Canyon of India",
      "Pennar Gorge"
    ],
    "transportInfo": {
      "nearestAirport": "Kadapa Airport (CDP) - 77 km",
      "nearestRailway": "Jammalamadugu (18 km)",
      "roadConnectivity": "NH 67 via Kadapa"
    },
    "culturalHighlights": [
      "Raghunatha Swamy stone temple",
      "Stargazing cliff camping"
    ],
    "sourceUrl": "https://tourism.ap.gov.in",
    "attractions": [
      {
        "id": "gandikota-gorge",
        "name": "Pennar River Canyon Viewpoint",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Dramatic 300-foot red granite cliffs framing the emerald waters of Pennar River.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 14.816,
          "lng": 78.287
        },
        "address": "Gandikota, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Sunrise offers phenomenal lighting"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-gandikota-1",
        "name": "Haritha Heritage Restaurant",
        "mealType": "Lunch",
        "cuisine": "Rayalaseema",
        "famousFor": "Ragi Mudda with spicy Natu Kodi Pulusu",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 14.814,
          "lng": 78.284
        }
      }
    ]
  },
  {
    "id": "gangtok",
    "name": "Gangtok",
    "normalizedName": "gangtok",
    "state": "Sikkim",
    "isUnionTerritory": false,
    "district": "East Sikkim",
    "category": "Hill Stations & Mountains",
    "tagline": "Capital of the Eastern Himalayas - Kanchenjunga Vistas & Buddhist Monasteries",
    "description": "Clean mountain capital set on a steep ridge at 1,650 meters, renowned for unobstructed views of Mount Kanchenjunga, Rumtek Monastery, vehicle-free MG Marg promenade, and alpine cable cars.",
    "coordinates": {
      "lat": 27.3389,
      "lng": 88.6065
    },
    "bestMonths": "March to May & October to mid-December",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Culture",
      "Temples",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Gangtok",
      "MG Marg Gangtok",
      "Rumtek"
    ],
    "transportInfo": {
      "nearestAirport": "Pakyong Airport (PYG) - 30 km / Bagdogra Airport (IXB) - 124 km",
      "nearestRailway": "New Jalpaiguri Junction (NJP) - 120 km",
      "roadConnectivity": "NH 10 connects Siliguri to Gangtok along Teesta River"
    },
    "culturalHighlights": [
      "Rumtek Dharma Chakra Centre - seat of the Karmapa",
      "Organic clean mountain lifestyle (India’s first 100% organic state)",
      "Flower Exhibition Centre orchids"
    ],
    "sourceUrl": "https://www.sikkimtourism.gov.in",
    "attractions": [
      {
        "id": "gtk-rumtek",
        "name": "Rumtek Monastery (Dharma Chakra Centre)",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Venerated Tibetan Buddhist monastery showcasing rare golden stupas, centuries-old thangkas, and monk chanting rituals.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 27.3,
          "lng": 88.54
        },
        "address": "Gangtok, Sikkim",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit during morning prayer hours (around 9 AM) to witness horn instruments and chanting"
        ]
      },
      {
        "id": "gtk-mg-marg",
        "name": "MG Marg Walking Boulevard",
        "category": "Shopping",
        "timeSlot": "Evening",
        "description": "Lively pedestrian-only cobblestone boulevard decorated with flowerbeds, Victorian streetlamps, souvenir boutiques, and cafes.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 27.329,
          "lng": 88.613
        },
        "address": "Gangtok, Sikkim",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Completely litter-free and smoke-free zone; enjoy hot steamed momos"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-gtk-1",
        "name": "Taste of Tibet (MG Marg)",
        "mealType": "Dinner",
        "cuisine": "Tibetan & Sikkimese",
        "famousFor": "Steamed Beef/Chicken Momos, Thukpa noodle soup, and Gyathuk",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 27.33,
          "lng": 88.614
        }
      }
    ]
  },
  {
    "id": "gir-national-park",
    "name": "Gir National Park",
    "normalizedName": "gir national park",
    "state": "Gujarat",
    "isUnionTerritory": false,
    "district": "Junagadh and Gir Somnath",
    "category": "Wildlife & National Parks",
    "tagline": "Last Refuge of the Asiatic Lion - Rugged Teak Forests & Wild Safaris",
    "description": "The sole remaining global sanctuary of the pure Asiatic lion in the wild, set in a dry deciduous teak and scrub forest ecosystem.",
    "coordinates": {
      "lat": 21.1243,
      "lng": 70.8242
    },
    "bestMonths": "December to March",
    "idealDays": 2,
    "popularInterests": [
      "Wildlife",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Gir National Park",
      "Sasan Gir",
      "Gir Forest",
      "Lion Sanctuary"
    ],
    "transportInfo": {
      "nearestAirport": "Keshod Airport (60 km) / Rajkot Airport (160 km)",
      "nearestRailway": "Junagadh (60 km) & Veraval (45 km)",
      "roadConnectivity": "State highways connecting Junagadh and Somnath"
    },
    "culturalHighlights": [
      "Maldhari pastoral tribal culture",
      "Siddi tribal African-origin folk dance",
      "Kesar mango orchards"
    ],
    "sourceUrl": "https://www.gujarattourism.com",
    "attractions": [
      {
        "id": "gir-safari",
        "name": "Sasan Gir Jungle Safari Trail",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Open gypsy safari tracking prides of Asiatic lions, leopards, striped hyenas, and spotted chital deer.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 900,
        "coordinates": {
          "lat": 21.125,
          "lng": 70.825
        },
        "address": "Gir National Park, Gujarat",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Safaris must be booked on the official forest department portal well in advance"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-gir-1",
        "name": "Gir Kathiyawadi Dhaba",
        "mealType": "Lunch",
        "cuisine": "Kathiyawadi",
        "famousFor": "Spicy Lasaniya Bataka with fresh buttermilk and Bajra Roti",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 21.13,
          "lng": 70.82
        }
      }
    ]
  },
  {
    "id": "goa",
    "name": "Goa",
    "normalizedName": "goa",
    "state": "Goa",
    "isUnionTerritory": false,
    "district": "North Goa & South Goa",
    "category": "Beaches & Coastal",
    "tagline": "Sun, Sand & Portuguese Charm - Golden Beaches, Historic Forts & Night Markets",
    "description": "World-famous beach haven boasting Portuguese heritage in Panaji Fontainhas, vibrant shorelines at Calangute and Anjuna, and clifftop Chapora Fort.",
    "coordinates": {
      "lat": 15.4989,
      "lng": 73.8278
    },
    "bestMonths": "October to April",
    "idealDays": 4,
    "popularInterests": [
      "Beaches",
      "Food",
      "History",
      "Adventure"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Goa",
      "North Goa",
      "Panaji",
      "Calangute",
      "Anjuna",
      "Baga",
      "Panjim"
    ],
    "transportInfo": {
      "nearestAirport": "Manohar International Airport (MOPA) / Dabolim (GOI)",
      "nearestRailway": "Thivim (THVM) & Karmali (KRMI)",
      "roadConnectivity": "NH 66 coastal highway"
    },
    "culturalHighlights": [
      "Goan Fish Curry & Bebinca",
      "Portuguese Latin Quarter architecture",
      "Saturday Night Flea Markets"
    ],
    "sourceUrl": "https://goatourism.gov.in",
    "attractions": [
      {
        "id": "goa-aguada",
        "name": "Fort Aguada & Lighthouse",
        "category": "History",
        "timeSlot": "Morning",
        "description": "17th-century Portuguese fortress overlooking Sinquerim Beach with a four-storey lighthouse.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 15.4925,
          "lng": 73.7736
        },
        "address": "Goa, Goa",
        "imageUrl": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Arrive early for clear sea views"
        ]
      },
      {
        "id": "goa-fontainhas",
        "name": "Fontainhas Latin Quarter",
        "category": "History",
        "timeSlot": "Evening",
        "description": "Heritage precinct in Panaji with brightly painted Portuguese colonial villas and cafes.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 15.498,
          "lng": 73.832
        },
        "address": "Goa, Goa",
        "imageUrl": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Great walking photography tour"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-goa-1",
        "name": "Vinayak Family Restaurant",
        "mealType": "Lunch",
        "cuisine": "Goan Coastal",
        "famousFor": "Authentic Goan Fish Curry Thali with Kingfish Rava fry",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 15.586,
          "lng": 73.749
        }
      }
    ]
  },
  {
    "id": "gokarna",
    "name": "Gokarna",
    "normalizedName": "gokarna",
    "state": "Karnataka",
    "isUnionTerritory": false,
    "district": "Uttara Kannada",
    "category": "Beaches & Coastal",
    "tagline": "Sacred Shores & Coastal Cliff Treks - Om Beach, Kudle & Mahabaleshwar",
    "description": "Atmospheric coastal town where sacred Shaivite pilgrimage meets pristine secluded beaches linked by cliffside walking paths.",
    "coordinates": {
      "lat": 14.5479,
      "lng": 74.3188
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "Beaches",
      "Temples",
      "Adventure",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Gokarna",
      "Om Beach",
      "Kudle Beach"
    ],
    "transportInfo": {
      "nearestAirport": "Goa Dabolim Airport (140 km)",
      "nearestRailway": "Gokarna Road (GOK) - 8 km",
      "roadConnectivity": "NH 66 coastal corridor"
    },
    "culturalHighlights": [
      "Atmalinga Mahabaleshwar Temple rituals",
      "Famous 5-beach cliff trek (Belekan to Kudle)"
    ],
    "sourceUrl": "https://karnatakatourism.org",
    "attractions": [
      {
        "id": "gok-om-beach",
        "name": "Om Beach & Cliff Walk",
        "category": "Beaches",
        "timeSlot": "Morning",
        "description": "Naturally curved beach shaped like the sacred Hindu symbol Om, famous for boat rides and cliffside sunsets.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 14.518,
          "lng": 74.316
        },
        "address": "Gokarna, Karnataka",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Trek across the headland to Half Moon Beach"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-gok-1",
        "name": "Namaste Cafe Om Beach",
        "mealType": "Lunch",
        "cuisine": "Coastal & Continental",
        "famousFor": "Fresh catch Kingfish fry and banana Nutella pancakes",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 14.517,
          "lng": 74.315
        }
      }
    ]
  },
  {
    "id": "gulmarg",
    "name": "Gulmarg",
    "normalizedName": "gulmarg",
    "state": "Jammu and Kashmir",
    "isUnionTerritory": true,
    "district": "Baramulla",
    "category": "Adventure & Trekking",
    "tagline": "Meadow of Flowers & Asia’s Highest Gondola Cable Car at 13,780 Feet",
    "description": "Premier skiing destination of India nestled at 2,650 meters, famous for the Gulmarg Gondola (one of the world’s highest operational cable cars climbing up Mount Apharwat), powder snow ski slopes, and lush springtime alpine wildflower meadows.",
    "coordinates": {
      "lat": 34.0484,
      "lng": 74.3805
    },
    "bestMonths": "December to March (Skiing & Powder Snow) / May to September (Green Meadows)",
    "idealDays": 2,
    "popularInterests": [
      "Adventure",
      "Skiing",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Gulmarg",
      "Meadow of Flowers",
      "Apharwat Peak",
      "Gulmarg Gondola"
    ],
    "transportInfo": {
      "nearestAirport": "Srinagar Airport (55 km)",
      "nearestRailway": "Jammu Tawi (290 km) / Srinagar Station",
      "roadConnectivity": "Tangmarg to Gulmarg scenic mountain road (snow chains required in winter)"
    },
    "culturalHighlights": [
      "Two-stage Gondola lift ascending to 3,980 meters on Apharwat Peak",
      "St. Mary’s Church Victorian stone architecture surrounded by pine forests",
      "World’s highest 18-hole green golf course at 2,650 meters"
    ],
    "sourceUrl": "https://www.jktourism.jk.gov.in",
    "attractions": [
      {
        "id": "gmg-gondola",
        "name": "Gulmarg Gondola Cable Car (Phase 1 & Phase 2)",
        "category": "Adventure",
        "timeSlot": "Morning",
        "description": "Breathtaking two-phase cable car lifting passengers above pine canopies up to Apharwat peak ridge with panoramic vistas of Nanga Parbat and Pir Panjal peaks.",
        "visitDurationMinutes": 240,
        "estimatedCostInr": 1700,
        "coordinates": {
          "lat": 34.055,
          "lng": 74.375
        },
        "address": "Gulmarg, Jammu and Kashmir",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Tickets must be booked strictly online via official JK Tourism portal weeks in advance"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-gmg-1",
        "name": "Bakshi Green View Dhaba",
        "mealType": "Lunch",
        "cuisine": "Kashmiri & North Indian",
        "famousFor": "Hot steaming Rajma Chawal with pure desi ghee and aromatic Kashmiri Kahwa with saffron and crushed almonds",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 34.05,
          "lng": 74.382
        }
      }
    ]
  },
  {
    "id": "guwahati",
    "name": "Guwahati",
    "normalizedName": "guwahati",
    "state": "Assam",
    "isUnionTerritory": false,
    "district": "Kamrup Metropolitan",
    "category": "Major Cities & Towns",
    "tagline": "Gateway to Northeast India - Sacred Brahmaputra River & Kamakhya Shakti Peeth",
    "description": "Thriving riverside metropolis combining ancient Shakti shrines, river island temples, and modern Assamese gastronomy.",
    "coordinates": {
      "lat": 26.1445,
      "lng": 91.7362
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "Temples",
      "History",
      "Food",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Guwahati",
      "Gauhati",
      "Pragjyotishpura"
    ],
    "transportInfo": {
      "nearestAirport": "Guwahati Airport (GAU) in city",
      "nearestRailway": "Guwahati Junction (GHY)",
      "roadConnectivity": "NH 27 and NH 17"
    },
    "culturalHighlights": [
      "Kamakhya Temple Ambubachi Mela",
      "Brahmaputra sunset cruises",
      "Muga silk"
    ],
    "sourceUrl": "https://assamtourism.gov.in",
    "attractions": [
      {
        "id": "guw-kamakhya",
        "name": "Kamakhya Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "One of the oldest of the 51 Shakti Peethas atop Nilachal Hill.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 26.1664,
          "lng": 91.7058
        },
        "address": "Guwahati, Assam",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit early at 6 AM"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-guw-1",
        "name": "Paradise Restaurant",
        "mealType": "Dinner",
        "cuisine": "Assamese",
        "famousFor": "Traditional Assamese Thali with Khar and Pitika",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 26.182,
          "lng": 91.751
        }
      }
    ]
  },
  {
    "id": "hampi",
    "name": "Hampi",
    "normalizedName": "hampi",
    "state": "Karnataka",
    "isUnionTerritory": false,
    "district": "Vijayanagara",
    "category": "Historical Monuments & Heritage",
    "tagline": "UNESCO World Heritage - Boulders, Stone Chariots & Vijayanagara Empire",
    "description": "Surreal boulder-strewn landscape dotted with magnificent 14th-century ruins of the Vijayanagara Empire along the Tungabhadra River.",
    "coordinates": {
      "lat": 15.335,
      "lng": 76.46
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Photography",
      "Architecture",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Hampi",
      "Hampi Ruins",
      "Vijayanagara",
      "Kishkindha"
    ],
    "transportInfo": {
      "nearestAirport": "Jindal Vidyanagar Airport, Toranagallu (40 km) / Hubli (160 km)",
      "nearestRailway": "Hosapete Junction (HPT) - 13 km",
      "roadConnectivity": "NH 50 and NH 67"
    },
    "culturalHighlights": [
      "Vittala Temple musical pillars and Stone Chariot",
      "Coracle boat rides on the Tungabhadra",
      "Sunset from Matanga Hill"
    ],
    "sourceUrl": "https://karnatakatourism.org",
    "attractions": [
      {
        "id": "hampi-vittala",
        "name": "Vittala Temple & Iconic Stone Chariot",
        "category": "History",
        "timeSlot": "Morning",
        "description": "15th-century temple complex renowned for its monolithic carved stone chariot shrine and pillars that resonate with musical notes.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 40,
        "coordinates": {
          "lat": 15.34,
          "lng": 76.476
        },
        "address": "Hampi, Karnataka",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Electric battery buggies available from parking area to main gate"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-hampi-1",
        "name": "Mango Tree Restaurant",
        "mealType": "Lunch",
        "cuisine": "South Indian & Continental",
        "famousFor": "Traditional South Indian Thali served on fresh banana leaf",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 15.334,
          "lng": 76.462
        }
      }
    ]
  },
  {
    "id": "havelock-island",
    "name": "Havelock Island (Swaraj Dweep)",
    "normalizedName": "havelock island (swaraj dweep)",
    "state": "Andaman and Nicobar Islands",
    "isUnionTerritory": true,
    "district": "South Andaman",
    "category": "Beaches & Coastal",
    "tagline": "Asia’s Best Beach - Radhanagar White Sands & Scuba Diving Reefs",
    "description": "World-famous tropical paradise island celebrated for Radhanagar Beach (Beach No. 7), consistently rated among the world’s most beautiful beaches, paired with vibrant coral reefs, Elephant Beach water sports, and sea kayaking through mangrove tunnels.",
    "coordinates": {
      "lat": 11.9761,
      "lng": 92.9876
    },
    "bestMonths": "October to May",
    "idealDays": 3,
    "popularInterests": [
      "Beaches",
      "Adventure",
      "Scuba Diving",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Havelock Island (Swaraj Dweep)",
      "Havelock",
      "Swaraj Dweep",
      "Radhanagar Beach",
      "Elephant Beach"
    ],
    "transportInfo": {
      "nearestAirport": "Port Blair Airport (54 km by sea)",
      "nearestRailway": "None",
      "roadConnectivity": "High-speed catamarans (Makruzz, Nautika, Green Ocean) run 90-minute ferries from Port Blair"
    },
    "culturalHighlights": [
      "Radhanagar sunset with emerald waters, powder-soft white sand, and tropical Mahua rainforest canopy",
      "PADI-certified scuba diving at Dixon’s Pinnacle and Nemo Reef with manta rays and sea turtles",
      "Bioluminescent night kayaking at mangrove lagoons"
    ],
    "sourceUrl": "https://www.andamantourism.gov.in",
    "attractions": [
      {
        "id": "hvk-radhanagar",
        "name": "Radhanagar Beach (Beach No. 7)",
        "category": "Beaches",
        "timeSlot": "Evening",
        "description": "Two-kilometer curve of powder-white coral sand flanked by dense tropical greenery and gentle turquoise waves, offering breathtaking sunset panoramas.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 11.984,
          "lng": 92.952
        },
        "address": "Havelock Island (Swaraj Dweep), Andaman and Nicobar Islands",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Sunset at 5:00-5:30 PM is unmissable; lifeguards on duty make swimming very safe"
        ]
      },
      {
        "id": "hvk-elephant-beach",
        "name": "Elephant Beach Coral Snorkeling",
        "category": "Adventure",
        "timeSlot": "Morning",
        "description": "Vibrant fringing coral reef accessed via speed boat or a 30-minute forest trek, popular for snorkeling, sea walking, and glass-bottom boat rides.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 500,
        "coordinates": {
          "lat": 12.008,
          "lng": 92.96
        },
        "address": "Havelock Island (Swaraj Dweep), Andaman and Nicobar Islands",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit in the morning before high tide causes rough currents"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-hvk-1",
        "name": "Full Moon Cafe (Govind Nagar)",
        "mealType": "Dinner",
        "cuisine": "Seafood & Tropical Continental",
        "famousFor": "Grilled catch of the day in banana leaf with lemon garlic butter and fresh fruit smoothies",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 11.995,
          "lng": 93.01
        }
      }
    ]
  },
  {
    "id": "hyderabad",
    "name": "Hyderabad",
    "normalizedName": "hyderabad",
    "state": "Telangana",
    "isUnionTerritory": false,
    "district": "Hyderabad",
    "category": "Major Cities & Towns",
    "tagline": "City of Pearls & Nizams - Charminar, Golconda Fort & World-Famous Dum Biryani",
    "description": "Dynamic metropolis seamlessly combining 400-year-old Qutb Shahi and Asaf Jahi heritage with cyber cities, world-renowned for the 1591 Charminar, acoustic wonder Golconda Fort, and authentic slow-cooked Hyderabadi Dum Biryani.",
    "coordinates": {
      "lat": 17.385,
      "lng": 78.4867
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Food",
      "Culture",
      "Architecture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Hyderabad",
      "Cyberabad",
      "City of Pearls",
      "Charminar City"
    ],
    "transportInfo": {
      "nearestAirport": "Rajiv Gandhi International Airport (HYD) in Shamshabad",
      "nearestRailway": "Secunderabad Junction (SC) & Hyderabad Deccan (HYB)",
      "roadConnectivity": "Intersection of NH 44 and NH 65"
    },
    "culturalHighlights": [
      "Acoustic hand-clap signaling engineering at Golconda Fort",
      "Irani Chai and Osmania biscuits at Nimrah Cafe by Charminar",
      "Laad Bazaar lacquer and pearl bangles"
    ],
    "sourceUrl": "https://tourism.telangana.gov.in",
    "attractions": [
      {
        "id": "hyd-charminar",
        "name": "Charminar & Laad Bazaar",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Iconic 16th-century square monument with 4 soaring 56-meter minarets built by Muhammad Quli Qutb Shah, surrounded by vibrant pearl and glass bangle markets.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 17.3616,
          "lng": 78.4747
        },
        "address": "Hyderabad, Telangana",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Climb the spiral stairs to the upper balcony for sweeping street views; taste Irani chai nearby"
        ]
      },
      {
        "id": "hyd-golconda",
        "name": "Golconda Fort Complex",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Massive medieval fortress featuring incredible acoustic architecture where a handclap at the entrance portico resonates at the hilltop Bala Hissar pavilion 1 km away.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 17.3833,
          "lng": 78.4011
        },
        "address": "Hyderabad, Telangana",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Stay for the spectacular evening sound and light show narrated by Amitabh Bachchan"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-hyd-1",
        "name": "Paradise Heritage (Secunderabad - Est. 1953)",
        "mealType": "Lunch",
        "cuisine": "Hyderabadi Mughlai",
        "famousFor": "World-famous Royal Mutton Dum Biryani with Mirchi ka Salan, Dahi Chutney, and Double ka Meetha",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 17.441,
          "lng": 78.487
        }
      },
      {
        "id": "m-hyd-2",
        "name": "Nimrah Cafe & Bakery (Beside Charminar)",
        "mealType": "Breakfast",
        "cuisine": "Irani Bakery",
        "famousFor": "Zaffrani Irani Chai with hot freshly baked melt-in-mouth Osmania biscuits",
        "estimatedCostPerPersonInr": 50,
        "coordinates": {
          "lat": 17.362,
          "lng": 78.475
        }
      }
    ]
  },
  {
    "id": "imphal",
    "name": "Imphal",
    "normalizedName": "imphal",
    "state": "Manipur",
    "isUnionTerritory": false,
    "district": "Imphal West",
    "category": "Major Cities & Towns",
    "tagline": "Heart of Manipur - Kangla Fort, Ima Keithel Women’s Market & Polo Heritage",
    "description": "Scenic capital city nestled in a lush valley, famous for the historic Kangla Fort, the world-famous all-women Ima Keithel market, and being the birthplace of modern polo (Sagol Kangjei).",
    "coordinates": {
      "lat": 24.817,
      "lng": 93.9368
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Culture",
      "Shopping",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Imphal",
      "Kangla",
      "Sanaleipak"
    ],
    "transportInfo": {
      "nearestAirport": "Bir Tikendrajit International Airport, Imphal (IMF) - 7 km",
      "nearestRailway": "Dimapur Railway Station (200 km) / Jiribam Station",
      "roadConnectivity": "Connected via NH 2 and NH 37"
    },
    "culturalHighlights": [
      "Ima Keithel - 500-year-old market run exclusively by 5,000+ women",
      "Manipuri Classical Raas Leela dance",
      "Sagol Kangjei indigenous polo grounds"
    ],
    "sourceUrl": "https://manipurtourism.gov.in",
    "attractions": [
      {
        "id": "imp-kangla",
        "name": "Kangla Fort & Royal Palace",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Ancient seat of the Meitei rulers surrounded by scenic moats, housing royal coronation halls, Govindaji temple ruins, and sacred shrines.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 24.809,
          "lng": 93.943
        },
        "address": "Imphal, Manipur",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Rent a bicycle at the main gate to explore the expansive fort grounds"
        ]
      },
      {
        "id": "imp-ima-keithel",
        "name": "Ima Keithel (Mother’s Market)",
        "category": "Shopping",
        "timeSlot": "Evening",
        "description": "Asia’s largest unique market managed entirely by married women traders selling vibrant Phanek textiles, indigenous herbs, fresh lake fish, and handicrafts.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 24.804,
          "lng": 93.937
        },
        "address": "Imphal, Manipur",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Taste local black rice baked snacks and buy handloom shawls"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-imp-1",
        "name": "Luxmi Kitchen",
        "mealType": "Lunch",
        "cuisine": "Manipuri Meitei",
        "famousFor": "Traditional Manipuri Thali with Chak-Hao Kheer (Black Rice Pudding), Eromba, and Singju salad",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 24.806,
          "lng": 93.939
        }
      }
    ]
  },
  {
    "id": "indore-ujjain",
    "name": "Indore & Ujjain",
    "normalizedName": "indore & ujjain",
    "state": "Madhya Pradesh",
    "isUnionTerritory": false,
    "district": "Indore and Ujjain",
    "category": "Religious & Pilgrimage",
    "tagline": "Cleanest City of India & Mahakaleshwar Jyotirlinga - Midnight Sarafa Bazar",
    "description": "Indore, India’s cleanest city and street food capital, paired with ancient Ujjain, sacred city of Lord Mahakaleshwar along the Shipra River.",
    "coordinates": {
      "lat": 22.7196,
      "lng": 75.8577
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "Food",
      "Temples",
      "History",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Indore & Ujjain",
      "Indore",
      "Ujjain",
      "Mahakal",
      "Sarafa Bazar"
    ],
    "transportInfo": {
      "nearestAirport": "Devi Ahilyabai Holkar Airport, Indore (IDR)",
      "nearestRailway": "Indore Junction (INDB) & Ujjain Junction (UJN)",
      "roadConnectivity": "4-lane Indore-Ujjain expressway (55 km)"
    },
    "culturalHighlights": [
      "Bhasma Aarti at Mahakaleshwar Temple at 4 AM",
      "Sarafa midnight jewelry street transformed into food paradise",
      "Chappan Dukan street treats"
    ],
    "sourceUrl": "https://www.mptourism.com",
    "attractions": [
      {
        "id": "ujj-mahakaleshwar",
        "name": "Shri Mahakaleshwar Jyotirlinga Temple & Mahakal Lok",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "One of the 12 sacred Jyotirlingas with a south-facing lingam (Dakshinamurti) and the grand 900-meter Mahakal Lok corridor.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 23.1827,
          "lng": 75.7682
        },
        "address": "Indore & Ujjain, Madhya Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Book online Bhasma Aarti tokens weeks in advance"
        ]
      },
      {
        "id": "ind-sarafa",
        "name": "Sarafa Night Food Market",
        "category": "Food",
        "timeSlot": "Evening",
        "description": "Famous jewelry bazaar that transforms after 9 PM into a bustling open-air night market serving 50+ unique street delicacies.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 250,
        "coordinates": {
          "lat": 22.718,
          "lng": 75.856
        },
        "address": "Indore & Ujjain, Madhya Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Must taste Bhutte Ka Kees, Garadu and oversized Malpua"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ind-1",
        "name": "Chappan Dukan Food Street",
        "mealType": "Lunch",
        "cuisine": "Indori Street Food",
        "famousFor": "Johny Hot Dog, Khopra Patties and Shikanji",
        "estimatedCostPerPersonInr": 180,
        "coordinates": {
          "lat": 22.723,
          "lng": 75.882
        }
      }
    ]
  },
  {
    "id": "jaipur",
    "name": "Jaipur",
    "normalizedName": "jaipur",
    "state": "Rajasthan",
    "isUnionTerritory": false,
    "district": "Jaipur",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Pink City - Hawa Mahal, Amer Fort & Royal Rajput Palaces",
    "description": "UNESCO World Heritage capital city renowned for terracotta-pink stone architecture, hilltop Amber Fort, the iconic honeycomb facade of Hawa Mahal, astronomical marvel Jantar Mantar, and bustling Johari handloom bazaars.",
    "coordinates": {
      "lat": 26.9124,
      "lng": 75.7873
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Architecture",
      "Shopping",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Jaipur",
      "Pink City",
      "Amer",
      "Amber"
    ],
    "transportInfo": {
      "nearestAirport": "Jaipur International Airport (JAI) in Sanganer",
      "nearestRailway": "Jaipur Junction (JP)",
      "roadConnectivity": "Delhi-Jaipur Expressway NH 48 (3.5 hours)"
    },
    "culturalHighlights": [
      "Amer Fort sheesh mahal (mirror palace)",
      "Blue pottery and Block-print textiles in Bapu Bazaar",
      "Authentic Dal Baati Churma feasts"
    ],
    "sourceUrl": "https://www.tourism.rajasthan.gov.in",
    "attractions": [
      {
        "id": "jpr-amer-fort",
        "name": "Amber (Amer) Fort & Palace",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Majestic 16th-century hill fortress built by Raja Man Singh featuring courtyards of yellow sandstone, marble Sheesh Mahal mirror mosaics, and sweeping ramparts over Maota Lake.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 26.9855,
          "lng": 75.8513
        },
        "address": "Jaipur, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit early morning to beat afternoon desert heat; take the jeep ride up"
        ]
      },
      {
        "id": "jpr-hawa-mahal",
        "name": "Hawa Mahal (Palace of Winds)",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Pyramidal five-story pink sandstone palace adorned with 953 ornate latticed jharokha windows engineered so royal ladies could view street processions undisturbed.",
        "visitDurationMinutes": 75,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 26.9239,
          "lng": 75.8267
        },
        "address": "Jaipur, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit the rooftop cafes across the street for iconic front facade photography"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-jpr-1",
        "name": "LMB (Laxmi Misthan Bhandar) Johari Bazar",
        "mealType": "Lunch",
        "cuisine": "Rajasthani Royal Thali",
        "famousFor": "Authentic Dal Baati Churma, Ker Sangri, Gatte ki Sabzi, and hot Ghewar",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 26.921,
          "lng": 75.824
        }
      }
    ]
  },
  {
    "id": "jaisalmer",
    "name": "Jaisalmer",
    "normalizedName": "jaisalmer",
    "state": "Rajasthan",
    "isUnionTerritory": false,
    "district": "Jaisalmer",
    "category": "Adventure & Trekking",
    "tagline": "The Golden City - Living Sandstone Fort & Thar Desert Sam Sand Dunes",
    "description": "Breathtaking desert jewel rising out of the Great Thar Desert, famous for Sonar Qila (a living golden sandstone fort housing 4,000 residents), camel safaris across rolling Sam sand dunes, and sunset desert camps.",
    "coordinates": {
      "lat": 26.9157,
      "lng": 70.9083
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "Adventure",
      "History",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Jaisalmer",
      "Golden City",
      "Sonar Qila",
      "Thar Desert",
      "Sam Dunes"
    ],
    "transportInfo": {
      "nearestAirport": "Jaisalmer Airport (JSA) in city",
      "nearestRailway": "Jaisalmer Railway Station (JSM)",
      "roadConnectivity": "NH 11 from Jodhpur (4.5 hours)"
    },
    "culturalHighlights": [
      "Sonar Qila - One of the world’s very few living forts with shops, homes, and Jain temples inside",
      "Kalbelia folk music and fire dance in desert camps",
      "Patwon Ki Haveli filigree stone carvings"
    ],
    "sourceUrl": "https://www.tourism.rajasthan.gov.in",
    "attractions": [
      {
        "id": "jsm-fort",
        "name": "Jaisalmer Fort (Sonar Qila)",
        "category": "History",
        "timeSlot": "Morning",
        "description": "12th-century golden sandstone bastion crowned by 99 watchtowers, containing ancient royal palace museum and 7 medieval Jain temples.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 26.9128,
          "lng": 70.9127
        },
        "address": "Jaisalmer, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Walk through the narrow cobblestone alleys inside the living fort"
        ]
      },
      {
        "id": "jsm-sam-dunes",
        "name": "Sam Sand Dunes Camel Safari",
        "category": "Adventure",
        "timeSlot": "Evening",
        "description": "Vast expanse of wind-rippled desert dunes offering golden hour camel treks, quad biking, and sunset cultural folk campouts.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 500,
        "coordinates": {
          "lat": 26.83,
          "lng": 70.51
        },
        "address": "Jaisalmer, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Book an overnight desert Swiss tent camp with stargazing"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-jsm-1",
        "name": "The Trio Restaurant (Mandir Palace View)",
        "mealType": "Dinner",
        "cuisine": "Rajasthani Desert Cuisine",
        "famousFor": "Ker Sangri (wild desert beans), Bajra Roti with garlic chutney, and Laal Maas",
        "estimatedCostPerPersonInr": 400,
        "coordinates": {
          "lat": 26.916,
          "lng": 70.914
        }
      }
    ]
  },
  {
    "id": "kanyakumari",
    "name": "Kanyakumari",
    "normalizedName": "kanyakumari",
    "state": "Tamil Nadu",
    "isUnionTerritory": false,
    "district": "Kanyakumari",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "Southernmost Tip of Mainland India - Triveni Sangam, Vivekananda Rock & Thiruvalluvar Statue",
    "description": "The geographic terminus of India where the Arabian Sea, Indian Ocean, and Bay of Bengal converge (Triveni Sangam), celebrated for spectacular simultaneous sunrises and sunsets, the offshore Vivekananda Rock Memorial, and the 133-foot stone statue of saint-poet Thiruvalluvar.",
    "coordinates": {
      "lat": 8.0883,
      "lng": 77.5385
    },
    "bestMonths": "October to March (Chitra Pournami full moon in April-May)",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Nature",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kanyakumari",
      "Cape Comorin",
      "Triveni Sangam",
      "Vivekananda Rock"
    ],
    "transportInfo": {
      "nearestAirport": "Trivandrum International Airport (TRV) - 90 km",
      "nearestRailway": "Kanyakumari Railway Station (CAPE)",
      "roadConnectivity": "Southern terminus of Grand National Highway NH 44"
    },
    "culturalHighlights": [
      "Viewing sunset and moonrise simultaneously over three ocean waters on full moon days",
      "Ferry ride to Vivekananda Rock Memorial where Swami Vivekananda meditated in 1892",
      "3,000-year-old Bhagavathi Amman coastal temple with luminous diamond nose ring"
    ],
    "sourceUrl": "https://www.tamilnadutourism.tn.gov.in",
    "attractions": [
      {
        "id": "kky-vivekananda-rock",
        "name": "Vivekananda Rock Memorial & Thiruvalluvar Statue",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Monumental rock island monument reached via passenger ferry, housing meditation halls overlooking the dramatic meeting point of three seas.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 70,
        "coordinates": {
          "lat": 8.078,
          "lng": 77.555
        },
        "address": "Kanyakumari, Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take the first ferry at 8:00 AM to avoid midday ticketing queues and ocean spray winds"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kky-1",
        "name": "Sea View Coastal Restaurant",
        "mealType": "Lunch",
        "cuisine": "Tamil Coastal & South Indian",
        "famousFor": "Traditional South Indian Fish Thali and coconut payasam",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 8.085,
          "lng": 77.545
        }
      }
    ]
  },
  {
    "id": "kasol",
    "name": "Kasol & Parvati Valley",
    "normalizedName": "kasol & parvati valley",
    "state": "Himachal Pradesh",
    "isUnionTerritory": false,
    "district": "Kullu",
    "category": "Adventure & Trekking",
    "tagline": "Mini Israel of the Himalayas - Parvati River Treks & Manikaran Hot Springs",
    "description": "Laidback riverside hamlet surrounded by towering pine forests, serving as the base for the Kheerganga natural sulphur spring trek and Tosh village.",
    "coordinates": {
      "lat": 32.01,
      "lng": 77.315
    },
    "bestMonths": "April to June & October to November",
    "idealDays": 3,
    "popularInterests": [
      "Adventure",
      "Nature",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kasol & Parvati Valley",
      "Kasol",
      "Parvati Valley",
      "Manikaran",
      "Tosh",
      "Kheerganga"
    ],
    "transportInfo": {
      "nearestAirport": "Bhuntar Airport (31 km)",
      "nearestRailway": "Joginder Nagar (145 km)",
      "roadConnectivity": "Route via Bhuntar through Parvati Valley"
    },
    "culturalHighlights": [
      "Israeli shakshuka and falafel cafes",
      "Manikaran Sahib sacred Sikh hot springs Gurudwara",
      "Pine forest trails"
    ],
    "sourceUrl": "https://himachaltourism.gov.in",
    "attractions": [
      {
        "id": "kasol-manikaran",
        "name": "Manikaran Sahib Gurudwara & Thermal Springs",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Revered spiritual center on the rushing Parvati River where natural boiling sulphur springs cook community langar meals.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 32.028,
          "lng": 77.348
        },
        "address": "Kasol & Parvati Valley, Himachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Bathe in the natural healing hot spring mineral pools"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kasol-1",
        "name": "Moon Dance Cafe Kasol",
        "mealType": "Lunch",
        "cuisine": "Israeli & Continental",
        "famousFor": "Fresh Hummus Platter, Shakshuka and Apple Cinnamon Crumble",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 32.011,
          "lng": 77.316
        }
      }
    ]
  },
  {
    "id": "kaziranga",
    "name": "Kaziranga National Park",
    "normalizedName": "kaziranga national park",
    "state": "Assam",
    "isUnionTerritory": false,
    "district": "Golaghat and Nagaon",
    "category": "Wildlife & National Parks",
    "tagline": "UNESCO World Heritage Sanctuary - Home of the Great One-Horned Rhinoceros",
    "description": "World-renowned biodiversity hotspot harboring two-thirds of the world’s one-horned rhinoceroses and dense elephant grass marshes.",
    "coordinates": {
      "lat": 26.5775,
      "lng": 93.1711
    },
    "bestMonths": "November to April",
    "idealDays": 3,
    "popularInterests": [
      "Wildlife",
      "Nature",
      "Photography",
      "Adventure"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kaziranga National Park",
      "Kaziranga",
      "Rhino Sanctuary"
    ],
    "transportInfo": {
      "nearestAirport": "Jorhat Airport (97 km)",
      "nearestRailway": "Furkating Junction (75 km)",
      "roadConnectivity": "NH 715 arterial highway"
    },
    "culturalHighlights": [
      "Assamese Bihu folk dance",
      "Assam Orthodox tea estates"
    ],
    "sourceUrl": "https://assamtourism.gov.in",
    "attractions": [
      {
        "id": "kaziranga-safari",
        "name": "Kohora Range Wildlife Safari",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Guided safari through marshlands with close sightings of rhinos, wild buffalos, and swamp deer.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 800,
        "coordinates": {
          "lat": 26.581,
          "lng": 93.168
        },
        "address": "Kaziranga National Park, Assam",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Book morning slots for highest activity"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kazi-1",
        "name": "Maihang Assamese Diner",
        "mealType": "Lunch",
        "cuisine": "Assamese",
        "famousFor": "Masor Tenga (Tangy fish curry) with Joha rice",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 26.582,
          "lng": 93.172
        }
      }
    ]
  },
  {
    "id": "khajuraho",
    "name": "Khajuraho",
    "normalizedName": "khajuraho",
    "state": "Madhya Pradesh",
    "isUnionTerritory": false,
    "district": "Chhatarpur",
    "category": "Historical Monuments & Heritage",
    "tagline": "UNESCO Monument of Love - Erotic Sculptures & Chandela Temple Art",
    "description": "World-famous temple complex built between 950 and 1050 CE by the Chandela dynasty, celebrated for sublime Nagara architecture and intricate stone carvings.",
    "coordinates": {
      "lat": 24.8318,
      "lng": 79.9199
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Khajuraho",
      "Khajuraho Temples",
      "Kandariya Mahadeva"
    ],
    "transportInfo": {
      "nearestAirport": "Khajuraho Airport (HJR) in city",
      "nearestRailway": "Khajuraho Railway Station (KURJ)",
      "roadConnectivity": "NH 39 from Jhansi and Satna"
    },
    "culturalHighlights": [
      "Khajuraho Dance Festival in February",
      "Kandariya Mahadeva Temple friezes"
    ],
    "sourceUrl": "https://www.mptourism.com",
    "attractions": [
      {
        "id": "khaj-western",
        "name": "Western Group of Temples & Kandariya Mahadeva",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Spectacular UNESCO monument complex featuring the towering 31m Kandariya Mahadeva and Lakshmana temples.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 40,
        "coordinates": {
          "lat": 24.853,
          "lng": 79.919
        },
        "address": "Khajuraho, Madhya Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Hire an ASI certified guide for detailed architectural explanations"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-khaj-1",
        "name": "Raja Cafe Western Group",
        "mealType": "Lunch",
        "cuisine": "Indian & Continental",
        "famousFor": "Authentic Bundelkhandi Thali with Dal Bafla and fresh lime soda",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 24.851,
          "lng": 79.921
        }
      }
    ]
  },
  {
    "id": "kochi",
    "name": "Kochi (Cochin)",
    "normalizedName": "kochi (cochin)",
    "state": "Kerala",
    "isUnionTerritory": false,
    "district": "Ernakulam",
    "category": "Historical Monuments & Heritage",
    "tagline": "Queen of the Arabian Sea - Chinese Fishing Nets, Fort Kochi & Spice Trade",
    "description": "Cosmopolitan historic port fusing Portuguese, Dutch, British, and Jewish heritage with cantilevered Chinese fishing nets and contemporary Kochi-Muziris Biennale arts.",
    "coordinates": {
      "lat": 9.9312,
      "lng": 76.2673
    },
    "bestMonths": "October to April",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Culture",
      "Food",
      "Shopping"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kochi (Cochin)",
      "Cochin",
      "Fort Kochi",
      "Ernakulam"
    ],
    "transportInfo": {
      "nearestAirport": "Cochin International Airport (COK) in Nedumbassery (30 km)",
      "nearestRailway": "Ernakulam Junction (ERS) & Ernakulam Town (ERN)",
      "roadConnectivity": "NH 544 and NH 66"
    },
    "culturalHighlights": [
      "Cantilevered Chinese Fishing Nets along Vasco da Gama Square",
      "Jew Town antique shops and Paradesi Synagogue (Est. 1568)"
    ],
    "sourceUrl": "https://keralatourism.org",
    "attractions": [
      {
        "id": "koc-fishing-nets",
        "name": "Fort Kochi Chinese Fishing Nets",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Historic shore-operated cantilevered fishing nets introduced by Chinese explorer Zheng He in the 14th century.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 9.967,
          "lng": 76.243
        },
        "address": "Kochi (Cochin), Kerala",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Best photographed at sunrise or sunset"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-koc-1",
        "name": "Kashi Art Cafe Fort Kochi",
        "mealType": "Breakfast",
        "cuisine": "Continental & Kerala Fusion",
        "famousFor": "Fresh roast filter coffee, artisanal toast and Chocolate Pie",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 9.966,
          "lng": 76.242
        }
      }
    ]
  },
  {
    "id": "kohima",
    "name": "Kohima",
    "normalizedName": "kohima",
    "state": "Nagaland",
    "isUnionTerritory": false,
    "district": "Kohima",
    "category": "Hill Stations & Mountains",
    "tagline": "Land of Warriors & Hornbill Festival - WWII War Cemetery & Kisama Heritage",
    "description": "Historic Naga hilltop capital at 1,444 meters, renowned for the poignant WWII Commonwealth War Cemetery, Naga heritage villages, Kisama Heritage Complex (home of the legendary Hornbill Festival), and Angami crafts.",
    "coordinates": {
      "lat": 25.6751,
      "lng": 94.1086
    },
    "bestMonths": "October to May (December 1-10 for Hornbill Festival)",
    "idealDays": 3,
    "popularInterests": [
      "Culture",
      "History",
      "Festivals",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kohima",
      "Kisama",
      "Naga Hills"
    ],
    "transportInfo": {
      "nearestAirport": "Dimapur Airport (DMU) - 74 km",
      "nearestRailway": "Dimapur Railway Station (DMV) - 72 km",
      "roadConnectivity": "NH 29 connects Dimapur to Kohima"
    },
    "culturalHighlights": [
      "Hornbill Festival showcasing 17 indigenous Naga tribes",
      "WWII Battle of Kohima memorial (\"When you go home, tell them of us\")",
      "Khonoma Green Village - India’s first green village"
    ],
    "sourceUrl": "https://tourism.nagaland.gov.in",
    "attractions": [
      {
        "id": "khm-war-cemetery",
        "name": "Kohima Commonwealth War Cemetery",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Serene terraced lawn memorial on Garrison Hill honoring Allied soldiers who halted the Japanese advance in the pivotal 1944 Battle of Kohima.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 25.67,
          "lng": 94.105
        },
        "address": "Kohima, Nagaland",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Read the famous Kohima Epitaph inscribed at the base"
        ]
      },
      {
        "id": "khm-kisama",
        "name": "Kisama Naga Heritage Village",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Authentic permanent village featuring traditional Morung bachelor dormitories, carved wooden totem pillars, and ceremonial festival grounds.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 25.602,
          "lng": 94.115
        },
        "address": "Kohima, Nagaland",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit the World War II museum located inside the complex"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-khm-1",
        "name": "Dream Cafe & Naga Kitchen",
        "mealType": "Lunch",
        "cuisine": "Traditional Naga",
        "famousFor": "Smoked Pork cooked with Axone (fermented soybean) and Raja Mircha (Bhut Jolokia)",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 25.673,
          "lng": 94.107
        }
      }
    ]
  },
  {
    "id": "kolkata",
    "name": "Kolkata",
    "normalizedName": "kolkata",
    "state": "West Bengal",
    "isUnionTerritory": false,
    "district": "Kolkata",
    "category": "Major Cities & Towns",
    "tagline": "City of Joy - Victoria Memorial, Howrah Bridge & Cultural Gastronomy",
    "description": "Cultural, artistic, and intellectual capital of India, renowned for the gleaming white marble Victoria Memorial, the cantilever marvel Howrah Bridge, hand-pulled rickshaws, yellow ambassador cabs, Durga Puja festival, and delectable roshogollas and kathi rolls.",
    "coordinates": {
      "lat": 22.5726,
      "lng": 88.3639
    },
    "bestMonths": "October to March (October for Durga Puja)",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Culture",
      "Food",
      "Architecture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kolkata",
      "Calcutta",
      "City of Joy",
      "Howrah"
    ],
    "transportInfo": {
      "nearestAirport": "Netaji Subhash Chandra Bose International Airport (CCU) in Dum Dum",
      "nearestRailway": "Howrah Junction (HWH) & Sealdah (SDAH)",
      "roadConnectivity": "Golden Quadrilateral NH 16 and NH 19"
    },
    "culturalHighlights": [
      "UNESCO Intangible Cultural Heritage Durga Puja celebrations",
      "Historic Indian Coffee House debates on College Street (world’s largest secondhand book market)",
      "Pottery and clay idol ateliers in Kumartuli"
    ],
    "sourceUrl": "https://www.wbtourism.gov.in",
    "attractions": [
      {
        "id": "ccu-victoria-memorial",
        "name": "Victoria Memorial Hall & Gardens",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Magnificent Makrana white marble palace built between 1906 and 1921 set in 64 acres of landscaped gardens, housing rare Raj-era oil paintings and historic galleries.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 22.5448,
          "lng": 88.3426
        },
        "address": "Kolkata, West Bengal",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit early morning to enjoy peaceful garden walks along the fountain ponds"
        ]
      },
      {
        "id": "ccu-howrah-bridge",
        "name": "Howrah Bridge (Rabindra Setu) & River Ferry",
        "category": "History",
        "timeSlot": "Evening",
        "description": "Iconic 1943 balanced cantilever steel bridge without nuts and bolts spanning the Hooghly River, carrying over 100,000 vehicles and millions of commuters daily.",
        "visitDurationMinutes": 60,
        "estimatedCostInr": 10,
        "coordinates": {
          "lat": 22.5851,
          "lng": 88.3468
        },
        "address": "Kolkata, West Bengal",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take the ₹6 passenger ferry from Howrah Ghat to Babughat for a panoramic view of the bridge"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ccu-1",
        "name": "Kewpie’s Kitchen / Peter Cat",
        "mealType": "Dinner",
        "cuisine": "Traditional Bengali & Continental",
        "famousFor": "Authentic Bengali Fish Thali with Shorshe Ilish (Hilsa in mustard gravy), Kosha Mangsho, and Chelo Kebab",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 22.551,
          "lng": 88.352
        }
      },
      {
        "id": "m-ccu-2",
        "name": "K.C. Das (Esplanade - Est. 1866)",
        "mealType": "Snacks",
        "cuisine": "Traditional Bengali Sweets",
        "famousFor": "Warm spongy authentic Rossogolla (Rasgulla invented by Nobin Chandra Das) and Mishti Doi",
        "estimatedCostPerPersonInr": 60,
        "coordinates": {
          "lat": 22.565,
          "lng": 88.352
        }
      }
    ]
  },
  {
    "id": "konark",
    "name": "Konark",
    "normalizedName": "konark",
    "state": "Odisha",
    "isUnionTerritory": false,
    "district": "Puri",
    "category": "Historical Monuments & Heritage",
    "tagline": "UNESCO Sun Temple - 13th-Century Architectural Chariot Marvel",
    "description": "Home of the colossal 13th-century UNESCO World Heritage Sun Temple engineered as a monumental stone chariot with 24 elaborately carved sun-dial wheels pulled by seven horses, alongside serene Chandrabhaga Beach.",
    "coordinates": {
      "lat": 19.8876,
      "lng": 86.0945
    },
    "bestMonths": "October to March (December for Konark Dance Festival)",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Photography",
      "Beaches"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Konark",
      "Sun Temple",
      "Black Pagoda",
      "Chandrabhaga"
    ],
    "transportInfo": {
      "nearestAirport": "Bhubaneswar Airport (65 km)",
      "nearestRailway": "Puri Railway Station (35 km)",
      "roadConnectivity": "Spectacular Marine Drive road along the coast from Puri"
    },
    "culturalHighlights": [
      "Ornate sundial wheels telling exact time to the minute",
      "Annual Konark Classical Dance Festival against the illuminated temple facade",
      "Chandrabhaga sunrise beach"
    ],
    "sourceUrl": "https://odishatourism.gov.in",
    "attractions": [
      {
        "id": "knk-sun-temple",
        "name": "Konark Sun Temple & Archaeological Museum",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Colossal stone chariot temple dedicated to Surya the Sun God, decorated with intricate bas-relief carvings of celestial musicians, lions, and everyday medieval life.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 40,
        "coordinates": {
          "lat": 19.8876,
          "lng": 86.0945
        },
        "address": "Konark, Odisha",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Hire a licensed guide to explain the astronomical calculation on the 24 wheels"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-knk-1",
        "name": "Kammat Heritage Diner",
        "mealType": "Lunch",
        "cuisine": "Traditional Odia",
        "famousFor": "Chhena Poda (baked caramelized cheese dessert) and Odia Dalma thali",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 19.89,
          "lng": 86.098
        }
      }
    ]
  },
  {
    "id": "kurukshetra",
    "name": "Kurukshetra",
    "normalizedName": "kurukshetra",
    "state": "Haryana",
    "isUnionTerritory": false,
    "district": "Kurukshetra",
    "category": "Religious & Pilgrimage",
    "tagline": "Land of the Bhagavad Gita - Holy Brahma Sarovar & Mahabharata Heritage",
    "description": "Ancient battlefield where the epic Mahabharata was fought and Lord Krishna delivered the timeless message of the Bhagavad Gita to Arjuna.",
    "coordinates": {
      "lat": 29.9695,
      "lng": 76.8783
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Temples",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kurukshetra",
      "Dharmakshetra",
      "Jyotisar",
      "Thanesar"
    ],
    "transportInfo": {
      "nearestAirport": "Chandigarh Airport (90 km) / Delhi (160 km)",
      "nearestRailway": "Kurukshetra Junction (KKDE)",
      "roadConnectivity": "Directly on Grand Trunk Road NH 44"
    },
    "culturalHighlights": [
      "Gita Mahotsav global festival",
      "Holy dip in Brahma Sarovar during solar eclipse",
      "Panorama of Mahabharata war"
    ],
    "sourceUrl": "https://haryanatourism.gov.in",
    "attractions": [
      {
        "id": "kkr-brahma-sarovar",
        "name": "Brahma Sarovar & Jyotisar",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Massive sacred water reservoir and the holy Banyan tree at Jyotisar where the Gita was spoken.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 29.965,
          "lng": 76.835
        },
        "address": "Kurukshetra, Haryana",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Attend the tranquil evening aarti ceremony at the ghats"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kkr-1",
        "name": "Neelkanthi Krishna Bhojanalaya",
        "mealType": "Lunch",
        "cuisine": "Haryanvi & Punjabi",
        "famousFor": "Haryanvi Bajra Khichdi with homemade ghee and lassi",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 29.97,
          "lng": 76.87
        }
      }
    ]
  },
  {
    "id": "lakshadweep",
    "name": "Lakshadweep (Agatti & Bangaram)",
    "normalizedName": "lakshadweep (agatti & bangaram)",
    "state": "Lakshadweep",
    "isUnionTerritory": true,
    "district": "Lakshadweep",
    "category": "Islands & Remote Destinations",
    "tagline": "Hundred Thousand Islands - Coral Atolls, Turquoise Lagoons & Pristine Diving",
    "description": "Archipelago of 36 pristine coral atolls in the Arabian Sea, world-renowned for Agatti Island’s strip runway surrounded by turquoise water, Bangaram tear-drop uninhabited lagoon, sea turtle sanctuaries, and world-class scuba diving.",
    "coordinates": {
      "lat": 10.853,
      "lng": 72.1947
    },
    "bestMonths": "October to May",
    "idealDays": 4,
    "popularInterests": [
      "Beaches",
      "Scuba Diving",
      "Adventure",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Lakshadweep (Agatti & Bangaram)",
      "Agatti Island",
      "Bangaram Island",
      "Kavaratti",
      "Minicoy"
    ],
    "transportInfo": {
      "nearestAirport": "Agatti Airport (AGX) - Daily flights connect from Kochi (COK)",
      "nearestRailway": "None (Kochi is the nearest railhead on the mainland)",
      "roadConnectivity": "Inter-island transit via high-speed speedboats and passenger catamarans"
    },
    "culturalHighlights": [
      "Landing on Agatti’s airstrip where ocean waves lap both sides of the runway",
      "Bangaram Island uninhabited lagoon swimming with green sea turtles",
      "Fresh coconut tuna preparation (Masmin) and traditional lava dance"
    ],
    "sourceUrl": "https://www.lakshadweeptourism.com",
    "attractions": [
      {
        "id": "lks-bangaram",
        "name": "Bangaram Island Coral Atoll & Lagoon",
        "category": "Beaches",
        "timeSlot": "Morning",
        "description": "Tear-drop shaped uninhabited coral island enclosed by a turquoise lagoon with shallow coral gardens populated by rays, reef sharks, and tropical fish.",
        "visitDurationMinutes": 240,
        "estimatedCostInr": 1000,
        "coordinates": {
          "lat": 10.94,
          "lng": 72.29
        },
        "address": "Lakshadweep (Agatti & Bangaram), Lakshadweep",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Entry requires an approved Lakshadweep Tourism permit obtained in advance"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-lks-1",
        "name": "Agatti Island Beach Resort Dining",
        "mealType": "Lunch",
        "cuisine": "Lakshadweep Maldivic Coastal",
        "famousFor": "Curried Skipjack Tuna with freshly grated coconut, Appam, and sweet coconut milk puddings",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 10.85,
          "lng": 72.19
        }
      }
    ]
  },
  {
    "id": "leh",
    "name": "Leh",
    "normalizedName": "leh",
    "state": "Ladakh",
    "isUnionTerritory": true,
    "district": "Leh",
    "category": "Hill Stations & Mountains",
    "tagline": "Land of High Passes - 17th-Century Leh Palace, Shanti Stupa & Hemis Monastery",
    "description": "High-altitude cold desert capital situated at 3,500 meters along the Indus River valley, renowned for the 9-story Leh Palace resembling Tibet’s Potala, the gleaming white Shanti Stupa, Buddhist gompas, and magnetic hill optical illusions.",
    "coordinates": {
      "lat": 34.1526,
      "lng": 77.5771
    },
    "bestMonths": "May to September (Highway passes open)",
    "idealDays": 3,
    "popularInterests": [
      "Culture",
      "Adventure",
      "Monasteries",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Leh",
      "Ladakh",
      "Little Tibet",
      "Shanti Stupa",
      "Hemis"
    ],
    "transportInfo": {
      "nearestAirport": "Kushok Bakula Rimpochee Airport (IXL) in Leh - 3 km",
      "nearestRailway": "None (Broad gauge rail under construction from Bilaspur-Manali)",
      "roadConnectivity": "Manali-Leh Highway (428 km) & Srinagar-Leh Highway (434 km)"
    },
    "culturalHighlights": [
      "Day 1 mandatory rest and acclimatization to avoid Acute Mountain Sickness (AMS)",
      "Hemis Cham masked dances celebrating Guru Padmasambhava in vibrant silk brocades",
      "Apricot blossom festivals and hand-spun Ladakhi wool pashmina"
    ],
    "sourceUrl": "https://www.ladakhtourism.in",
    "attractions": [
      {
        "id": "leh-shanti-stupa",
        "name": "Shanti Stupa White Dome Pagoda",
        "category": "History",
        "timeSlot": "Evening",
        "description": "White-domed Buddhist pagoda perched on a steep hill in Changspa, built in 1991 by Japanese Buddhists, offering 360-degree sunset panoramas of Leh town and the snow-clad Stok Kangri range.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 34.167,
          "lng": 77.576
        },
        "address": "Leh, Ladakh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Climb the 500 stone stairs in the late afternoon for golden hour photography"
        ]
      },
      {
        "id": "leh-palace",
        "name": "Leh Royal Palace",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Formidable 9-story 17th-century mud-brick palace fortress built by King Sengge Namgyal towering over the old town bazaar, containing royal crown jewelry and centuries-old thangkas.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 34.164,
          "lng": 77.585
        },
        "address": "Leh, Ladakh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take the scenic rooftop ramparts walk for sweeping views over Indus valley oasis"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-leh-1",
        "name": "The Tibetan Kitchen (Fort Road)",
        "mealType": "Dinner",
        "cuisine": "Ladakhi & Tibetan",
        "famousFor": "Tingmo (fluffy steamed bread), Thentuk handmade pulled noodle soup, and Yak Cheese pizza",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 34.162,
          "lng": 77.581
        }
      }
    ]
  },
  {
    "id": "loktak-lake",
    "name": "Loktak Lake & Keibul Lamjao",
    "normalizedName": "loktak lake & keibul lamjao",
    "state": "Manipur",
    "isUnionTerritory": false,
    "district": "Bishnupur",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "World’s Only Floating National Park & Dancing Sangai Deer",
    "description": "The largest natural freshwater lake in Northeast India, famous for phumdis (floating circular biomass islands) and Keibul Lamjao, the world’s sole floating national park housing endangered Sangai brow-antlered deer.",
    "coordinates": {
      "lat": 24.55,
      "lng": 93.8
    },
    "bestMonths": "November to March",
    "idealDays": 2,
    "popularInterests": [
      "Wildlife",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Loktak Lake & Keibul Lamjao",
      "Loktak",
      "Keibul Lamjao",
      "Sendra Island",
      "Moirang"
    ],
    "transportInfo": {
      "nearestAirport": "Imphal Airport (45 km)",
      "nearestRailway": "Dimapur / Silchar",
      "roadConnectivity": "45 km scenic drive from Imphal via Tiddim Road NH 2"
    },
    "culturalHighlights": [
      "Endangered Sangai dancing deer in their native marsh habitat",
      "Fishermen living on floating phumdi homestays",
      "INA War Museum in Moirang where Indian flag was first unfurled in 1944"
    ],
    "sourceUrl": "https://manipurtourism.gov.in",
    "attractions": [
      {
        "id": "lok-sendra",
        "name": "Sendra Island Viewpoint & Boat Safari",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Elevated island hill offering 360-degree vistas of the circular green phumdis floating on azure waters, paired with traditional wooden boat rides.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 200,
        "coordinates": {
          "lat": 24.512,
          "lng": 93.792
        },
        "address": "Loktak Lake & Keibul Lamjao, Manipur",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take an early morning canoe ride through the maze of floating biomass rings"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-lok-1",
        "name": "Sendra Heritage Cafe",
        "mealType": "Lunch",
        "cuisine": "Manipuri Lake Speciality",
        "famousFor": "Fresh lake fish curry with lotus stems and steaming aromatic indigenous rice",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 24.513,
          "lng": 93.793
        }
      }
    ]
  },
  {
    "id": "lonavala-khandala",
    "name": "Lonavala & Khandala",
    "normalizedName": "lonavala & khandala",
    "state": "Maharashtra",
    "isUnionTerritory": false,
    "district": "Pune",
    "category": "Hill Stations & Mountains",
    "tagline": "Jewels of the Sahyadri - Karla Caves, Tiger’s Leap & Famous Chikki",
    "description": "Popular twin hill stations in the Western Ghats famous for monsoon waterfalls, Karla and Bhaja rock-cut Buddhist caves, and artisanal sweet chikki.",
    "coordinates": {
      "lat": 18.7557,
      "lng": 73.4091
    },
    "bestMonths": "July to September & October to March",
    "idealDays": 2,
    "popularInterests": [
      "Nature",
      "Adventure",
      "History"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Lonavala & Khandala",
      "Lonavala",
      "Khandala",
      "Karla Caves"
    ],
    "transportInfo": {
      "nearestAirport": "Pune Airport (70 km) / Mumbai (85 km)",
      "nearestRailway": "Lonavala Railway Station (LNL)",
      "roadConnectivity": "Directly on Mumbai-Pune Expressway"
    },
    "culturalHighlights": [
      "Karla Caves 2nd-century BCE Chaitya hall",
      "Maganlal Lonavala Chikki sweets",
      "Tiger’s Leap clifftop viewpoint"
    ],
    "sourceUrl": "https://www.maharashtratourism.gov.in",
    "attractions": [
      {
        "id": "lon-karla",
        "name": "Karla Caves Buddhist Complex",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Ancient rock-cut caves featuring India’s largest preserved Chaitya hall with carved teak timber roof ribs and ashokan pillars.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 18.782,
          "lng": 73.47
        },
        "address": "Lonavala & Khandala, Maharashtra",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Climb the 350 stone steps in morning hours"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-lon-1",
        "name": "Maganlal Chikki Heritage Store",
        "mealType": "Snacks",
        "cuisine": "Maharashtrian Sweets",
        "famousFor": "Fresh peanut, cashew and crushed dry-fruit Chikki",
        "estimatedCostPerPersonInr": 100,
        "coordinates": {
          "lat": 18.75,
          "lng": 73.408
        }
      }
    ]
  },
  {
    "id": "lucknow",
    "name": "Lucknow",
    "normalizedName": "lucknow",
    "state": "Uttar Pradesh",
    "isUnionTerritory": false,
    "district": "Lucknow",
    "category": "Major Cities & Towns",
    "tagline": "The City of Nawabs - Bara Imambara, Chikankari & Royal Galouti Kebabs",
    "description": "Refined capital city celebrated for legendary Awadhi hospitality (Tehzeeb), architectural marvels including the gravity-defying unsupported roof of Bara Imambara and its labyrinthine Bhool Bhulaiya, delicate shadow-work Chikankari textiles, and melt-in-the-mouth Galouti kebabs.",
    "coordinates": {
      "lat": 26.8467,
      "lng": 80.9462
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Food",
      "Culture",
      "Shopping"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Lucknow",
      "City of Nawabs",
      "Awadh",
      "Bara Imambara"
    ],
    "transportInfo": {
      "nearestAirport": "Chaudhary Charan Singh International Airport (LKO) in Amausi",
      "nearestRailway": "Lucknow Charbagh (LKO)",
      "roadConnectivity": "Agra-Lucknow Expressway (connects to Delhi in 5.5 hours)"
    },
    "culturalHighlights": [
      "Bhool Bhulaiya acoustic labyrinth corridors in Bara Imambara",
      "Hand-stitched GI-tagged Lucknowi Chikankari in Aminabad and Chowk",
      "Kathak classical dance Lucknow Gharana traditions"
    ],
    "sourceUrl": "https://www.uptourism.gov.in",
    "attractions": [
      {
        "id": "lko-bara-imambara",
        "name": "Bara Imambara & Bhool Bhulaiya",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Monumental 1784 hall built by Nawab Asaf-ud-Daula with an arched central hall constructed without any supporting pillars, crowned by a maze of 1,000 interlocking labyrinth corridors.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 26.869,
          "lng": 80.913
        },
        "address": "Lucknow, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Hire an official guide to navigate the thrilling upper rooftop labyrinth passages"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-lko-1",
        "name": "Tunday Kababi (Chowk - Est. 1905)",
        "mealType": "Dinner",
        "cuisine": "Awadhi Nawabi",
        "famousFor": "Original 160-spice soft melt-in-mouth Galouti Kebabs served with flaky Mughlai Ulte Tawe ka Paratha",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 26.865,
          "lng": 80.908
        }
      }
    ]
  },
  {
    "id": "madurai",
    "name": "Madurai",
    "normalizedName": "madurai",
    "state": "Tamil Nadu",
    "isUnionTerritory": false,
    "district": "Madurai",
    "category": "Religious & Pilgrimage",
    "tagline": "The Cultural Soul of Tamil Nadu - Meenakshi Amman Temple & Jigarthanda",
    "description": "One of the oldest continuously inhabited cities in the world, renowned for the colossal 14-tower Meenakshi Sundareswarar Temple complex, 1,000-pillar hall, night bedtime ceremonies, and refreshing Jigarthanda dessert.",
    "coordinates": {
      "lat": 9.9252,
      "lng": 78.1198
    },
    "bestMonths": "October to March (April for Chithirai Festival)",
    "idealDays": 2,
    "popularInterests": [
      "Temples",
      "History",
      "Culture",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Madurai",
      "Thoonga Nagaram (City that never sleeps)",
      "Temple City"
    ],
    "transportInfo": {
      "nearestAirport": "Madurai International Airport (IXM) - 12 km",
      "nearestRailway": "Madurai Junction (MDU)",
      "roadConnectivity": "Golden Quadrilateral NH 44 and NH 38"
    },
    "culturalHighlights": [
      "Meenakshi Temple 1,000-pillar hall and daily night Palliarai ceremony (9:00 PM)",
      "Famous GI-tagged Madurai Malli (Jasmine flowers)",
      "Thirumalai Nayakkar Palace light & sound show"
    ],
    "sourceUrl": "https://www.tamilnadutourism.tn.gov.in",
    "attractions": [
      {
        "id": "mdu-meenakshi",
        "name": "Arulmigu Meenakshi Sundareswarar Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Architectural wonder featuring 14 towering gopurams encrusted with thousands of brightly painted stucco mythological deities, sacred Golden Lotus pond, and musical pillars.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 9.9195,
          "lng": 78.1193
        },
        "address": "Madurai, Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Phones and cameras are prohibited inside; attend the 9:00 PM evening procession of Lord Sundareswarar"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mdu-1",
        "name": "Famous Jigarthanda Stall (Since 1977)",
        "mealType": "Snacks",
        "cuisine": "Madurai Special Dessert",
        "famousFor": "Royal Special Jigarthanda with almond gum, condensed milk, nannari syrup, and basundi ice cream",
        "estimatedCostPerPersonInr": 70,
        "coordinates": {
          "lat": 9.918,
          "lng": 78.121
        }
      },
      {
        "id": "m-mdu-2",
        "name": "Murugan Idli Shop (West Masi Street)",
        "mealType": "Breakfast",
        "cuisine": "Traditional South Indian",
        "famousFor": "Ultra-soft steamed idlis served with four distinct coconut, tomato, and mint chutneys and hot sambar",
        "estimatedCostPerPersonInr": 120,
        "coordinates": {
          "lat": 9.9205,
          "lng": 78.118
        }
      }
    ]
  },
  {
    "id": "majuli",
    "name": "Majuli",
    "normalizedName": "majuli",
    "state": "Assam",
    "isUnionTerritory": false,
    "district": "Majuli",
    "category": "Cultural & Local Experiences",
    "tagline": "World’s Largest River Island - Neo-Vaishnavite Satras & Mask Making",
    "description": "Enchanting river island on the Brahmaputra River, acting as the spiritual epicenter of Assamese culture, monastic Satras, and traditional pottery.",
    "coordinates": {
      "lat": 26.9536,
      "lng": 94.2185
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Culture",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Majuli",
      "Majuli Island"
    ],
    "transportInfo": {
      "nearestAirport": "Jorhat Airport (20 km to ferry ghat)",
      "nearestRailway": "Jorhat Station",
      "roadConnectivity": "Ferry service from Nimati Ghat"
    },
    "culturalHighlights": [
      "Neo-Vaishnavite Satra dance & music",
      "Handmade bamboo & clay theatrical masks"
    ],
    "sourceUrl": "https://assamtourism.gov.in",
    "attractions": [
      {
        "id": "maj-satras",
        "name": "Chamaguri Satra Mask Makers",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Monastery where master artisans sculpt traditional masks from bamboo and clay.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 26.96,
          "lng": 94.225
        },
        "address": "Majuli, Assam",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Watch a live mask crafting demonstration"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-maj-1",
        "name": "Ural Mishing Kitchen",
        "mealType": "Lunch",
        "cuisine": "Mishing Tribal",
        "famousFor": "Fish baked inside fresh banana leaf with wild herbs",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 26.955,
          "lng": 94.219
        }
      }
    ]
  },
  {
    "id": "manali",
    "name": "Manali",
    "normalizedName": "manali",
    "state": "Himachal Pradesh",
    "isUnionTerritory": false,
    "district": "Kullu",
    "category": "Hill Stations & Mountains",
    "tagline": "Valley of the Gods - Snow Peaks, Solang Adventures & Rohtang Pass",
    "description": "High-altitude Himalayan retreat nestled along the Beas River, renowned for paragliding in Solang, Atal Tunnel, ancient Hadimba Temple, and Bohemian Old Manali.",
    "coordinates": {
      "lat": 32.2432,
      "lng": 77.1892
    },
    "bestMonths": "October to June",
    "idealDays": 4,
    "popularInterests": [
      "Adventure",
      "Nature",
      "Snow",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Manali",
      "Kullu Manali",
      "Solang Valley",
      "Old Manali"
    ],
    "transportInfo": {
      "nearestAirport": "Kullu-Manali Airport, Bhuntar (50 km)",
      "nearestRailway": "Chandigarh Junction (310 km) / Joginder Nagar (165 km)",
      "roadConnectivity": "NH 3 through Chandigarh, Bilaspur, and Mandi"
    },
    "culturalHighlights": [
      "Himachali handloom Kullu shawls",
      "Siddu steamed bread with ghee",
      "Old Manali indie live music cafes"
    ],
    "sourceUrl": "https://himachaltourism.gov.in",
    "attractions": [
      {
        "id": "manali-solang",
        "name": "Solang Valley Adventure Hub",
        "category": "Adventure",
        "timeSlot": "Morning",
        "description": "Premier adventure hub at 2,560m for paragliding, zorbing, snow quad-biking, and skiing.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 1200,
        "coordinates": {
          "lat": 32.3167,
          "lng": 77.1583
        },
        "address": "Manali, Himachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Rent snow suits from authorized HP government stalls"
        ]
      },
      {
        "id": "manali-hadimba",
        "name": "Hadimba Wooden Pagoda Temple",
        "category": "Temples",
        "timeSlot": "Evening",
        "description": "Built in 1553, this four-tiered pagoda temple rests peacefully within a dense deodar pine forest.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 32.249,
          "lng": 77.175
        },
        "address": "Manali, Himachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Explore the Dhungri Van Vihar pine sanctuary trail right behind"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-manali-1",
        "name": "Cafe 1947 Old Manali",
        "mealType": "Dinner",
        "cuisine": "Himachali & Italian",
        "famousFor": "Pan-seared Beas River trout and wood-fired artisanal pizza",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 32.256,
          "lng": 77.182
        }
      }
    ]
  },
  {
    "id": "mumbai",
    "name": "Mumbai",
    "normalizedName": "mumbai",
    "state": "Maharashtra",
    "isUnionTerritory": false,
    "district": "Mumbai City and Suburban",
    "category": "Major Cities & Towns",
    "tagline": "City of Dreams - Gateway of India, Marine Drive, Bollywood & Elephanta",
    "description": "India’s bustling financial and entertainment capital on the Arabian Sea, famed for Victorian Gothic architecture, coastal boulevards, street snacks, and film culture.",
    "coordinates": {
      "lat": 19.076,
      "lng": 72.8777
    },
    "bestMonths": "October to March",
    "idealDays": 4,
    "popularInterests": [
      "Food",
      "History",
      "Culture",
      "Sightseeing",
      "Shopping"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Mumbai",
      "Bombay",
      "Maximum City",
      "City of Dreams"
    ],
    "transportInfo": {
      "nearestAirport": "Chhatrapati Shivaji Maharaj International Airport (BOM) in city",
      "nearestRailway": "Chhatrapati Shivaji Maharaj Terminus (CSMT) & Mumbai Central",
      "roadConnectivity": "Mumbai-Pune Expressway and coastal NH 66"
    },
    "culturalHighlights": [
      "UNESCO CSMT Victorian Gothic terminus",
      "Ferry ride to Elephanta Caves rock art",
      "Marine Drive Queen’s Necklace evening breeze"
    ],
    "sourceUrl": "https://www.maharashtratourism.gov.in",
    "attractions": [
      {
        "id": "mum-gateway",
        "name": "Gateway of India & Taj Mahal Palace",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Iconic 26-meter basalt arch built in 1924 overlooking Mumbai Harbour, fronting the historic Taj Mahal Palace Hotel.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 18.922,
          "lng": 72.8347
        },
        "address": "Mumbai, Maharashtra",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take harbour ferry boats to Elephanta Caves right from the jetty"
        ]
      },
      {
        "id": "mum-marine-drive",
        "name": "Marine Drive & Chowpatty Beach Promenade",
        "category": "Sightseeing",
        "timeSlot": "Evening",
        "description": "3.6-kilometer C-shaped coastal boulevard known as the Queen’s Necklace, bustling with walkers and sunset crowds.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 18.943,
          "lng": 72.823
        },
        "address": "Mumbai, Maharashtra",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Sit on the sea-facing promenade wall during golden hour"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mum-1",
        "name": "Cannon Pav Bhaji CSMT",
        "mealType": "Lunch",
        "cuisine": "Maharashtrian Street Food",
        "famousFor": "Buttery Pav Bhaji with special 60-year-old spice blend recipe",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 18.94,
          "lng": 72.835
        }
      }
    ]
  },
  {
    "id": "munnar",
    "name": "Munnar",
    "normalizedName": "munnar",
    "state": "Kerala",
    "isUnionTerritory": false,
    "district": "Idukki",
    "category": "Hill Stations & Mountains",
    "tagline": "Kashmir of South India - Rolling Tea Carpets, Anamudi & Nilgiri Tahr",
    "description": "Enchanting hill resort at 1,600m in the Western Ghats, blanketed in manicured tea gardens, mist-kissed waterfalls, and Eravikulam National Park.",
    "coordinates": {
      "lat": 10.0889,
      "lng": 77.0595
    },
    "bestMonths": "September to May",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Wildlife",
      "Photography",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Munnar",
      "Munnar Hills",
      "Tea Gardens Munnar"
    ],
    "transportInfo": {
      "nearestAirport": "Cochin International Airport (COK) - 110 km",
      "nearestRailway": "Aluva (110 km) / Ernakulam (130 km)",
      "roadConnectivity": "Scenic mountain highway NH 85 (Kochi-Dhanushkodi)"
    },
    "culturalHighlights": [
      "KDHP Tea Museum & fresh factory tasting",
      "Kathakali and Kalaripayattu martial arts shows",
      "Kerala Appam with stew"
    ],
    "sourceUrl": "https://keralatourism.org",
    "attractions": [
      {
        "id": "mun-eravikulam",
        "name": "Eravikulam National Park (Rajamalai)",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Sanctuary housing the endangered Nilgiri Tahr and offering panoramic vistas of Anamudi, South India’s highest peak (2,695m).",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 200,
        "coordinates": {
          "lat": 10.15,
          "lng": 77.06
        },
        "address": "Munnar, Kerala",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Book entry bus slots online in advance"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mun-1",
        "name": "Saravana Bhavan Munnar",
        "mealType": "Breakfast",
        "cuisine": "Kerala South Indian",
        "famousFor": "Hot Ghee Roast Dosa, Puttu with Kadala Curry and cardamom tea",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 10.088,
          "lng": 77.06
        }
      }
    ]
  },
  {
    "id": "mussoorie",
    "name": "Mussoorie",
    "normalizedName": "mussoorie",
    "state": "Uttarakhand",
    "isUnionTerritory": false,
    "district": "Dehradun",
    "category": "Hill Stations & Mountains",
    "tagline": "Queen of the Hills - Kempty Falls, Gun Hill & The Winterline Spectacle",
    "description": "Charming colonial hill station perched on a 2,000-meter ridge overlooking the Doon Valley, famous for Kempty Falls, Camel’s Back Road, the rare Winterline sunset atmospheric phenomenon, and author Ruskin Bond’s mountain hometown.",
    "coordinates": {
      "lat": 30.4598,
      "lng": 78.0644
    },
    "bestMonths": "March to June & September to November",
    "idealDays": 2,
    "popularInterests": [
      "Nature",
      "Sightseeing",
      "Photography",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Mussoorie",
      "Queen of the Hills",
      "Kempty Falls",
      "Landour"
    ],
    "transportInfo": {
      "nearestAirport": "Dehradun Jolly Grant Airport (60 km)",
      "nearestRailway": "Dehradun Railway Station (DDN) - 34 km",
      "roadConnectivity": "Scenic mountain climb road from Dehradun"
    },
    "culturalHighlights": [
      "Landour heritage bakehouses and Char Dukan",
      "Rare Winterline sunset horizon phenomenon visible in winter months",
      "Historic library and vintage churches along Mall Road"
    ],
    "sourceUrl": "https://uttarakhandtourism.gov.in",
    "attractions": [
      {
        "id": "msr-kempty-falls",
        "name": "Kempty Falls Cascades",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Vibrant 40-foot mountain waterfall cascading into a natural swimming pool accessed via scenic cable ropeway.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 30.485,
          "lng": 78.028
        },
        "address": "Mussoorie, Uttarakhand",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit early morning before midday tourist buses arrive"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-msr-1",
        "name": "Char Dukan Heritage Cafe (Landour)",
        "mealType": "Breakfast",
        "cuisine": "Hill Station Bakery & Cafe",
        "famousFor": "Fresh Banana Nutella Pancakes, Bun Maska, Wai Wai bhel, and ginger lemon honey tea",
        "estimatedCostPerPersonInr": 180,
        "coordinates": {
          "lat": 30.463,
          "lng": 78.092
        }
      }
    ]
  },
  {
    "id": "mysuru",
    "name": "Mysuru",
    "normalizedName": "mysuru",
    "state": "Karnataka",
    "isUnionTerritory": false,
    "district": "Mysuru",
    "category": "Historical Monuments & Heritage",
    "tagline": "City of Palaces - Indo-Saracenic Royal Opulence, Sandalwood & Silk",
    "description": "Heritage city famed for the illuminated Mysore Palace, Chamundeshwari Temple on Chamundi Hills, Devaraja Market, and fragrant sandalwood.",
    "coordinates": {
      "lat": 12.2958,
      "lng": 76.6394
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Culture",
      "Shopping",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Mysuru",
      "Mysore",
      "City of Palaces"
    ],
    "transportInfo": {
      "nearestAirport": "Mysuru Airport (MYQ) / Bengaluru Airport (170 km)",
      "nearestRailway": "Mysuru Junction (MYS)",
      "roadConnectivity": "Bengaluru-Mysuru 10-lane Expressway"
    },
    "culturalHighlights": [
      "Mysore Dasara Jumbo Savari procession",
      "Mysore Pak melt-in-mouth sweet",
      "Pure Mysore Silk sarees"
    ],
    "sourceUrl": "https://karnatakatourism.org",
    "attractions": [
      {
        "id": "mys-palace",
        "name": "Mysore Palace (Amba Vilas)",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Indo-Saracenic architectural masterpiece adorned with stained glass domes, carved rosewood doors, and illuminated by 97,000 light bulbs.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 12.3051,
          "lng": 76.6551
        },
        "address": "Mysuru, Karnataka",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Sunday evening palace illumination from 7:00 PM to 8:00 PM is unmissable"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mys-1",
        "name": "Guru Sweets (Original Mysore Pak)",
        "mealType": "Snacks",
        "cuisine": "Traditional Karnataka Sweets",
        "famousFor": "Hot Ghee Mysore Pak prepared by the royal recipe lineage",
        "estimatedCostPerPersonInr": 120,
        "coordinates": {
          "lat": 12.308,
          "lng": 76.652
        }
      }
    ]
  },
  {
    "id": "nainital",
    "name": "Nainital",
    "normalizedName": "nainital",
    "state": "Uttarakhand",
    "isUnionTerritory": false,
    "district": "Nainital",
    "category": "Hill Stations & Mountains",
    "tagline": "Lake District of India - Emerald Naini Lake, Naina Devi & Snow View",
    "description": "Popular Himalayan lake retreat set in a wooded mountain basin at 2,000 meters, famous for the emerald eye-shaped Naini Lake, colorful yacht sailing, Naina Devi temple, and cable car views of Nanda Devi peaks.",
    "coordinates": {
      "lat": 29.3919,
      "lng": 79.4542
    },
    "bestMonths": "March to June (Summer) & November to February (Snowfall)",
    "idealDays": 2,
    "popularInterests": [
      "Nature",
      "Boating",
      "Photography",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Nainital",
      "Lake City",
      "Naini Lake",
      "Bhimtal"
    ],
    "transportInfo": {
      "nearestAirport": "Pantnagar Airport (PGH) - 70 km / Delhi (300 km)",
      "nearestRailway": "Kathgodam Railway Station (KGM) - 34 km",
      "roadConnectivity": "NH 109 connects Kathgodam to Nainital"
    },
    "culturalHighlights": [
      "Yacht sailing and wooden paddle boating on Naini Lake",
      "Mall Road colonial strolls and Tibetan market momos",
      "Handcrafted aroma candles made by local artisans"
    ],
    "sourceUrl": "https://uttarakhandtourism.gov.in",
    "attractions": [
      {
        "id": "ntl-naini-lake",
        "name": "Naini Lake Boating & Naina Devi Temple",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Scenic natural freshwater lake framed by seven surrounding hills, offering paddle and gondola-style rowing boat rides past sacred Naina Devi temple.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 250,
        "coordinates": {
          "lat": 29.3919,
          "lng": 79.4542
        },
        "address": "Nainital, Uttarakhand",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take an evening boat ride when Mall Road lights shimmer on the water surface"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ntl-1",
        "name": "Sakley’s Restaurant & Pastry Shop",
        "mealType": "Dinner",
        "cuisine": "Continental & Himalayan Bakery",
        "famousFor": "Roast Chicken, shepherd’s pie, Apple Strudel, and hot chocolate brownies",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 29.394,
          "lng": 79.452
        }
      }
    ]
  },
  {
    "id": "nalanda",
    "name": "Nalanda & Rajgir",
    "normalizedName": "nalanda & rajgir",
    "state": "Bihar",
    "isUnionTerritory": false,
    "district": "Nalanda",
    "category": "Historical Monuments & Heritage",
    "tagline": "Ancient Seat of Global Learning - Monastic University Ruins & Vulture Peak",
    "description": "Archaeological ruins of Nalanda Mahavihara, the world’s first residential university, paired with the scenic hills and hot springs of Rajgir.",
    "coordinates": {
      "lat": 25.1357,
      "lng": 85.4452
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Culture",
      "Sightseeing"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Nalanda & Rajgir",
      "Nalanda University",
      "Rajgir"
    ],
    "transportInfo": {
      "nearestAirport": "Patna Airport (85 km)",
      "nearestRailway": "Rajgir Station",
      "roadConnectivity": "NH 20 and NH 120"
    },
    "culturalHighlights": [
      "Ancient Buddhist & Jain heritage",
      "Rajgir peace pagoda ropeway"
    ],
    "sourceUrl": "https://tourism.bihar.gov.in",
    "attractions": [
      {
        "id": "nalanda-ruins",
        "name": "Ruins of Nalanda University",
        "category": "History",
        "timeSlot": "Morning",
        "description": "UNESCO World Heritage monastic brick ruins where 10,000 scholars once studied.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 40,
        "coordinates": {
          "lat": 25.136,
          "lng": 85.445
        },
        "address": "Nalanda & Rajgir, Bihar",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit the adjacent museum"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-nal-1",
        "name": "Rajgir Heritage Bhojanalaya",
        "mealType": "Lunch",
        "cuisine": "Bihari",
        "famousFor": "Charcoal roasted Litti Chokha with sattu sharbat",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 25.03,
          "lng": 85.42
        }
      }
    ]
  },
  {
    "id": "ooty",
    "name": "Ooty (Udhagamandalam)",
    "normalizedName": "ooty (udhagamandalam)",
    "state": "Tamil Nadu",
    "isUnionTerritory": false,
    "district": "Nilgiris",
    "category": "Hill Stations & Mountains",
    "tagline": "Queen of Hill Stations - Nilgiri Mountain Toy Train & Doddabetta Peak",
    "description": "Premier hill resort in the Nilgiri Hills at 2,240 meters, famous for the UNESCO Nilgiri Mountain Railway steam toy train, vast tea estates, Government Botanical Gardens, and fragrant eucalyptus forests.",
    "coordinates": {
      "lat": 11.4102,
      "lng": 76.695
    },
    "bestMonths": "October to June",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Trekking",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Ooty (Udhagamandalam)",
      "Udhagai",
      "Nilgiris",
      "Queen of Hills"
    ],
    "transportInfo": {
      "nearestAirport": "Coimbatore International Airport (CJB) - 88 km",
      "nearestRailway": "Udhagamandalam Railway Station (UAM) / Mettupalayam (MTP) - 51 km",
      "roadConnectivity": "Hairpin bend ghat road NH 181 from Coimbatore"
    },
    "culturalHighlights": [
      "UNESCO heritage steam toy train crossing viaduct bridges and tunnels",
      "Toda tribal bamboo embroidery and round barrel huts",
      "Nilgiri tea and homemade artisanal chocolates"
    ],
    "sourceUrl": "https://www.tamilnadutourism.tn.gov.in",
    "attractions": [
      {
        "id": "ooty-botanical-gardens",
        "name": "Government Botanical Gardens",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Vast 55-acre terraced botanical sanctuary established in 1848, home to over a thousand exotic plant species, a 20-million-year-old fossilized tree trunk, and Italian gardens.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 40,
        "coordinates": {
          "lat": 11.419,
          "lng": 76.711
        },
        "address": "Ooty (Udhagamandalam), Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit early to experience morning mist lifting off the manicured glasshouse lawns"
        ]
      },
      {
        "id": "ooty-doddabetta",
        "name": "Doddabetta Peak & Telescope House",
        "category": "Nature",
        "timeSlot": "Afternoon",
        "description": "The highest point in the Nilgiri Mountains at 2,637 meters, offering telescope viewing chambers with panoramic views over Bandipur forests and Coimbatore plains.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 11.401,
          "lng": 76.735
        },
        "address": "Ooty (Udhagamandalam), Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Carry warm clothing as summit winds can be chilly even in summer"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ooty-1",
        "name": "Nahar’s Sidewalk Cafe & Chandan",
        "mealType": "Lunch",
        "cuisine": "South Indian & Italian",
        "famousFor": "Wood-fired thin crust pizzas, South Indian thali, and homemade Nilgiri hot chocolate",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 11.409,
          "lng": 76.702
        }
      }
    ]
  },
  {
    "id": "pangong-tso",
    "name": "Pangong Tso & Nubra Valley",
    "normalizedName": "pangong tso & nubra valley",
    "state": "Ladakh",
    "isUnionTerritory": true,
    "district": "Leh",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "Color-Changing Endorheic Salt Lake at 14,270 Feet & Hunder Sand Dunes",
    "description": "Iconic trans-Himalayan wonderland spanning the Indo-China LAC at 4,350 meters, famous for crystal saline waters shifting from emerald green to deep azure blue, paired with Nubra Valley’s double-humped Bactrian camel safaris across silver Hunder sand dunes.",
    "coordinates": {
      "lat": 33.7595,
      "lng": 78.6674
    },
    "bestMonths": "May to September",
    "idealDays": 2,
    "popularInterests": [
      "Adventure",
      "Nature",
      "Photography",
      "Wildlife"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Pangong Tso & Nubra Valley",
      "Pangong Lake",
      "Nubra Valley",
      "Hunder Dunes",
      "Khardung La",
      "Chang La"
    ],
    "transportInfo": {
      "nearestAirport": "Leh Airport (150 km to Pangong via Chang La Pass at 17,688 ft)",
      "nearestRailway": "None",
      "roadConnectivity": "Crosses Chang La Pass (Pangong) and Khardung La Pass (Nubra Valley at 18,380 ft)"
    },
    "culturalHighlights": [
      "Endorheic lake completely freezing solid in winter despite high salinity",
      "Double-humped woolly Bactrian camels remnants of the ancient Silk Route trade caravans",
      "Diskit Monastery colossal 106-foot golden Maitreya Buddha statue"
    ],
    "sourceUrl": "https://www.ladakhtourism.in",
    "attractions": [
      {
        "id": "png-lake",
        "name": "Pangong Tso Blue Water Viewpoint",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Breathtaking 134-km long alpine saline lake framed by dramatic barren brown mountains, made famous globally in the film 3 Idiots.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 33.7595,
          "lng": 78.6674
        },
        "address": "Pangong Tso & Nubra Valley, Ladakh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Inner Line Permit (ILP) is mandatory; dress in windproof fleece; stargaze at night under crystal Milky Way skies"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-png-1",
        "name": "Pangong Lakeside Swiss Camp Dining",
        "mealType": "Dinner",
        "cuisine": "Warm North Indian & Tibetan",
        "famousFor": "Hot dal tadka, steamed basmati rice, vegetable thukpa, and butter tea in biting night cold",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 33.765,
          "lng": 78.67
        }
      }
    ]
  },
  {
    "id": "patna",
    "name": "Patna",
    "normalizedName": "patna",
    "state": "Bihar",
    "isUnionTerritory": false,
    "district": "Patna",
    "category": "Major Cities & Towns",
    "tagline": "Ancient Pataliputra - Ganga Riverfront, Golghar & Takht Sri Patna Sahib",
    "description": "Capital of Bihar along the Ganges, steeped in three millennia of history from the Mauryan Empire to Sikh spiritual heritage.",
    "coordinates": {
      "lat": 25.5941,
      "lng": 85.1376
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Culture",
      "Temples",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Patna",
      "Pataliputra",
      "Patna Sahib"
    ],
    "transportInfo": {
      "nearestAirport": "Patna Airport (PAT)",
      "nearestRailway": "Patna Junction (PNBE)",
      "roadConnectivity": "NH 31 and NH 19"
    },
    "culturalHighlights": [
      "Takht Sri Harmandir Sahib",
      "Bihari Khaja sweet",
      "Madhubani art"
    ],
    "sourceUrl": "https://tourism.bihar.gov.in",
    "attractions": [
      {
        "id": "pat-golghar",
        "name": "Golghar Granary & Ganga View",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Colossal beehive-shaped British granary built in 1786 with spiral stairs.",
        "visitDurationMinutes": 60,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 25.619,
          "lng": 85.143
        },
        "address": "Patna, Bihar",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Climb the spiral stairs for skyline views"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-pat-1",
        "name": "Bhojpur Litti Hut",
        "mealType": "Lunch",
        "cuisine": "Bihari",
        "famousFor": "Authentic Ghee Litti Chokha & Mutton curry",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 25.61,
          "lng": 85.14
        }
      }
    ]
  },
  {
    "id": "port-blair",
    "name": "Port Blair",
    "normalizedName": "port blair",
    "state": "Andaman and Nicobar Islands",
    "isUnionTerritory": true,
    "district": "South Andaman",
    "category": "Historical Monuments & Heritage",
    "tagline": "Gateway to the Andamans - Historic Cellular Jail & Ross Island",
    "description": "Capital island port town surrounded by turquoise waters, famous for the solemn Cellular Jail (Kala Pani) national memorial, Ross Island (Netaji Subhash Chandra Bose Dweep) ruins draped in banyan roots, and scenic coastal coromandel drives.",
    "coordinates": {
      "lat": 11.6234,
      "lng": 92.7265
    },
    "bestMonths": "October to May",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Beaches",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Port Blair",
      "Cellular Jail",
      "Kala Pani",
      "Andaman"
    ],
    "transportInfo": {
      "nearestAirport": "Veer Savarkar International Airport (IXZ) in Port Blair",
      "nearestRailway": "None (Connected via flights and sea passenger ships from Chennai/Kolkata/Vizag)",
      "roadConnectivity": "Great Andaman Trunk Road NH 4 connects to North Andaman"
    },
    "culturalHighlights": [
      "Cellular Jail poignant evening sound and light show narrated in the voice of the ancient Peepal tree",
      "Ross Island deer and peacocks roaming among British colonial ballroom ruins",
      "Samudrika Naval Marine Museum"
    ],
    "sourceUrl": "https://www.andamantourism.gov.in",
    "attractions": [
      {
        "id": "pbl-cellular-jail",
        "name": "Cellular Jail National Memorial",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Colonial 7-wing solitary confinement prison built between 1896 and 1906 where Indian freedom fighters were exiled, now a revered national pilgrimage memorial.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 30,
        "coordinates": {
          "lat": 11.674,
          "lng": 92.747
        },
        "address": "Port Blair, Andaman and Nicobar Islands",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Book tickets in advance for the evening sound and light show"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-pbl-1",
        "name": "New Lighthouse Restaurant",
        "mealType": "Dinner",
        "cuisine": "Andaman Coastal Seafood",
        "famousFor": "Fresh grilled red snapper, butter garlic tiger prawns, and crab curry with coconut rice",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 11.668,
          "lng": 92.742
        }
      }
    ]
  },
  {
    "id": "puducherry",
    "name": "Puducherry (Pondicherry)",
    "normalizedName": "puducherry (pondicherry)",
    "state": "Puducherry",
    "isUnionTerritory": true,
    "district": "Puducherry",
    "category": "Historical Monuments & Heritage",
    "tagline": "The French Riviera of the East - White Town, Promenade & Auroville Matrimandir",
    "description": "Charming French colonial coastal enclave celebrated for mustard-yellow colonial villas draped with bougainvillea in White Town, the oceanfront Promenade Beach, Sri Aurobindo Ashram, and the golden geodesic dome of Matrimandir in the universal township of Auroville.",
    "coordinates": {
      "lat": 11.9416,
      "lng": 79.8083
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Culture",
      "Architecture",
      "Beaches",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Puducherry (Pondicherry)",
      "Pondicherry",
      "Pondy",
      "White Town",
      "Auroville",
      "Matrimandir"
    ],
    "transportInfo": {
      "nearestAirport": "Puducherry Airport (PNY) / Chennai International Airport (MAA) - 135 km",
      "nearestRailway": "Puducherry Railway Station (PDY)",
      "roadConnectivity": "Picturesque East Coast Road (ECR) highway from Chennai"
    },
    "culturalHighlights": [
      "Strolling or bicycling along cobblestone Rue Suffren and Rue Romain Rolland in French Quarter",
      "Matrimandir golden globe silent concentration chamber in Auroville",
      "French creperies, freshly baked baguettes, and artisanal sourdough"
    ],
    "sourceUrl": "https://www.pondytourism.in",
    "attractions": [
      {
        "id": "pdy-white-town",
        "name": "White Town (French Quarter) & Promenade",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Preserved French colonial grid quarter with grand wrought-iron gateways, pastel facades, chic art boutiques, and seaside pedestrian walkway.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 11.933,
          "lng": 79.835
        },
        "address": "Puducherry (Pondicherry), Puducherry",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Rent a vintage pastel bicycle to explore the peaceful French street architecture"
        ]
      },
      {
        "id": "pdy-auroville",
        "name": "Auroville & Matrimandir Golden Sphere",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Experimental international township founded by Mirra Alfassa (The Mother) centered on the golden geodesic dome housing the world’s largest optically worked glass globe.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 12.0069,
          "lng": 79.8106
        },
        "address": "Puducherry (Pondicherry), Puducherry",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Viewing point passes are free at the visitor center; inner chamber requires prior online booking"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-pdy-1",
        "name": "Cafe des Arts (Rue Suffren)",
        "mealType": "Breakfast",
        "cuisine": "French Bistro & Creperie",
        "famousFor": "Buckwheat savory galettes, sweet Nutella banana crepes, Croque Monsieur, and espresso",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 11.932,
          "lng": 79.833
        }
      }
    ]
  },
  {
    "id": "pune",
    "name": "Pune",
    "normalizedName": "pune",
    "state": "Maharashtra",
    "isUnionTerritory": false,
    "district": "Pune",
    "category": "Major Cities & Towns",
    "tagline": "Oxford of the East - Maratha Empire Capital, Shaniwar Wada & Sinhagad Fort",
    "description": "Cultural capital of Maharashtra blending Maratha Peshwa history, hilltop fortress treks, Osho International Ashram, and vibrant student-driven cafe culture.",
    "coordinates": {
      "lat": 18.5204,
      "lng": 73.8567
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Culture",
      "Food",
      "Adventure"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Pune",
      "Poona",
      "Cultural Capital of Maharashtra"
    ],
    "transportInfo": {
      "nearestAirport": "Pune International Airport (PNQ) in Lohegaon",
      "nearestRailway": "Pune Junction (PUNE)",
      "roadConnectivity": "Mumbai-Pune Expressway (2 hours)"
    },
    "culturalHighlights": [
      "Shaniwar Wada 18th-century Peshwa palace ruins",
      "Misal Pav breakfast trails in Sadashiv Peth",
      "Aga Khan Palace memorial"
    ],
    "sourceUrl": "https://www.maharashtratourism.gov.in",
    "attractions": [
      {
        "id": "pun-shaniwar",
        "name": "Shaniwar Wada Palace Fortress",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Historic seat of the Peshwa rulers of the Maratha Empire built in 1732 featuring fortified teak gates and fountain courtyards.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 18.5195,
          "lng": 73.8553
        },
        "address": "Pune, Maharashtra",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Attend the evening sound and light show"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-pun-1",
        "name": "Kattakirrr Misal",
        "mealType": "Breakfast",
        "cuisine": "Maharashtrian",
        "famousFor": "Fiery Kolhapuri Misal Pav served with fresh curd and pav",
        "estimatedCostPerPersonInr": 120,
        "coordinates": {
          "lat": 18.508,
          "lng": 73.834
        }
      }
    ]
  },
  {
    "id": "puri",
    "name": "Puri",
    "normalizedName": "puri",
    "state": "Odisha",
    "isUnionTerritory": false,
    "district": "Puri",
    "category": "Religious & Pilgrimage",
    "tagline": "Spiritual Coastal Haven - Sacred Jagannath Temple & Golden Beach",
    "description": "One of the four sacred Char Dham pilgrimage sites, celebrated for the 12th-century Shree Jagannath Temple, the world-famous annual Ratha Yatra (Chariot Festival), and blue-flag certified Golden Beach sands.",
    "coordinates": {
      "lat": 19.8135,
      "lng": 85.8312
    },
    "bestMonths": "October to March (July for Ratha Yatra)",
    "idealDays": 3,
    "popularInterests": [
      "Temples",
      "Beaches",
      "Culture",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Puri",
      "Jagannath Puri",
      "Srikshetra",
      "Shankhakshetra"
    ],
    "transportInfo": {
      "nearestAirport": "Biju Patnaik International Airport, Bhubaneswar (BBI) - 60 km",
      "nearestRailway": "Puri Railway Station (PURI) in town",
      "roadConnectivity": "4-lane National Highway NH 316 from Bhubaneswar"
    },
    "culturalHighlights": [
      "Lord Jagannath Mahaprasad (56 Bhog cooked in clay pots)",
      "Blue Flag Golden Beach promenade",
      "Pipili applique lampshade village nearby"
    ],
    "sourceUrl": "https://odishatourism.gov.in",
    "attractions": [
      {
        "id": "puri-jagannath",
        "name": "Shree Jagannath Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Majestic 65-meter high Kalinga-style temple consecrated to Lord Jagannath, Balabhadra, and Subhadra featuring India’s largest traditional kitchen.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 19.8048,
          "lng": 85.8179
        },
        "address": "Puri, Odisha",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Phones and leather items prohibited inside; taste hot Ananda Bazar Mahaprasad"
        ]
      },
      {
        "id": "puri-beach",
        "name": "Puri Golden Beach (Blue Flag)",
        "category": "Beaches",
        "timeSlot": "Evening",
        "description": "Pristine, certified clean sandy beach famous for sand art sculptures by Sudarsan Pattnaik and colorful camel rides.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 19.798,
          "lng": 85.828
        },
        "address": "Puri, Odisha",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit early evening to see sand art creations and taste fresh jhalmuri"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-puri-1",
        "name": "Ananda Bazar (Jagannath Temple Complex)",
        "mealType": "Lunch",
        "cuisine": "Sacred Odia Temple Mahaprasad",
        "famousFor": "Abadha (steamed rice, sweet dal, potal rasa, and Khaja sweets baked in clay pots)",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 19.8055,
          "lng": 85.8185
        }
      }
    ]
  },
  {
    "id": "raipur",
    "name": "Raipur",
    "normalizedName": "raipur",
    "state": "Chhattisgarh",
    "isUnionTerritory": false,
    "district": "Raipur",
    "category": "Major Cities & Towns",
    "tagline": "Rice Bowl of India - Modern Capital & Ancient Sirpur Heritage",
    "description": "Dynamic capital city blending modern urban waterfronts with gateway access to the 5th-century brick temples of Sirpur.",
    "coordinates": {
      "lat": 21.2514,
      "lng": 81.6296
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Culture",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Raipur",
      "Naya Raipur",
      "Atal Nagar"
    ],
    "transportInfo": {
      "nearestAirport": "Swami Vivekananda Airport (RPR)",
      "nearestRailway": "Raipur Junction (R)",
      "roadConnectivity": "NH 53 and NH 30"
    },
    "culturalHighlights": [
      "Bell metal craft emporiums",
      "Chhattisgarhi Bafauri snack"
    ],
    "sourceUrl": "https://chhattisgarhtourism.cg.gov.in",
    "attractions": [
      {
        "id": "rai-sirpur",
        "name": "Sirpur Archaeological Site",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Ancient capital of South Kosala featuring 7th-century brick Lakshman Temple.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 21.34,
          "lng": 82.18
        },
        "address": "Raipur, Chhattisgarh",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit early to explore brick temples and viharas"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-rai-1",
        "name": "Gadh Kalava Thali",
        "mealType": "Lunch",
        "cuisine": "Chhattisgarhi",
        "famousFor": "Fara steamed rice dumplings & Chana Bafauri",
        "estimatedCostPerPersonInr": 160,
        "coordinates": {
          "lat": 21.24,
          "lng": 81.63
        }
      }
    ]
  },
  {
    "id": "ranchi",
    "name": "Ranchi",
    "normalizedName": "ranchi",
    "state": "Jharkhand",
    "isUnionTerritory": false,
    "district": "Ranchi",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "City of Waterfalls - Hundru Falls, Jonha & Chotanagpur Plateau Panoramas",
    "description": "Capital city situated on the scenic Chotanagpur Plateau, celebrated for tumbling stepped waterfalls, Tagore Hill, and Dhurwa Dam.",
    "coordinates": {
      "lat": 23.3441,
      "lng": 85.3096
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Waterfalls",
      "Nature",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Ranchi",
      "Ranchi City",
      "City of Waterfalls"
    ],
    "transportInfo": {
      "nearestAirport": "Birsa Munda Airport (IXR) in city",
      "nearestRailway": "Ranchi Junction (RNC) & Hatia (HTE)",
      "roadConnectivity": "NH 20 and NH 43"
    },
    "culturalHighlights": [
      "Tribal terracotta and Sohrai wall murals",
      "Dhuska savory snack with Ghugni",
      "Tagore Hill ashram"
    ],
    "sourceUrl": "https://tourism.jharkhand.gov.in",
    "attractions": [
      {
        "id": "ran-hundru",
        "name": "Hundru Falls on Subarnarekha River",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "River Subarnarekha plunges 320 feet over tiered polished granite rocks into a serene forest gorge.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 23.45,
          "lng": 85.65
        },
        "address": "Ranchi, Jharkhand",
        "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Walk down the 700 steps for dramatic views"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ran-1",
        "name": "Bhojpur Tribal Kitchen",
        "mealType": "Lunch",
        "cuisine": "Jharkhandi Traditional",
        "famousFor": "Crispy Dhuska served with spicy Aloo-Chana and Arsa sweet",
        "estimatedCostPerPersonInr": 120,
        "coordinates": {
          "lat": 23.35,
          "lng": 85.31
        }
      }
    ]
  },
  {
    "id": "rann-of-kutch",
    "name": "Rann of Kutch",
    "normalizedName": "rann of kutch",
    "state": "Gujarat",
    "isUnionTerritory": false,
    "district": "Kutch",
    "category": "Offbeat & Scenic Places",
    "tagline": "The Great White Salt Desert - Full Moon Spectacle, Rann Utsav & Bhuj Textiles",
    "description": "Vast expanse of blinding white salt desert stretching to the horizon, coming alive under moonlight and during the winter Rann Utsav.",
    "coordinates": {
      "lat": 23.8347,
      "lng": 69.8322
    },
    "bestMonths": "November to February",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Culture",
      "Photography",
      "Shopping"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Rann of Kutch",
      "Great Rann",
      "Kutch",
      "Dhordo",
      "White Rann"
    ],
    "transportInfo": {
      "nearestAirport": "Bhuj Airport (BHU) - 80 km",
      "nearestRailway": "Bhuj Railway Station (80 km)",
      "roadConnectivity": "Well-paved highway from Bhuj to Dhordo Tent City"
    },
    "culturalHighlights": [
      "Rann Utsav cultural dance nights",
      "Rogan hand-painting and Rogan art",
      "Kutchi mirror embroidery"
    ],
    "sourceUrl": "https://www.gujarattourism.com",
    "attractions": [
      {
        "id": "rann-white-desert",
        "name": "White Rann Salt Desert Sunset Viewpoint",
        "category": "Nature",
        "timeSlot": "Evening",
        "description": "Witness the boundless white salt crust turn iridescent pink and violet as the sun sinks beneath the horizon.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 23.835,
          "lng": 69.832
        },
        "address": "Rann of Kutch, Gujarat",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit during full moon nights for the surreal glowing salt experience"
        ]
      },
      {
        "id": "rann-kala-dungar",
        "name": "Kala Dungar (Black Hill)",
        "category": "Sightseeing",
        "timeSlot": "Morning",
        "description": "Highest point in Kutch at 458 meters providing panoramic views of the entire White Rann and the historic Dattatreya temple.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 23.928,
          "lng": 69.792
        },
        "address": "Rann of Kutch, Gujarat",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Jackals are fed temple sweet rice every day at noon"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-rann-1",
        "name": "Toran Kutchi Bhojanalaya",
        "mealType": "Lunch",
        "cuisine": "Kutchi Traditional",
        "famousFor": "Bajra No Rotlo with pure white butter, Gor (Jaggery) and Sev Tameta Nu Shaak",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 23.8,
          "lng": 69.82
        }
      }
    ]
  },
  {
    "id": "reiek",
    "name": "Reiek Heritage Village",
    "normalizedName": "reiek heritage village",
    "state": "Mizoram",
    "isUnionTerritory": false,
    "district": "Mamit",
    "category": "Adventure & Trekking",
    "tagline": "Mist-Shrouded Peak & Traditional Mizo Village Heritage",
    "description": "Spectacular mountain peak rising to 1,548 meters offering cliff edge trekking, pristine cloud seas, and a living museum of traditional Mizo thatched huts and chieftain residences.",
    "coordinates": {
      "lat": 23.687,
      "lng": 92.602
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "Trekking",
      "Culture",
      "Nature",
      "Adventure"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Reiek Heritage Village",
      "Reiek Tlang",
      "Reiek Peak"
    ],
    "transportInfo": {
      "nearestAirport": "Lengpui Airport (40 km)",
      "nearestRailway": "Silchar (180 km)",
      "roadConnectivity": "29 km scenic hill road from Aizawl"
    },
    "culturalHighlights": [
      "Anthurium Festival celebrations",
      "Preserved replica of 18th-century Mizo tribal village",
      "Sheer rocky precipices overlooking Bangladesh plains"
    ],
    "sourceUrl": "https://tourism.mizoram.gov.in",
    "attractions": [
      {
        "id": "reiek-peak",
        "name": "Reiek Tlang Summit Trek",
        "category": "Adventure",
        "timeSlot": "Morning",
        "description": "Moderate 45-minute nature trail through sub-tropical forests opening into windswept grassy ridge with breathtaking sheer vertical cliffs.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 23.687,
          "lng": 92.602
        },
        "address": "Reiek Heritage Village, Mizoram",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Wear sturdy trekking shoes; stay cautious near unfenced cliff edges"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-reiek-1",
        "name": "Reiek Tourist Lodge Canteen",
        "mealType": "Lunch",
        "cuisine": "Mizo & Indian",
        "famousFor": "Hot aromatic Mizo chicken stew with mountain leafy greens",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 23.685,
          "lng": 92.605
        }
      }
    ]
  },
  {
    "id": "rishikesh-haridwar",
    "name": "Rishikesh & Haridwar",
    "normalizedName": "rishikesh & haridwar",
    "state": "Uttarakhand",
    "isUnionTerritory": false,
    "district": "Dehradun & Haridwar",
    "category": "Adventure & Trekking",
    "tagline": "Yoga Capital of the World & Har Ki Pauri Ganga Aarti - White Water Rafting",
    "description": "Twin spiritual and adventure epicenters at the Himalayan foothills where the holy River Ganges enters the northern plains, famous for Har Ki Pauri evening Aarti, Ram Jhula suspension bridges, ashram yoga retreats, and thrilling Grade IV white water river rafting.",
    "coordinates": {
      "lat": 30.0869,
      "lng": 78.2676
    },
    "bestMonths": "September to November & February to May (Rafting season)",
    "idealDays": 3,
    "popularInterests": [
      "Adventure",
      "Temples",
      "Yoga",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Rishikesh & Haridwar",
      "Rishikesh",
      "Haridwar",
      "Yoga Capital",
      "Har Ki Pauri",
      "Ram Jhula"
    ],
    "transportInfo": {
      "nearestAirport": "Dehradun Jolly Grant Airport (DED) - 20 km to Rishikesh",
      "nearestRailway": "Yog Nagari Rishikesh (YNRK) & Haridwar Junction (HW)",
      "roadConnectivity": "Delhi-Dehradun Expressway NH 334 (4 hours)"
    },
    "culturalHighlights": [
      "Har Ki Pauri evening Ganga Aarti floating leaf diyas down the swirling river",
      "International Yoga Festival in Parmarth Niketan Ashram",
      "Beatles Ashram (Chaurasi Kutia) graffiti and meditation domes"
    ],
    "sourceUrl": "https://uttarakhandtourism.gov.in",
    "attractions": [
      {
        "id": "rsh-rafting",
        "name": "Shivpuri to Rishikesh White Water River Rafting",
        "category": "Adventure",
        "timeSlot": "Morning",
        "description": "Exhilarating 16-km river rafting expedition navigating famous Grade III & IV rapids including Roller Coaster, Golf Course, and Club House on the turquoise Ganges.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 800,
        "coordinates": {
          "lat": 30.136,
          "lng": 78.388
        },
        "address": "Rishikesh & Haridwar, Uttarakhand",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Always raft with certified river guides and ensure lifejackets and helmets are secured"
        ]
      },
      {
        "id": "hdw-har-ki-pauri",
        "name": "Har Ki Pauri Ghat Evening Ganga Aarti",
        "category": "Temples",
        "timeSlot": "Evening",
        "description": "Venerated sacred riverbank where thousands gather at dusk as bells chime and priests perform Maha Aarti with colossal flaming lamps reflecting in the waters.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 29.957,
          "lng": 78.171
        },
        "address": "Rishikesh & Haridwar, Uttarakhand",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Arrive by 5:00 PM to find peaceful seating on the opposite bank steps"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-rsh-1",
        "name": "Chotiwala Restaurant (Ram Jhula - Est. 1958)",
        "mealType": "Lunch",
        "cuisine": "Pure Satvik North Indian",
        "famousFor": "Satvik Garhwali Thali, piping hot Aloo Puri, and fresh Badam Lassi",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 30.123,
          "lng": 78.315
        }
      }
    ]
  },
  {
    "id": "shillong",
    "name": "Shillong",
    "normalizedName": "shillong",
    "state": "Meghalaya",
    "isUnionTerritory": false,
    "district": "East Khasi Hills",
    "category": "Hill Stations & Mountains",
    "tagline": "Scotland of the East - Pine Hills, Cascading Waterfalls & Indie Rock Music",
    "description": "Charming capital hill station perched at 1,525 meters, celebrated for rolling pine slopes, Umiam Lake, Elephant Falls, cafe culture, and vibrant Khasi indigenous music.",
    "coordinates": {
      "lat": 25.5788,
      "lng": 91.8933
    },
    "bestMonths": "September to May",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Music",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Shillong",
      "Scotland of the East",
      "Umiam"
    ],
    "transportInfo": {
      "nearestAirport": "Shillong Umroi Airport (30 km) / Guwahati Airport (120 km)",
      "nearestRailway": "Guwahati Railway Station (GHY) - 100 km",
      "roadConnectivity": "4-lane expressway NH 6 from Guwahati"
    },
    "culturalHighlights": [
      "Khasi matrilineal traditions",
      "Live indie acoustic music scene",
      "Ward’s Lake colonial gardens & Shillong Peak"
    ],
    "sourceUrl": "https://www.meghalayatourism.in",
    "attractions": [
      {
        "id": "shl-elephant-falls",
        "name": "Elephant Falls",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Spectacular three-tiered waterfall cascading over dark fern-draped rocks, easily accessible through stone pathways.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 30,
        "coordinates": {
          "lat": 25.535,
          "lng": 91.825
        },
        "address": "Shillong, Meghalaya",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit in the morning when morning rays illuminate the third fall mist"
        ]
      },
      {
        "id": "shl-umiam-lake",
        "name": "Umiam Lake (Barapani)",
        "category": "Nature",
        "timeSlot": "Evening",
        "description": "Vast emerald reservoir framed by coniferous forested hills, offering kayaking, speedboating, and picturesque lakeside sunset strolls.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 25.66,
          "lng": 91.89
        },
        "address": "Shillong, Meghalaya",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Great spot for photography and tranquil pine forest walks"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-shl-1",
        "name": "Cafe Shillong",
        "mealType": "Dinner",
        "cuisine": "Khasi & Continental",
        "famousFor": "Smoked Pork with bamboo shoot, roasted chicken steak, and local Meghalaya ginger tea",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 25.575,
          "lng": 91.888
        }
      }
    ]
  },
  {
    "id": "shimla",
    "name": "Shimla",
    "normalizedName": "shimla",
    "state": "Himachal Pradesh",
    "isUnionTerritory": false,
    "district": "Shimla",
    "category": "Hill Stations & Mountains",
    "tagline": "The Queen of Hills - UNESCO Toy Train, The Ridge & Colonial Heritage",
    "description": "Former summer capital of British India perched on seven hills, featuring the neo-Gothic Christ Church, pedestrian Mall Road, and the UNESCO Kalka-Shimla Toy Train.",
    "coordinates": {
      "lat": 31.1048,
      "lng": 77.1734
    },
    "bestMonths": "March to June & November to February",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Nature",
      "Photography",
      "Sightseeing"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Shimla",
      "Simla",
      "Queen of Hills",
      "Mall Road Shimla"
    ],
    "transportInfo": {
      "nearestAirport": "Jubarhatti Airport, Shimla (22 km) / Chandigarh (120 km)",
      "nearestRailway": "Shimla Railway Station (SML) on UNESCO Toy Train line",
      "roadConnectivity": "4-lane Himalayan expressway NH 5 from Chandigarh"
    },
    "culturalHighlights": [
      "UNESCO Mountain Toy Train traversing 102 tunnels",
      "Colonial Gaiety Theatre performances",
      "Himachali Chha Gosht and Madra"
    ],
    "sourceUrl": "https://himachaltourism.gov.in",
    "attractions": [
      {
        "id": "shimla-ridge",
        "name": "The Ridge & Christ Church",
        "category": "Sightseeing",
        "timeSlot": "Morning",
        "description": "Open public esplanade facing snow peaks, anchored by the iconic 1857 stained-glass Christ Church.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 31.105,
          "lng": 77.175
        },
        "address": "Shimla, Himachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Pedestrian-only zone, no motorized traffic permitted"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-shim-1",
        "name": "Baljees & Fascination",
        "mealType": "Lunch",
        "cuisine": "Himachali & North Indian",
        "famousFor": "Authentic Himachali Sepu Vadi, hot Gulab Jamuns and Kurkure Chaat",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 31.103,
          "lng": 77.172
        }
      }
    ]
  },
  {
    "id": "somnath-dwarka",
    "name": "Somnath & Dwarka",
    "normalizedName": "somnath & dwarka",
    "state": "Gujarat",
    "isUnionTerritory": false,
    "district": "Gir Somnath and Devbhumi Dwarka",
    "category": "Religious & Pilgrimage",
    "tagline": "First Jyotirlinga & Kingdom of Lord Krishna - Sacred Coastal Pilgrimage",
    "description": "Ancient pilgrim trail linking Somnath on the roaring Arabian Sea shore with Dwarkadhish Temple, one of the four cardinal Char Dham shrines.",
    "coordinates": {
      "lat": 20.888,
      "lng": 70.401
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "Temples",
      "History",
      "Culture",
      "Beaches"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Somnath & Dwarka",
      "Somnath",
      "Dwarka",
      "Dwarkadhish",
      "Prabhas Patan"
    ],
    "transportInfo": {
      "nearestAirport": "Porbandar Airport (120 km) / Rajkot (190 km)",
      "nearestRailway": "Somnath Station (SMNH) & Dwarka (DWK)",
      "roadConnectivity": "Coastal NH 51"
    },
    "culturalHighlights": [
      "Evening light and sound show at Somnath Sea Temple",
      "Dwarka 52-yard sacred flag changing ceremony (Dhwajarohan)"
    ],
    "sourceUrl": "https://www.gujarattourism.com",
    "attractions": [
      {
        "id": "somnath-temple",
        "name": "Somnath Jyotirlinga Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Magnificent Chalukya-style honey-colored sandstone temple directly kissing the waves of the Arabian Sea.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 20.888,
          "lng": 70.401
        },
        "address": "Somnath & Dwarka, Gujarat",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Attend the evening sound and light show narrated by Amitabh Bachchan"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-som-1",
        "name": "Sagar Darshan Dining Hall",
        "mealType": "Lunch",
        "cuisine": "Gujarati Jain & Vaishnav",
        "famousFor": "Pure vegetarian Gujarati thali with sweet dal and Khichdi Kadhi",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 20.889,
          "lng": 70.402
        }
      }
    ]
  },
  {
    "id": "south-goa",
    "name": "South Goa",
    "normalizedName": "south goa",
    "state": "Goa",
    "isUnionTerritory": false,
    "district": "South Goa",
    "category": "Beaches & Coastal",
    "tagline": "Serene Coastal Paradise - White Sand Shores, Cabo de Rama & Old Goa Churches",
    "description": "Tranquil coastal haven known for pristine crescent beaches like Palolem, the UNESCO World Heritage Basilica of Bom Jesus, and spice plantations.",
    "coordinates": {
      "lat": 15.01,
      "lng": 74.023
    },
    "bestMonths": "October to April",
    "idealDays": 3,
    "popularInterests": [
      "Beaches",
      "History",
      "Nature",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "South Goa",
      "Palolem",
      "Colva",
      "Old Goa",
      "Margao"
    ],
    "transportInfo": {
      "nearestAirport": "Dabolim Airport (GOI) in South Goa",
      "nearestRailway": "Madgaon Junction (MAO)",
      "roadConnectivity": "NH 66"
    },
    "culturalHighlights": [
      "UNESCO Baroque churches of Old Goa",
      "Organic Sahakari spice plantation walks"
    ],
    "sourceUrl": "https://goatourism.gov.in",
    "attractions": [
      {
        "id": "goa-bom-jesus",
        "name": "Basilica of Bom Jesus",
        "category": "History",
        "timeSlot": "Morning",
        "description": "UNESCO World Heritage 16th-century Baroque church holding sacred mortal remains of St. Francis Xavier.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 15.5008,
          "lng": 73.9116
        },
        "address": "South Goa, Goa",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Dress modestly covering knees and shoulders"
        ]
      },
      {
        "id": "goa-palolem",
        "name": "Palolem Crescent Beach",
        "category": "Beaches",
        "timeSlot": "Evening",
        "description": "Crescent-shaped white sand beach backed by leaning coconut palms with gentle waves.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 15.01,
          "lng": 74.023
        },
        "address": "South Goa, Goa",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take a dolphin watching boat ride"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-goa-s1",
        "name": "Fisherman’s Wharf",
        "mealType": "Dinner",
        "cuisine": "Goan Coastal & Seafood",
        "famousFor": "Prawn Balchao, Crab Xacuti and Bebinca",
        "estimatedCostPerPersonInr": 600,
        "coordinates": {
          "lat": 15.15,
          "lng": 73.95
        }
      }
    ]
  },
  {
    "id": "spiti-valley",
    "name": "Spiti Valley",
    "normalizedName": "spiti valley",
    "state": "Himachal Pradesh",
    "isUnionTerritory": false,
    "district": "Lahaul and Spiti",
    "category": "Offbeat & Scenic Places",
    "tagline": "The Middle Land - High-Altitude Cold Desert, Ancient Key Monastery & Chandratal",
    "description": "Surreal Tibetan-border desert valley at 3,800m with 1,000-year-old cliffside monasteries, fossil villages, and sapphire blue Chandratal Lake.",
    "coordinates": {
      "lat": 32.2461,
      "lng": 78.0349
    },
    "bestMonths": "May to October",
    "idealDays": 6,
    "popularInterests": [
      "Adventure",
      "Nature",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Spiti Valley",
      "Spiti",
      "Kaza",
      "Key Monastery",
      "Chandratal"
    ],
    "transportInfo": {
      "nearestAirport": "Bhuntar Airport (245 km) / Shimla (420 km)",
      "nearestRailway": "Shimla / Chandigarh",
      "roadConnectivity": "Accessible via Manali-Atal Tunnel-Kunzum Pass (Summer) or Shimla-Kinnaur route"
    },
    "culturalHighlights": [
      "Key Gompa Buddhist fortress monastery",
      "World’s highest post office at Hikkim (4,400m)",
      "Dark-sky stargazing"
    ],
    "sourceUrl": "https://himachaltourism.gov.in",
    "attractions": [
      {
        "id": "spiti-key",
        "name": "Key Monastery (Kye Gompa)",
        "category": "History",
        "timeSlot": "Morning",
        "description": "11th-century cliff-perched monastery fortress at 4,166m with ancient murals, wind instruments, and monk dormitories.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 32.298,
          "lng": 78.012
        },
        "address": "Spiti Valley, Himachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Drink herbal tea served generously by the resident monks"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-spiti-1",
        "name": "The Himalayan Cafe Kaza",
        "mealType": "Dinner",
        "cuisine": "Spitian & Tibetan",
        "famousFor": "Sea buckthorn tea, Spitian barley pancakes and vegetable Thenthuk",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 32.245,
          "lng": 78.035
        }
      }
    ]
  },
  {
    "id": "srinagar",
    "name": "Srinagar",
    "normalizedName": "srinagar",
    "state": "Jammu and Kashmir",
    "isUnionTerritory": true,
    "district": "Srinagar",
    "category": "Hill Stations & Mountains",
    "tagline": "Paradise on Earth - Dal Lake Shikara, Floating Vegetable Markets & Mughal Gardens",
    "description": "Fabled crown jewel of Kashmir situated along the Jhelum River, renowned for intricately carved cedar wood houseboats on Dal Lake, early morning floating vegetable markets, saffron gardens, and terraced Mughal Gardens (Shalimar & Nishat).",
    "coordinates": {
      "lat": 34.0837,
      "lng": 74.7973
    },
    "bestMonths": "April to October (Tulip Festival in April) / December to February (Snowfall)",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Culture",
      "Photography",
      "Romance",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Srinagar",
      "Dal Lake",
      "Kashmir",
      "Shikara",
      "Mughal Gardens"
    ],
    "transportInfo": {
      "nearestAirport": "Sheikh ul-Alam International Airport, Srinagar (SXR) - 12 km",
      "nearestRailway": "Srinagar Railway Station / Jammu Tawi (260 km) / Vande Bharat to Katra",
      "roadConnectivity": "NH 44 through the Chenani-Nashri and Qazigund twin tunnels"
    },
    "culturalHighlights": [
      "Overnight stay on vintage hand-carved cedar wooden houseboats",
      "Dawn Shikara cruise through Dal Lake floating vegetable market",
      "Pashmina shawl weaving and walnut wood carving in Old Srinagar craft mohallas"
    ],
    "sourceUrl": "https://www.jktourism.jk.gov.in",
    "attractions": [
      {
        "id": "srn-dal-lake",
        "name": "Dal Lake Shikara Cruise & Char Chinar",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Tranquil gondola-style Shikara boat ride gliding past lotus pads, water lilies, floating handicraft shops, and the iconic four Chinar trees island.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 500,
        "coordinates": {
          "lat": 34.09,
          "lng": 74.84
        },
        "address": "Srinagar, Jammu and Kashmir",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take the sunrise cruise (5:30 AM) to experience the historic floating vegetable trade"
        ]
      },
      {
        "id": "srn-mughal-gardens",
        "name": "Nishat Bagh & Shalimar Bagh",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "17th-century terraced pleasure gardens designed by Emperor Jahangir and Asif Khan featuring cascades, carved stone water chutes, and towering centuries-old Chinar trees.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 34.12,
          "lng": 74.88
        },
        "address": "Srinagar, Jammu and Kashmir",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Autumn (Oct-Nov) turns the Chinar leaves into brilliant golden crimson red"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-srn-1",
        "name": "Ahdoos (The Bund - Est. 1918)",
        "mealType": "Dinner",
        "cuisine": "Authentic Kashmiri Wazwan",
        "famousFor": "Royal Wazwan multi-course banquet: Rista (meatballs in saffron gravy), Rogan Josh, Gushtaba, and warm Kahwa tea",
        "estimatedCostPerPersonInr": 600,
        "coordinates": {
          "lat": 34.072,
          "lng": 74.815
        }
      }
    ]
  },
  {
    "id": "statue-of-unity",
    "name": "Statue of Unity",
    "normalizedName": "statue of unity",
    "state": "Gujarat",
    "isUnionTerritory": false,
    "district": "Narmada",
    "category": "Historical Monuments & Heritage",
    "tagline": "World’s Tallest Monument - 182-Meter Iron Man of India on Narmada River",
    "description": "The tallest statue in the world standing at 182 meters, honoring Sardar Vallabhbhai Patel with high-speed viewing galleries overlooking the Sardar Sarovar Dam.",
    "coordinates": {
      "lat": 21.838,
      "lng": 73.7191
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Sightseeing",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Statue of Unity",
      "Kevadia",
      "Ekta Nagar",
      "Sardar Patel Statue"
    ],
    "transportInfo": {
      "nearestAirport": "Vadodara Airport (BDQ) - 90 km",
      "nearestRailway": "Ekta Nagar Railway Station (EKNR) - 5 km",
      "roadConnectivity": "4-lane highway from Vadodara"
    },
    "culturalHighlights": [
      "Narmada Maha Aarti at Gora Ghat",
      "Valley of Flowers and Glow Garden laser show"
    ],
    "sourceUrl": "https://statueofunity.in",
    "attractions": [
      {
        "id": "sou-viewing-gallery",
        "name": "Viewing Gallery at 153 Meters",
        "category": "Sightseeing",
        "timeSlot": "Morning",
        "description": "High-speed elevator ride to the chest of the statue providing panoramic vistas of the Vindhyachal and Satpura ranges and dam.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 380,
        "coordinates": {
          "lat": 21.838,
          "lng": 73.7191
        },
        "address": "Statue of Unity, Gujarat",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Book express entry tickets online to bypass elevator queues"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-sou-1",
        "name": "Ekta Food Court",
        "mealType": "Lunch",
        "cuisine": "Multi-Cuisine Indian",
        "famousFor": "Authentic Gujarati Thali, Punjabi delicacies and street snacks",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 21.835,
          "lng": 73.72
        }
      }
    ]
  },
  {
    "id": "sultanpur-national-park",
    "name": "Sultanpur National Park & Gurgaon",
    "normalizedName": "sultanpur national park & gurgaon",
    "state": "Haryana",
    "isUnionTerritory": false,
    "district": "Gurugram",
    "category": "Wildlife & National Parks",
    "tagline": "Birdwatcher’s Haven & Millennial Cyber City - Migratory Wetlands",
    "description": "Renowned wetland sanctuary hosting over 250 species of winter migratory birds from Siberia and Central Asia, alongside the gleaming skyscrapers of Gurugram.",
    "coordinates": {
      "lat": 28.461,
      "lng": 76.892
    },
    "bestMonths": "November to February",
    "idealDays": 2,
    "popularInterests": [
      "Wildlife",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Sultanpur National Park & Gurgaon",
      "Sultanpur Bird Sanctuary",
      "Gurgaon",
      "Gurugram"
    ],
    "transportInfo": {
      "nearestAirport": "Indira Gandhi International Airport, Delhi (35 km)",
      "nearestRailway": "Gurgaon Railway Station (15 km)",
      "roadConnectivity": "Gurgaon-Farrukhnagar Road"
    },
    "culturalHighlights": [
      "Winter migratory flocks of Siberian cranes, pelicans, and flamingos",
      "Heritage Transport Museum in Taoru"
    ],
    "sourceUrl": "https://haryanatourism.gov.in",
    "attractions": [
      {
        "id": "sultanpur-wetland",
        "name": "Sultanpur Wetland Bird Watching Trail",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Serene walking track punctuated by 4 observation watchtowers providing prime viewing of aquatic bird colonies.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 10,
        "coordinates": {
          "lat": 28.461,
          "lng": 76.892
        },
        "address": "Sultanpur National Park & Gurgaon, Haryana",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Bring binoculars or a telephoto lens for viewing"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-sult-1",
        "name": "Haveli Heritage Dhaba",
        "mealType": "Lunch",
        "cuisine": "Haryanvi & Punjabi",
        "famousFor": "Makki di Roti with Sarson da Saag and white butter",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 28.45,
          "lng": 76.9
        }
      }
    ]
  },
  {
    "id": "sundarbans",
    "name": "Sundarbans National Park",
    "normalizedName": "sundarbans national park",
    "state": "West Bengal",
    "isUnionTerritory": false,
    "district": "South 24 Parganas",
    "category": "Wildlife & National Parks",
    "tagline": "World’s Largest Mangrove Delta - Royal Bengal Tigers & Estuarine Wildlife",
    "description": "UNESCO World Heritage and biosphere reserve spanning the Ganges-Brahmaputra delta, hosting the world’s largest mangrove forest, swimming Royal Bengal Tigers, saltwater crocodiles, and Gangetic river dolphins.",
    "coordinates": {
      "lat": 21.9497,
      "lng": 89.1833
    },
    "bestMonths": "November to March",
    "idealDays": 2,
    "popularInterests": [
      "Wildlife",
      "Adventure",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Sundarbans National Park",
      "Sundarban Tiger Reserve",
      "Sajnekhali"
    ],
    "transportInfo": {
      "nearestAirport": "Kolkata Airport (110 km)",
      "nearestRailway": "Canning Railway Station (48 km)",
      "roadConnectivity": "Drive to Godkhali boat ferry jetty (3 hours from Kolkata)"
    },
    "culturalHighlights": [
      "Boat safaris cruising winding mangrove creeks where tigers swim between islands",
      "Sundari mangrove trees with breath-taking aerial pneumatophore roots",
      "Bonnobibi folk theatre and honey collector folklore"
    ],
    "sourceUrl": "https://www.wbtourism.gov.in",
    "attractions": [
      {
        "id": "sun-boat-safari",
        "name": "Sajnekhali Watchtower & Creek Boat Safari",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Thrilling silent motorized boat cruise navigating mangrove waterways with watchtowers overlooking fresh water ponds frequented by deer, wild boars, and tigers.",
        "visitDurationMinutes": 300,
        "estimatedCostInr": 600,
        "coordinates": {
          "lat": 22.12,
          "lng": 88.83
        },
        "address": "Sundarbans National Park, West Bengal",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Carry binoculars; winter mornings offer prime crocodile sunbathing sightings on mudflats"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-sun-1",
        "name": "Sundarban Jungle Camp Diners",
        "mealType": "Lunch",
        "cuisine": "Rustic Bengali Coastal",
        "famousFor": "Steamed rice, Bhetki fish paturi steamed in banana leaf, prawn malai curry, and wild mangrove honey",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 22.125,
          "lng": 88.835
        }
      }
    ]
  },
  {
    "id": "tawang",
    "name": "Tawang",
    "normalizedName": "tawang",
    "state": "Arunachal Pradesh",
    "isUnionTerritory": false,
    "district": "Tawang",
    "category": "Hill Stations & Mountains",
    "tagline": "Land of Dawn-lit Mountains - Monasteries, Glacial Lakes & Sela Pass",
    "description": "High-altitude Himalayan wonderland at 3,048m housing India’s largest monastery, dramatic Sela Pass, and crystal alpine lakes.",
    "coordinates": {
      "lat": 27.5861,
      "lng": 91.8594
    },
    "bestMonths": "March to June & September to November",
    "idealDays": 4,
    "popularInterests": [
      "Adventure",
      "Culture",
      "Nature",
      "Temples"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Tawang",
      "Tawang Monastery",
      "Monpa Land"
    ],
    "transportInfo": {
      "nearestAirport": "Tezpur Airport (320 km) / Guwahati (440 km)",
      "nearestRailway": "Bhalukpong Station (280 km)",
      "roadConnectivity": "NH 13 via Bomdila & Sela Pass"
    },
    "culturalHighlights": [
      "Monpa tribal customs",
      "Losar and Torgya Tibetan Buddhist festivals",
      "Yak butter tea"
    ],
    "sourceUrl": "https://arunachaltourism.com",
    "attractions": [
      {
        "id": "tawang-monastery",
        "name": "Tawang Monastery",
        "category": "History",
        "timeSlot": "Morning",
        "description": "400-year-old largest Buddhist monastery in India housing ancient manuscripts and an 8-meter gilded Buddha.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 27.5865,
          "lng": 91.858
        },
        "address": "Tawang, Arunachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Spin prayer wheels clockwise"
        ]
      },
      {
        "id": "tawang-sela",
        "name": "Sela Pass & Sela Lake",
        "category": "Nature",
        "timeSlot": "Afternoon",
        "description": "Mountain pass at 4,170m elevation featuring snow-capped peaks and sacred alpine lake.",
        "visitDurationMinutes": 60,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 27.505,
          "lng": 92.103
        },
        "address": "Tawang, Arunachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Dress in thermal layers"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-tawang-1",
        "name": "Dragon Monpa Kitchen",
        "mealType": "Dinner",
        "cuisine": "Tibetan & Monpa",
        "famousFor": "Steaming Thukpa and Yak Cheese Momos",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 27.587,
          "lng": 91.86
        }
      }
    ]
  },
  {
    "id": "tirupati",
    "name": "Tirupati",
    "normalizedName": "tirupati",
    "state": "Andhra Pradesh",
    "isUnionTerritory": false,
    "district": "Tirupati",
    "category": "Religious & Pilgrimage",
    "tagline": "Spiritual Capital of Andhra - Foothills of Seven Sacred Hills",
    "description": "World-famous pilgrimage destination housing the sacred Sri Venkateswara Swamy Temple on Tirumala hills.",
    "coordinates": {
      "lat": 13.6288,
      "lng": 79.4192
    },
    "bestMonths": "September to March",
    "idealDays": 2,
    "popularInterests": [
      "Temples",
      "History",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Tirupati",
      "Tirumala",
      "Venkateswara",
      "Balaji Temple"
    ],
    "transportInfo": {
      "nearestAirport": "Tirupati Airport (TIR)",
      "nearestRailway": "Tirupati Main (TPTY)",
      "roadConnectivity": "NH 71"
    },
    "culturalHighlights": [
      "GI-tagged Tirupati Laddu Prasadam",
      "Kalamkari textiles"
    ],
    "sourceUrl": "https://ttdevasthanams.ap.gov.in",
    "attractions": [
      {
        "id": "tpt-temple",
        "name": "Sri Venkateswara Swamy Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Ancient Dravidian temple atop Tirumala hills revered as Kaliyuga Vaikuntam.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 300,
        "coordinates": {
          "lat": 13.6833,
          "lng": 79.3472
        },
        "address": "Tirupati, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Book darshan tokens online in advance"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-tpt-1",
        "name": "Bhimas Deluxe Diner",
        "mealType": "Lunch",
        "cuisine": "South Indian",
        "famousFor": "Pure Ghee Andhra Meals with Gongura",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 13.63,
          "lng": 79.421
        }
      }
    ]
  },
  {
    "id": "tsomgo-nathula",
    "name": "Tsomgo Lake & Nathu La Pass",
    "normalizedName": "tsomgo lake & nathu la pass",
    "state": "Sikkim",
    "isUnionTerritory": false,
    "district": "East Sikkim",
    "category": "Waterfalls, Lakes & Viewpoints",
    "tagline": "Glacial Holy Lake & Historic Silk Route Indo-China Border at 14,140 Feet",
    "description": "High-altitude wonderland featuring sacred glacial Tsomgo Lake at 12,310 feet, Yak rides, and Nathu La Pass on the historic Old Silk Route along the Indo-China international border.",
    "coordinates": {
      "lat": 27.3742,
      "lng": 88.7629
    },
    "bestMonths": "March to May (Snow/Rhododendrons) & October to November (Crystal clarity)",
    "idealDays": 1,
    "popularInterests": [
      "Adventure",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Tsomgo Lake & Nathu La Pass",
      "Changu Lake",
      "Nathu La",
      "Baba Mandir"
    ],
    "transportInfo": {
      "nearestAirport": "Bagdogra (165 km) / Pakyong (60 km)",
      "nearestRailway": "NJP (160 km)",
      "roadConnectivity": "Jawaharlal Nehru Road from Gangtok (requires Protected Area Permit)"
    },
    "culturalHighlights": [
      "Sacred lake revered by Lamas with waters reflecting changing seasonal hues",
      "Historic Old Silk Route border trade post with Chinese soldiers visible across the wire fence",
      "Baba Harbhajan Singh memorial shrine"
    ],
    "sourceUrl": "https://www.sikkimtourism.gov.in",
    "attractions": [
      {
        "id": "tsomgo-lake",
        "name": "Tsomgo (Changu) Glacial Lake",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Breathtaking 1-km long alpine oval lake fed by melting glaciers, surrounded by jagged snow-covered peaks with decorated shaggy yaks along the banks.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 200,
        "coordinates": {
          "lat": 27.3742,
          "lng": 88.7629
        },
        "address": "Tsomgo Lake & Nathu La Pass, Sikkim",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Apply for Protected Area Permit (PAP) one day in advance via registered tour agency in Gangtok"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-tsm-1",
        "name": "Lake View Yak Canteen",
        "mealType": "Lunch",
        "cuisine": "Mountain Tiffin",
        "famousFor": "Steaming Maggi noodles, hot butter tea, and boiled eggs in high-altitude cold",
        "estimatedCostPerPersonInr": 100,
        "coordinates": {
          "lat": 27.375,
          "lng": 88.763
        }
      }
    ]
  },
  {
    "id": "udaipur",
    "name": "Udaipur",
    "normalizedName": "udaipur",
    "state": "Rajasthan",
    "isUnionTerritory": false,
    "district": "Udaipur",
    "category": "Historical Monuments & Heritage",
    "tagline": "City of Lakes & Venice of the East - Lake Pichola & Majestic City Palace",
    "description": "Enchanting romantic city nestled among the Aravalli Hills, famous for shimmering Lake Pichola, the whitewashed Lake Palace, the towering City Palace complex, and sunset boat cruises.",
    "coordinates": {
      "lat": 24.5854,
      "lng": 73.7125
    },
    "bestMonths": "September to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Architecture",
      "Romance",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Udaipur",
      "City of Lakes",
      "Venice of the East",
      "Lake Pichola"
    ],
    "transportInfo": {
      "nearestAirport": "Maharana Pratap Airport (UDR) - 22 km",
      "nearestRailway": "Udaipur City Railway Station (UDZ)",
      "roadConnectivity": "NH 58 and NH 48"
    },
    "culturalHighlights": [
      "Dharohar folk dance performances at Bagore Ki Haveli",
      "Sunset boat cruise around Jag Mandir island",
      "Miniature Rajput painting ateliers"
    ],
    "sourceUrl": "https://www.tourism.rajasthan.gov.in",
    "attractions": [
      {
        "id": "udr-city-palace",
        "name": "Udaipur City Palace Complex",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Rajasthan’s largest palace complex perched over Lake Pichola, featuring mirror mosaics, marble balconies, peacock courtyards, and royal Mewar museum galleries.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 300,
        "coordinates": {
          "lat": 24.5764,
          "lng": 73.6835
        },
        "address": "Udaipur, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Pair your visit with a boat ride from Rameshwar Ghat to Jag Mandir"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-udr-1",
        "name": "Ambrai Waterfront Restaurant",
        "mealType": "Dinner",
        "cuisine": "Mewari & North Indian",
        "famousFor": "Mewari Laal Maas and butter naan with illuminated night views of City Palace across Lake Pichola",
        "estimatedCostPerPersonInr": 600,
        "coordinates": {
          "lat": 24.579,
          "lng": 73.681
        }
      }
    ]
  },
  {
    "id": "unakoti",
    "name": "Unakoti Heritage Rock Carvings",
    "normalizedName": "unakoti heritage rock carvings",
    "state": "Tripura",
    "isUnionTerritory": false,
    "district": "Unakoti",
    "category": "Historical Monuments & Heritage",
    "tagline": "Angkor Wat of the North East - One Less Than a Crore Rock Sculptures",
    "description": "Mystical ancient Shaivite pilgrimage site hidden in a forested valley, featuring colossal 7th to 9th-century rock-cut bas-relief sculptures of Lord Shiva (Unakotiswara Kal Bhairava) carved directly into hill precipices.",
    "coordinates": {
      "lat": 24.32,
      "lng": 92.03
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Archaeology",
      "Photography",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Unakoti Heritage Rock Carvings",
      "Unakoti Rock Carvings",
      "Kailashahar"
    ],
    "transportInfo": {
      "nearestAirport": "Agartala Airport (178 km)",
      "nearestRailway": "Kumarghat Railway Station (20 km)",
      "roadConnectivity": "Drive from Agartala via NH 8 and NH 208"
    },
    "culturalHighlights": [
      "30-foot tall head of Shiva carved on cliff walls alongside Ganesha and celestial figures",
      "Ashokastami Mela grand tribal gathering",
      "Scenic mountain waterfalls trickling over the carvings"
    ],
    "sourceUrl": "https://tripuratourism.gov.in",
    "attractions": [
      {
        "id": "unk-shiva-carvings",
        "name": "Unakotiswara Kal Bhairava Rock Reliefs",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Colossal stone carvings depicting Shiva with an elaborate headdress, flanked by river goddesses Ganga and Yamuna with a natural mountain stream cascading past.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 24.32,
          "lng": 92.03
        },
        "address": "Unakoti Heritage Rock Carvings, Tripura",
        "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Wear comfortable sneakers to climb stone steps leading up and down the forested gorge"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-unk-1",
        "name": "Kailashahar Heritage Canteen",
        "mealType": "Lunch",
        "cuisine": "Tripuri & Bengali Thali",
        "famousFor": "Fish Kaliya with hot steamed Gobindobhog rice and sweet tomato chutney",
        "estimatedCostPerPersonInr": 180,
        "coordinates": {
          "lat": 24.33,
          "lng": 92.01
        }
      }
    ]
  },
  {
    "id": "varanasi",
    "name": "Varanasi",
    "normalizedName": "varanasi",
    "state": "Uttar Pradesh",
    "isUnionTerritory": false,
    "district": "Varanasi",
    "category": "Religious & Pilgrimage",
    "tagline": "The Spiritual Capital of India - Sacred Ganga Ghats, Kashi Vishwanath & Evening Aarti",
    "description": "One of the world’s oldest continuously inhabited sacred cities, renowned for the 84 stone riverfront ghats along the River Ganga, the golden spire of Kashi Vishwanath Temple, the sublime Dashashwamedh evening Ganga Aarti, and Sarnath where Lord Buddha gave his first sermon.",
    "coordinates": {
      "lat": 25.3176,
      "lng": 82.9739
    },
    "bestMonths": "October to March (Dev Deepawali in Nov is magical)",
    "idealDays": 3,
    "popularInterests": [
      "Temples",
      "History",
      "Culture",
      "Photography",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Varanasi",
      "Kashi",
      "Benares",
      "Banaras",
      "Dashashwamedh Ghat"
    ],
    "transportInfo": {
      "nearestAirport": "Lal Bahadur Shastri International Airport (VNS) in Babatpur - 26 km",
      "nearestRailway": "Varanasi Junction (BSB) & Pt. Deen Dayal Upadhyaya Junction (DDU)",
      "roadConnectivity": "Grand Trunk Road NH 19"
    },
    "culturalHighlights": [
      "Dashashwamedh Ghat daily grand sunset Ganga Aarti with rhythmic brass lamps",
      "Subah-e-Banaras sunrise wooden boat ride watching morning ablutions and sun salutations",
      "Banarasi silk handloom weaving in ancient weavers’ mohallas"
    ],
    "sourceUrl": "https://www.uptourism.gov.in",
    "attractions": [
      {
        "id": "vns-kashi-vishwanath",
        "name": "Kashi Vishwanath Corridor & Golden Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Revered Jyotirlinga shrine of Lord Shiva recently expanded into a grand marble corridor connecting directly to the holy ghats of the Ganges.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 25.3109,
          "lng": 83.0107
        },
        "address": "Varanasi, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Deposit phones and leather items in designated locker counters before entering"
        ]
      },
      {
        "id": "vns-ganga-aarti",
        "name": "Dashashwamedh Ghat Evening Ganga Aarti",
        "category": "History",
        "timeSlot": "Evening",
        "description": "Hypnotic synchronized ritual performed by saffron-clad priests swinging tiered brass fire lamps accompanied by conch shells, bells, and Vedic chants.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 25.306,
          "lng": 83.01
        },
        "address": "Varanasi, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Hire a wooden rowboat on the river by 5:30 PM for a spectacular floating view of the aarti"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-vns-1",
        "name": "Kashi Chaat Bhandar (Godowlia)",
        "mealType": "Dinner",
        "cuisine": "Banarasi Street Food",
        "famousFor": "Famous Tamatar Chaat (hot spiced tomato mash served in earthen kulhads), Palak Chaat, and Gulab Jamun",
        "estimatedCostPerPersonInr": 100,
        "coordinates": {
          "lat": 25.308,
          "lng": 83.007
        }
      },
      {
        "id": "m-vns-2",
        "name": "Blue Lassi Shop (Manikarnika Ghat Lane)",
        "mealType": "Snacks",
        "cuisine": "Banarasi Lassi & Dairy",
        "famousFor": "Thick creamy hand-churned Malai Lassi topped with fresh pomegranate, rabri, and dry fruits",
        "estimatedCostPerPersonInr": 80,
        "coordinates": {
          "lat": 25.3115,
          "lng": 83.013
        }
      }
    ]
  },
  {
    "id": "visakhapatnam",
    "name": "Visakhapatnam",
    "normalizedName": "visakhapatnam",
    "state": "Andhra Pradesh",
    "isUnionTerritory": false,
    "district": "Visakhapatnam",
    "category": "Beaches & Coastal",
    "tagline": "The Jewel of the East Coast - Eastern Ghats meeting Bay of Bengal",
    "description": "Vibrant coastal metropolis offering golden beaches, INS Kursura submarine museum, Kailasagiri hilltop, and scenic marine drives.",
    "coordinates": {
      "lat": 17.6868,
      "lng": 83.2185
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "Beaches",
      "History",
      "Food",
      "Sightseeing"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Visakhapatnam",
      "Vizag",
      "Waltair",
      "City of Destiny"
    ],
    "transportInfo": {
      "nearestAirport": "Visakhapatnam International Airport (VTZ)",
      "nearestRailway": "Visakhapatnam Junction (VSKP)",
      "roadConnectivity": "Golden Quadrilateral NH 16"
    },
    "culturalHighlights": [
      "Andhra seafood coastal delicacies",
      "Naval command traditions",
      "Buddhist heritage"
    ],
    "sourceUrl": "https://tourism.ap.gov.in",
    "attractions": [
      {
        "id": "vskp-kursura",
        "name": "INS Kursura Submarine Museum",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Preserved Soviet-built submarine on RK Beach offering guided tours of the engine room.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 70,
        "coordinates": {
          "lat": 17.7164,
          "lng": 83.3332
        },
        "address": "Visakhapatnam, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Visit early to avoid ticketing queues"
        ]
      },
      {
        "id": "vskp-kailasagiri",
        "name": "Kailasagiri Hilltop Park",
        "category": "Sightseeing",
        "timeSlot": "Evening",
        "description": "Hilltop park reached via passenger ropeway with sweeping panoramic coastal views.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 17.7491,
          "lng": 83.3424
        },
        "address": "Visakhapatnam, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Take the scenic cable car ropeway up"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-vskp-1",
        "name": "Sea Inn (Raju Gaari Dhaba)",
        "mealType": "Lunch",
        "cuisine": "Andhra Coastal",
        "famousFor": "Spicy Royyala Vepudu (Prawn Fry) & Crab Roast",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 17.784,
          "lng": 83.386
        }
      }
    ]
  },
  {
    "id": "warangal",
    "name": "Warangal",
    "normalizedName": "warangal",
    "state": "Telangana",
    "isUnionTerritory": false,
    "district": "Hanamkonda & Warangal",
    "category": "Historical Monuments & Heritage",
    "tagline": "Capital of Kakatiya Dynasty - Thousand Pillar Temple & UNESCO Ramappa Temple",
    "description": "Ancient capital of the Kakatiya rulers, famous for the monolithic stone entrance gates (Kakatiya Thoranam), the 12th-century Thousand Pillar Temple, Warangal Fort, and the UNESCO World Heritage Ramappa Temple engineered with floating bricks.",
    "coordinates": {
      "lat": 17.9689,
      "lng": 79.5941
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Warangal",
      "Orugallu",
      "Hanamkonda",
      "Ramappa"
    ],
    "transportInfo": {
      "nearestAirport": "Hyderabad International Airport (160 km)",
      "nearestRailway": "Warangal Railway Station (WL) / Kazipet Junction (KZJ)",
      "roadConnectivity": "4-lane National Highway NH 163 from Hyderabad (3 hours)"
    },
    "culturalHighlights": [
      "UNESCO Ramappa Temple built with lightweight floating terracotta bricks and mirror-polished basalt carvings",
      "Kakatiya Kala Thoranam arch emblem of Telangana state",
      "Bhadrakali temple lake"
    ],
    "sourceUrl": "https://tourism.telangana.gov.in",
    "attractions": [
      {
        "id": "wgl-thousand-pillar",
        "name": "Thousand Pillar Temple (Rudreshwara Swamy)",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "12th-century star-shaped Kakatiya masterpiece with intricately carved monolithic granite pillars, dedicated to Shiva, Vishnu, and Surya.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 17.998,
          "lng": 79.575
        },
        "address": "Warangal, Telangana",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": false,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Admire the 6-foot monolithic black basalt Nandi bull facing the shrine"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-wgl-1",
        "name": "Kakatiya Heritage Thali Restaurant",
        "mealType": "Lunch",
        "cuisine": "Telangana Spicy Specialities",
        "famousFor": "Sarva Pindi (spicy rice flour pancake), Jowar Roti, and Bagara Rice with Gongura Mutton",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 17.99,
          "lng": 79.58
        }
      }
    ]
  },
  {
    "id": "wayanad",
    "name": "Wayanad",
    "normalizedName": "wayanad",
    "state": "Kerala",
    "isUnionTerritory": false,
    "district": "Wayanad",
    "category": "Adventure & Trekking",
    "tagline": "Green Paradise - Prehistoric Edakkal Caves, Chembra Peak & Waterfalls",
    "description": "Pristine highland district nestled in the Western Ghats, famed for Neolithic petroglyphs at Edakkal Caves, tea estates, and Banasura Sagar earthen dam.",
    "coordinates": {
      "lat": 11.6854,
      "lng": 76.132
    },
    "bestMonths": "October to May",
    "idealDays": 3,
    "popularInterests": [
      "Adventure",
      "Nature",
      "History"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Wayanad",
      "Wayanad Hills",
      "Kalpetta",
      "Sulthan Bathery"
    ],
    "transportInfo": {
      "nearestAirport": "Calicut International Airport, Kozhikode (CCJ) - 85 km",
      "nearestRailway": "Kozhikode Railway Station (CLT) - 75 km",
      "roadConnectivity": "Thamarassery Churam Ghat road NH 766"
    },
    "culturalHighlights": [
      "Edakkal Caves Stone Age rock carvings",
      "Chembra heart-shaped mountain lake trek"
    ],
    "sourceUrl": "https://keralatourism.org",
    "attractions": [
      {
        "id": "way-edakkal",
        "name": "Edakkal Caves Neolithic Petroglyphs",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Natural split-rock cave shelter containing pictorial stone carvings dating back to 6000 BCE.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 11.628,
          "lng": 76.234
        },
        "address": "Wayanad, Kerala",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Steep climb of 300 steps requires good walking shoes"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-way-1",
        "name": "1980’s A Nostalgic Restaurant",
        "mealType": "Lunch",
        "cuisine": "Kerala Traditional",
        "famousFor": "Grand Kerala Meals with bamboo chicken and fish fry",
        "estimatedCostPerPersonInr": 280,
        "coordinates": {
          "lat": 11.605,
          "lng": 76.082
        }
      }
    ]
  },
  {
    "id": "ziro-valley",
    "name": "Ziro Valley",
    "normalizedName": "ziro valley",
    "state": "Arunachal Pradesh",
    "isUnionTerritory": false,
    "district": "Lower Subansiri",
    "category": "Cultural & Local Experiences",
    "tagline": "UNESCO World Heritage Nominee - Apatani Pine Groves & Music Festival",
    "description": "Charming plateau encircled by pine-clad hills, celebrated for the unique agrarian lifestyle of the Apatani tribe and the outdoor Ziro Festival of Music.",
    "coordinates": {
      "lat": 27.595,
      "lng": 93.8385
    },
    "bestMonths": "March to October",
    "idealDays": 3,
    "popularInterests": [
      "Culture",
      "Nature",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Ziro Valley",
      "Ziro",
      "Apatani Valley"
    ],
    "transportInfo": {
      "nearestAirport": "Hollongi Airport, Itanagar (125 km)",
      "nearestRailway": "Naharlagun (100 km)",
      "roadConnectivity": "Mountain road from Itanagar"
    },
    "culturalHighlights": [
      "Apatani sustainable fish-paddy farming",
      "Ziro Music Festival"
    ],
    "sourceUrl": "https://arunachaltourism.com",
    "attractions": [
      {
        "id": "ziro-village",
        "name": "Hong & Hari Apatani Villages",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Authentic bamboo stilt villages known for ancient agricultural co-cultivation.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 27.59,
          "lng": 93.842
        },
        "address": "Ziro Valley, Arunachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "isOutdoor": true,
        "weatherBackup": "Explore local indoor museums, craft centers, or covered markets during severe rain.",
        "tips": [
          "Hire a local guide to learn customs"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ziro-1",
        "name": "Apatani Heritage Diner",
        "mealType": "Lunch",
        "cuisine": "Tribal Arunachal",
        "famousFor": "Bamboo-smoked pork with organic red sticky rice",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 27.594,
          "lng": 93.839
        }
      }
    ]
  },
  {
    "id": "jodhpur",
    "name": "Jodhpur & Mehrangarh Fort",
    "normalizedName": "jodhpur & mehrangarh fort",
    "state": "Rajasthan",
    "isUnionTerritory": false,
    "district": "Jodhpur",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Blue City - Colossal Mehrangarh Fort towering over indigo painted streets",
    "description": "Famed for its imposing hilltop Mehrangarh Fort, ornate Jaswant Thada cenotaphs, majestic Umaid Bhawan Palace, and iconic blue-washed Brahmin houses in the old walled city.",
    "coordinates": {
      "lat": 26.2978,
      "lng": 73.0185
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "History",
      "Architecture",
      "Photography",
      "Culture",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1575881875475-31024b156660?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Jodhpur",
      "Blue City",
      "Mehrangarh",
      "Sun City",
      "Marwar Capital"
    ],
    "transportInfo": {
      "nearestAirport": "Jodhpur Airport (JDH) - 5 km",
      "nearestRailway": "Jodhpur Junction (JU)",
      "roadConnectivity": "Connected via NH 62 and NH 112"
    },
    "culturalHighlights": [
      "Mehrangarh Fort museum housing royal palanquins and howdahs",
      "Jaswant Thada milky white marble memorial by Lake Devkund",
      "Clock Tower (Ghanta Ghar) and vibrant Sardar Market spice lanes"
    ],
    "sourceUrl": "https://www.tourism.rajasthan.gov.in",
    "attractions": [
      {
        "id": "jod-mehrangarh",
        "name": "Mehrangarh Fort & Museum",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Formidable 15th-century cliff citadel rising 400 feet above Jodhpur, featuring Sheesh Mahal, Phool Mahal, and expansive battlements with panoramic city views.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 200,
        "coordinates": {
          "lat": 26.2978,
          "lng": 73.0185
        },
        "address": "The Fort, Jodhpur, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1575881875475-31024b156660?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Audio guides are exceptional and included in international tickets"
        ]
      },
      {
        "id": "jod-jaswant-thada",
        "name": "Jaswant Thada Royal Cenotaphs",
        "category": "Heritage",
        "timeSlot": "Afternoon",
        "description": "Intricately carved translucent marble cenotaph built in 1899 by Maharaja Sardar Singh with serene lakeside gardens.",
        "visitDurationMinutes": 60,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 26.3015,
          "lng": 73.0235
        },
        "address": "Lawaran, Jodhpur, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Visit in late afternoon for golden hour light filtering through marble"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-jod-1",
        "name": "Janta Sweet Home & Gypsy Thali",
        "mealType": "Lunch",
        "cuisine": "Marwari Traditional",
        "famousFor": "Pyaaz Kachori, Mawa Kachori, Mirchi Bada, and 29-dish Rajasthani royal thali",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 26.287,
          "lng": 73.02
        }
      }
    ]
  },
  {
    "id": "pushkar",
    "name": "Pushkar Holy Lake & Brahma Temple",
    "normalizedName": "pushkar holy lake & brahma temple",
    "state": "Rajasthan",
    "isUnionTerritory": false,
    "district": "Ajmer",
    "category": "Pilgrimage & Spiritual",
    "tagline": "Sacred Lotus Lake - Rare Brahma Temple, 52 holy ghats, and camel desert culture",
    "description": "A tranquil sacred pilgrimage oasis encircling the holy Pushkar Lake, revered as one of the oldest existing cities in India with the rare 14th-century Jagatpita Brahma Temple and colorful desert bazaars.",
    "coordinates": {
      "lat": 26.4897,
      "lng": 74.5511
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Temples",
      "Culture",
      "Photography",
      "Desert"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Pushkar",
      "Pushkar Lake",
      "Brahma Temple Pushkar",
      "Pushkar Camel Fair"
    ],
    "transportInfo": {
      "nearestAirport": "Kishangarh Airport (KQH) - 45 km",
      "nearestRailway": "Ajmer Junction (AII) - 14 km",
      "roadConnectivity": "Scenic mountain pass connects Pushkar to Ajmer"
    },
    "culturalHighlights": [
      "Jagatpita Brahma Mandir, one of very few temples dedicated to Creator Brahma",
      "Evening Maha Aarti ceremony along the sacred Pushkar Lake ghats",
      "Annual Kartik Purnima Pushkar Camel Fair drawing nomadic traders"
    ],
    "sourceUrl": "https://www.tourism.rajasthan.gov.in",
    "attractions": [
      {
        "id": "psk-brahma-temple",
        "name": "Jagatpita Brahma Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Historic 14th-century temple crowned by a striking red spire (shikhara) and motif of the hamsa swan, housing the four-faced icon of Lord Brahma.",
        "visitDurationMinutes": 60,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 26.4885,
          "lng": 74.5504
        },
        "address": "Brahma Temple Rd, Pushkar, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Dress modestly and leave footwear at designated cloakrooms outside"
        ]
      },
      {
        "id": "psk-lake-ghats",
        "name": "Pushkar Holy Lake & Varaha Ghat",
        "category": "Culture",
        "timeSlot": "Evening",
        "description": "Serene semi-circular sacred lake fringed by 52 bathing ghats and over 500 whitewashed temples where bells and Vedic chants resonate at dusk.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 26.4897,
          "lng": 74.5511
        },
        "address": "Varaha Ghat, Pushkar, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Respect pilgrims bathing; photography should be discreet"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-psk-1",
        "name": "Halwai Gali Sweet Center & Falafel Cafe",
        "mealType": "Lunch",
        "cuisine": "Pure Vegetarian Rajasthani",
        "famousFor": "Rabdi Malpua, fresh Gulkand lassi, and wood-fired pita falafel",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 26.489,
          "lng": 74.552
        }
      }
    ]
  },
  {
    "id": "mount-abu",
    "name": "Mount Abu & Dilwara Jain Temples",
    "normalizedName": "mount abu & dilwara jain temples",
    "state": "Rajasthan",
    "isUnionTerritory": false,
    "district": "Sirohi",
    "category": "Hill Stations & Nature",
    "tagline": "Oasis in the Aravallis - Breathtaking marble Dilwara temples and scenic Nakki Lake",
    "description": "The sole hill station of Rajasthan set amidst lush coniferous forests in the ancient Aravalli Range, celebrated worldwide for the peerless 11th to 13th-century Dilwara marble temples.",
    "coordinates": {
      "lat": 24.5926,
      "lng": 72.7156
    },
    "bestMonths": "October to June",
    "idealDays": 2,
    "popularInterests": [
      "Nature",
      "Temples",
      "Architecture",
      "Viewpoints"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Mt Abu",
      "Dilwara",
      "Nakki Lake",
      "Guru Shikhar",
      "Abu Road"
    ],
    "transportInfo": {
      "nearestAirport": "Udaipur Maharana Pratap Airport (UDR) - 185 km",
      "nearestRailway": "Abu Road Railway Station (ABR) - 28 km",
      "roadConnectivity": "Ghat road ascent from Abu Road via NH 27"
    },
    "culturalHighlights": [
      "Dilwara Jain Temples featuring filigree marble ceilings resembling fine lace",
      "Nakki Lake boating and Toad Rock climbing viewpoint",
      "Guru Shikhar summit at 1,722m, highest peak in the Aravalli Range"
    ],
    "sourceUrl": "https://www.tourism.rajasthan.gov.in",
    "attractions": [
      {
        "id": "abu-dilwara",
        "name": "Dilwara Jain Temples",
        "category": "Architecture",
        "timeSlot": "Morning",
        "description": "Five marble temples constructed between the 11th and 13th centuries displaying unsurpassed, paper-thin marble carving of lotus pendants and mythological figures.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 24.6095,
          "lng": 72.7226
        },
        "address": "Delwara, Mount Abu, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Open for tourists from 12 noon; strictly no cameras or mobile phones inside"
        ]
      },
      {
        "id": "abu-nakki-lake",
        "name": "Nakki Lake & Sunset Point",
        "category": "Nature",
        "timeSlot": "Evening",
        "description": "Picturesque hill lake legendarily scooped out by gods with their fingernails (nakh), flanked by granite rock formations like Toad Rock.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 24.594,
          "lng": 72.705
        },
        "address": "Nakki Lake Promenade, Mount Abu, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Pedal boats and shikara-style boat rides available till dusk"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-abu-1",
        "name": "Chacha Cafe & Arbuda Restaurant",
        "mealType": "Dinner",
        "cuisine": "Gujarati & Rajasthani",
        "famousFor": "Kathiyawadi Sev Tameta, Dal Baati Churma, and fresh fruit sundaes",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 24.595,
          "lng": 72.708
        }
      }
    ]
  },
  {
    "id": "ranthambore",
    "name": "Ranthambore National Park",
    "normalizedName": "ranthambore national park",
    "state": "Rajasthan",
    "isUnionTerritory": false,
    "district": "Sawai Madhopur",
    "category": "Wildlife & National Parks",
    "tagline": "Royal Tiger Realm - Bengal tiger safari against ancient ruined fortresses",
    "description": "One of India's most celebrated tiger reserves, where royal Bengal tigers roam freely amidst deciduous forests, picturesque lakes, and the towering 10th-century Ranthambore UNESCO Fort.",
    "coordinates": {
      "lat": 26.0173,
      "lng": 76.5026
    },
    "bestMonths": "October to June",
    "idealDays": 3,
    "popularInterests": [
      "Wildlife",
      "Adventure",
      "Photography",
      "History"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Ranthambhore",
      "Ranthambore Tiger Reserve",
      "Sawai Madhopur",
      "Tiger Safari Rajasthan"
    ],
    "transportInfo": {
      "nearestAirport": "Jaipur International Airport (JAI) - 160 km",
      "nearestRailway": "Sawai Madhopur Junction (SWM) - 11 km",
      "roadConnectivity": "Delhi-Mumbai Expressway connects nearby"
    },
    "culturalHighlights": [
      "Open Gypsy & Canter jungle safaris across Zones 1 to 10",
      "Ranthambore UNESCO World Heritage hilltop fort and Trinetra Ganesha Temple",
      "Padam Talao lake reflecting the historic Jogi Mahal pavilion"
    ],
    "sourceUrl": "https://www.tourism.rajasthan.gov.in",
    "attractions": [
      {
        "id": "ran-safari",
        "name": "Ranthambore Tiger Safari (Zones 1-5)",
        "category": "Wildlife",
        "timeSlot": "Morning",
        "description": "Thrilling 3.5-hour wildlife safari inside Project Tiger reserve known for high diurnal tiger sightings, leopards, sloth bears, and marsh crocodiles.",
        "visitDurationMinutes": 210,
        "estimatedCostInr": 1200,
        "coordinates": {
          "lat": 26.0173,
          "lng": 76.5026
        },
        "address": "Sawai Madhopur, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Book safaris 90 days in advance via Rajasthan Forest Department portal"
        ]
      },
      {
        "id": "ran-fort",
        "name": "Ranthambore Fort & Trinetra Ganesha Temple",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Massive 10th-century Chauhan fort perched on a high plateau offering panoramic vistas of the national park forests and lakes.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 26.0204,
          "lng": 76.4526
        },
        "address": "Ranthambore Fort, Sawai Madhopur, Rajasthan",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Beware of langur monkeys near the temple entrance"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ran-1",
        "name": "Dawat Heritage Canteen & The Oberoi Vanyavilas Lounge",
        "mealType": "Dinner",
        "cuisine": "Rajasthani Jungle Specialty",
        "famousFor": "Laal Maas (fiery red mutton curry), Ker Sangri, and Bajra Roti with white butter",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 26.03,
          "lng": 76.48
        }
      }
    ]
  },
  {
    "id": "ayodhya",
    "name": "Ayodhya & Ram Janmabhoomi",
    "normalizedName": "ayodhya & ram janmabhoomi",
    "state": "Uttar Pradesh",
    "isUnionTerritory": false,
    "district": "Ayodhya",
    "category": "Pilgrimage & Spiritual",
    "tagline": "Sacred Capital of Kosala - Grand Ram Mandir, Hanuman Garhi, and Saryu River Ghats",
    "description": "One of Hinduism's seven sacred Moksha puris, situated along the tranquil Saryu River. Known for the grand newly consecrated Nagara-style Shri Ram Janmabhoomi Mandir, ancient Hanuman Garhi fortress, and historic Kanak Bhawan.",
    "coordinates": {
      "lat": 26.7922,
      "lng": 82.1998
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Temples",
      "Culture",
      "History",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Ayodhya",
      "Saket",
      "Ram Janmabhoomi",
      "Faizabad",
      "Hanuman Garhi",
      "Saryu Ghats"
    ],
    "transportInfo": {
      "nearestAirport": "Maharishi Valmiki International Airport, Ayodhya (AYJ) - 8 km",
      "nearestRailway": "Ayodhya Dham Junction (AY) and Ayodhya Cantt (AYC)",
      "roadConnectivity": "Direct 4-lane expressway from Lucknow and Gorakhpur"
    },
    "culturalHighlights": [
      "Shri Ram Janmabhoomi Mandir carved from pink Bansi Paharpur sandstone",
      "Hanuman Garhi 10th-century fortress temple reachable by 76 steep steps",
      "Evening Saryu River Aarti at Ram Ki Paidi illuminated by grand laser shows"
    ],
    "sourceUrl": "https://uptourism.gov.in",
    "attractions": [
      {
        "id": "ayo-ram-mandir",
        "name": "Shri Ram Janmabhoomi Mandir",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Monumental traditional Nagara architectural temple complex spanning 70 acres, housing the sacred idol of Ram Lalla carved in Krishna Shila stone.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 26.7922,
          "lng": 82.1998
        },
        "address": "Ram Janmabhoomi Complex, Ayodhya, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Electronic devices and leather items must be deposited at security counters"
        ]
      },
      {
        "id": "ayo-hanuman-garhi",
        "name": "Hanuman Garhi & Kanak Bhawan",
        "category": "Heritage",
        "timeSlot": "Afternoon",
        "description": "Fortress temple dedicated to Lord Hanuman who is traditionally believed to guard Ayodhya, followed by the palace temple of Kanak Bhawan.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 26.7956,
          "lng": 82.2045
        },
        "address": "Hanuman Garhi, Ayodhya, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Try the famous Besan Laddu prasad made with pure desi ghee"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ayo-1",
        "name": "Makhan Malai & Sita Rasoi Thali",
        "mealType": "Lunch",
        "cuisine": "Awadhi Pure Vegetarian",
        "famousFor": "Ayodhya Peda, Khurchan, Baati Chokha, and authentic sattvic feast",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 26.794,
          "lng": 82.201
        }
      }
    ]
  },
  {
    "id": "prayagraj",
    "name": "Prayagraj & Triveni Sangam",
    "normalizedName": "prayagraj & triveni sangam",
    "state": "Uttar Pradesh",
    "isUnionTerritory": false,
    "district": "Prayagraj",
    "category": "Pilgrimage & Spiritual",
    "tagline": "The King of Pilgrimages - Confluence of Ganga, Yamuna & mystical Saraswati",
    "description": "Ancient holy city of Prayagraj (formerly Allahabad), host of the world-famous Maha Kumbh Mela at the sacred Triveni Sangam, featuring the Mughal Allahabad Fort, Anand Bhavan, and grand colonial architecture.",
    "coordinates": {
      "lat": 25.4358,
      "lng": 81.8463
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Culture",
      "History",
      "Photography",
      "Temples"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Allahabad",
      "Triveni Sangam",
      "Prayag",
      "Kumbh Mela",
      "Anand Bhavan"
    ],
    "transportInfo": {
      "nearestAirport": "Prayagraj Airport (IXD) - 12 km",
      "nearestRailway": "Prayagraj Junction (PRYJ)",
      "roadConnectivity": "National Highways connect Varanasi, Lucknow, and Kanpur"
    },
    "culturalHighlights": [
      "Boat ride to Triveni Sangam to witness color demarcation between Ganga and Yamuna",
      "Anand Bhavan historic ancestral home of the Nehru-Gandhi family",
      "Akshayavat immortal banyan tree and underground Patalpuri temple inside Allahabad Fort"
    ],
    "sourceUrl": "https://uptourism.gov.in",
    "attractions": [
      {
        "id": "pry-sangam",
        "name": "Triveni Sangam Confluence",
        "category": "Culture",
        "timeSlot": "Morning",
        "description": "Sacred confluence where the pale green waters of the Yamuna merge with the clearer waters of the Ganges and the invisible Vedic river Saraswati.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 150,
        "coordinates": {
          "lat": 25.4262,
          "lng": 81.8845
        },
        "address": "Triveni Sangam Ghats, Prayagraj, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Negotiate boat fares at the official boatman counters on the ghats"
        ]
      },
      {
        "id": "pry-anand-bhavan",
        "name": "Anand Bhavan Memorial Museum",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Historic two-story mansion that served as the nerve center of the Indian freedom struggle, preserving personal artifacts and letters of national leaders.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 70,
        "coordinates": {
          "lat": 25.4587,
          "lng": 81.8598
        },
        "address": "Tagore Town, Prayagraj, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Includes Jawahar Planetarium adjacent to the mansion grounds"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-pry-1",
        "name": "Loknath Chaat Bazaar & Netram Sweets",
        "mealType": "Dinner",
        "cuisine": "Purvanchal & Awadhi",
        "famousFor": "Dahi Jalebi, Puri Sabzi with pumpkin pickle, and Tamatar Chaat",
        "estimatedCostPerPersonInr": 180,
        "coordinates": {
          "lat": 25.441,
          "lng": 81.848
        }
      }
    ]
  },
  {
    "id": "mathura-vrindavan",
    "name": "Mathura & Vrindavan",
    "normalizedName": "mathura & vrindavan",
    "state": "Uttar Pradesh",
    "isUnionTerritory": false,
    "district": "Mathura",
    "category": "Pilgrimage & Spiritual",
    "tagline": "The Land of Krishna - Ancient Janmabhoomi, Banke Bihari, and Yamuna Ghats",
    "description": "The sacred birthplace and playground of Lord Krishna along the sacred Yamuna River, famed for the historic Krishna Janmasthan Temple complex, Banke Bihari Mandir, and vibrant Holi celebrations.",
    "coordinates": {
      "lat": 27.4924,
      "lng": 77.6737
    },
    "bestMonths": "September to March",
    "idealDays": 2,
    "popularInterests": [
      "Temples",
      "Culture",
      "Photography",
      "History"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Mathura",
      "Vrindavan",
      "Braj",
      "Vrindaban",
      "Krishna Janmabhoomi",
      "Banke Bihari",
      "Govardhan",
      "Barsana"
    ],
    "transportInfo": {
      "nearestAirport": "Kheria Airport Agra (AGR) - 60 km",
      "nearestRailway": "Mathura Junction (MTJ) - major rail junction",
      "roadConnectivity": "Yamuna Expressway connects Delhi in 2.5 hours"
    },
    "culturalHighlights": [
      "Shri Krishna Janmasthan Temple built over the underground prison cell",
      "Banke Bihari Temple where darshan is given through oscillating curtains",
      "Prem Mandir illuminated at night with colored fountains and dioramas"
    ],
    "sourceUrl": "https://uptourism.gov.in",
    "attractions": [
      {
        "id": "mth-janmabhoomi",
        "name": "Shri Krishna Janmasthan Temple Complex",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Holy temple enclave containing the Garbha Griha (birth chamber cave), Keshavdeva Temple, and Bhagavata Bhavan.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 27.505,
          "lng": 77.669
        },
        "address": "Deeg Gate, Mathura, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Strict security check; all cameras and electronics prohibited inside"
        ]
      },
      {
        "id": "vrn-banke-bihari",
        "name": "Banke Bihari Temple & Prem Mandir",
        "category": "Culture",
        "timeSlot": "Evening",
        "description": "Vibrant Vrindavan temple dedicated to Banke Bihari (Krishna in Tribhanga posture), followed by the pristine Italian white marble Prem Mandir.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 27.5815,
          "lng": 77.702
        },
        "address": "Godhas, Vrindavan, Uttar Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Beware of playful monkeys around Banke Bihari temple lanes"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mth-1",
        "name": "Brijwasi Mithai Wala & Govinda's",
        "mealType": "Lunch",
        "cuisine": "Braj Sattvic Sweets",
        "famousFor": "Mathura Peda with caramel aroma, Bedmi Puri with spicy aloo, and Kulhad Rabdi",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 27.498,
          "lng": 77.674
        }
      }
    ]
  },
  {
    "id": "kanha-national-park",
    "name": "Kanha National Park",
    "normalizedName": "kanha national park",
    "state": "Madhya Pradesh",
    "isUnionTerritory": false,
    "district": "Mandla",
    "category": "Wildlife & National Parks",
    "tagline": "The Real Jungle Book - Lush Sal forests, Royal Bengal Tigers & swamp deer (Barasingha)",
    "description": "Rudyard Kipling's inspiration for The Jungle Book, Kanha is one of Asia's finest protected reserves featuring expansive open meadows, dense bamboo thickets, hardground barasingha, and apex royal Bengal tigers.",
    "coordinates": {
      "lat": 22.3345,
      "lng": 80.6115
    },
    "bestMonths": "October to June",
    "idealDays": 3,
    "popularInterests": [
      "Wildlife",
      "Photography",
      "Adventure",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kanha Tiger Reserve",
      "Kisli",
      "Mukki",
      "Khatia",
      "Jungle Book forest"
    ],
    "transportInfo": {
      "nearestAirport": "Jabalpur Dumna Airport (JLR) - 160 km",
      "nearestRailway": "Gondia Junction (G) - 145 km / Jabalpur (JBP)",
      "roadConnectivity": "Well paved forest corridors from Jabalpur and Nagpur"
    },
    "culturalHighlights": [
      "Open-top 4x4 Gypsy jungle safaris in Kanha, Kisli, Mukki, and Sarhi zones",
      "Bamni Dadar (Sunset Point) overlooking grazing herds of Indian gaur and barasingha",
      "Kanha Museum educating visitors on Baiga tribal folklore and wildlife conservation"
    ],
    "sourceUrl": "https://www.mptourism.com",
    "attractions": [
      {
        "id": "kan-safari",
        "name": "Kanha Core Zone Morning Safari",
        "category": "Wildlife",
        "timeSlot": "Morning",
        "description": "Early morning expedition through misty sal forest tracks tracking tiger pugmarks, leopards, dholes (wild dogs), and the rare southern barasingha.",
        "visitDurationMinutes": 240,
        "estimatedCostInr": 1500,
        "coordinates": {
          "lat": 22.3345,
          "lng": 80.6115
        },
        "address": "Kanha Tiger Reserve, Mandla, Madhya Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Dress in earthy neutral colors (greens/khakis); morning safaris get very chilly"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kan-1",
        "name": "Singinawa Jungle Lodge & Baiga Kitchen",
        "mealType": "Dinner",
        "cuisine": "Central Indian Tribal",
        "famousFor": "Bhutte Ka Kees, Desi Murgi Curry, and Mahua flower dessert",
        "estimatedCostPerPersonInr": 400,
        "coordinates": {
          "lat": 22.32,
          "lng": 80.6
        }
      }
    ]
  },
  {
    "id": "gwalior",
    "name": "Gwalior & Scindia Palace",
    "normalizedName": "gwalior & scindia palace",
    "state": "Madhya Pradesh",
    "isUnionTerritory": false,
    "district": "Gwalior",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Pearl in the Necklace of Forts - Hilltop citadel, Saas Bahu Temples & Jai Vilas Palace",
    "description": "Historic princely seat of central India dominated by the dramatic 8th-century sandstone Gwalior Fort described by Mughal Emperor Babur as 'the pearl among forts', the crystal-adorned Jai Vilas Palace, and the mausoleum of music maestro Tansen.",
    "coordinates": {
      "lat": 26.2298,
      "lng": 78.1734
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Music",
      "Palaces"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Gwalior",
      "Gwalior Fort",
      "Tansen Tomb",
      "Jai Vilas Palace",
      "Scindia Fort"
    ],
    "transportInfo": {
      "nearestAirport": "Gwalior Rajmata Vijaya Raje Scindia Airport (GWL) - 10 km",
      "nearestRailway": "Gwalior Junction (GWL) on Delhi-Chennai trunk line",
      "roadConnectivity": "Connected via North-South Corridor NH 44"
    },
    "culturalHighlights": [
      "Man Mandir Palace with bright blue and yellow glazed ceramic tile friezes",
      "Jai Vilas Palace Durbar Hall housing the world's largest pair of chandeliers",
      "Annual Tansen Music Festival celebrated near Tansen's tomb in December"
    ],
    "sourceUrl": "https://www.mptourism.com",
    "attractions": [
      {
        "id": "gwl-fort",
        "name": "Gwalior Fort (Man Mandir & Gujari Mahal)",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Stupendous 3 km-long fortress crowning an isolated sandstone hill, housing Man Mandir, Karan Palace, and monolithic rock-cut Jain tirthankara colossi.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 75,
        "coordinates": {
          "lat": 26.2307,
          "lng": 78.1695
        },
        "address": "Gwalior Fort Plateau, Gwalior, Madhya Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Sound and Light show in evening brings fort legends to life"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-gwl-1",
        "name": "SS Kachori Wala & Kwality Restaurant",
        "mealType": "Breakfast",
        "cuisine": "Gwaliori Sweets & Snacks",
        "famousFor": "Bedai with spicy Aloo Sabzi, Moong Dal Kachori, and sweet Gwalior Gajak",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 26.218,
          "lng": 78.175
        }
      }
    ]
  },
  {
    "id": "orchha",
    "name": "Orchha Heritage Palaces & Chhatris",
    "normalizedName": "orchha heritage palaces & chhatris",
    "state": "Madhya Pradesh",
    "isUnionTerritory": false,
    "district": "Niwari",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Hidden Gem of Bundelkhand - Jahangir Mahal, Ram Raja Temple & Betwa River Cenotaphs",
    "description": "Atmospheric 16th-century capital of the Bundela Rajput kings situated on a tranquil rocky island along the pristine Betwa River. Renowned for multi-tiered spires, Jahangir Mahal, Raja Mahal frescoes, and the revered Ram Raja Temple where Rama is worshipped as king.",
    "coordinates": {
      "lat": 25.3516,
      "lng": 78.6416
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Photography",
      "Rivers"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Orcha",
      "Ram Raja Temple",
      "Jahangir Mahal",
      "Betwa River Cenotaphs",
      "Bundelkhand Heritage"
    ],
    "transportInfo": {
      "nearestAirport": "Gwalior Airport (GWL) - 120 km",
      "nearestRailway": "Jhansi Junction (VGLB) - 16 km",
      "roadConnectivity": "Short scenic drive from Jhansi along the Betwa River"
    },
    "culturalHighlights": [
      "Jahangir Mahal, a grand fusion of Rajput and Mughal architecture built for Emperor Jahangir",
      "14 riverside cenotaphs (Chhatris) glowing under sunrise along Kanchana Ghat",
      "Ram Raja Temple where police offer a daily guard of honor to Lord Rama"
    ],
    "sourceUrl": "https://www.mptourism.com",
    "attractions": [
      {
        "id": "orc-palaces",
        "name": "Jahangir Mahal & Raja Mahal Complex",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Monumental quadrangular palace complex with ornamental gateways, domed pavilions, hanging balconies, and vibrant Bundela court paintings.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 25.3516,
          "lng": 78.6416
        },
        "address": "Orchha Fort Complex, Orchha, Madhya Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Climb to upper ramparts for stunning panoramas of the Betwa river basin"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-orc-1",
        "name": "Betwa Tarang & Ramraja Bhojanalaya",
        "mealType": "Lunch",
        "cuisine": "Bundelkhandi Special",
        "famousFor": "Bafauri, Kadhi Chawal, and freshly pressed sugarcane juice",
        "estimatedCostPerPersonInr": 180,
        "coordinates": {
          "lat": 25.35,
          "lng": 78.64
        }
      }
    ]
  },
  {
    "id": "pachmarhi",
    "name": "Pachmarhi Queen of Satpura",
    "normalizedName": "pachmarhi queen of satpura",
    "state": "Madhya Pradesh",
    "isUnionTerritory": false,
    "district": "Narmadapuram",
    "category": "Hill Stations & Nature",
    "tagline": "The Queen of Satpura - Cascading Bee Falls, Pandav Caves & Dhoopgarh Sunset",
    "description": "Madhya Pradesh's only hill station nestled 1,067m high in the Satpura Biosphere Reserve, renowned for prehistoric rock shelters, perennial waterfalls, canyon gorges, and Dhoopgarh—the highest point in central India.",
    "coordinates": {
      "lat": 22.4674,
      "lng": 78.4346
    },
    "bestMonths": "October to June",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Waterfalls",
      "Trekking",
      "History"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Queen of Satpura",
      "Bee Falls",
      "Dhoopgarh",
      "Jata Shankar",
      "Satpura Hill Station"
    ],
    "transportInfo": {
      "nearestAirport": "Bhopal Raja Bhoj Airport (BHO) - 200 km",
      "nearestRailway": "Pipariya Railway Station (PPI) - 47 km",
      "roadConnectivity": "Scenic hill road winding through Satpura Tiger Reserve"
    },
    "culturalHighlights": [
      "Dhoopgarh peak (1,352m) offering breathtaking sunrise and sunset across Satpura ravines",
      "Bee Falls (Jamuna Prapat) dramatic 35m plunge pool in deep sal forest",
      "Jata Shankar naturally formed stalactite cave shrine resembling Lord Shiva's matted hair"
    ],
    "sourceUrl": "https://www.mptourism.com",
    "attractions": [
      {
        "id": "pac-bee-falls",
        "name": "Bee Falls (Jamuna Prapat)",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Spectacular perennial waterfall tumbling into a forested ravine where travelers can swim in clean crystal pool waters.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 60,
        "coordinates": {
          "lat": 22.471,
          "lng": 78.418
        },
        "address": "Pachmarhi Forest, Madhya Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Requires descending about 400 steps; wear comfortable walking shoes"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-pac-1",
        "name": "Chunmun Dhaba & Satpura Retreat Cafe",
        "mealType": "Dinner",
        "cuisine": "Central Indian Homestyle",
        "famousFor": "Dal Bafla with churma, Poha Jalebi, and forest honey",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 22.465,
          "lng": 78.43
        }
      }
    ]
  },
  {
    "id": "mahabaleshwar",
    "name": "Mahabaleshwar & Panchgani",
    "normalizedName": "mahabaleshwar & panchgani",
    "state": "Maharashtra",
    "isUnionTerritory": false,
    "district": "Satara",
    "category": "Hill Stations & Nature",
    "tagline": "Strawberry Capital of the Western Ghats - Arthur Seat, Venna Lake & Table Land",
    "description": "Spectacular plateau resort in the UNESCO-recognized Western Ghats producing over 85% of India's strawberries, famed for sheer cliff viewpoints like Arthur's Seat, Venna Lake boating, and the ancient source temple of River Krishna.",
    "coordinates": {
      "lat": 17.9237,
      "lng": 73.6586
    },
    "bestMonths": "September to May",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Viewpoints",
      "Food",
      "Boating"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Mahabaleshwar",
      "Panchgani",
      "Venna Lake",
      "Arthur Seat",
      "Table Land",
      "Strawberry Capital"
    ],
    "transportInfo": {
      "nearestAirport": "Pune International Airport (PNQ) - 120 km",
      "nearestRailway": "Satara (STR) - 55 km / Pune Junction (PUNE) - 115 km",
      "roadConnectivity": "Connected from Mumbai (230 km) and Pune via Wai ghat road"
    },
    "culturalHighlights": [
      "Fresh strawberry picking tours and Mapro Garden farm kitchen",
      "Arthur's Seat clifftop viewpoint overlooking the sheer Savitri river valley",
      "Panchgani Table Land, Asia's second-longest volcanic mountain plateau"
    ],
    "sourceUrl": "https://www.maharashtratourism.gov.in",
    "attractions": [
      {
        "id": "mhb-arthur-seat",
        "name": "Arthur's Seat & Window Point",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Dramatic clifftop standing 1,340 meters high where geological stratifications of the Konkan coast and Deccan plateau are uniquely visible.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 17.985,
          "lng": 73.615
        },
        "address": "Arthur Seat Road, Mahabaleshwar, Maharashtra",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Light objects thrown off the cliff float back up due to high air pressure"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mhb-1",
        "name": "Mapro Garden Cafe & Bagicha Corner",
        "mealType": "Lunch",
        "cuisine": "Farm Fresh Specialties",
        "famousFor": "Fresh Strawberries with thick clotted cream, wood-fired pizza, and Makai Pattice",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 17.93,
          "lng": 73.68
        }
      }
    ]
  },
  {
    "id": "shirdi",
    "name": "Shirdi Sai Baba Temple",
    "normalizedName": "shirdi sai baba temple",
    "state": "Maharashtra",
    "isUnionTerritory": false,
    "district": "Ahmednagar",
    "category": "Pilgrimage & Spiritual",
    "tagline": "Sacred Shrine of Compassion - Samadhi Mandir, Dwarkamai & Gurusthan",
    "description": "One of the most revered spiritual destinations in India where 19th-century saint Sai Baba spent his life preaching universal love and self-realization, centered around the sanctified Samadhi Mandir and historic Dwarkamai mosque.",
    "coordinates": {
      "lat": 19.7667,
      "lng": 74.4764
    },
    "bestMonths": "All year around",
    "idealDays": 2,
    "popularInterests": [
      "Pilgrimage",
      "Culture",
      "Spiritual"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Shirdi",
      "Shirdi Sai Baba",
      "Sai Nagar",
      "Samadhi Mandir",
      "Dwarkamai"
    ],
    "transportInfo": {
      "nearestAirport": "Shirdi International Airport (SAG) - 14 km",
      "nearestRailway": "Sainagar Shirdi Railway Station (SNSI)",
      "roadConnectivity": "Samruddhi Mahamarg expressway connects Mumbai in 4 hours"
    },
    "culturalHighlights": [
      "Samadhi Mandir housing the pure Italian white marble statue of Sai Baba",
      "Dwarkamai mosque where the eternal sacred flame (Dhuni) burns continuously",
      "Mega Prasadalaya serving wholesome sattvic meals to over 40,000 pilgrims daily"
    ],
    "sourceUrl": "https://www.maharashtratourism.gov.in",
    "attractions": [
      {
        "id": "shd-mandir",
        "name": "Shri Sai Baba Samadhi Mandir & Dwarkamai",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "The primary shrine holding the mortal remains and marble murti of Sai Baba, flanked by the neem tree at Gurusthan and Chavadi procession hall.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 19.7667,
          "lng": 74.4764
        },
        "address": "Sai Nagar, Shirdi, Maharashtra",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Book online VIP darshan passes via Shri Saibaba Sansthan Trust portal to save queue time"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-shd-1",
        "name": "Shri Sai Prasadalaya & Rajdhani Thali",
        "mealType": "Lunch",
        "cuisine": "Pure Sattvic Maharashtrian",
        "famousFor": "Sansthan Maha Prasad Thali, Puran Poli, and hot sweet Guava halwa",
        "estimatedCostPerPersonInr": 100,
        "coordinates": {
          "lat": 19.765,
          "lng": 74.475
        }
      }
    ]
  },
  {
    "id": "nashik",
    "name": "Nashik & Trimbakeshwar",
    "normalizedName": "nashik & trimbakeshwar",
    "state": "Maharashtra",
    "isUnionTerritory": false,
    "district": "Nashik",
    "category": "Pilgrimage & Spiritual",
    "tagline": "Wine Capital & Holy Godavari - Trimbakeshwar Jyotirlinga, Panchavati & Sula Vineyards",
    "description": "Unique fusion of profound spiritual heritage and modern viticulture along the holy Godavari river. Home to one of the 12 sacred Jyotirlingas at Trimbakeshwar, historic Ramayana sites at Panchavati, and India's finest vineyards.",
    "coordinates": {
      "lat": 19.9975,
      "lng": 73.7898
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "Temples",
      "Culture",
      "Wine Tours",
      "History"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Nasik",
      "Trimbak",
      "Trimbakeshwar",
      "Wine Capital of India",
      "Panchavati",
      "Godavari Ghats"
    ],
    "transportInfo": {
      "nearestAirport": "Nashik Ozar Airport (ISK) - 20 km / Mumbai (BOM) - 165 km",
      "nearestRailway": "Nashik Road Railway Station (NK)",
      "roadConnectivity": "NH 160 connects Mumbai in 3.5 hours through Kasara Ghat"
    },
    "culturalHighlights": [
      "Trimbakeshwar Shiva Jyotirlinga temple built in classic black basalt Hemadpanthi style",
      "Panchavati Ramkund sacred bathing ghat where Lord Rama spent his exile",
      "Vineyard tasting and grape stomping tours at Sula and York wineries"
    ],
    "sourceUrl": "https://www.maharashtratourism.gov.in",
    "attractions": [
      {
        "id": "nsk-trimbak",
        "name": "Trimbakeshwar Jyotirlinga Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Ancient stone temple located at the foot of Brahmagiri Mountain, originating point of River Godavari, housing the unique three-faced lingam.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 19.9328,
          "lng": 73.5307
        },
        "address": "Trimbak, Nashik, Maharashtra",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Traditional dhoti/kurta attire recommended for inner sanctum entry"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-nsk-1",
        "name": "Sadhana Chulivarchi Misal & Sula Cafe",
        "mealType": "Lunch",
        "cuisine": "Maharashtrian Khandeshi",
        "famousFor": "Wood-fired spicy Misal Pav with Jalebi, and locally produced artisanal cheeses",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 19.98,
          "lng": 73.76
        }
      }
    ]
  },
  {
    "id": "alibaug",
    "name": "Alibaug Coastal Forts & Beaches",
    "normalizedName": "alibaug coastal forts & beaches",
    "state": "Maharashtra",
    "isUnionTerritory": false,
    "district": "Raigad",
    "category": "Beaches & Coastal",
    "tagline": "The Coastal Getaway of Mumbai - Sea-bound Kolaba Fort, Kashid Beach & Konkani seafood",
    "description": "Picturesque coastal town on the Konkan coast accessible via scenic catamaran ferry from the Gateway of India. Celebrated for 17th-century sea forts built by Chhatrapati Shivaji Maharaj, golden sand beaches, and fresh Malvani seafood.",
    "coordinates": {
      "lat": 18.6414,
      "lng": 72.8722
    },
    "bestMonths": "October to May",
    "idealDays": 2,
    "popularInterests": [
      "Beaches",
      "History",
      "Food",
      "Water Sports"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Alibag",
      "Kolaba Fort",
      "Kashid Beach",
      "Nagaon Beach",
      "Varsoli Beach",
      "Mandwa Ferry"
    ],
    "transportInfo": {
      "nearestAirport": "Chhatrapati Shivaji Maharaj International Airport Mumbai (BOM) - 100 km",
      "nearestRailway": "Roha Railway Station (ROHA) - 40 km / Panvel (PNVL)",
      "roadConnectivity": "Ro-Ro car ferry and speedboats connect Mandwa to Mumbai in 50 minutes"
    },
    "culturalHighlights": [
      "Kolaba Sea Fort reachable on foot during low tide and by horse-drawn cart",
      "Kashid Beach renowned for white sand shores, surfing, and casuarina groves",
      "Murud-Janjira impenetrable island marine fortress with 26 bastions"
    ],
    "sourceUrl": "https://www.maharashtratourism.gov.in",
    "attractions": [
      {
        "id": "abg-kolaba",
        "name": "Kolaba Sea Fort",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Sturdy maritime fortress constructed in 1680 amidst Arabian Sea waves, featuring freshwater temple tanks, canons, and ancient battlements.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 18.6444,
          "lng": 72.8631
        },
        "address": "Arabian Sea, Alibaug, Maharashtra",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Check local tide charts before visiting; safe to walk only during low tide"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-abg-1",
        "name": "Sanman Restaurant & Hotel Suruchi",
        "mealType": "Lunch",
        "cuisine": "Konkani Coastal Seafood",
        "famousFor": "Surmai Fry, Pomfret Thali, Crab Masala with freshly steamed rice bhakri",
        "estimatedCostPerPersonInr": 400,
        "coordinates": {
          "lat": 18.642,
          "lng": 72.871
        }
      }
    ]
  },
  {
    "id": "chikmagalur",
    "name": "Chikmagalur Coffee Hills",
    "normalizedName": "chikmagalur coffee hills",
    "state": "Karnataka",
    "isUnionTerritory": false,
    "district": "Chikkamagaluru",
    "category": "Hill Stations & Nature",
    "tagline": "The Birthplace of Indian Coffee - Mullayanagiri peak, Baba Budangiri & coffee estates",
    "description": "Serene hill destination in the Malnad region of the Western Ghats where Sufi saint Baba Budan first planted coffee seeds smuggled from Yemen in 1670. Crowned by Mullayanagiri (1,930m), the highest mountain peak in Karnataka.",
    "coordinates": {
      "lat": 13.3161,
      "lng": 75.772
    },
    "bestMonths": "September to May",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Trekking",
      "Coffee",
      "Waterfalls"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Chikkamagaluru",
      "Mullayanagiri",
      "Baba Budangiri",
      "Coffee Capital",
      "Kemmangundi"
    ],
    "transportInfo": {
      "nearestAirport": "Mangaluru International Airport (IXE) - 150 km",
      "nearestRailway": "Kadur Railway Station (DRU) - 40 km",
      "roadConnectivity": "Smooth 4-lane highway from Bengaluru (245 km)"
    },
    "culturalHighlights": [
      "Mullayanagiri summit trek offering 360-degree views of mist-clad Western Ghats",
      "Coffee plantation estate walks, bean harvesting, and artisanal filter coffee tasting",
      "Hebbe and Jhari (Buttermilk) cascading jungle waterfalls reachable by 4x4 jeeps"
    ],
    "sourceUrl": "https://karnatakatourism.org",
    "attractions": [
      {
        "id": "ckm-mullayanagiri",
        "name": "Mullayanagiri Peak Summit",
        "category": "Adventure",
        "timeSlot": "Morning",
        "description": "Highest peak in Karnataka at 1,930 meters offering exhilarating ridge walks, a hilltop Shiva temple, and dramatic sea of clouds views.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 13.3916,
          "lng": 75.7214
        },
        "address": "Mullayanagiri Peak, Chikkamagaluru, Karnataka",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Arrive by 6:30 AM to witness the sun rising above the cloud blanket"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ckm-1",
        "name": "Town Canteen & Siri Coffee Cafe",
        "mealType": "Breakfast",
        "cuisine": "Malnad Karnataka",
        "famousFor": "Benne Dosa with coconut chutney, Akki Roti, and freshly brewed Malnad Filter Coffee",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 13.32,
          "lng": 75.77
        }
      }
    ]
  },
  {
    "id": "badami-pattadakal",
    "name": "Badami & Pattadakal UNESCO Caves",
    "normalizedName": "badami & pattadakal unesco caves",
    "state": "Karnataka",
    "isUnionTerritory": false,
    "district": "Bagalkot",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Cradle of Temple Architecture - Chalukyan red sandstone caves & Pattadakal monuments",
    "description": "Ancient 6th-century royal capital of the Early Chalukyas set around the green waters of Agastya Lake, world-renowned for four monolithic rock-cut cave temples cut into red sandstone cliffs and the nearby UNESCO World Heritage monuments at Pattadakal.",
    "coordinates": {
      "lat": 15.9189,
      "lng": 75.6766
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Photography",
      "Archaeology"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Badami",
      "Badami Caves",
      "Pattadakal UNESCO",
      "Aihole",
      "Chalukya Heritage",
      "Vatapi"
    ],
    "transportInfo": {
      "nearestAirport": "Hubballi Airport (HBX) - 105 km",
      "nearestRailway": "Badami Railway Station (BDM)",
      "roadConnectivity": "Well connected via state highways from Hampi (140 km) and Hubli"
    },
    "culturalHighlights": [
      "Four Badami Cave Temples displaying Nataraja with 81 dancing postures",
      "Pattadakal UNESCO complex exhibiting northern Nagara and southern Dravida temple styles side by side",
      "Bhuthanatha Group of Temples reflected in the quiet waters of Agastya Lake"
    ],
    "sourceUrl": "https://karnatakatourism.org",
    "attractions": [
      {
        "id": "bdm-caves",
        "name": "Badami Rock-Cut Cave Temples",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Four magnificent 6th-century rock-cut sanctuaries carved into sandstone cliffs dedicated to Shiva, Vishnu, and Jain tirthankaras.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 15.9189,
          "lng": 75.6766
        },
        "address": "Badami Cave Complex, Bagalkot, Karnataka",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Beware of monkeys; climb early before sandstone absorbs noon heat"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-bdm-1",
        "name": "Banashankari Khanavali & Heritage Diner",
        "mealType": "Lunch",
        "cuisine": "North Karnataka Lingayat Thali",
        "famousFor": "Jolada Roti (Sorghum flatbread) with Yennegai stuffed brinjal and Shenga Chutney powder",
        "estimatedCostPerPersonInr": 120,
        "coordinates": {
          "lat": 15.92,
          "lng": 75.68
        }
      }
    ]
  },
  {
    "id": "udupi-murudeshwar",
    "name": "Udupi & Murudeshwar",
    "normalizedName": "udupi & murudeshwar",
    "state": "Karnataka",
    "isUnionTerritory": false,
    "district": "Udupi",
    "category": "Pilgrimage & Spiritual",
    "tagline": "Coastal Divinity - Sri Krishna Matha, St. Mary's volcanic islands & giant Murudeshwar Shiva",
    "description": "Iconic coastal Karnataka destination famous for the 13th-century Sri Krishna Matha where Lord Krishna is viewed through a silver nine-hole window (Kanakana Kindi), volcanic hexagonal basalt rock columns of St. Mary's Island, and the world's second-tallest Shiva statue rising over Murudeshwar beach.",
    "coordinates": {
      "lat": 13.3409,
      "lng": 74.7421
    },
    "bestMonths": "October to April",
    "idealDays": 3,
    "popularInterests": [
      "Temples",
      "Beaches",
      "Food",
      "Architecture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Udupi",
      "Murudeshwar",
      "Udupi Sri Krishna",
      "Murudeshwar Shiva Statue",
      "Malpe Beach",
      "St Marys Island"
    ],
    "transportInfo": {
      "nearestAirport": "Mangaluru International Airport (IXE) - 55 km",
      "nearestRailway": "Udupi Railway Station (UD) on Konkan Railway",
      "roadConnectivity": "Scenic NH 66 Coastal Highway connects Goa and Mangaluru"
    },
    "culturalHighlights": [
      "Sri Krishna Temple founded by sage Madhvacharya and daily Anna Daan feast",
      "Murudeshwar 123-foot Shiva statue overlooking Arabian Sea and 20-story Raja Gopura lift",
      "Malpe Beach boat ride to St. Mary's Island geological wonder"
    ],
    "sourceUrl": "https://karnatakatourism.org",
    "attractions": [
      {
        "id": "udp-krishna-temple",
        "name": "Sri Krishna Matha & Temple Square",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Historic temple where devotees take darshan through Kanakana Kindi window, surrounded by eight traditional Ashta Mathas.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 13.3409,
          "lng": 74.7421
        },
        "address": "Car Street, Udupi, Karnataka",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Men must remove shirts to enter the sanctum; free temple lunch (Maha Prasada) served at noon"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-udp-1",
        "name": "Mitra Samaj & Woodlands Udupi",
        "mealType": "Breakfast",
        "cuisine": "Authentic Udupi Brahmin",
        "famousFor": "Original Masala Dosa, Goli Baje (Mangalore Bajji), and Podi Idli with filter coffee",
        "estimatedCostPerPersonInr": 120,
        "coordinates": {
          "lat": 13.342,
          "lng": 74.745
        }
      }
    ]
  },
  {
    "id": "varkala",
    "name": "Varkala Cliff & Papanasam Beach",
    "normalizedName": "varkala cliff & papanasam beach",
    "state": "Kerala",
    "isUnionTerritory": false,
    "district": "Thiruvananthapuram",
    "category": "Beaches & Coastal",
    "tagline": "The Bohemian Red Cliffs of Kerala - Sunset cliff walk, natural mineral springs & surf",
    "description": "Picturesque coastal gem in southern Kerala where towering tertiary red sedimentary cliffs drop dramatically into the Arabian Sea. Renowned for Papanasam beach (believed to cleanse sins), cliff-edge artisan cafes, yoga retreats, and pristine surfing waves.",
    "coordinates": {
      "lat": 8.7379,
      "lng": 76.7163
    },
    "bestMonths": "October to March",
    "idealDays": 3,
    "popularInterests": [
      "Beaches",
      "Surfing",
      "Yoga",
      "Sunsets",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Varkala",
      "Varkala Cliff",
      "Papanasam Beach",
      "Janardhana Swamy",
      "North Cliff Varkala"
    ],
    "transportInfo": {
      "nearestAirport": "Trivandrum International Airport (TRV) - 45 km",
      "nearestRailway": "Varkala Sivagiri Railway Station (VAK) - 3 km",
      "roadConnectivity": "Connected via NH 66 corridor"
    },
    "culturalHighlights": [
      "Varkala North Cliff promenade buzzing with rooftop seafood grills and craft shops",
      "2,000-year-old Janardhana Swamy Temple dedicated to Lord Vishnu",
      "Natural freshwater mineral springs bubbling directly along the coastline"
    ],
    "sourceUrl": "https://www.keralatourism.org",
    "attractions": [
      {
        "id": "vrk-cliff",
        "name": "Varkala North Cliff & Papanasam Beach",
        "category": "Beaches",
        "timeSlot": "Evening",
        "description": "Stunning geological red laterite cliff overlooking white sand beaches where visitors watch dramatic Arabian Sea sunsets and practice coastal yoga.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 8.7379,
          "lng": 76.7163
        },
        "address": "North Cliff, Varkala, Kerala",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Steps lead down the cliff face directly to the beach; take care during high tide"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-vrk-1",
        "name": "Cafe del Mar & Darjeeling Cafe Varkala",
        "mealType": "Dinner",
        "cuisine": "Kerala Coastal & Mediterranean",
        "famousFor": "Grilled catch of the day in banana leaf with Malabar spices and fresh tender coconut juice",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 8.74,
          "lng": 76.715
        }
      }
    ]
  },
  {
    "id": "thekkady",
    "name": "Thekkady & Periyar Tiger Reserve",
    "normalizedName": "thekkady & periyar tiger reserve",
    "state": "Kerala",
    "isUnionTerritory": false,
    "district": "Idukki",
    "category": "Wildlife & National Parks",
    "tagline": "The Spice Sanctuary - Periyar lake boat safari, wild elephant herds & cardamom hills",
    "description": "One of India's most pristine biodiversity hotspots located in the Cardamom Hills of Kerala, centered around artificial Periyar Lake where wild elephants, sambar deer, and gaurs can be observed directly from quiet motorboat safaris.",
    "coordinates": {
      "lat": 9.6031,
      "lng": 77.1615
    },
    "bestMonths": "September to April",
    "idealDays": 2,
    "popularInterests": [
      "Wildlife",
      "Spices",
      "Nature",
      "Boating",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Thekkady",
      "Periyar National Park",
      "Kumily",
      "Periyar Lake Boat Safari",
      "Spice Plantations Kerala"
    ],
    "transportInfo": {
      "nearestAirport": "Madurai Airport (IXM) - 140 km / Cochin (COK) - 150 km",
      "nearestRailway": "Kottayam Railway Station (KTYM) - 105 km",
      "roadConnectivity": "Scenic ghat highway through tea and rubber plantations"
    },
    "culturalHighlights": [
      "Periyar Lake boat cruise along the submerged forest tree trunks",
      "Aromatic spice garden plantation walks discovering green cardamom, black pepper, and cinnamon",
      "Evening Kalaripayattu martial arts and Kathakali cultural performances in Kumily"
    ],
    "sourceUrl": "https://www.keralatourism.org",
    "attractions": [
      {
        "id": "tkd-periyar-lake",
        "name": "Periyar Lake Wildlife Boat Safari",
        "category": "Wildlife",
        "timeSlot": "Morning",
        "description": "Peaceful 90-minute boat cruise inside the sanctuary waters observing elephants bathing and birdlife nesting in submerged trees.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 255,
        "coordinates": {
          "lat": 9.6031,
          "lng": 77.1615
        },
        "address": "Periyar National Park, Thekkady, Kerala",
        "imageUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Book the earliest 7:30 AM boat slot online via Kerala Forest Department for best animal sightings"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-tkd-1",
        "name": "Ebonys Cafe & Spice Garden Kitchen",
        "mealType": "Dinner",
        "cuisine": "Kerala Syrian Christian",
        "famousFor": "Duck Roast, Kerala Beef fry with Malabar Porotta, and Cardamom tea",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 9.608,
          "lng": 77.165
        }
      }
    ]
  },
  {
    "id": "kovalam",
    "name": "Kovalam Lighthouse Beach",
    "normalizedName": "kovalam lighthouse beach",
    "state": "Kerala",
    "isUnionTerritory": false,
    "district": "Thiruvananthapuram",
    "category": "Beaches & Coastal",
    "tagline": "The Crescent Coast - Striped red-white lighthouse, calm reef lagoons & Ayurvedic healing",
    "description": "Internationally acclaimed beach destination comprising three adjacent crescent beaches separated by rocky outcroppings, renowned for the 35m Vizhinjam Lighthouse, shallow swimming waters, and authentic Ayurvedic rejuvenation centers.",
    "coordinates": {
      "lat": 8.4004,
      "lng": 76.9787
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Beaches",
      "Ayurveda",
      "Sunsets",
      "Water Sports"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kovalam",
      "Kovalam Beach",
      "Lighthouse Beach",
      "Hawa Beach",
      "Samudra Beach",
      "Vizhinjam"
    ],
    "transportInfo": {
      "nearestAirport": "Trivandrum International Airport (TRV) - 15 km",
      "nearestRailway": "Thiruvananthapuram Central (TVC) - 14 km",
      "roadConnectivity": "Direct 4-lane bypass road from Trivandrum city"
    },
    "culturalHighlights": [
      "Vizhinjam Lighthouse spiral climb offering panoramic views of the Arabian Sea coastline",
      "Hawa and Samudra beaches featuring traditional wooden catamaran fishermen at dawn",
      "Ayurvedic Panchakarma massage and wellness therapy centers along the promenade"
    ],
    "sourceUrl": "https://www.keralatourism.org",
    "attractions": [
      {
        "id": "kvm-lighthouse",
        "name": "Kovalam Lighthouse & Crescent Beach",
        "category": "Beaches",
        "timeSlot": "Morning",
        "description": "Vibrant palm-fringed shoreline anchored by the 118-foot red-and-white stone lighthouse on Kurumkal hilltop.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 8.397,
          "lng": 76.978
        },
        "address": "Lighthouse Beach, Kovalam, Kerala",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Lighthouse opens for visitors in the afternoon from 3:00 PM to 5:00 PM"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kvm-1",
        "name": "Fusion Restaurant & Bait Seafood",
        "mealType": "Dinner",
        "cuisine": "Coastal Kerala Cuisine",
        "famousFor": "Karimeen Pollichathu (pearl spot in banana leaf) and Appam with Vegetable Stew",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 8.402,
          "lng": 76.98
        }
      }
    ]
  },
  {
    "id": "rameswaram",
    "name": "Rameswaram & Dhanushkodi",
    "normalizedName": "rameswaram & dhanushkodi",
    "state": "Tamil Nadu",
    "isUnionTerritory": false,
    "district": "Ramanathapuram",
    "category": "Pilgrimage & Spiritual",
    "tagline": "Sacred Island & Land's End - Pamban Sea Bridge, 1000-pillar corridors & Ram Setu",
    "description": "Sacred pilgrimage island connected to mainland India by the historic 2 km Pamban sea bridge over Palk Strait. Receptive to millions of pilgrims at Ramanathaswamy Temple with the longest pillared corridor in the world, and the haunting ghost town of Dhanushkodi at India's tip.",
    "coordinates": {
      "lat": 9.2876,
      "lng": 79.3129
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "Pilgrimage",
      "History",
      "Beaches",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Rameshwaram",
      "Dhanushkodi",
      "Pamban Bridge",
      "Ram Setu",
      "Adams Bridge",
      "Agni Theertham",
      "APJ Abdul Kalam Memorial"
    ],
    "transportInfo": {
      "nearestAirport": "Madurai International Airport (IXM) - 170 km",
      "nearestRailway": "Rameswaram Railway Station (RMM) / Mandapam",
      "roadConnectivity": "Annai Indira Gandhi Road Bridge over Pamban Sea Channel"
    },
    "culturalHighlights": [
      "Ramanathaswamy Temple housing 22 holy freshwater theertham wells inside sanctum",
      "World's longest temple corridor boasting 1,212 granite pillars with vibrant ceilings",
      "Dhanushkodi Land's End where the Bay of Bengal meets the Indian Ocean"
    ],
    "sourceUrl": "https://www.tamilnadutourism.tn.gov.in",
    "attractions": [
      {
        "id": "rmm-temple",
        "name": "Arulmigu Ramanathaswamy Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Massive Dravidian temple complex sacred to both Shaivites and Vaishnavites, featuring the Jyotirlinga installed by Lord Rama.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 9.2881,
          "lng": 79.3174
        },
        "address": "Rameswaram, Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Pilgrims traditionally take a holy dip in Agni Theertham sea before bathing in the 22 temple wells"
        ]
      },
      {
        "id": "rmm-dhanushkodi",
        "name": "Dhanushkodi Ghost Town & Ram Setu Point",
        "category": "Heritage",
        "timeSlot": "Afternoon",
        "description": "Deserted town submerged by the 1964 cyclone, showing ruins of a church, railway station, and the sandbar bridge extending toward Sri Lanka.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 9.1764,
          "lng": 79.4184
        },
        "address": "Dhanushkodi Tip, Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "New paved road allows passenger cars to reach Arichal Munai viewpoint"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-rmm-1",
        "name": "Sri Saravana Bhawan & Ram Nivas Mess",
        "mealType": "Lunch",
        "cuisine": "Tamil Traditional Vegetarian",
        "famousFor": "Plantain leaf South Indian Thali, Ghee Podi Dosa, and fresh Filter Coffee",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 9.289,
          "lng": 79.315
        }
      }
    ]
  },
  {
    "id": "kodaikanal",
    "name": "Kodaikanal Princess of Hill Stations",
    "normalizedName": "kodaikanal princess of hill stations",
    "state": "Tamil Nadu",
    "isUnionTerritory": false,
    "district": "Dindigul",
    "category": "Hill Stations & Nature",
    "tagline": "The Princess of Hill Stations - Star-shaped Kodai Lake, Coaker's Walk & Pillar Rocks",
    "description": "Picturesque hill retreat 2,133m high in the Palani Hills of the Western Ghats. Blessed with cool pine forests, rolling meadows, mist-clad Pillar Rocks, and a man-made star-shaped lake created in 1863.",
    "coordinates": {
      "lat": 10.2381,
      "lng": 77.4892
    },
    "bestMonths": "September to May",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Viewpoints",
      "Boating",
      "Trekking"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kodaikanal",
      "Kodai",
      "Princess of Hill Stations",
      "Kodai Lake",
      "Coakers Walk",
      "Pillar Rocks"
    ],
    "transportInfo": {
      "nearestAirport": "Madurai International Airport (IXM) - 120 km",
      "nearestRailway": "Kodai Road Railway Station (KQN) - 80 km",
      "roadConnectivity": "Scenic mountain ghat road from Batlagundu"
    },
    "culturalHighlights": [
      "Star-shaped Kodaikanal Lake encircled by a 5 km walking and cycling boulevard",
      "Pillar Rocks, three giant granite boulders towering 122 meters vertically",
      "Coaker's Walk panoramic pedestrian path cut along the steep mountain ridge"
    ],
    "sourceUrl": "https://www.tamilnadutourism.tn.gov.in",
    "attractions": [
      {
        "id": "kod-lake",
        "name": "Kodaikanal Lake & Bryant Park",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Iconic 60-acre star-shaped lake offering rowboats and pedal boats, flanked by the vibrant horticultural gardens of Bryant Park.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 150,
        "coordinates": {
          "lat": 10.235,
          "lng": 77.489
        },
        "address": "Lake Road, Kodaikanal, Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Rent a bicycle to ride along the scenic perimeter road of the lake"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kod-1",
        "name": "Pastry Corner & Cloud Street Cafe",
        "mealType": "Dinner",
        "cuisine": "Hill Station Bakeries & South Indian",
        "famousFor": "Handcrafted homemade chocolates, hot cinnamon rolls, and wood-fired pizza",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 10.239,
          "lng": 77.49
        }
      }
    ]
  },
  {
    "id": "thanjavur",
    "name": "Thanjavur Brihadisvara Temple",
    "normalizedName": "thanjavur brihadisvara temple",
    "state": "Tamil Nadu",
    "isUnionTerritory": false,
    "district": "Thanjavur",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Great Living Chola Capital - Thousand-year-old Brihadisvara Temple & Maratha Palace",
    "description": "The historical royal seat of the Chola Empire in the fertile Cauvery delta. Celebrated for the UNESCO World Heritage 11th-century Brihadisvara Temple (Big Temple) built by Raja Raja Chola I with an 80-tonne monolithic granite dome apex, Thanjavur gold-foil paintings, and bronze sculptures.",
    "coordinates": {
      "lat": 10.787,
      "lng": 79.1378
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Art",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Tanjore",
      "Brihadeeswara Temple",
      "Big Temple",
      "Peruvudaiyar Kovil",
      "Maratha Palace Thanjavur"
    ],
    "transportInfo": {
      "nearestAirport": "Tiruchirappalli International Airport (TRZ) - 55 km",
      "nearestRailway": "Thanjavur Junction (TJ)",
      "roadConnectivity": "Direct 4-lane highway from Trichy and Madurai"
    },
    "culturalHighlights": [
      "Brihadisvara Temple granite vimana rising 66 meters, casting no shadow at noon",
      "Thanjavur Royal Palace complex housing the Saraswathi Mahal Library founded in 1535",
      "Artisan workshops crafting traditional Thanjavur Veena and gold-embossed paintings"
    ],
    "sourceUrl": "https://www.tamilnadutourism.tn.gov.in",
    "attractions": [
      {
        "id": "tjv-big-temple",
        "name": "Brihadisvara Temple (The Big Temple)",
        "category": "Architecture",
        "timeSlot": "Morning",
        "description": "Architectural masterpiece of pure granite completed in 1010 CE, featuring a colossal 13-foot high Shiva Lingam and massive monolithic Nandi statue.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 10.7828,
          "lng": 79.1318
        },
        "address": "Membalam Rd, Thanjavur, Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Visit in late afternoon to watch temple illumination and avoid hot stone floors"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-tjv-1",
        "name": "Sathars Restaurant & Hotel Gnanam",
        "mealType": "Lunch",
        "cuisine": "Cauvery Delta Traditional",
        "famousFor": "Ashoka Halwa (Thiruvaiyaru sweet), Thanjavur Kadamba Sambar, and Chettinad specialties",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 10.785,
          "lng": 79.135
        }
      }
    ]
  },
  {
    "id": "mahabalipuram",
    "name": "Mahabalipuram Shore Temple & Monoliths",
    "normalizedName": "mahabalipuram shore temple & monoliths",
    "state": "Tamil Nadu",
    "isUnionTerritory": false,
    "district": "Chengalpattu",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Pallava Ocean Sanctuary - UNESCO Shore Temple, Pancha Rathas & Arjuna's Penance",
    "description": "7th-century coastal port city of the Pallava dynasty along the Bay of Bengal, UNESCO World Heritage listed for spectacular open-air rock reliefs including Arjuna's Penance, monolithic stone chariot shrines (Pancha Rathas), and the wave-lashed Shore Temple.",
    "coordinates": {
      "lat": 12.6269,
      "lng": 80.1927
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Beaches",
      "Sculpture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Mamallapuram",
      "Shore Temple",
      "Pancha Rathas",
      "Arjunas Penance",
      "Krishnas Butter Ball",
      "ECR Coastal Heritage"
    ],
    "transportInfo": {
      "nearestAirport": "Chennai International Airport (MAA) - 55 km",
      "nearestRailway": "Chengalpattu Junction (CGL) - 30 km",
      "roadConnectivity": "Scenic East Coast Road (ECR) connects Chennai in 1.5 hours"
    },
    "culturalHighlights": [
      "Shore Temple standing bravely against ocean spray since 700 CE",
      "Arjuna's Penance, the world's largest open-air stone relief carved on twin boulders",
      "Krishna's Butter Ball, a 250-tonne gigantic granite boulder balancing on a 45-degree slope"
    ],
    "sourceUrl": "https://www.tamilnadutourism.tn.gov.in",
    "attractions": [
      {
        "id": "mbl-shore-temple",
        "name": "Shore Temple & Pancha Rathas",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Magnificent structural temple complex erected on the sea edge, followed by monolithic rock shrines carved in the likeness of royal processional chariots.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 40,
        "coordinates": {
          "lat": 12.6163,
          "lng": 80.1992
        },
        "address": "Shore Temple Complex, Mahabalipuram, Tamil Nadu",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Single ASI composite ticket covers Shore Temple and Pancha Rathas"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mbl-1",
        "name": "Moonrakers Restaurant & Santana Beach Shack",
        "mealType": "Dinner",
        "cuisine": "Coastal Seafood & Tandoori",
        "famousFor": "Butter Garlic Prawns, Tawa fried Calamari, and Kerala Fish Curry with rice",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 12.62,
          "lng": 80.195
        }
      }
    ]
  },
  {
    "id": "vijayawada",
    "name": "Vijayawada & Kanaka Durga Temple",
    "normalizedName": "vijayawada & kanaka durga temple",
    "state": "Andhra Pradesh",
    "isUnionTerritory": false,
    "district": "NTR District",
    "category": "Culture & City",
    "tagline": "The City of Victory - Indrakeeladri Hill Kanaka Durga, Prakasam Barrage & Undavalli Caves",
    "description": "Bustling commercial and cultural metropolis along the holy Krishna River, famed for the hill-shrine of Goddess Kanaka Durga, the massive Prakasam Barrage, and the 7th-century rock-cut Undavalli Caves.",
    "coordinates": {
      "lat": 16.5062,
      "lng": 80.648
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Temples",
      "History",
      "River Cruise",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Vijayawada",
      "Bezawada",
      "Kanaka Durga Temple",
      "Prakasam Barrage",
      "Undavalli Caves",
      "Bhavani Island"
    ],
    "transportInfo": {
      "nearestAirport": "Vijayawada International Airport (VGA) - 18 km",
      "nearestRailway": "Vijayawada Junction (BZA) - A1 major rail junction",
      "roadConnectivity": "Hub of NH 16 and NH 65"
    },
    "culturalHighlights": [
      "Kanaka Durga Temple atop Indrakeeladri Hill overlooking Krishna River",
      "4-story rock-cut Undavalli Caves featuring colossal reclining Vishnu carved from solid sandstone",
      "Bhavani Island river resort offering watersports in the Krishna waters"
    ],
    "sourceUrl": "https://tourism.ap.gov.in",
    "attractions": [
      {
        "id": "vja-kanaka-durga",
        "name": "Sri Durga Malleswara Swamy Varla Devasthanam",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Ancient Swayambhu shrine of Goddess Durga on Indrakeeladri Hill with panoramic vistas of the Prakasam Barrage.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 16.5167,
          "lng": 80.6062
        },
        "address": "Indrakeeladri, Vijayawada, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Ghat road and modern lift/elevator available for seniors to ascend the hill"
        ]
      },
      {
        "id": "vja-undavalli",
        "name": "Undavalli Rock-Cut Caves",
        "category": "History",
        "timeSlot": "Afternoon",
        "description": "Monolithic cave complex carved out of solid sandstone in the 7th century by Vishnukundina kings.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 16.4969,
          "lng": 80.5818
        },
        "address": "Undavalli, Guntur-Vijayawada border, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Marvel at the 5-meter-long Anantasayana Vishnu sculpture on the second floor"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-vja-1",
        "name": "Babai Hotel & Sweet Magic",
        "mealType": "Breakfast",
        "cuisine": "Andhra Traditional",
        "famousFor": "Babai Idli with dollop of white butter (venna) and spicy podi, and Putharekulu sweet",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 16.51,
          "lng": 80.62
        }
      }
    ]
  },
  {
    "id": "srisailam",
    "name": "Srisailam Mallikarjuna Jyotirlinga",
    "normalizedName": "srisailam mallikarjuna jyotirlinga",
    "state": "Andhra Pradesh",
    "isUnionTerritory": false,
    "district": "Nandyal",
    "category": "Pilgrimage & Spiritual",
    "tagline": "Sacred Nallamala Forest Shrine - Mallikarjuna Jyotirlinga, Bhramaramba Shaktipeeth & Krishna Gorge",
    "description": "One of India's most sanctified pilgrimage centres set deep within the dense Nallamala Forest hills above the Krishna River canyon. Uniquely represents both one of the 12 Shiva Jyotirlingas and one of the 18 Maha Shaktipeeths (Bhramaramba Devi).",
    "coordinates": {
      "lat": 16.0739,
      "lng": 78.8687
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Pilgrimage",
      "Temples",
      "Nature",
      "Forests"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Srisailam",
      "Mallikarjuna Jyotirlinga",
      "Bhramaramba Devi",
      "Srisailam Dam",
      "Nallamala Forest"
    ],
    "transportInfo": {
      "nearestAirport": "Hyderabad Rajiv Gandhi International Airport (HYD) - 200 km",
      "nearestRailway": "Markapur Road Railway Station (MRK) - 85 km",
      "roadConnectivity": "Picturesque forest ghat road through Nagarjunasagar-Srisailam Tiger Reserve"
    },
    "culturalHighlights": [
      "Sri Bhramaramba Mallikarjuna Swamy Temple encircled by massive carved stone ramparts",
      "Srisailam Dam spanning deep Krishna River gorges with dramatic 12-radial crest gates",
      "Patala Ganga ropeway descending into the sacred river canyon for holy bath and boat rides"
    ],
    "sourceUrl": "https://tourism.ap.gov.in",
    "attractions": [
      {
        "id": "sri-temple",
        "name": "Sri Mallikarjuna Swamy Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "Centuries-old Dravidian temple where devotees are uniquely permitted to directly touch the sacred Jyotirlinga during Sparsha Darshan.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 16.0739,
          "lng": 78.8687
        },
        "address": "Srisailam Devasthanam, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Traditional attire (dhoti/sari) strictly mandated for inner sanctum entry"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-sri-1",
        "name": "Devasthanam Annadana Hall & Haritha Restaurant",
        "mealType": "Lunch",
        "cuisine": "Sattvic Andhra Cuisine",
        "famousFor": "Temple prasadam Pulihora (tamarind rice), Gongura pickle, and hot payasam",
        "estimatedCostPerPersonInr": 100,
        "coordinates": {
          "lat": 16.075,
          "lng": 78.865
        }
      }
    ]
  },
  {
    "id": "lepakshi",
    "name": "Lepakshi Veerabhadra Temple",
    "normalizedName": "lepakshi veerabhadra temple",
    "state": "Andhra Pradesh",
    "isUnionTerritory": false,
    "district": "Sri Sathya Sai",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Vijayanagara Stone Marvel - Legendary Hanging Pillar, Monolithic Nandi & ceiling frescoes",
    "description": "Magnificent 16th-century Vijayanagara architectural sanctuary celebrated for engineering marvels like the Hanging Pillar that defies gravity, Asia's largest monolithic granite Nandi bull, and brilliant Ramayana ceiling frescoes.",
    "coordinates": {
      "lat": 13.8041,
      "lng": 77.6074
    },
    "bestMonths": "October to March",
    "idealDays": 1,
    "popularInterests": [
      "History",
      "Architecture",
      "Sculpture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Lepakshi",
      "Veerabhadra Temple",
      "Hanging Pillar",
      "Monolithic Nandi Lepakshi",
      "Vijayanagara Heritage"
    ],
    "transportInfo": {
      "nearestAirport": "Kempegowda International Airport Bengaluru (BLR) - 100 km",
      "nearestRailway": "Hindupur Railway Station (HUP) - 14 km",
      "roadConnectivity": "Direct smooth drive from Bengaluru (120 km) via NH 44"
    },
    "culturalHighlights": [
      "The Hanging Pillar of the Natya Mandapa which does not rest on the floor",
      "Gigantic 27x15 ft Monolithic Nandi carved from a single granite boulder",
      "Nagalinga, a 7-hooded granite serpent shielding a black polished Shiva Lingam"
    ],
    "sourceUrl": "https://tourism.ap.gov.in",
    "attractions": [
      {
        "id": "lep-temple",
        "name": "Veerabhadra Temple & Hanging Pillar",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Spectacular 1530 CE temple complex with 70 carved stone pillars, magnificent ceiling murals painted with vegetable dyes, and the mysterious floating pillar.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 13.8041,
          "lng": 77.6074
        },
        "address": "Lepakshi Village, Andhra Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Pass a thin cloth or paper under the hanging pillar to observe the clear gap"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-lep-1",
        "name": "Haritha Lepakshi & Nandi Mess",
        "mealType": "Lunch",
        "cuisine": "Rayalaseema Andhra",
        "famousFor": "Ragi Sankati with spicy Natu Kodi Pulusu (country chicken curry) and Mirchi bajji",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 13.802,
          "lng": 77.605
        }
      }
    ]
  },
  {
    "id": "nagarjuna-sagar",
    "name": "Nagarjuna Sagar Dam & Buddhist Remains",
    "normalizedName": "nagarjuna sagar dam & buddhist remains",
    "state": "Telangana",
    "isUnionTerritory": false,
    "district": "Nalgonda",
    "category": "Historical Monuments & Heritage",
    "tagline": "The World's Largest Masonry Dam - Island Buddhist Museum at Nagarjunakonda & Ethipothala Falls",
    "description": "Colossal engineering marvel built across the Krishna River flanked by lush hills. Features the unique island archaeological museum of Nagarjunakonda holding 2nd-century Mahayana Buddhist relics, and cascading Ethipothala waterfalls nearby.",
    "coordinates": {
      "lat": 16.5772,
      "lng": 79.3129
    },
    "bestMonths": "August to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Boating",
      "Waterfalls"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Nagarjunasagar",
      "Nagarjunakonda",
      "Ethipothala Falls",
      "Buddhist Museum Island",
      "Krishna Dam"
    ],
    "transportInfo": {
      "nearestAirport": "Hyderabad Rajiv Gandhi International Airport (HYD) - 150 km",
      "nearestRailway": "Macherla Railway Station (MCLA) - 24 km",
      "roadConnectivity": "State Highway 19 connects directly from Hyderabad in 3.5 hours"
    },
    "culturalHighlights": [
      "Scenic 45-minute motorboat launch ride to Nagarjunakonda island",
      "Island museum preserving original stupas, monastic cells, and statues of Acharya Nagarjuna",
      "Nagarjuna Sagar Dam crest gates releasing roaring waters during monsoon peaks"
    ],
    "sourceUrl": "https://tourism.telangana.gov.in",
    "attractions": [
      {
        "id": "ngs-island",
        "name": "Nagarjunakonda Island Museum",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Island museum surrounded by reservoir waters, preserving excavated Buddhist monasteries and Roman coins from ancient Ikshvaku dynasty.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 200,
        "coordinates": {
          "lat": 16.525,
          "lng": 79.245
        },
        "address": "Nagarjunakonda Island, Telangana",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Boats operate from Vijayapuri North Launch Station from 9:30 AM"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ngs-1",
        "name": "Telangana Haritha Vijayavihar Dining",
        "mealType": "Lunch",
        "cuisine": "Telangana Regional",
        "famousFor": "Fresh Krishna River Fish Fry, Jowar Roti, and spicy Gongura Mamsam",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 16.58,
          "lng": 79.315
        }
      }
    ]
  },
  {
    "id": "ramappa-temple",
    "name": "Ramappa Temple UNESCO Kakatiya Heritage",
    "normalizedName": "ramappa temple unesco kakatiya heritage",
    "state": "Telangana",
    "isUnionTerritory": false,
    "district": "Mulugu",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Floating Brick Wonder - UNESCO World Heritage Rudreshwara Temple & Laknavaram Lake",
    "description": "Inscribed on the UNESCO World Heritage list, this 1213 CE Kakatiya masterpiece is the only temple in India named after its chief architect, Ramappa. Famed for lightweight floating bricks, sandbox foundation engineering, and black basalt dancing bracket figures.",
    "coordinates": {
      "lat": 18.2647,
      "lng": 79.9431
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "UNESCO",
      "Lakes"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Ramappa",
      "Rudreshwara Temple",
      "Ramappa UNESCO",
      "Palampet Lake",
      "Laknavaram Lake",
      "Kakatiya Architecture"
    ],
    "transportInfo": {
      "nearestAirport": "Hyderabad Rajiv Gandhi International Airport (HYD) - 210 km",
      "nearestRailway": "Warangal / Kazipet Junction (WL/KZJ) - 65 km",
      "roadConnectivity": "Paved highway through lush forest from Warangal (70 km)"
    },
    "culturalHighlights": [
      "Lightweight bricks used in the temple tower (shikhara) that float on water",
      "Sensuous Madanika and Salabhanjika dancing stone figures carved from polished dolerite",
      "Scenic Laknavaram Lake suspension bridge walk across mini forest islands"
    ],
    "sourceUrl": "https://tourism.telangana.gov.in",
    "attractions": [
      {
        "id": "rmp-temple",
        "name": "Kakatiya Rudreshwara (Ramappa) Temple",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Star-shaped platform temple surviving earthquakes for 800 years due to ingenious sandbox foundation technique, showcasing intricate sculpted ceilings.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 18.2647,
          "lng": 79.9431
        },
        "address": "Palampet Village, Mulugu District, Telangana",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Inspect the acoustic properties of the carved pillars producing distinct musical tones"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-rmp-1",
        "name": "Haritha Ramappa & Laknavaram Island Cafe",
        "mealType": "Lunch",
        "cuisine": "Telangana Country Kitchen",
        "famousFor": "Sarva Pindi (spiced rice flour pancake), Golichina Mamsam, and Bagara Rice with Dalcha",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 18.26,
          "lng": 79.94
        }
      }
    ]
  },
  {
    "id": "corbett-national-park",
    "name": "Jim Corbett National Park",
    "normalizedName": "jim corbett national park",
    "state": "Uttarakhand",
    "isUnionTerritory": false,
    "district": "Nainital",
    "category": "Wildlife & National Parks",
    "tagline": "India's First National Park - Iconic Dhikala grasslands, Ramganga river & Royal Bengal Tigers",
    "description": "Established in 1936 as Hailey National Park, Corbett is India's oldest national park and cradle of Project Tiger. Spans dense Sal forests, misty grasslands, and the Ramganga river basin harboring elephants, leopards, gharials, and over 600 bird species.",
    "coordinates": {
      "lat": 29.53,
      "lng": 78.7747
    },
    "bestMonths": "November to June",
    "idealDays": 3,
    "popularInterests": [
      "Wildlife",
      "Photography",
      "Adventure",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Corbett",
      "Jim Corbett",
      "Dhikala",
      "Bijrani",
      "Ramnagar",
      "Oldest National Park India"
    ],
    "transportInfo": {
      "nearestAirport": "Pantnagar Airport (PGH) - 80 km / Delhi (DEL) - 250 km",
      "nearestRailway": "Ramnagar Railway Station (RMR) - 12 km",
      "roadConnectivity": "Direct 6-hour highway drive from Delhi via Moradabad"
    },
    "culturalHighlights": [
      "Open 4x4 Gypsy jungle safaris in Dhikala, Bijrani, Jhirna, and Dhela safari zones",
      "Historic Dhikala Forest Rest House overlooking Ramganga river meadows",
      "Corbett Falls and heritage museum at Kaladhungi (winter home of hunter-conservationist Jim Corbett)"
    ],
    "sourceUrl": "https://uttarakhandtourism.gov.in",
    "attractions": [
      {
        "id": "cbt-safari",
        "name": "Corbett Morning Jeep Safari (Dhikala/Bijrani)",
        "category": "Wildlife",
        "timeSlot": "Morning",
        "description": "Early morning wilderness safari tracking tiger movements along elephant corridors, river beds, and tall grassland trails.",
        "visitDurationMinutes": 240,
        "estimatedCostInr": 1500,
        "coordinates": {
          "lat": 29.53,
          "lng": 78.7747
        },
        "address": "Ramnagar, Uttarakhand",
        "imageUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Book permit slots 45 days in advance on official Uttarakhand Forest Department portal"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-cbt-1",
        "name": "Corbett Riverside Deck & Kumaoni Rasoi",
        "mealType": "Dinner",
        "cuisine": "Kumaoni Pahadi",
        "famousFor": "Bhatt Ki Churkani (black soybean curry), Aloo Ke Gutke, and Singodi sweet",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 29.5,
          "lng": 78.8
        }
      }
    ]
  },
  {
    "id": "auli",
    "name": "Auli Himalayan Ski Resort & Meadows",
    "normalizedName": "auli himalayan ski resort & meadows",
    "state": "Uttarakhand",
    "isUnionTerritory": false,
    "district": "Chamoli",
    "category": "Adventure & Trekking",
    "tagline": "India's Premier Ski Paradise - Nanda Devi 360-degree panorama, cable car & Gorson Bugyal",
    "description": "High-altitude meadow (bugyal) situated 2,800 to 3,050 meters above sea level in the Garhwal Himalayas. Celebrated for world-class snow skiing slopes, Asia's highest ropeway from Joshimath, and jaw-dropping views of peak Nanda Devi, Kamet, and Trishul.",
    "coordinates": {
      "lat": 30.5293,
      "lng": 79.5694
    },
    "bestMonths": "December to March for skiing; May to October for alpine meadows",
    "idealDays": 3,
    "popularInterests": [
      "Skiing",
      "Snow",
      "Trekking",
      "Viewpoints",
      "Adventure"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Auli",
      "Auli Ski Resort",
      "Gorson Bugyal",
      "Joshimath Cable Car",
      "Nanda Devi View",
      "Skiing India"
    ],
    "transportInfo": {
      "nearestAirport": "Dehradun Jolly Grant Airport (DED) - 280 km",
      "nearestRailway": "Rishikesh Railway Station (RKSH) - 250 km",
      "roadConnectivity": "Joshimath connected via Badrinath National Highway NH 7"
    },
    "culturalHighlights": [
      "Joshimath-to-Auli Ropeway spanning 4 km over oak forests with Nanda Devi vistas",
      "International ski slopes equipped with snow-making machines and chairlifts",
      "Trek to Gorson Bugyal alpine meadow blanketed in wildflowers in summer and powdery snow in winter"
    ],
    "sourceUrl": "https://uttarakhandtourism.gov.in",
    "attractions": [
      {
        "id": "aul-slopes",
        "name": "Auli Ski Slopes & Artificial Lake",
        "category": "Adventure",
        "timeSlot": "Morning",
        "description": "Gently sloping snowfields offering beginner and certified advanced ski courses against the backdrop of sacred Himalayan peaks.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 1000,
        "coordinates": {
          "lat": 30.5293,
          "lng": 79.5694
        },
        "address": "Auli, Chamoli, Uttarakhand",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Ski gear, waterproof jackets, and certified instructors available on rent from GMVN"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-aul-1",
        "name": "GMVN Cliff Top Club & Himalayan Maggi Shack",
        "mealType": "Lunch",
        "cuisine": "Garhwali High Altitude",
        "famousFor": "Chainsoo (roasted black gram broth), piping hot butter Maggi, and ginger cardamom tea",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 30.531,
          "lng": 79.57
        }
      }
    ]
  },
  {
    "id": "kedarnath-badrinath",
    "name": "Kedarnath & Badrinath (Char Dham)",
    "normalizedName": "kedarnath & badrinath (char dham)",
    "state": "Uttarakhand",
    "isUnionTerritory": false,
    "district": "Rudraprayag & Chamoli",
    "category": "Pilgrimage & Spiritual",
    "tagline": "The Pinnacle of Devotion - High altitude Jyotirlinga, Neelkanth peak & Alaknanda sanctuary",
    "description": "The two holiest Himalayan Char Dham pilgrimage shrines in India. Kedarnath stands at 3,584m in the Mandakini valley near Chorabari glacier; Badrinath rests at 3,300m along the Alaknanda river beneath the shadow of the Neelkanth peak.",
    "coordinates": {
      "lat": 30.7352,
      "lng": 79.0669
    },
    "bestMonths": "May to June, September to October",
    "idealDays": 4,
    "popularInterests": [
      "Pilgrimage",
      "Trekking",
      "Himalayas",
      "Spiritual"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kedarnath",
      "Badrinath",
      "Char Dham",
      "Mana Village",
      "Mandakini Valley",
      "Neelkanth Peak"
    ],
    "transportInfo": {
      "nearestAirport": "Dehradun Jolly Grant Airport (DED) - 235 km",
      "nearestRailway": "Rishikesh Railway Station (RKSH) - 220 km",
      "roadConnectivity": "All-weather Char Dham Highway connects Rudraprayag and Joshimath"
    },
    "culturalHighlights": [
      "1,200-year-old Kedarnath stone temple that survived the 2013 flash floods undamaged",
      "Badrinath colorful traditional Garhwal wooden facade and Tapt Kund hot springs",
      "Mana, the first Indian village on the border featuring Vyas Gufa and Bhim Pul"
    ],
    "sourceUrl": "https://uttarakhandtourism.gov.in",
    "attractions": [
      {
        "id": "kdr-temple",
        "name": "Shri Kedarnath Jyotirlinga Temple",
        "category": "Temples",
        "timeSlot": "Morning",
        "description": "One of the 12 sacred Jyotirlingas constructed from massive grey granite slabs set against the snow-covered Kedarnath peak.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 30.7352,
          "lng": 79.0669
        },
        "address": "Kedarnath, Rudraprayag, Uttarakhand",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "16 km trek from Gaurikund; helicopter shuttle services available from Phata and Guptkashi"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kdr-1",
        "name": "BKTC Pilgrim Kitchen & Annapurna Bhojanalaya",
        "mealType": "Lunch",
        "cuisine": "Pure Sattvic Himalayan",
        "famousFor": "Gehat (Horsegram) Dal, hot Mandua Roti with ghee, and sweet dry fruit halwa",
        "estimatedCostPerPersonInr": 150,
        "coordinates": {
          "lat": 30.736,
          "lng": 79.067
        }
      }
    ]
  },
  {
    "id": "dalhousie-khajjiar",
    "name": "Dalhousie & Khajjiar (Mini Switzerland)",
    "normalizedName": "dalhousie & khajjiar (mini switzerland)",
    "state": "Himachal Pradesh",
    "isUnionTerritory": false,
    "district": "Chamba",
    "category": "Hill Stations & Nature",
    "tagline": "The Mini Switzerland of India - Saucer-shaped pine meadow, colonial estates & Dainkund Peak",
    "description": "Idyllic hill retreat established in 1854 across five wooded hills in the Dhauladhar Range. Near Dalhousie lies Khajjiar, officially baptized as 'Mini Switzerland of India' featuring a saucer-shaped meadow and floating island lake encircled by towering deodar trees.",
    "coordinates": {
      "lat": 32.5387,
      "lng": 75.971
    },
    "bestMonths": "March to June, October to December",
    "idealDays": 3,
    "popularInterests": [
      "Nature",
      "Meadows",
      "Colonial Heritage",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Dalhousie",
      "Khajjiar",
      "Mini Switzerland of India",
      "Dainkund Peak",
      "Kalatop Wildlife",
      "Subhash Baoli"
    ],
    "transportInfo": {
      "nearestAirport": "Gaggal Airport, Kangra (DHM) - 110 km",
      "nearestRailway": "Pathankot Junction (PTK) - 80 km",
      "roadConnectivity": "Scenic mountain highway ascends from Pathankot"
    },
    "culturalHighlights": [
      "Khajjiar Lake meadow designated by Swiss Envoy Willy P. Blazer in 1992",
      "Dainkund Peak ('Singing Mountain') at 2,755m offering views of three rivers: Chenab, Beas, and Ravi",
      "Colonial Scottish and Victorian stone churches: St. John's and St. Francis"
    ],
    "sourceUrl": "https://himachaltourism.gov.in",
    "attractions": [
      {
        "id": "dlh-khajjiar",
        "name": "Khajjiar Meadow & Floating Island Lake",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Breathtaking natural emerald meadow surrounded by dense cedar forests, featuring zorbing, horse riding, and the 12th-century Khajji Nag Temple.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 32.551,
          "lng": 76.06
        },
        "address": "Khajjiar, Chamba District, Himachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Visit early morning when morning mist hovers over the pine woods"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-dlh-1",
        "name": "Kwality Restaurant Gandhi Chowk & Cafe Dalhousie",
        "mealType": "Lunch",
        "cuisine": "Himachali & North Indian",
        "famousFor": "Himachali Madra (chickpea yogurt curry), freshly fried Momos, and apple pie",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 32.535,
          "lng": 75.975
        }
      }
    ]
  },
  {
    "id": "kasauli",
    "name": "Kasauli Gilbert Trail & Pine Hills",
    "normalizedName": "kasauli gilbert trail & pine hills",
    "state": "Himachal Pradesh",
    "isUnionTerritory": false,
    "district": "Solan",
    "category": "Hill Stations & Nature",
    "tagline": "The Quiet Cantonment - Gilbert Nature Trail, colonial Christ Church & Sunset Point",
    "description": "Charming, unhurried colonial cantonment town established in 1842 amidst chestnut and oak forests. Celebrated for cobblestone heritage walks, the picturesque 1.5 km cliff-edge Gilbert Nature Trail, and sweeping views of the Punjab plains.",
    "coordinates": {
      "lat": 30.9013,
      "lng": 76.9649
    },
    "bestMonths": "Throughout the year",
    "idealDays": 2,
    "popularInterests": [
      "Nature",
      "Trekking",
      "Colonial History",
      "Bird Watching"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kasauli",
      "Kasauli Hills",
      "Gilbert Trail",
      "Monkey Point",
      "Christ Church Kasauli"
    ],
    "transportInfo": {
      "nearestAirport": "Chandigarh International Airport (IXC) - 65 km",
      "nearestRailway": "Kalka Railway Station (KLK) - 25 km / Dharampur Himachal (DMP) - 10 km",
      "roadConnectivity": "Himalayan Expressway connects Chandigarh in 1.5 hours"
    },
    "culturalHighlights": [
      "Gilbert Nature Trail with steep drop-offs and exceptional birdwatching of scarlet minivets and blue whistling thrushes",
      "Christ Church built in 1853 with magnificent stained glass windows depicting St. Francis and St. Barnabas",
      "Manki Point (Monkey Point) Air Force station offering aerial views of River Sutlej"
    ],
    "sourceUrl": "https://himachaltourism.gov.in",
    "attractions": [
      {
        "id": "kas-gilbert",
        "name": "Gilbert Nature Trail",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Peaceful 1.5 km stone-paved walking trail winding along a cliff edge through fragrant pine woods and mountain vistas.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 30.898,
          "lng": 76.962
        },
        "address": "Near Sunset Point, Kasauli, Himachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Early morning walk provides crisp mountain air and active birdlife sightings"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kas-1",
        "name": "Heritage Market Bun Samosa & Old Kasauli Cafe",
        "mealType": "Lunch",
        "cuisine": "Himachali Local Street Food",
        "famousFor": "Kasauli's iconic Bun Samosa with spicy chana gravy, and plum fruit wines",
        "estimatedCostPerPersonInr": 120,
        "coordinates": {
          "lat": 30.902,
          "lng": 76.966
        }
      }
    ]
  },
  {
    "id": "bir-billing",
    "name": "Bir Billing Paragliding Capital",
    "normalizedName": "bir billing paragliding capital",
    "state": "Himachal Pradesh",
    "isUnionTerritory": false,
    "district": "Kangra",
    "category": "Adventure & Trekking",
    "tagline": "World's Premier Paragliding Hub - Take-off at Billing (2,400m), Tibetan monasteries & tea gardens",
    "description": "Globally celebrated as one of the world's top paragliding destinations. Tandem flights launch from the high ridge at Billing (2,400m) and glide gracefully over pine-covered valleys to land at Bir (1,400m), home to Tibetan monasteries and organic tea gardens.",
    "coordinates": {
      "lat": 32.0465,
      "lng": 76.7196
    },
    "bestMonths": "March to June, September to November",
    "idealDays": 2,
    "popularInterests": [
      "Paragliding",
      "Adventure",
      "Monasteries",
      "Cafes",
      "Tea"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Bir",
      "Billing",
      "Bir Billing",
      "Paragliding Capital India",
      "Chokling Monastery",
      "Deer Park Institute"
    ],
    "transportInfo": {
      "nearestAirport": "Gaggal Kangra Airport (DHM) - 68 km",
      "nearestRailway": "Pathankot Junction (PTK) - 140 km / Ahju Toy Train Station - 3 km",
      "roadConnectivity": "Scenic mountain road from Dharamshala (70 km) and Baijnath"
    },
    "culturalHighlights": [
      "Tandem paragliding with certified pilots flying 15-30 minutes across Dhauladhar peaks",
      "Chokling Monastery and Palpung Sherabling Monastic Seat displaying Tibetan frescoes",
      "Scenic Baijnath 13th-century stone Shiva Temple set along the Binwa River"
    ],
    "sourceUrl": "https://himachaltourism.gov.in",
    "attractions": [
      {
        "id": "bir-flight",
        "name": "Billing Paragliding Take-Off Site",
        "category": "Adventure",
        "timeSlot": "Morning",
        "description": "High mountain takeoff point perched 2,400m above sea level providing world-class thermals and safe launch conditions.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 2500,
        "coordinates": {
          "lat": 32.059,
          "lng": 76.735
        },
        "address": "Billing Ridge, Kangra District, Himachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "GoPro in-flight video recording is usually available for an extra ₹500"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-bir-1",
        "name": "Glider's Pizzeria & Garden Cafe Bir",
        "mealType": "Dinner",
        "cuisine": "Tibetan & Italian Artisan",
        "famousFor": "Wood-fired thin crust pizza, Thukpa soup, and freshly baked carrot cake",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 32.045,
          "lng": 76.72
        }
      }
    ]
  },
  {
    "id": "anandpur-sahib",
    "name": "Anandpur Sahib & Virasat-e-Khalsa",
    "normalizedName": "anandpur sahib & virasat-e-khalsa",
    "state": "Punjab",
    "isUnionTerritory": false,
    "district": "Rupnagar",
    "category": "Pilgrimage & Spiritual",
    "tagline": "The Holy City of Bliss - Takht Sri Kesgarh Sahib, Birthplace of the Khalsa & Virasat-e-Khalsa",
    "description": "One of the most sacred pilgrimage destinations in Sikhism nestled between the Shivalik Hills and Sutlej River. Founded in 1665 by Guru Tegh Bahadur, this is where Guru Gobind Singh created the Khalsa Panth in 1699. Boasts the world-class Virasat-e-Khalsa museum designed by Moshe Safdie.",
    "coordinates": {
      "lat": 31.2361,
      "lng": 76.4989
    },
    "bestMonths": "October to March (and Hola Mohalla festival in March)",
    "idealDays": 2,
    "popularInterests": [
      "Pilgrimage",
      "History",
      "Culture",
      "Architecture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Anandpur",
      "Takht Sri Kesgarh Sahib",
      "Virasat-e-Khalsa",
      "Hola Mohalla",
      "City of Bliss"
    ],
    "transportInfo": {
      "nearestAirport": "Chandigarh International Airport (IXC) - 85 km",
      "nearestRailway": "Anandpur Sahib Railway Station (ANSB)",
      "roadConnectivity": "Direct 4-lane highway from Chandigarh (80 km)"
    },
    "culturalHighlights": [
      "Takht Sri Kesgarh Sahib, one of the five temporal seats of authority in Sikhism",
      "Virasat-e-Khalsa museum featuring dramatic fortress architecture and interactive 500-year history exhibits",
      "Spectacular Hola Mohalla celebrations displaying martial arts (Gatka) and mock horse charges"
    ],
    "sourceUrl": "https://punjabtourism.punjab.gov.in",
    "attractions": [
      {
        "id": "ans-virasat",
        "name": "Virasat-e-Khalsa Museum",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Stunning modern museum designed in hand-chiseled Gwalior sandstone commemorating five centuries of Sikh heritage with immersive multimedia galleries.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 31.2325,
          "lng": 76.5025
        },
        "address": "Virasat-e-Khalsa Complex, Anandpur Sahib, Punjab",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Allow at least 2.5 to 3 hours to absorb the 27 exhibition galleries"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ans-1",
        "name": "Guru Ka Langar & Anandpur Highway Dhaba",
        "mealType": "Lunch",
        "cuisine": "Punjabi Langar & Desi Ghee Dhaba",
        "famousFor": "Sacred community Langar Dal, hot Tandoori Roti with makkhan, and Makki Di Roti with Sarson Da Saag",
        "estimatedCostPerPersonInr": 100,
        "coordinates": {
          "lat": 31.235,
          "lng": 76.5
        }
      }
    ]
  },
  {
    "id": "patiala",
    "name": "Patiala Royal Heritage & Qila Mubarak",
    "normalizedName": "patiala royal heritage & qila mubarak",
    "state": "Punjab",
    "isUnionTerritory": false,
    "district": "Patiala",
    "category": "Historical Monuments & Heritage",
    "tagline": "The Royal Heart of Malwa - 18th-century Qila Mubarak, Sheesh Mahal & Phulkari craft",
    "description": "Historic princely capital of the Phulkian dynasty renowned for monumental Sikh-Mughal architecture, including the 10-acre Qila Mubarak fortress palace, Baradari Gardens, traditional Patiala Shahi turbans, and exquisite handcrafted Phulkari embroidery.",
    "coordinates": {
      "lat": 30.3398,
      "lng": 76.3869
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "History",
      "Architecture",
      "Shopping",
      "Food"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Patiala",
      "Qila Mubarak",
      "Sheesh Mahal Patiala",
      "Baradari Gardens",
      "Royal City Punjab"
    ],
    "transportInfo": {
      "nearestAirport": "Chandigarh International Airport (IXC) - 65 km",
      "nearestRailway": "Patiala Railway Station (PTA)",
      "roadConnectivity": "4-lane highway from Chandigarh (70 km) and Delhi via NH 44"
    },
    "culturalHighlights": [
      "Qila Androon inner palace holding the subterranean Flame of Baba Ala Singh kept burning since 1763",
      "Sheesh Mahal (Palace of Mirrors) with royal medal gallery holding over 3,200 world decorations",
      "Heritage bazaars for handcrafted Patiala Juttis (embroidered footwear) and Parandi hair braids"
    ],
    "sourceUrl": "https://punjabtourism.punjab.gov.in",
    "attractions": [
      {
        "id": "ptl-qila",
        "name": "Qila Mubarak Complex & Sheesh Mahal",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Sprawling 18th-century palace fort built by Baba Ala Singh containing rare Kangra and Rajasthani wall paintings and the royal armory.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 30.33,
          "lng": 76.39
        },
        "address": "Old City, Patiala, Punjab",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Visit the Darbar Hall to see the weaponry collection of Guru Gobind Singh"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ptl-1",
        "name": "Gopal Sweets & Sahni Dhaba",
        "mealType": "Lunch",
        "cuisine": "Royal Punjabi",
        "famousFor": "Patiala Shahi Butter Chicken, Dal Makhani, and thick Kesar Badam Lassi in tall brass glasses",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 30.335,
          "lng": 76.385
        }
      }
    ]
  },
  {
    "id": "morni-hills",
    "name": "Morni Hills & Tikkar Taal",
    "normalizedName": "morni hills & tikkar taal",
    "state": "Haryana",
    "isUnionTerritory": false,
    "district": "Panchkula",
    "category": "Hill Stations & Nature",
    "tagline": "Haryana's Only Hill Station - Serene Tikkar Taal twin lakes & Shivalik pine slopes",
    "description": "The sole hill station in Haryana situated 1,220 meters high in the outer Shivalik Range. Renowned for pine-covered hills, the twin interconnected sacred lakes of Tikkar Taal (Bada Taal and Chhota Taal), and rich avian biodiversity.",
    "coordinates": {
      "lat": 30.6974,
      "lng": 77.0864
    },
    "bestMonths": "September to April",
    "idealDays": 2,
    "popularInterests": [
      "Nature",
      "Lakes",
      "Boating",
      "Trekking"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Morni",
      "Morni Hills",
      "Tikkar Taal",
      "Only Hill Station Haryana",
      "Karoh Peak"
    ],
    "transportInfo": {
      "nearestAirport": "Chandigarh International Airport (IXC) - 45 km",
      "nearestRailway": "Chandigarh Junction (CDG) - 40 km",
      "roadConnectivity": "Scenic winding hill road from Panchkula"
    },
    "culturalHighlights": [
      "Tikkar Taal scenic boating and camping along water fringed by deodars",
      "Morni Fort 17th-century ramparts converted into a biodiversity nature park",
      "Trek to Karoh Peak (1,467m), the highest geographic summit in Haryana"
    ],
    "sourceUrl": "https://haryanatourism.gov.in",
    "attractions": [
      {
        "id": "mrn-tikkar-taal",
        "name": "Tikkar Taal Twin Lakes",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Tranquil natural lake separated by a hillock where boating, canoeing, and peaceful lakeside picnics take place beneath Shivalik hills.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 30.6974,
          "lng": 77.0864
        },
        "address": "Morni Hills, Panchkula, Haryana",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Paddle boats and kayaks are available for rent from Haryana Tourism"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mrn-1",
        "name": "Mountain Quail Resort & Lake Diner",
        "mealType": "Lunch",
        "cuisine": "Haryanvi & North Indian",
        "famousFor": "Bajra Khichdi with country ghee and jaggery, Paneer Tikka, and fresh Masala Chai",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 30.695,
          "lng": 77.085
        }
      }
    ]
  },
  {
    "id": "pinjore-gardens",
    "name": "Pinjore Yadavindra Mughal Gardens",
    "normalizedName": "pinjore yadavindra mugal gardens",
    "state": "Haryana",
    "isUnionTerritory": false,
    "district": "Panchkula",
    "category": "Historical Monuments & Heritage",
    "tagline": "The 17th-Century Terraced Marvel - Seven descending water terraces & Mughal pavilions",
    "description": "Magnificent 17th-century terraced Mughal garden built by architect Fidai Khan under Emperor Aurangzeb, restored by the Patiala rulers. Features seven descending terraces, flowing canal channels, arched fountains, and royal pavilions against the foothills of the Himalayas.",
    "coordinates": {
      "lat": 30.7963,
      "lng": 76.9142
    },
    "bestMonths": "October to April",
    "idealDays": 1,
    "popularInterests": [
      "History",
      "Architecture",
      "Gardens",
      "Fountains"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Pinjore",
      "Pinjore Gardens",
      "Yadavindra Gardens",
      "Pinjore Heritage Garden",
      "Mughal Terraced Gardens"
    ],
    "transportInfo": {
      "nearestAirport": "Chandigarh International Airport (IXC) - 25 km",
      "nearestRailway": "Kalka Railway Station (KLK) - 5 km",
      "roadConnectivity": "Located directly off NH 5 Himalayan Expressway"
    },
    "culturalHighlights": [
      "Seven-tiered terrace layout where water cascades down through fountains and stone aqueducts",
      "Shish Mahal palace of glass and Rang Mahal painted pavilion",
      "Annual Mango Festival and Baisakhi fair celebrated across the lit terraces"
    ],
    "sourceUrl": "https://haryanatourism.gov.in",
    "attractions": [
      {
        "id": "pin-gardens",
        "name": "Yadavindra Gardens & Shish Mahal",
        "category": "History",
        "timeSlot": "Evening",
        "description": "Spectacular heritage Mughal garden illuminated at dusk with hundreds of dancing fountains and floodlit royal arches.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 30.7963,
          "lng": 76.9142
        },
        "address": "Ambala-Shimla Highway, Pinjore, Haryana",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Visit in late afternoon to enjoy the fountains operating and stay for the night illumination"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-pin-1",
        "name": "Budanpur Dhaba & Jal Mahal Cafe",
        "mealType": "Dinner",
        "cuisine": "Punjabi & Haryanvi",
        "famousFor": "Tandoori Stuffed Kulcha, Chana Bhatura, and Kheer with crushed pistachios",
        "estimatedCostPerPersonInr": 180,
        "coordinates": {
          "lat": 30.798,
          "lng": 76.915
        }
      }
    ]
  },
  {
    "id": "kalimpong",
    "name": "Kalimpong Hill Retreat",
    "normalizedName": "kalimpong hill retreat",
    "state": "West Bengal",
    "isUnionTerritory": false,
    "district": "Kalimpong",
    "category": "Hill Stations & Nature",
    "tagline": "The Orchid Sanctuary - Deolo Hill Kanchenjunga vistas, colonial cottages & Tibetan monasteries",
    "description": "Picturesque hill station at 1,250m overlooking the deep Teesta River valley. Celebrated for exotic flower and orchid nurseries producing 80% of India's gladioli, historic Buddhist monasteries, and British colonial stone mansions like Morgan House.",
    "coordinates": {
      "lat": 27.0594,
      "lng": 88.4695
    },
    "bestMonths": "March to May, September to December",
    "idealDays": 2,
    "popularInterests": [
      "Nature",
      "Himalayas",
      "Monasteries",
      "Flora"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kalimpong",
      "Kalimpong Hills",
      "Deolo Hill",
      "Morgan House",
      "Durpin Dara Monastery",
      "Teesta Valley"
    ],
    "transportInfo": {
      "nearestAirport": "Bagdogra International Airport (IXB) - 75 km",
      "nearestRailway": "New Jalpaiguri Railway Station (NJP) - 70 km",
      "roadConnectivity": "Scenic drive from Siliguri along the Teesta River gorge via NH 10"
    },
    "culturalHighlights": [
      "Deolo Hill summit (1,704m) providing breathtaking panoramas of Mount Kanchenjunga",
      "Zang Dhok Palri Phodang monastery consecrated by the Dalai Lama in 1976",
      "Historic trade route stopover between Tibet, Sikkim, and British India"
    ],
    "sourceUrl": "https://wbtourism.gov.in",
    "attractions": [
      {
        "id": "klp-deolo",
        "name": "Deolo Hill Park & Viewpoint",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Highest peak within Kalimpong town featuring beautifully landscaped terraced gardens and 360-degree vistas of the snow-peaked Himalayas and Teesta river.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 27.085,
          "lng": 88.485
        },
        "address": "Deolo, Kalimpong, West Bengal",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Paragliding flights are available right off Deolo Hill summit"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-klp-1",
        "name": "Art Cafe & King Thai Kalimpong",
        "mealType": "Lunch",
        "cuisine": "Tibetan & Himalayan Fusion",
        "famousFor": "Kalimpong Cheese, steaming Tingmo with Shapta beef/paneer, and Darjeeling First Flush tea",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 27.06,
          "lng": 88.47
        }
      }
    ]
  },
  {
    "id": "santiniketan",
    "name": "Santiniketan Tagore Heritage",
    "normalizedName": "santiniketan tagore heritage",
    "state": "West Bengal",
    "isUnionTerritory": false,
    "district": "Birbhum",
    "category": "Culture & City",
    "tagline": "Abode of Peace - Rabindranath Tagore's Visva-Bharati UNESCO University & open-air ashram",
    "description": "Inscribed as a UNESCO World Heritage site, Santiniketan is the historic open-air university town founded by Nobel Laureate Rabindranath Tagore in 1901. Celebrated for classes held under banyan canopies, Baul mystic folk music, and terracotta Dokra handicrafts.",
    "coordinates": {
      "lat": 23.6797,
      "lng": 87.6976
    },
    "bestMonths": "October to March (Poush Mela in Dec, Basanta Utsav in March)",
    "idealDays": 2,
    "popularInterests": [
      "Culture",
      "Literature",
      "Art",
      "Music",
      "Handicrafts"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Shantiniketan",
      "Santiniketan",
      "Rabindranath Tagore University",
      "Visva Bharati UNESCO",
      "Kala Bhavana",
      "Bolpur"
    ],
    "transportInfo": {
      "nearestAirport": "Kazi Nazrul Islam Airport Durgapur (RGH) - 60 km / Kolkata (CCU) - 165 km",
      "nearestRailway": "Bolpur Santiniketan Railway Station (BHP) - 3 km",
      "roadConnectivity": "Connected via 4-lane NH 114 from Kolkata in 3.5 hours"
    },
    "culturalHighlights": [
      "Uttarayan Complex housing Rabindra Bhavana museum, Tagore's Nobel medal replica and cars",
      "Kala Bhavana (Institute of Fine Arts) with black-and-white murals by Ramkinkar Baij and Nandalal Bose",
      "Khowai Shanibarer Haat (Saturday artisan open market) along the red soil banks with live Baul singers"
    ],
    "sourceUrl": "https://wbtourism.gov.in",
    "attractions": [
      {
        "id": "stn-ashram",
        "name": "Visva-Bharati Ashram & Uttarayan Complex",
        "category": "History",
        "timeSlot": "Morning",
        "description": "Pioneering open-air institutional campus featuring prayer hall Upasana Griha made of Belgian stained glass and five architecturally distinct houses of Tagore.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 23.6797,
          "lng": 87.6976
        },
        "address": "Visva-Bharati Campus, Bolpur Santiniketan, West Bengal",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Campus museum is closed on Wednesdays (the traditional day of contemplation)"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-stn-1",
        "name": "Ghare Baire & Kasahara Cafe",
        "mealType": "Lunch",
        "cuisine": "Authentic Bengali Zamindari Thali",
        "famousFor": "Posto Bora (poppy seed fritters), Ilish Bhapa (steamed hilsa), and Nolen Gur ice cream",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 23.682,
          "lng": 78.7
        }
      }
    ]
  },
  {
    "id": "digha",
    "name": "Digha Coastal Beach",
    "normalizedName": "digha coastal beach",
    "state": "West Bengal",
    "isUnionTerritory": false,
    "district": "Purba Medinipur",
    "category": "Beaches & Coastal",
    "tagline": "Bengal's Favorite Seaside - Shallow flat beaches, casuarina woods & Marine Aquarium",
    "description": "West Bengal's premier coastal resort along the northern Bay of Bengal. Characterized by wide, firm sand beaches with gentle waves safe for swimming, casuarina plantations, fresh coastal fish markets, and the Marine Aquarium and Regional Centre.",
    "coordinates": {
      "lat": 21.6266,
      "lng": 87.5074
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "Beaches",
      "Seafood",
      "Sunsets",
      "Family"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Digha",
      "New Digha",
      "Old Digha",
      "Marine Aquarium Digha",
      "Udaipur Beach Bengal"
    ],
    "transportInfo": {
      "nearestAirport": "Kolkata Netaji Subhas Chandra Bose International Airport (CCU) - 190 km",
      "nearestRailway": "Digha Railway Station (DGHA) with direct express trains from Howrah",
      "roadConnectivity": "4-lane expressway from Kolkata (180 km) in 4 hours"
    },
    "culturalHighlights": [
      "New Digha beach promenade with paved illuminated walking track along seaside",
      "Marine Aquarium displaying rare sea anemones, rays, and coastal flora",
      "Fresh fish morning auctions directly from fishing trawlers at Mohana beach"
    ],
    "sourceUrl": "https://wbtourism.gov.in",
    "attractions": [
      {
        "id": "dgh-beach",
        "name": "New Digha Beach & Marine Aquarium",
        "category": "Beaches",
        "timeSlot": "Morning",
        "description": "Expansive beach safe for swimming, followed by an educational tour of Asia's largest marine research aquarium.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 21.6266,
          "lng": 87.5074
        },
        "address": "New Digha, Purba Medinipur, West Bengal",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Visit Digha Mohana at sunrise to photograph dozens of colorful wooden fishing boats returning"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-dgh-1",
        "name": "Hotel Sea Hawk & Purbasha Seafood Stall",
        "mealType": "Dinner",
        "cuisine": "Bengali Coastal Seafood",
        "famousFor": "Fried Pomfret, Jumbo Prawn Malai Curry, and Crab Masala with steamed rice",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 21.628,
          "lng": 87.51
        }
      }
    ]
  },
  {
    "id": "chilika-lake",
    "name": "Chilika Lake & Bird Sanctuary",
    "normalizedName": "chilika lake & bird sanctuary",
    "state": "Odisha",
    "isUnionTerritory": false,
    "district": "Puri, Khordha & Ganjam",
    "category": "Wildlife & National Parks",
    "tagline": "Asia's Largest Brackish Water Lagoon - Endangered Irrawaddy dolphins & migratory avian paradise",
    "description": "Asia's largest brackish water lagoon designated as India's first Ramsar wetland of international importance. Home to endangered Irrawaddy dolphins at Satapada, over a million migratory birds from Siberia and Lake Baikal, and the island temple of Goddess Kalijai.",
    "coordinates": {
      "lat": 19.6983,
      "lng": 85.3211
    },
    "bestMonths": "November to March",
    "idealDays": 2,
    "popularInterests": [
      "Wildlife",
      "Birds",
      "Boating",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Chilka Lake",
      "Chilika",
      "Satapada",
      "Barkul",
      "Kalijai Temple Island",
      "Irrawaddy Dolphins Odisha"
    ],
    "transportInfo": {
      "nearestAirport": "Bhubaneswar Biju Patnaik Airport (BBI) - 100 km",
      "nearestRailway": "Balugaon Railway Station (BALU) - 5 km from Barkul / Puri (50 km from Satapada)",
      "roadConnectivity": "NH 16 connects Barkul and Balugaon directly from Bhubaneswar"
    },
    "culturalHighlights": [
      "Satapada boat cruise into the sea-mouth to spot playful Irrawaddy dolphins surfacing",
      "Nalabana Bird Sanctuary island sheltering flamingos, pelicans, and bar-headed geese in winter",
      "Kalijai Temple on a rocky island legendarily revered by local fishermen"
    ],
    "sourceUrl": "https://odishatourism.gov.in",
    "attractions": [
      {
        "id": "chk-satapada",
        "name": "Satapada Dolphin Watching Boat Safari",
        "category": "Wildlife",
        "timeSlot": "Morning",
        "description": "Motorized boat expedition across the open lagoon channel where rare freshwater-tolerant Irrawaddy dolphins are viewed in their natural habitat.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 1200,
        "coordinates": {
          "lat": 19.669,
          "lng": 85.438
        },
        "address": "Satapada Jetty, Puri District, Odisha",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Book official OTDC boats from the government jetty to ensure safety vests and fair rates"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-chk-1",
        "name": "OTDC Panthanivas & Chilika Crab Dhabas",
        "mealType": "Lunch",
        "cuisine": "Odia Coastal Seafood",
        "famousFor": "Giant Chilika Crab Curry, Tiger Prawn Fry, and steamed rice with Dalma",
        "estimatedCostPerPersonInr": 350,
        "coordinates": {
          "lat": 19.67,
          "lng": 85.44
        }
      }
    ]
  },
  {
    "id": "simlipal",
    "name": "Simlipal National Park & Tiger Reserve",
    "normalizedName": "simlipal national park & tiger reserve",
    "state": "Odisha",
    "isUnionTerritory": false,
    "district": "Mayurbhanj",
    "category": "Wildlife & National Parks",
    "tagline": "The Red Silk Cotton Wilderness - Barehipani Falls, melanistic black tigers & sal forests",
    "description": "Sprawling UNESCO Biosphere Reserve in northern Odisha named after the vibrant red 'Simul' (silk cotton) trees. Famed for holding the world's only wild population of rare melanistic (black) tigers, Asian elephants, and Barehipani Falls (399m), one of India's highest waterfalls.",
    "coordinates": {
      "lat": 21.8219,
      "lng": 86.3478
    },
    "bestMonths": "November to June",
    "idealDays": 3,
    "popularInterests": [
      "Wildlife",
      "Waterfalls",
      "Adventure",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Similipal",
      "Simlipal Tiger Reserve",
      "Barehipani Falls",
      "Joranda Falls",
      "Baripada"
    ],
    "transportInfo": {
      "nearestAirport": "Kolkata Airport (CCU) - 240 km / Bhubaneswar (BBI) - 270 km",
      "nearestRailway": "Balasore Railway Station (BLS) - 75 km / Baripada",
      "roadConnectivity": "Entry via Pithabata gate (near Baripada) or Jashipur gate via NH 49"
    },
    "culturalHighlights": [
      "Two-tiered Barehipani Falls dropping 399 meters over Meghasani cliff",
      "Unique melanistic Bengal tigers with broad merged black stripes",
      "Joranda Falls cascading 181 meters in a single sheer drop into dense canopy"
    ],
    "sourceUrl": "https://odishatourism.gov.in",
    "attractions": [
      {
        "id": "sml-safari",
        "name": "Simlipal Core Jungle & Waterfall Expedition",
        "category": "Wildlife",
        "timeSlot": "Morning",
        "description": "Full-day 4x4 forest safari traversing sal tree ridges, crossing jungle streams, and visiting the breathtaking Barehipani and Joranda viewpoints.",
        "visitDurationMinutes": 300,
        "estimatedCostInr": 1500,
        "coordinates": {
          "lat": 21.8219,
          "lng": 86.3478
        },
        "address": "Mayurbhanj District, Odisha",
        "imageUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Only authorized high-ground-clearance 4WD vehicles permitted inside the reserve"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-sml-1",
        "name": "Lulung Eco-Retreat & Mayurbhanj Royal Kitchen",
        "mealType": "Dinner",
        "cuisine": "Odia Tribal & Mayurbhanj Royal",
        "famousFor": "Mudhi Mansa (puffed rice with slow-cooked mutton gravy) and Chenna Poda dessert",
        "estimatedCostPerPersonInr": 280,
        "coordinates": {
          "lat": 21.9,
          "lng": 86.4
        }
      }
    ]
  },
  {
    "id": "vaishali",
    "name": "Vaishali Heritage Site",
    "normalizedName": "vaishali heritage site",
    "state": "Bihar",
    "isUnionTerritory": false,
    "district": "Vaishali",
    "category": "Historical Monuments & Heritage",
    "tagline": "Birthplace of Lord Mahavira and world's earliest known democratic republic",
    "description": "Ancient city renowned for the Ashokan Pillar, Buddha Relic Stupa, Abhishek Pushkarni coronation tank, and sacred Kundalpur.",
    "coordinates": {
      "lat": 25.9863,
      "lng": 85.1278
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Buddhism",
      "Jainism",
      "History",
      "Archaeology"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Vaishali",
      "Vaisali",
      "Ashokan Pillar Vaishali",
      "Kundalpur"
    ],
    "transportInfo": {
      "nearestAirport": "Jay Prakash Narayan Airport Patna (PAT) - 55 km",
      "nearestRailway": "Hajipur Junction (HJP) - 35 km",
      "roadConnectivity": "Connected via NH 722 from Patna and Muzaffarpur"
    },
    "culturalHighlights": [
      "Ashokan Lion Pillar carved out of a single monolithic red sandstone block",
      "Buddha Relic Stupa where one-eighth of Lord Buddha's sacred ashes were enshrined",
      "Vishwa Shanti Stupa erected by the Nipponzan Myohoji sect"
    ],
    "sourceUrl": "https://tourism.bihar.gov.in",
    "attractions": [
      {
        "id": "vsh-pillar",
        "name": "Ashokan Pillar & Relic Stupa",
        "category": "Archaeology",
        "timeSlot": "Morning",
        "description": "Intact polished sandstone pillar topped by a lifelike lion facing north towards Buddha's final journey, beside an ancient brick stupa.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 25.9925,
          "lng": 85.1311
        },
        "address": "Kolhua, Vaishali, Bihar",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Visit Kolhua early morning for serene reflection and gentle lighting"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-vsh-1",
        "name": "Amrapali Bihar Tourism Restaurant",
        "mealType": "Lunch",
        "cuisine": "Bihari Traditional",
        "famousFor": "Authentic Litti Chokha with sattu, ghee, and roasted brinjal mash",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 25.9863,
          "lng": 85.1278
        }
      }
    ]
  },
  {
    "id": "valmiki-national-park",
    "name": "Valmiki National Park & Tiger Reserve",
    "normalizedName": "valmiki national park & tiger reserve",
    "state": "Bihar",
    "isUnionTerritory": false,
    "district": "West Champaran",
    "category": "National Parks & Wildlife",
    "tagline": "Bihar's premier tiger haven nestled on the Indo-Nepal Himalayan foothills",
    "description": "Thriving biodiversity haven where the Gandak River meanders through Terai sal forests harboring Bengal tigers, Indian rhinoceros, leopards, and flying squirrels.",
    "coordinates": {
      "lat": 27.3167,
      "lng": 84.1833
    },
    "bestMonths": "November to April",
    "idealDays": 3,
    "popularInterests": [
      "Wildlife Safari",
      "Bird Watching",
      "Jungle Trekking",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Valmiki Tiger Reserve",
      "Valmikinagar",
      "West Champaran Sanctuary"
    ],
    "transportInfo": {
      "nearestAirport": "Gorakhpur Airport (GOP) - 130 km",
      "nearestRailway": "Valmikinagar Road (VKNR) or Bagaha (BUG) - 45 km",
      "roadConnectivity": "Accessible via Bettiah and Bagaha through State Highway"
    },
    "culturalHighlights": [
      "Triveni confluence and historic Valmiki Ashram of Ramayana fame",
      "Eco-tourism huts and canopy walks through pristine Sal woodlands"
    ],
    "sourceUrl": "https://tourism.bihar.gov.in",
    "attractions": [
      {
        "id": "val-safari",
        "name": "Valmiki Jungle Safari & Gandak River Watch",
        "category": "Wildlife",
        "timeSlot": "Morning",
        "description": "Open gypsy safari through core Sal forests offering sightings of wild elephants, barking deer, chital, and vibrant avifauna.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 1200,
        "coordinates": {
          "lat": 27.3167,
          "lng": 84.1833
        },
        "address": "Valmikinagar Forest Range, West Champaran, Bihar",
        "imageUrl": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Advance booking with forest department is recommended during winter weekends"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-val-1",
        "name": "Valmiki Eco-Tourism Canteen",
        "mealType": "Lunch",
        "cuisine": "North Indian & Local",
        "famousFor": "Freshly prepared Champaran Handi mutton and rustic dal-bhat",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 27.3167,
          "lng": 84.1833
        }
      }
    ]
  },
  {
    "id": "manas-national-park",
    "name": "Manas National Park",
    "normalizedName": "manas national park",
    "state": "Assam",
    "isUnionTerritory": false,
    "district": "Baksa",
    "category": "National Parks & Wildlife",
    "tagline": "UNESCO World Heritage biosphere at the foothills of the Bhutan Himalayas",
    "description": "Spectacular wilderness home to rare and endangered endemic wildlife such as the Assam roofed turtle, hispid hare, golden langur, and pygmy hog.",
    "coordinates": {
      "lat": 26.6594,
      "lng": 90.9997
    },
    "bestMonths": "October to April",
    "idealDays": 3,
    "popularInterests": [
      "Wildlife",
      "Bird Watching",
      "River Rafting",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Manas",
      "Manas Tiger Reserve",
      "Manas Biosphere"
    ],
    "transportInfo": {
      "nearestAirport": "Lokpriya Gopinath Bordoloi Guwahati Airport (GAU) - 145 km",
      "nearestRailway": "Barpeta Road Railway Station (BPRD) - 32 km",
      "roadConnectivity": "Directly accessible via NH 27 and Barpeta Road"
    },
    "culturalHighlights": [
      "Bodo tribal village tours and traditional folk dance presentations",
      "Scenic tea garden walks along the Bhutan border foothills"
    ],
    "sourceUrl": "https://tourism.assam.gov.in",
    "attractions": [
      {
        "id": "mns-safari",
        "name": "Manas Core Wildlife Safari",
        "category": "Wildlife",
        "timeSlot": "Morning",
        "description": "Jeep safari across Bansbari range crossing elephant corridors, scenic grassland trails, and the azure Manas River.",
        "visitDurationMinutes": 210,
        "estimatedCostInr": 1500,
        "coordinates": {
          "lat": 26.6594,
          "lng": 90.9997
        },
        "address": "Bansbari Range, Manas, Assam",
        "imageUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Opt for both early morning and late afternoon safaris for optimal cat sightings"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mns-1",
        "name": "Musa Jungle Retreat Dining",
        "mealType": "Dinner",
        "cuisine": "Assamese & Bodo Cuisine",
        "famousFor": "Authentic Oma Bedor (Bodo pork/fish preparation) and bamboo shoot curry",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 26.655,
          "lng": 91.002
        }
      }
    ]
  },
  {
    "id": "sivasagar",
    "name": "Sivasagar Ahom Heritage",
    "normalizedName": "sivasagar ahom heritage",
    "state": "Assam",
    "isUnionTerritory": false,
    "district": "Sivasagar",
    "category": "Historical Monuments & Heritage",
    "tagline": "The golden capital of the six-century Ahom Dynasty",
    "description": "Historical treasure trove featuring Rang Ghar (Asia's oldest amphitheatre), Talatal Ghar multi-storied underground royal palace, and the massive Sivasagar Borpukhuri tank.",
    "coordinates": {
      "lat": 26.9826,
      "lng": 94.6425
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Ahom History",
      "Architecture",
      "Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Sivasagar",
      "Sibsagar",
      "Rang Ghar",
      "Talatal Ghar"
    ],
    "transportInfo": {
      "nearestAirport": "Jorhat Airport (JRH) - 60 km; Dibrugarh (DIB) - 80 km",
      "nearestRailway": "Simaluguri Junction (SLGR) - 16 km",
      "roadConnectivity": "Located on NH 715 connecting Jorhat and Dibrugarh"
    },
    "culturalHighlights": [
      "Rang Ghar - the 18th-century two-storied royal pavilion for bull fights and buffalo bouts",
      "Siva Dol - one of the tallest Shiva temple shikharas in India towering over Borpukhuri"
    ],
    "sourceUrl": "https://tourism.assam.gov.in",
    "attractions": [
      {
        "id": "svg-rangghar",
        "name": "Rang Ghar & Talatal Ghar Complex",
        "category": "Heritage",
        "timeSlot": "Morning",
        "description": "Astonishing architectural feat of the Ahom Kingdom constructed with indigenous duck egg and sticky rice mortar.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 25,
        "coordinates": {
          "lat": 26.9634,
          "lng": 94.6231
        },
        "address": "Rongpur, Sivasagar, Assam",
        "imageUrl": "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Walk up the outer stairs to view the roof shaped like an inverted Ahom longboat"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-svg-1",
        "name": "Heritage Ahom Delicacies",
        "mealType": "Lunch",
        "cuisine": "Traditional Assamese",
        "famousFor": "Khar, duck curry with ash gourd, and pitika with Joha rice",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 26.9826,
          "lng": 94.6425
        }
      }
    ]
  },
  {
    "id": "netarhat",
    "name": "Netarhat Queen of Chotanagpur",
    "normalizedName": "netarhat queen of chotanagpur",
    "state": "Jharkhand",
    "isUnionTerritory": false,
    "district": "Latehar",
    "category": "Hill Stations & Scenic Viewpoints",
    "tagline": "Serene plateau clothed in pine groves, cascading waterfalls, and fiery sunsets",
    "description": "Pristine hill station perched at 3,700 feet on the Pat region, renowned for its dramatic Magnolia sunset point, Koel view point, and Upper Ghaghri waterfalls.",
    "coordinates": {
      "lat": 23.4833,
      "lng": 84.2667
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "Sunsets",
      "Nature Walks",
      "Waterfalls",
      "Tribal Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Netarhat",
      "Queen of Chotanagpur",
      "Magnolia Point Latehar"
    ],
    "transportInfo": {
      "nearestAirport": "Birsa Munda Airport Ranchi (IXR) - 156 km",
      "nearestRailway": "Lohardaga Railway Station - 85 km; Ranchi Junction - 150 km",
      "roadConnectivity": "Picturesque ghat road from Ranchi via Lohardaga"
    },
    "culturalHighlights": [
      "Magnolia Sunset Point offering legendary vistas over forested ravines",
      "Pine forest walks and Lodh Falls (Jharkhand's highest waterfall) nearby"
    ],
    "sourceUrl": "https://tourism.jharkhand.gov.in",
    "attractions": [
      {
        "id": "nth-magnolia",
        "name": "Magnolia Sunset Point & Pine Forest",
        "category": "Scenic",
        "timeSlot": "Evening",
        "description": "Cliff-edge viewpoint overlooking rolling Chotanagpur valleys with breathtaking sunset panoramas.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 23.4833,
          "lng": 84.2667
        },
        "address": "Netarhat Plateau, Latehar, Jharkhand",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Arrive 45 minutes before sunset to witness shifting hues over the forested horizon"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-nth-1",
        "name": "Prabhat Vihar JTDC Dining",
        "mealType": "Dinner",
        "cuisine": "Jharkhand Local & North Indian",
        "famousFor": "Dhuska with ghugni, chilka roti, and hot seasonal vegetables",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 23.4833,
          "lng": 84.2667
        }
      }
    ]
  },
  {
    "id": "betla-national-park",
    "name": "Betla National Park & Palamu Forts",
    "normalizedName": "betla national park & palamu forts",
    "state": "Jharkhand",
    "isUnionTerritory": false,
    "district": "Latehar & Palamu",
    "category": "National Parks & Wildlife",
    "tagline": "One of India's earliest tiger project reserves guarded by 16th-century jungle citadels",
    "description": "Lush sal and bamboo sanctuary harbouring wild elephants, bison (gaur), sloth bears, and leopards, featuring the mysterious twin Palamu Forts hidden deep in the forest.",
    "coordinates": {
      "lat": 23.8833,
      "lng": 84.1833
    },
    "bestMonths": "November to April",
    "idealDays": 2,
    "popularInterests": [
      "Wildlife Safari",
      "Ancient Forts",
      "History",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Betla",
      "Palamu Tiger Reserve",
      "Palamau Forts"
    ],
    "transportInfo": {
      "nearestAirport": "Ranchi Airport (IXR) - 170 km",
      "nearestRailway": "Daltonganj Railway Station (DTO) - 25 km",
      "roadConnectivity": "Connected via NH 39 from Ranchi and Medininagar"
    },
    "culturalHighlights": [
      "Twin 16th-century Palamu Forts built by the Chero kings deep inside the forest",
      "Elephant-back and jeep safaris across lush sal tree canopies"
    ],
    "sourceUrl": "https://tourism.jharkhand.gov.in",
    "attractions": [
      {
        "id": "bet-safari",
        "name": "Betla Wildlife Safari & Ancient Fort Hike",
        "category": "Wildlife & Heritage",
        "timeSlot": "Morning",
        "description": "Jeep track crossing elephant waterholes followed by a walk up the ruins of the Old and New Palamu Forts.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 800,
        "coordinates": {
          "lat": 23.8833,
          "lng": 84.1833
        },
        "address": "Betla, Latehar District, Jharkhand",
        "imageUrl": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Forest department guide is mandatory for entering the historical fort area"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-bet-1",
        "name": "Van Vihar Tourist Complex",
        "mealType": "Lunch",
        "cuisine": "North Indian & Tribal",
        "famousFor": "Rural Thali with seasonal greens and hand-pounded village chutneys",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 23.8833,
          "lng": 84.1833
        }
      }
    ]
  },
  {
    "id": "barnawapara",
    "name": "Barnawapara Wildlife Sanctuary",
    "normalizedName": "barnawapara wildlife sanctuary",
    "state": "Chhattisgarh",
    "isUnionTerritory": false,
    "district": "Mahasamund",
    "category": "National Parks & Wildlife",
    "tagline": "Teak canopy oasis alive with leopards, flying squirrels, and Indian gaur",
    "description": "Peaceful wildlife reserve dominated by flat and undulating terrain crisscrossed by the Balamdehi and Jonk rivers, celebrated for high herbivore and leopard density.",
    "coordinates": {
      "lat": 21.4056,
      "lng": 82.4283
    },
    "bestMonths": "November to June",
    "idealDays": 2,
    "popularInterests": [
      "Wildlife",
      "Photography",
      "Bird Watching",
      "Eco-Tourism"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Barnawapara",
      "Barna Wildlife",
      "Mahasamund Reserve"
    ],
    "transportInfo": {
      "nearestAirport": "Swami Vivekananda Airport Raipur (RPR) - 100 km",
      "nearestRailway": "Mahasamund (MSMD) - 60 km; Raipur (R) - 100 km",
      "roadConnectivity": "Scenic drive from Raipur via Pithora on NH 53"
    },
    "culturalHighlights": [
      "Sirpur heritage site with Lakshmana Temple just 35 km away",
      "Traditional Baiga and Gond tribal handicraft displays"
    ],
    "sourceUrl": "https://www.chhattisgarhtourism.fullcreative.com",
    "attractions": [
      {
        "id": "bar-safari",
        "name": "Barnawapara Jeep Safari",
        "category": "Wildlife",
        "timeSlot": "Morning",
        "description": "Open top gypsy safari through teak and mixed deciduous forests with frequent sightings of chital herds, nilgai, and peacocks.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 1000,
        "coordinates": {
          "lat": 21.4056,
          "lng": 82.4283
        },
        "address": "Barnawapara, Mahasamund, Chhattisgarh",
        "imageUrl": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Spotting leopards is particularly high around water points during afternoon drives"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-bar-1",
        "name": "Hareli Eco Resort Dining",
        "mealType": "Lunch",
        "cuisine": "Chhattisgarhi Cuisine",
        "famousFor": "Chila, Faraa (steamed rice dumplings), and spicy tomato chutney",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 21.4056,
          "lng": 82.4283
        }
      }
    ]
  },
  {
    "id": "mainpat",
    "name": "Mainpat Shimla of Chhattisgarh",
    "normalizedName": "mainpat shimla of chhattisgarh",
    "state": "Chhattisgarh",
    "isUnionTerritory": false,
    "district": "Surguja",
    "category": "Hill Stations & Scenic Viewpoints",
    "tagline": "The Tibet of Chhattisgarh - Bouncing soils, Tibetan monasteries, and waterfalls",
    "description": "High-altitude tableland known for Tiger Point waterfall, Tibetan Buddhist settlement with Dhakpo Shedrupling Monastery, and the enigmatic bouncing bog of Jaljali.",
    "coordinates": {
      "lat": 22.8167,
      "lng": 83.2833
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Tibetan Culture",
      "Waterfalls",
      "Nature",
      "Geological Wonders"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Mainpat",
      "Shimla of Chhattisgarh",
      "Mini Tibet Surguja",
      "Jaljali"
    ],
    "transportInfo": {
      "nearestAirport": "Raipur Airport (RPR) - 360 km; Ranchi Airport (IXR) - 300 km",
      "nearestRailway": "Ambikapur Railway Station (ABKP) - 50 km",
      "roadConnectivity": "Well-maintained ghat road from Ambikapur"
    },
    "culturalHighlights": [
      "Dhakpo Monastery with monks chanting ancient Tibetan texts",
      "Jaljali bouncing ground where the earth flexes like a trampoline"
    ],
    "sourceUrl": "https://www.chhattisgarhtourism.fullcreative.com",
    "attractions": [
      {
        "id": "mai-tiger",
        "name": "Tiger Point Falls & Dhakpo Monastery",
        "category": "Scenic & Culture",
        "timeSlot": "Morning",
        "description": "Roaring waterfall cascading into a deep forested valley paired with visits to serene Buddhist prayer halls.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 22.8167,
          "lng": 83.2833
        },
        "address": "Mainpat Plateau, Surguja, Chhattisgarh",
        "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Walk on the bouncy peat soil at Jaljali for a unique geological surprise"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mai-1",
        "name": "Tibetan Camp Cafe",
        "mealType": "Lunch",
        "cuisine": "Tibetan & Chhattisgarhi",
        "famousFor": "Steaming momos, Thukpa soup, and local herbal tea",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 22.8167,
          "lng": 83.2833
        }
      }
    ]
  },
  {
    "id": "pelling",
    "name": "Pelling & Kanchenjunga Vistas",
    "normalizedName": "pelling & kanchenjunga vistas",
    "state": "Sikkim",
    "isUnionTerritory": false,
    "district": "West Sikkim",
    "category": "Hill Stations & Scenic Viewpoints",
    "tagline": "Unrivalled panoramas of Mount Kanchenjunga and sacred Himalayan monasteries",
    "description": "Breathtaking West Sikkim town featuring Pemayangtse Monastery, Rabdentse royal palace ruins, India's first glass skywalk at Chenrezig, and holy Khecheopalri Lake.",
    "coordinates": {
      "lat": 27.3167,
      "lng": 88.2333
    },
    "bestMonths": "October to May",
    "idealDays": 3,
    "popularInterests": [
      "Mountain Views",
      "Monasteries",
      "Glass Skywalk",
      "Trekking"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Pelling",
      "West Sikkim",
      "Pemayangtse",
      "Rabdentse"
    ],
    "transportInfo": {
      "nearestAirport": "Pakyong Airport (PYG) - 110 km; Bagdogra (IXB) - 140 km",
      "nearestRailway": "New Jalpaiguri (NJP) - 135 km",
      "roadConnectivity": "Connected via Geyzing through NH 510 from Siliguri or Gangtok"
    },
    "culturalHighlights": [
      "Pemayangtse Monastery housing the iconic wooden seven-tiered model of Zandogpalri",
      "Rabdentse Ruins walking trail winding through mystical moss-draped forest"
    ],
    "sourceUrl": "https://www.sikkimtourism.gov.in",
    "attractions": [
      {
        "id": "pel-skywalk",
        "name": "Pelling Glass Skywalk & Chenrezig Statue",
        "category": "Scenic",
        "timeSlot": "Morning",
        "description": "Thrilling transparent glass walkway perched high over mountain ridges leading to a monumental 137-foot Chenrezig statue.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 27.305,
          "lng": 88.241
        },
        "address": "Sanga Choeling, Pelling, West Sikkim",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Head there at sunrise for the clearest uninterrupted views of Kanchenjunga"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-pel-1",
        "name": "Lotus Bakery & Himalayan Cafe",
        "mealType": "Breakfast",
        "cuisine": "Sikkimese & Continental",
        "famousFor": "Fresh cinnamon rolls, Shaphalay (Tibetan meat pie), and butter tea",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 27.3167,
          "lng": 88.2333
        }
      }
    ]
  },
  {
    "id": "yumthang-valley",
    "name": "Yumthang Valley of Flowers & Lachung",
    "normalizedName": "yumthang valley of flowers & lachung",
    "state": "Sikkim",
    "isUnionTerritory": false,
    "district": "North Sikkim",
    "category": "Valleys & Scenic",
    "tagline": "Himalayan alpine paradise blanketed in wild rhododendrons and hot springs",
    "description": "Spectacular valley at 11,800 feet cradled by snow-capped peaks, alpine meadows grazed by yaks, hot sulfur springs, and gateway to Zero Point (Yumesamdong).",
    "coordinates": {
      "lat": 27.8286,
      "lng": 88.6958
    },
    "bestMonths": "March to June (Flowers) & Dec to Feb (Snow)",
    "idealDays": 3,
    "popularInterests": [
      "Alpine Flowers",
      "Snow Vistas",
      "Hot Springs",
      "High Altitudes"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Yumthang",
      "Lachung",
      "Sikkim Valley of Flowers",
      "Zero Point"
    ],
    "transportInfo": {
      "nearestAirport": "Pakyong (PYG) - 150 km; Bagdogra (IXB) - 190 km",
      "nearestRailway": "New Jalpaiguri (NJP) - 185 km",
      "roadConnectivity": "Reached by organized 4WD convoy via Chungthang and Lachung (Protected Area Permit mandatory)"
    },
    "culturalHighlights": [
      "Traditional wooden Lachung village architecture and warm Bhutia hospitality",
      "Shingba Rhododendron Sanctuary boasting over 40 species of blooming rhododendrons"
    ],
    "sourceUrl": "https://www.sikkimtourism.gov.in",
    "attractions": [
      {
        "id": "yum-valley",
        "name": "Yumthang Alpine Sanctuary & Hot Spring",
        "category": "Nature",
        "timeSlot": "Morning",
        "description": "Traverse rolling pastures cut by crystal mountain streams against towering glaciated peaks, culminating in natural thermal baths.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 27.8286,
          "lng": 88.6958
        },
        "address": "North Sikkim Highway, Lachung Range, Sikkim",
        "imageUrl": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Requires Inner Line Permit (ILP) arranged at least 24 hours prior from Gangtok"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-yum-1",
        "name": "Lachung Heritage Homestay",
        "mealType": "Dinner",
        "cuisine": "Bhutia Cuisine",
        "famousFor": "Warm Thukpa noodle broth, local fermented radish Gundruk soup, and Tingmo bread",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 27.7,
          "lng": 88.75
        }
      }
    ]
  },
  {
    "id": "bomdila",
    "name": "Bomdila Himalayan Town",
    "normalizedName": "bomdila himalayan town",
    "state": "Arunachal Pradesh",
    "isUnionTerritory": false,
    "district": "West Kameng",
    "category": "Hill Stations & Scenic Viewpoints",
    "tagline": "Apple orchards, Buddhist monasteries, and majestic views of Kangto and Gorichen peaks",
    "description": "Picturesque hill town at 8,000 feet serving as the cultural gateway to Tawang, renowned for the Gontse Gaden Rabgyel Lling monastery, craft centres, and apple orchards.",
    "coordinates": {
      "lat": 27.2644,
      "lng": 92.4278
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "Monasteries",
      "Mountain Passes",
      "Handicrafts",
      "Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Bomdila",
      "West Kameng",
      "Bomdila Monastery"
    ],
    "transportInfo": {
      "nearestAirport": "Tezpur Airport (TEZ) - 150 km; Guwahati (GAU) - 300 km",
      "nearestRailway": "Rangapara North (RPAN) - 145 km",
      "roadConnectivity": "Connected along the Trans-Arunachal Highway via Bhalukpong"
    },
    "culturalHighlights": [
      "Bomdila Monastery (Gentse Gaden Rabgyel Lling) with panoramic valley vistas",
      "Arunachal Craft Centre showcasing Monpa handwoven carpets and traditional masks"
    ],
    "sourceUrl": "https://www.arunachaltourism.com",
    "attractions": [
      {
        "id": "bom-monastery",
        "name": "Gontse Rabgyel Lling Monastery",
        "category": "Monastery",
        "timeSlot": "Morning",
        "description": "Seat of the reincarnated Guru Tulku Rinpoche featuring prayer wheels, ornate thangkas, and stunning Himalayan outlooks.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 27.2644,
          "lng": 92.4278
        },
        "address": "Upper Gompa, Bomdila, Arunachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Visit during morning puja for peaceful monastic brass horn echoes"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-bom-1",
        "name": "Zan Tibetan Diner",
        "mealType": "Lunch",
        "cuisine": "Monpa & Tibetan",
        "famousFor": "Authentic Zan porridge with roasted flour, steamed momos, and spicy churpi cheese stew",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 27.2644,
          "lng": 92.4278
        }
      }
    ]
  },
  {
    "id": "namdapha-national-park",
    "name": "Namdapha National Park & Biosphere",
    "normalizedName": "namdapha national park & biosphere",
    "state": "Arunachal Pradesh",
    "isUnionTerritory": false,
    "district": "Changlang",
    "category": "National Parks & Wildlife",
    "tagline": "India's easternmost rainforest wilderness sheltering four big feline species",
    "description": "Vast rainforest wilderness spanning elevations from 200m to 4,500m near the Myanmar border, famous for harboring tigers, leopards, snow leopards, and clouded leopards in one park.",
    "coordinates": {
      "lat": 27.4917,
      "lng": 96.3833
    },
    "bestMonths": "October to April",
    "idealDays": 4,
    "popularInterests": [
      "Trekking",
      "Rainforest Biodiversity",
      "Bird Watching",
      "Expeditions"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Namdapha",
      "Miao",
      "Changlang Wilderness",
      "Noa-Dihing"
    ],
    "transportInfo": {
      "nearestAirport": "Dibrugarh Airport (DIB) - 160 km",
      "nearestRailway": "Tinsukia Junction (TSK) - 140 km",
      "roadConnectivity": "Approached from Dibrugarh/Tinsukia via Margherita and Miao"
    },
    "culturalHighlights": [
      "Miao museum displaying indigenous Tangsa and Singpho tribal artifacts",
      "Crossing the turquoise Noa-Dihing River into primary evergreen rain forests"
    ],
    "sourceUrl": "https://www.arunachaltourism.com",
    "attractions": [
      {
        "id": "nam-trek",
        "name": "Deban Forest Trek & Noa-Dihing Crossing",
        "category": "Trekking & Wildlife",
        "timeSlot": "Morning",
        "description": "Intrepid multi-tier rainforest expedition through dense dipterocarp trees sheltering Hoolock gibbons and hornbills.",
        "visitDurationMinutes": 300,
        "estimatedCostInr": 500,
        "coordinates": {
          "lat": 27.4917,
          "lng": 96.3833
        },
        "address": "Deban, Namdapha, Changlang, Arunachal Pradesh",
        "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Mandatory ILP for Indian travellers and PAP for foreign nationals; hire a local guide in Miao"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-nam-1",
        "name": "Singpho Eco Lodge Kitchen",
        "mealType": "Dinner",
        "cuisine": "Singpho Traditional",
        "famousFor": "Fish steamed in bamboo hollows, organic indigenous sticky rice, and wild mountain herbs",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 27.49,
          "lng": 96.38
        }
      }
    ]
  },
  {
    "id": "ukhrul",
    "name": "Ukhrul & Shirui Peak",
    "normalizedName": "ukhrul & shirui peak",
    "state": "Manipur",
    "isUnionTerritory": false,
    "district": "Ukhrul",
    "category": "Hill Stations & Scenic Viewpoints",
    "tagline": "Home of the rare Shirui Lily and misty Tangkhul Naga highlands",
    "description": "Scenic hill haven famed for Shirui Kashong Peak where the unique endemic Shirui Lily blooms, mysterious Khangkhui limestone caves, and ancient megalithic sites.",
    "coordinates": {
      "lat": 25.1167,
      "lng": 94.3667
    },
    "bestMonths": "October to May (May-June for Shirui Lily bloom)",
    "idealDays": 2,
    "popularInterests": [
      "Shirui Lily Trekking",
      "Caves",
      "Tangkhul Culture",
      "Nature"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Ukhrul",
      "Shirui Kashong",
      "Tangkhul Hills",
      "Shirui Peak"
    ],
    "transportInfo": {
      "nearestAirport": "Bir Tikendrajit International Airport Imphal (IMF) - 84 km",
      "nearestRailway": "Dimapur (DMV) - 215 km; Jiribam - 290 km",
      "roadConnectivity": "Connected via NH 202 from Imphal city (3 hours drive)"
    },
    "culturalHighlights": [
      "Tangkhul Naga traditional woodcarvings, handloom textiles, and pottery",
      "Khangkhui Mangsor limestone cave shelter dating back to the Stone Age"
    ],
    "sourceUrl": "https://www.manipurtourism.gov.in",
    "attractions": [
      {
        "id": "ukh-shirui",
        "name": "Shirui Kashong Peak Trek",
        "category": "Trekking",
        "timeSlot": "Morning",
        "description": "Rewarding hike to 2,835 meters through rhododendron shrubs and high altitude meadows where the world's only Shirui Lily blooms in May.",
        "visitDurationMinutes": 240,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 25.1167,
          "lng": 94.3667
        },
        "address": "Shirui Village, Ukhrul District, Manipur",
        "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Trek starts early at Shirui foothills; wear sturdy boots for misty grassy slopes"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-ukh-1",
        "name": "Tangkhul Traditional Cafe",
        "mealType": "Lunch",
        "cuisine": "Manipuri Tribal",
        "famousFor": "Kangshoi vegetable stew, smoked pork with bamboo shoots, and fresh wild pepper relish",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 25.1167,
          "lng": 94.3667
        }
      }
    ]
  },
  {
    "id": "jowai",
    "name": "Jowai & Krang Shuri Waterfalls",
    "normalizedName": "jowai & krang shuri waterfalls",
    "state": "Meghalaya",
    "isUnionTerritory": false,
    "district": "West Jaintia Hills",
    "category": "Waterfalls & Nature",
    "tagline": "Aquamarine natural pools, sacred groves, and stone megaliths of Jaintia Hills",
    "description": "Picturesque heartland of the Pnar people famed for the azure plunge pool of Krang Shuri Falls, Nartiang monoliths (tallest megaliths in India), and Thadlaskein Lake.",
    "coordinates": {
      "lat": 25.45,
      "lng": 92.2
    },
    "bestMonths": "September to April",
    "idealDays": 2,
    "popularInterests": [
      "Waterfalls",
      "Swimming",
      "Megaliths",
      "Pnar Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Jowai",
      "Krang Suri",
      "Krang Shuri Falls",
      "Nartiang Monoliths"
    ],
    "transportInfo": {
      "nearestAirport": "Umroi Airport Shillong (SHL) - 75 km; Guwahati (GAU) - 160 km",
      "nearestRailway": "Guwahati Railway Station (GHY) - 155 km",
      "roadConnectivity": "Directly connected via NH 6 from Shillong (2 hours drive)"
    },
    "culturalHighlights": [
      "Nartiang Monolith Park displaying massive centuries-old commemorative stone pillars",
      "Pristine turquoise swimming lagoon sheltered by natural limestone at Krang Shuri"
    ],
    "sourceUrl": "https://www.meghalayatourism.in",
    "attractions": [
      {
        "id": "jow-krang",
        "name": "Krang Shuri Waterfalls & Pool",
        "category": "Waterfalls",
        "timeSlot": "Morning",
        "description": "Surreal crystal-clear copper-blue plunge pool fed by cascades, equipped with stone paths and safe swimming zones with life jackets.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 25.3125,
          "lng": 92.2683
        },
        "address": "Amlarem, West Jaintia Hills, Meghalaya",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Rent a life jacket for 50 INR to safely swim into the cool falls cave"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-jow-1",
        "name": "Pnar Heritage Hut",
        "mealType": "Lunch",
        "cuisine": "Khasi & Jaintia Traditional",
        "famousFor": "Jadoh (rice cooked with meat stock), Dohkhlieh pork salad, and tungrymbai chutney",
        "estimatedCostPerPersonInr": 220,
        "coordinates": {
          "lat": 25.45,
          "lng": 92.2
        }
      }
    ]
  },
  {
    "id": "vantawng-falls",
    "name": "Vantawng Falls & Thenzawl",
    "normalizedName": "vantawng falls & thenzawl",
    "state": "Mizoram",
    "isUnionTerritory": false,
    "district": "Serchhip",
    "category": "Waterfalls & Nature",
    "tagline": "Mizoram's highest two-tiered waterfall roaring amidst bamboo jungles",
    "description": "Spectacular 750-foot waterfall dropping amidst lush green hills near Thenzawl, Mizoram's premier handloom weaving capital, accompanied by Tuirihnau Falls and deer parks.",
    "coordinates": {
      "lat": 23.2833,
      "lng": 92.7667
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "Waterfalls",
      "Handloom Weaving",
      "Mizo Culture",
      "Photography"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Vantawng Khawhthla",
      "Thenzawl",
      "Serchhip Waterfall"
    ],
    "transportInfo": {
      "nearestAirport": "Lengpui Airport Aizawl (AJL) - 120 km",
      "nearestRailway": "Bairabi Railway Station (BHRB) - 220 km",
      "roadConnectivity": "Smooth scenic highway drive from Aizawl through Hmuifang"
    },
    "culturalHighlights": [
      "Thenzawl Handloom centre where women weave intricate traditional Puan textiles",
      "Vantawng viewing tower surrounded by thick bamboo and wild banana forests"
    ],
    "sourceUrl": "https://tourism.mizoram.gov.in",
    "attractions": [
      {
        "id": "van-falls",
        "name": "Vantawng Khawhthla Viewing Pavilion",
        "category": "Waterfalls",
        "timeSlot": "Morning",
        "description": "Observation pavilion offering safe, dramatic views of Mizoram's highest fall plunging down a steep rocky cliff surrounded by untouched rainforest.",
        "visitDurationMinutes": 90,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 23.2833,
          "lng": 92.7667
        },
        "address": "Near Thenzawl, Serchhip District, Mizoram",
        "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Combine with a visit to the traditional Thenzawl Golf Resort and weavers colony"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-van-1",
        "name": "Thenzawl Tourist Lodge Dining",
        "mealType": "Lunch",
        "cuisine": "Mizo Cuisine",
        "famousFor": "Bai (steamed vegetables with pork and fermented bamboo shoot) and warm herbal tea",
        "estimatedCostPerPersonInr": 200,
        "coordinates": {
          "lat": 23.2833,
          "lng": 92.7667
        }
      }
    ]
  },
  {
    "id": "khonoma",
    "name": "Khonoma Green Village",
    "normalizedName": "khonoma green village",
    "state": "Nagaland",
    "isUnionTerritory": false,
    "district": "Kohima",
    "category": "Eco-Tourism & Culture",
    "tagline": "Asia's first green eco-village famed for Angami warrior history and terraced hills",
    "description": "Historic 700-year-old Angami Naga village that successfully banned logging and hunting to establish the Khonoma Nature Conservation and Tragopan Sanctuary, surrounded by stepped paddy fields.",
    "coordinates": {
      "lat": 25.65,
      "lng": 94.0167
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "Eco-Tourism",
      "Angami Culture",
      "Blyth's Tragopan",
      "Terraced Farming"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Khonoma",
      "Asia's First Green Village",
      "Angami Eco Village"
    ],
    "transportInfo": {
      "nearestAirport": "Dimapur Airport (DMU) - 90 km",
      "nearestRailway": "Dimapur Railway Station (DMV) - 88 km",
      "roadConnectivity": "Short 20 km scenic mountain drive from Kohima city"
    },
    "culturalHighlights": [
      "Traditional fortresses (Khels) and ceremonial carved wooden gates",
      "Community-led sanctuary protecting the endangered Blyth's Tragopan bird"
    ],
    "sourceUrl": "https://tourism.nagaland.gov.in",
    "attractions": [
      {
        "id": "kho-village",
        "name": "Khonoma Village Heritage Walk & Terraced Fields",
        "category": "Culture & Eco",
        "timeSlot": "Morning",
        "description": "Guided walk through village morungs, stone monuments, and terraced paddy hills demonstrating sustainable alder-tree agroforestry.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 300,
        "coordinates": {
          "lat": 25.65,
          "lng": 94.0167
        },
        "address": "Khonoma Village, Kohima District, Nagaland",
        "imageUrl": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Hire a local village elder as guide to hear oral accounts of the 1879 British resistance"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kho-1",
        "name": "Baby's Homestay Traditional Kitchen",
        "mealType": "Lunch",
        "cuisine": "Naga Angami",
        "famousFor": "Galho (organic Naga rice risotto), smoked pork with axone, and garden fresh greens",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 25.65,
          "lng": 94.0167
        }
      }
    ]
  },
  {
    "id": "mon",
    "name": "Mon & Longwa Border Village",
    "normalizedName": "mon & longwa border village",
    "state": "Nagaland",
    "isUnionTerritory": false,
    "district": "Mon",
    "category": "Historical Monuments & Heritage",
    "tagline": "Realm of the Konyak headhunters and the village straddling India and Myanmar",
    "description": "Fascinating cultural frontier famous for tattooed Konyak elders, exquisite brass beadwork, and Longwa village where the international boundary bisects the Chief's house.",
    "coordinates": {
      "lat": 26.75,
      "lng": 95.1
    },
    "bestMonths": "October to April (Aoleang Festival in April)",
    "idealDays": 3,
    "popularInterests": [
      "Konyak Culture",
      "Border Heritage",
      "Handicrafts",
      "Anthropology"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Mon",
      "Longwa",
      "Konyak Land",
      "India Myanmar Border Village"
    ],
    "transportInfo": {
      "nearestAirport": "Jorhat (JRH) - 160 km; Dibrugarh (DIB) - 180 km",
      "nearestRailway": "Bhojo Railway Station (Assam) - 65 km",
      "roadConnectivity": "Reached via Sonari or Simaluguri in Assam into Mon"
    },
    "culturalHighlights": [
      "The Angh's (King's) Longhouse in Longwa where the kitchen sits in Myanmar and the bedroom in India",
      "Traditional Morung community halls adorned with woodcarvings and trophy horns"
    ],
    "sourceUrl": "https://tourism.nagaland.gov.in",
    "attractions": [
      {
        "id": "mon-longwa",
        "name": "Longwa Village & Angh's Palace",
        "category": "Heritage",
        "timeSlot": "Morning",
        "description": "Visit the residence of the hereditary hereditary Chief of Longwa ruling over 40 villages across both India and Myanmar without travel visas.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 26.85,
          "lng": 95.2
        },
        "address": "Longwa, Mon District, Nagaland",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Show respect when meeting elderly tattooed warriors; ask permission before photographs"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-mon-1",
        "name": "Konyak Heritage Dining",
        "mealType": "Dinner",
        "cuisine": "Konyak Naga",
        "famousFor": "Boiled mountain tubers, smoked meat with fiery Raja Mircha chili, and wild herb soup",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 26.75,
          "lng": 95.1
        }
      }
    ]
  },
  {
    "id": "neermahal",
    "name": "Neermahal Water Palace & Rudrasagar Lake",
    "normalizedName": "neermahal water palace & rudrasagar lake",
    "state": "Tripura",
    "isUnionTerritory": false,
    "district": "Sipahijala",
    "category": "Palaces & Forts",
    "tagline": "Eastern India's only floating water palace rising out of Rudrasagar Lake",
    "description": "Marvel of Hindu and Mughal architecture built in 1930 by King Bir Bikram Kishore Manikya in the middle of Rudrasagar Lake, featuring floodlit red-and-white pavilions.",
    "coordinates": {
      "lat": 23.4975,
      "lng": 91.3197
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Palaces",
      "Boating",
      "Architecture",
      "Bird Watching"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Neermahal",
      "Rudrasagar Lake Palace",
      "Melaghar Palace",
      "Twijilik"
    ],
    "transportInfo": {
      "nearestAirport": "Maharaja Bir Bikram Airport Agartala (IXA) - 55 km",
      "nearestRailway": "Agartala Railway Station (AGTL) - 50 km",
      "roadConnectivity": "Connected via NH 8 from Agartala towards Melaghar (1.5 hours)"
    },
    "culturalHighlights": [
      "Motorboat cruise across Rudrasagar wetland teeming with migratory winter waterfowl",
      "Neermahal water festival and royal boat racing held annually in August/September"
    ],
    "sourceUrl": "https://tripuratourism.gov.in",
    "attractions": [
      {
        "id": "nee-palace",
        "name": "Neermahal Palace Island Tour",
        "category": "Palaces",
        "timeSlot": "Morning",
        "description": "Speedboat ride to the 24-room marble and sandstone palace island featuring the Andar Mahal royal residence, open terraces, and garden courtyards.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 23.4975,
          "lng": 91.3197
        },
        "address": "Rudrasagar Lake, Melaghar, Tripura",
        "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Visit late afternoon for illuminated evening views reflecting across the water"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-nee-1",
        "name": "Sagarmahal Tourist Lodge Canteen",
        "mealType": "Lunch",
        "cuisine": "Tripuri & Bengali",
        "famousFor": "Fresh Rudrasagar lake fish curry, Mui Borok, and steamed Gobindobhog rice",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 23.4975,
          "lng": 91.3197
        }
      }
    ]
  },
  {
    "id": "jampui-hills",
    "name": "Jampui Hills & Orange Festival",
    "normalizedName": "jampui hills & orange festival",
    "state": "Tripura",
    "isUnionTerritory": false,
    "district": "North Tripura",
    "category": "Hill Stations & Scenic Viewpoints",
    "tagline": "The Eternal Hills of Spring - Orange orchards and panoramic Mizo hills",
    "description": "Highest hill range in Tripura at 3,000 feet, celebrated for lush orange plantations, pleasant temperate climate, Betlingshib peak, and vibrant Lushei Mizo village culture.",
    "coordinates": {
      "lat": 23.8833,
      "lng": 92.2833
    },
    "bestMonths": "October to March (Orange harvest in Nov-Dec)",
    "idealDays": 2,
    "popularInterests": [
      "Hill Station",
      "Orange Orchards",
      "Tribal Culture",
      "Sunsets"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Jampui Hills",
      "Jampui",
      "Betlingshib Peak",
      "Vanghmun"
    ],
    "transportInfo": {
      "nearestAirport": "Agartala Airport (IXA) - 200 km",
      "nearestRailway": "Dharmanagar Railway Station (DMR) - 70 km",
      "roadConnectivity": "Connected via Kanchanpur and Dharmanagar through mountain roads"
    },
    "culturalHighlights": [
      "Betlingshib (Tripura's highest peak at 3,200 ft) offering sweeping views into Mizoram and Bangladesh",
      "Lushei and Mizo community hospitality, neat wooden stilt homes, and orange harvest festivals"
    ],
    "sourceUrl": "https://tripuratourism.gov.in",
    "attractions": [
      {
        "id": "jam-viewpoint",
        "name": "Betlingshib Peak & Vanghmun Orchards",
        "category": "Scenic",
        "timeSlot": "Morning",
        "description": "Trek to the highest summit watchtower of Tripura overlooking emerald misty valleys and sweet orange groves.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 23.8833,
          "lng": 92.2833
        },
        "address": "Vanghmun, Jampui Hills, North Tripura",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Visit between November and December to witness valleys adorned in ripe bright orange fruits"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-jam-1",
        "name": "Eden Tourist Lodge Dining",
        "mealType": "Lunch",
        "cuisine": "Tripuri & Mizo Cuisine",
        "famousFor": "Steamed pork with bamboo shoots, fresh local vegetable stew, and aromatic mountain rice",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 23.8833,
          "lng": 92.2833
        }
      }
    ]
  },
  {
    "id": "pahalgam",
    "name": "Pahalgam & Betaab Valley",
    "normalizedName": "pahalgam & betaab valley",
    "state": "Jammu and Kashmir",
    "isUnionTerritory": true,
    "district": "Anantnag",
    "category": "Hill Stations & Scenic Viewpoints",
    "tagline": "The Valley of Shepherds - Lidder riverbanks, pine forests, and snowy peaks",
    "description": "Kashmir's idyllic paradise renowned for the rushing Lidder River, Betaab Valley, Aru Valley wildlife, Baisaran alpine meadow ('Mini Switzerland'), and starting point for the Amarnath Yatra.",
    "coordinates": {
      "lat": 34.0167,
      "lng": 75.3167
    },
    "bestMonths": "March to November (Snow in Dec-Feb)",
    "idealDays": 3,
    "popularInterests": [
      "Valley Views",
      "Trekking",
      "River Rafting",
      "Trout Fishing",
      "Horse Riding"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Pahalgam",
      "Betaab Valley",
      "Aru Valley",
      "Baisaran",
      "Valley of Shepherds"
    ],
    "transportInfo": {
      "nearestAirport": "Sheikh ul-Alam International Airport Srinagar (SXR) - 90 km",
      "nearestRailway": "Udhampur (UHP) - 170 km; Jammu Tawi (JAT) - 240 km",
      "roadConnectivity": "Scenic drive from Srinagar via NH 44 and Anantnag along apple orchards"
    },
    "culturalHighlights": [
      "Traditional Kashmiri wooden cottages and hand-woven walnut wood handicrafts",
      "Base camp for the annual holy pilgrimage to the sacred Shri Amarnath Cave"
    ],
    "sourceUrl": "https://www.jktourism.jk.gov.in",
    "attractions": [
      {
        "id": "pah-betaab",
        "name": "Betaab Valley & Aru Biosphere",
        "category": "Scenic",
        "timeSlot": "Morning",
        "description": "Picturesque valley named after the Bollywood film Betaab, surrounded by snow-dusted Himalayan peaks and crystal streams.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 34.025,
          "lng": 75.35
        },
        "address": "Betaab Valley, Pahalgam, Jammu and Kashmir",
        "imageUrl": "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Hire local pony or eco-cabs registered with the Pahalgam Development Authority"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-pah-1",
        "name": "Dana Pani & Trout Beat Pahalgam",
        "mealType": "Lunch",
        "cuisine": "Kashmiri Wazwan & Vegetarian",
        "famousFor": "Fresh Lidder river pan-fried brown trout, Rogan Josh, and saffron Kahwa",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 34.0167,
          "lng": 75.3167
        }
      }
    ]
  },
  {
    "id": "vaishno-devi",
    "name": "Shri Mata Vaishno Devi & Katra",
    "normalizedName": "shri mata vaishno devi & katra",
    "state": "Jammu and Kashmir",
    "isUnionTerritory": true,
    "district": "Reasi",
    "category": "Pilgrimage & Spiritual Sites",
    "tagline": "One of India's most sacred Shakti Peeth shrines atop Trikuta Mountain",
    "description": "Revered pilgrimage destination drawing millions of devotees to the holy cave shrine of Mata Vaishno Devi at 5,200 feet, approached via a scenic 13 km paved track from the base town of Katra.",
    "coordinates": {
      "lat": 33.0308,
      "lng": 74.949
    },
    "bestMonths": "Throughout the year (March to October best weather)",
    "idealDays": 2,
    "popularInterests": [
      "Pilgrimage",
      "Trekking",
      "Spiritual",
      "Cable Car"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Vaishno Devi",
      "Katra",
      "Mata Vaishno Devi Shrine",
      "Bhavan Katra"
    ],
    "transportInfo": {
      "nearestAirport": "Jammu Civil Enclave Airport (IXJ) - 50 km",
      "nearestRailway": "Shri Mata Vaishno Devi Katra Railway Station (SVDK) - In Katra",
      "roadConnectivity": "Four-lane highway connecting Jammu to Katra (NH 144)"
    },
    "culturalHighlights": [
      "The holy natural cave containing the three pindis representing Mahakali, Mahalakshmi, and Mahasaraswati",
      "Modern battery cars, ropeway between Bhavan and Bhairon Ghati, and scenic helicopter services"
    ],
    "sourceUrl": "https://www.maavaishnodevi.org",
    "attractions": [
      {
        "id": "vsh-bhawan",
        "name": "Holy Bhawan Shrine & Bhairon Ghati Ropeway",
        "category": "Pilgrimage",
        "timeSlot": "Morning",
        "description": "Sacred shrine sanctum sanctorum followed by the ropeway ascension to the high-perched Bhairon Temple for sweeping mountain vistas.",
        "visitDurationMinutes": 240,
        "estimatedCostInr": 100,
        "coordinates": {
          "lat": 33.0308,
          "lng": 74.949
        },
        "address": "Bhavan, Trikuta Hills, Katra, Jammu and Kashmir",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Register online or at Katra Yatra registration counter for the free RFID Yatra Card"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-vsh-1",
        "name": "Shrine Board Sanjichhat Bhojanalaya",
        "mealType": "Lunch",
        "cuisine": "Pure Vegetarian Satvik",
        "famousFor": "Hygienic rajma-chawal, poori-chana, and piping hot herbal tea prepared without onion or garlic",
        "estimatedCostPerPersonInr": 120,
        "coordinates": {
          "lat": 33.03,
          "lng": 74.95
        }
      }
    ]
  },
  {
    "id": "zanskar-valley",
    "name": "Zanskar Valley & Padum",
    "normalizedName": "zanskar valley & padum",
    "state": "Ladakh",
    "isUnionTerritory": true,
    "district": "Kargil",
    "category": "Adventure & High Altitude",
    "tagline": "The remote lost kingdom of glaciers, Phugtal cliff monastery, and frozen river trails",
    "description": "Rugged Trans-Himalayan high-altitude wilderness famed for Phuktal Monastery clinging to a sheer cliff cave, Drang-Drung Glacier, and the winter Chadar frozen river trek.",
    "coordinates": {
      "lat": 33.4667,
      "lng": 76.8833
    },
    "bestMonths": "June to September (Chadar trek in Jan-Feb)",
    "idealDays": 4,
    "popularInterests": [
      "High-Altitude Trekking",
      "Cliff Monasteries",
      "Glaciers",
      "Adventure"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Zanskar",
      "Padum",
      "Phugtal",
      "Phuktal Gompa",
      "Chadar"
    ],
    "transportInfo": {
      "nearestAirport": "Kushok Bakula Rimpochee Airport Leh (IXL) - 230 km via Shinku La / Nimmu-Padum road",
      "nearestRailway": "Jammu Tawi (JAT) - 520 km",
      "roadConnectivity": "Accessible via Kargil-Padum road or newly opened Darcha-Shinku La pass route"
    },
    "culturalHighlights": [
      "Phugtal Gompa constructed around a natural cave like a honeycomb on a limestone cliff",
      "Drang-Drung Glacier snaking like a colossal river of ice beside Pensi La pass"
    ],
    "sourceUrl": "https://tourism.ladakh.gov.in",
    "attractions": [
      {
        "id": "zan-phugtal",
        "name": "Phuktal Monastery Cliff Expedition",
        "category": "Monastery & Trekking",
        "timeSlot": "Morning",
        "description": "Hike along the turquoise Lungnak River gorge to the dramatic 12th-century cliffside monastery established by Gangsem Sherap Sampo.",
        "visitDurationMinutes": 240,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 33.2683,
          "lng": 77.1772
        },
        "address": "Lungnak Valley, Zanskar, Ladakh",
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Requires good physical fitness; acclimatize thoroughly before undertaking the canyon hike"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-zan-1",
        "name": "Padum Traditional Kitchen",
        "mealType": "Dinner",
        "cuisine": "Zanskari & Ladakhi",
        "famousFor": "Warm Skyu pasta stew, momos, yak butter tea, and roasted barley tsampa",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 33.4667,
          "lng": 76.8833
        }
      }
    ]
  },
  {
    "id": "kargil-dras",
    "name": "Kargil & Dras War Memorial",
    "normalizedName": "kargil & dras war memorial",
    "state": "Ladakh",
    "isUnionTerritory": true,
    "district": "Kargil",
    "category": "Historical Monuments & Heritage",
    "tagline": "Gateway to Ladakh and the world's second coldest inhabited place honoring Indian braves",
    "description": "Historic mountain hub on the Suru River featuring the Kargil War Memorial at Tololing foothills, ancient rock-carved Maitreya Buddha at Mulbekh, and dramatic high passes.",
    "coordinates": {
      "lat": 34.5539,
      "lng": 76.1349
    },
    "bestMonths": "May to October",
    "idealDays": 2,
    "popularInterests": [
      "War Memorial",
      "History",
      "Mountain Passes",
      "Suru Valley"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kargil",
      "Dras",
      "Kargil War Memorial",
      "Tololing",
      "Suru Valley"
    ],
    "transportInfo": {
      "nearestAirport": "Srinagar Airport (SXR) - 200 km; Leh Airport (IXL) - 215 km",
      "nearestRailway": "Jammu Tawi (JAT) - 470 km",
      "roadConnectivity": "Located on NH 1 connecting Srinagar and Leh via Zoji La pass"
    },
    "culturalHighlights": [
      "Kargil War Memorial with the Amar Jawan Jyoti and Manoj Pandey Gallery honoring Operation Vijay",
      "Mulbekh Chamba 9-meter rock-cut sculpture of standing Maitreya Buddha dating to the 8th century"
    ],
    "sourceUrl": "https://tourism.ladakh.gov.in",
    "attractions": [
      {
        "id": "kar-memorial",
        "name": "Kargil War Memorial & Tololing View",
        "category": "Memorial & History",
        "timeSlot": "Morning",
        "description": "Pink sandstone war memorial built by the Indian Army at the base of Tololing and Tiger Hill commemorating the heroes of 1999.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 50,
        "coordinates": {
          "lat": 34.4294,
          "lng": 75.7608
        },
        "address": "Dras, Kargil District, Ladakh",
        "imageUrl": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Carry government photo ID for security entry; pay homage at the brass memorial wall"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kar-1",
        "name": "Caravan Sarai Kargil",
        "mealType": "Lunch",
        "cuisine": "Balti & North Indian",
        "famousFor": "Apricot jam parathas, aromatic Kashmiri Gushtaba, and walnut kernels",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 34.5539,
          "lng": 76.1349
        }
      }
    ]
  },
  {
    "id": "neil-island",
    "name": "Neil Island (Shaheed Dweep)",
    "normalizedName": "neil island (shaheed dweep)",
    "state": "Andaman and Nicobar Islands",
    "isUnionTerritory": true,
    "district": "South Andaman",
    "category": "Beaches & Coastal",
    "tagline": "Serene vegetable bowl of the Andamans famed for natural coral bridges and sunset beaches",
    "description": "Tranquil coral island renowned for the Howrah Bridge natural limestone arch, pristine sunset at Laxmanpur Beach, turquoise waters of Bharatpur Beach, and gentle cycling roads.",
    "coordinates": {
      "lat": 11.8333,
      "lng": 93.05
    },
    "bestMonths": "October to May",
    "idealDays": 2,
    "popularInterests": [
      "Coral Reefs",
      "Snorkeling",
      "Glass Bottom Boats",
      "Sunsets",
      "Cycling"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Neil Island",
      "Shaheed Dweep",
      "Bharatpur Beach",
      "Laxmanpur Beach"
    ],
    "transportInfo": {
      "nearestAirport": "Veer Savarkar Airport Port Blair (IXZ) - 40 km via high-speed ferry",
      "nearestPort": "Neil Island Jetty - Regular private ferries (Makruzz, Nautika) & Govt ferries",
      "roadConnectivity": "Small flat island explored by rented scooters or bicycles"
    },
    "culturalHighlights": [
      "Natural limestone rock formation known locally as Howrah Bridge exposed during low tide",
      "Lush organic vegetable plantations that supply food across the Andaman archipelago"
    ],
    "sourceUrl": "https://www.andamantourism.gov.in",
    "attractions": [
      {
        "id": "nei-bridge",
        "name": "Natural Rock Bridge & Laxmanpur Beach",
        "category": "Coastal & Geology",
        "timeSlot": "Afternoon",
        "description": "Walk across live reef dead coral beds to witness the towering sea-carved natural arch, followed by stunning crimson sunsets on Laxmanpur sands.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 11.8333,
          "lng": 93.05
        },
        "address": "Laxmanpur, Shaheed Dweep, Andaman and Nicobar Islands",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Visit the Natural Bridge only during low tide hours; wear coral shoes"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-nei-1",
        "name": "Dugong Restaurant & Seafood Hut",
        "mealType": "Dinner",
        "cuisine": "Island Coastal Seafood",
        "famousFor": "Grilled red snapper with garlic butter, crab curry, and fresh coconut water",
        "estimatedCostPerPersonInr": 500,
        "coordinates": {
          "lat": 11.8333,
          "lng": 93.05
        }
      }
    ]
  },
  {
    "id": "kavaratti",
    "name": "Kavaratti Island",
    "normalizedName": "kavaratti island",
    "state": "Lakshadweep",
    "isUnionTerritory": true,
    "district": "Lakshadweep",
    "category": "Islands & Coastal",
    "tagline": "Administrative capital with shimmering lagoons, coral reefs, and Ujra Mosque",
    "description": "Picture-postcard coral atoll surrounded by a crystalline turquoise lagoon, known for its ornate wood-carved 17th-century Ujra Mosque, Marine Aquarium, and water sports.",
    "coordinates": {
      "lat": 10.5667,
      "lng": 72.6417
    },
    "bestMonths": "October to April",
    "idealDays": 3,
    "popularInterests": [
      "Scuba Diving",
      "Lagoon Kayaking",
      "Marine Life",
      "Coral Reefs"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Kavaratti",
      "Kavaratti Atoll",
      "Lakshadweep Capital"
    ],
    "transportInfo": {
      "nearestAirport": "Agatti Island Airport (AGX) - 54 km via inter-island helicopter or speedboat",
      "nearestPort": "Kavaratti Jetty - Passenger ships from Kochi (Cochin) operate regularly",
      "roadConnectivity": "Eco-friendly electric buggies and bicycles across the island"
    },
    "culturalHighlights": [
      "Ujra Mosque with ceiling intricately hand-carved out of driftwood",
      "Kavaratti Marine Aquarium exhibiting exotic clownfish, sea anemones, and live corals"
    ],
    "sourceUrl": "https://lakshadweep.gov.in",
    "attractions": [
      {
        "id": "kav-lagoon",
        "name": "Kavaratti Lagoon & Water Sports Centre",
        "category": "Water Sports",
        "timeSlot": "Morning",
        "description": "Glide over see-through emerald water on kayaks or participate in guided scuba dives to explore untouched coral atolls.",
        "visitDurationMinutes": 180,
        "estimatedCostInr": 1500,
        "coordinates": {
          "lat": 10.5667,
          "lng": 72.6417
        },
        "address": "Kavaratti Atoll, Lakshadweep",
        "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Entry requires e-permit from Lakshadweep Administration prior to travel"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-kav-1",
        "name": "Coral Cove Island Dining",
        "mealType": "Lunch",
        "cuisine": "Lakshadweep Island Cuisine",
        "famousFor": "Spicy tuna curry (Mas Min), coconut rice, and freshly tapped Neera drink",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 10.5667,
          "lng": 72.6417
        }
      }
    ]
  },
  {
    "id": "silvassa",
    "name": "Silvassa & Dadra Gardens",
    "normalizedName": "silvassa & dadra gardens",
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "isUnionTerritory": true,
    "district": "Dadra and Nagar Haveli",
    "category": "Nature & Cultural",
    "tagline": "Portuguese heritage, Warli tribal art, and tranquil lakeside gardens",
    "description": "Lush capital of Dadra and Nagar Haveli known for the Church of Our Lady of Piety, Tribal Cultural Museum showcasing Warli folk art, Vanganga Garden, and lion safari at Vasona.",
    "coordinates": {
      "lat": 20.2742,
      "lng": 73.0083
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Warli Art",
      "Portuguese Architecture",
      "Gardens",
      "Tribal Culture"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Silvassa",
      "Dadra and Nagar Haveli",
      "Vanganga",
      "Khanvel"
    ],
    "transportInfo": {
      "nearestAirport": "Surat Airport (STV) - 130 km; Mumbai Chhatrapati Shivaji (BOM) - 165 km",
      "nearestRailway": "Vapi Railway Station (VAPI) - 17 km",
      "roadConnectivity": "Easily reachable via NH 48 from Mumbai and Surat"
    },
    "culturalHighlights": [
      "Tribal Cultural Museum featuring authentic masks, hunting tools, and live Warli paintings",
      "Church of Our Lady of Piety built by the Portuguese in 1889"
    ],
    "sourceUrl": "https://www.tourismdddnh.in",
    "attractions": [
      {
        "id": "sil-museum",
        "name": "Tribal Cultural Museum & Vanganga Lake Garden",
        "category": "Culture & Gardens",
        "timeSlot": "Morning",
        "description": "Fascinating collection of tribal lifestyle dioramas followed by a peaceful stroll over Japanese-style bridges at Vanganga Lake.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 20,
        "coordinates": {
          "lat": 20.2742,
          "lng": 73.0083
        },
        "address": "Silvassa Main Road, Dadra and Nagar Haveli",
        "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": false,
        "tips": [
          "Purchase certified Warli paintings directly from tribal artisans inside the museum compound"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-sil-1",
        "name": "Woodlands Silvassa",
        "mealType": "Lunch",
        "cuisine": "Gujarati & Tribal Fusion",
        "famousFor": "Authentic Kathiyawadi thali, Ubadiyu (seasonal earthen-pot steamed vegetables), and fresh buttermilk",
        "estimatedCostPerPersonInr": 250,
        "coordinates": {
          "lat": 20.2742,
          "lng": 73.0083
        }
      }
    ]
  },
  {
    "id": "diu",
    "name": "Diu Fort & Nagoa Beach",
    "normalizedName": "diu fort & nagoa beach",
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "isUnionTerritory": true,
    "district": "Diu",
    "category": "Forts & Coastal",
    "tagline": "Portuguese sea fortresses, rare Hoka palm trees, and serene horseshoe beaches",
    "description": "Charming coastal island featuring the massive 1535 Diu Fort surrounded by the Arabian Sea, St. Paul's Church, Naida Caves labyrinth, and horseshoe-shaped Nagoa Beach lined with African branching Hoka palms.",
    "coordinates": {
      "lat": 20.7144,
      "lng": 70.9874
    },
    "bestMonths": "October to April",
    "idealDays": 2,
    "popularInterests": [
      "Sea Forts",
      "Portuguese Churches",
      "Beaches",
      "Caves"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Diu",
      "Diu Island",
      "Diu Fort",
      "Nagoa Beach",
      "Naida Caves"
    ],
    "transportInfo": {
      "nearestAirport": "Diu Airport (DIU) - Regular flights to Mumbai and Ahmedabad",
      "nearestRailway": "Veraval Railway Station (VRL) - 90 km; Delvada - 8 km",
      "roadConnectivity": "Connected to Gujarat mainland via two road bridges"
    },
    "culturalHighlights": [
      "Diu Fort with bronze cannons, lighthouse, and dramatic sea ramparts",
      "Naida Caves - an extraordinary natural-manmade sandstone labyrinth lit by open sunbeams"
    ],
    "sourceUrl": "https://www.tourismdddnh.in",
    "attractions": [
      {
        "id": "diu-fort",
        "name": "Diu Fort & Naida Caves",
        "category": "Fort & Architecture",
        "timeSlot": "Morning",
        "description": "Explore the vast sea-facing citadel commanding the Gulf of Khambhat followed by walking through the photogenic golden caverns of Naida Caves.",
        "visitDurationMinutes": 150,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 20.7144,
          "lng": 70.9874
        },
        "address": "Fort Road, Diu, Dadra and Nagar Haveli and Daman and Diu",
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Visit Naida Caves around midday when sun rays stream directly through natural ceiling openings"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-diu-1",
        "name": "O'Coqueiro Restaurant & Lounge",
        "mealType": "Dinner",
        "cuisine": "Portuguese & Goan Seafood",
        "famousFor": "Grilled lobster, butter garlic prawns, fish caldeen, and bebinca dessert",
        "estimatedCostPerPersonInr": 450,
        "coordinates": {
          "lat": 20.7144,
          "lng": 70.9874
        }
      }
    ]
  },
  {
    "id": "auroville",
    "name": "Auroville & Matrimandir",
    "normalizedName": "auroville & matrimandir",
    "state": "Puducherry",
    "isUnionTerritory": true,
    "district": "Puducherry & Viluppuram",
    "category": "Spiritual & Cultural",
    "tagline": "The City of Dawn - Universal township centered around the golden Matrimandir sphere",
    "description": "Universal experimental community founded by Mirra Alfassa ('The Mother') and Sri Aurobindo, renowned for the gleaming golden geodesic dome of Matrimandir, sustainable forests, and global culture.",
    "coordinates": {
      "lat": 11.9961,
      "lng": 79.8106
    },
    "bestMonths": "October to March",
    "idealDays": 2,
    "popularInterests": [
      "Meditation",
      "Architecture",
      "Organic Farming",
      "Global Community"
    ],
    "bannerUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "aliases": [
      "Auroville",
      "Matrimandir",
      "City of Dawn",
      "Auroville Universal Township"
    ],
    "transportInfo": {
      "nearestAirport": "Puducherry Airport (PNY) - 7 km; Chennai (MAA) - 135 km",
      "nearestRailway": "Puducherry Railway Station (PDY) - 12 km",
      "roadConnectivity": "Easily reached via East Coast Road (ECR) from Chennai or Pondicherry"
    },
    "culturalHighlights": [
      "The golden geodesic sphere of Matrimandir housing a 70cm optical glass crystal ball",
      "Sustainable handicraft boutiques, paper making workshops, and spirulina farms"
    ],
    "sourceUrl": "https://www.pondytourism.in",
    "attractions": [
      {
        "id": "aur-matri",
        "name": "Matrimandir Viewing Point & Gardens",
        "category": "Spiritual & Architectural",
        "timeSlot": "Morning",
        "description": "Peaceful walk through dense regenerated green belt forests leading to the amphitheater viewing point of the golden globe.",
        "visitDurationMinutes": 120,
        "estimatedCostInr": 0,
        "coordinates": {
          "lat": 11.9961,
          "lng": 79.8106
        },
        "address": "Auroville Visitors Centre, Auroville, Puducherry",
        "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        "isOutdoor": true,
        "tips": [
          "Internal meditation passes for the inner chamber must be booked in person a day in advance at the Visitors Centre"
        ]
      }
    ],
    "meals": [
      {
        "id": "m-aur-1",
        "name": "Solar Kitchen & Visitors Centre Cafe",
        "mealType": "Lunch",
        "cuisine": "Organic Farm-to-Table & French",
        "famousFor": "Fresh stoneground sourdough bread, organic farm salads, vegan tarts, and hibiscus iced tea",
        "estimatedCostPerPersonInr": 300,
        "coordinates": {
          "lat": 11.9961,
          "lng": 79.8106
        }
      }
    ]
  }
];


/**
 * Enhanced search function that performs multi-tier prefix, substring, and alias matching
 * across all Indian destinations.
 * Ranks strong name matches ahead of weaker alias matches, then alphabetizes within relevance groups.
 * Does NOT impose a hardcoded 40 limit - returns all matches unless caller specifies a limit.
 */
export function searchAllIndiaDestinations(query?: string, limit?: number): DestinationCatalogueItem[] {
  if (!query || !query.trim()) {
    // Return all destinations sorted alphabetically (A–Z)
    const sorted = [...ALL_INDIA_DESTINATIONS].sort((a, b) => a.name.localeCompare(b.name));
    return (limit !== undefined && limit > 0) ? sorted.slice(0, limit) : sorted;
  }

  const q = query.trim().toLowerCase();

  // Tier 1: Exact name match (e.g. 'mumbai' -> Mumbai)
  const tier1Exact: DestinationCatalogueItem[] = [];
  // Tier 2: Word-prefix in destination name (e.g. 'mum' -> Mumbai, 'oot' -> Ooty, 'ara' -> Araku Valley)
  const tier2NamePrefix: DestinationCatalogueItem[] = [];
  // Tier 3: Substring match inside destination name (e.g. 'valley' -> Araku Valley, Ziro Valley)
  const tier3NameSubstring: DestinationCatalogueItem[] = [];
  // Tier 4: Exact match in verified aliases (e.g. 'kashi' -> Varanasi, 'vizag' -> Visakhapatnam)
  const tier4AliasExact: DestinationCatalogueItem[] = [];
  // Tier 5: Word-prefix in verified aliases (e.g. 'kashid' -> Alibaug)
  const tier5AliasPrefix: DestinationCatalogueItem[] = [];
  // Tier 6: Substring in verified aliases
  const tier6AliasSubstring: DestinationCatalogueItem[] = [];
  // Tier 7: State or Union Territory match (e.g. 'kerala' -> all destinations in Kerala)
  const tier7StateMatch: DestinationCatalogueItem[] = [];
  // Tier 8: District, category, or general attribute match
  const tier8General: DestinationCatalogueItem[] = [];

  const seen = new Set<string>();

  for (const dest of ALL_INDIA_DESTINATIONS) {
    const norm = dest.normalizedName;
    const stateLower = dest.state.toLowerCase();
    const aliasesLower = dest.aliases.map(a => a.toLowerCase());
    const wordsInName = norm.split(/[\s,&-]+/).filter(Boolean);

    if (norm === q || dest.id === q) {
      tier1Exact.push(dest);
      seen.add(dest.id);
    } else if (norm.startsWith(q) || wordsInName.some(w => w.startsWith(q))) {
      tier2NamePrefix.push(dest);
      seen.add(dest.id);
    } else if (norm.includes(q)) {
      tier3NameSubstring.push(dest);
      seen.add(dest.id);
    } else if (aliasesLower.some(a => a === q)) {
      tier4AliasExact.push(dest);
      seen.add(dest.id);
    } else if (aliasesLower.some(a => a.startsWith(q) || a.split(/[\s,&-]+/).some(w => w.startsWith(q)))) {
      tier5AliasPrefix.push(dest);
      seen.add(dest.id);
    } else if (aliasesLower.some(a => a.includes(q))) {
      tier6AliasSubstring.push(dest);
      seen.add(dest.id);
    } else if (stateLower.startsWith(q) || stateLower.includes(q)) {
      tier7StateMatch.push(dest);
      seen.add(dest.id);
    } else if (
      (dest.district && dest.district.toLowerCase().includes(q)) ||
      dest.category.toLowerCase().includes(q)
    ) {
      tier8General.push(dest);
      seen.add(dest.id);
    }
  }

  // Strictly alphabetize within each relevance group
  const sortAlpha = (a: DestinationCatalogueItem, b: DestinationCatalogueItem) => a.name.localeCompare(b.name);
  tier1Exact.sort(sortAlpha);
  tier2NamePrefix.sort(sortAlpha);
  tier3NameSubstring.sort(sortAlpha);
  tier4AliasExact.sort(sortAlpha);
  tier5AliasPrefix.sort(sortAlpha);
  tier6AliasSubstring.sort(sortAlpha);
  tier7StateMatch.sort(sortAlpha);
  tier8General.sort(sortAlpha);

  const combined = [
    ...tier1Exact,
    ...tier2NamePrefix,
    ...tier3NameSubstring,
    ...tier4AliasExact,
    ...tier5AliasPrefix,
    ...tier6AliasSubstring,
    ...tier7StateMatch,
    ...tier8General
  ];

  return (limit !== undefined && limit > 0) ? combined.slice(0, limit) : combined;
}

/**
 * Finds a destination from the All India catalogue with multi-level fallback
 */
export function findAllIndiaDestination(query: string): DestinationCatalogueItem | undefined {
  if (!query || !query.trim()) return undefined;
  const q = query.trim().toLowerCase();

  // 1. Exact match on normalized name or ID
  const exact = ALL_INDIA_DESTINATIONS.find(d => d.normalizedName === q || d.id === q);
  if (exact) return exact;

  // 2. Exact match in aliases
  const aliasMatch = ALL_INDIA_DESTINATIONS.find(d => d.aliases.some(a => a.toLowerCase() === q));
  if (aliasMatch) return aliasMatch;

  // 3. Prefix match on name
  const prefixMatch = ALL_INDIA_DESTINATIONS.find(d => d.normalizedName.startsWith(q));
  if (prefixMatch) return prefixMatch;

  // 4. Substring match
  const subMatch = ALL_INDIA_DESTINATIONS.find(d => d.normalizedName.includes(q) || d.state.toLowerCase().includes(q));
  if (subMatch) return subMatch;

  return undefined;
}
