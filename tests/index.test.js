const sequelize = require("../src/db/connection");
const { User } = require("../src/models/User");
const { Cheese } = require("../src/models/Cheese");
const { Board } = require("../src/models/Board");
const { seedUser } = require("./seedData");

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
    expect(testUser.username).toBe("Jane");
    expect(testUser.email).toBe("jane.doe@email.com");
  });
});
