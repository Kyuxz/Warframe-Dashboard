// Mock data for Warframe Dashboard

export interface WorldCycle {
  name: string;
  state: string;
  stateColor: string;
  timeUntil: string;
  cycleDuration: string;
  progress: number;
}

export interface Mission {
  name: string;
  type: string;
  location: string;
  tileset?: string;
  modifier?: string;
  modifierColor?: string;
}

export interface Sortie {
  name: string;
  boss: string;
  isActive: boolean;
  activation: string;
  expires: string;
  timeLeft: string;
  missions: Mission[];
}

export interface VoidTraderItem {
  name: string;
  ducats: number;
  credits: number;
}

export interface VoidTrader {
  name: string;
  isActive: boolean;
  location: string;
  arrival: string;
  departure: string;
  timeLeft: string;
  inventory: VoidTraderItem[];
}

export interface Fissure {
  node: string;
  planet: string;
  tier: 'Lith' | 'Meso' | 'Neo' | 'Axi' | 'Requiem' | 'Omnia';
  missionType: string;
  expires: string;
  timeLeft: string;
  isExpired: boolean;
}

export interface DailyDeal {
  name: string;
  expires: string;
  discount: number;
  originalPrice: number;
  salePrice: number;
  stock: number;
  maxStock: number;
  timeLeft: string;
}

export interface NewsItem {
  title: string;
  date: string;
  category: 'All' | 'Community' | 'News';
  link: string;
  imageUrl?: string;
}

export interface Invasion {
  node: string;
  planet: string;
  isComplete: boolean;
  attackerFaction: 'Grineer' | 'Corpus' | 'Infestation';
  defenderFaction: 'Grineer' | 'Corpus';
  attackerProgress: number;
  defenderProgress: number;
  totalProgress: number;
  attackerReward: string;
  defenderReward: string;
}

export interface NightwaveChallenge {
  title: string;
  description: string;
  expires: string;
  timeLeft: string;
  type: 'daily' | 'weekly';
}

export interface Nightwave {
  name: string;
  phase: string;
  isActive: boolean;
  seasonStart: string;
  seasonEnd: string;
  daysRemaining: string;
  dailyChallenges: NightwaveChallenge[];
  weeklyChallenges: NightwaveChallenge[];
}

// Mock Data
export const worldCycles: WorldCycle[] = [
  {
    name: "Plains of Eidolon",
    state: "Night",
    stateColor: "#f5c542",
    timeUntil: "00:00:26",
    cycleDuration: "50 minutes cycle",
    progress: 45,
  },
  {
    name: "Orb Vallis",
    state: "Cold",
    stateColor: "#42a5f5",
    timeUntil: "00:47",
    cycleDuration: "20 minutes cycle",
    progress: 65,
  },
  {
    name: "Cambion Drift",
    state: "Vome",
    stateColor: "#ab47bc",
    timeUntil: "00:00:26",
    cycleDuration: "50 minutes cycle",
    progress: 30,
  },
];

export const sorties: Sortie[] = [
  {
    name: "Sortie",
    boss: "RUK",
    isActive: true,
    activation: "1/10/2026, 5:00:00 PM",
    expires: "1/11/2026, 5:00:00 PM",
    timeLeft: "11h 27m",
    missions: [
      {
        name: "Mission 1",
        type: "Extermination",
        location: "Grimaldi (Lua)",
        tileset: "OrokinMoonTileset",
        modifier: "LOW_ENERGY",
        modifierColor: "#42a5f5",
      },
      {
        name: "Mission 2",
        type: "Rescue",
        location: "Stephano (Uranus)",
        tileset: "GrineerOceanTileset",
        modifier: "HAZARD_RADIATION",
        modifierColor: "#4caf50",
      },
      {
        name: "Mission 3",
        type: "Assassination",
        location: "Tethys (Saturn)",
        tileset: "GrineerGalleonTileset",
        modifier: "EXIMUS",
        modifierColor: "#9c27b0",
      },
    ],
  },
  {
    name: "Archon Hunt",
    boss: "NIRA",
    isActive: true,
    activation: "1/5/2026, 12:00:00 AM",
    expires: "1/12/2026, 12:00:00 AM",
    timeLeft: "18h 27m",
    missions: [
      {
        name: "Mission 1",
        type: "Rescue",
        location: "Metis (Jupiter)",
        modifier: "None",
        modifierColor: "#666",
      },
      {
        name: "Mission 2",
        type: "Interception",
        location: "Elara (Jupiter)",
        modifier: "None",
        modifierColor: "#666",
      },
      {
        name: "Mission 3",
        type: "Assassination",
        location: "Themisto (Jupiter)",
        modifier: "None",
        modifierColor: "#666",
      },
    ],
  },
];

export const voidTrader: VoidTrader = {
  name: "Baro'Ki Teel",
  isActive: true,
  location: "Kronia Relay (Saturn)",
  arrival: "1/9/2026, 2:00:00 PM",
  departure: "1/11/2026, 2:00:00 PM",
  timeLeft: "8h 27m",
  inventory: [
    { name: "Void Eclipse Login Song Item", ducats: 135, credits: 200000 },
    { name: "Buzz Kill", ducats: 375, credits: 150000 },
    { name: "Primed Pistol Gambit", ducats: 400, credits: 220000 },
    { name: "Primed Continuity", ducats: 350, credits: 100000 },
    { name: "Paracyst Zebra Skin", ducats: 325, credits: 300000 },
    { name: "Quanta Vandal", ducats: 450, credits: 300000 },
    { name: "Ki'teer Atmos Mask", ducats: 500, credits: 400000 },
    { name: "Ki'teer Sentinel Tail", ducats: 400, credits: 250000 },
    { name: "Twin Grakatas Towsun Skin", ducats: 300, credits: 300000 },
    { name: "Prisma Angstrum", ducats: 475, credits: 210000 },
  ],
};

export const fissures: Fissure[] = [
  // Lith
  { node: "Mantle", planet: "Earth", tier: "Lith", missionType: "Capture", expires: "05:30 AM", timeLeft: "Expired", isExpired: true },
  { node: "Ishtar", planet: "Venus", tier: "Lith", missionType: "Sabotage", expires: "06:31 AM", timeLeft: "58m", isExpired: false },
  { node: "Pacific", planet: "Earth", tier: "Lith", missionType: "Rescue", expires: "06:26 AM", timeLeft: "54m", isExpired: false },
  { node: "Vallis", planet: "Mars", tier: "Lith", missionType: "Mobile Defense", expires: "06:42 AM", timeLeft: "1h 9m", isExpired: false },
  { node: "Everest", planet: "Earth", tier: "Lith", missionType: "Excavation", expires: "07:14 AM", timeLeft: "1h 41m", isExpired: false },
  { node: "Aphrodite", planet: "Venus", tier: "Lith", missionType: "Mobile Defense", expires: "06:47 AM", timeLeft: "1h 14m", isExpired: false },
  // Meso
  { node: "Stickney", planet: "Phobos", tier: "Meso", missionType: "Survival", expires: "05:30 AM", timeLeft: "Expired", isExpired: true },
  { node: "Thebe", planet: "Jupiter", tier: "Meso", missionType: "Sabotage", expires: "06:01 AM", timeLeft: "28m", isExpired: false },
  { node: "Sharpless", planet: "Phobos", tier: "Meso", missionType: "Mobile Defense", expires: "06:26 AM", timeLeft: "53m", isExpired: false },
  // Neo
  { node: "Kokabiel", planet: "Europa", tier: "Neo", missionType: "Sabotage", expires: "06:07 AM", timeLeft: "34m", isExpired: false },
  { node: "Mot", planet: "Void", tier: "Neo", missionType: "Survival", expires: "06:57 AM", timeLeft: "1h 24m", isExpired: false },
  { node: "Umbriel", planet: "Uranus", tier: "Neo", missionType: "Interception", expires: "06:31 AM", timeLeft: "58m", isExpired: false },
  { node: "Armaros", planet: "Europa", tier: "Neo", missionType: "Extermination", expires: "06:40 AM", timeLeft: "1h 7m", isExpired: false },
  // Axi
  { node: "Saxis", planet: "Eris", tier: "Axi", missionType: "Extermination", expires: "06:14 AM", timeLeft: "41m", isExpired: false },
  { node: "Kappa", planet: "Sedna", tier: "Axi", missionType: "Disruption", expires: "05:56 AM", timeLeft: "23m", isExpired: false },
  { node: "Belenus", planet: "Void", tier: "Axi", missionType: "Defense", expires: "07:18 AM", timeLeft: "1h 45m", isExpired: false },
  // Requiem
  { node: "Taveuni", planet: "Kuva Fortress", tier: "Requiem", missionType: "Survival", expires: "05:36 AM", timeLeft: "3m", isExpired: false },
  { node: "Koro", planet: "Kuva Fortress", tier: "Requiem", missionType: "Assault", expires: "05:43 AM", timeLeft: "10m", isExpired: false },
  { node: "Dakata", planet: "Kuva Fortress", tier: "Requiem", missionType: "Extermination", expires: "06:08 AM", timeLeft: "35m", isExpired: false },
  { node: "Rotuma", planet: "Kuva Fortress", tier: "Requiem", missionType: "Mobile Defense", expires: "06:11 AM", timeLeft: "38m", isExpired: false },
  // Omnia
  { node: "Circulus", planet: "Lua", tier: "Omnia", missionType: "Survival", expires: "05:50 AM", timeLeft: "17m", isExpired: false },
  { node: "Tuvul Commons", planet: "Zariman", tier: "Omnia", missionType: "Void Cascade", expires: "06:21 AM", timeLeft: "48m", isExpired: false },
  { node: "Persto", planet: "Deimos", tier: "Omnia", missionType: "Survival", expires: "06:23 AM", timeLeft: "50m", isExpired: false },
];

export const dailyDeals: DailyDeal[] = [
  {
    name: "Cross Bow",
    expires: "1/11/2026, 11:00:00 AM",
    discount: 50,
    originalPrice: 175,
    salePrice: 87,
    stock: 133,
    maxStock: 200,
    timeLeft: "5h 26m",
  },
];

export const newsItems: NewsItem[] = [
  { title: "Check out the official Warframe Wiki", date: "Today", category: "Community", link: "https://wiki.warframe.com/" },
  { title: "Visit the official Warframe Forums!", date: "Today", category: "Community", link: "https://forums.warframe.com/" },
  { title: "Join the Discord Community", date: "Today", category: "Community", link: "https://discord.com/invite/playwarframe" },
  { title: "Dagath Alerts Will Begin January 14", date: "Yesterday", category: "News", link: "#", imageUrl: "https://ext.same-assets.com/2010796670/592839387.jpeg" },
  { title: "Prime Resurgence: Prime Vanguard Ends Soon", date: "2d ago", category: "News", link: "#", imageUrl: "https://ext.same-assets.com/2010796670/3044435902.jpeg" },
  { title: "The Old Peace: Hotfix 41.0.6", date: "2d ago", category: "News", link: "#" },
  { title: "Coming Soon: Devstream #192!", date: "4d ago", category: "News", link: "#" },
  { title: "Community Stream & Twitch Drop Schedule", date: "5d ago", category: "Community", link: "#", imageUrl: "https://ext.same-assets.com/2010796670/1398948084.jpeg" },
  { title: "Known Issues List", date: "Dec 10", category: "News", link: "#" },
  { title: "Instantly Acquire The Old Peace Packs Now", date: "Dec 10", category: "News", link: "#", imageUrl: "https://ext.same-assets.com/2010796670/4230164876.png" },
];

export const invasions: Invasion[] = [
  {
    node: "Adaro",
    planet: "Sedna",
    isComplete: true,
    attackerFaction: "Corpus",
    defenderFaction: "Grineer",
    attackerProgress: 33100,
    defenderProgress: 0,
    totalProgress: 33000,
    attackerReward: "Snipetron Vandal Blueprint",
    defenderReward: "Karak Wraith Receiver",
  },
  {
    node: "Morax",
    planet: "Europa",
    isComplete: false,
    attackerFaction: "Grineer",
    defenderFaction: "Corpus",
    attackerProgress: 15319,
    defenderProgress: 27681,
    totalProgress: 43000,
    attackerReward: "Detonite Injector x3",
    defenderReward: "Fieldron x3",
  },
  {
    node: "Orias",
    planet: "Europa",
    isComplete: false,
    attackerFaction: "Grineer",
    defenderFaction: "Corpus",
    attackerProgress: 30995,
    defenderProgress: 5005,
    totalProgress: 36000,
    attackerReward: "Latron Wraith Barrel",
    defenderReward: "Snipetron Vandal Stock",
  },
  {
    node: "Minthe",
    planet: "Pluto",
    isComplete: false,
    attackerFaction: "Grineer",
    defenderFaction: "Corpus",
    attackerProgress: 13245,
    defenderProgress: 34755,
    totalProgress: 48000,
    attackerReward: "Detonite Injector x3",
    defenderReward: "Fieldron x3",
  },
  {
    node: "Iliad",
    planet: "Phobos",
    isComplete: false,
    attackerFaction: "Infestation",
    defenderFaction: "Corpus",
    attackerProgress: 22800,
    defenderProgress: 7200,
    totalProgress: 30000,
    attackerReward: "No reward",
    defenderReward: "Mutalist Alad V Nav Coordinate",
  },
];

export const nightwave: Nightwave = {
  name: "Nightwave Series 16",
  phase: "Phase 0 - Intermission 16",
  isActive: true,
  seasonStart: "10/27/2025",
  seasonEnd: "5/25/2026",
  daysRemaining: "133 days, 18 hours remaining",
  dailyChallenges: [
    { title: "Doppelganger", description: "Deploy a Specter", expires: "1/12/2026", timeLeft: "18h 27m", type: "daily" },
    { title: "Energizing", description: "Pick up 20 Energy Orbs", expires: "1/13/2026", timeLeft: "1d 18h", type: "daily" },
    { title: "Power Trip", description: "Kill 150 Enemies with Abilities", expires: "1/14/2026", timeLeft: "2d 18h", type: "daily" },
  ],
  weeklyChallenges: [
    { title: "Mission Complete XI", description: "Complete any 15 missions", expires: "1/12/2026", timeLeft: "18h 27m", type: "weekly" },
    { title: "Eximus Eliminator XI", description: "Kill 30 Eximus", expires: "1/12/2026", timeLeft: "18h 27m", type: "weekly" },
    { title: "Not a Warning Shot XI", description: "Kill 500 Enemies", expires: "1/12/2026", timeLeft: "18h 27m", type: "weekly" },
    { title: "Earth Fisher", description: "Catch 6 Rare Fish in the Plains of Eidolon", expires: "1/12/2026", timeLeft: "18h 27m", type: "weekly" },
    { title: "Sound Sleeper", description: "Complete 3 Nightmare missions of any type", expires: "1/12/2026", timeLeft: "18h 27m", type: "weekly" },
    { title: "Profit-Taker", description: "Kill Profit-Taker", expires: "1/12/2026", timeLeft: "18h 27m", type: "weekly" },
    { title: "Eximus Executioner", description: "Kill 100 Eximus", expires: "1/12/2026", timeLeft: "18h 27m", type: "weekly" },
  ],
};

// Helper functions
export const getTierColor = (tier: string): string => {
  const colors: Record<string, string> = {
    Lith: "#967259",
    Meso: "#4a9c4e",
    Neo: "#3d8b8b",
    Axi: "#c9a227",
    Requiem: "#b33636",
    Omnia: "#8b5bb5",
  };
  return colors[tier] || "#666";
};

export const getFactionColor = (faction: string): string => {
  const colors: Record<string, string> = {
    Grineer: "#c83232",
    Corpus: "#3296c8",
    Infestation: "#64c864",
  };
  return colors[faction] || "#666";
};
