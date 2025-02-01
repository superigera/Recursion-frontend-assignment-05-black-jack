import { describe, test, expect } from "vitest";
import { Card } from "../../Card";

describe("Cardクラスのテスト", () => {
  test("スートとランクが正しく設定される", () => {
    const card = new Card("S", "A");
    expect(card.suit).toBe("S");
    expect(card.rank).toBe("A");
  });
});
