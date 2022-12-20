angular.module("myAppTestService", []).factory("testFactory", function () {
  return {
    getData: function () {
      return fetch(
        " https://random-data-api.com/api/v2/users?size=2&is_xml=true",
        { method: "Get" }
      );
    },
  };
});
