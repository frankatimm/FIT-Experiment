//Introduction view: welcome participants

const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Welcome!',
  text: `<strong>Welcome to our experiment!</strong>
  <br />
  <br />
  Thank you for taking your time and contributing to our research.
  You can only take part in this experiment using a computer that is connected to a keyboard.
  <br />
  Before we start, please make sure to not get distracted by anything (e.g. your phone, internet browser,...).
  <br />
  <br />
  If you feel ready to start the experiment, please click on the <strong>"begin the experiment"-button</strong> down below.`,
  buttonText: 'Begin the experiment'
});


//general instructions

const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instructions',
  text: `Before we get started we will provide you with some short instructions and explain what your
  task is going to be.
  <br />
  You will be presented an accumulation of letters in different colors. You are then supposed to
  find a certain target among the shown items.
  <br />
  The target you are supposed to find will be specified before each block (information about the required color and shape).
  <br />
  If you detect the <strong>target</strong> press the <strong>"L"</strong> on your keyboard and if you <strong>cannot find the target</strong> press <strong>"S"</strong> instead.
  <br />
  During the whole experiment rest your index finger on the corresponding keys.
  Your answers should ensue <strong>as fast and accurate as possible</strong>.
  <br />
  <br />
  In order to prepare you for the experimental setup you will first run through some <strong>practice trials</strong> before you proceed to the main task.
  If you feel ready to start the practice trials, please click on the "start with practice trials"-button down below.`,
  buttonText: 'start with practice trials'
});

//instruction in order to proceed to the main trials

const main_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'main_instructions',
  title: 'Instructions',
  text: `So far so good!
  You have now finished the practice phase and hopefully well prepared for the <strong>main trials</strong>.
  They are identical in format and content.
  In order to proceed, press the button below.`,
  buttonText: 'proceed to main trials'
});

//instructions before conjunction condition
const instructions_conjunction_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_1',
  title: 'Instructions',
  text: `The target you are supposed to find is a <strong>green T</strong>.
  Again, if you detect the target "green T" press <strong>"L"</strong>, otherwise press <strong>"S"</strong>.
  <p style="text-align:center;"><img src="images/instructions/greenT.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'proceed to trials'
});

const instructions_conjunction_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_2',
  title: 'Instructions',
  text: `The target you are supposed to find is a <strong>green T</strong>.
  Again, if you detect the target "green T" press <strong>"L"</strong>, otherwise press <strong>"S"</strong>.
  <p style="text-align:center;"><img src="images/instructions/greenT.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'proceed to trials'
});

const instructions_conjunction_3 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_3',
  title: 'Instructions',
  text: `The target you are supposed to find is a <strong>green T</strong>.
  Again, if you detect the target "green T" press <strong>"L"</strong>, otherwise press <strong>"S"</strong>.
  <p style="text-align:center;"><img src="images/instructions/greenT.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'proceed to trials'
});

const instructions_conjunction_4 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_4',
  title: 'Instructions',
  text: `The target you are supposed to find is a <strong>green T</strong>.
  Again, if you detect the target "green T" press <strong>"L"</strong>, otherwise press <strong>"S"</strong>.
  <p style="text-align:center;"><img src="images/instructions/greenT.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'proceed to trials'
});


//instructions before each feature condition
const instructions_feature_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_feature_1',
  title: 'Instructions',
  text: `You are supposed to look for <strong>two targets</strong>, each defined by a
  different single feature: a color (blue) and a shape (S).
  <br />
  Hence, the target you are supposed to find is either a <strong>blue X, blue T</strong> (color) or a <strong>brown or green S</strong> (shape).
  In the presence of the target press <strong>"L"</strong>, otherwise press <strong>"S"</strong>.
  <p style="text-align:center;"><img src="images/instructions/instructionsfeature.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'proceed to trials'
});

const instructions_feature_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_feature_2',
  title: 'Instructions',
  text: `You are supposed to look for <strong>two targets</strong>, each defined by a
  different single feature: a color (blue) and a shape (S).
  <br />
  Hence, the target you are supposed to find is either a <strong>blue X, blue T</strong> (color) or a <strong>brown or green S</strong> (shape).
  In the presence of the target press <strong>"L"</strong>, otherwise press <strong>"S"</strong>.
  <p style="text-align:center;"><img src="images/instructions/instructionsfeature.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'proceed to trials'
});

const instructions_feature_3 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_feature_3',
  title: 'Instructions',
  text: `You are supposed to look for <strong>two targets</strong>, each defined by a
  different single feature: a color (blue) and a shape (S).
  <br />
  Hence, the target you are supposed to find is either a <strong>blue X, blue T</strong> (color) or a <strong>brown or green S</strong> (shape).
  In the presence of the target press <strong>"L"</strong>, otherwise press <strong>"S"</strong>.
  <p style="text-align:center;"><img src="images/instructions/instructionsfeature.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'proceed to trials'
});

const instructions_feature_4 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_feature_4',
  title: 'Instructions',
  text: `You are supposed to look for <strong>two targets</strong>, each defined by a
  different single feature: a color (blue) and a shape (S).
  <br />
  Hence, the target you are supposed to find is either a <strong>blue X, blue T</strong> (color) or a <strong>brown or green S</strong> (shape).
  In the presence of the target press <strong>"L"</strong>, otherwise press <strong>"S"</strong>.
  <p style="text-align:center;"><img src="images/instructions/instructionsfeature.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'proceed to trials'
});

//feedback after each block
//little break for participants in order to show that one block is already done
const after_block_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'after_block_1',
  title: 'Take a short break!',
  text: `Good job! <strong>You completed one block.</strong>
  <br />
  If you feel ready to proceed click on the botton below.`,
  buttonText: 'proceed to trials'
});

const after_block_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'after_block_2',
  title: 'Take a short break!',
  text: `Good job! <strong>You completed one block.</strong>
  <br />
  If you feel ready to proceed click on the botton below.`,
  buttonText: 'proceed to trials'
});

const after_block_3 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'after_block_3',
  title: 'Take a short break!',
  text: `Good job! <strong>You completed one block.</strong>
  <br />
  If you feel ready to proceed click on the botton below.`,
  buttonText: 'proceed to trials'
});

const after_block_4 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'after_block_4',
  title: 'Take a short break!',
  text: `Good job! <strong>You completed one block.</strong>
  <br />
  If you feel ready to proceed click on the botton below.`,
  buttonText: 'proceed to trials'
});

const after_block_5 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'after_block_5',
  title: 'Take a short break!',
  text: `Good job! <strong>You completed one block.</strong>
  <br />
  If you feel ready to proceed click on the botton below.`,
  buttonText: 'proceed to trials'
});

const after_block_6 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'after_block_6',
  title: 'Take a short break!',
  text: `Good job! <strong>You completed one block.</strong>
  <br />
  If you feel ready to proceed click on the botton below.`,
  buttonText: 'proceed to trials'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Good job! You nearly done with the experiment. The last step is to answer the following questions.',

  //ask about dominant hand instead of education
  edu_question: '<span>Dominant hand</span>',
  edu_graduated_high_school: 'left',
  edu_graduated_college: 'right',
  edu_higher_degree: 'I am able to use both hands equally well',

});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Perfect, you are done! Thank you for taking part in our experiment!',
  prolificConfirmText: 'Press the button'
});

// Here, we initialize a keyPress task
const practice_conjunction = custom_views.keypress_FIT_practice({
    trials: 8,
    name: 'practice',
    trial_type: 'practice',
    pause: 250,
    fix_duration: 1000,
    data: _.shuffle(practice_conjunction_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "no target",
    l: "target",
});

const practice_feature = custom_views.keypress_FIT_practice({
    trials: 8,
    name: 'practice',
    trial_type: 'practice',
    pause: 250,
    fix_duration: 1000,
    data: _.shuffle(practice_feature_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "no target",
    l: "target",
});
const main_feature_1 = custom_views.keypress_FIT_main({
    trials: 64,
    name: 'main_feature_1',
    trial_type: 'main',
    fix_duration: 1000,
    data: _.shuffle(main_feature_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "no target",
    l: "target",
});

const main_feature_2 = custom_views.keypress_FIT_main({
    trials: 64,
    name: 'main_feature_2',
    trial_type: 'main',
    fix_duration: 1000,
    data: _.shuffle(main_feature_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "no target",
    l: "target",
});

const main_feature_3 = custom_views.keypress_FIT_main({
    trials: 64,
    name: 'main_feature_3',
    trial_type: 'main',
    fix_duration: 1000,
    data: _.shuffle(main_feature_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "no target",
    l: "target",
});

const main_conjunction_1 = custom_views.keypress_FIT_main({
    trials: 64,
    name: 'main_conjunction_1',
    trial_type: 'main',
    fix_duration: 1000,
    data: _.shuffle(main_conjunction_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "no target",
    l: "target",
});

const main_conjunction_2 = custom_views.keypress_FIT_main({
    trials: 64,
    name: 'main_conjunction_2',
    trial_type: 'main',
    fix_duration: 1000,
    data: _.shuffle(main_conjunction_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "no target",
    l: "target",
});

const main_conjunction_3 = custom_views.keypress_FIT_main({
    trials: 64,
    name: 'main_conjunction_3',
    trial_type: 'main',
    fix_duration: 1000,
    data: _.shuffle(main_conjunction_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "no target",
    l: "target",
});
