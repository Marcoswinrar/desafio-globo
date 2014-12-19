$(document).ready(function(){

    $("#inputSearch").keyup(function(){
        var query = accent_fold($(this).val());

        if(query.length >= 2){

            content = "";
            $.ajax({
                type: "GET",
                url: "/busca/featureContent/",
                data: {q: query},
                async: false,
                success: function(data){
                    $.each(data, function (i, item){
                        content += '<li class="feature-content">';
                        content += '<a class="logo" href="' + item.url + '"><img src="' + item.logo + ' " ></a> ';
                        content += '<a class="title"  href="' + item.url + '">' + item.title + '</a>';
                        content += '</li>';
                    });
                }
            });

            $.ajax({
                type: "GET",
                url: "/busca/suggests/",
                data: {q: query},
                async: false,
                success: function(data){
                    if(data.length > 0)
                        content += '<li class="suggestions-text">Sugestões de busca</li>';
                    $.each(data, function (i, item){
                       content += '<li class="suggestion-item"> <a href="http://g1.globo.com/busca/?q=' + item +' " >' + item + '</a></li>';
                    });
                }
            });

            content += '<li class="suggestion-search globo"> <a href="http://g1.globo.com/busca/?q=' + query + '"> buscar &#39;<span>' + query + '</span>&#39; na Globo.com › </a></li>';
            content += '<li class="suggestion-search web"> <a href="https://g1.globo.com/busca/web/q=' + query + '"> buscar &#39;<span>' + query + '</span>&#39; na Web › </a></li>';

            $("#listSuggestions").show();
            $("#searchResults").html(content);

        }
        else {
            $("#listSuggestions").hide();
        }
    });
});
