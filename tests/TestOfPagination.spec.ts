import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const closeButton = page.getByLabel("Close tanstack query devtools", {
    exact: true,
  });
  await expect(closeButton).toBeVisible();
  await closeButton.click();

  const pageHeading1 = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeading1).toBeVisible();
  await pageHeading1.click();

  const nextButton1 = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton1).toBeVisible();
  await nextButton1.click();

  const pageHeading2 = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeading2).toBeVisible();
  await pageHeading2.click();

  const nextButton2 = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton2).toBeVisible();
  await nextButton2.click();

  const pageHeading3 = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeading3).toBeVisible();
  await pageHeading3.click();

  const nextButton3 = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton3).toBeVisible();
  await nextButton3.click();

  const pageHeading4 = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeading4).toBeVisible();
  await pageHeading4.click();

  const nextButton4 = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton4).toBeVisible();
  await nextButton4.click();

  const pageHeading5 = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeading5).toBeVisible();
  await pageHeading5.click();

  const nextButton5 = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton5).toBeVisible();
  await nextButton5.click();

  const museuText = page.getByText("By: Museu de Arte Moderna");
  await expect(museuText).toBeVisible();
  await museuText.click();

  const unknownArtistText = page.getByText("By: Unknown Artist");
  await expect(unknownArtistText).toBeVisible();
  await unknownArtistText.click();

  const edwinDavisFrenchText1 = page.getByText("By: Edwin Davis French").nth(2);
  await expect(edwinDavisFrenchText1).toBeVisible();
  await edwinDavisFrenchText1.click();

  const chongyiNieText = page.getByText("By: Chongyi Nie");
  await expect(chongyiNieText).toBeVisible();
  await chongyiNieText.click();

  const edwinDavisFrenchText2 = page.getByText("By: Edwin Davis French").nth(1);
  await expect(edwinDavisFrenchText2).toBeVisible();
  await edwinDavisFrenchText2.click();

  const edwinDavisFrenchText3 = page
    .getByText("By: Edwin Davis French")
    .first();
  await expect(edwinDavisFrenchText3).toBeVisible();
  await edwinDavisFrenchText3.click();

  const hachetteText = page.getByText("By: Hachette");
  await expect(hachetteText).toBeVisible();
  await hachetteText.click();

  const paulKleeText = page.getByText("By: Paul Klee");
  await expect(paulKleeText).toBeVisible();
  await paulKleeText.click();

  const nextButton6 = page.getByRole("button", { name: "Suivant" });
  await expect(nextButton6).toBeVisible();
  await nextButton6.click();

  const pageHeading6 = page.getByRole("heading", { name: "Page :" });
  await expect(pageHeading6).toBeVisible();
  await pageHeading6.click();
});
