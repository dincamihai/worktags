define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["app/templates/command.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"col-sm-12\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <span class=\"label label-default\">1h 15m</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-11\">\n      <input id=\"command-line\" type=\"text\" placeholder=\"Add new task tags\"/>\n    </div>\n    <div class=\"col-sm-1\">\n      <a id=\"add-log-entry\" class=\"btn btn-primary\">Add</a>\n    </div>\n  </div>\n</div>\n";
  });

this["Templates"]["app/templates/layout.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-sm-8\">\n    Monday 29-10-2012\n  </div>\n  <div class=\"col-sm-2\">\n      Work done: 10h\n  </div>\n  <div class=\"col-sm-2\">\n      Breaks: 1h\n  </div>\n</div>\n\n<div class=\"row\">\n  <div id=\"log-entries\"></div>\n</div>\n\n<div class=\"row\">\n  <div id=\"command\"></div>\n</div>\n";
  });

this["Templates"]["app/templates/log.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table class=\"table table-hover\">\n  <tr>\n    <td>08:40</td>\n    <td>@start<td>\n  </tr>\n</table>\n";
  });

this["Templates"]["app/templates/logentry.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>";
  if (helper = helpers.showEnd) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.showEnd); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (helper = helpers.tags) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tags); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n";
  return buffer;
  });

return this["Templates"];

});