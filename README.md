translation-viewer
==================

In print, a bilingual edition can show its original and its translated
texts [on facing pages][rilke] for comparison.  On the Web, even when
lines are narrow enough to display two paragraphs or stanzas side
by side, there is often no easy way to emulate facing pages without
modifying the page's overall layout.

[rilke]: http://books.google.com/books?id=yh90bNsI5wkC&lpg=PP1&pg=PA14#v=twopage&q&f=false "Sonnets to Orpheus - Rainer Maria Rilke - Google Books"

translation-viewer aims to solve this problem.  For now, its goal
is to display a single poem in one or more translations.  Future
versions may add

* prose display,
* pairwise comparison of editions (not just original and translation),
  and
* explicit WordPress support.


------------------------------------------------------------------------
Demonstration
------------------------------------------------------------------------
See enclosed `example.html`, or examine [a live version][helicon].

[helicon]: http://www.thehelicon.com/2012/eclogues/ "Translations: Eclogues IV.31–45 |  Helicon"


------------------------------------------------------------------------
Dependencies
------------------------------------------------------------------------
* [jQuery][jquery]
* [fancyBox][fancybox]

[fancybox]: http://jquery.com/ "jQuery"
[jquery]: http://fancybox.net "Fancybox - Fancy jQuery lightbox alternative"


### Acknowledgments

translation-viewer includes Dennis McHenry's ["New CSS for Formatting
Poetry"][css], for which I'm grateful.

[css]: http://thecampvs.com/2012/03/29/formatting-poetry-v-2/ "Formatting Poetry, v.2&nbsp;|&nbsp;the CAMPVS"


------------------------------------------------------------------------
Getting Started
------------------------------------------------------------------------
translation-viewer assumes that you have an original text of n stanzas
and m >= 1 translations also of n stanzas.  See `example.html` for how
to format this text for translation-viewer to display.
