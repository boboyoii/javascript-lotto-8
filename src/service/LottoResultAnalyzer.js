import { LOTTO_PRICE, LOTTO_REWARD } from '../constants/LottoConstants.js';
import LottoResult from '../model/LottoResult.js';

class LottoResultAnalyzer {
  analyzeLottoResult(lottos, winningNumbers, bonusNumber) {
    const result = new LottoResult();

    this.updateRankCounts(result, lottos, winningNumbers, bonusNumber);

    return result;
  }

  updateRankCounts(result, lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const matchedWinningCount = lotto.getMatchCount(winningNumbers);
      const hasBonus = lotto.hasBonus(bonusNumber);

      const rank = this.determineRank(matchedWinningCount, hasBonus);

      if (rank === -1) return;
      result.addRankCount(rank);
    });
  }

  determineRank(match, hasBonus) {
    if (match === 6) return 'FIRST';
    if (match === 5 && hasBonus) return 'SECOND';
    if (match === 5) return 'THIRD';
    if (match === 4) return 'FOURTH';
    if (match === 3) return 'FIFTH';
    return -1;
  }
}

export default LottoResultAnalyzer;
