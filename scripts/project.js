'use strict'

function Project (allProjects) {

  this.projectName = allProjects.projectName;
  this.pubDate = allProjects.pubDate;
  this.image = allProjects.image;
  this.description = allProjects.description;
  // this.url = allProjects.url;       
}

Project.prototype.toHtml = function(){
  var template = $('#newProject-template').html();
  var templateFiller = Handlebars.compile(template);
  var filledTemplate = templateFiller(this);
  return filledTemplate;
};





