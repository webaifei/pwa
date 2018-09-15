console.log('not cached\n updated');
window.addEventListener("DOMContentLoad", function (e) {
    $.ajax({
        "url": "http://gturnquist-quoters.cfapps.io/api/random"
    }).then(function (res) {
        console.log(res, typeof res);
    }).error(function (err) {
        console.log(err);
    })
})