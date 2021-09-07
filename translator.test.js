import { expect } from "@jest/globals";
import { englishToMorseObj } from "./translator";

test('should return .- ', () => {
  let result;
  const outcome = ".-";
  result = englishToMorseObj.a;
  expect(result).toBe(outcome);
})
test('should return ..--- ', () => {
  let result;
  const outcome = "..---";
  result = englishToMorseObj[2];
  expect(result).toBe(outcome);
})

import { translateToMorse } from "./translator";

test('should return .... .. ', () => {
  let result;
  const outcome = ".... ..";
  result = translateToMorse("hi")
  expect(result).toBe(outcome);
})

test('should return ... .- .-.. .. -- ', () => {
  let result;
  const outcome = "... .- .-.. .. --";
  result = translateToMorse("Salim")
  expect(result).toBe(outcome);
})

test('should return .... . .-.. .-.. --- .-- --- .-. .-.. -..', () => {
  let result;
  const outcome = ".... . .-.. .-.. ---  .-- --- .-. .-.. -..";
  result = translateToMorse("HeLlo World")
  expect(result).toBe(outcome);
})