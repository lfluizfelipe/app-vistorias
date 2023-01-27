import Step from "./step.entity";

export default class Inspection {
  public logo: string = '';

  public name: string = '';

  public steps: Step[] = [];

  constructor(data: any = {}) {
    this.logo = data.logo || '';
    this.name = data.name || '';
    this.steps = data.steps
      ? data.steps.map((step: any) => new Step(step))
      : [];
  }
}