import parser from '../utils/Parser.js';
import validator from '../utils/Validator.js';

class LottoManager {
  constructor(inputview) {
    this.inputview = inputview;
  }

  async run() {
    const purchaseAmountInput = await this.inputview.inputPurchaseAmount();
    const purchaseAmount = parser.parsePurchaseAmount(purchaseAmountInput);
    validator.validatePurchaseAmount(purchaseAmount);

    const winningNumbersInput = await this.inputview.inputWinningNumbers();
    const winningNumbers = parser.parseWinningNumber(winningNumbersInput);
    validator.validateWinningNumbers(winningNumbers);
  }
}

export default LottoManager;
