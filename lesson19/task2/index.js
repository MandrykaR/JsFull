export const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },

    stop() {
        console.log(`${this.name} stopped`);
    }
}

export const ship = {
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
        this.stop();
    },
}

Object.setPrototypeOf(ship, vehicle);

export function getOwnProps(obj) {
    const ownProps = [];

    for (const propName in obj) {
        if (obj.hasOwnProperty(propName) && typeof obj[propName] !== 'function') {
            ownProps.push(propName);
        }
    }

    return ownProps;
}
console.log(getOwnProps(vehicle));