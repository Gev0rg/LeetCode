/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    const emptySeats = [];
    const occupiedSeats = [];
    seats.forEach( (value, index) => value ? occupiedSeats.push(index) : emptySeats.push(index) );
    
    return emptySeats.reduce( (maxDist, empty) => {
        const md = occupiedSeats.reduce( (dist, occup) => {
            const d = Math.abs(occup - empty);
            if (d < dist) {
                dist = d;
            }

            return dist;
        }, seats.length);

        if (md > maxDist) {
            maxDist = md;
        }

        return maxDist;
    }, 1);
};

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    const left = [0];

    for (let i = 1; i < seats.length; ++i) {
        if (seats[i]) {
            left[i] = 0;
        } else {
            left[i] = left[i - 1] + 1;
        }
    }

    const right = [];
    right[seats.length - 1] = 0;

    for (let i = seats.length - 2; i > -1; --i) {
        if (seats[i]) {
            right[i] = 0;
        } else {
            right[i] = right[i + 1] + 1;
        }
    }

    left[0] = right[0];
    right[seats.length - 1] = left[seats.length - 1];

    let maxDist = 1;

    for (let i = 0; i < seats.length; ++i) {
        const dist = Math.min(left[i], right[i]);
        if (maxDist < dist) {
            maxDist = dist;
        }
    }

    return maxDist;
};

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let res = 1;
    let prev = -1;
    let future = 0;

    for (let i = 0; i < seats.length; ++i) {
        if (seats[i]) {
            prev = i;
        } else {
            while (future < seats.length && !seats[future] || future < i) {
                ++future;
            }

            const left = prev === -1 ? seats.length : i - prev;
            const right = future === seats.length ? future : future - i;

            res = Math.max(res, Math.min(left, right));
        }
    }

    return res;
};

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let res = 1;
    const occup = [];
    seats.forEach( (value, index) => value ? occup.push(index) : undefined );

    for (let i = 0; i < occup.length - 1; ++i) {
        const dist = Math.floor((occup[i + 1] - occup[i]) / 2);

        res = Math.max(res, dist);
    }

    res = Math.max(res, occup[0]);
    res = Math.max(res, seats.length - occup[occup.length - 1] - 1);

    return res;
};
