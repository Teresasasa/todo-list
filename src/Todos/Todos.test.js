import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todos from "./Todos";
import * as responsive from 'react-responsive'
import userEvent from "@testing-library/user-event";

jest.mock('react-responsive')
describe('Todos', () => {
    responsive.useMediaQuery.mockImplementation(() => false);
    test('renders h1', () => {
        render(<Todos />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            /TODO LIST/
        );
    });

    test('renders h2', () => {
        render(<Todos />);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
            /Hi Jing, what’s your focus for today?/
        );
    });

    test('should renders input', () => {
        render(<Todos />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('should add one todo when type and enter', () => {
        render(<Todos />);
        userEvent.type(screen.getByRole('textbox'), 'first todo{enter}');
        expect(screen.getByText(/first todo/)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    });

    test('should delete one todo when click delete button', () => {
        render(<Todos />);
        userEvent.click(screen.getByRole('button', { name: '-' }));
        expect(screen.queryByText(/first todo/)).not.toBeInTheDocument();
    });

    test('should renders footer', () => {
        render(<Todos />);
        expect(screen.getByText(/Learn more about me/)).toBeInTheDocument();
    });
});