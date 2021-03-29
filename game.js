//Questions
//keep receiving error of innerText of NUll in console for all my variables...
//they will subtract the next hit click but not on the actual upgrade button click..
//How to start the autoUpgrade to keep adding 'baseRunners' once paid for..




let hits = 0
let totalHits = 0
let clickModifier = 0
let autoModifier = 0
let collectionInterval = 0


let onClickUpgrades = {
    batUpgrade: {
        name: 'batUpgrade',
        price: 50,
        quantity: 0,
        multiplier: 2,
    },
    weights: {
        name: 'weights',
        price: 100,
        quantity: 0,
        multiplier: 3,
    },
    steroids: {
        name: 'steroids',
        price: 500,
        quantity: 0,
        multiplier: 4,
    }
}

let automaticUpgrades = {
    baseRunners: {
        name: 'baseRunners',
        price: 300,
        quantity: 0,
        multiplier: 2,
    }
}

let yankees = {
    name: 'Yankees',
    hits: 1,
    runs: 0,
}


function hit(yankees) {
    if (hits >= 0) {
        hits++
    }
    drawHits()
    console.log(hits)
}

function buyBatUpgrade() {
    //let totalHits = scoreboard.hits
    //totalHits += batUpgrade
    if (totalHits >= 50) {
        onClickUpgrades.batUpgrade.quantity++
        totalHits -= 50
        hits *= onClickUpgrades.batUpgrade.multiplier
        updateBatUpgrade()
        updateCModifier()
        cModifier()
        drawHits()
    }
}

function updateBatUpgrade() {
    let batUpgradeTotalElem = document.getElementById('batUpgradeTotal')
    batUpgradeTotalElem.innerText = `${onClickUpgrades.batUpgrade.quantity}`
    update()
}

function buyWeights() {
    if (totalHits >= 100) {
        onClickUpgrades.weights.quantity++
        totalHits -= 100
        hits *= onClickUpgrades.weights.multiplier
        updateWeightUpgrade()
        updateCModifier()
        cModifier()
        drawHits()
    }
}

function updateWeightUpgrade() {
    let weightsElem = document.getElementById('weights')
    weightsElem.innerText = `${onClickUpgrades.weights.quantity}`
    let weightTotalElem = document.getElementById('weightTotal')
    weightTotalElem.innerText = `${onClickUpgrades.weights.quantity}`
    update()
}

function buySteroids() {
    if (totalHits >= 500) {
        totalHits -= 500
        onClickUpgrades.steroids.quantity++
        hits *= onClickUpgrades.steroids.multiplier
        updateSteroids()
        updateCModifier()
        cModifier()
    }
}

function updateSteroids() {
    //let steroidsElem = document.getElementById('steroids')
    //steroidsElem.innerText = `${onClickUpgrades.steroids.quantity}`
    let steroidsTotalElem = document.getElementById('steroidTotal')
    steroidsTotalElem.innerText = `${onClickUpgrades.steroids.quantity}`
    update()
}

function buyBaseRunners() {
    if (totalHits >= 300) {
        automaticUpgrades.baseRunners.quantity++
        totalHits -= 300
        hits *= automaticUpgrades.baseRunners.multiplier
        updateBaseRunners()
        updateAModifier()
        aModifier()
    }
}

function updateBaseRunners() {
    // let baseRunnersElem = document.getElementById('baseRunners')
    // baseRunnersElem.innerText = `${automaticUpgrades.baseRunners.quantity}`
    let baseRunnerTotalEelem = document.getElementById('baseRunnerTotal')
    baseRunnerTotalEelem.innerText = `${automaticUpgrades.baseRunners.quantity}`
    update()
}

function collectAutoUpgrades() {
    // automaticModifier += automaticUpgrade.modifierupdate
    // TotalHits += automaticModifier
    for (const key in automaticUpgrades) {
        if (automaticUpgrades.hasOwnProperty.call(automaticUpgrades, key)) {
            const autoHits = automaticUpgrades[key];
            hits += (autoHits.multiplier * autoHits.quantity)
        }
    }
    update()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function drawHits() {
    document.getElementById('hits').innerText = `${hits}`
}

function update() {
    let hitsElem = document.getElementById('hits')
    hitsElem.innerText = `${hits}`
}

function cModifier() {
    let cModifierElem = document.getElementById('clickModifier')
    cModifierElem.innerText = `${clickModifier}`
}

function updateCModifier() {
    clickModifier = ((onClickUpgrades.batUpgrade.quantity) + onClickUpgrades.weights.quantity * 3) + (onClickUpgrades.steroids.quantity * 4)
}

function aModifier() {
    let aModifierElem = document.getElementById('autoModifier')
    aModifierElem.innerText = `${autoModifier}`
}

function updateAModifier() {
    aModifier = automaticUpgrades.baseRunners.quantity * 2
}



function music() {
    document.getElementById("music").play()
    SetTimeout(() => {
        document.getElementById('music').pause(), 5000
    })
}


update()
updateBatUpgrade()
updateWeightUpgrade()
updateSteroids()
updateBaseRunners()
updateCModifier()
updateAModifier()
startInterval()