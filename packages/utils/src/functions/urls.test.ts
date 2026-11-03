// 1. Import the testing functions (Dub uses Vitest)
import { describe, it, expect } from "vitest";

// 2. Import the function you are testing 
// (Change "./functions" to the actual name of the file where getFileExtension lives)
import { getFileExtension } from "./urls";



describe("getFileExtension", () => {
  it("returns extension for valid files", () => {
    expect(
      getFileExtension("https://dub.co/test.png")
    ).toBe("PNG");
  });

  it("returns null for extensionless paths", () => {
    expect(
      getFileExtension("https://dub.co/avatar")
    ).toBeNull();
  });

  it("returns null for nested paths", () => {
    expect(
      getFileExtension("https://dub.co/api/v1/users")
    ).toBeNull();
  });

  it("returns null for invalid urls", () => {
    expect(
      getFileExtension("not-a-url")
    ).toBeNull();
  });
});