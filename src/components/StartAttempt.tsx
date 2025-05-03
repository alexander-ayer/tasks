import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { act } from "react";

interface QuizState {
    attempts: number;
    inProgress: boolean;
}

export function StartAttempt(): React.JSX.Element {
    const [quizState, setQuizState] = useState<QuizState>({
        attempts: 4,
        inProgress: false,
    });

    const startQuiz = (): void => {
        act(() => {
            setQuizState((prevState) => ({
                attempts: prevState.attempts - 1,
                inProgress: true,
            }));
        });
    };

    const stopQuiz = (): void => {
        act(() => {
            setQuizState((prevState) => ({
                ...prevState,
                inProgress: false,
            }));
        });
    };

    const mulligan = (): void => {
        act(() => {
            setQuizState((prevState) => ({
                ...prevState,
                attempts: prevState.attempts + 1,
            }));
        });
    };

    return (
        <div>
            <div data-testid="attempts">{quizState.attempts}</div>
            <Button
                onClick={startQuiz}
                disabled={quizState.inProgress || quizState.attempts === 0}
                data-testid="start-button"
            >
                Start Quiz
            </Button>
            <Button
                onClick={stopQuiz}
                disabled={!quizState.inProgress}
                data-testid="stop-button"
            >
                Stop Quiz
            </Button>
            <Button
                onClick={mulligan}
                disabled={quizState.inProgress}
                data-testid="mulligan-button"
            >
                Mulligan
            </Button>
        </div>
    );
}
