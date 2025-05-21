# RecommendMe

Bienvenido a RecommendMe, una aplicación web moderna construida con Next.js, TypeScript y Tailwind CSS, diseñada para ayudarte a descubrir nuevas recomendaciones basadas en tus intereses. Este proyecto sigue los principios de Domain Driven Design (DDD) y Clean Architecture para asegurar escalabilidad y mantenibilidad.

## Características Principales

*   **Next.js 14.x**: Utilizando el App Router para una estructura de enrutamiento moderna.
*   **TypeScript 5.x**: Tipado estricto para un desarrollo más robusto.
*   **Tailwind CSS 3.x**: Framework CSS utility-first para un diseño rápido y personalizable.
*   **ShadCN UI**: Biblioteca de componentes pre-construidos y accesibles.
*   **ESLint & Prettier**: Para mantener la calidad y consistencia del código.
*   **Formik & Zod**: (Próximamente) Para la gestión de formularios y validación de esquemas.
*   **React Query (TanStack Query v5.x)**: (Próximamente) Para una gestión eficiente del estado del servidor y caching de API.
*   **Jest & React Testing Library**: Para pruebas unitarias y de integración.
*   **Playwright v1.x**: Para pruebas End-to-End (E2E).
*   **Git**: Para el control de versiones.
*   **PNPM**: Como gestor de paquetes.

## Primeros Pasos

Para poner en marcha el proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio (si aún no lo has hecho):**
    ```bash
    git clone <url-del-repositorio>
    cd RecommendMe
    ```

2.  **Instala las dependencias:**
    Asegúrate de tener [PNPM](https://pnpm.io/installation) instalado. Luego ejecuta:
    ```bash
    pnpm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    pnpm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Scripts Disponibles

En el archivo `package.json` encontrarás varios scripts útiles:

*   `pnpm run dev`: Inicia la aplicación en modo desarrollo.
*   `pnpm run build`: Compila la aplicación para producción.
*   `pnpm run start`: Inicia la aplicación en modo producción (después de `build`).
*   `pnpm run lint`: Ejecuta ESLint para analizar el código en busca de problemas.

## Ejecución de Pruebas

El proyecto está configurado con Jest para pruebas unitarias/integración y Playwright para pruebas E2E.

### Pruebas Unitarias y de Integración (Jest)

Para ejecutar los tests de Jest:

```bash
pnpm test
```

O para ejecutarlos en modo watch:

```bash
pnpm test:watch
```

(Nota: Deberás añadir `"test": "jest"` y `"test:watch": "jest --watch"` a la sección de `scripts` en tu `package.json` si aún no están allí).

### Pruebas End-to-End (Playwright)

1.  **Asegúrate de que los navegadores de Playwright estén instalados:**
    ```bash
    pnpm exec playwright install --with-deps
    ```

2.  **Ejecuta los tests E2E:**
    ```bash
    pnpm test:e2e
    ```
    Esto ejecutará los tests definidos en la carpeta `e2e`. El servidor de desarrollo se iniciará automáticamente.

3.  **Ejecuta los tests E2E con interfaz gráfica (para depuración):**
    ```bash
    pnpm test:e2e:ui
    ```

4.  **Ver los informes de los tests E2E (opcional):**
    ```bash
    pnpm exec playwright show-report
    ```
