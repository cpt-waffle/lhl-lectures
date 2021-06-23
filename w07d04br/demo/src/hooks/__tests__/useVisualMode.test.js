import { renderHook, act } from "@testing-library/react-hooks";

import useVisualMode from "../useVisualMode";

//When the Appointment component loads, we want it to be empty, so we need to initialize the mode to EMPTY
const FIRST = "FIRST";
const SECOND = "SECOND";
const THIRD = "THIRD";

test.only("useVisualMode should initialize with default value", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));
  console.log(result.current);
  expect(result.current.mode).toBe(FIRST);
});

test.only("useVisualMode should transition to another mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);
});

test.only("useVisualMode should return to previous mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.transition(THIRD));
  expect(result.current.mode).toBe(THIRD);

  act(() => result.current.back());
  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});

test.only("useVisualMode should not return to previous mode if already at initial", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});

test.only("useVisualMode should replace the current mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST)); // [ FIRST ]

  act(() => result.current.transition(SECOND)); // [ FIRST, SECOND ]
  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.transition(THIRD, true)); // [FIRST, THIRD ]
  expect(result.current.mode).toBe(THIRD);

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});