# FIT Replication Experiment 2021

This repository contains all codes and reports for our replication experiment of the Experiment I in the Feature Integration Theory by Treisman & Gelade propsed in 1980. The experiment was implemented through _magpie. 

The Experiment can be found here: https://fit-replication.netlify.app

## Folder structure

- Analysis: 
	- this contains the Analysis script written in R and the html file
	- Data: this contains the csv file with all the collected data
- Experiment:
	- 'images': this contains all the stimuli png files used within the experiment. For the main trials and the practice trails all different conditions 
	   (conjunction, feature), display sizes (1, 5, 15, 30), and expectation values (target, no target) are all saved within the folder structure. Additional 
	   images thats are used within the instructions can be found. 
	- `01_custom_styles.css`: (optional) contains custom styles
	- `02_custom_functions.js`: (optional) contains custom functions, variables and hooks (e.g. a global coin flip)
	- `03_custom_views_templates.js`: (optional) contains user-defined special-purpose view templates (only needed, if the provided view templates are not 
	   enough for your experiment)
	- `04_trials.js`: (optional) contains the data of different trials of a task (e.g. names of pictures, test sentences, questions, etc.)
	- `05_views.js`: defines the different kinds of tasks, or, more generally, anything users will engage with on the screen
	- `06_main.js`: contains the experiment structure and general information about deployment
	- 'index.html': contains the indexing details for the expermental implementation. 
	-  'package.json' & 'package-lock.json'
- Writing: this includes the Preregistration Report, the Experimental Design and the Final Report
