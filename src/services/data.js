class DataService {
  static getAllData() {
    return {
      url: "./api/getData",
      method: "GET",
      data: {
        test: "123",
      },
    };
  }
}

export default DataService;
