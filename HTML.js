    // HTML Tags categorized by type
    const tagCategories = {
        "Basic Structure": [
            { 
                tag: "<!DOCTYPE>", 
                description: "Defines the document type", 
                deprecated: false,
                example: `<!DOCTYPE html>`,
                result: "Declares that this document is an HTML5 document"
            },
            { 
                tag: "<html>", 
                description: "Defines the root of an HTML document", 
                deprecated: false,
                example: `<html lang="en">\n  <!-- content goes here -->\n</html>`,
                result: "Creates the root element of an HTML page with English language"
            },
            { 
                tag: "<head>", 
                description: "Contains metadata/information for the document", 
                deprecated: false,
                example: `<head>\n  <title>Page Title</title>\n  <meta charset="UTF-8">\n</head>`,
                result: "Container for metadata elements like title, styles, scripts, etc."
            },
            { 
                tag: "<title>", 
                description: "Defines a title for the document", 
                deprecated: false,
                example: `<title>My Web Page</title>`,
                result: "Sets the title that appears in the browser tab"
            },
            { 
                tag: "<body>", 
                description: "Defines the document's body", 
                deprecated: false,
                example: `<body>\n  <h1>Hello World</h1>\n  <p>This is a paragraph.</p>\n</body>`,
                result: "Container for all the visible content of the webpage"
            },
            { 
                tag: "<meta>", 
                description: "Defines metadata about an HTML document", 
                deprecated: false,
                example: `<meta name="description" content="HTML Reference Guide">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
                result: "Provides information about the page for search engines and browsers"
            },
            { 
                tag: "<link>", 
                description: "Defines the relationship between a document and an external resource", 
                deprecated: false,
                example: `<link rel="stylesheet" href="styles.css">`,
                result: "Links to an external stylesheet"
            },
            { 
                tag: "<style>", 
                description: "Defines style information for a document", 
                deprecated: false,
                example: `<style>\n  body { font-family: Arial; }\n  h1 { color: blue; }\n</style>`,
                result: "Embeds CSS styles directly in the HTML document"
            },
            { 
                tag: "<script>", 
                description: "Defines a client-side script", 
                deprecated: false,
                example: `<script>\n  function greet() {\n    alert('Hello!');\n  }\n</script>`,
                result: "Embeds JavaScript code directly in the HTML document"
            },
            { 
                tag: "<noscript>", 
                description: "Defines alternate content for users that do not support client-side scripts", 
                deprecated: false,
                example: `<noscript>\n  <p>Your browser does not support JavaScript!</p>\n</noscript>`,
                result: "Shows content only when JavaScript is disabled"
            },
            { 
                tag: "<base>", 
                description: "Specifies the base URL/target for all relative URLs in a document", 
                deprecated: false,
                example: `<head>\n  <base href="https://www.example.com/" target="_blank">\n</head>`,
                result: "Sets a base URL for all relative links on a page"
            }
        ],
        "Text Formatting": [
            { 
                tag: "<h1> to <h6>", 
                description: "Defines HTML headings", 
                deprecated: false,
                example: `<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<h3>This is heading 3</h3>`,
                result: "Creates headings with decreasing importance from h1 to h6"
            },
            { 
                tag: "<p>", 
                description: "Defines a paragraph", 
                deprecated: false,
                example: `<p>This is a paragraph of text. It can contain multiple sentences and will automatically wrap as needed.</p>`,
                result: "Creates a paragraph with proper spacing before and after"
            },
            { 
                tag: "<br>", 
                description: "Defines a single line break", 
                deprecated: false,
                example: `<p>This is line 1<br>This is line 2</p>`,
                result: "Inserts a line break without creating a new paragraph"
            },
            { 
                tag: "<hr>", 
                description: "Defines a thematic change in the content", 
                deprecated: false,
                example: `<p>Section 1</p>\n<hr>\n<p>Section 2</p>`,
                result: "Creates a horizontal line to separate content sections"
            },
            { 
                tag: "<strong>", 
                description: "Defines important text", 
                deprecated: false,
                example: `<p>This is <strong>very important</strong> text.</p>`,
                result: "Typically displays as bold text with semantic importance"
            },
            { 
                tag: "<em>", 
                description: "Defines emphasized text", 
                deprecated: false,
                example: `<p>This is <em>emphasized</em> text.</p>`,
                result: "Typically displays as italic text with semantic emphasis"
            },
            { 
                tag: "<b>", 
                description: "Defines bold text", 
                deprecated: false,
                example: `<p>This is <b>bold</b> text.</p>`,
                result: "Makes text bold without semantic importance"
            },
            { 
                tag: "<i>", 
                description: "Defines a part of text in an alternate voice or mood", 
                deprecated: false,
                example: `<p>The scientific name is <i>Homo sapiens</i>.</p>`,
                result: "Makes text italic without semantic emphasis"
            },
            { 
                tag: "<u>", 
                description: "Defines text that is stylistically different", 
                deprecated: false,
                example: `<p>This is <u>underlined</u> text.</p>`,
                result: "Underlines text (use with caution as it can be confused with links)"
            },
            { 
                tag: "<mark>", 
                description: "Defines marked/highlighted text", 
                deprecated: false,
                example: `<p>This is <mark>highlighted</mark> text.</p>`,
                result: "Highlights text, usually with a yellow background"
            },
            { 
                tag: "<small>", 
                description: "Defines smaller text", 
                deprecated: false,
                example: `<p>This is normal text. <small>This is smaller text.</small></p>`,
                result: "Makes text smaller than the surrounding text"
            },
            { 
                tag: "<del>", 
                description: "Defines text that has been deleted from a document", 
                deprecated: false,
                example: `<p>The price was <del>$20</del> now $15.</p>`,
                result: "Shows text as struck through, indicating deletion"
            },
            { 
                tag: "<ins>", 
                description: "Defines a text that has been inserted into a document", 
                deprecated: false,
                example: `<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>`,
                result: "Shows text as underlined, indicating insertion"
            },
            { 
                tag: "<sub>", 
                description: "Defines subscripted text", 
                deprecated: false,
                example: `<p>H<sub>2</sub>O is the chemical formula for water.</p>`,
                result: "Displays text as subscript (below the normal line)"
            },
            { 
                tag: "<sup>", 
                description: "Defines superscripted text", 
                deprecated: false,
                example: `<p>E=mc<sup>2</sup> is Einstein's famous equation.</p>`,
                result: "Displays text as superscript (above the normal line)"
            },
            { 
                tag: "<pre>", 
                description: "Defines preformatted text", 
                deprecated: false,
                example: `<pre>\nThis text\n  keeps its\n    formatting\n</pre>`,
                result: "Preserves whitespace and line breaks exactly as written"
            },
            { 
                tag: "<code>", 
                description: "Defines a piece of computer code", 
                deprecated: false,
                example: `<p>The <code>print()</code> function in Python displays output.</p>`,
                result: "Displays text in a monospace font, ideal for code snippets"
            },
            { 
                tag: "<kbd>", 
                description: "Defines keyboard input", 
                deprecated: false,
                example: `<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text.</p>`,
                result: "Indicates text to be entered by the user"
            },
            { 
                tag: "<samp>", 
                description: "Defines sample output from a computer program", 
                deprecated: false,
                example: `<p>The program returned: <samp>Hello, World!</samp></p>`,
                result: "Represents sample output from a computer program"
            },
            { 
                tag: "<var>", 
                description: "Defines a variable", 
                deprecated: false,
                example: `<p>The equation is: <var>x</var> = <var>y</var> + 2</p>`,
                result: "Typically displays as italic text, used for variables in math or programming"
            },
            { 
                tag: "<abbr>", 
                description: "Defines an abbreviation or acronym", 
                deprecated: false,
                example: `<p><abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`,
                result: "Shows a tooltip with the full term when hovering over the abbreviation"
            },
            { 
                tag: "<cite>", 
                description: "Defines the title of a work", 
                deprecated: false,
                example: `<p><cite>The Great Gatsby</cite> was written by F. Scott Fitzgerald.</p>`,
                result: "Typically displays as italicized text, used for citations or references"
            },
            { 
                tag: "<q>", 
                description: "Defines a short quotation", 
                deprecated: false,
                example: `<p>She said <q>This is a quote</q> during the meeting.</p>`,
                result: "Adds quotation marks around the text automatically"
            },
            { 
                tag: "<blockquote>", 
                description: "Defines a section quoted from another source", 
                deprecated: false,
                example: `<blockquote cite="https://www.example.com">\n  <p>This is a longer quotation taken from another source.</p>\n</blockquote>`,
                result: "Creates an indented block for longer quotations"
            },
            { 
                tag: "<dfn>", 
                description: "Defines a term that will be defined", 
                deprecated: false,
                example: `<p><dfn>HTML</dfn> is the standard markup language for creating web pages.</p>`,
                result: "Indicates the defining instance of a term"
            },
            { 
                tag: "<s>", 
                description: "Defines text that is no longer correct", 
                deprecated: false,
                example: `<p><s>This information is outdated.</s> Updated information is available.</p>`,
                result: "Displays text with a strikethrough line"
            }
        ],
        "Links and Media": [
            { 
                tag: "<a>", 
                description: "Defines a hyperlink", 
                deprecated: false,
                example: `<a href="https://www.example.com">Visit Example.com</a>\n<a href="page2.html">Go to Page 2</a>\n<a href="#section3">Jump to Section 3</a>\n<a href="tel:+1234567890">Call Us</a>\n<a href="mailto:info@example.com">Email Us</a>`,
                result: "Creates clickable links to other pages, resources, or sections"
            },
            { 
                tag: "<img>", 
                description: "Defines an image", 
                deprecated: false,
                example: `<img src="image.jpg" alt="Description of image" width="300" height="200" loading="lazy">`,
                result: "Embeds an image in the document with specified dimensions"
            },
            { 
                tag: "<audio>", 
                description: "Defines embedded sound content", 
                deprecated: false,
                example: `<audio controls autoplay muted>\n  <source src="audio.mp3" type="audio/mpeg">\n  <source src="audio.ogg" type="audio/ogg">\n  Your browser does not support the audio element.\n</audio>`,
                result: "Embeds audio content with playback controls"
            },
            { 
                tag: "<video>", 
                description: "Defines embedded video content", 
                deprecated: false,
                example: `<video width="320" height="240" controls poster="thumbnail.jpg">\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  Your browser does not support the video element.\n</video>`,
                result: "Embeds video content with playback controls"
            },
            { 
                tag: "<source>", 
                description: "Defines multiple media resources for media elements", 
                deprecated: false,
                example: `<video controls>\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n</video>`,
                result: "Specifies multiple sources for media elements to ensure browser compatibility"
            },
            { 
                tag: "<track>", 
                description: "Defines text tracks for media elements", 
                deprecated: false,
                example: `<video controls>\n  <source src="video.mp4" type="video/mp4">\n  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">\n  <track src="subtitles_es.vtt" kind="subtitles" srclang="es" label="Spanish">\n</video>`,
                result: "Adds subtitles, captions, or other text tracks to media elements"
            },
            { 
                tag: "<iframe>", 
                description: "Defines an inline frame", 
                deprecated: false,
                example: `<iframe src="https://www.example.com" width="500" height="300" sandbox="allow-scripts" loading="lazy"></iframe>`,
                result: "Embeds another webpage within the current page"
            },
            { 
                tag: "<picture>", 
                description: "Defines a container for multiple image resources", 
                deprecated: false,
                example: `<picture>\n  <source media="(min-width: 650px)" srcset="img_large.jpg">\n  <source media="(min-width: 465px)" srcset="img_medium.jpg">\n  <img src="img_small.jpg" alt="Example image">\n</picture>`,
                result: "Provides responsive images that adapt to different screen sizes"
            },
            { 
                tag: "<figure>", 
                description: "Specifies self-contained content", 
                deprecated: false,
                example: `<figure>\n  <img src="image.jpg" alt="Example image">\n  <figcaption>Fig.1 - This is an example image.</figcaption>\n</figure>`,
                result: "Groups media content with its caption"
            },
            { 
                tag: "<figcaption>", 
                description: "Defines a caption for a <figure> element", 
                deprecated: false,
                example: `<figure>\n  <img src="chart.jpg" alt="Chart showing data">\n  <figcaption>Fig.2 - Sales data for Q2 2025.</figcaption>\n</figure>`,
                result: "Provides a caption for a figure element"
            },
            { 
                tag: "<map>", 
                description: "Defines an image map", 
                deprecated: false,
                example: `<img src="planets.jpg" alt="Planets" usemap="#planetmap">\n<map name="planetmap">\n  <area shape="rect" coords="0,0,82,126" href="sun.html" alt="Sun">\n  <area shape="circle" coords="90,58,3" href="earth.html" alt="Earth">\n</map>`,
                result: "Creates clickable areas on an image"
            },
            { 
                tag: "<area>", 
                description: "Defines an area inside an image map", 
                deprecated: false,
                example: `<map name="workmap">\n  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.html">\n  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.html">\n</map>`,
                result: "Defines clickable areas within an image map"
            },
            { 
                tag: "<svg>", 
                description: "Defines a container for SVG graphics", 
                deprecated: false,
                example: `<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />\n</svg>`,
                result: "Creates scalable vector graphics directly in the document"
            },
            { 
                tag: "<canvas>", 
                description: "Used to draw graphics via scripting", 
                deprecated: false,
                example: `<canvas id="myCanvas" width="200" height="100"></canvas>\n<script>\n  const canvas = document.getElementById("myCanvas");\n  const ctx = canvas.getContext("2d");\n  ctx.fillStyle = "#FF0000";\n  ctx.fillRect(0, 0, 80, 80);\n</script>`,
                result: "Provides a drawing area for JavaScript graphics"
            },
            { 
                tag: "<embed>", 
                description: "Defines a container for external application", 
                deprecated: false,
                example: `<embed src="game.swf" width="400" height="300" type="application/x-shockwave-flash">`,
                result: "Embeds external content such as plugins"
            },
            { 
                tag: "<object>", 
                description: "Defines an embedded object", 
                deprecated: false,
                example: `<object data="data.pdf" type="application/pdf" width="800" height="600">\n  <p>Your browser doesn't support PDF viewing. <a href="data.pdf">Download the PDF</a> instead.</p>\n</object>`,
                result: "Embeds external resources like PDFs, Flash, or other multimedia"
            },
            { 
                tag: "<param>", 
                description: "Defines a parameter for an object", 
                deprecated: false,
                example: `<object data="horse.wav">\n  <param name="autoplay" value="true">\n  <param name="controller" value="true">\n</object>`,
                result: "Passes parameters to embedded objects"
            }
        ],
        "Lists": [
            { 
                tag: "<ul>", 
                description: "Defines an unordered list", 
                deprecated: false,
                example: `<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Milk</li>\n</ul>`,
                result: "Creates a bulleted list"
            },
            { 
                tag: "<ol>", 
                description: "Defines an ordered list", 
                deprecated: false,
                example: `<ol type="1" start="5">\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ol>`,
                result: "Creates a numbered list"
            },
            { 
                tag: "<li>", 
                description: "Defines a list item", 
                deprecated: false,
                example: `<ul>\n  <li>This is a list item</li>\n  <li>This is another list item</li>\n</ul>`,
                result: "Defines an item in a list"
            },
            { 
                tag: "<dl>", 
                description: "Defines a description list", 
                deprecated: false,
                example: `<dl>\n  <dt>Coffee</dt>\n  <dd>Black hot drink</dd>\n  <dt>Milk</dt>\n  <dd>White cold drink</dd>\n</dl>`,
                result: "Creates a list of terms with their descriptions"
            },
            { 
                tag: "<dt>", 
                description: "Defines a term/name in a description list", 
                deprecated: false,
                example: `<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>`,
                result: "Specifies a term in a description list"
            },
            { 
                tag: "<dd>", 
                description: "Defines a description/value of a term in a description list", 
                deprecated: false,
                example: `<dl>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets - used for styling HTML elements</dd>\n</dl>`,
                result: "Provides the description for a term in a description list"
            },
            { 
                tag: "<menu>", 
                description: "Defines an unordered list", 
                deprecated: false,
                example: `<menu>\n  <li>Option 1</li>\n  <li>Option 2</li>\n  <li>Option 3</li>\n</menu>`,
                result: "Similar to ul, historically used for menu lists"
            }
        ],
        "Tables": [
            { 
                tag: "<table>", 
                description: "Defines a table", 
                deprecated: false,
                example: `<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>`,
                result: "Creates a table for displaying data in rows and columns"
            },
            { 
                tag: "<tr>", 
                description: "Defines a row in a table", 
                deprecated: false,
                example: `<table>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</table>`,
                result: "Creates a row within a table"
            },
            { 
                tag: "<th>", 
                description: "Defines a header cell in a table", 
                deprecated: false,
                example: `<table>\n  <tr>\n    <th>Product</th>\n    <th>Price</th>\n  </tr>\n</table>`,
                result: "Creates a header cell within a table row, typically bold and centered"
            },
            { 
                tag: "<td>", 
                description: "Defines a cell in a table", 
                deprecated: false,
                example: `<table>\n  <tr>\n    <td>Data cell 1</td>\n    <td>Data cell 2</td>\n  </tr>\n</table>`,
                result: "Creates a standard data cell within a table row"
            },
            { 
                tag: "<caption>", 
                description: "Defines a table caption", 
                deprecated: false,
                example: `<table>\n  <caption>Monthly Savings</caption>\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n</table>`,
                result: "Adds a title or caption to a table"
            },
            { 
                tag: "<thead>", 
                description: "Groups the header content in a table", 
                deprecated: false,
                example: `<table>\n  <thead>\n    <tr>\n      <th>Month</th>\n      <th>Savings</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>January</td>\n      <td>$100</td>\n    </tr>\n  </tbody>\n</table>`,
                result: "Groups the header content in a table for styling and accessibility"
            },
            { 
                tag: "<tbody>", 
                description: "Groups the body content in a table", 
                deprecated: false,
                example: `<table>\n  <thead>\n    <tr>\n      <th>First Name</th>\n      <th>Last Name</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Doe</td>\n    </tr>\n  </tbody>\n</table>`,
                result: "Groups the body content in a table for styling and accessibility"
            },
            { 
                tag: "<tfoot>", 
                description: "Groups the footer content in a table", 
                deprecated: false,
                example: `<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n  <tfoot>\n    <tr>\n      <td>Total</td>\n      <td>$350</td>\n    </tr>\n  </tfoot>\n</table>`,
                result: "Groups the footer content in a table for styling and accessibility"
            },
            { 
                tag: "<col>", 
                description: "Specifies column properties for each column within a <colgroup> element", 
                deprecated: false,
                example: `<table>\n  <colgroup>\n    <col style="background-color:yellow">\n    <col style="background-color:lightblue">\n  </colgroup>\n  <tr>\n    <th>Name</th>\n    <th>Value</th>\n  </tr>\n</table>`,
                result: "Applies properties to an entire column in a table"
            },
            { 
                tag: "<colgroup>", 
                description: "Specifies a group of one or more columns in a table for formatting", 
                deprecated: false,
                example: `<table>\n  <colgroup>\n    <col span="2" style="background-color:lightgrey">\n    <col style="background-color:lightblue">\n  </colgroup>\n  <tr>\n    <th>Col 1</th>\n    <th>Col 2</th>\n    <th>Col 3</th>\n  </tr>\n</table>`,
                result: "Groups and formats columns in a table"
            }
        ],
        "Forms and Input": [
            { 
                tag: "<form>", 
                description: "Defines an HTML form for user input", 
                deprecated: false,
                example: `<form action="/submit-form" method="post" enctype="multipart/form-data">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name"><br>\n  <input type="submit" value="Submit">\n</form>`,
                result: "Creates a form that collects user input"
            },
            { 
                tag: "<input>", 
                description: "Defines an input control", 
                deprecated: false,
                example: `<input type="text" placeholder="Enter your name">\n<input type="password" placeholder="Password">\n<input type="checkbox" id="agree" name="agree">\n<input type="radio" name="gender" value="male">\n<input type="submit" value="Submit">\n<input type="file" accept="image/*">\n<input type="date">\n<input type="color">\n<input type="range" min="0" max="100" value="50">\n<input type="email" required>`,
                result: "Creates various input controls based on the type attribute"
            },
            { 
                tag: "<textarea>", 
                description: "Defines a multiline input control (text area)", 
                deprecated: false,
                example: `<textarea rows="4" cols="50" placeholder="Enter your comments here..." maxlength="500"></textarea>`,
                result: "Creates a multi-line text input area"
            },
            { 
                tag: "<button>", 
                description: "Defines a clickable button", 
                deprecated: false,
                example: `<button type="button" onclick="alert('Hello!')">Click Me</button>\n<button type="submit">Submit</button>\n<button type="reset">Reset</button>`,
                result: "Creates a clickable button with various functions"
            },
            { 
                tag: "<select>", 
                description: "Defines a drop-down list", 
                deprecated: false,
                example: `<select name="cars" multiple size="3">\n  <option value="volvo">Volvo</option>\n  <option value="bmw">BMW</option>\n  <option value="audi">Audi</option>\n</select>`,
                result: "Creates a dropdown selection menu"
            },
            { 
                tag: "<option>", 
                description: "Defines an option in a drop-down list", 
                deprecated: false,
                example: `<select>\n  <option value="1">Option 1</option>\n  <option value="2" selected>Option 2</option>\n  <option value="3" disabled>Option 3</option>\n</select>`,
                result: "Defines options within a select dropdown"
            },
            { 
                tag: "<optgroup>", 
                description: "Defines a group of related options in a drop-down list", 
                deprecated: false,
                example: `<select>\n  <optgroup label="European Cars">\n    <option value="volvo">Volvo</option>\n    <option value="mercedes">Mercedes</option>\n  </optgroup>\n  <optgroup label="American Cars">\n    <option value="ford">Ford</option>\n  </optgroup>\n</select>`,
                result: "Groups related options in a select dropdown"
            },
            { 
                tag: "<label>", 
                description: "Defines a label for an <input> element", 
                deprecated: false,
                example: `<label for="username">Username:</label>\n<input type="text" id="username" name="username">\n\n<label>\n  <input type="checkbox"> Remember me\n</label>`,
                result: "Associates a text label with an input field for accessibility"
            },
            { 
                tag: "<fieldset>", 
                description: "Groups related elements in a form", 
                deprecated: false,
                example: `<fieldset>\n  <legend>Personal Information</legend>\n  <label for="fname">First name:</label>\n  <input type="text" id="fname" name="fname"><br>\n  <label for="lname">Last name:</label>\n  <input type="text" id="lname" name="lname">\n</fieldset>`,
                result: "Groups related form elements with a border"
            },
            { 
                tag: "<legend>", 
                description: "Defines a caption for a <fieldset> element", 
                deprecated: false,
                example: `<fieldset>\n  <legend>Payment Information</legend>\n  <!-- form elements related to payment -->\n</fieldset>`,
                result: "Provides a title for a fieldset element"
            },
            { 
                tag: "<datalist>", 
                description: "Specifies a list of pre-defined options for input controls", 
                deprecated: false,
                example: `<input list="browsers" name="browser">\n<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n  <option value="Safari">\n</datalist>`,
                result: "Creates an autocomplete dropdown for input fields"
            },
            { 
                tag: "<output>", 
                description: "Defines the result of a calculation", 
                deprecated: false,
                example: `<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">\n  <input type="range" id="a" value="50"> +\n  <input type="number" id="b" value="50"> =\n  <output name="result" for="a b">100</output>\n</form>`,
                result: "Shows the result of a calculation or user action"
            },
            { 
                tag: "<progress>", 
                description: "Represents the progress of a task", 
                deprecated: false,
                example: `<progress value="70" max="100">70%</progress>`,
                result: "Displays a progress bar"
            },
            { 
                tag: "<meter>", 
                description: "Defines a scalar measurement within a known range", 
                deprecated: false,
                example: `<meter value="0.6" min="0" max="1" low="0.3" high="0.7" optimum="0.5">60%</meter>`,
                result: "Displays a gauge showing a value within a range"
            }
        ],
        "Semantic Structure": [
            { 
                tag: "<section>", 
                description: "Defines a section in a document", 
                deprecated: false,
                example: `<section>\n  <h2>Section Title</h2>\n  <p>This is a section of content.</p>\n</section>`,
                result: "Creates a thematic grouping of content"
            },
            { 
                tag: "<article>", 
                description: "Defines an independent, self-contained content", 
                deprecated: false,
                example: `<article>\n  <h2>Article Title</h2>\n  <p>This is an independent piece of content that could stand alone.</p>\n</article>`,
                result: "Represents a complete, self-contained composition"
            },
            { 
                tag: "<aside>", 
                description: "Defines content aside from the page content", 
                deprecated: false,
                example: `<aside>\n  <h3>Related Links</h3>\n  <ul>\n    <li><a href="#">Link 1</a></li>\n    <li><a href="#">Link 2</a></li>\n  </ul>\n</aside>`,
                result: "Creates a sidebar or content tangentially related to the main content"
            },
            { 
                tag: "<header>", 
                description: "Defines a header for a document or section", 
                deprecated: false,
                example: `<header>\n  <h1>Website Title</h1>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n    </ul>\n  </nav>\n</header>`,
                result: "Creates an introductory content area"
            },
            { 
                tag: "<footer>", 
                description: "Defines a footer for a document or section", 
                deprecated: false,
                example: `<footer>\n  <p>Copyright &copy; 2025</p>\n  <address>Contact: <a href="mailto:info@example.com">info@example.com</a></address>\n</footer>`,
                result: "Creates a footer typically containing authorship, copyright, contact info"
            },
            { 
                tag: "<nav>", 
                description: "Defines navigation links", 
                deprecated: false,
                example: `<nav>\n  <ul>\n    <li><a href="#home">Home</a></li>\n    <li><a href="#services">Services</a></li>\n    <li><a href="#contact">Contact</a></li>\n  </ul>\n</nav>`,
                result: "Creates a navigation menu with links"
            },
            { 
                tag: "<main>", 
                description: "Specifies the main content of a document", 
                deprecated: false,
                example: `<main>\n  <h1>Main Content Heading</h1>\n  <p>This is the main content area of the document.</p>\n</main>`,
                result: "Defines the primary content area of the document"
            },
            { 
                tag: "<details>", 
                description: "Defines additional details that the user can open and close on demand", 
                deprecated: false,
                example: `<details>\n  <summary>Click to show more information</summary>\n  <p>Here is the detailed information that is initially hidden.</p>\n</details>`,
                result: "Creates a disclosure widget that can be toggled open/closed"
            },
            { 
                tag: "<summary>", 
                description: "Defines a visible heading for a <details> element", 
                deprecated: false,
                example: `<details>\n  <summary>FAQ: How do I reset my password?</summary>\n  <p>To reset your password, click on the "Forgot Password" link on the login page.</p>\n</details>`,
                result: "Provides a heading for a details element that users can click"
            },
            { 
                tag: "<dialog>", 
                description: "Defines a dialog box or window", 
                deprecated: false,
                example: `<dialog id="myDialog">\n  <h2>Dialog Title</h2>\n  <p>This is a dialog window.</p>\n  <button onclick="document.getElementById('myDialog').close()">Close</button>\n</dialog>\n<button onclick="document.getElementById('myDialog').show()">Open Dialog</button>`,
                result: "Creates a popup dialog box or modal window"
            },
            { 
                tag: "<address>", 
                description: "Defines contact information for the author/owner of a document", 
                deprecated: false,
                example: `<address>\n  Written by <a href="mailto:john@example.com">John Doe</a>.<br>\n  Visit us at:<br>\n  Example.com<br>\n  Box 564, Disneyland<br>\n  USA\n</address>`,
                result: "Formats contact information, typically in italic text"
            },
            { 
                tag: "<hgroup>", 
                description: "Groups heading elements", 
                deprecated: false,
                example: `<hgroup>\n  <h1>Main Title</h1>\n  <h2>Subtitle</h2>\n</hgroup>`,
                result: "Groups a set of h1-h6 elements for a multi-level heading"
            }
        ],
        "Interactive Elements": [
            {
                tag: "<details>", 
                description: "Defines additional details that can be opened/closed", 
                deprecated: false,
                example: `<details>\n  <summary>Show more</summary>\n  <p>Additional information that is initially hidden</p>\n</details>`,
                result: "Creates an interactive disclosure widget"
            },
            {
                tag: "<summary>", 
                description: "Defines a visible heading for a details element", 
                deprecated: false,
                example: `<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content is revealed when clicked</p>\n</details>`,
                result: "Provides the visible heading for a details disclosure widget"
            },
            {
                tag: "<dialog>", 
                description: "Defines a dialog box or subwindow", 
                deprecated: false,
                example: `<dialog id="myDialog">\n  <p>This is a dialog box!</p>\n  <button id="close">Close</button>\n</dialog>\n\n<button onclick="document.getElementById('myDialog').showModal()">Open Dialog</button>`,
                result: "Creates a popup dialog or modal window"
            },
            {
                tag: "<template>", 
                description: "Container for client-side content that should not be rendered", 
                deprecated: false,
                example: `<template id="myTemplate">\n  <div class="user-card">\n    <h2 class="name"></h2>\n    <p class="email"></p>\n  </div>\n</template>\n\n<script>\n  // Clone and use the template with JavaScript\n  const template = document.getElementById('myTemplate');\n  const clone = template.content.cloneNode(true);\n  clone.querySelector('.name').textContent = 'John Doe';\n  document.body.appendChild(clone);\n</script>`,
                result: "Defines HTML content that should not be rendered initially but can be instantiated with JavaScript"
            },
            {
                tag: "<slot>", 
                description: "Placeholder inside a web component", 
                deprecated: false,
                example: `<template id="user-card-template">\n  <div class="user-card">\n    <h2><slot name="username">Default name</slot></h2>\n    <slot>Default content</slot>\n  </div>\n</template>`,
                result: "Creates a placeholder that can be filled with custom content"
            }
        ],
        "Deprecated Tags": [
            { 
                tag: "<applet>", 
                description: "Defines an embedded applet", 
                deprecated: true,
                example: `<applet code="game.class" width="250" height="250"></applet>`,
                result: "Deprecated: Use <object> instead"
            },
            { 
                tag: "<basefont>", 
                description: "Specifies a default font", 
                deprecated: true,
                example: `<basefont face="Arial" size="3" color="red">`,
                result: "Deprecated: Use CSS instead"
            },
            { 
                tag: "<center>", 
                description: "Centers text and elements", 
                deprecated: true,
                example: `<center>This text is centered</center>`,
                result: "Deprecated: Use CSS text-align:center instead"
            },
            { 
                tag: "<dir>", 
                description: "Defines a directory list", 
                deprecated: true,
                example: `<dir>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</dir>`,
                result: "Deprecated: Use <ul> instead"
            },
            { 
                tag: "<font>", 
                description: "Defines font, color, and size for text", 
                deprecated: true,
                example: `<font face="Arial" color="blue" size="3">This is some text</font>`,
                result: "Deprecated: Use CSS instead"
            },
            { 
                tag: "<frame>", 
                description: "Defines a frame within a frameset", 
                deprecated: true,
                example: `<frameset cols="25%,75%">\n  <frame src="menu.html">\n  <frame src="content.html">\n</frameset>`,
                result: "Deprecated: Use <iframe> instead"
            },
            { 
                tag: "<frameset>", 
                description: "Defines a set of frames", 
                deprecated: true,
                example: `<frameset rows="50%,50%">\n  <frame src="top.html">\n  <frame src="bottom.html">\n</frameset>`,
                result: "Deprecated: Use CSS and <iframe> instead"
            },
            { 
                tag: "<noframes>", 
                description: "Defines an alternate content for users that do not support frames", 
                deprecated: true,
                example: `<frameset>\n  <frame src="frame.html">\n  <noframes>Your browser does not support frames.</noframes>\n</frameset>`,
                result: "Deprecated: No longer needed as frames are obsolete"
            },
            { 
                tag: "<strike>", 
                description: "Defines strikethrough text", 
                deprecated: true,
                example: `<strike>This text is strikethrough</strike>`,
                result: "Deprecated: Use <del> or CSS text-decoration:line-through instead"
            },
            { 
                tag: "<tt>", 
                description: "Defines teletype text", 
                deprecated: true,
                example: `<tt>This is teletype text</tt>`,
                result: "Deprecated: Use <code> or CSS instead"
            },
            { 
                tag: "<blink>", 
                description: "Makes text blink", 
                deprecated: true,
                example: `<blink>This text will blink</blink>`,
                result: "Deprecated: Not supported and considered bad practice"
            },
            { 
                tag: "<marquee>", 
                description: "Creates a scrolling text", 
                deprecated: true,
                example: `<marquee behavior="scroll" direction="left">This text will scroll from right to left</marquee>`,
                result: "Deprecated: Use CSS animations instead"
            },
            { 
                tag: "<big>", 
                description: "Defines bigger text", 
                deprecated: true,
                example: `<big>This text is bigger</big>`,
                result: "Deprecated: Use CSS font-size instead"
            }
        ]
    };

// Helper function to escape HTML for display
function escapeHtml(html) {
    return html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Function to render the categories and tags
function renderTagList() {
    const container = document.getElementById('tag-container');
    
    // Create category tabs
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'category-tabs';
    
    Object.keys(tagCategories).forEach((category, index) => {
        const tab = document.createElement('button');
        tab.className = 'category-tab';
        tab.textContent = category;
        tab.dataset.category = category;
        if (index === 0) tab.classList.add('active');
        
        tab.addEventListener('click', function() {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tag-category').forEach(c => c.style.display = 'none');
            
            this.classList.add('active');
            document.getElementById(`category-${this.dataset.category.replace(/\s+/g, '-').toLowerCase()}`).style.display = 'block';
        });
        
        tabsContainer.appendChild(tab);
    });
    
    container.appendChild(tabsContainer);
    
    // Create category content
    const contentContainer = document.createElement('div');
    contentContainer.className = 'categories-content';
    
    Object.entries(tagCategories).forEach(([category, tags], index) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'tag-category';
        categorySection.id = `category-${category.replace(/\s+/g, '-').toLowerCase()}`;
        categorySection.style.display = index === 0 ? 'block' : 'none';
        
        const heading = document.createElement('h2');
        heading.textContent = category;
        categorySection.appendChild(heading);
        
        const tagList = document.createElement('div');
        tagList.className = 'tag-list';
        
        tags.forEach(tag => {
            const tagItem = document.createElement('div');
            tagItem.className = 'tag-item';
            if (tag.deprecated) tagItem.classList.add('deprecated');
            
            // Create tag name element
            const tagName = document.createElement('h3');
            tagName.className = 'tag-name';
            tagName.textContent = tag.tag;
            tagItem.appendChild(tagName);
            
            // Create description element
            const tagDesc = document.createElement('p');
            tagDesc.className = 'tag-description';
            tagDesc.textContent = tag.description;
            tagItem.appendChild(tagDesc);
            
            // Add deprecated badge if needed
            if (tag.deprecated) {
                const badge = document.createElement('span');
                badge.className = 'deprecated-badge';
                badge.textContent = 'Deprecated';
                tagItem.appendChild(badge);
            }
            
            // Create button
            const button = document.createElement('button');
            button.className = 'show-example-btn';
            button.textContent = 'Show Example';
            tagItem.appendChild(button);
            
            // Create example section
            const example = document.createElement('div');
            example.className = 'tag-example';
            example.style.display = 'none';
            
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.textContent = tag.example;
            pre.appendChild(code);
            example.appendChild(pre);
            
            const resultDiv = document.createElement('div');
            resultDiv.className = 'example-result';
            
            const resultHead = document.createElement('h4');
            resultHead.textContent = 'Result:';
            resultDiv.appendChild(resultHead);
            
            const resultPara = document.createElement('p');
            resultPara.innerHTML = tag.result;
            resultDiv.appendChild(resultPara);
            
            example.appendChild(resultDiv);
            tagItem.appendChild(example);
            
            // Add event listener for the button
            button.addEventListener('click', function() {
                if (example.style.display === 'none') {
                    example.style.display = 'block';
                    this.textContent = 'Hide Example';
                } else {
                    example.style.display = 'none';
                    this.textContent = 'Show Example';
                }
            });
            
            tagList.appendChild(tagItem);
        });
        
        categorySection.appendChild(tagList);
        contentContainer.appendChild(categorySection);
    });
    
    container.appendChild(contentContainer);
}

// Initialize the application
function init() {
    renderTagList();
    
// Add search functionality
const searchInput = document.getElementById('search-tags');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    document.querySelectorAll('.tag-item').forEach(tagItem => {
        const tagName = tagItem.querySelector('.tag-name').textContent.toLowerCase();
        
        if (tagName.includes(searchTerm)) {
            tagItem.style.display = 'block';
        } else {
            tagItem.style.display = 'none';
        }
    });
    
    // Show/hide categories based on search results
    document.querySelectorAll('.tag-category').forEach(category => {
        const visibleItems = Array.from(category.querySelectorAll('.tag-item'))
            .filter(item => item.style.display !== 'none');
        
        if (searchTerm === '') {
            // If search is cleared, go back to tab view
            document.querySelectorAll('.category-tab').forEach(t => t.style.display = 'block');
            const activeTab = document.querySelector('.category-tab.active');
            if (activeTab) {
                document.querySelectorAll('.tag-category').forEach(c => c.style.display = 'none');
                document.getElementById(`category-${activeTab.dataset.category.replace(/\s+/g, '-').toLowerCase()}`).style.display = 'block';
            }
        } else {
            // In search mode, show all categories with matching items
            document.querySelectorAll('.category-tab').forEach(t => t.style.display = 'none');
            category.style.display = visibleItems.length > 0 ? 'block' : 'none';
        }
    });
});
}

// Call init when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
});