import { test, expect } from '@playwright/test';

test.describe('Home Page E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main title and core elements', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'RecommendMe' })).toBeVisible();
    await expect(page.getByText('Encuentra Algo Nuevo')).toBeVisible();
    await expect(page.getByPlaceholder('Escribe tus intereses aquí...')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Buscar Recomendaciones' })).toBeVisible();
  });

  test('should open and verify the "Más Información" dialog', async ({ page }) => {
    await page.getByRole('button', { name: 'Más Información' }).click();
    await expect(page.getByRole('heading', { name: '¿Cómo Funciona?' })).toBeVisible();
    await expect(page.getByText('RecommendMe utiliza algoritmos avanzados')).toBeVisible();
    await page.getByRole('button', { name: 'Entendido' }).click();
    await expect(page.getByRole('heading', { name: '¿Cómo Funciona?' })).not.toBeVisible();
  });

  test('should open and verify the "Opciones" dropdown menu', async ({ page }) => {
    await page.getByRole('button', { name: 'Opciones' }).click();
    await expect(page.getByRole('menuitem', { name: 'Perfil' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Configuración' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Cerrar Sesión' })).toBeVisible();
  });
});
