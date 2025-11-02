import parser from '../utils/Parser.js';

class LottoManager {
  constructor(input, output, generator, resultAnalyzer) {
    this.input = input;
    this.output = output;
    this.generator = generator;
    this.resultAnalyzer = resultAnalyzer;
  }

  async run() {
    const purchaseAmountInput = await this.input.inputPurchaseAmount();
    const purchaseAmount = parser.parsePurchaseAmount(purchaseAmountInput);

    const lottos = this.generator.generateLottos(purchaseAmount);
    this.output.showPurchasedLottos(lottos);

    const winningNumbersInput = await this.input.inputWinningNumbers();
    const winningNumbers = parser.parseWinningNumbers(winningNumbersInput);

    const bonusNumberInput = await this.input.inputBonusNumber();
    const bonusNumber = parser.parseBonusNumber(
      bonusNumberInput,
      winningNumbers
    );

    const result = this.resultAnalyzer.analyzeLottoResult(
      lottos,
      winningNumbers,
      bonusNumber
    );
  }
}

export default LottoManager;
