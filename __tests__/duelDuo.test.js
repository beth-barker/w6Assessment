const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking the draw button displays bot choices", async () => {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id("draw")).click()
    await driver.wait(until.elementLocated(By.id("choices")), 2000);
  });

  test("can add to duo when button is clicked", async () => {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.css('button[onclick="chooseBot(0)"]')).click()
    await driver.sleep(2000);
  })
});

