// index file
this.state = {};

/**
 * 
 * @param {object} state 
 * @param {string} value 
 * @returns {state}
 */
this.setState = (state, value) => {
    return this.state[state] = value;
};