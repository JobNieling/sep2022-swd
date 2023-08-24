let game = {};

let player = {
    location: 'town',
    items: []
};

let map = {
    forest: {
        description: 'a forest',
        items: ['mushroom'],
        exits: ['town', 'castle', 'teams'],
    },
    town: {
        description: 'a town',
        items: ['coin','sword','axe'],
        exits: ['forest', 'mountain', 'teams']
    },
    mountain: {
        description: 'a mountain range',
        items: [],
        exits: ['town', 'teams']
    }, 
    castle: {
        description: 'an abandoned castle who would live here?',
        items: ['iron armour'],
        exits: ['town', 'forest', 'teams']
    },
    church: {
        description: 'the church whos gonna be here?',
        items: ['alive kim'],
        exits: ['town', 'forest', 'teams', 'beforeTheChurch']
    },
    beforeTheChurch: {
        description: 'you see the church whos gonna safe kim? will she jump?',
        items: ['dead kim', 'some weird looking clothes'],
        exits: ['church']
    },
    house: {
        description: 'your safe house, will something be in here i can use?',
        items: ['knife', 'rope', '50 pokeballs'],
        exits: ['town', 'forest', 'teams']
    },
    teams: {
        description: 'a teams meeting, this is a game over :(',
        items: ['there is no way to leave'],
        exits: ['teams']
    },
    EasterEgg: {
        description: 'an easteregg!',
        items: ['eggs', 'paint', 'cookies', 'a way to win this game'],
        exits: ['emptyGrave']
    },
    emptyGrave: {
        description: 'the empty grave! what will you find here?',
        items: ['a door'],
        exits: ['cemetery', 'EasterEgg']
    },
    cemetery: {
        description: 'a grave did someone die?',
        items: ['bones', 'red hairs'],
        exits: ['church', 'emptyGrave']
    }  
};

/**
 * Returns the items the player is carrying.
 * @returns {Array} 
 */
game.getInventory = () => {    
    return player.items;
};

/**
 * Returns the list of items at the player's current location.
 * @returns {Array} 
 */
game.getItems = () => {
    return map[player.location].items;
}
/**
 * Returns an object containing the description and the 
 * exits of the players current location on the map.
 * @returns {Object}
 */
game.getLocationInformation = () => {
    const playerLocation = map[player.location];
    
    let locationInfo = {
        description: playerLocation.description,
        exits: playerLocation.exits
    };

    return locationInfo;
};

/**
 * Checks if there is a connection between the player current location 
 * and the location represented by the given locationName and moves the 
 * player to that location.
 * Otherwise it changes nothing.
 * 
 * @param {String} locationName - The name of the location the player wants to move to.
 * @returns {String} - The location the player is in after executing this function
 */
game.goToLocation = locationName => {
    if (map[player.location].exits.includes(locationName)) {
        player.location = locationName;
    }

    return map[player.location].description;
};

/**
 * Checks if the item with the given itemName is in the list of 
 * items of the player's current location and transfers it to the player.
 * Otherwise it changes nothing.
 * 
 * @param {String} itemName - The name of the item.
 * @returns {String} - The name of the item that was taken. If nothing was taken, it returns 
 * the string 'nothing'
 */
game.takeItem = (itemName) => {
    const itemsAtLocation = map[player.location].items;
    const itemIndex = itemsAtLocation.indexOf(itemName);
    if (itemIndex !== -1) {
        const item = itemsAtLocation.splice(itemIndex, 1)[0];
        player.items.push(item);
        return itemName;
    }
    else {
        return 'nothing';
    }
};



module.exports = game;
