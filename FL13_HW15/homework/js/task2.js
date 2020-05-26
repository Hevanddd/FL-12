const INTERVAL_START_DRIVING = 2000,
      INTERVAL_STOP_DRIVING = 1500,
      OVERHEATING_POINT = 30;

let transport = {
    getInfo: function () {
        return this._info;
    },
    upgradeEngine: function (newEngine, maxSpeed) {
        this._info.engine = newEngine;
        this._maxSpeed = maxSpeed;
    },
    getMaxSpeed: function () {
        return this._maxSpeed;
    },
    drive: function () {
        if (this._timerStart) {
            console.log('Already driving')
        } else {
            this._maxSpeedDuringDriving = 0;
            this._speed = 0;
            this._timerStart = setInterval(() => {
                if (this._speed >= this._maxSpeed) {
                    console.log('speed is too high, SLOW DOWN!')
                }
                this._speed += 20;
                console.log(this._speed);
                if (this._speed > this._maxSpeedDuringDriving) {
                    this._maxSpeedDuringDriving = this._speed;
                }
            }, INTERVAL_START_DRIVING);
        }
    },
    stop: function () {
        if (this._timerStop) {
            console.log('Already slows down')
        } else {
            clearInterval(this._timerStart)
            this._timerStop = setInterval(() => {
                if (this._speed > 0) {
                    console.log(this._speed)
                    this._speed -= 20
                } else {
                    clearInterval(this._timerStop);
                    this.sendMessage();
                    this._timerStart = false;
                }
            }, INTERVAL_STOP_DRIVING)
        }
    }
}

function CreateVehicle(engine, color, model = 'unknown model') {
    this._info = {
        engine: engine,
        color: color,
        model: model
    }
    this._maxSpeed = 70;
    this.sendMessage = function () {
        console.log(`Vehicle is stopped. Maximum speed during the drive was ${this._maxSpeedDuringDriving}`);
    }
}

function CreateCar(engine, color, model) {
    this._info = {
        engine: engine,
        color: color,
        model: model
    }
    this._maxSpeed = 80;
    this.changeColor = function (newColor) {
        if (newColor !== this._info.color) {
            this._info.color = newColor;
        } else {
            console.log('The selected color is the same as the previous, please choose another one');
        }
    }
    this.sendMessage = function () {
        console.log(`Car ${this._info.model} is stopped. Maximum speed during the drive was \
${this._maxSpeedDuringDriving}`);
    }
}

function CreateMotorcycle(engine, color, model) {
    this._info = {
        engine: engine,
        color: color,
        model: model
    }
    this._maxSpeed = 90;

    this.drive = function () {
        if (this._timerStart) {
            console.log('Already driving');
        } else {
            console.log(`Let's drive`)
            this._speed = 0;
            this._timerStart = setInterval(() => {
                if (this._speed >= this._maxSpeed) {
                    console.log('speed is too high, SLOW DOWN!')
                }
                if (this._speed >= this._maxSpeed + OVERHEATING_POINT) {
                    console.log('Engine overheating');
                    clearInterval(this._timerStart);
                    this.stop();
                }
                this._speed += 20;
                console.log(this._speed);
            }, INTERVAL_START_DRIVING);
        }
    }
    this.sendMessage = function () {
        console.log(`Motorcycle ${this._info.model} is stopped. Good drive`);
    }
}

CreateVehicle.prototype = Object.create(transport);
CreateVehicle.prototype.constructor = CreateVehicle;
CreateCar.prototype = Object.create(transport);
CreateCar.prototype.constructor = CreateCar;
CreateMotorcycle.prototype = Object.create(transport);
CreateMotorcycle.prototype.constructor = CreateMotorcycle;