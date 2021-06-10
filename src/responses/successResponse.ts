export class SuccessResponse {
  success = true;

  data: any = {};

  constructor(data: any = {}) {
    this.data = data;
  }
}
