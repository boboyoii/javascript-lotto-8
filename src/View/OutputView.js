import { Console } from '@woowacourse/mission-utils';

class OuputView {
  showPurchasedLottos(lottos) {
    const header = `\n${lottos.length}개를 구매했습니다.\n`;
    const lottoLines = lottos
      .map((lotto) => `[${lotto.getNumbers().join(', ')}]`)
      .join('\n');

    Console.print(`${header}${lottoLines}`);
  }
}

export default OuputView;
