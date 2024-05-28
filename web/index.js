function showContainer(){
    document.getElementById("container").style= "display:block;";
    document.getElementById("Score").style= "display:block;";
  }
  function hidecontainer(){
    document.getElementById("container").style= "display:none;";
    document.getElementById("Score").style= "display:none;";
  }
  function showwrapper(){
    var title = document.getElementById("check").style= "display:block;";
  }
  
  function showurl_input(){
    hidecontainer()
    document.getElementById("url_input").style= "display:block;";
    document.getElementById("text_input").style= "display:none;";
    document.getElementById("file_input").style= "display:none;";
    showSubmitButton();
  }

  function showwrapper(){
    var title = document.getElementById("check").style= "display:block;";
  }

  function showSubmitButton(){
    document.getElementById("SentimentCheck").style="display:block;"
  }

  function showtext_input(){
    hidecontainer()
    document.getElementById("text_input").style= "display:block;";
    document.getElementById("url_input").style= "display:none;";
    document.getElementById("file_input").style= "display:none;";
    showSubmitButton();
  }

  function showwrapper(){
    document.getElementById("check").style= "display:block;";
  }

  function showimage_input(){
    hidecontainer()
    document.getElementById("text_input").style= "display:none;";
    document.getElementById("url_input").style= "display:none;";
    document.getElementById("file_input").style= "display:block;";
    showSubmitButton();
  }
  function showInputField(id) {
  hideAllInputFields();
  document.getElementById(id).style.display = "block";
}