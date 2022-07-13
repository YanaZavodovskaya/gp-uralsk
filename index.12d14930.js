$((function(){var o=$(window),i=$(".sidebar"),t=i.position$(".container").top,n=i.height(),a=$(".footer").position().top;o.scroll((function(s){i.addClass("fixed");var r=o.scrollTop(),c=Math.max(0,t-r);if(r+n>a)c=Math.min(c,a-r-n);i.css("top",c)}))}));
//# sourceMappingURL=index.12d14930.js.map
