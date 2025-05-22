import { test, expect } from '@playwright/test';

test.describe('Home Page E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the hero section with main title and buttons', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Potencia tu carrera con recomendaciones profesionales' })).toBeVisible();
    await expect(page.getByText('Conecta con profesionales, obtén recomendaciones valiosas')).toBeVisible();
    await expect(page.getByText('Dar una recomendación')).toHaveCount(2);
    await expect(page.getByText('Explorar mi red')).toBeVisible();
  });

  test('should display the features section with three cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: '¿Por qué usar ProNet?' })).toBeVisible();
    await expect(page.getByText('Recomendaciones verificadas')).toBeVisible();
    await expect(page.getByText('Amplía tu red profesional')).toBeVisible();
    await expect(page.getByText('Destaca en tu búsqueda laboral')).toBeVisible();
  });

  test('should display the testimonials section with recommendations', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Recomendaciones destacadas' })).toBeVisible();
    await expect(page.locator('.pt-6').first()).toBeVisible();
  });

  test('should display the CTA section with call to action button', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Comienza a construir tu red profesional hoy' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Crear cuenta gratuita' })).toBeVisible();
  });

  test('should display the footer with company info and links', async ({ page }) => {
    await expect(page.getByText('ProNet')).toHaveCount(3);
    await expect(page.getByText('Conectando profesionales desde 2025')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sobre nosotros' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Privacidad' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Términos' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contacto' })).toBeVisible();
  });

  test('should navigate to recommendations page when clicking on recommendation link', async ({ page }) => {
    await page.getByRole('link', { name: 'Dar una recomendación' }).first().click();
    await expect(page).toHaveURL('/recommendations');
  });
});
