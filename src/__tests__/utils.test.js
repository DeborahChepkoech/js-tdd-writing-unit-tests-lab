// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a valid palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("returns true for a palindrome with mixed casing", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for input with non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must contain only alphabetic characters.");
  });

  it("throws an error for input that isn't a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string.");
  });

  it("throws an error for input that is null", () => {
    expect(() => isPalindrome(null)).toThrow("Input must be a string.");
  });

  it("throws an error for input that is undefined", () => {
    expect(() => isPalindrome(undefined)).toThrow("Input must be a string.");
  });

  it("throws an error for input that is an object", () => {
    expect(() => isPalindrome({})).toThrow("Input must be a string.");
  });
});
