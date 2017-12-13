var $ = require('jquery');
class RestHelper {
  get(url){
    return new Promise((success, error) => {
      $.ajax({
        url: url,
        dataType: "json",
        error: error,
        success: success
      })
    })
  }

  post(url, data){
    return new Promise((success, error) => {
      $.ajax({
        url: url,
        type: "POST",
        data: data,
        error: error,
        success: success
      })
    })
  }

  patch(url, data){
    console.log("PATCH", url);
    return new Promise((success, error) => {
      $.ajax({
        url: url,
        type: "PATCH",
        data: data,
        error: error,
        success: success
      })
    })
  }

  del(url){
    console.log("DELETE", url);
    return new Promise((success, error) => {
      $.ajax({
        url:url,
        type:"DELETE",
        success:success,
        error:error
      })
    })
  }

}

module.exports = new RestHelper();
