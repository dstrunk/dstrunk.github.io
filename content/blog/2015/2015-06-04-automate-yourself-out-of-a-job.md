---
title: Automate yourself out of a job
tags: [misc]
category: General
---
Recently somebody at work came to me with a scenario:

"Daniel, at least once a week I have to take screenshots of movies and upload them to a proprietary server. I also have to take these screenshots and make thumbnails that are 150 pixels wide. Do you know of any way to automate this?"

My thoughts screamed "HELL YES I CAN AUTOMATE ALL THE THINGS!" while my more politically correct mouth served up a "Sure, let me look into that for you." Ten minutes later, I had a rudimentary script up that could do in less than a minute what normally would have taken him almost two hours. Let that sink in for a bit. Two hours per week spent on a project. Eight hours a month. 96 hours a year. **2.2 work weeks a year saved with less than 100 lines of bash scripting.** The benefits might not be felt immediately, but two weeks saved is nothing to sneeze at, in my opinion. With a bit more work, I'd automated this process further, allowing him to simply drop files into a folder, cutting me out of the equation completely.

In 1969, a computer no more powerful than a graphing calculator took three men 356,000km into space and plopped them down on the moon. Even more amazing than these men making it to the moon with that technology is the converse: millions of workers manually running processes using computers 100 times more powerful than the Apollo 11 that could easily be automated! The sheer number of man-hours wasted per work week either because nobody has questioned the status quo, or nobody has been properly trained is astounding (and more than a little scary).

If you're reading this and find yourself thinking, "I'm sure *insert job here* that I do could be automated," do it! It's a lot easier than you think. With today's technology, the answers are a Google search away. And if you're scared of **actually** automating yourself out of a job, don't be! Can you imagine how good your resume would look? "I completely automated this job at my previous place of employment, saving untold man-hours and a considerable cost savings."

## The script

For anybody interested in the technical bits of the story above, here's a link to the script I wrote:

[Screenshot and resize script][screenshot-resize]

[screenshot-resize]: https://gist.github.com/dstrunk/7f0e5d2561ae50d1282a

It's written for bash v. 3.2.53, which is a UNIX shell and command language that comes standard on all Macs.

To run, save the gist as something (mine is named `convert.sh`). Follow the instructions at the top of the file, including installing [brew][brew], [ffmpeg][ffmpeg] and [imagemagick][imagemagick] if you haven't already. Then, create a folder, `cd` into said folder, and drop your `convert.sh` file into there.

To run, type `./convert.sh` into your terminal. The script will then wait for you to drop any movie file into the folder. From there, the script will take a screenshot at 00:00:03 timestamp and drop it into the `/screenshots` folder, take a 150px wide screenshot and drop it into `/screenshots/150` folder, then move the movie into the `/completed` folder.

After 24 hours, the script will remove the files so your file system doesn't get too cluttered. This part is accomplished by utilizing bash jobs, which will run a delete script after 24 hours without blocking the rest of the script.

If you run into any problems, look at the logs! The script will output all of the log info from ffmpeg and imagemagick to a .log file.

[brew]: http://brew.sh/
[ffmpeg]: https://www.ffmpeg.org/
[imagemagick]: http://www.imagemagick.org/
