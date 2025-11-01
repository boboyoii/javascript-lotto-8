import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/viewMessage.js';

class InputView {
  async inputPurchaseAmount() {
    return Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
  }
}

export default InputView;
