'use strict'

var projectView = {};

projectView.handleMainNav = function() {
  $('nav.main-nav').on('click', '.tab', function(){
    $('.tab-content').hide();
    var $clickedTab = $(this).attr('data-content');
    $("#"+$clickedTab).show();
  });

  $('.main-nav tab:first').click();

};

$(document).ready(function(){
  $('.tab-content').hide();
  projectView.handleMainNav();
});
