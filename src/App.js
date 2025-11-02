import LottoManager from './controller/LottoManager.js';
import LottoGenerator from './service/LottoGenerator.js';
import InputView from './View/InputView.js';
import OuputView from './View/OutputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const lottoGenerator = new LottoGenerator();
    const lottoManager = new LottoManager(inputView, lottoGenerator);
    lottoManager.run();
  }
}

export default App;
