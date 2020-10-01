import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../useForm";

test("Just to see if it passes", () => {
  expect(true).toBe(true);
});

test('UseForm should be able to be set to apple', () => {
  const { result } = renderHook( () => useForm() );
  act( () => {
    result.current.setValue('Apple');
  })
  expect(result.current.value).toBe('Apple');
})