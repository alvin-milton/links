var links = {},
    host = 'http://barkpost.dev';

$('a').each(function() {

    var href = $(this).attr('href');

    if (href.indexOf(host) > -1 && href.indexOf('wp-') === -1) {

        if (!links[$(this).attr('href')]) {

            links[$(this).attr('href')] = $(this).attr('href');

            console.log('matched', href);

        }

    }
});
