# Time Canvas 🗓️

Time Canvas is a premium, highly tactile interactive web calendar application. Designed to feel like a high-end physical wall calendar hanging on your screen, it features full-screen layout constraints, curated editorial imagery natively rotating per month, persistent memory serialization, and hardware-accelerated 3D flip animation mapping modeling real-world gravity.

## Features ✨

### Immersive & Tactile UX
*   **Hardware-Accelerated Page Flips**: Bypasses heavy animation libraries like Framer Motion entirely in favor of lightweight, hyper-optimized CSS `transform-gpu` matrices mapped exactly to the `origin-top`. When you page through time, the layout mathematically behaves like flipping heavy hardware paper forwards and backwards over its spine.
*   **Curated Editorial Engine**: Every month natively fetches deeply curated, high-resolution aesthetic Unsplash assets alongside unique typographic quotes dynamically shifting to represent "seasons" of time.
*   **Deep Contrast Memory Dashboard**: A gorgeous muted, heavily structured dual-column interface allowing you to instantly curate "Notes" and track "Milestones" across pure time effortlessly. 

### Fluid Architecture
*   **Vite + React 18**: Ultra-fast hot-module-replacement server environment seamlessly bootstrapped for raw performance.
*   **Native Persistence**: Utterly immune to refreshing memory crashes. The local storage subsystem is fully natively synchronous relying purely on explicit React lazy initialization mappings securing zero payload overrides on boot!
*   **Perfectly Responsive**: Mapped elegantly across completely distinct array grids explicitly to natively downgrade gracefully onto vertical smartphone viewports without losing the high-end padding curves of desktop monitors.

## Engineering Choices 🛠

*   **Zero 3D Library Dependencies:** The 3D calendar flip was strictly engineered utilizing pure CSS cubic-bezier matrices toggling absolute 90-degree threshold values. This eliminates massive bundle sizes while ensuring exactly 60 FPS transitions running locally strictly on the graphics processor.
*   **Strict Tailwind Execution**: Structural constraints meticulously avoid custom CSS logic routing. Strict layout grids are executed utilizing standard `lg:` breakpoints preventing mobile code from bleeding into the primary premium desktop matrix.
*   **Synchronous State Bootstrapping**: Hand-rolled React strict-mode-safe initialization algorithms ensuring that standard React 18 memory wiping logic is seamlessly sidestepped locally.

## Getting Started 🚀

### Running the Project Locally

1. **Ensure Node.js is installed**: You will need Node (v16+ recommended).
2. **Clone the Directory**: Navigate to the codebase boundary.
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Boot the Developer Environment**:
   ```bash
   npm run dev
   ```
5. **Preview**: Open `http://localhost:5173` (or the local network port indicated in the terminal hook). 

### Creating a Production Build
To spin up a natively chunked, hyper-optimized production deployment locally:
```bash
npm run build
```
The output natively bundles cleanly dropping into the `dist/` directory perfectly.
