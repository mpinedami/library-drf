/* ! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/ps", [], function () {
    return {
      errorLoading: function () {
        return "پايلي نه سي ترلاسه کېدای";
      },
      inputTooLong: function (n) {
        const e = n.input.length - n.maximum;
        let r = "د مهربانۍ لمخي " + e + " توری ړنګ کړئ";
        return 1 != e && (r = r.replace("توری", "توري")), r;
      },
      inputTooShort: function (n) {
        return (
          "لږ تر لږه " + (n.minimum - n.input.length) + " يا ډېر توري وليکئ"
        );
      },
      loadingMore: function () {
        return "نوري پايلي ترلاسه کيږي...";
      },
      maximumSelected: function (n) {
        let e = "تاسو يوازي " + n.maximum + " قلم په نښه کولای سی";
        return 1 != n.maximum && (e = e.replace("قلم", "قلمونه")), e;
      },
      noResults: function () {
        return "پايلي و نه موندل سوې";
      },
      searching: function () {
        return "لټول کيږي...";
      },
      removeAllItems: function () {
        return "ټول توکي لرې کړئ";
      },
    };
  }),
    n.define,
    n.require;
})();
