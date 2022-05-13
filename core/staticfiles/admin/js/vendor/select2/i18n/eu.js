/* ! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/eu", [], function () {
    return {
      inputTooLong: function (e) {
        const t = e.input.length - e.maximum;
        let n = "Idatzi ";
        return (
          (n += 1 == t ? "karaktere bat" : t + " karaktere"), (n += " gutxiago")
        );
      },
      inputTooShort: function (e) {
        const t = e.minimum - e.input.length;
        let n = "Idatzi ";
        return (
          (n += 1 == t ? "karaktere bat" : t + " karaktere"), (n += " gehiago")
        );
      },
      loadingMore: function () {
        return "Emaitza gehiago kargatzen…";
      },
      maximumSelected: function (e) {
        return 1 === e.maximum
          ? "Elementu bakarra hauta dezakezu"
          : e.maximum + " elementu hauta ditzakezu soilik";
      },
      noResults: function () {
        return "Ez da bat datorrenik aurkitu";
      },
      searching: function () {
        return "Bilatzen…";
      },
      removeAllItems: function () {
        return "Kendu elementu guztiak";
      },
    };
  }),
    e.define,
    e.require;
})();
