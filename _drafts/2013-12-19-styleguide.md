---
layout: post
title: Styleguide
date: 2013-12-19
---

## Colors

<ul class="swatch-list">
  <li class="swatch base03">base03</li>
  <li class="swatch base02">base02</li>
  <li class="swatch base01">base01</li>
  <li class="swatch base00">base00</li>
  <li class="swatch base0">base0</li>
  <li class="swatch base1">base1</li>
  <li class="swatch base2">base2</li>
  <li class="swatch base3">base3</li>
  <li class="swatch yellow">yellow</li>
  <li class="swatch orange">orange</li>
  <li class="swatch red">red</li>
  <li class="swatch magenta">magenta</li>
  <li class="swatch violet">violet</li>
  <li class="swatch blue">blue</li>
  <li class="swatch cyan">cyan</li>
  <li class="swatch green">green</li>
</ul>
---

## Typefaces

The body copy is set in Freight Text Pro by Phil's Fonts.

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z  
a b c d e f g h i j k l m n o p q r s t u v w x y z  
1 2 3 4 5 6 7 8 9 0 & @ . , ? ! ’ “ ” ( )

###### The headers are set in Freight Sans Pro by Phil's Fonts.

<h6>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
a b c d e f g h i j k l m n o p q r s t u v w x y z<br>
1 2 3 4 5 6 7 8 9 0 & @ . , ? ! ’ “ ” ( )</h6>

---

## Block Level Elements

### Address

<address markdown="1">
  **Company Name, Inc.**  
  811 7th Ave, Suite 700  
  Manhattan, NY 10019  
  <abbr title="Phone">P:</abbr> (487) 487-4874
</address>

### Blockquotes

The `blockquote` element represents a section that is being quoted from another source.

> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.

Winston Churchill, in <cite markdown="1">[a speech to the House of Commons](http://hansard.millbanksystems.com/commons/1947/nov/11/parliament-bill#column_206)</cite>. 11th November 1947

> I'm a paragraph in the blockquote
> <cite>This is the citation.</cite>

### Headers

The main page header of this guide is an `h1` element. Any header elements may include links, as depicted in the example.

## Second-Level Header

The secondary header above is an `h2` element, which may be used for any form of important page-level header. More than one may be used per page. Consider using an `h2` unless you need a header level of less importance, or as a sub-header to an existing `h2` element.

### Third-Level Header

The header above is an `h3` element, which may be used for any form of page-level header which falls below the `h2` header in a document hierarchy.

#### Fourth-Level Header

The header above is an `h4` element, which may be used for any form of page-level header which falls below the `h3` header in a document hierarchy.

##### Fifth-Level Header

The header above is an `h5` element, which may be used for any form of page-level header which falls below the `h4` header in a document hierarchy.

###### Sixth-Level Header

The header above is an `h6` element, which may be used for any form of page-level header which falls below the `h5` header in a document hierarchy.

# Heading 1 with <small>small text</small> and a [link](#)

## Heading 2 with <small>small text</small> and a [link](#)

### Heading 3 with <small>small text</small> and a [link](#)

#### Heading 4 with <small>small text</small> and a [link](#)

##### Heading 5 with <small>small text</small> and a [link](#)

###### Heading 6 with <small>small text</small> and a [link](#)

### Horizontal rule

The `hr` element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book. The following extract from <cite>Pandora’s Star</cite> by Peter F. Hamilton shows two paragraphs that precede a scene change and the paragraph that follows it:

---

### Paragraphs

All paragraphs are wrapped in `p` tags. Additionally, `p` elements can be wrapped with a `blockquote` element _if the `p` element is indeed a quote_. Historically, `blockquote` has been used purely to force indents, but this is now achieved using CSS. Reserve `blockquote` for quotes.

### Pre-formatted text

The `pre` element represents a block of pre-formatted text, in which structure is represented by typographic conventions rather than by elements. Such examples are an e-mail (with paragraphs indicated by blank lines, lists indicated by lines prefixed with a bullet), fragments of computer code (with structure indicated according to the conventions of that language) or displaying <abbr title="American Standard Code for Information Interchange">ASCII</abbr> art. Here’s an example showing the printable characters of <abbr>ASCII</abbr>:

<pre><samp>! " # $ % &amp; ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^
a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~ </samp></pre>

Additionally, you might wish to cite the source, as in the above example. The correct method involves including the `cite` attribute on the `blockquote` element, but since no browser makes any use of that information, it’s useful to link to the source also.

### Definition list

The `dl` element is for another type of list called a definition list. Instead of list items, the content of a `dl` consists of `dt` (Definition Term) and `dd` (Definition description) pairs. Though it may be called a “definition list”, `dl` can apply to other scenarios where a parent/child relationship is applicable. For example, it may be used for marking up dialogues, with each `dt` naming a speaker, and each `dd` containing his or her words.

This is a term.
: This is the definition of that term, which both live in a `dl`.

Here is another term.
: And it gets a definition too, which is this line.

Here is term that shares a definition with the term below.
Here is a defined term.
: `dt` terms may stand on their own without an accompanying `dd`, but in that case they _share_ descriptions with the next available `dt`. You may not have a `dd` without a parent `dt`.


### Ordered list

The `ol` element denotes an ordered list, and various numbering schemes are available through the CSS (including 1,2,3… a,b,c… i,ii,iii… and so on). Each item requires a surrounding `li` and `/li` tag, to denote individual items within the list (as you may have guessed, `li` stands for list item).

1. This is an ordered list.
1. This is the second item, which contains a sub list
    1. This is the sub list, which is also ordered.
    1. It has two items.
1. This is the final item on this list.


### Unordered list

The `ul` element denotes an unordered list (ie. a list of loose items that don’t require numbering, or a bulleted list). Again, each item requires a surrounding `li` and `/li` tag, to denote individual items. Here is an example list showing the constituent parts of the British Isles:

* United Kingdom of Great Britain and Northern Ireland:
    * England
    * Scotland
    * Wales
    * Northern Ireland
* Republic of Ireland
* Isle of Man
* Channel Islands:
    * Bailiwick of Guernsey
    * Bailiwick of Jersey

Sometimes we may want each list item to contain block elements, typically a paragraph or two.

* The British Isles is an archipelago consisting of the two large islands of Great Britain and Ireland, and many smaller surrounding islands.

* Great Britain is the largest island of the archipelago. Ireland is the second largest island of the archipelago and lies directly to the west of Great Britain.

* The full list of islands in the British Isles includes over 1,000 islands, of which 51 have an area larger than 20 km<sup>2</sup>.


## Inline Elements

There are a number of inline <abbr title="HyperText Markup Language">HTML</abbr> elements you may use anywhere within other elements.


### Links and anchors

The `a` element is used to hyperlink text, be that to another page, a named fragment on the current page or any other location on the web. Example:

[Go to the home page]({{site.url}}/) or [return to the top of this page](#banner).


### Abbreviation

The `abbr` element is used for any abbreviated text, whether it be acronym, initialism, or otherwise. Generally, it’s less work and useful (enough) to mark up only the first occurrence of any particular abbreviation on a page, and ignore the rest. Any text in the `title` attribute will appear when the user’s mouse hovers the abbreviation (although notably, this does not work in Internet Explorer for Windows). Example abbreviations:

<abbr title="British Broadcasting Corportation">BBC</abbr>, <abbr title="HyperText Markup Language">HTML</abbr>, and <abbr title="Staffordshire">Staffs.</abbr>


### Citations

The `cite` element is used to represent the title of a work (e.g. a book, essay, poem, song, film, TV show, sculpture, painting, musical, exhibition, etc). This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing. Example:

<cite>Universal Declaration of Human Rights</cite>, United Nations, December 1948. Adopted by General Assembly resolution 217 A (III).


### Code

The `code` element is used to represent fragments of computer code. Useful for technology-oriented sites, not so useful otherwise. Example:

When you call the `activate()` method on the `robotSnowman` object, the eyes glow.

Used in conjunction with the `pre` element:

<pre><code>function getJelly() {
  echo $aDeliciousSnack;
}</code></pre>

When used with Pygments to highlight code:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}


### Definition

The `dfn` element is used to highlight the first use of a term. The `title` attribute can be used to describe the term. Example:

Bob’s <dfn title="Dog">canine</dfn> mother and <dfn title="Horse">equine</dfn> father sat him down and carefully explained that he was an <dfn title="A mutation that combines two or more sets of chromosomes from different species">allopolyploid</dfn> organism.


### Edits

The `del` element is used to represent deleted or retracted text which still must remain on the page for some reason. Meanwhile its counterpart, the `ins` element, is used to represent inserted text. Both `del` and `ins` have a `datetime` attribute which allows you to include a timestamp directly in the element. Example inserted text and usage:

She bought <del datetime="2005-05-30T13:00:00">two</del> <ins datetime="2005-05-30T13:00:00">five</ins> pairs of shoes.


### Stressed emphasis

The `em` element is used to denote text with stressed emphasis, i.e., something you’d pronounce differently. Where italicizing is required for stylistic differentiation, the `i` element may be preferable. Example:

You simply _must_ try the negitoro maki!


### Keyboard entry

The `kbd` element is used to denote user input (typically via a keyboard, although it may also be used to represent other input methods, such as voice commands). Example:

The computer said <kbd>f478b9aa89442d2922b915a23dd1ac4c</kbd>.


### Marked or highlighted text

The `mark` element is used to represent a run of text marked or highlighted for reference purposes. When used in a quotation it indicates a highlight not originally present but added to bring the reader’s attention to that part of the text. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its relevance to the user’s current activity. Example:

I also have some <mark>kitten</mark>s who are visiting me these days. They’re really cute. I think they like my garden! Maybe I should adopt a <mark>kitten</mark>.


### Inline quotes

The `q` element is used for quoting text inline. Example showing nested quotations:

John said, <q>I saw Lucy at lunch, she told me <q>Mary wants you to get some ice cream on your way home</q>. I think I will get some at Ben and Jerry’s, on Gloucester Road.</q>


### Strikethrough

The `s` element is used to represent content that is no longer accurate or relevant. When indicating document edits i.e., marking a span of text as having been removed from a document, use the `del` element instead. Example:

<p><s>Recommended retail price: £3.99 per bottle</s><br>
<strong>Now selling for just £2.99 a bottle!</strong></p>


### Sample output

The `samp` element is used to represent (sample) output from a program or computing system. Useful for technology-oriented sites, not so useful otherwise. Example:

The computer said <samp>Too much cheese in tray two</samp> but I didn’t know what that meant.


### Small print

The `small` element is used to represent disclaimers, caveats, legal restrictions, or copyrights (commonly referred to as ‘small print’). It can also be used for attributions or satisfying licensing requirements. Example:

<small>Copyright © 1922-2011 Acme Corporation. All Rights Reserved.</small>


### Strong importance

The `strong` element is used to denote text with strong importance. Where bolding is used for stylistic differentiation, the `b` element may be preferable. Example:

**Don’t** stick nails in the electrical outlet.


### Superscript and subscript text

The `sup` element represents a superscript and the sub element represents a `sub`. These elements must be used only to mark up typographical conventions with specific meanings, not for typographical presentation. As a guide, only use these elements if their absence would change the meaning of the content. Example:

The coordinate of the <var>i</var>th point is (<var>x<sub><var>i</var></sub></var>, <var>y<sub><var>i</var></sub></var>). For example, the 10th point has coordinate (<var>x<sub>10</sub></var>, <var>y<sub>10</sub></var>).
f(<var>x</var>, <var>n</var>) = log<sub>4</sub><var>x</var><sup><var>n</var></sup>


### Time

The `time` element is used to represent either a time on a 24 hour clock, or a precise date in the proleptic Gregorian calendar, optionally with a time and a time-zone offset. Example:

Queen Elizabeth II was proclaimed sovereign of each of the Commonwealth realms on <time datetime="1952-02-6">6</time> and <time datetime="1952-02-7">7 February 1952</time>, after the death of her father, King George VI.


### Variable

The `var` element is used to denote a variable in a mathematical expression or programming context, but can also be used to indicate a placeholder where the contents should be replaced with your own value. Example:

If there are <var>n</var> pipes leading to the ice cream factory then I expect at _least_ <var>n</var> flavours of ice cream to be available for purchase!


### Forms

Forms can be used when you wish to collect data from users. The `fieldset` element enables you to group related fields within a form, and each one should contain a corresponding `legend`. The `label` element ensures field descriptions are associated with their corresponding form widgets.

<form action="#">
  <fieldset>
    <legend>Legend</legend>
    <div>
      <label for="text">Text Input <abbr title="Required">&#42;</abbr></label>
      <input id="text" class="text" type="text">
      <p class="help-text">Note about this field</p>
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" class="text" type="password">
      <p class="help-text">Note about this field</p>
    </div>
    <div>
      <label for="url">Web Address</label>
      <input id="url" class="text" type="url">
      <p class="help-text">Note about this field</p>
    </div>
    <div>
      <label for="email">Email Address</label>
      <input id="email" class="text" type="email">
      <p class="help-text">Note about this field</p>
    </div>
    <div>
      <label for="search">Search</label>
      <input id="search" class="text" type="search"><input id="password" class="search button" type="submit">
      <p class="help-text">Note about this field</p>
    </div>
    <div>
      <label for="textarea">Textarea</label>
      <textarea id="textarea" rows="8" cols="48"></textarea>
      <p class="help-text">Note about this field</p>
    </div>
    <div>
      <label for="checkbox">Single Checkbox</label>
      <label for="checkbox" class="check"><input id="checkbox" type="checkbox" class="checkbox"> Label</label>
    </div>
    <div>
      <label for="select">Select</label>
      <select id="select">
        <optgroup label="Option Group">
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </optgroup>
      </select>
      <p class="help-text">Note about this field</p>
    </div>
    <fieldset class="options">
      <legend>Checkbox <abbr title="Required">&#42;</abbr></legend>
      <ul>
        <li><label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked"> Choice A</label></li>
        <li><label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"> Choice B</label></li>
        <li><label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"> Choice C</label></li>
      </ul>
    </fieldset>
    <fieldset class="options">
      <legend>Radio</legend>
      <ul>
        <li><label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked="checked"> Option 1</label></li>
        <li><label for="radio2"><input id="radio2" name="radio" type="radio" class="radio"> Option 2</label></li>
      </ul>
    </fieldset>
    <div class="submit">
      <input class="button" type="submit" value="Post Comment">
      <input class="button" type="button" value="Preview">
    </div>
  </fieldset>
</form>


### Media

### Audio

<div><audio controls="">
  <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4" type="audio/mp4">
  <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" type="audio/ogg; codecs=vorbis">
Your user agent does not support the HTML5 Audio element.
</audio></div>

Missing

<div><audio controls=""></audio></div>


### Figures

Figures are usually used to refer to images:

<figure>
  <img src="http://lorempixum.com/1800/1000/abstract/?r" alt="Example image">
  <figcaption>
  <h4>Figure Heading</h4>
  <p>This is a placeholder image, with supporting caption.</p>
  </figcaption>
</figure>

<figure>
  <img src="http://lorempixum.com/1800/1000/abstract/?r" alt="Example image" width="900" height="500">
  <figcaption>Figcaption content</figcaption>
</figure>

### Image

![Dog](http://lorempixum.com/240/240/abstract/?r)

Linked Image

[![Dog](http://lorempixum.com/240/240/abstract/?r)](#)

Missing Image

<img alt="This is an example of a missing image">

Full Width

![Full width image](http://lorempixum.com/1800/1000/abstract/?r)
{: .full}

SVG

<div>
  <svg width="200px" height="200px">
    <circle cx="100" cy="100" r="100" fill="#ff0000"></circle>
  </svg>
</div>


### Video

<video controls="" preload="" poster="http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg" width="640" height="360">
  <source id="mp4" src="http://media.w3.org/2010/05/bunny/trailer.mp4" type="video/mp4">
  <source id="ogv" src="http://media.w3.org/2010/05/bunny/trailer.ogv" type="video/ogg">
Your user agent does not support the HTML5 Video element.
</video>

Missing video.

<video controls=""></video>


### Tabular data

Tables should be used when displaying tabular data. The `thead`, `tfoot` and `tbody` elements enable you to group rows within each a table.

If you use these elements, you must use every element. They should appear in this order: `thead`, `tfoot` and `tbody`, so that browsers can render the foot before receiving all the data. You must use these tags within the table element.

|--------------------------------+-----------+-----------|
| Ingredients                    | Serves 12 | Serves 24 |
|--------------------------------|-----------|-----------|
| Milk                           | 1 quart   | 2 quart   |
| Cinnamon Sticks                | 1         | 2         |
| Vanilla Bean, Split            | 1         | 2         |
| Cloves                         | 5         | 10        |
| Mace                           | 10 blades | 20 blades |
| Egg Yolks                      | 12        | 24        |
| Cups Sugar                     | 1 ½ cups  | 3 cups    |
| Dark Rum                       | 1 ½ cups  | 3 cups    |
| Brandy                         | 1 ½ cups  | 3 cups    |
| Vanilla                        | 1 tbsp    | 2 tbsp    |
| Half-and-half or Light Cream   | 1 quart   | 2 quart   |
| Freshly grated nutmeg to taste |           |           |
|================================+===========+===========|
| Footer row                     |           |           |
|--------------------------------+-----------+-----------|

## Other

### Gists via GitHub Pages

To include a gist:

{% gist 5555251 gist.md %}
