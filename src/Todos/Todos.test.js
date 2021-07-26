import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todos from "./Todos";

describe('Todos', () => {
    test('renders h1', () => {
        render(<Todos />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            /TODO LIST/
        );
    });

    test('renders h2', () => {
        render(<Todos userName/>);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
            /Hi Jing, what’s your focus for today?/
        );
    });
});