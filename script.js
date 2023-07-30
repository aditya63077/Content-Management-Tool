function submitForm() {
    var title = document.querySelector('#title').value;
    var content = document.querySelector('#content').value;
    var image = document.querySelector('#image').files[0];
    var video = document.querySelector('#video').files[0];

    var dataSection = document.getElementById('dataSection');

    var newData = "<div class='card'>" +"<div class='card-header'>" +"<h3 class='card-title'><b>Title:</b>" + 
    title + "</h3>" +
      "</div>" + "<div class='card-body'>" +"<p><b>Content: </b>" + content + "</p>";

    if (image) {
      var imgPreview = document.createElement('img');
      imgPreview.src = URL.createObjectURL(image);
      imgPreview.style.maxWidth = '100%';
      imgPreview.style.height = 'auto';
      imgPreview.style.marginTop = '10px';
      newData += "<p><b>Image:</b></p>";
      newData += "<div class='card-body-image'>" +
        "<img class='preview' src='" + imgPreview.src + "' alt='Selected Image'>" +
        "</div>";
    }

    if (video) {
      var videoPreview = document.createElement('video');
      videoPreview.src = URL.createObjectURL(video);
      videoPreview.controls = true;
      videoPreview.autoplay = false;
      videoPreview.style.maxWidth = '100%';
      videoPreview.style.height = 'auto';
      videoPreview.style.marginTop = '20px';
      newData += "<p><b>Video:</b></p>";
      newData += "<div class='card-body-video'>" +
        "<video class='video-preview' src='" + videoPreview.src + "' controls autoplay></video>" +
        "</div>";
    }

    newData += "</div></div>";
    dataSection.innerHTML += newData;

    document.querySelector('#title').value = '';
    document.querySelector('#content').value = '';
    document.querySelector('#image').value = '';
    document.querySelector('#video').value = '';
  }