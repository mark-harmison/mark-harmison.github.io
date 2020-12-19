var fso = new ActiveXObject("Scripting.FileSystemObject");
var tf = fso.OpenTextFile("thumbnails/Thumbnails.html");
var text = tf.ReadAll();
var out = fso.CreateTextFile(WScript.Arguments.Item(0), true, false);

text = text.replace(/<style>/,"")
text = text.replace(/body {font-family:Verdana;}/, "");
text = text.replace(/<\/style>/, "<link rel='stylesheet' href='../style.css' type='text/css'>");

text = text.replace(/ bgcolor="#C0C0C0"/, "");

text = text.replace(/<FONT[^>]*>/g, "");

text = text.replace(/ target="ImageWindow"/g, "");

text = text.replace(/<\/FONT>/g, "<BR>\n(caption here)\n");

text = text.replace(/VALIGN=BOTTOM/g, "VALIGN=TOP");

text = text.replace(/<center>/, "");
text = text.replace(/<\/center>/, "");

text = text.replace(/<hr>/g, "");

text = text.replace(/<b><A HREF="http:\/\/www.irfanview.com">Created by IrfanView<\/A><\/b>/, "");

text = text.replace(/SRC="/g, "SRC=\"thumbnails/");

text = text.replace(/<TABLE>/, "<center><p><a href='../gallery.htm'>Return to gallery</a></p></center>\n<TABLE>");
out.Write(text);
out.Close();