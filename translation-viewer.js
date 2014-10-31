(function($){
	$.fn.translation_viewer = function(){

		this.map(function(text_idx){
			var pairs = $("<div></div>");
			pairs.addClass("translation-viewer-pairs");

			var links = $("<ul></ul>");
			links.addClass("translation-viewer-links")

			$(this).children("dt").slice(1).map(function(trans_idx){
				var table = $("<table></table>");
				var authors = $("<tr></tr>");
				table.addClass("translation-viewer-table");
				table.attr("id", "trans-" + text_idx + "-" + trans_idx);

				var author_orig = $(this).siblings("dt").slice(0,1).html();
				var author = $(this).html();
				var link = $("<a>" + author + "</a>")
				link.addClass("fancybox");
				link.attr({
					"href": "#trans-" + text_idx + "-" + trans_idx,
					"data-fancybox-group": "text-" + text_idx,
				});
				links.append($("<li></li>").append(link));

				authors.append("<th>" + author_orig + "</th>");
				authors.append("<th>" + author + "</th>");
				table.append(authors)

				$(this).nextUntil("dt").map(function(verse_idx){
					var row = $("<tr></tr>");
					row.append("<td>" + $(this).siblings("dt").slice(0,1).nextUntil("dt")[verse_idx].innerHTML + "</td>");
					row.append("<td>" + $(this).html() + "</td>");
					table.append(row);
				});

				return table;
			}).map(function(){$(this).appendTo(pairs)});

			$(this).before(pairs);
			$(this).before(links);
		});
	};
})(jQuery);
