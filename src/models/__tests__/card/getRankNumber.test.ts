import { describe, test, expect } from "vitest";
import { Card } from "../../Card";
import { SUITS, BLACKJACK_NUMERIC_RANKS } from "../../constants";

describe("Cardクラスのテスト", () => {
  test("Aの数値は11", () => {
    const card = new Card("S", "A");
    expect(card.getRankNumber()).toBe("11");
  });

  test("J, Q, Kの数値は10", () => {
    expect(new Card("H", "J").getRankNumber()).toBe("10");
    expect(new Card("D", "Q").getRankNumber()).toBe("10");
    expect(new Card("C", "K").getRankNumber()).toBe("10");
  });

  test("A, J, Q, K 以外の数値はその数値を返す", () => {
    for (const rank of BLACKJACK_NUMERIC_RANKS) {
      for (const suit of SUITS) {
        const card = new Card(suit, rank);
        expect(card.getRankNumber()).toBe(rank);
      }
    }
  });
});
