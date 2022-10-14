import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..'
import { describe, it } from 'node:test';
import { hasUncaughtExceptionCaptureCallback } from 'node:process';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'lorem ipsum dolor sit',
    index: 1
}

describe('Modal component', () => {
    it('renders', () => {

    })

    it('matches snapshot DOM node structure',  () => {

    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
        
            fireEvent.click(getByText('Close this modal'));

            hasUncaughtExceptionCaptureCallback(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})

