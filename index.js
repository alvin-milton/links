var links = {},
    parse;

parse.getLinks = function(host) {
    var anchors = document.getElementsByTagName('a');
    for (var i = 0; i < anchors.length; i++) {
        if (anchors[i].href.indexOf(host) > -1) {
             if (!links[anchors[i].href]) {
                links[anchors[i].href] = anchors[i].href;
                console.log('matched', anchors[i].href);
            }
        }
    }
};
