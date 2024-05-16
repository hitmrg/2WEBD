import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Vérifiez que le bouton de fermeture est visible puis cliquez dessus
  const closeButton = page.getByLabel("Close tanstack query devtools", {
    exact: true,
  });
  await expect(closeButton).toBeVisible();
  await closeButton.click();

  // Vérifiez que le champ de recherche est visible puis cliquez et remplissez-le
  const searchInput = page.getByPlaceholder("Trouver votre oeuvre...");
  await expect(searchInput).toBeVisible();
  await searchInput.click();
  await searchInput.fill("Coin");

  // Vérifiez que le bouton de recherche est visible puis cliquez dessus
  const searchButton = page.getByRole("button", { name: "🔍" });
  await expect(searchButton).toBeVisible();
  await searchButton.click();

  // Vérifiez que le premier résultat de la recherche est visible puis cliquez dessus
  const firstResult = page.locator(".card-container > a").first();
  await expect(firstResult).toBeVisible();
  await firstResult.click();

  // Vérifiez que l'image principale de l'œuvre est visible puis cliquez dessus
  const mainArtworkImg1 = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg1).toBeVisible();
  await mainArtworkImg1.click();

  // Vérifiez que le titre de l'œuvre est visible puis cliquez dessus
  const titleCoin = page.getByText("Title: Coin");
  await expect(titleCoin).toBeVisible();
  await titleCoin.click();

  // Vérifiez que le bouton "Retour" est visible puis cliquez dessus
  const backButton1 = page.getByRole("button", { name: "Retour" });
  await expect(backButton1).toBeVisible();
  await backButton1.click();

  // Vérifiez que le bouton "Suivant" est visible puis cliquez dessus (deux fois)
  const nextButton1 = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton1).toBeVisible();
  await nextButton1.click();
  await nextButton1.click();

  // Vérifiez que l'en-tête "Page :" est visible puis cliquez dessus
  const pageHeader = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeader).toBeVisible();
  await pageHeader.click();

  // Vérifiez que le lien "Artwork Girdle with Coins and" est visible puis cliquez dessus
  const artworkLink = page.getByRole("link", {
    name: "Artwork Girdle with Coins and",
  });
  await expect(artworkLink).toBeVisible();
  await artworkLink.click();

  // Vérifiez que l'image principale de l'œuvre est visible puis cliquez dessus
  const mainArtworkImg2 = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg2).toBeVisible();
  await mainArtworkImg2.click();

  // Vérifiez que le bouton "Additional Image 3" est visible puis cliquez dessus
  const additionalImageButton = page.getByRole("button", {
    name: "Additional Image 3",
  });
  await expect(additionalImageButton).toBeVisible();
  await additionalImageButton.click();

  // Vérifiez que l'image principale de l'œuvre est visible puis cliquez dessus
  const mainArtworkImg3 = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg3).toBeVisible();
  await mainArtworkImg3.click();

  // Vérifiez que le titre "Girdle with Coins and" est visible puis cliquez dessus
  const titleGirdle = page.getByText("Title: Girdle with Coins and");
  await expect(titleGirdle).toBeVisible();
  await titleGirdle.click();

  // Vérifiez que le bouton "Retour" est visible puis cliquez dessus
  const backButton2 = page.getByRole("button", { name: "Retour" });
  await expect(backButton2).toBeVisible();
  await backButton2.click();
});
