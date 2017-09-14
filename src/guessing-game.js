class GuessingGame {
    constructor() {
    	this.arr = [];
    	this.index = 0;
    	this.min = 0,
    	this.max = 0;
    }

    setRange(min, max) {
		for(var i = min; i <= max; i++){
			this.arr[i] = i;
		}	
		this.min = min;
		this.max = max;
		this.index = Math.round((min + max)/2);
    }

    guess() {
    	return this.arr[this.index];
    }

    lower() {
    	this.max= this.index;
    	this.index = Math.round((this.max + this.min)/2);
    }

    greater() {
    	this.min= this.index;
    	this.index = Math.round((this.max + this.min)/2);
    }
}

module.exports = GuessingGame;
