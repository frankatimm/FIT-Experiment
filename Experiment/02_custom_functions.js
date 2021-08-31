
//generating random participant IDs
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};

// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Correct!'+ 'Your reaction time is' + data.RT);
        } else {
            alert('Incorrect! The correct answer was ', data.correct, 'Your reaction time is', data.RT); // data.RT?? not sure
        }
        next();
    })
};

// extract URLs of all used images and concatonate them into one array
function getURLs() {
  const prac_feat_urls = practice_feature_trials_info.key_press.map(function(trial) { return trial.picture })
  const prac_conj_urls = practice_conjunction_trials_info.key_press.map(function(trial) { return trial.picture })
  const main_feat_urls = main_feature_trials_info.key_press.map(function(trial) { return trial.picture })
  const main_conj_urls = main_conjunction_trials_info.key_press.map(function(trial) { return trial.picture })

  const urls = [].concat(prac_feat_urls, prac_conj_urls, main_feat_urls, main_conj_urls)

  return urls
}

// use the urls generated above to preload the images.
// This function is called from main and applied to every element of the array
function preloadImages(url) {
    var img=new Image();
    img.src=url;
}
