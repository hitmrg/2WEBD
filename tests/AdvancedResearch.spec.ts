import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const closeButton = page.getByLabel("Close tanstack query devtools", {
    exact: true,
  });
  await expect(closeButton).toBeVisible();
  await closeButton.click();

  const advancedSearchButton = page.getByRole("button", {
    name: "Recherches Avancées",
  });
  await expect(advancedSearchButton).toBeVisible();
  await advancedSearchButton.click();

  const departmentContainer = page.locator("#department-container");
  await expect(departmentContainer).toBeVisible();
  await departmentContainer.selectOption("15");

  const objectContainer = page.locator("#object-container");
  await expect(objectContainer).toBeVisible();
  await objectContainer.click();
  await objectContainer.fill("*");

  const startDateContainer = page.locator("#start-date-container");
  await expect(startDateContainer).toBeVisible();
  await startDateContainer.click();
  await startDateContainer.fill("1507");

  const endDateContainer = page.locator("#end-date-container");
  await expect(endDateContainer).toBeVisible();
  await endDateContainer.click();
  await endDateContainer.fill("1510");

  const isHighLightCheckbox = page.locator("#isHighLight-container");
  await expect(isHighLightCheckbox).toBeVisible();
  await isHighLightCheckbox.check();

  const artworkImageCheckbox = page.locator("#artworkImage-container");
  await expect(artworkImageCheckbox).toBeVisible();
  await artworkImageCheckbox.check();

  const isOnViewCheckbox = page.locator("#isOnView-container");
  await expect(isOnViewCheckbox).toBeVisible();
  await isOnViewCheckbox.check();

  const searchButton = page.getByRole("button", { name: "Search" });
  await expect(searchButton).toBeVisible();
  await searchButton.click();

  const unknownArtistText = page.getByText("By: Unknown Artist");
  await expect(unknownArtistText).toBeVisible();
  await unknownArtistText.click();

  const workshopOfGiovanniText = page.getByText("By: workshop of Giovanni");
  await expect(workshopOfGiovanniText).toBeVisible();
  await workshopOfGiovanniText.click();

  const pageHeading = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeading).toBeVisible();
  await pageHeading.click();

  const emperorVespasianLink = page.getByRole("link", {
    name: "Artwork Emperor Vespasian",
  });
  await expect(emperorVespasianLink).toBeVisible();
  await emperorVespasianLink.click();

  const emperorVespasianTitle = page.getByText("Title: Emperor Vespasian");
  await expect(emperorVespasianTitle).toBeVisible();
  await emperorVespasianTitle.click();

  const mainArtworkImg = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg).toBeVisible();
  await mainArtworkImg.click();

  const backButton = page.getByRole("button", { name: "Retour" });
  await expect(backButton).toBeVisible();
  await backButton.click();
});
