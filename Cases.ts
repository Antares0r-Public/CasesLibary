export class Case {
  possibleOutcome: { name: string; percentage: number; model: any }[];
  range: number[];

  openCase(): void {
    const min = this.range[0];
    const max = this.range[1];

    let founds: number[] = [];

    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random Number: ${r}.`);

    for (let i = 0; i < this.possibleOutcome.length; i++) {
      let percentage = this.possibleOutcome[i].percentage;
      if (r < percentage) {
        founds.push(percentage);
        console.log(founds);
      }
    }

    if (founds.length > 0) {
      const smallestNum = Math.min(...founds);

      let winningOutcome;
      for (let i = 0; i < this.possibleOutcome.length; i++) {
        if (this.possibleOutcome[i].percentage === smallestNum) {
          winningOutcome = this.possibleOutcome[i];
          break;
        }
      }

      if (winningOutcome) {
        console.log(`You've won: ${winningOutcome.name}`);
      }
    }
  }

  constructor(possibleOutcome: { name: string; percentage: number; model: any }[], range: number[]) {
    this.possibleOutcome = possibleOutcome;
    this.range = range;
  }
}
