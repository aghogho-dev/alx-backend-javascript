class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (!this.constructor instanceof Building) {
      if (!this.evacuationWarningMessage instanceof Function) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}

export default Building;
