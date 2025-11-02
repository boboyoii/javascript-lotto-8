import { Random } from '@woowacourse/mission-utils';
import Lotto from '../model/Lotto.js';

class LottoGenerator {
  generateLottos(amount) {
    const count = this.#calcCount(amount);
    return Array.from({ length: count }, () => new Lotto(this.#drawNumbers()));
  }

  #calcCount(amount) {
    return amount / 1000;
  }

  #drawNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoGenerator;
