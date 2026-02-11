import { renderToString } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';



describe('App (real API)', () => {
    it('igazi API-ból betölti és megjeleníti a Margheritát', async () => {
        render(<App />);

        // megvárja, amíg a useEffect lefut + API válasz megjön + render
        const el = await screen.findByText('Margheritaa', {}, { timeout: 10000 });
        expect(el).toBeTruthy();
    });
});