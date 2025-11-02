import parser from '../utils/Parser.js';

class LottoManager {
  constructor(inputview, outputView, lottoGenerator) {
    this.inputview = inputview;
    this.outputView = outputView;
    this.lottoGenerator = lottoGenerator;
  }

  async run() {
    const purchaseAmountInput = await this.inputview.inputPurchaseAmount();
    const purchaseAmount = parser.parsePurchaseAmount(purchaseAmountInput);

    const lottos = this.lottoGenerator.generateLottos(purchaseAmount);
    this.outputView.showPurchasedLottos(lottos);

    const winningNumbersInput = await this.inputview.inputWinningNumbers();
    const winningNumbers = parser.parseWinningNumbers(winningNumbersInput);

    const bonusNumberInput = await this.inputview.inputBonusNumber();
    const bonusNumber = parser.parseBonusNumber(
      bonusNumberInput,
      winningNumbers
    );
  }
}

export default LottoManager;
