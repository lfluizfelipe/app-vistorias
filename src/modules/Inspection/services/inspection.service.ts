import http from "../../../services/http.service";

class InspectionService {
  public getData() {
    return http.get('/mock');
  }
}

export default new InspectionService();