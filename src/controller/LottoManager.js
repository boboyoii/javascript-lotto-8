import parser from '../utils/Parser.js';
import validator from '../utils/Validator.js';

class LottoManager {
  constructor(inputview) {
    this.inputview = inputview;
  }

  async run() {
    const input = await this.inputview.inputPurchaseAmount();
    const amount = parser.parsePurchaseAmount(input);
    validator.validatePurchaseAmount(amount);
  }
}

export default LottoManager;
