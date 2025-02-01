import { describe, test, expect } from "vitest";
import { Card, Suit, Rank } from "../Card";

describe("Card クラスのテスト", () => {
  test("スートとランクが正しく設定される", () => {
    const card = new Card("S", "A");
    expect(card.suit).toBe("S");
    expect(card.rank).toBe("A");
  });

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
    const suits: Suit[] = ["H", "D", "C", "S"];
    const numberRanks: Rank[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
    for (const rank of numberRanks) {
      for (const suit of suits) {
        const card = new Card(suit, rank);
        expect(card.getRankNumber()).toBe(rank);
      }
    }
  });
});
