import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { Calculator, numbers, operations } from '../src/Calculator';

describe('Calculator', () => {

    beforeAll(() => {
        render(<Calculator />)
    })

    afterAll(cleanup)

    it('should render', () => {
    });

    it('should render title correctly', () => {
        expect(screen.getByText('Calculator')).toBeDefined();
    });

    it('should render numbers', () => {
        numbers.forEach(number => {
            expect(screen.getByText(number)).toBeDefined();
        })
    });

    it('should render 4 rows', () => {
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(4);
    });

    it('should render operations', () => {
        operations.forEach(operation => {
            expect(screen.getByText(operation)).toBeDefined();
        })
    });
    
    it('should render equal sign', () => {
        screen.getByText('=')
    });

    it('should render an input', () => {
        const input = screen.getByRole('textbox');
        expect(input).toBeDefined();
    });

    it('should show the number in the user input after clicking a number', () => {
        const one = screen.getByText('1');
        fireEvent.click(one);

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('1');

        const clear = screen.getByText('C');
        fireEvent.click(clear);
    });
    
    it('should show the number in the user input after clicking several numbers', () => {
        const one = screen.getByText('1');
        fireEvent.click(one);
        
        const two = screen.getByText('2');
        fireEvent.click(two);
        
        const three = screen.getByText('3');
        fireEvent.click(three);

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('123');

        const clear = screen.getByText('C');
        fireEvent.click(clear);
    });

    it('should show user input after clicking numbers and operations', () => {
        const one = screen.getByText('1');
        fireEvent.click(one);

        const plus = screen.getByText('+');
        fireEvent.click(plus);
        fireEvent.click(one);

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('1+1');

        const clear = screen.getByText('C');
        fireEvent.click(clear);
    });
    
    it('should calculate based on user input and show the result', () => {
        const one = screen.getByText('1');
        fireEvent.click(one);

        const plus = screen.getByText('+');
        const equalSign = screen.getByText('=');
        fireEvent.click(plus);
        fireEvent.click(one);
        fireEvent.click(equalSign);

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('2');

        const clear = screen.getByText('C');
        fireEvent.click(clear);
    });
    
    it('should calculate based on user input and show the result and then make another operation with the result', () => {
        const one = screen.getByText('1');
        const plus = screen.getByText('+');
        const minus = screen.getByText('-');
        const equalSign = screen.getByText('=');
        
        fireEvent.click(one);
        fireEvent.click(plus);
        fireEvent.click(one);
        fireEvent.click(equalSign);
        fireEvent.click(minus);
        fireEvent.click(one);
        fireEvent.click(equalSign);

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('1');

        const clear = screen.getByText('C');
        fireEvent.click(clear);
    });
})