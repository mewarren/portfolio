'use strict'

var projectView = [];


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

projectView.handleMainNav = function() {
  $('nav.main-nav').on('click', '.tab', function(){
    $('.tab-content').hide();
    var $clickedTab = $(this).attr('data-content');
    $("#"+$clickedTab).show();
  });
  $('.main-nav tab:first').click();
};

projectView.initIndexPage = function(){
  // Project.loadAll();
  projectView.forEach(function(projectView){
    $('#main').append(projectView.toHtml());
  });
};

Project.loadAll = function(projectData){
  projectData.forEach(function(projects){
    projectView.push(new Project(projects));
  });
};

Project.fetchAll = function(){
  if (localStorage.projectData){
    Project.loadAll(JSON.parse(localStorage.getItem('allProjects')));
    projectView.initIndexPage();
    console.log('in if statement');
  }
  else{
    $.getJSON('data/projectData.json')
      .done(function(allProjects){
        console.log('DONE function');
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
        Project.loadAll(allProjects);
        projectView.initIndexPage();
      })
      .fail(function(){
        console.log('fail');
      })
      .always(function(){
        console.log('working');
      });
  }
};

$(document).ready(function(){
  $('.tab-content').hide();
  projectView.handleMainNav();
  // projectView.initIndexPage();
  console.log(projectView);
});
