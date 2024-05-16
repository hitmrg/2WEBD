import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const closeButton = page.getByLabel("Close tanstack query devtools", {
    exact: true,
  });
  await expect(closeButton).toBeVisible();
  await closeButton.click();

  const searchInput = page.getByPlaceholder("Trouver votre oeuvre...");
  await expect(searchInput).toBeVisible();
  await searchInput.click();
  await searchInput.fill("van gogh");

  const searchButton = page.getByRole("button", { name: "🔍" });
  await expect(searchButton).toBeVisible();
  await searchButton.click();

  const firstArtworkLink = page.getByRole("link", {
    name: "Artwork Madame Roulin and Her",
  });
  await expect(firstArtworkLink).toBeVisible();
  await firstArtworkLink.click();

  const vincentVanGoghSpan = page
    .locator("span")
    .filter({ hasText: "Vincent van Gogh" });
  await expect(vincentVanGoghSpan).toBeVisible();
  await vincentVanGoghSpan.click();

  const madameRoulinTitle = page.getByText("Title: Madame Roulin and Her");
  await expect(madameRoulinTitle).toBeVisible();
  await madameRoulinTitle.click();

  const mainArtworkImg1 = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg1).toBeVisible();
  await mainArtworkImg1.click();

  const backButton1 = page.getByRole("button", { name: "Retour" });
  await expect(backButton1).toBeVisible();
  await backButton1.click();

  const pageHeading1 = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeading1).toBeVisible();
  await pageHeading1.click();

  const secondArtworkLink = page.getByRole("link", {
    name: "Artwork Self-Portrait with a",
  });
  await expect(secondArtworkLink).toBeVisible();
  await secondArtworkLink.click();

  const vincentVanGoghSpan2 = page
    .locator("span")
    .filter({ hasText: "Vincent van Gogh" });
  await expect(vincentVanGoghSpan2).toBeVisible();
  await vincentVanGoghSpan2.click();

  const selfPortraitTitle = page.getByText("Title: Self-Portrait with a");
  await expect(selfPortraitTitle).toBeVisible();
  await selfPortraitTitle.click();

  const mainArtworkImg2 = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg2).toBeVisible();
  await mainArtworkImg2.click();

  const backButton2 = page.getByRole("button", { name: "Retour" });
  await expect(backButton2).toBeVisible();
  await backButton2.click();

  const nextButton = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton).toBeVisible();
  await nextButton.click();

  const cardAuthor1 = page.locator(
    "div:nth-child(7) > .card-container > .card-author"
  );
  await expect(cardAuthor1).toBeVisible();
  await cardAuthor1.click();

  const cardAuthor2 = page.locator(
    "div:nth-child(6) > .card-container > .card-author"
  );
  await expect(cardAuthor2).toBeVisible();
  await cardAuthor2.click();

  const pageHeading2 = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeading2).toBeVisible();
  await pageHeading2.click();
});
