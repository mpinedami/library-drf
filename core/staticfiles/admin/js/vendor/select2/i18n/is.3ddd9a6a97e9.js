/* ! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/is", [], function () {
    return {
      inputTooLong: function (n) {
        const t = n.input.length - n.maximum;
        const e = "Vinsamlegast styttið texta um " + t + " staf";
        return t <= 1 ? e : e + "i";
      },
      inputTooShort: function (n) {
        const t = n.minimum - n.input.length;
        let e = "Vinsamlegast skrifið " + t + " staf";
        return t > 1 && (e += "i"), (e += " í viðbót");
      },
      loadingMore: function () {
        return "Sæki fleiri niðurstöður…";
      },
      maximumSelected: function (n) {
        return "Þú getur aðeins valið " + n.maximum + " atriði";
      },
      noResults: function () {
        return "Ekkert fannst";
      },
      searching: function () {
        return "Leita…";
      },
      removeAllItems: function () {
        return "Fjarlægðu öll atriði";
      },
    };
  }),
    n.define,
    n.require;
})();
