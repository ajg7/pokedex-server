exports.seed = function (knex) {

  const pokemon = [
  {
    name: "magmar",
    type1: "fire",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/126.png",
    number: 126,
    height: 13,
    weight: 445,
    entry: "Its body always burns with an orange glow that enables it to hide perfectly among flames.",
    habitat: "mountain",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "pinsir",
    type1: "bug",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/127.png",
    number: 127,
    height: 15,
    weight: 550,
    entry: "If it fails to crush the victim in its pincers, it will swing it around and toss it hard.",
    habitat: "forest",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "tauros",
    type1: "normal",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/128.png",
    number: 128,
    height: 14,
    weight: 884,
    entry: "When it targets an enemy, it charges furiously while whipping its body with its long tails.",
    habitat: "grassland",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "magikarp",
    type1: "water",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/129.png",
    number: 129,
    height: 9,
    weight: 100,
    entry: "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
    habitat: "waters-edge",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "gyarados",
    type1: "water",
    type2: "flying",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/130.png",
    number: 130,
    height: 65,
    weight: 2350,
    entry: "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
    habitat: "waters-edge",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "lapras",
    type1: "water",
    type2: "ice",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/131.png",
    number: 131,
    height: 25,
    weight: 2200,
    entry: "A POKéMON that has been over­ hunted almost to extinction. It can ferry people across the water.",
    habitat: "sea",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "ditto",
    type1: "normal",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png",
    number: 132,
    height: 3,
    weight: 40,
    entry: "It can freely recombine its own cellular structure to transform into other life-forms.",
    habitat: "urban",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "eevee",
    type1: "normal",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/133.png",
    number: 133,
    height: 3,
    weight: 65,
    entry: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones.",
    habitat: "urban",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "vaporeon",
    type1: "water",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/134.png",
    number: 134,
    height: 10,
    weight: 290,
    entry: "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's.",
    habitat: "urban",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "jolteon",
    type1: "electric",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/135.png",
    number: 135,
    height: 8,
    weight: 245,
    entry: "It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts.",
    habitat: "urban",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "flareon",
    type1: "fire",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/136.png",
    number: 136,
    height: 9,
    weight: 250,
    entry: "When storing thermal energy in its body, its temperature could soar to over 1600 C.",
    habitat: "urban",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "porygon",
    type1: "normal",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/137.png",
    number: 137,
    height: 8,
    weight: 365,
    entry: "A POKéMON that consists entirely of programming code. Capable of moving freely in cyberspace.",
    habitat: "urban",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "omanyte",
    type1: "rock",
    type2: "water",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/138.png",
    number: 138,
    height: 4,
    weight: 75,
    entry: "Although long extinct, in rare cases, it can be genetically resurrected from fossils.",
    habitat: "sea",
    legendary: false, 
    mythical: false,
    ancient: true
  },
  {
    name: "omastar",
    type1: "rock",
    type2: "water",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/139.png",
    number: 139,
    height: 10,
    weight: 350,
    entry: "Once wrapped around its prey, it never lets go. It eats the prey by tearing at it with sharp fangs.",
    habitat: "sea",
    legendary: false, 
    mythical: false,
    ancient: true
  },
  {
    name: "kabuto",
    type1: "rock",
    type2: "water",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/140.png",
    number: 140,
    height: 5,
    weight: 115,
    entry: "A POKéMON that was resurrected from a fossil found in what was once the ocean floor eons ago.",
    habitat: "sea",
    legendary: false, 
    mythical: false,
    ancient: true
  },
  {
    name: "kabutops",
    type1: "rock",
    type2: "water",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/141.png",
    number: 141,
    height: 13,
    weight: 405,
    entry: "Its sleek shape is perfect for swim­ming. It slashes prey with its claws and drains the body fluids.",
    habitat: "sea",
    legendary: false, 
    mythical: false,
    ancient: true
  },
  {
    name: "aerodactyl",
    type1: "rock",
    type2: "flying",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/142.png",
    number: 142,
    height: 18,
    weight: 590,
    entry: "A ferocious, pre­historic POKéMON that goes for the enemy's throat with its serrated saw-like fangs.",
    habitat: "mountain",
    legendary: false, 
    mythical: false,
    ancient: true
  },
  {
    name: "snorlax",
    type1: "normal",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/143.png",
    number: 143,
    height: 21,
    weight: 4600,
    entry: "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
    habitat: "mountain",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "articuno",
    type1: "ice",
    type2: "flying",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/144.png",
    number: 144,
    height: 17,
    weight: 554,
    entry: "A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.",
    habitat: "unknown",
    legendary: true, 
    mythical: false,
    ancient: false
  },
  {
    name: "zapdos",
    type1: "electric",
    type2: "flying",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/145.png",
    number: 145,
    height: 16,
    weight: 526,
    entry: "A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.",
    habitat: "unknown",
    legendary: true, 
    mythical: false,
    ancient: false
  },
  {
    name: "moltres",
    type1: "fire",
    type2: "flying",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/146.png",
    number: 146,
    height: 20,
    weight: 600,
    entry: "It is said to be the legendary bird Pokémon of fire. Every flap of its wings creates a dazzling flare of flames.",
    habitat: "unknown",
    legendary: true, 
    mythical: false,
    ancient: false
  },
  {
    name: "dratini",
    type1: "dragon",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/147.png",
    number: 147,
    height: 18,
    weight: 33,
    entry: "Long considered a mythical POKéMON until recently when a small colony was found living underwater.",
    habitat: "waters-edge",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "dragonair",
    type1: "dragon",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/148.png",
    number: 148,
    height: 40,
    weight: 165,
    entry: "A mystical POKéMON that exudes a gentle aura. Has the ability to change climate conditions.",
    habitat: "waters-edge",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "dragonite",
    type1: "dragon",
    type2: "flying",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/149.png",
    number: 149,
    height: 22,
    weight: 2100,
    entry: "An extremely rarely seen marine POKéMON. Its intelligence is said to match that of humans.",
    habitat: "waters-edge",
    legendary: false, 
    mythical: false,
    ancient: false
  },
  {
    name: "mewtwo",
    type1: "psychic",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/150.png",
    number: 150,
    height: 20,
    weight: 1220,
    entry: "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
    habitat: "unknown",
    legendary: true, 
    mythical: false,
    ancient: false
  },
  {
    name: "mew",
    type1: "psychic",
    type2: null,
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/151.png",
    number: 151,
    height: 4,
    weight: 40,
    entry: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
    habitat: "unknown",
    legendary: false, 
    mythical: true,
    ancient: false
  },


  ]

  return knex("pokemon").insert(pokemon)
}