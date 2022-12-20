angular
  .module("myAppNavbarService", [])

  .factory("navbarFactory", [
    function () {
      return {
        getNavbarHeadings: function () {
          var headings = [
            {
              title: "About",
            },
            {
              title: "Services",
            },
            {
              title: "Contact",
            },
            {
              title: "Test",
            },
          ];
          return headings;
        },
      };
    },
  ]);
