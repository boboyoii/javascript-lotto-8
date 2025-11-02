class LottoResult {
  #countsByRank;
  #profitRate;

  constructor() {
    this.#countsByRank = { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 0 };
    this.#profitRate = 0;
  }

  addRankCount(rank) {
    this.#countsByRank[rank] += 1;
  }

  setProfitRate(profitRate) {
    this.#profitRate = profitRate;
  }

  getCountsByRank() {
    return { ...this.#countsByRank };
  }

  getProfitRate() {
    return this.#profitRate;
  }
}

export default LottoResult;
