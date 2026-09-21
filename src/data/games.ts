import { Game, Genre } from '../types';

export const GAMES_DATA: Game[] = [
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    genre: 'RPG',
    subGenres: ['Action RPG', 'Open World', 'Dark Fantasy', 'Souls-like'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One'],
    releaseYear: 2022,
    releaseDate: 'February 25, 2022',
    developer: 'FromSoftware Inc.',
    publisher: 'Bandai Namco Entertainment',
    engine: 'Proprietary FromSoftware Engine',
    rating: 96,
    ageRating: 'ESRB Mature (17+)',
    modes: ['Single-player', 'Online Co-op', 'PvP Multiplayer'],
    shortDescription: 'An expansive dark fantasy action RPG set in the vast Lands Between, featuring treacherous dungeons and intricate combat.',
    synopsis: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. Journey through colossal castles, mystical forests, and subterranean labyrinthine cities in a world crafted by Hidetaka Miyazaki and George R. R. Martin.',
    keyFeatures: [
      'Vast interconnected open world featuring seamless traversal on Torrent the spectral steed',
      'Unforgiving tactical combat with hundreds of weapons, spells, weapon skills (Ashes of War), and spirit summons',
      'Rich environmental storytelling with deep lore and multifaceted NPC questlines',
      'Dynamic weather patterns, day-night cycles affecting enemy encounters and world bosses'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-8400 or AMD Ryzen 3 3300X',
        gpu: 'NVIDIA GeForce GTX 1060 3GB or AMD Radeon RX 580 4GB',
        ram: '12 GB RAM',
        storage: '60 GB available space (SSD recommended)'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        cpu: 'Intel Core i7-8700K or AMD Ryzen 5 3600X',
        gpu: 'NVIDIA GeForce GTX 1070 8GB or AMD Radeon RX Vega 56 8GB',
        ram: '16 GB RAM',
        storage: '60 GB available space (NVMe SSD)'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    tags: ['Masterpiece', 'Souls-like', 'Open World', 'Dark Fantasy', 'GOTY']
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    subGenres: ['Action RPG', 'Sci-Fi', 'Cyberpunk', 'First-Person'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One'],
    releaseYear: 2020,
    releaseDate: 'December 10, 2020 (v2.0 in 2023)',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT',
    engine: 'REDengine 4',
    rating: 89,
    ageRating: 'ESRB Mature (17+)',
    modes: ['Single-player'],
    shortDescription: 'An open-world, action-adventure RPG set in the megalopolis of Night City, obsessed with power, glamour and body modification.',
    synopsis: 'Play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. Explore Night City, a vast urban dystopia where your choices shape the story and the world around you, while co-existing with the digital ghost of rockstar terrorist Johnny Silverhand.',
    keyFeatures: [
      'Stunning futuristic metropolis featuring six distinct multi-layered districts with verticality and neon grit',
      'Comprehensive cyberware modification system altering combat mobility, optics, and hacking prowess',
      'Full vehicle combat, high-speed chases, and immersive first-person cinematic storytelling',
      'Full path-tracing graphics technology showcase with advanced real-time ray-traced lighting'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Core i7-6700 or Ryzen 5 1600',
        gpu: 'Geforce GTX 1060 6GB or Radeon RX 580 8GB',
        ram: '12 GB RAM',
        storage: '70 GB SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        cpu: 'Core i7-12700 or Ryzen 7 7800X3D',
        gpu: 'Geforce RTX 3080 or Radeon RX 7900 XT',
        ram: '16 GB RAM',
        storage: '70 GB NVMe SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    tags: ['Cyberpunk', 'Sci-Fi', 'Night City', 'Ray Tracing', 'Story Rich']
  },
  {
    id: 'doom-eternal',
    title: 'DOOM Eternal',
    genre: 'FPS & Shooter',
    subGenres: ['Fast-Paced FPS', 'Arena Shooter', 'Demonic Action'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One', 'Nintendo Switch'],
    releaseYear: 2020,
    releaseDate: 'March 20, 2020',
    developer: 'id Software',
    publisher: 'Bethesda Softworks',
    engine: 'id Tech 7',
    rating: 88,
    ageRating: 'ESRB Mature (17+)',
    modes: ['Single-player', 'Multiplayer (BATTLEMODE)'],
    shortDescription: 'Hell’s armies have invaded Earth. Become the Slayer in an epic campaign to conquer demons across dimensions and stop humanity’s destruction.',
    synopsis: 'As the Doom Slayer, you return to find Earth has suffered a demonic invasion. Raze Hell and discover the Slayer’s origins and his enduring mission to rip and tear... until it is done. Experience the ultimate combination of speed, power, and visceral first-person combat.',
    keyFeatures: [
      'Resource management combat loop: Glory Kills for health, Chainsaw for ammo, Flame Belch for armor',
      'High-velocity mobility suite including double dash, wall-climbing, and super shotgun Meat Hook',
      'Destructible demon mechanic revealing progressive organ and bone damage on hit',
      'Pounding, adrenaline-fueled industrial metal soundtrack composed by Mick Gordon'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5 @ 3.3 GHz or AMD Ryzen 3 @ 3.1 GHz',
        gpu: 'NVIDIA GeForce GTX 1050Ti (4GB) or AMD Radeon R9 280 (3GB)',
        ram: '8 GB RAM',
        storage: '50 GB available space'
      },
      recommended: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i7-6700K or AMD Ryzen 7 1800X',
        gpu: 'NVIDIA GeForce GTX 1080 (8GB) or AMD Radeon RX Vega56 (8GB)',
        ram: '8 GB RAM',
        storage: '50 GB available space (SSD)'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Adrenaline', 'Fast-Paced', 'Demons', 'Heavy Metal', 'id Software']
  },
  {
    id: 'forza-horizon-5',
    title: 'Forza Horizon 5',
    genre: 'Racing',
    subGenres: ['Open World Racing', 'Arcade Sim', 'Automotive'],
    platforms: ['PC', 'Xbox Series X/S', 'Xbox One'],
    releaseYear: 2021,
    releaseDate: 'November 9, 2021',
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    engine: 'ForzaTech',
    rating: 92,
    ageRating: 'ESRB Everyone (E)',
    modes: ['Single-player', 'Online Co-op', 'Online Multiplayer'],
    shortDescription: 'Your ultimate Horizon adventure awaits! Explore vibrant open-world landscapes of Mexico with limitless driving action in hundreds of the world’s greatest cars.',
    synopsis: 'Lead breathtaking expeditions across the vibrant and ever-evolving open world landscapes of Mexico. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons, and a towering snow-capped volcano with realistic seasonal weather.',
    keyFeatures: [
      'Over 700 painstakingly modeled licensed real-world vehicles with full interior customization',
      'Diverse Mexican biomes featuring dynamic weather systems including massive dust storms and tropical storms',
      'EventLab toolset enabling custom race rules, stunt arenas, and unique game modes',
      'Photogrammetry-derived terrain rendered at native 4K 60FPS on modern consoles'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 version 15063.0 or higher',
        cpu: 'Intel i5-4460 or AMD Ryzen 3 1200',
        gpu: 'NVidia GTX 970 OR AMD RX 470',
        ram: '8 GB RAM',
        storage: '110 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        cpu: 'Intel i7-10700K or AMD Ryzen 7 3800XT',
        gpu: 'NVidia RTX 2070 or AMD RX 5700 XT',
        ram: '16 GB RAM',
        storage: '110 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    tags: ['Automotive', 'Supercars', 'Mexico', 'Horizon Festival', 'Photorealistic']
  },
  {
    id: 'resident-evil-4',
    title: 'Resident Evil 4 (Remake)',
    genre: 'Survival Horror',
    subGenres: ['Action Horror', 'Third-Person', 'Survival'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'iOS'],
    releaseYear: 2023,
    releaseDate: 'March 24, 2023',
    developer: 'Capcom',
    publisher: 'Capcom',
    engine: 'RE Engine',
    rating: 93,
    ageRating: 'ESRB Mature (17+)',
    modes: ['Single-player'],
    shortDescription: 'Survival is only the beginning. Six years after the biological disaster in Raccoon City, Leon S. Kennedy tracks the president’s abducted daughter to a secluded European village.',
    synopsis: 'Agent Leon S. Kennedy is sent on a perilous mission to rescue the kidnapped daughter of the US President from a remote Spanish village gripped by the nightmarish cult known as Los Iluminados. Reimagined with modern gameplay, a reimagined storyline, and vividly detailed graphics.',
    keyFeatures: [
      'Refined knife parry mechanics allowing defensive counters against chainsaws and projectiles',
      'Beloved Merchant system with weapon tuning, case attachments, and bounty requests',
      'Photorealistic visual fidelity powered by Capcom’s proprietary RE Engine',
      'Tense resource management balancing ammunition craftables, herbs, and briefcase spatial tetris'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64 bit)',
        cpu: 'AMD Ryzen 3 1200 / Intel Core i5-7500',
        gpu: 'AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 1050 Ti 4GB',
        ram: '8 GB RAM',
        storage: '67 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64 bit)',
        cpu: 'AMD Ryzen 5 3600 / Intel Core i7 8700',
        gpu: 'AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070',
        ram: '16 GB RAM',
        storage: '67 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Horror', 'Capcom', 'Leon Kennedy', 'Remake', 'RE Engine']
  },
  {
    id: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    genre: 'RPG',
    subGenres: ['CRPG', 'Turn-Based Tactics', 'D&D 5E', 'Fantasy'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    releaseYear: 2023,
    releaseDate: 'August 3, 2023',
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    engine: 'Divinity 4.0 Engine',
    rating: 96,
    ageRating: 'ESRB Mature (17+)',
    modes: ['Single-player', 'Online Co-op', 'Split-screen Co-op'],
    shortDescription: 'Gather your party and return to the Forgotten Realms in an epic story of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.',
    synopsis: 'Abducted, infected, lost. You are turning into a monster, but as the parasite grows inside you, so does your power. Choose from 12 classes and 11 races based on the D&D 5th Edition ruleset to chart a bespoke narrative through Faerûn with unparalleled agency and reactive consequences.',
    keyFeatures: [
      'Unprecedented narrative reactivity with thousands of branching outcomes and dialogue choices',
      'Tactical turn-based combat utilizing environmental surfaces, verticality, and physics manipulation',
      'Deep romantic and moral dynamics with richly voiced companion characters',
      'Full cinematic camera presentation for all dialogues and cutscenes'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel I5 4690 / AMD FX 8350',
        gpu: 'Nvidia GTX 970 / RX 480 (4GB+ of VRAM)',
        ram: '8 GB RAM',
        storage: '150 GB available space (SSD required)'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        cpu: 'Intel i7 8700K / AMD r5 3600',
        gpu: 'Nvidia 2060 Super / RX 5700 XT (8GB+ of VRAM)',
        ram: '16 GB RAM',
        storage: '150 GB available space (NVMe SSD)'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    tags: ['CRPG', 'Dungeons & Dragons', 'Larian', 'GOTY', 'Choice-Driven']
  },
  {
    id: 'street-fighter-6',
    title: 'Street Fighter 6',
    genre: 'Fighting',
    subGenres: ['2D Fighting', 'Competitive', 'Martial Arts'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S'],
    releaseYear: 2023,
    releaseDate: 'June 2, 2023',
    developer: 'Capcom',
    publisher: 'Capcom',
    engine: 'RE Engine',
    rating: 92,
    ageRating: 'ESRB Teen (13+)',
    modes: ['Single-player (World Tour)', 'Local Versus', 'Online Battle Hub'],
    shortDescription: 'Powered by Capcom’s proprietary RE Engine, Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground and Battle Hub.',
    synopsis: 'Experience a new era of fighting games. With a redesigned visual aesthetic, innovative Drive Gauge combat mechanic, and multiple control schemes (Classic, Modern, and Dynamic), Street Fighter 6 welcomes both veterans and newcomers to the global arena.',
    keyFeatures: [
      'Drive System: A universal 6-bar gauge governing Drive Impact, Drive Parry, Drive Rush, and Overdrive arts',
      'World Tour: An immersive single-player action-adventure mode exploring Metro City with custom avatars',
      'Rollback Netcode and cross-play across all platforms for seamless low-latency online tournaments',
      'Real-time commentary feature featuring famous esports commentators in multiple languages'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64 bit)',
        cpu: 'Intel Core i5-7500 / AMD Ryzen 3 1200',
        gpu: 'GeForce GTX 1060 (VRAM 6GB) / Radeon RX 580 (VRAM 4GB)',
        ram: '8 GB RAM',
        storage: '60 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64 bit)',
        cpu: 'Intel Core i7 8700 / AMD Ryzen 5 3600',
        gpu: 'GeForce RTX 2070 / Radeon RX 5700 XT',
        ram: '16 GB RAM',
        storage: '60 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Fighting', 'Capcom', 'Esports', 'Drive System', 'Rollback Netcode']
  },
  {
    id: 'ea-sports-fc-24',
    title: 'EA SPORTS FC 24',
    genre: 'Sports',
    subGenres: ['Soccer / Football', 'Simulation', 'Team Sports'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One', 'Nintendo Switch'],
    releaseYear: 2023,
    releaseDate: 'September 29, 2023',
    developer: 'EA Canada & EA Romania',
    publisher: 'Electronic Arts',
    engine: 'Frostbite Engine',
    rating: 77,
    ageRating: 'ESRB Everyone (E)',
    modes: ['Single-player (Career)', 'Local Multiplayer', 'Online Ultimate Team', 'Clubs'],
    shortDescription: 'EA SPORTS FC 24 welcomes you to The World’s Game with HyperMotionV, PlayStyles optimized by Opta, and a revolutionized Frostbite Engine.',
    synopsis: 'Experience authentic soccer with 19,000+ fully licensed players, 700+ teams, and 30+ leagues worldwide. HyperMotionV captures matches using volumetric data from over 180 top-tier matches to replicate real-world player rhythm and fluidity.',
    keyFeatures: [
      'HyperMotionV technology translating volumetric data from real UEFA Champions League matches into animation',
      'PlayStyles dimensional system giving individual players signature abilities backed by Opta data',
      'Ultimate Team evolutions allowing players to upgrade favorite club legends and introduce women’s football',
      'Cross-play enabled across platforms of the same console generation'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 - 64-Bit',
        cpu: 'Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ',
        gpu: 'NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB',
        ram: '8 GB RAM',
        storage: '100 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 - 64-Bit',
        cpu: 'Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ',
        gpu: 'NVIDIA GeForce GTX 1660 or AMD RX 5600 XT',
        ram: '12 GB RAM',
        storage: '100 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Soccer', 'Sports', 'Frostbite', 'Opta', 'Ultimate Team']
  },
  {
    id: 'hades-ii',
    title: 'Hades II',
    genre: 'Indie',
    subGenres: ['Action Roguelike', 'Dungeon Crawler', 'Greek Mythology', 'Hack and Slash'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S', 'Nintendo Switch'],
    releaseYear: 2024,
    releaseDate: 'May 6, 2024 (Early Access)',
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    engine: 'Supergiant Proprietary Engine',
    rating: 94,
    ageRating: 'ESRB Teen (13+)',
    modes: ['Single-player'],
    shortDescription: 'Battle beyond the Underworld using dark sorcery to take on the Titan of Time in this spellbinding sequel to the award-winning rogue-like.',
    synopsis: 'As Melinoë, the immortal Princess of the Underworld and sister to Zagreus, explore a bigger, deeper mythic world, vanquishing the forces of the Titan Chronos with the full might of Olympus behind you in an expansive story that continually unfolds through every defeat and triumph.',
    keyFeatures: [
      'Witchcraft and Magick system: Cast hexes, channel Omega moves, and craft incantations with the Cauldron',
      'Over a dozen Olympian deities offering synergistic boons, duo boons, and infusions',
      'Hand-painted painterly art style with responsive fluid combat and original dynamic score by Darren Korb',
      'Boon alter, familiar animal companions (Frinos the frog, Toula the cat), and extensive keepsake perks'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Dual Core 2.4 GHz',
        gpu: 'GeForce GTX 950, Radeon HD 7870, or Intel HD Graphics 530',
        ram: '8 GB RAM',
        storage: '10 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        cpu: 'Quad Core 2.4 GHz+',
        gpu: 'GeForce RTX 2060, Radeon RX 5600 XT',
        ram: '16 GB RAM',
        storage: '10 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    tags: ['Roguelike', 'Mythology', 'Supergiant', 'Sorcery', 'Indie Masterpiece']
  },
  {
    id: 'civilization-vi',
    title: "Sid Meier's Civilization VI",
    genre: 'Strategy',
    subGenres: ['4X Strategy', 'Turn-Based Strategy', 'Historical Simulation'],
    platforms: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch', 'iOS', 'Android'],
    releaseYear: 2016,
    releaseDate: 'October 21, 2016',
    developer: 'Firaxis Games',
    publisher: '2K Games',
    engine: 'Firaxis Engine',
    rating: 88,
    ageRating: 'ESRB Everyone 10+ (E10+)',
    modes: ['Single-player', 'Multiplayer (Hotseat, LAN, Online)'],
    shortDescription: 'Civilization VI offers new ways to interact with your world: cities now physically expand across the map, active research in technology and culture unlocks new potential.',
    synopsis: 'Guide a civilization from the Stone Age to the Information Age. Build towering wonders of the world, wage war, conduct diplomacy, advance your culture, and go head-to-head with history’s most renowned leaders to build the greatest civilization the world has ever known.',
    keyFeatures: [
      'Unstacked cities: Districts now occupy individual tiles on the board, requiring strategic spatial planning',
      'Active Eureka and Inspiration research boosts that reward historical gameplay actions',
      'Multiple victory conditions: Domination, Science, Culture, Religion, and Diplomatic',
      'Natural disasters and climate change mechanics via the Gathering Storm expansion'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7x64 / Windows 8.1x64 / Windows 10x64',
        cpu: 'Intel Core i3 2.5 Ghz or AMD Phenom II 2.6 Ghz',
        gpu: '1 GB DirectX 11 Video Card (AMD 5570 or Nvidia 450)',
        ram: '4 GB RAM',
        storage: '12 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 64bit',
        cpu: 'Fourth Generation Intel Core i5 2.5 Ghz or AMD FX8350 4.0 Ghz',
        gpu: '2 GB DirectX 11 Video Card (AMD 7970 or Nvidia 770)',
        ram: '8 GB RAM',
        storage: '16 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['4X', 'Strategy', 'Turn-Based', 'Historical', 'Just One More Turn']
  },
  {
    id: 'god-of-war-ragnarok',
    title: 'God of War Ragnarök',
    genre: 'Action-Adventure',
    subGenres: ['Action', 'Mythology', 'Hack and Slash', 'Story-Driven'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4'],
    releaseYear: 2022,
    releaseDate: 'November 9, 2022 (PC in 2024)',
    developer: 'Santa Monica Studio',
    publisher: 'Sony Interactive Entertainment',
    engine: 'Proprietary Santa Monica Engine',
    rating: 94,
    ageRating: 'ESRB Mature (17+)',
    modes: ['Single-player'],
    shortDescription: 'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go across the Nine Realms.',
    synopsis: 'Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way, they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters.',
    keyFeatures: [
      'Master the Leviathan Axe, Blades of Chaos, and the new Draupnir Spear with elemental weapon infusions',
      'Dual protagonist progression featuring distinct combat movesets for both Kratos and Atreus',
      'Continuous one-shot camera direction immersing players from start to finish without camera cuts',
      'Deep combat arenas with vertical grapple points and devastating Spartan Rage styles'
    ],
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Norse Mythology', 'PlayStation', 'Kratos', 'Masterpiece', 'Cinematic']
  },
  {
    id: 'dead-space',
    title: 'Dead Space (Remake)',
    genre: 'Survival Horror',
    subGenres: ['Sci-Fi Horror', 'Third-Person Shooter', 'Atmospheric'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    releaseYear: 2023,
    releaseDate: 'January 27, 2023',
    developer: 'Motive Studio',
    publisher: 'Electronic Arts',
    engine: 'Frostbite Engine',
    rating: 89,
    ageRating: 'ESRB Mature (17+)',
    modes: ['Single-player'],
    shortDescription: 'The sci-fi survival-horror classic returns, completely rebuilt from the ground up to offer a deeper, more immersive experience on the USG Ishimura.',
    synopsis: 'Isaac Clarke is an everyday engineer on a mission to repair a vast planet-cracker mining ship, the USG Ishimura, only to discover something has gone horribly wrong. The ship’s crew has been slaughtered and Isaac’s beloved partner, Nicole, is lost somewhere on board. Alone and trapped with only his engineering tools, Isaac races to find Nicole as the nightmare mystery unfolds.',
    keyFeatures: [
      'Strategic dismemberment system rebuilt with layers of peeling flesh and tendon damage',
      'Continuous seamless ship exploration with zero loading screens and interconnected tram stations',
      'Intensity Director dynamically altering lighting, audio stings, and enemy ambushes',
      'Fully voiced Isaac Clarke providing genuine character perspective to the Ishimura disaster'
    ],
    systemRequirements: {
      minimum: {
        os: 'Window 10 64-bit +',
        cpu: 'Ryzen 5 2600x, Core i5 8600',
        gpu: 'AMD RX 5700, GTX 1070',
        ram: '16 GB RAM',
        storage: '50 GB available space (SSD required)'
      },
      recommended: {
        os: 'Window 10 64-bit +',
        cpu: 'Ryzen 5 5600X, Core i5 11600K',
        gpu: 'Radeon RX 6700 XT, Geforce RTX 2070',
        ram: '16 GB RAM',
        storage: '50 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Sci-Fi', 'Horror', 'Frostbite', 'Ishimura', 'Dismemberment']
  },
  {
    id: 'apex-legends',
    title: 'Apex Legends',
    genre: 'FPS & Shooter',
    subGenres: ['Battle Royale', 'Hero Shooter', 'Fast-Paced FPS'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One', 'Nintendo Switch'],
    releaseYear: 2019,
    releaseDate: 'February 4, 2019',
    developer: 'Respawn Entertainment',
    publisher: 'Electronic Arts',
    engine: 'Source Engine (Heavily Modified)',
    rating: 89,
    ageRating: 'ESRB Teen (13+)',
    modes: ['Online Multiplayer (Trios, Duos, Ranked, Mixtape)'],
    shortDescription: 'Conquer with character in Apex Legends, a free-to-play Hero shooter where legendary characters with powerful abilities team up to battle for glory.',
    synopsis: 'Master an ever-growing roster of diverse Legends, deep tactical squad play, and bold new innovations that level up the battle royale experience—all within a rugged world where anything goes in the Outlands.',
    keyFeatures: [
      'Diverse Legend classes (Assault, Skirmisher, Recon, Support, Controller) with tactical and ultimate abilities',
      'Pioneering smart-ping communication system enabling silent squad coordination',
      'Fluid parkour traversal including slide-jumping, ziplines, and wall-bouncing',
      'Regular seasonal updates introducing new maps, weapons, and balance revisions'
    ],
    systemRequirements: {
      minimum: {
        os: '64-bit Windows 7',
        cpu: 'AMD FX 4350 or Equivalent, Intel Core i3 6300 or Equivalent',
        gpu: 'AMD Radeon HD 7730, NVIDIA GeForce GT 640',
        ram: '6 GB RAM',
        storage: '56 GB available space'
      },
      recommended: {
        os: '64-bit Windows 10',
        cpu: 'Intel i5 3570K or equivalent',
        gpu: 'Nvidia GeForce GTX 970 / AMD Radeon R9 290',
        ram: '8 GB RAM',
        storage: '56 GB available space'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Battle Royale', 'Hero Shooter', 'Respawn', 'Fast Movement', 'Free to Play']
  },
  {
    id: 'tekken-8',
    title: 'Tekken 8',
    genre: 'Fighting',
    subGenres: ['3D Fighting', 'Martial Arts', 'Competitive Esports'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    releaseYear: 2024,
    releaseDate: 'January 26, 2024',
    developer: 'Bandai Namco Studios',
    publisher: 'Bandai Namco Entertainment',
    engine: 'Unreal Engine 5',
    rating: 90,
    ageRating: 'ESRB Teen (13+)',
    modes: ['Single-player (Story Mode)', 'Arcade Quest', 'Online Ranked', 'Ghost Battles'],
    shortDescription: 'Fist Meets Fate! TEKKEN 8 continues the tragic saga of the Mishima bloodline and its world-shattering father-and-son grudge matches.',
    synopsis: 'Powered by Unreal Engine 5, Tekken 8 delivers the next chapter in video game history’s longest-running storyline. High-definition character models built from the ground up, high-fidelity skin and hair shaders, and immersive destructible environments bring bone-crunching martial arts to life.',
    keyFeatures: [
      'New Heat System mechanic rewarding aggressive offense with enhanced chip damage and Heat Smashes',
      'Unreal Engine 5 power powering dynamic stage destruction, floor breaks, and wall impacts',
      'AI Ghost Battle system that analyzes your fighting habits to simulate your personal playstyle',
      'Special Style toggle enabling simplified inputs for newcomers while maintaining competitive depth'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-Bit',
        cpu: 'Intel Core i5-6600K/AMD Ryzen 5 1600',
        gpu: 'Nvidia GeForce GTX 1050Ti/AMD Radeon R9 380X',
        ram: '8 GB RAM',
        storage: '100 GB available space'
      },
      recommended: {
        os: 'Windows 10 64-Bit',
        cpu: 'Intel Core i7-7700K/AMD Ryzen 5 2600',
        gpu: 'Nvidia GeForce RTX 2070/AMD Radeon RX 5700 XT',
        ram: '16 GB RAM',
        storage: '100 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Tekken', 'Unreal Engine 5', 'Heat System', '3D Fighter', 'Bandai Namco']
  },
  {
    id: 'gran-turismo-7',
    title: 'Gran Turismo 7',
    genre: 'Racing',
    subGenres: ['Motorsport Simulation', 'Track Racing', 'Automotive History'],
    platforms: ['PlayStation 5', 'PlayStation 4'],
    releaseYear: 2022,
    releaseDate: 'March 4, 2022',
    developer: 'Polyphony Digital',
    publisher: 'Sony Interactive Entertainment',
    engine: 'Polyphony Proprietary Engine',
    rating: 87,
    ageRating: 'ESRB Everyone (E)',
    modes: ['Single-player (GT Café)', 'Split-Screen 2P', 'Online Sport Mode', 'PSVR2 Mode'],
    shortDescription: 'Whether you’re a competitive or casual racer, collector, tuner, livery designer, or photographer – find your line with an astounding collection of game modes.',
    synopsis: 'Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Reintroduce legendary circuits, collect hundreds of classic cars in the GT Café, and experience cutting-edge vehicle physics calibrated with tire engineers and professional race drivers.',
    keyFeatures: [
      'Over 450 precision-scanned road and race cars from iconic manufacturers across motorsport history',
      'Realistic dynamic meteorological simulation affecting track grip, drying lines, and puddle formation',
      'Full integration with PlayStation VR2 providing complete 360-degree virtual cockpit realism',
      'Haptic feedback and adaptive triggers accurately conveying brake lockup and road curb vibrations'
    ],
    coverImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Simulation', 'PlayStation', 'PSVR2', 'Motorsport', 'Polyphony']
  },
  {
    id: 'alan-wake-2',
    title: 'Alan Wake 2',
    genre: 'Survival Horror',
    subGenres: ['Psychological Horror', 'Narrative Detective', 'Supernatural'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    releaseYear: 2023,
    releaseDate: 'October 27, 2023',
    developer: 'Remedy Entertainment',
    publisher: 'Epic Games Publishing',
    engine: 'Northlight Engine',
    rating: 89,
    ageRating: 'ESRB Mature (17+)',
    modes: ['Single-player'],
    shortDescription: 'A string of ritualistic murders threatens Bright Falls. Saga Anderson and Alan Wake fight supernatural darkness in two parallel psychological realities.',
    synopsis: 'What begins as a small-town murder investigation rapidly spirals into a nightmare. Saga Anderson, an accomplished FBI profiler, arrives to investigate. Meanwhile, Alan Wake, a trapped writer crafting a dark story to shape the reality around him, attempts to escape the nightmare of the Dark Place.',
    keyFeatures: [
      'Dual narrative structure alternating between FBI agent Saga Anderson and tortured writer Alan Wake',
      'Mind Place mechanic: An internal mental sanctuary where players piece together clues and case boards',
      'Stunning Northlight Engine visuals utilizing mesh shaders and full hardware ray-tracing',
      'Live-action multimedia integration blurring the line between interactive video game and cinema'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10/11 64-bit',
        cpu: 'Intel i5-7600K or AMD equivalent',
        gpu: 'GeForce RTX 2060 or Radeon RX 6600 (Mesh Shaders required)',
        ram: '16 GB RAM',
        storage: '90 GB SSD space'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        cpu: 'Ryzen 7 3700X or Intel equivalent',
        gpu: 'GeForce RTX 3070 or Radeon RX 6700 XT',
        ram: '16 GB RAM',
        storage: '90 GB NVMe SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Remedy', 'Northlight', 'Psychological Horror', 'Ray Tracing', 'Detective']
  },
  {
    id: 'portal-2',
    title: 'Portal 2',
    genre: 'Puzzle',
    subGenres: ['First-Person Puzzle', 'Sci-Fi Comedy', 'Physics'],
    platforms: ['PC', 'PlayStation 3', 'Xbox 360', 'Nintendo Switch'],
    releaseYear: 2011,
    releaseDate: 'April 19, 2011',
    developer: 'Valve Corporation',
    publisher: 'Valve Corporation',
    engine: 'Source Engine',
    rating: 95,
    ageRating: 'ESRB Everyone 10+ (E10+)',
    modes: ['Single-player', 'Two-Player Co-operative Campaign'],
    shortDescription: 'The sequel to the groundbreaking title that won over 30 game of the year awards. Portal 2 draws from the award-winning formula of innovative gameplay, story, and music.',
    synopsis: 'Reawaken in the Aperture Science Enrichment Center alongside the treacherous AI GLaDOS and the bumbling personality core Wheatley. Armed with the Aperture Science Handheld Portal Device, solve intricate spatial puzzles across dilapidated test chambers and the forgotten history of Aperture.',
    keyFeatures: [
      'Genius physics-based portal gun mechanic bending space and conservation of momentum',
      'Stand-alone two-player cooperative campaign starring test robots Atlas and P-Body',
      'Introduction of mobility gels: Propulsion Gel (speed), Repulsion Gel (bounce), and Conversion Gel',
      'Iconic voice acting performances by Ellen McLain, Stephen Merchant, and J.K. Simmons'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 / Vista / XP',
        cpu: '3.0 GHz P4, Dual Core 2.0 or AMD64X2',
        gpu: 'Video card must be 128 MB or more and DirectX 9-compatible with Pixel Shader 2.0b support',
        ram: '2 GB RAM',
        storage: '8 GB available space'
      },
      recommended: {
        os: 'Windows 7 / 10 / 11',
        cpu: 'Dual core or higher',
        gpu: 'NVIDIA GeForce 7600 / ATI Radeon X1600 or better',
        ram: '4 GB RAM',
        storage: '8 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Valve', 'Source Engine', 'Puzzle', 'Masterpiece', 'Co-op']
  },
  {
    id: 'hollow-knight',
    title: 'Hollow Knight',
    genre: 'Indie',
    subGenres: ['Metroidvania', 'Action-Adventure', 'Challenging 2D'],
    platforms: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'],
    releaseYear: 2017,
    releaseDate: 'February 24, 2017',
    developer: 'Team Cherry',
    publisher: 'Team Cherry',
    engine: 'Unity',
    rating: 90,
    ageRating: 'ESRB Everyone 10+ (E10+)',
    modes: ['Single-player'],
    shortDescription: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes.',
    synopsis: 'Beneath the fading town of Dirtmouth sleeps an ancient, ruined kingdom called Hallownest. Many are drawn below the surface, searching for riches, or glory, or answers to old secrets. As the silent Knight, traverse cavernous depths, battle tainted creatures and befriend bizarre bugs.',
    keyFeatures: [
      'Traditional hand-drawn 2D frame-by-frame animation bringing Hallownest to life',
      'Over 140 unique enemy types and 30 epic boss encounters with razor-sharp responsive controls',
      'Charm socketing system enabling deep customization of sword swings, spell energy, and mobility',
      'Expansive non-linear map with hidden rooms, breakable walls, and haunting orchestral soundtrack'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 (64bit)',
        cpu: 'Intel Core 2 Duo E5200',
        gpu: 'GeForce 9800GTX+ (1GB)',
        ram: '4 GB RAM',
        storage: '9 GB available space'
      },
      recommended: {
        os: 'Windows 10 (64bit)',
        cpu: 'Intel Core i5',
        gpu: 'GeForce GTX 560',
        ram: '8 GB RAM',
        storage: '9 GB SSD'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Metroidvania', 'Team Cherry', 'Indie', 'Soulslike 2D', 'Hallownest']
  },
  {
    id: 'celeste',
    title: 'Celeste',
    genre: 'Indie',
    subGenres: ['Precision Platformer', 'Emotional Story', 'Pixel Art'],
    platforms: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'],
    releaseYear: 2018,
    releaseDate: 'January 25, 2018',
    developer: 'Maddy Makes Games',
    publisher: 'Maddy Makes Games',
    engine: 'FNA / C#',
    rating: 92,
    ageRating: 'ESRB Everyone 10+ (E10+)',
    modes: ['Single-player'],
    shortDescription: 'Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight, hand-crafted platformer from the creators of TowerFall.',
    synopsis: 'A narrative-driven, single-player adventure about overcoming self-doubt and anxiety. Tackle hundreds of hand-crafted screens of devious platforming challenges, uncover devious secrets, and piece together the mystery of the mountain.',
    keyFeatures: [
      'Tight, responsive platforming controls centered around jumping, air-dashing, and climbing stamina',
      'Over 700 screens of hardcore platforming challenges with instantaneous respawns',
      'Deeply touching narrative exploring mental health and self-acceptance',
      'Award-winning electronic-acoustic soundtrack by Lena Raine'
    ],
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Platformer', 'Pixel Art', 'Lena Raine', 'Indie', 'Accurate Controls']
  },
  {
    id: 'nba-2k24',
    title: 'NBA 2K24',
    genre: 'Sports',
    subGenres: ['Basketball Simulation', 'Pro Sports', 'Career'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One', 'Nintendo Switch'],
    releaseYear: 2023,
    releaseDate: 'September 8, 2023',
    developer: 'Visual Concepts',
    publisher: '2K Sports',
    engine: 'Proprietary Visual Concepts Engine',
    rating: 74,
    ageRating: 'ESRB Everyone (E)',
    modes: ['Single-player (MyCAREER)', 'Local 2P', 'MyTEAM', 'The City / Online'],
    shortDescription: 'Grab your squad and experience the past, present, and future of hoops culture in NBA 2K24 with ProPLAY technology.',
    synopsis: 'Channel your inner Mamba Mentality as you recreate Kobe Bryant’s most dominant performances in the Mamba Moments. On current-gen consoles, ProPLAY translates real NBA game footage into dynamic, authentic in-game animations.',
    keyFeatures: [
      'ProPLAY technology capturing real-game NBA footage for unprecedented shot and dribble fidelity',
      'Mamba Moments: Relive legendary Kobe Bryant career performances with iconic challenges',
      'Expanded The City online hub with picturesque beachfront courts and streetball competitions',
      'Comprehensive MyTEAM card collecting with redesigned salary cap game mode'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit or Windows 11',
        cpu: 'Intel Core i3-2100 @ 3.10 GHz/ AMD FX-4100 @ 3.60 GHz',
        gpu: 'NVIDIA GeForce GT 450 1GB/ ATI Radeon HD 7770 1GB',
        ram: '4 GB RAM',
        storage: '110 GB available space'
      },
      recommended: {
        os: 'Windows 10 64-bit or Windows 11',
        cpu: 'Intel Core i5-4430 @ 3 GHz/ AMD FX-8370 @ 3.4 GHz',
        gpu: 'NVIDIA GeForce GTX 770 2GB/ ATI Radeon R9 270 2GB',
        ram: '8 GB RAM',
        storage: '110 GB available space'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=900&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=1600&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    tags: ['Basketball', 'NBA', 'Kobe Bryant', 'ProPLAY', '2K']
  }
];

export const ALL_GENRES: Genre[] = [
  'RPG',
  'FPS & Shooter',
  'Action-Adventure',
  'Racing',
  'Survival Horror',
  'Strategy',
  'Fighting',
  'Sports',
  'Indie',
  'Puzzle'
];

export const ALL_PLATFORMS = [
  'PC',
  'PlayStation 5',
  'Xbox Series X/S',
  'Nintendo Switch',
  'PlayStation 4',
  'Xbox One',
  'Android',
  'iOS'
] as const;
