import LottoManager from './controller/LottoManager.js';
import InputView from './View/InputView.js';

class App {
  async run() {
    const inputview = new InputView();
    const lottoManager = new LottoManager(inputview);
    lottoManager.run();
  }
}

export default App;
