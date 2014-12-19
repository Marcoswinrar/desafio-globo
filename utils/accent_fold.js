//accent-folding function
// Great explanation about this efficient method here: http://alistapart.com/article/accent-folding-for-auto-complete

var accent_map = {
'á':'a',
'à':'a',
'ã':'a',
'â':'a',
'ä':'a',
'Á':'a',
'À':'a',
'Ã':'a',
'Â':'a',
'Ä':'a',
'é':'e',
'è':'e',
'ê':'e',
'ë':'e',
'É':'e',
'È':'e',
'Ê':'e',
'Ë':'e',
'í':'i',
'ì':'i',
'î':'i',
'ï':'i',
'Í':'i',
'Ì':'i',
'Î':'i',
'Ï':'i',
'ó':'o',
'ò':'o',
'õ':'o',
'ô':'o',
'ö':'o',
'Ó':'o',
'Ò':'o',
'Õ':'o',
'Ô':'o',
'Ö':'o',
'ú':'u',
'ù':'u',
'û':'u',
'ü':'u',
'Ú':'u',
'Ù':'u',
'Û':'u',
'Ü':'u',
'ñ':'n',
'Ñ':'n',
'ç':'c',
'Ç':'c',
'&':'e',
'@':'a',};

exports.accent_fold = function(s) {
    if (!s) { return ''; }
    var ret = '';
    for (var i=0; i<s.length; i++) {
        ret += accent_map[s.charAt(i)] || s.charAt(i);
    }
    return ret.toLowerCase();
};

