import { Console } from '@woowacourse/mission-utils';
import { LOTTO_REWARD } from '../constants/LottoConstants.js';

class OuputView {
  showPurchasedLottos(lottos) {
    const header = `\n${lottos.length}개를 구매했습니다.\n`;
    const lottoLines = lottos
      .map((lotto) => `[${lotto.getNumbers().join(', ')}]`)
      .join('\n');

    Console.print(`${header}${lottoLines}`);
  }

  showRankCounts(counts) {
    const lines = [
      '\n당첨 통계',
      '---',
      `3개 일치 (${LOTTO_REWARD.FIFTH.toLocaleString()}원) - ${counts.FIFTH}개`,
      `4개 일치 (${LOTTO_REWARD.FOURTH.toLocaleString()}원) - ${
        counts.FOURTH
      }개`,
      `5개 일치 (${LOTTO_REWARD.THIRD.toLocaleString()}원) - ${counts.THIRD}개`,
      `5개 일치, 보너스 볼 일치 (${LOTTO_REWARD.SECOND.toLocaleString()}원) - ${
        counts.SECOND
      }개`,
      `6개 일치 (${LOTTO_REWARD.FIRST.toLocaleString()}원) - ${counts.FIRST}개`,
      '',
    ].join('\n');

    Console.print(lines);
  }
}

export default OuputView;
