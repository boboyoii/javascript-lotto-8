import parser from '../utils/Parser.js';
import validator from '../utils/Validator.js';

class LottoManager {
  constructor(inputview, outputView, lottoGenerator) {
    this.inputview = inputview;
    this.outputView = outputView;
    this.lottoGenerator = lottoGenerator;
  }

  async run() {
    const purchaseAmountInput = await this.inputview.inputPurchaseAmount();
    const purchaseAmount = parser.parsePurchaseAmount(purchaseAmountInput);
    validator.validatePurchaseAmount(purchaseAmount);
    const lottos = this.lottoGenerator.generateLottos(purchaseAmount);
    this.outputView.showPurchasedLottos(lottos);

    const winningNumbersInput = await this.inputview.inputWinningNumbers();
    const winningNumbers = parser.parseWinningNumber(winningNumbersInput);
    validator.validateWinningNumbers(winningNumbers);

    const bonusNumberInput = await this.inputview.inputBonusNumber();
    const bonusNumber = parser.parseBonusNumber(bonusNumberInput);
    validator.validateBonusNumber(bonusNumber, winningNumbers);
  }
}

export default LottoManager;
