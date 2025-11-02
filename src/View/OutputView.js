import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, OUTPUT_TEMPLATES } from '../constants/viewMessages.js';

class OutputView {
  showPurchasedLottos(lottos) {
    const header = OUTPUT_TEMPLATES.PURCHASE_HEADER(lottos.length);
    const lottoLines = lottos
      .map((lotto) => `[${lotto.getNumbers().join(', ')}]`)
      .join('\n');

    Console.print(`${header}${lottoLines}`);
  }

  showWinningStats(result) {
    Console.print(OUTPUT_MESSAGE.WINNINT_STATS_HEADER);
    this.showRankCounts(result.getCountsByRank());
    this.showProfitRate(result.getProfitRate());
  }

  showRankCounts(counts) {
    const rankOrder = ['FIFTH', 'FOURTH', 'THIRD', 'SECOND', 'FIRST'];

    const formattedLines = rankOrder.map((rank) =>
      OUTPUT_TEMPLATES.RANK_RESULT[rank](counts[rank])
    );

    Console.print(formattedLines.join('\n'));
  }

  showProfitRate(profitRate) {
    Console.print(OUTPUT_TEMPLATES.PROFIT_RATE(profitRate));
  }
}

export default OutputView;
