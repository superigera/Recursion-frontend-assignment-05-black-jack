export type Suit = "H" | "D" | "C" | "S";
export type Rank =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export class Card {
  suit: Suit;
  rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }

  /**
   * カードの数字を取得する
   * @returns {string} カードの数字
   */
  getRankNumber(): string {
    switch (this.rank) {
      case "A":
        //手札よってAは1or11かを決めるため、ここでは11を返す
        return "11";

      case "J":
      case "Q":
      case "K":
        return "10";

      default:
        return this.rank;
    }
  }
}
