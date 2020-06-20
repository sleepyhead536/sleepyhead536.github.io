class GameManager {
    constructor() {
        this.players = {};
        this.deck = new Deck();
    }

    addPlayer(player) {
        this.players[player.id] = player
    }

    getPlayerById(id) {
        return this.players[id]
    }

    dealPlayers() {
        for (var playerId in this.players) {
            this.deck.dealCardToPlayer(this.players[playerId]);
            this.deck.dealCardToPlayer(this.players[playerId]);
        }
    }
}

class Player {
    static GID = 0;
    
    constructor() {
        Player.GID += 1;
        this.id = Player.GID;
        this.name = "Name";
        this.coins = 2;
        this.cards = [];
    }

    getName() { return this.name; }
    getCoins() { return this.coins; }
    getCards() { return this.cards; }
    setName(input) { this.name = input; }

    addCoins(count) { this.coins += count; }

    subtractCoins(count) {
        if (this.coins < count) {
            return false
        }
        else {
            this.coins -= count;
            return true
        }
    }

    nameTextFieldCallback() {
        var text = document.getElementById("playerNameField" + this.id).value;
        this.setName(text);
    }
}

class RoleCard {
    constructor(id, type, image) {
        this.id = id
        this.type = type;
        this.image = image;

    }
}

class Duke extends RoleCard {
    constructor(id) {
        super(id, "Duke", "resources/duke.jpg");
    }
}

class Captain extends RoleCard {
    constructor(id) {
        super(id, "Captain", "resources/captain.jpg");
    }
}

class Assassin extends RoleCard {
    constructor(id) {
        super(id, "Assssin", "resources/assassin.jpg");
    }
}

class Contessa extends RoleCard {
    constructor(id) {
        super(id, "Contessa", "resources/contessa.jpg");
    }
}

class Ambassador extends RoleCard {
    constructor(id) {
        super(id, "Ambassador", "resources/ambassador.jpg");
    }
}

class Deck {
    constructor() {
        this.cards = [];
        for (var i = 0; i < 3; i++) {
            this.cards.push(new Duke(i));
        }
        for (var i = 3; i < 6; i++) {
            this.cards.push(new Captain(i));
        }
        for (var i = 6; i < 9; i++) {
            this.cards.push(new Assassin(i));
        }
        for (var i = 9; i < 12; i++) {
            this.cards.push(new Contessa(i));
        }
        for (var i = 12; i < 15; i++) {
            this.cards.push(new Ambassador(i));
        }
    }
    
    dealCardToPlayer(player) {
        var index = Math.floor(Math.random() * this.cards.length); 
        var card = this.cards[index];
        player.cards.push(card);
        this.cards.splice(index, 1);
    }

    returnCard(card) {
        this.cards.append(card);
    }
}
