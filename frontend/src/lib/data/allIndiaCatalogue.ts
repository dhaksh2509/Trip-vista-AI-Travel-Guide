import { ActivityItem, MealRecommendation } from '@/types';

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
    nearestRailway: string;
    roadConnectivity: string;
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
  }
];


/**
 * Helper search function that performs prefix, substring, and alias matching across all Indian destinations.
 * Alphabetically sorted by destination name within relevance score tiers.
 */
export function searchAllIndiaDestinations(query: string, limit: number = 20): DestinationCatalogueItem[] {
  if (!query || !query.trim()) {
    // Return all destinations sorted alphabetically (A–Z) up to limit
    return [...ALL_INDIA_DESTINATIONS].sort((a, b) => a.name.localeCompare(b.name)).slice(0, limit);
  }

  const q = query.trim().toLowerCase();

  // Tier 1: Exact name prefix match (e.g. 'mum' -> Mumbai)
  const tier1Prefix: DestinationCatalogueItem[] = [];
  // Tier 2: Exact state prefix match (e.g. 'kerala' -> destinations in Kerala)
  const tier2StatePrefix: DestinationCatalogueItem[] = [];
  // Tier 3: Substring match in destination name
  const tier3NameSubstring: DestinationCatalogueItem[] = [];
  // Tier 4: Alias or district match
  const tier4Alias: DestinationCatalogueItem[] = [];
  // Tier 5: Substring match in state or category
  const tier5General: DestinationCatalogueItem[] = [];

  const seen = new Set<string>();

  for (const dest of ALL_INDIA_DESTINATIONS) {
    const norm = dest.normalizedName;
    const stateLower = dest.state.toLowerCase();
    const aliasesLower = dest.aliases.map(a => a.toLowerCase());

    if (norm.startsWith(q)) {
      tier1Prefix.push(dest);
      seen.add(dest.id);
    } else if (stateLower.startsWith(q)) {
      tier2StatePrefix.push(dest);
      seen.add(dest.id);
    } else if (norm.includes(q)) {
      tier3NameSubstring.push(dest);
      seen.add(dest.id);
    } else if (aliasesLower.some(a => a.startsWith(q) || a.includes(q)) || (dest.district && dest.district.toLowerCase().includes(q))) {
      tier4Alias.push(dest);
      seen.add(dest.id);
    } else if (stateLower.includes(q) || dest.category.toLowerCase().includes(q)) {
      tier5General.push(dest);
      seen.add(dest.id);
    }
  }

  // Sort each tier alphabetically A-Z
  const sortAlpha = (a: DestinationCatalogueItem, b: DestinationCatalogueItem) => a.name.localeCompare(b.name);
  tier1Prefix.sort(sortAlpha);
  tier2StatePrefix.sort(sortAlpha);
  tier3NameSubstring.sort(sortAlpha);
  tier4Alias.sort(sortAlpha);
  tier5General.sort(sortAlpha);

  const combined = [
    ...tier1Prefix,
    ...tier2StatePrefix,
    ...tier3NameSubstring,
    ...tier4Alias,
    ...tier5General
  ];

  return combined.slice(0, limit);
}

/**
 * Finds a destination from the All India catalogue with fallback
 */
export function findAllIndiaDestination(query: string): DestinationCatalogueItem | undefined {
  if (!query) return undefined;
  const q = query.trim().toLowerCase();

  // 1. Exact match on normalized name or ID
  const exact = ALL_INDIA_DESTINATIONS.find(d => d.normalizedName === q || d.id === q);
  if (exact) return exact;

  // 2. Exact match in aliases
  const aliasMatch = ALL_INDIA_DESTINATIONS.find(d => d.aliases.some(a => a.toLowerCase() === q));
  if (aliasMatch) return aliasMatch;

  // 3. Prefix match
  const prefixMatch = ALL_INDIA_DESTINATIONS.find(d => d.normalizedName.startsWith(q));
  if (prefixMatch) return prefixMatch;

  // 4. Substring match
  const subMatch = ALL_INDIA_DESTINATIONS.find(d => d.normalizedName.includes(q) || d.state.toLowerCase().includes(q));
  if (subMatch) return subMatch;

  return undefined;
}
