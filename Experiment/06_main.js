//initialize and configure experiment using magpieInit

//two different groups
    //groupA:
        //Practice: conjunction, feature
        //main: conj. conj. feat. conj. feat. feature
    //groupB:
        //Practice: feature, conj.
        //main: feat. feat. conj. feat. conj. conj.

//assign participants randomly

const mapping = _.sample(["GroupA", "GroupB"]);

// PRELOADING IMAGES
const urls = getURLs();
urls.forEach(preloadImages);

//different view sequence depending on group assignment
//GroupA:

if(mapping == "GroupA"){

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            //introduction
            intro,
            instructions,
            //practice trials
            //conjunction
            instructions_conjunction_1,
            practice_conjunction,
            //feature
            instructions_feature_1,
            practice_feature,
            //main trials
            main_instructions,
            //conjunction
            instructions_conjunction_2,
            main_conjunction_1,
            after_block_1,
            //conjunction
            instructions_conjunction_3,
            main_conjunction_2,
            after_block_2,
            //feature
            instructions_feature_2,
            main_feature_1,
            after_block_3,
            //conjunction
            instructions_conjunction_4,
            main_conjunction_3,
            after_block_4,
            //feature
            instructions_feature_3,
            main_feature_2,
            after_block_5,
            //feature
            instructions_feature_4,
            main_feature_3,
            after_block_6,
            //post test and thanks
            post_test,
            thanks
        ],

        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "256",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "franka.timm00@gmail.com",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                practice_conjunction.name,
                practice_feature.name,
                main_conjunction_1.name,
                main_conjunction_2.name,
                main_conjunction_3.name,
                main_feature_1.name,
                main_feature_2.name,
                main_feature_3.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
}else{

    $("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
          //introduction
          intro,
          instructions,
          //practice trials
          //feature
          instructions_feature_1,
          practice_feature,
          //conjunction
          instructions_conjunction_1,
          practice_conjunction,
          //main trials
          main_instructions,
          //feature
          instructions_feature_2,
          main_feature_1,
          after_block_1,
          //feature
          instructions_feature_3,
          main_feature_2,
          after_block_2,
          //conjunction
          instructions_conjunction_2,
          main_conjunction_1,
          after_block_3,
          //feature
          instructions_feature_4,
          main_feature_3,
          after_block_4,
          //conjunction
          instructions_conjunction_3,
          main_conjunction_2,
          after_block_5,
          //conjunction
          instructions_conjunction_4,
          main_conjunction_3,
          after_block_6,
          //post test and thanks
          post_test,
          thanks
      ],

        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "256",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "franka.timm00@gmail.com",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                practice_conjunction.name,
                practice_feature.name,
                main_conjunction_1.name,
                main_conjunction_2.name,
                main_conjunction_3.name,
                main_feature_1.name,
                main_feature_2.name,
                main_feature_3.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
}
