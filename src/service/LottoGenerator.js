import { Random } from '@woowacourse/mission-utils';
import Lotto from '../model/Lotto.js';
import { BOUND, LOTTO_PRICE, SIZE } from '../constants/LottoConstants.js';

class LottoGenerator {
  generateLottos(amount) {
    const count = this.#calcCount(amount);
    return Array.from({ length: count }, () => new Lotto(this.#drawNumbers()));
  }

  #calcCount(amount) {
    return amount / LOTTO_PRICE;
  }

  #drawNumbers() {
    return Random.pickUniqueNumbersInRange(BOUND.LOWER, BOUND.UPPER, SIZE);
  }
}

export default LottoGenerator;
