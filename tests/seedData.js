const seedUser = [
  {
    username: "Jane",
    email: "jane.doe@email.com",
  },
  {
    username: "John",
    email: "john.doe@email.com",
  },
  {
    username: "Joe",
    email: "joe.doe@email.com",
  },
  {
    username: "Garry",
    email: "garry.doe@email.com",
  },
];

const seedBoard = [
  { type: "French", description: "Selection of French cheeses", rating: 10 },
  { type: "English", description: "Selection of English cheeses", rating: 5 },
  {
    type: "International",
    description: "Selection of French and English cheeses",
    rating: 8,
  },
];

const seedCheese = [
  {
    title: "Camembert",
    description: "something",
  },
  {
    title: "Brie",
    description: "something else",
  },
  {
    title: "Cheddar",
    description: "some other thing",
  },
  {
    title: "Red Leicester",
    description: "some description",
  },
];
module.exports = {
  seedUser,
  seedBoard,
  seedCheese,
};
