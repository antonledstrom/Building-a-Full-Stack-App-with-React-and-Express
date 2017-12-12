var $ = require('jquery');
class RestHelper {
  get(url){
    return new Promise((success, error)=>{
      $.ajax({
        url: url,
        dataType: "json",
        error: error,
        success: success
      })
    })
  }

  post(url, data){
    return new Promise((success, error)=>{
      $.ajax({
        url: url,
        type: "POST",
        data: data,
        error: error,
        success: success
      })
    })
  }

}

module.exports = new RestHelper();
