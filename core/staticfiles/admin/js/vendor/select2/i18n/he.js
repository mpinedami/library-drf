/* ! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/he", [], function () {
    return {
      errorLoading: function () {
        return "שגיאה בטעינת התוצאות";
      },
      inputTooLong: function (n) {
        const e = n.input.length - n.maximum;
        let r = "נא למחוק ";
        return (r += 1 === e ? "תו אחד" : e + " תווים");
      },
      inputTooShort: function (n) {
        const e = n.minimum - n.input.length;
        let r = "נא להכניס ";
        return (r += 1 === e ? "תו אחד" : e + " תווים"), (r += " או יותר");
      },
      loadingMore: function () {
        return "טוען תוצאות נוספות…";
      },
      maximumSelected: function (n) {
        let e = "באפשרותך לבחור עד ";
        return (
          1 === n.maximum ? (e += "פריט אחד") : (e += n.maximum + " פריטים"), e
        );
      },
      noResults: function () {
        return "לא נמצאו תוצאות";
      },
      searching: function () {
        return "מחפש…";
      },
      removeAllItems: function () {
        return "הסר את כל הפריטים";
      },
    };
  }),
    n.define,
    n.require;
})();
