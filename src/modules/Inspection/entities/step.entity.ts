export default class Step {
    public description: string = '';
  
    public icon: string = '';

    public id: string = '';

    public title: string = '';

    constructor(data: any = {}) {
      this.description = data.description || '';
      this.icon = data.icon || '';
      this.id = data.id || '';
      this.title = data.title || '';
    }
  }