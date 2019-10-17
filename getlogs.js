javascript: void
function () {
    "mscrm.commvault.com" !== window.location.hostname && alert("This tool can only run on mscrm.commvault.com");
    var e = document.getElementsByTagName("iframe").contentIFrame0.contentDocument,
        t = e.getElementById("caseNumBanner").textContent,
        n = e.getElementById("cv_commcell_lookupValue").textContent,
        o = e.getElementById("cv_account_lookupValue").textContent.replace(/[^a-zA-Z0-9]/g, ""),
        l = e.getElementById("Job ID_label").children[0].textContent.replace(/[^0-9]/g, "");
    if (null !== t && null !== n) {
        var a = "cvgl://" + t.trim() + "/" + n.trim() + "/" + o + "/" + l;
        window.location = a
    } else alert("Missing required data! Please send this TR%23 to Justin Wolf for review")
}();