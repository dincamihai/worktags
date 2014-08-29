define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["app/templates/command.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<select data-placeholder=\"Add new task tags\" multiple id=\"command-line\" >\n    <option value=\"viasto\">#viasto</option>\n    <option value=\"sams\">#sams</option>\n</select>\n";
  });

this["Templates"]["app/templates/layout.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row-fluid\">\n  <div class=\"span12\" id=\"command\"></div>\n</div>\n<div class=\"row-fluid\">\n  <div class=\"span12\" id=\"log\"></div>\n</div>\n";
  });

this["Templates"]["app/templates/log.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row-fluid\">\n  <div class=\"span8\" id=\"log\"></div>\n</div>\n";
  });

return this["Templates"];

});