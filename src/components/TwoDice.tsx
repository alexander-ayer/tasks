import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { act } from "react";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);

    // Initialize dice with different values
    useEffect(() => {
        act(() => {
            setLeft(1);
            setRight(2);
        });
    }, []);

    const rollLeft = (): void => {
        act(() => {
            setLeft(d6());
        });
    };

    const rollRight = (): void => {
        act(() => {
            setRight(d6());
        });
    };

    // Determine outcome message
    let outcome: React.JSX.Element | null = null;
    if (left === right) {
        if (left === 1) {
            outcome = <div>You Lose!</div>;
        } else {
            outcome = <div>You Win!</div>;
        }
    }

    return (
        <div>
            <span data-testid="left-die">{left}</span>{" "}
            <span data-testid="right-die">{right}</span>
            <div style={{ marginTop: "1em" }}>
                <Button onClick={rollLeft}>Roll Left</Button>{" "}
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {outcome}
        </div>
    );
}
