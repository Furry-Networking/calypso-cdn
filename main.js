function loader() {
  var a = document.createElement("script");
  console.log("Script is now defined");
  a.setAttribute("type", "text/javascript");
  a.setAttribute("src", "https://6100m-thinks-foxes-are-cool.redactech.xyz/docready.js");
  document.body.appendChild(a);
  document.writeln("<script type='text/javascript' src='https://6100m-thinks-foxes-are-cool.redactech.xyz/multiplexer.js'><\/script>");
  console.log("Multiplexer loaded");
  document.writeln("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\/script>");
  console.log("Jquery loaded");
  console.log('Scripts have now been pulled from "fox" server');
}
