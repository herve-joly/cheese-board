const sequelize = require("../src/db/connection");
const { User } = require("../src/models/User");
const { Cheese } = require("../src/models/Cheese");
const { Board } = require("../src/models/Board");
const { seedUser, seedBoard, seedCheese } = require("./seedData");

//Setup - Teardown
beforeAll(async () => {
  // the 'sync' method will create tables based on the model class
  // by setting 'force:true' the tables are recreated each time the
  // test suite is run
  await sequelize.sync({ force: true });
});
afterEach(async () => {
  //drop and create tables afeter each test.
  await User.sync({ force: true });
  await Cheese.sync({ force: true });
  await Board.sync({ force: true });
});
afterAll(async () => {
  //drop tables at the end of the test suite.
  await sequelize.drop();
});

//Test for table creation and data insertion into table
describe("Testing the tables creation", () => {
  test("User table creation", async () => {
    const testUser = await User.create(seedUser[0]);
    const testUser2 = await User.create(seedUser[2]);
    expect(testUser.username).toBe("Jane");
    expect(testUser.email).toBe("jane.doe@email.com");
    expect(testUser2.username).toBe("Joe");
    expect(testUser2.email).toBe("joe.doe@email.com");
  });
  test("Board table creation", async () => {
    const testBoard = await Board.create(seedBoard[0]);
    const testBoard2 = await Board.create(seedBoard[1]);
    expect(testBoard.type).toBe("French");
    expect(testBoard.rating).toBe(10);
    expect(testBoard2.type).toBe("English");
    expect(testBoard2.rating).toBe(5);
  });
  test("Cheese table creation", async () => {
    const testCheese = await Cheese.create(seedCheese[0]);
    const testCheese2 = await Cheese.create(seedCheese[2]);
    expect(testCheese.title).toBe("Camembert");
    expect(testCheese.description).toBe("something");
    expect(testCheese2.title).toBe("Cheddar");
    expect(testCheese2.description).toBe("some other thing");
  });
});
