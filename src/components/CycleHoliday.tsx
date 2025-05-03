import React, { useState, useCallback } from "react";
import { Button } from "react-bootstrap";
import { act } from "react";

type Holiday = "🎄" | "🎃" | "🎆" | "🐇" | "❤️";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    // Alphabetical order: 🎄 -> 🎃 -> 🎆 -> 🐇 -> ❤️
    const nextAlphabetically = useCallback((current: Holiday): Holiday => {
        const order: Holiday[] = ["🎄", "🎃", "🎆", "🐇", "❤️"];
        const currentIndex = order.indexOf(current);
        return order[(currentIndex + 1) % order.length];
    }, []);

    // Year order: ❤️ (Feb) -> 🐇 (Apr) -> 🎆 (Jul) -> 🎃 (Oct) -> 🎄 (Dec)
    const nextInYear = useCallback((current: Holiday): Holiday => {
        const order: Holiday[] = ["❤️", "🐇", "🎆", "🎃", "🎄"];
        const currentIndex = order.indexOf(current);
        return order[(currentIndex + 1) % order.length];
    }, []);

    const advanceAlphabetically = useCallback((): void => {
        act(() => {
            setHoliday((current) => nextAlphabetically(current));
        });
    }, [nextAlphabetically]);

    const advanceByYear = useCallback((): void => {
        act(() => {
            setHoliday((current) => nextInYear(current));
        });
    }, [nextInYear]);

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={advanceAlphabetically}
                data-testid="alphabet-button"
            >
                Advance by Alphabet
            </Button>
            <Button onClick={advanceByYear} data-testid="year-button">
                Advance by Year
            </Button>
        </div>
    );
}
