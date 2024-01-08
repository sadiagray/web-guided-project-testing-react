import { render, screen  } from "@testing-library/react";
import React from "react";
import MissionsList from "./MissionsList";

const missions = [
    {
        mission_name: "Thaicom",
        mission_id: "9D1B7E0"
    },
    {
        mission_name: "Telstar",
        mission_id: "F4F83DE"
    }
];

test('mission list shows data when rerendered with new mission data', () => {
    const { rerender } = render(<MissionsList errors="" missions={[]}/>)
    let missionObjects = screen.queryAllByTestId('mission');
    expect(missionObjects).toHaveLength(0);

    rerender(<MissionsList errors="" missions={missions}/>);
    missionObjects = screen.queryAllByTestId('mission');
    expect(missionObjects).toHaveLength(2);
});