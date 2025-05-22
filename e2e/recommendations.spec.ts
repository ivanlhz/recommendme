import { test, expect } from '@playwright/test';

test.describe('Recommendations Page E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/recommendations');
  });

  test('should display the header with navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'ProNet' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Network' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Jobs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Messages' })).toBeVisible();
  });

  test('should display the user profile section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Alex Mitchell' })).toBeVisible();
    await expect(page.getByText('Senior Frontend Developer')).toBeVisible();
    await expect(page.getByText('TechCorp Solutions')).toBeVisible();
  });

  test('should display the recommendation form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Recomendaciones' })).toBeVisible();
    await expect(page.getByPlaceholder('Escribe tu recomendación profesional (mínimo 50 caracteres)...')).toBeVisible();
    await expect(page.getByText('Mínimo 50 caracteres requeridos')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Enviar Recomendación' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Enviar Recomendación' })).toBeDisabled();
  });

  test('should display existing recommendations', async ({ page }) => {
    await expect(page.getByText('Alex es un excepcional frontend developer')).toBeVisible();
    await expect(page.getByText('Tuve el placer de trabajar con Alex')).toBeVisible();
    await expect(page.getByText('Sarah Johnson')).toBeVisible();
    await expect(page.getByText('Michael Chen')).toBeVisible();
  });

  test('should enable submit button when enough characters are entered', async ({ page }) => {
    const textarea = page.getByPlaceholder('Escribe tu recomendación profesional (mínimo 50 caracteres)...');
    await textarea.fill('Esta es una recomendación de prueba que tiene más de cincuenta caracteres para activar el botón de envío.');
    await expect(page.getByRole('button', { name: 'Enviar Recomendación' })).toBeEnabled();
  });

  test('should clear form after submitting a recommendation', async ({ page }) => {
    const textarea = page.getByPlaceholder('Escribe tu recomendación profesional (mínimo 50 caracteres)...');
    await textarea.fill('Esta es una recomendación de prueba que tiene más de cincuenta caracteres para activar el botón de envío.');
    await page.getByRole('button', { name: 'Enviar Recomendación' }).click();
    await expect(textarea).toHaveValue('');
  });
});
