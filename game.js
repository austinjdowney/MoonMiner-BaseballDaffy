let totalHits = 0
let clickModifier = 0
let autoModifier = 0

let toalMultipliers = {
    onClickUpgrades: {
        batUpgrade: {
            price: 50,
            quantity: 0,
            multiplier: 2,
        },
        weights: {
            price: 100,
            quantiy: 0,
            multiplier: 3,
        },
        steroids: {
            price: 500,
            quantity: 0,
            multiplier: 4,
        }
    }, automaticUpgrades: {
        baseRunners: {
            price: 300,
            quantity: 0,
            multipler: 2,
        }
    }
}

let scoreboard = {
    Yankees: {
        name: 'Yankees',
        hits: 0,
        runs: 0,
    },
    redSox: {
        name: 'Red Sux',
        hits: 0,
        runs: 0,
    }
}


function hit(yankee) {
    scoreboard[yankee].hits++
    let yHits = scoreboard[yankee].hits
    console.log(yHits)
}

function buyBaseballBat() {
    if (totalHits > 50) {
        totalHits -= 50
        clickModifier + 2
    }
}

function buyWeights() {
    if (totalHits > 100) {
        totalHits -= 100
        clickModifier + 3
    }
}

function buySteroids() {
    if (totalHits > 500) {
        totalHits -= 500
        clickModifier + 4
    }
}

function buyBaseRunners() {
    if (totalHits > 300) {
        totalHits -= 300
        autoModifier + 2
    }
}

function collectAutoUpgrades() {
    automaticModifier += automaticUpgrade.modifier
    TotalHits += automaticModifier
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function drawHits() {
    document.getElementById('totalHits').innerText = `${totalHits}`
}
