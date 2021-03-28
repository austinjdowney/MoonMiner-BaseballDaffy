let totalHits = 0
let clickModifier = 0
let autoModifier = 0

let toalMultipliers = {
    onClickUpgrades: {
        batUpgrade: {
            name: 'batUpgrade',
            price: 50,
            quantity: 0,
            multiplier: 2,
        },
        weights: {
            name: 'weights',
            price: 100,
            quantiy: 0,
            multiplier: 3,
        },
        steroids: {
            name: 'steroids',
            price: 500,
            quantity: 0,
            multiplier: 4,
        },
    }, automaticUpgrades: {
        baseRunners: {
            name: 'baseRunners',
            price: 300,
            quantity: 0,
            multipler: 2,
        }
    }
}

let scoreboard = {
    Yankees: {
        name: 'Yankees',
        hits: 1,
        runs: 0,
    }
}


function hit(yankee) {
    scoreboard[yankee].hits + 1
    let yHits = scoreboard[yankee].hits
    if (totalHits > 0) {
        yHits += totalHits
    }
    drawHits()

    console.log(yHits)
}

function buyBaseballBat() {
    let clickModifiers = scoreboard[yankee].hits
    if (totalHits > 50) {
        totalHits -= 50
            * 2
    }
    drawClickUpgrades()
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
    totalHits++
    document.getElementById('totalHits').innerText = `${totalHits}`
}

function drawClickUpgrades() {
    totalHits -= batUpgrade.clickModifier

    document.getElementById('batUpgrade').innerText = `${batUpgrade}`
    document.getElementById('weights').innerText = `${weights}`
    document.getElementById('steroids').innerText = `${steroids}`
}

function drawAutomaticUpgrades() {
    document.getElementById('baseRunners').innerText = `${baseRunners}`
}

function music() {
    document.getElementById("music").play()
    SetTimeout(() => {
        document.getElementById('music').pause(), 5000
    })
}