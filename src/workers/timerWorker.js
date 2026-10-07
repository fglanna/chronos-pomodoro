let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;

  function tick() {
    const now = Date.now();
    let countDownSeconds = Math.round((endDate - now) / 1000);
    self.postMessage(countDownSeconds);

    // Se o tempo chegou ao fim ou passou de 0, não agenda novo tick
    if (countDownSeconds <= 0) {
      self.postMessage(0);
      return;
    }

    setTimeout(tick, 1000);
  }

  tick();
};
