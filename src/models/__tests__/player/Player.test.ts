import { describe, test, expect } from "vitest";
import { Player } from "../../Player";
import { Card } from "../../Card";

describe("PlayerクラスのgetHandScoreテスト", () => {
  test("通常の数値カードのみの場合", () => {
    const player = new Player("Alice", "user", "blackjack");
    player.hand = [new Card("S", "2"), new Card("H", "5"), new Card("D", "9")];

    expect(player.getHandScore()).toBe(16);
  });

  test("フェイスカード（J, Q, K）を含む場合", () => {
    const player = new Player("Bob", "user", "blackjack");
    player.hand = [new Card("C", "J"), new Card("D", "Q")];

    expect(player.getHandScore()).toBe(20);
  });

  test("エースを1枚含む場合 (A + 9)", () => {
    const player = new Player("Charlie", "user", "blackjack");
    player.hand = [new Card("S", "A"), new Card("H", "9")];

    expect(player.getHandScore()).toBe(20);
  });

  test("エースを2枚含む場合 (A + A + 9)", () => {
    const player = new Player("Dave", "user", "blackjack");
    player.hand = [new Card("S", "A"), new Card("D", "A"), new Card("H", "9")];

    expect(player.getHandScore()).toBe(21);
  });

  test("21を超える場合 (A + K + 5)", () => {
    const player = new Player("Eve", "user", "blackjack");
    player.hand = [new Card("S", "A"), new Card("H", "K"), new Card("D", "5")];

    expect(player.getHandScore()).toBe(16);
  });

  test("エースを複数枚含む場合 (A + A + A + K)", () => {
    const player = new Player("Frank", "user", "blackjack");
    player.hand = [
      new Card("S", "A"),
      new Card("D", "A"),
      new Card("C", "A"),
      new Card("H", "K"),
    ];

    expect(player.getHandScore()).toBe(13);
  });
});
