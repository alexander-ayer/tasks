import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    value,
    setValue,
}: {
    value: number;
    setValue: (v: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(2 * value);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    value,
    setValue,
}: {
    value: number;
    setValue: (v: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler value={value} setValue={setValue}></Doubler>
            <Halver value={value} setValue={setValue}></Halver>
        </div>
    );
}
