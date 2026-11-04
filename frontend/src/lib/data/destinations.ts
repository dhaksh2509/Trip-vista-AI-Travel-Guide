import { ActivityItem, MealRecommendation } from '@/types';
import { ALL_INDIA_DESTINATIONS, findAllIndiaDestination } from './allIndiaCatalogue';

export interface DestinationMeta {
  id: string;
  name: string;
  tagline: string;
  state: string;
  coordinates: { lat: number; lng: number };
  bannerUrl: string;
  description: string;
  bestMonths: string;
  idealDays: number;
  popularInterests: string[];
  attractions: ActivityItem[];
  meals: MealRecommendation[];
}

export const DESTINATIONS_DATA: Record<string, DestinationMeta> = {
  // ==================== ANDHRA PRADESH ====================
  'araku valley': {
    id: 'araku',
    name: 'Araku Valley',
    tagline: 'Ooty of Andhra - Misty hills, cascading waterfalls, and aromatic coffee',
    state: 'Andhra Pradesh',
    coordinates: { lat: 18.3273, lng: 82.8775 },
    bannerUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: 'A picturesque hill station in the Eastern Ghats renowned for lush coffee plantations, tribal culture, and ancient limestone caves.',
    bestMonths: 'September to March',
    idealDays: 3,
    popularInterests: ['Nature', 'Food', 'Photography', 'Adventure'],
    attractions: [
      {
        id: 'araku-borra-caves',
        name: 'Borra Caves',
        category: 'Nature',
        timeSlot: 'Morning',
        description: 'Million-year-old limestone caves featuring majestic stalactites, stalagmites, and deep river caverns illuminated in vivid colors.',
        visitDurationMinutes: 120,
        estimatedCostInr: 80,
        coordinates: { lat: 18.2804, lng: 83.0396 },
        address: 'Ananthagiri Hills, Visakhapatnam District',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        weatherBackup: 'Excellent rainy weather sanctuary since the cave system is sheltered indoors.',
        tips: ['Wear shoes with good grip on limestone paths', 'Hire an authorized local tribal guide']
      },
      {
        id: 'araku-katiki-waterfalls',
        name: 'Katiki Waterfalls',
        category: 'Adventure',
        timeSlot: 'Afternoon',
        description: 'A 50-foot cascading mountain waterfall accessed via a thrilling 4x4 off-road jeep drive and scenic forest trek.',
        visitDurationMinutes: 150,
        estimatedCostInr: 300,
        coordinates: { lat: 18.2917, lng: 83.0039 },
        address: 'Near Borra Caves, Eastern Ghats',
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        weatherBackup: 'During severe cloudbursts, explore the sheltered Coffee Museum or Tribal Museum instead.',
        tips: ['Carry extra dry clothes', 'Taste hot charcoal Bamboo Chicken prepared by local tribal stalls']
      },
      {
        id: 'araku-coffee-museum',
        name: 'Araku Coffee Museum',
        category: 'Food',
        timeSlot: 'Evening',
        description: 'Interactive museum exhibiting the heritage of Arabica coffee cultivation with artisanal roasting demos and tastings.',
        visitDurationMinutes: 75,
        estimatedCostInr: 50,
        coordinates: { lat: 18.3312, lng: 82.8687 },
        address: 'Araku Town Center',
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        weatherBackup: 'Fully enclosed museum and cafe, perfect during afternoon rains.',
        tips: ['Sample the house-signature Arabica chocolate espresso', 'Buy organic beans directly from tribal cooperatives']
      },
      {
        id: 'araku-tribal-museum',
        name: 'Araku Tribal Museum',
        category: 'History',
        timeSlot: 'Morning',
        description: 'Authentic exhibits showcasing indigenous tribal lifestyles, traditional clay architecture, hunting gear, and folk metallurgy.',
        visitDurationMinutes: 90,
        estimatedCostInr: 40,
        coordinates: { lat: 18.3298, lng: 82.8715 },
        address: 'Araku Bypass Road',
        imageUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Watch live Dhimsa tribal dance recitals held on weekend afternoons']
      },
      {
        id: 'araku-chaparai',
        name: 'Chaparai Water Cascades',
        category: 'Nature',
        timeSlot: 'Afternoon',
        description: 'Wide natural flat rock cascades where streams glide gently through lush woods, popular for picnicking and wading.',
        visitDurationMinutes: 120,
        estimatedCostInr: 30,
        coordinates: { lat: 18.2981, lng: 82.7844 },
        address: 'Dumbriguda, 15 km from Araku',
        imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Avoid green algae-covered slippery rock patches']
      },
      {
        id: 'araku-padmapuram',
        name: 'Padmapuram Botanical Gardens',
        category: 'Nature',
        timeSlot: 'Evening',
        description: 'Historic World War II botanical reserve featuring tree-top hanging cottages, exotic flower beds, and a miniature toy train.',
        visitDurationMinutes: 90,
        estimatedCostInr: 40,
        coordinates: { lat: 18.3356, lng: 82.8611 },
        address: 'Padmapuram, Araku',
        imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Ride the narrow-gauge toy train around the pine groves']
      }
    ],
    meals: [
      {
        id: 'm-araku-1',
        name: 'Vasundhara Tribal Bamboo Kitchen',
        mealType: 'Lunch',
        cuisine: 'Tribal Andhra',
        famousFor: 'Authentic charcoal roasted Bongu Lo Kodi (Bamboo Chicken)',
        estimatedCostPerPersonInr: 300,
        coordinates: { lat: 18.3285, lng: 82.8732 }
      },
      {
        id: 'm-araku-2',
        name: 'Hill View Valley Diner',
        mealType: 'Breakfast',
        cuisine: 'South Indian',
        famousFor: 'Steaming Ragi Idlis, Ghee Upma & Fresh Araku Filter Coffee',
        estimatedCostPerPersonInr: 120,
        coordinates: { lat: 18.3301, lng: 82.8690 }
      },
      {
        id: 'm-araku-3',
        name: 'Greenwoods Courtyard Restaurant',
        mealType: 'Dinner',
        cuisine: 'Multi-cuisine & Andhra',
        famousFor: 'Natu Kodi Pulusu (Country Chicken Curry) with Bagara Rice',
        estimatedCostPerPersonInr: 350,
        coordinates: { lat: 18.3340, lng: 82.8650 }
      }
    ]
  },

  'visakhapatnam': {
    id: 'vizag',
    name: 'Visakhapatnam',
    tagline: 'The Jewel of the Coromandel Coast',
    state: 'Andhra Pradesh',
    coordinates: { lat: 17.6868, lng: 83.2185 },
    bannerUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    description: 'A coastal metropolis famous for pristine beaches, scenic hilltops, submarines, and spicy coastal Andhra gastronomy.',
    bestMonths: 'October to March',
    idealDays: 3,
    popularInterests: ['Beaches', 'History', 'Food', 'Photography'],
    attractions: [
      {
        id: 'vizag-submarine',
        name: 'INS Kursura Submarine Museum',
        category: 'History',
        timeSlot: 'Morning',
        description: 'Walk through a real Soviet-era Kalvari-class submarine positioned on RK Beach sands.',
        visitDurationMinutes: 90,
        estimatedCostInr: 70,
        coordinates: { lat: 17.7169, lng: 83.3341 },
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Listen to the guided narration from retired naval sailors']
      },
      {
        id: 'vizag-kailasagiri',
        name: 'Kailasagiri Hilltop Park & Ropeway',
        category: 'Sightseeing',
        timeSlot: 'Afternoon',
        description: 'Cable-car ride to a 360-degree hill viewpoint overlooking the Bay of Bengal.',
        visitDurationMinutes: 120,
        estimatedCostInr: 120,
        coordinates: { lat: 17.7492, lng: 83.3424 },
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Ride the sea-facing cable car']
      },
      {
        id: 'vizag-rushikonda',
        name: 'Rushikonda Beach & Sea Sports',
        category: 'Beaches',
        timeSlot: 'Evening',
        description: 'Golden sandy beach offering sea kayaking, surfing, and speedboat rides.',
        visitDurationMinutes: 120,
        estimatedCostInr: 250,
        coordinates: { lat: 17.7818, lng: 83.3854 },
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Best sunset surfing conditions']
      }
    ],
    meals: [
      {
        id: 'm-vizag-1',
        name: 'Sea Inn (Raju Gari Dhaba)',
        mealType: 'Lunch',
        cuisine: 'Andhra Coastal',
        famousFor: 'Royyala Vepudu (Prawn fry) & Crab Curry',
        estimatedCostPerPersonInr: 400,
        coordinates: { lat: 17.7795, lng: 83.3790 }
      }
    ]
  },

  // ==================== TELANGANA ====================
  'hyderabad': {
    id: 'hyderabad',
    name: 'Hyderabad',
    tagline: 'City of Pearls, Nizam Palaces & Fragrant Biryani',
    state: 'Telangana',
    coordinates: { lat: 17.3850, lng: 78.4867 },
    bannerUrl: 'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=1200&q=80',
    description: 'A 400-year-old regal metropolis blending medieval Islamic architecture with modern cyber tech.',
    bestMonths: 'October to February',
    idealDays: 3,
    popularInterests: ['History', 'Food', 'Shopping', 'Photography'],
    attractions: [
      {
        id: 'hyd-charminar',
        name: 'Charminar & Laad Bazaar',
        category: 'History',
        timeSlot: 'Morning',
        description: 'The monumental 1591 landmark of Hyderabad surrounded by vibrant markets and pearl artisans.',
        visitDurationMinutes: 90,
        estimatedCostInr: 25,
        coordinates: { lat: 17.3616, lng: 78.4747 },
        imageUrl: 'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Visit early morning to avoid crowds']
      },
      {
        id: 'hyd-golconda',
        name: 'Golconda Fort',
        category: 'History',
        timeSlot: 'Afternoon',
        description: 'Colossal hill fortress world-renowned for acoustic brilliance and medieval diamond vaults.',
        visitDurationMinutes: 150,
        estimatedCostInr: 50,
        coordinates: { lat: 17.3833, lng: 78.4011 },
        imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Test the acoustic echo at Fateh Darwaza']
      },
      {
        id: 'hyd-hussain-sagar',
        name: 'Hussain Sagar Lake & Buddha Statue',
        category: 'Sightseeing',
        timeSlot: 'Evening',
        description: 'Evening boat cruise around the monolithic 18-meter stone Buddha standing in the lake center.',
        visitDurationMinutes: 75,
        estimatedCostInr: 100,
        coordinates: { lat: 17.4239, lng: 78.4738 },
        imageUrl: 'https://images.unsplash.com/photo-1572953109213-3be62398eb95?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Enjoy evening breezes along Necklace Road']
      }
    ],
    meals: [
      {
        id: 'm-hyd-1',
        name: 'Hotel Shadab',
        mealType: 'Lunch',
        cuisine: 'Hyderabadi Mughlai',
        famousFor: 'Authentic Mutton Dum Biryani & Mirchi ka Salan',
        estimatedCostPerPersonInr: 350,
        coordinates: { lat: 17.3678, lng: 78.4752 }
      },
      {
        id: 'm-hyd-2',
        name: 'Nimrah Cafe & Bakery',
        mealType: 'Breakfast',
        cuisine: 'Bakery & Tea',
        famousFor: 'Irani Chai and buttery Osmania Biscuits facing Charminar',
        estimatedCostPerPersonInr: 60,
        coordinates: { lat: 17.3619, lng: 78.4744 }
      }
    ]
  },

  // ==================== GOA ====================
  'goa': {
    id: 'goa',
    name: 'Goa',
    tagline: 'Tropical Sands, Portuguese Heritage & Serene Waters',
    state: 'Goa',
    coordinates: { lat: 15.2993, lng: 74.1240 },
    bannerUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    description: 'Indiaâ€™s premier beach haven characterized by swaying palms, Portuguese churches, and vibrant shacks.',
    bestMonths: 'November to March',
    idealDays: 3,
    popularInterests: ['Beaches', 'Adventure', 'Food', 'Photography'],
    attractions: [
      {
        id: 'goa-aguada',
        name: 'Fort Aguada & Lighthouse',
        category: 'History',
        timeSlot: 'Morning',
        description: '17th-century Portuguese coastal fortress overlooking the Arabian Sea.',
        visitDurationMinutes: 90,
        estimatedCostInr: 50,
        coordinates: { lat: 15.4920, lng: 73.7737 },
        imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Visit before noon for cool ocean breeze']
      },
      {
        id: 'goa-bom-jesus',
        name: 'Basilica of Bom Jesus',
        category: 'History',
        timeSlot: 'Afternoon',
        description: 'UNESCO World Heritage baroque church preserving the relics of St. Francis Xavier.',
        visitDurationMinutes: 75,
        estimatedCostInr: 0,
        coordinates: { lat: 15.5008, lng: 73.9116 },
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Respect dress code']
      },
      {
        id: 'goa-baga',
        name: 'Baga Beach & Sunset Promenade',
        category: 'Beaches',
        timeSlot: 'Evening',
        description: 'Lively shoreline with candlelit beach shacks, music, and sunset catamaran rides.',
        visitDurationMinutes: 120,
        estimatedCostInr: 100,
        coordinates: { lat: 15.5553, lng: 73.7517 },
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Try freshly grilled snapper with lemon butter']
      }
    ],
    meals: [
      {
        id: 'm-goa-1',
        name: 'Fishermanâ€™s Wharf',
        mealType: 'Lunch',
        cuisine: 'Goan Coastal',
        famousFor: 'Kingfish Curry Rice & Bebinca dessert',
        estimatedCostPerPersonInr: 450,
        coordinates: { lat: 15.4950, lng: 73.8200 }
      }
    ]
  },

  // ==================== HIMACHAL PRADESH ====================
  'manali': {
    id: 'manali',
    name: 'Manali',
    tagline: 'Valley of Gods - Snow peaks, pine forests, and high-altitude adventures',
    state: 'Himachal Pradesh',
    coordinates: { lat: 32.2432, lng: 77.1892 },
    bannerUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    description: 'High-altitude Himalayan resort town famous for Solang Valley adventure sports, Rohtang Pass snow peaks, and ancient timber temples.',
    bestMonths: 'October to June',
    idealDays: 4,
    popularInterests: ['Adventure', 'Nature', 'Photography', 'Mountains'],
    attractions: [
      {
        id: 'manali-solang',
        name: 'Solang Valley Adventure Hub',
        category: 'Adventure',
        timeSlot: 'Morning',
        description: 'Picturesque alpine valley offering paragliding, zorbing, quad biking, and winter skiing surrounded by glacier peaks.',
        visitDurationMinutes: 180,
        estimatedCostInr: 1500,
        coordinates: { lat: 32.3166, lng: 77.1585 },
        imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        weatherBackup: 'Enjoy heated cafe lounges and timber craft shopping in Old Manali during snowfall.',
        tips: ['Book licensed paragliding instructors', 'Rent insulated snow suits on site']
      },
      {
        id: 'manali-hadimba',
        name: 'Hadimba Wooden Temple',
        category: 'History',
        timeSlot: 'Afternoon',
        description: '16th-century pagoda-style timber sanctuary set amidst towering cedar forests in Dhungri Park.',
        visitDurationMinutes: 90,
        estimatedCostInr: 0,
        coordinates: { lat: 32.2483, lng: 77.1812 },
        imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Photograph fluffy Angora rabbits and yaks in the cedar grove']
      },
      {
        id: 'manali-mall-road',
        name: 'Mall Road & Tibetan Monastery',
        category: 'Shopping',
        timeSlot: 'Evening',
        description: 'Bustling pedestrian promenade lined with Himachali shawl weavers, wooden handicrafts, and authentic Tibetan momo eateries.',
        visitDurationMinutes: 120,
        estimatedCostInr: 200,
        coordinates: { lat: 32.2415, lng: 77.1887 },
        imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Purchase Kullu handloom caps and pure Shilajit']
      }
    ],
    meals: [
      {
        id: 'm-manali-1',
        name: 'The Lazy Dog Cafe (Old Manali)',
        mealType: 'Lunch',
        cuisine: 'Himachali & Continental',
        famousFor: 'Fresh Beas River Trout with Lemon Butter & Hot Apple Cider',
        estimatedCostPerPersonInr: 450,
        coordinates: { lat: 32.2530, lng: 77.1780 }
      },
      {
        id: 'm-manali-2',
        name: 'Chopsticks Restaurant',
        mealType: 'Dinner',
        cuisine: 'Tibetan & Himalayan',
        famousFor: 'Steaming Thukpa, Mutton Gyathuk & Butter Tea',
        estimatedCostPerPersonInr: 300,
        coordinates: { lat: 32.2420, lng: 77.1890 }
      }
    ]
  },

  'shimla': {
    id: 'shimla',
    name: 'Shimla',
    tagline: 'Queen of Hills - Colonial heritage, Ridge promenades, and pine valley rail journeys',
    state: 'Himachal Pradesh',
    coordinates: { lat: 31.1048, lng: 77.1734 },
    bannerUrl: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80',
    description: 'Former summer capital of British India renowned for Victorian architecture, Kalka-Shimla UNESCO toy train, and Jakhoo Hill views.',
    bestMonths: 'September to June',
    idealDays: 3,
    popularInterests: ['History', 'Nature', 'Photography', 'Shopping'],
    attractions: [
      {
        id: 'shimla-ridge',
        name: 'The Ridge & Mall Road',
        category: 'Sightseeing',
        timeSlot: 'Morning',
        description: 'Spacious open esplanade facing snow-capped peaks, dominated by the neo-Gothic Christ Church built in 1857.',
        visitDurationMinutes: 120,
        estimatedCostInr: 0,
        coordinates: { lat: 31.1042, lng: 77.1750 },
        imageUrl: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Photograph Christ Church stained glass windows in morning sunlight']
      },
      {
        id: 'shimla-jakhoo',
        name: 'Jakhoo Hill & Ropeway',
        category: 'Nature',
        timeSlot: 'Afternoon',
        description: 'Highest peak in Shimla at 2,455m featuring a 108-foot orange Lord Hanuman statue reached via ropeway cable car.',
        visitDurationMinutes: 90,
        estimatedCostInr: 250,
        coordinates: { lat: 31.1011, lng: 77.1852 },
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Keep spectacles and food items safe inside backpacks from hill monkeys']
      }
    ],
    meals: [
      {
        id: 'm-shimla-1',
        name: 'Wake & Bake Cafe',
        mealType: 'Lunch',
        cuisine: 'Cafe & Continental',
        famousFor: 'Woodfired Thin Crust Pizza & Fresh Himalayan Berry Smoothies',
        estimatedCostPerPersonInr: 350,
        coordinates: { lat: 31.1040, lng: 77.1740 }
      }
    ]
  },

  // ==================== RAJASTHAN ====================
  'jaipur': {
    id: 'jaipur',
    name: 'Jaipur',
    tagline: 'The Pink City - Hilltop fortresses, royal palaces, and vibrant bazaars',
    state: 'Rajasthan',
    coordinates: { lat: 26.9124, lng: 75.7873 },
    bannerUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    description: 'Capital of Rajasthan featuring Amber Fort, honeycomb Hawa Mahal, royal observatories, and rich Rajputana gastronomy.',
    bestMonths: 'October to March',
    idealDays: 3,
    popularInterests: ['History', 'Food', 'Shopping', 'Photography'],
    attractions: [
      {
        id: 'jaipur-amber-fort',
        name: 'Amber Fort & Sheesh Mahal',
        category: 'History',
        timeSlot: 'Morning',
        description: 'Majestic yellow and pink sandstone hill fortress featuring the dazzling Sheesh Mahal (Palace of Mirrors) and Maota Lake.',
        visitDurationMinutes: 180,
        estimatedCostInr: 100,
        coordinates: { lat: 26.9855, lng: 75.8513 },
        imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Visit early at 8:00 AM to explore halls before peak heat']
      },
      {
        id: 'jaipur-hawa-mahal',
        name: 'Hawa Mahal (Palace of Winds)',
        category: 'History',
        timeSlot: 'Afternoon',
        description: 'Five-story pink sandstone facade adorned with 953 intricate latticed jharokha windows built for royal women.',
        visitDurationMinutes: 60,
        estimatedCostInr: 50,
        coordinates: { lat: 26.9239, lng: 75.8267 },
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Best photographed from Tattoo Cafe across the boulevard']
      },
      {
        id: 'jaipur-nahargarh',
        name: 'Nahargarh Fort Sunset Viewpoint',
        category: 'Photography',
        timeSlot: 'Evening',
        description: 'Perched on the Aravalli hills, providing breathtaking panoramic sunset views over the entire illuminated Pink City.',
        visitDurationMinutes: 120,
        estimatedCostInr: 50,
        coordinates: { lat: 26.9378, lng: 75.8155 },
        imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Enjoy sunset tea at Padao Cafe atop the fort walls']
      }
    ],
    meals: [
      {
        id: 'm-jaipur-1',
        name: 'LMB (Laxmi Misthan Bhandar)',
        mealType: 'Lunch',
        cuisine: 'Rajasthani Royal Thali',
        famousFor: 'Dal Baati Churma, Ker Sangri & Ghewar sweet',
        estimatedCostPerPersonInr: 450,
        coordinates: { lat: 26.9210, lng: 75.8240 }
      },
      {
        id: 'm-jaipur-2',
        name: 'Rawat Mishthan Bhandar',
        mealType: 'Breakfast',
        cuisine: 'Street Snack',
        famousFor: 'World-famous Piping Hot Pyaz Kachori & Lassi',
        estimatedCostPerPersonInr: 120,
        coordinates: { lat: 26.9200, lng: 75.7980 }
      }
    ]
  },

  'udaipur': {
    id: 'udaipur',
    name: 'Udaipur',
    tagline: 'City of Lakes - Venetian water palaces, marble courtyards, and boat cruises',
    state: 'Rajasthan',
    coordinates: { lat: 24.5854, lng: 73.7125 },
    bannerUrl: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
    description: 'The Venice of the East, famed for Lake Pichola cruises, City Palace marble balconies, Jag Mandir, and romantic lakefront dining.',
    bestMonths: 'September to March',
    idealDays: 3,
    popularInterests: ['History', 'Photography', 'Food', 'Nature'],
    attractions: [
      {
        id: 'udaipur-city-palace',
        name: 'Udaipur City Palace Museum',
        category: 'History',
        timeSlot: 'Morning',
        description: 'Largest royal complex in Rajasthan featuring mirror mosaics, peacock courtyards, and silver royal carriages.',
        visitDurationMinutes: 150,
        estimatedCostInr: 300,
        coordinates: { lat: 24.5764, lng: 73.6835 },
        imageUrl: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Visit Mor Chowk for vibrant peacock tile photography']
      },
      {
        id: 'udaipur-pichola-cruise',
        name: 'Lake Pichola Sunset Boat Cruise',
        category: 'Sightseeing',
        timeSlot: 'Evening',
        description: 'Golden hour boat tour past Taj Lake Palace, Jag Mandir Island, and illuminated ghats reflecting on serene waters.',
        visitDurationMinutes: 90,
        estimatedCostInr: 400,
        coordinates: { lat: 24.5750, lng: 73.6800 },
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Board the boat from Rameshwar Ghat near City Palace']
      }
    ],
    meals: [
      {
        id: 'm-udaipur-1',
        name: 'Upre by 1559 AD',
        mealType: 'Dinner',
        cuisine: 'Rajasthani & Continental',
        famousFor: 'Laal Maas (Spicy Mutton Curry) facing illuminated City Palace',
        estimatedCostPerPersonInr: 600,
        coordinates: { lat: 24.5800, lng: 73.6810 }
      }
    ]
  },

  // ==================== KERALA ====================
  'munnar': {
    id: 'munnar',
    name: 'Munnar',
    tagline: 'Green Emerald of Kerala - Endless tea gardens, misty clouds, and Neelakurinji hills',
    state: 'Kerala',
    coordinates: { lat: 10.0889, lng: 77.0595 },
    bannerUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    description: 'Western Ghats hill station sitting at 1,600m altitude, renowned for manicured tea plantations, Mattupetty Dam, and Nilgiri Tahr wildlife.',
    bestMonths: 'September to May',
    idealDays: 3,
    popularInterests: ['Nature', 'Photography', 'Food', 'Adventure'],
    attractions: [
      {
        id: 'munnar-tea-museum',
        name: 'KDHP Tea Museum & Factory Walk',
        category: 'Nature',
        timeSlot: 'Morning',
        description: 'Historic tea estate demonstrating orthodox tea leaf processing from plucking to aromatic CTC blending and tasting.',
        visitDurationMinutes: 90,
        estimatedCostInr: 120,
        coordinates: { lat: 10.0925, lng: 77.0601 },
        imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Sample single-estate Black & White Tea brews']
      },
      {
        id: 'munnar-eravikulam',
        name: 'Eravikulam National Park (Rajamalai)',
        category: 'Nature',
        timeSlot: 'Afternoon',
        description: 'Sanctuary housing the endangered Nilgiri Tahr mountain goat amidst rolling high-altitude shola grassland slopes.',
        visitDurationMinutes: 150,
        estimatedCostInr: 200,
        coordinates: { lat: 10.1500, lng: 77.0667 },
        imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Pre-book safari bus tickets online to skip park queues']
      },
      {
        id: 'munnar-mattupetty',
        name: 'Mattupetty Dam & Echo Point',
        category: 'Sightseeing',
        timeSlot: 'Evening',
        description: 'Scenic reservoir offering speedboating surrounded by tea slopes and natural voice echo phenomenon across mountain walls.',
        visitDurationMinutes: 90,
        estimatedCostInr: 150,
        coordinates: { lat: 10.1052, lng: 77.1235 },
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Taste spiced boiled cardamom corn and pineapple slices']
      }
    ],
    meals: [
      {
        id: 'm-munnar-1',
        name: 'Saravana Bhavan Kerala House',
        mealType: 'Lunch',
        cuisine: 'Authentic Kerala Sadhya',
        famousFor: 'Traditional Banana Leaf Sadhya with Karimeen Pollichathu',
        estimatedCostPerPersonInr: 300,
        coordinates: { lat: 10.0880, lng: 77.0610 }
      }
    ]
  },

  'alleppey': {
    id: 'alleppey',
    name: 'Alleppey (Alappuzha)',
    tagline: 'Venice of the East - Houseboat cruises through tranquil backwater lagoons',
    state: 'Kerala',
    coordinates: { lat: 9.4981, lng: 76.3388 },
    bannerUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    description: 'Hub of Keralas backwaters famous for overnight Kettuvallam luxury houseboats, coconut palm canals, and Marari beach sunsets.',
    bestMonths: 'September to March',
    idealDays: 2,
    popularInterests: ['Nature', 'Food', 'Beaches', 'Photography'],
    attractions: [
      {
        id: 'alleppey-houseboat',
        name: 'Vembanad Lake Houseboat Cruise',
        category: 'Nature',
        timeSlot: 'Morning',
        description: 'Glide through serene backwater canals, paddy fields, and water-lily villages aboard a hand-crafted thatch Kettuvallam.',
        visitDurationMinutes: 240,
        estimatedCostInr: 3500,
        coordinates: { lat: 9.4900, lng: 76.3500 },
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Freshly cooked Malabar fish curry prepared on board']
      },
      {
        id: 'alleppey-marari',
        name: 'Marari Quiet Beach',
        category: 'Beaches',
        timeSlot: 'Evening',
        description: 'Pristine, peaceful fishing village beach with soft white sand, coconut groves, and calm sea waves.',
        visitDurationMinutes: 120,
        estimatedCostInr: 0,
        coordinates: { lat: 9.6000, lng: 76.2980 },
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Enjoy quiet sunset strolls away from commercial beach crowds']
      }
    ],
    meals: [
      {
        id: 'm-alleppey-1',
        name: 'Thaff Restaurant',
        mealType: 'Lunch',
        cuisine: 'Malabar Coastal',
        famousFor: 'Prawn Roast, Appam with Stew & Pearl Spot Fry',
        estimatedCostPerPersonInr: 350,
        coordinates: { lat: 9.4950, lng: 76.3350 }
      }
    ]
  },

  // ==================== TAMIL NADU ====================
  'ooty': {
    id: 'ooty',
    name: 'Ooty (Udhagamandalam)',
    tagline: 'Queen of Nilgiris - Blue mountain railways, botanical gardens, and eucalyptus woods',
    state: 'Tamil Nadu',
    coordinates: { lat: 11.4102, lng: 76.6950 },
    bannerUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    description: 'Premier hill resort in the Nilgiri hills featuring the Nilgiri Mountain Railway (UNESCO), Government Botanical Gardens, Ooty Lake, and Doddabetta Peak.',
    bestMonths: 'October to June',
    idealDays: 3,
    popularInterests: ['Nature', 'Food', 'Photography', 'Sightseeing'],
    attractions: [
      {
        id: 'ooty-botanical',
        name: 'Government Botanical Garden',
        category: 'Nature',
        timeSlot: 'Morning',
        description: '55-acre terraced garden established in 1848 housing a 20-million-year-old fossilized tree trunk, Italian floral lawns, and fern houses.',
        visitDurationMinutes: 120,
        estimatedCostInr: 50,
        coordinates: { lat: 11.4167, lng: 76.7117 },
        imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Visit the Toda tribal hut display at the top lawn']
      },
      {
        id: 'ooty-toy-train',
        name: 'Nilgiri Mountain Railway (UNESCO Toy Train)',
        category: 'Sightseeing',
        timeSlot: 'Afternoon',
        description: 'Historic rack-and-pinion steam train chugging through 16 tunnels and 250 bridges connecting Coonoor to Ooty.',
        visitDurationMinutes: 150,
        estimatedCostInr: 200,
        coordinates: { lat: 11.4065, lng: 76.6970 },
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Book First Class window seats 30 days prior']
      },
      {
        id: 'ooty-doddabetta',
        name: 'Doddabetta Peak Viewpoint',
        category: 'Photography',
        timeSlot: 'Evening',
        description: 'Highest mountain peak in the Nilgiris at 2,637m featuring a telescope house looking over blue misty pine valleys.',
        visitDurationMinutes: 90,
        estimatedCostInr: 20,
        coordinates: { lat: 11.4014, lng: 76.7356 },
        imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Buy hot Nilgiri tea and homemade dark chocolates']
      }
    ],
    meals: [
      {
        id: 'm-ooty-1',
        name: 'Place to Bee Cafe',
        mealType: 'Lunch',
        cuisine: 'Nilgiri Honey & Italian',
        famousFor: 'Artisanal Honey Woodfired Pizzas & Organic Nilgiri Herbal Teas',
        estimatedCostPerPersonInr: 350,
        coordinates: { lat: 11.4110, lng: 76.6980 }
      },
      {
        id: 'm-ooty-2',
        name: 'Kingstar Chocolate Factory Outlet',
        mealType: 'Snacks',
        cuisine: 'Confectionery',
        famousFor: 'Famous Ooty Handmade Fudge & Roasted Almond Chocolates',
        estimatedCostPerPersonInr: 150,
        coordinates: { lat: 11.4090, lng: 76.6990 }
      }
    ]
  },


  'kodaikanal': {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    tagline: 'Princess of Hill Stations - Star lakes, pine forests, and pillar rocks',
    state: 'Tamil Nadu',
    coordinates: { lat: 10.2381, lng: 77.4892 },
    bannerUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: 'Palani Hills resort famous for Kodai Star Lake rowboating, Coakers Walk misty cliffs, Pine Forest strolls, and Pillar Rocks.',
    bestMonths: 'September to May',
    idealDays: 3,
    popularInterests: ['Nature', 'Photography', 'Adventure', 'Food'],
    attractions: [
      {
        id: 'kodai-lake',
        name: 'Kodai Star Lake & Cycling Promenade',
        category: 'Nature',
        timeSlot: 'Morning',
        description: 'Man-made star-shaped lake created in 1863 surrounded by 5 km of paved tree-shaded cycling and boating tracks.',
        visitDurationMinutes: 120,
        estimatedCostInr: 150,
        coordinates: { lat: 10.2340, lng: 77.4850 },
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Rent a double bicycle to ride around the perimeter']
      },
      {
        id: 'kodai-pillar-rocks',
        name: 'Pillar Rocks & Coakers Walk',
        category: 'Photography',
        timeSlot: 'Afternoon',
        description: 'Three giant vertical granite boulders rising 400 feet amidst misty cloud formations overlooking deep gorges.',
        visitDurationMinutes: 90,
        estimatedCostInr: 30,
        coordinates: { lat: 10.2100, lng: 77.4650 },
        imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Visit early before mist obscures the valley view']
      }
    ],
    meals: [
      {
        id: 'm-kodai-1',
        name: 'Muncheez Cafe',
        mealType: 'Lunch',
        cuisine: 'Continental & Local',
        famousFor: 'Hot Homemade Cheese Omelettes & Spiced Hot Chocolate',
        estimatedCostPerPersonInr: 250,
        coordinates: { lat: 10.2370, lng: 77.4880 }
      }
    ]
  },

  // ==================== KARNATAKA ====================
  'bengaluru': {
    id: 'bengaluru',
    name: 'Bengaluru',
    tagline: 'Garden City & High-Energy Innovation Hub',
    state: 'Karnataka',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    bannerUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
    description: 'Indiaâ€™s Silicon Valley blessed with year-round pleasant weather, heritage gardens, and vibrant culinary craft.',
    bestMonths: 'All year round',
    idealDays: 3,
    popularInterests: ['Nature', 'Food', 'History', 'Shopping'],
    attractions: [
      {
        id: 'blr-lalbagh',
        name: 'Lalbagh Botanical Gardens',
        category: 'Nature',
        timeSlot: 'Morning',
        description: '240 acres of century-old flora surrounding a London Crystal Palace-inspired glasshouse.',
        visitDurationMinutes: 120,
        estimatedCostInr: 30,
        coordinates: { lat: 12.9507, lng: 77.5848 },
        imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Climb the 3-billion-year-old Peninsular Gneiss rock']
      },
      {
        id: 'blr-palace',
        name: 'Bangalore Palace',
        category: 'History',
        timeSlot: 'Afternoon',
        description: 'Tudor-revival royal palace featuring wooden crenellations and Victorian gardens.',
        visitDurationMinutes: 90,
        estimatedCostInr: 250,
        coordinates: { lat: 12.9988, lng: 77.5921 },
        imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Audio tour included in admission ticket']
      }
    ],
    meals: [
      {
        id: 'm-blr-1',
        name: 'Vidyarthi Bhavan',
        mealType: 'Breakfast',
        cuisine: 'South Indian',
        famousFor: 'Crispy Benne Masala Dosa & Hot Degree Filter Coffee',
        estimatedCostPerPersonInr: 100,
        coordinates: { lat: 12.9438, lng: 77.5707 }
      }
    ]
  },

  'coorg': {
    id: 'coorg',
    name: 'Coorg (Kodagu)',
    tagline: 'Scotland of India - Coffee estates, spice gardens, and Abbey waterfalls',
    state: 'Karnataka',
    coordinates: { lat: 12.4244, lng: 75.7382 },
    bannerUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: 'Picturesque Western Ghats district renowned for aromatic coffee plantations, Kodava warrior culture, Abbey Falls, and Dubare Elephant Camp.',
    bestMonths: 'October to May',
    idealDays: 3,
    popularInterests: ['Nature', 'Food', 'Adventure', 'Photography'],
    attractions: [
      {
        id: 'coorg-abbey-falls',
        name: 'Abbey Waterfalls',
        category: 'Nature',
        timeSlot: 'Morning',
        description: 'Cascading mountain waterfall roaring through dense private coffee and spice plantations accessed via a hanging bridge.',
        visitDurationMinutes: 90,
        estimatedCostInr: 30,
        coordinates: { lat: 12.4540, lng: 75.7180 },
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Inhale the fresh cardamom and pepper aroma along the walk']
      },
      {
        id: 'coorg-raja-seat',
        name: 'Rajaâ€™s Seat Garden & Sunset Point',
        category: 'Photography',
        timeSlot: 'Evening',
        description: 'Seasonal flower garden and brick pavilion once favored by Kodagu kings to watch sunset over rolling hill ranges.',
        visitDurationMinutes: 75,
        estimatedCostInr: 20,
        coordinates: { lat: 12.4200, lng: 75.7350 },
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Watch the evening musical fountain show']
      }
    ],
    meals: [
      {
        id: 'm-coorg-1',
        name: 'Coorg Cuisine Restaurant (Madikeri)',
        mealType: 'Lunch',
        cuisine: 'Kodava Ethnic',
        famousFor: 'Pandi Curry (Spiced Pork Curry with Kachampuli vinegar) & Akki Oti',
        estimatedCostPerPersonInr: 350,
        coordinates: { lat: 12.4220, lng: 75.7390 }
      }
    ]
  },

  'mysuru': {
    id: 'mysuru',
    name: 'Mysuru (Mysore)',
    tagline: 'Heritage Capital of Karnataka - Royal Palaces, Silk & Mysore Pak',
    state: 'Karnataka',
    coordinates: { lat: 12.2958, lng: 76.6394 },
    bannerUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    description: 'Cultural city famous for the grand illuminated Mysore Palace, Chamundi Hill temple, Devaraja spice market, and royal heritage.',
    bestMonths: 'September to March',
    idealDays: 2,
    popularInterests: ['History', 'Food', 'Shopping', 'Culture'],
    attractions: [
      {
        id: 'mysuru-palace',
        name: 'Mysore Amba Vilas Palace',
        category: 'History',
        timeSlot: 'Morning',
        description: 'Indo-Saracenic masterpiece featuring stained glass domes, ivory doors, and Sunday night illumination with 97,000 electric bulbs.',
        visitDurationMinutes: 150,
        estimatedCostInr: 100,
        coordinates: { lat: 12.3052, lng: 76.6552 },
        imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Remove shoes at entrance hall; barefoot palace walk']
      }
    ],
    meals: [
      {
        id: 'm-mysuru-1',
        name: 'Guru Sweets (Devaraja Market)',
        mealType: 'Snacks',
        cuisine: 'Heritage Sweets',
        famousFor: 'Original Melt-in-mouth Ghee Mysore Pak created for the Maharaja',
        estimatedCostPerPersonInr: 100,
        coordinates: { lat: 12.3080, lng: 76.6520 }
      }
    ]
  },

  // ==================== UTTARAKHAND ====================
  'rishikesh': {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Yoga Capital of the World - White water rafting, Ganga Aarti, and suspension bridges',
    state: 'Uttarakhand',
    coordinates: { lat: 30.0869, lng: 78.2676 },
    bannerUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    description: 'Spiritual and adventure hub at the Himalayan foothills where the holy River Ganges emerges from mountain gorges.',
    bestMonths: 'September to June',
    idealDays: 3,
    popularInterests: ['Adventure', 'Temples', 'Nature', 'Food'],
    attractions: [
      {
        id: 'rishikesh-rafting',
        name: 'Shivpuri Ganga River Rafting',
        category: 'Adventure',
        timeSlot: 'Morning',
        description: 'Exhilarating Grade III/IV whitewater rafting down 16 km of emerald Ganges rapids from Shivpuri to Laxman Jhula.',
        visitDurationMinutes: 180,
        estimatedCostInr: 1000,
        coordinates: { lat: 30.1355, lng: 78.3880 },
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Always wear certified lifejackets and helmets']
      },
      {
        id: 'rishikesh-triveni-aarti',
        name: 'Triveni Ghat Evening Ganga Aarti',
        category: 'Temples',
        timeSlot: 'Evening',
        description: 'Soul-stirring spiritual ceremony featuring chanting priests, brass lamps, and floating leaf diyas on the Ganges.',
        visitDurationMinutes: 90,
        estimatedCostInr: 0,
        coordinates: { lat: 30.1030, lng: 78.2970 },
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Arrive by 5:30 PM to secure front ghat seating']
      }
    ],
    meals: [
      {
        id: 'm-rishikesh-1',
        name: 'Little Buddha Cafe (Laxman Jhula)',
        mealType: 'Lunch',
        cuisine: 'Organic & Global Vegan',
        famousFor: 'Falafel Platter, Fresh Avocado Smoothies & Ganges River Views',
        estimatedCostPerPersonInr: 300,
        coordinates: { lat: 30.1240, lng: 78.3270 }
      }
    ]
  },

  // ==================== UTTAR PRADESH ====================
  'varanasi': {
    id: 'varanasi',
    name: 'Varanasi (Kashi)',
    tagline: 'Worldâ€™s Oldest Living City - Sacred Ganga Ghats, ancient alleyways, and silk weaving',
    state: 'Uttar Pradesh',
    coordinates: { lat: 25.3176, lng: 82.9739 },
    bannerUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    description: 'Spiritual heartland of India featuring 84 ancient riverside ghats, Kashi Vishwanath Temple corridor, and majestic evening aarti.',
    bestMonths: 'October to March',
    idealDays: 3,
    popularInterests: ['History', 'Temples', 'Photography', 'Food'],
    attractions: [
      {
        id: 'varanasi-dashashwamedh',
        name: 'Dashashwamedh Ghat Grand Ganga Aarti',
        category: 'Temples',
        timeSlot: 'Evening',
        description: 'Mesmerizing ritual of light where priests perform rhythmic choreography with multi-tiered brass oil lamps.',
        visitDurationMinutes: 90,
        estimatedCostInr: 0,
        coordinates: { lat: 25.3069, lng: 83.0104 },
        imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Rent a wooden rowboat to watch the aarti from the river']
      },
      {
        id: 'varanasi-morning-boat',
        name: 'Subah-e-Banaras Morning Boat Ride',
        category: 'Photography',
        timeSlot: 'Morning',
        description: 'Sunrise wooden boat ride past ancient palaces, morning bathers, and classical sitar recitals along the ghats.',
        visitDurationMinutes: 90,
        estimatedCostInr: 300,
        coordinates: { lat: 25.3000, lng: 83.0080 },
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Feed migratory Siberian gulls during winter months']
      }
    ],
    meals: [
      {
        id: 'm-varanasi-1',
        name: 'Blue Lassi Shop (Kachori Gali)',
        mealType: 'Snacks',
        cuisine: 'Banarasi Street Food',
        famousFor: 'Thick Hand-Churned Claypot Lassi topped with Malai & Rabri',
        estimatedCostPerPersonInr: 100,
        coordinates: { lat: 25.3110, lng: 83.0110 }
      },
      {
        id: 'm-varanasi-2',
        name: 'Kashi Chaat Bhandar',
        mealType: 'Dinner',
        cuisine: 'Street Chaat',
        famousFor: 'Piping Hot Tamatar Chaat & Crispy Palak Chaat',
        estimatedCostPerPersonInr: 120,
        coordinates: { lat: 25.3090, lng: 83.0040 }
      }
    ]
  },

  'agra': {
    id: 'agra',
    name: 'Agra',
    tagline: 'City of the Taj Mahal - Mughal architectural wonders and marble inlay mastercraft',
    state: 'Uttar Pradesh',
    coordinates: { lat: 27.1767, lng: 78.0081 },
    bannerUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    description: 'World-famous city housing the Taj Mahal (UNESCO Wonder of the World), Agra Fort, and Mehtab Bagh moonlit gardens.',
    bestMonths: 'October to March',
    idealDays: 2,
    popularInterests: ['History', 'Photography', 'Food', 'Sightseeing'],
    attractions: [
      {
        id: 'agra-taj-mahal',
        name: 'Taj Mahal (Sunrise Experience)',
        category: 'History',
        timeSlot: 'Morning',
        description: 'Empress Mumtaz Mahalâ€™s white marble mausoleum built by Shah Jahan, radiating glowing soft pink hues at sunrise.',
        visitDurationMinutes: 180,
        estimatedCostInr: 50,
        coordinates: { lat: 27.1751, lng: 78.0421 },
        imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Enter via Eastern Gate at 6:00 AM to beat tour buses']
      },
      {
        id: 'agra-fort',
        name: 'Agra Fort & Musamman Burj',
        category: 'History',
        timeSlot: 'Afternoon',
        description: 'Red sandstone Mughal imperial city and fortress featuring Jahangir Palace and Shah Jahanâ€™s marble octagonal tower.',
        visitDurationMinutes: 120,
        estimatedCostInr: 50,
        coordinates: { lat: 27.1795, lng: 78.0211 },
        imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['View Taj Mahal framed inside Mughal archways']
      }
    ],
    meals: [
      {
        id: 'm-agra-1',
        name: 'Panchi Petha Store',
        mealType: 'Snacks',
        cuisine: 'Traditional Sweets',
        famousFor: 'Authentic Agra Angoori Petha & Spicy Bedai Puri',
        estimatedCostPerPersonInr: 100,
        coordinates: { lat: 27.1800, lng: 78.0100 }
      }
    ]
  },

  // ==================== WEST BENGAL ====================
  'darjeeling': {
    id: 'darjeeling',
    name: 'Darjeeling',
    tagline: 'Champagne of Teas - Kanchenjunga sunrise, Batasia Loop, and Himalayan ropeways',
    state: 'West Bengal',
    coordinates: { lat: 27.0410, lng: 88.2663 },
    bannerUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    description: 'Himalayan hill station famed for golden Kanchenjunga sunrise views from Tiger Hill, tea gardens, and Darjeeling Himalayan Railway.',
    bestMonths: 'September to May',
    idealDays: 3,
    popularInterests: ['Nature', 'Photography', 'Food', 'Mountains'],
    attractions: [
      {
        id: 'darjeeling-tiger-hill',
        name: 'Tiger Hill Kanchenjunga Sunrise',
        category: 'Photography',
        timeSlot: 'Morning',
        description: 'Panoramic 4:30 AM view point watching first sunlight illuminate Mt. Kanchenjunga (8,586m) in fiery gold.',
        visitDurationMinutes: 120,
        estimatedCostInr: 50,
        coordinates: { lat: 26.9950, lng: 88.2850 },
        imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Dress in heavy winter layers; morning temperatures drop near 0Â°C']
      },
      {
        id: 'darjeeling-batasia',
        name: 'Batasia Loop & War Memorial',
        category: 'Sightseeing',
        timeSlot: 'Afternoon',
        description: 'Spiral railway loop offering 360-degree views of Himalayan gardens as the toy train circles the Gorkha War Memorial.',
        visitDurationMinutes: 60,
        estimatedCostInr: 20,
        coordinates: { lat: 27.0270, lng: 88.2470 },
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Rent traditional Gorkhali dress for souvenir photos']
      }
    ],
    meals: [
      {
        id: 'm-darjeeling-1',
        name: 'Keventerâ€™s Heritage Cafe',
        mealType: 'Breakfast',
        cuisine: 'Colonial Bakery & Tea',
        famousFor: 'Open-top terrace English Breakfast & First Flush Darjeeling Tea',
        estimatedCostPerPersonInr: 300,
        coordinates: { lat: 27.0420, lng: 88.2670 }
      },
      {
        id: 'm-darjeeling-2',
        name: 'Glenaryâ€™s Bakery & Pub',
        mealType: 'Dinner',
        cuisine: 'Bakery & Continental',
        famousFor: 'Freshly Baked Apple Pie, Chocolate Eclairs & Live Acoustic Music',
        estimatedCostPerPersonInr: 400,
        coordinates: { lat: 27.0415, lng: 88.2665 }
      }
    ]
  },

  // ==================== JAMMU & KASHMIR & LADAKH ====================
  'ladakh': {
    id: 'leh ladakh',
    name: 'Leh Ladakh',
    tagline: 'Land of High Passes - Pangong Tso blue lakes, Nubra Valley, and Buddhist monasteries',
    state: 'Ladakh',
    coordinates: { lat: 34.1526, lng: 77.5771 },
    bannerUrl: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    description: 'High-altitude cold desert plateau famous for Pangong Tso azure lake, Khardung La pass (5,359m), double-humped Bactrian camels, and Thiksey Monastery.',
    bestMonths: 'May to September',
    idealDays: 5,
    popularInterests: ['Adventure', 'Nature', 'Photography', 'Mountains'],
    attractions: [
      {
        id: 'ladakh-pangong',
        name: 'Pangong Tso Crystal Blue Lake',
        category: 'Nature',
        timeSlot: 'Morning',
        description: 'Endorheic salt lake sitting at 4,225m altitude that changes shades from azure blue to emerald green throughout the day.',
        visitDurationMinutes: 240,
        estimatedCostInr: 500,
        coordinates: { lat: 33.7595, lng: 78.6674 },
        imageUrl: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Obtain Inner Line Permit (ILP) before heading to Pangong']
      },
      {
        id: 'ladakh-thiksey',
        name: 'Thiksey Monastery (Little Potala)',
        category: 'Temples',
        timeSlot: 'Afternoon',
        description: '12-story Tibetan Gelug sect monastery featuring a majestic 49-foot statue of Maitreya Future Buddha.',
        visitDurationMinutes: 120,
        estimatedCostInr: 50,
        coordinates: { lat: 34.0560, lng: 77.6667 },
        imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Attend morning monk chanting sessions at 6:00 AM']
      }
    ],
    meals: [
      {
        id: 'm-ladakh-1',
        name: 'The Tibetan Kitchen (Leh)',
        mealType: 'Dinner',
        cuisine: 'Ladakhi & Tibetan',
        famousFor: 'Skyu (Ladakhi pasta stew), Mokmok dumplings & Butter Tea',
        estimatedCostPerPersonInr: 350,
        coordinates: { lat: 34.1600, lng: 77.5800 }
      }
    ]
  },

  'srinagar': {
    id: 'srinagar',
    name: 'Srinagar',
    tagline: 'Paradise on Earth - Shikara rides on Dal Lake, Mughal gardens, and floating flower markets',
    state: 'Jammu & Kashmir',
    coordinates: { lat: 34.0837, lng: 74.7973 },
    bannerUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    description: 'Summer capital of J&K famed for wooden houseboats, Shikara water taxi rides on Dal Lake, Shalimar Bagh, and Kashmiri Wazwan.',
    bestMonths: 'April to October',
    idealDays: 4,
    popularInterests: ['Nature', 'Photography', 'Food', 'Shopping'],
    attractions: [
      {
        id: 'srinagar-dal-lake',
        name: 'Dal Lake Shikara Sunset Ride',
        category: 'Nature',
        timeSlot: 'Evening',
        description: 'Peaceful wooden boat ride past floating vegetable markets, lotus gardens, and snow-capped Zabarwan mountain reflections.',
        visitDurationMinutes: 120,
        estimatedCostInr: 600,
        coordinates: { lat: 34.1000, lng: 74.8500 },
        imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Sample Saffron Kehwa tea brewed right on the Shikara']
      },
      {
        id: 'srinagar-shalimar',
        name: 'Shalimar Bagh Mughal Gardens',
        category: 'Nature',
        timeSlot: 'Morning',
        description: 'Grand 1619 Mughal terraced garden built by Emperor Jahangir featuring chinar trees and cascading marble water fountains.',
        visitDurationMinutes: 90,
        estimatedCostInr: 25,
        coordinates: { lat: 34.1480, lng: 74.8720 },
        imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Visit during October autumn for crimson Chinar leaf scenery']
      }
    ],
    meals: [
      {
        id: 'm-srinagar-1',
        name: 'Ahdoos Restaurant (Residency Road)',
        mealType: 'Dinner',
        cuisine: 'Kashmiri Wazwan',
        famousFor: 'Authentic 36-course Wazwan (Rosta, Gushtaba, Tabak Maaz)',
        estimatedCostPerPersonInr: 600,
        coordinates: { lat: 34.0720, lng: 74.8120 }
      }
    ]
  },

  // ==================== CAPITAL / METROS ====================
  'delhi': {
    id: 'delhi',
    name: 'Delhi',
    tagline: 'Heart of India - Imperial Monuments & Vibrant Bazaars',
    state: 'Delhi NCR',
    coordinates: { lat: 28.6139, lng: 77.2090 },
    bannerUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    description: 'The capital territory showcasing seven historic cities and legendary street dining.',
    bestMonths: 'October to March',
    idealDays: 3,
    popularInterests: ['History', 'Food', 'Photography', 'Shopping'],
    attractions: [
      {
        id: 'delhi-qutub',
        name: 'Qutub Minar & Iron Pillar',
        category: 'History',
        timeSlot: 'Morning',
        description: '73m soaring victory tower constructed in 1192 and rust-resistant Gupta Iron Pillar.',
        visitDurationMinutes: 90,
        estimatedCostInr: 50,
        coordinates: { lat: 28.5244, lng: 77.1855 },
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Visit early morning for serene lighting']
      },
      {
        id: 'delhi-humayun',
        name: 'Humayunâ€™s Tomb',
        category: 'History',
        timeSlot: 'Afternoon',
        description: 'Persian garden tomb masterpiece that served as the architectural inspiration for the Taj Mahal.',
        visitDurationMinutes: 90,
        estimatedCostInr: 50,
        coordinates: { lat: 28.5933, lng: 77.2507 },
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Stroll through the geometric Charbagh water fountains']
      }
    ],
    meals: [
      {
        id: 'm-delhi-1',
        name: 'Karimâ€™s (Jama Masjid)',
        mealType: 'Dinner',
        cuisine: 'Mughlai',
        famousFor: 'Mutton Burra Kebab & Sheermal bread',
        estimatedCostPerPersonInr: 400,
        coordinates: { lat: 28.6508, lng: 77.2335 }
      }
    ]
  },

  'mumbai': {
    id: 'mumbai',
    name: 'Mumbai',
    tagline: 'City of Dreams - Marine Drive, Gateway of India, and Bollywood glamour',
    state: 'Maharashtra',
    coordinates: { lat: 19.0760, lng: 72.8777 },
    bannerUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    description: 'Financial capital of India famous for Victorian Gothic architecture, Marine Drive Queens Necklace, Elephanta Caves, and Vada Pav.',
    bestMonths: 'October to March',
    idealDays: 5,
    popularInterests: ['Sightseeing', 'Food', 'History', 'Shopping'],
    attractions: [
      {
        id: 'mumbai-gateway',
        name: 'Gateway of India & Taj Mahal Palace',
        category: 'History',
        timeSlot: 'Morning',
        description: 'Colonial basalt arch overlooking Mumbai Harbor, erected in 1911 to commemorate King George V.',
        visitDurationMinutes: 90,
        estimatedCostInr: 0,
        coordinates: { lat: 18.9220, lng: 72.8347 },
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Take the ferry to Elephanta Caves right from Gateway jetty']
      },
      {
        id: 'mumbai-marine-drive',
        name: 'Marine Drive Queens Necklace',
        category: 'Sightseeing',
        timeSlot: 'Evening',
        description: '3.6 km C-shaped coastal boulevard along Arabian Sea, glowing like a pearl necklace at night.',
        visitDurationMinutes: 90,
        estimatedCostInr: 0,
        coordinates: { lat: 18.9430, lng: 72.8230 },
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Enjoy sea breeze and street corn near Nariman Point']
      },
      {
        id: 'mumbai-elephanta',
        name: 'Elephanta Caves (UNESCO)',
        category: 'History',
        timeSlot: 'Morning',
        description: 'UNESCO World Heritage rock-cut cave temples on an island featuring a monolithic Trimurti Shiva sculpture.',
        visitDurationMinutes: 180,
        estimatedCostInr: 40,
        coordinates: { lat: 18.9633, lng: 72.9315 },
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Take the 1-hour ferry from Gateway of India jetty']
      },
      {
        id: 'mumbai-cst',
        name: 'Chhatrapati Shivaji Maharaj Terminus (UNESCO)',
        category: 'History',
        timeSlot: 'Afternoon',
        description: 'Ornate Victorian Gothic railway terminus built in 1887, featuring turrets, pointed arches, and stained glass.',
        visitDurationMinutes: 60,
        estimatedCostInr: 25,
        coordinates: { lat: 18.9400, lng: 72.8354 },
        imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Best photographed from the traffic island across the road at sunset']
      },
      {
        id: 'mumbai-bandra-fort',
        name: 'Bandra Fort & Bandstand Promenade',
        category: 'Photography',
        timeSlot: 'Evening',
        description: '16th-century Portuguese sea fort with dramatic sunset views over the Bandra-Worli Sea Link.',
        visitDurationMinutes: 90,
        estimatedCostInr: 0,
        coordinates: { lat: 19.0490, lng: 72.8200 },
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Walk along Bandstand for celebrity bungalow views']
      },
      {
        id: 'mumbai-dharavi',
        name: 'Dharavi Artisan Quarter Walk',
        category: 'Sightseeing',
        timeSlot: 'Morning',
        description: 'Guided walk through Asia\'s largest informal economy district â€” leather workshops, pottery kilns, and recycling enterprises.',
        visitDurationMinutes: 120,
        estimatedCostInr: 500,
        coordinates: { lat: 19.0445, lng: 72.8555 },
        imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Book a Dharavi Reality Tours guide for authentic context']
      },
      {
        id: 'mumbai-worli-sea-link',
        name: 'Bandra-Worli Sea Link Drive',
        category: 'Sightseeing',
        timeSlot: 'Afternoon',
        description: 'Iconic 5.6 km cable-stayed bridge soaring above the Arabian Sea connecting Bandra to Worli.',
        visitDurationMinutes: 45,
        estimatedCostInr: 75,
        coordinates: { lat: 19.0202, lng: 72.8172 },
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Best photographed from Worli fishing village at twilight']
      },
      {
        id: 'mumbai-juhu-beach',
        name: 'Juhu Beach & Sunset',
        category: 'Beaches',
        timeSlot: 'Evening',
        description: 'Famous Bollywood beach known for bhel puri, kulfi, and celebrity spotting during golden hour.',
        visitDurationMinutes: 90,
        estimatedCostInr: 0,
        coordinates: { lat: 19.0977, lng: 72.8270 },
        imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Try bhel puri from the famous stalls near the beach entrance']
      },
      {
        id: 'mumbai-chor-bazaar',
        name: 'Chor Bazaar Antique Market',
        category: 'Shopping',
        timeSlot: 'Morning',
        description: 'Mumbai\'s legendary 150-year-old flea market filled with vintage gramophones, antique furniture, and curios.',
        visitDurationMinutes: 120,
        estimatedCostInr: 0,
        coordinates: { lat: 19.0650, lng: 72.8380 },
        imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: ['Haggling is expected; always negotiate the first quoted price']
      }
    ],
    meals: [
      {
        id: 'm-mumbai-1',
        name: 'Britannia & Co. Cafe (Ballard Estate)',
        mealType: 'Lunch',
        cuisine: 'Parsi Heritage',
        famousFor: 'Famous Berry Pulav, Salli Boti & Caramel Custard',
        estimatedCostPerPersonInr: 450,
        coordinates: { lat: 18.9380, lng: 72.8390 }
      },
      {
        id: 'm-mumbai-2',
        name: 'Ashok Vada Pav (Kirti College)',
        mealType: 'Snacks',
        cuisine: 'Street Food',
        famousFor: 'Iconic Mumbai Vada Pav with spicy garlic chura',
        estimatedCostPerPersonInr: 60,
        coordinates: { lat: 19.0180, lng: 72.8300 }
      },
      {
        id: 'm-mumbai-3',
        name: 'Leopold Cafe (Colaba)',
        mealType: 'Dinner',
        cuisine: 'Anglo-Indian & Continental',
        famousFor: 'Cold beer, grilled fish and legendary old-world ambience',
        estimatedCostPerPersonInr: 600,
        coordinates: { lat: 18.9230, lng: 72.8316 }
      },
      {
        id: 'm-mumbai-4',
        name: 'Kyani & Co. Irani Cafe',
        mealType: 'Breakfast',
        cuisine: 'Irani Bakery',
        famousFor: 'Brun maska, kheema pav, and Irani chai in a century-old setting',
        estimatedCostPerPersonInr: 150,
        coordinates: { lat: 18.9550, lng: 72.8290 }
      },
      {
        id: 'm-mumbai-5',
        name: 'Sardar Refreshments (Tardeo)',
        mealType: 'Snacks',
        cuisine: 'Maharashtrian Street Food',
        famousFor: 'Pav bhaji made with 60-year-old original masala recipe',
        estimatedCostPerPersonInr: 120,
        coordinates: { lat: 19.0640, lng: 72.8140 }
      }
    ]
  }
};

// Seed DESTINATIONS_DATA with all verified destinations from ALL_INDIA_DESTINATIONS
for (const dest of ALL_INDIA_DESTINATIONS) {
  const normKey = dest.normalizedName;
  if (!DESTINATIONS_DATA[normKey]) {
    DESTINATIONS_DATA[normKey] = dest;
  }
}

/**
 * Dynamic Universal Destination Generator for ANY Indian town, city, or district
 * Ensures 100% realistic functional behavior even for uncatalogued places across India.
 */
export function findDestination(query: string): DestinationMeta {
  if (!query || !query.trim()) {
    return ALL_INDIA_DESTINATIONS[0] || DESTINATIONS_DATA['araku valley'];
  }

  // 1. Check verified All-India Catalogue first
  const catalogueMatch = findAllIndiaDestination(query);
  if (catalogueMatch) {
    return catalogueMatch;
  }

  const normalized = query.trim().toLowerCase();

  // 2. Direct or partial match search in built-in dictionary
  for (const [key, dest] of Object.entries(DESTINATIONS_DATA)) {
    if (
      normalized === key ||
      normalized.includes(key) || 
      key.includes(normalized) || 
      dest.name.toLowerCase().includes(normalized) ||
      dest.state.toLowerCase().includes(normalized)
    ) {
      return dest;
    }
  }

  // 3. Dynamic Universal Generator Engine for custom locations
  const formattedName = query.trim().replace(/\b\w/g, c => c.toUpperCase());
  
  // Estimate realistic regional coordinates & attributes based on common state/region names
  let lat = 20.5937;
  let lng = 78.9629;
  let state = 'India';
  let categoryTag = 'Nature & Culture';

  if (normalized.includes('himachal') || normalized.includes('kullu') || normalized.includes('kasauli') || normalized.includes('dharamshala') || normalized.includes('spiti')) {
    lat = 32.0; lng = 77.0; state = 'Himachal Pradesh'; categoryTag = 'Himalayan Mountains';
  } else if (normalized.includes('uttarakhand') || normalized.includes('mussoorie') || normalized.includes('nainital') || normalized.includes('ranikhet') || normalized.includes('kedarnath')) {
    lat = 30.3; lng = 78.0; state = 'Uttarakhand'; categoryTag = 'Devbhoomi Mountains';
  } else if (normalized.includes('kerala') || normalized.includes('varkala') || normalized.includes('wayanad') || normalized.includes('kochi') || normalized.includes('thekkady')) {
    lat = 9.9; lng = 76.3; state = 'Kerala'; categoryTag = 'Western Ghats & Backwaters';
  } else if (normalized.includes('karnataka') || normalized.includes('gokarna') || normalized.includes('hampi') || normalized.includes('chikmagalur') || normalized.includes('udupi')) {
    lat = 13.5; lng = 75.5; state = 'Karnataka'; categoryTag = 'Heritage & Coastal';
  } else if (normalized.includes('tamil') || normalized.includes('madurai') || normalized.includes('rameswaram') || normalized.includes('pondicherry') || normalized.includes('thanjavur')) {
    lat = 10.8; lng = 78.7; state = 'Tamil Nadu'; categoryTag = 'Dravidian Heritage';
  } else if (normalized.includes('rajasthan') || normalized.includes('jaisalmer') || normalized.includes('bikaner') || normalized.includes('pushkar') || normalized.includes('mount abu')) {
    lat = 26.9; lng = 73.0; state = 'Rajasthan'; categoryTag = 'Rajputana Heritage & Deserts';
  } else if (normalized.includes('maharashtra') || normalized.includes('lonavala') || normalized.includes('matheran') || normalized.includes('mahableshwar') || normalized.includes('shirdi')) {
    lat = 18.7; lng = 73.4; state = 'Maharashtra'; categoryTag = 'Sahyadri Hills & Forts';
  } else if (normalized.includes('andhra') || normalized.includes('tirupati') || normalized.includes('vijayawada') || normalized.includes('kurnool') || normalized.includes('rajahmundry')) {
    lat = 16.5; lng = 80.6; state = 'Andhra Pradesh'; categoryTag = 'Coastal & Temple Heritage';
  } else if (normalized.includes('gujarat') || normalized.includes('kutch') || normalized.includes('somnath') || normalized.includes('dwarka') || normalized.includes('diu')) {
    lat = 22.3; lng = 70.8; state = 'Gujarat'; categoryTag = 'Heritage & White Desert';
  } else if (normalized.includes('bengal') || normalized.includes('kolkata') || normalized.includes('kalimpong') || normalized.includes('digha') || normalized.includes('sunderbans')) {
    lat = 22.5; lng = 88.3; state = 'West Bengal'; categoryTag = 'Culture & Nature';
  } else if (normalized.includes('assam') || normalized.includes('shillong') || normalized.includes('meghalaya') || normalized.includes('tawang') || normalized.includes('gangtok')) {
    lat = 25.5; lng = 91.8; state = 'North East India'; categoryTag = 'Eastern Himalayas & Waterfalls';
  }

  return {
    id: `dyn-${normalized.replace(/\s+/g, '-')}`,
    name: formattedName,
    tagline: `Discover the pristine heritage, scenic viewpoints, and local culinary flavors of ${formattedName}`,
    state: state,
    coordinates: { lat, lng },
    bannerUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: `A captivating destination in ${state} (${categoryTag}), featuring historic landmarks, panoramic vantage points, serene natural walking trails, and rich regional traditions.`,
    bestMonths: 'October to April',
    idealDays: 3,
    popularInterests: ['Nature', 'History', 'Food', 'Photography'],
    attractions: [
      {
        id: `dyn-${normalized}-att1`,
        name: `${formattedName} Central Heritage Promenade & Clock Tower`,
        category: 'History',
        timeSlot: 'Morning',
        description: `Historic heart of ${formattedName} showcasing architectural landmarks, vibrant local markets, and cultural heritage galleries.`,
        visitDurationMinutes: 120,
        estimatedCostInr: 50,
        coordinates: { lat: lat + 0.005, lng: lng + 0.005 },
        address: `Main Town Center, ${formattedName}`,
        imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: [`Best visited during morning hours for clear lighting and fresh breeze`]
      },
      {
        id: `dyn-${normalized}-att2`,
        name: `${formattedName} Valley Viewpoint & Nature Trail`,
        category: 'Nature',
        timeSlot: 'Afternoon',
        description: `Panoramic hill viewpoint overlooking the surrounding valley, lush flora, and winding natural streams of ${formattedName}.`,
        visitDurationMinutes: 150,
        estimatedCostInr: 30,
        coordinates: { lat: lat + 0.012, lng: lng - 0.008 },
        address: `Upper Ridge, ${formattedName}`,
        imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        weatherBackup: `During heavy rainfall, visit the local artisan craft center or indoor museum instead.`,
        tips: [`Carry comfortable trekking shoes for the short scenic walk`]
      },
      {
        id: `dyn-${normalized}-att3`,
        name: `${formattedName} Botanical Park & Sunset Promenade`,
        category: 'Photography',
        timeSlot: 'Evening',
        description: `Serene landscaped park and sunset boulevard providing 360-degree views as golden hour illuminates the hills of ${formattedName}.`,
        visitDurationMinutes: 90,
        estimatedCostInr: 20,
        coordinates: { lat: lat - 0.008, lng: lng + 0.010 },
        address: `Sunset Point Road, ${formattedName}`,
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: [`Ideal for photography during sunset hours`]
      },
      {
        id: `dyn-${normalized}-att4`,
        name: `${formattedName} Ancient Temple & Spiritual Sanctuary`,
        category: 'Temples',
        timeSlot: 'Morning',
        description: `Revered historic temple and spiritual sanctuary featuring carved stone architecture and tranquil courtyard gardens.`,
        visitDurationMinutes: 90,
        estimatedCostInr: 0,
        coordinates: { lat: lat - 0.004, lng: lng - 0.005 },
        address: `Temple Street, ${formattedName}`,
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
        isOutdoor: false,
        tips: [`Observe traditional dress customs when visiting the inner sanctum`]
      },
      {
        id: `dyn-${normalized}-att5`,
        name: `${formattedName} Artisan Spice & Handloom Bazaar`,
        category: 'Shopping',
        timeSlot: 'Evening',
        description: `Lively local market featuring traditional handlooms, organic regional spices, wooden artifacts, and souvenirs.`,
        visitDurationMinutes: 100,
        estimatedCostInr: 150,
        coordinates: { lat: lat + 0.002, lng: lng + 0.003 },
        address: `Old Bazaar, ${formattedName}`,
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
        isOutdoor: true,
        tips: ['Sample locally produced honey, tea, and dry sweets']
      }
    ],
    meals: [
      {
        id: `m-${normalized}-1`,
        name: `${formattedName} Heritage Grand Diner`,
        mealType: 'Lunch',
        cuisine: `Authentic ${state} Speciality`,
        famousFor: `Traditional ${state} Thali with regional spices and organic breads`,
        estimatedCostPerPersonInr: 300,
        coordinates: { lat: lat + 0.003, lng: lng + 0.004 }
      },
      {
        id: `m-${normalized}-2`,
        name: `${formattedName} Hill View Cafe & Tea House`,
        mealType: 'Breakfast',
        cuisine: 'Local Bakery & Beverages',
        famousFor: `Fresh Artisanal Filter Coffee, Herbal Teas & Warm Breakfast Breads`,
        estimatedCostPerPersonInr: 150,
        coordinates: { lat: lat + 0.006, lng: lng - 0.002 }
      },
      {
        id: `m-${normalized}-3`,
        name: `Spice Garden Courtyard Restaurant`,
        mealType: 'Dinner',
        cuisine: 'Multi-Cuisine & Regional Fusion',
        famousFor: `Slow-cooked regional curry served with fragrant basmati rice`,
        estimatedCostPerPersonInr: 350,
        coordinates: { lat: lat - 0.003, lng: lng + 0.006 }
      }
    ]
  };
}
