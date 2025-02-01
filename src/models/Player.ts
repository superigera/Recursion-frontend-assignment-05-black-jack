import { Card } from "./Card";

export type PlayerType = "ai" | "house" | "user";

export class Player {
  name: string;
  type: PlayerType;
  gameType: string;
  chips: number;
  hand: Card[] = [];
  bet: number = 0;
  winAmount: number = 0;
  gameStatus: string = "betting";

  constructor(name: string, type: PlayerType, gameType: string, chips = 400) {
    this.name = name;
    this.type = type;
    this.gameType = gameType;
    this.chips = chips;
  }

  /**
   * 手札の合計値を計算
   * @returns {number} - 手札の合計値
   */
  getHandScore(): number {
    let total = 0;
    let aceCount = 0;

    for (const card of this.hand) {
      total += Number(card.getRankNumber());
      if (card.rank === "A") {
        aceCount++;
      }
    }

    // 21を超えたらエースの値を 11 → 1 に変更
    while (total > 21 && aceCount > 0) {
      total -= 10;
      aceCount--;
    }

    return total;
  }
}
