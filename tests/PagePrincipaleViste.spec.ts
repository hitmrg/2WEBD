import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const closeButton = page.getByLabel("Close tanstack query devtools", {
    exact: true,
  });
  await expect(closeButton).toBeVisible();
  await closeButton.click();

  const highlightArtsHeading = page.getByRole("heading", {
    name: "List of Highlight Arts",
  });
  await expect(highlightArtsHeading).toBeVisible();
  await highlightArtsHeading.click();

  const quiltText = page.getByText("QuiltBy: Unknown ArtistDate: 1820–");
  await expect(quiltText).toBeVisible();
  await quiltText.click();

  const quiltTitle = page.getByText("Title: Quilt");
  await expect(quiltTitle).toBeVisible();
  await quiltTitle.click();

  const mainArtworkImg1 = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg1).toBeVisible();
  await mainArtworkImg1.click();

  const backButton1 = page.getByRole("button", { name: "Retour" });
  await expect(backButton1).toBeVisible();
  await backButton1.click();

  const petriGylliiText = page.getByText(
    "Petri Gyllii De Bosporo thracio libri III ; Petri Gyllii De topographia ConstantinopoleosBy: Pierre GillesDate:"
  );
  await expect(petriGylliiText).toBeVisible();
  await petriGylliiText.click();

  const petriGylliiTitle = page.getByText("Title: Petri Gyllii De");
  await expect(petriGylliiTitle).toBeVisible();
  await petriGylliiTitle.click();

  const mainArtworkImg2 = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg2).toBeVisible();
  await mainArtworkImg2.click();

  const additionalImageButton = page.getByRole("button", {
    name: "Additional Image 1",
  });
  await expect(additionalImageButton).toBeVisible();
  await additionalImageButton.click();

  const mainArtworkImg3 = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg3).toBeVisible();
  await mainArtworkImg3.click();

  const backButton2 = page.getByRole("button", { name: "Retour" });
  await expect(backButton2).toBeVisible();
  await backButton2.click();

  const nextButton1 = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton1).toBeVisible();
  await nextButton1.click();

  const nextButton2 = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton2).toBeVisible();
  await nextButton2.click();

  const academieLink = page.getByRole("link", {
    name: "Artwork Academie de l'espee;",
  });
  await expect(academieLink).toBeVisible();
  await academieLink.click();

  const mainArtworkImg4 = page
    .getByRole("img", { name: "Main Artwork" })
    .first();
  await expect(mainArtworkImg4).toBeVisible();
  await mainArtworkImg4.click();

  const academieTitle = page.getByText("Title: Academie de l'espee;");
  await expect(academieTitle).toBeVisible();
  await academieTitle.click();

  const backButton3 = page.getByRole("button", { name: "Retour" });
  await expect(backButton3).toBeVisible();
  await backButton3.click();
});
