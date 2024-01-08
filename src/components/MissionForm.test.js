import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import MissionForm from "./MissionForm"

test('mission form renders correctly', () => {
    render(<MissionForm />);
});

test('renders the message when isFetchingData is true', () => {
    render(<MissionForm isFetchingData={true} />);
    const value = screen.queryByText(/we are fetching data/i);
    expect(value).not.toBeNull();
});

test('render button when isFetchingData is false', () => {
    render(<MissionForm isFetchingData={false} />);
    const value = screen.queryByRole('button');
    expect(value).not.toBeNull();
});

test('calls getData when button is pressed', () => {
    const mockGetData = jest.fn(() => {});
    render(<MissionForm getData={mockGetData} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    console.log(mockGetData.mock);
    expect(mockGetData.mock.calls).toHaveLength(1);
})