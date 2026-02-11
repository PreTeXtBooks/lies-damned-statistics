var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "release-notes",
  "level": "1",
  "url": "release-notes.html",
  "type": "Preface",
  "number": "",
  "title": "Release Notes",
  "body": " Release Notes   "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface   "
},
{
  "id": "sec-TIPVS",
  "level": "1",
  "url": "sec-TIPVS.html",
  "type": "Section",
  "number": "1.1",
  "title": "Terminology: Individuals\/Population\/Variables\/Samples",
  "body": " Terminology: Individuals\/Population\/Variables\/Samples  Oddly enough, it is often a lack of clarity about who [or what ] you are looking at which makes a lie out of statistics. Here are the terms, then, to keep straight:   individual in a statistical study  population of a statistical study   The units which are the objects of a statistical study are called the individuals in that study, while the collection of all such individuals is called the population of the study.    Note that while the term individuals sounds like it is talking about people, the individuals in a study could be things, even abstract things like events.   Individuals in Election Study  voters   The individuals in a study about a democratic election might be the voters . But if you are going to make an accurate prediction of who will win the election, it is important to be more precise about what exactly is the population of all of those individuals [voters] that you intend to study: is it all eligible voters , all registered voters , the people who actually voted , etc.      Individuals in Coin Flip Study   If you want to study if a coin is fair or not, you would flip it repeatedly. The individuals would then be flips of that coin , and the population might be something like all the flips ever done in the past and all that will ever be done in the future . These individuals are quite abstract, and in fact it is impossible ever to get your hands on all of them (the ones in the future, for example).     Individuals in Homework Study   Suppose we're interested in studying whether doing more homework helps students do better in their studies. So shouldn't the individuals be the students? Well, which students? How about we look only at college students. Which college students? OK, how about students at 4-year colleges and universities in the United States, over the last five years after all, things might be different in other countries and other historical periods.  Wait, a particular student might sometimes do a lot of homework and sometimes do very little. And what exactly does do better in their studies mean? So maybe we should look at each student in each class they take, then we can look at the homework they did for that class and the success they had in it.  Therefore, the individuals in this study would be individual experiences that students in US 4-year colleges and universities had in the last five years , and population of the study would essentially be the collection of all the names on all class rosters of courses in the last five years at all US 4-year colleges and universities.    When doing an actual scientific study, we are usually not interested so much in the individuals themselves, but rather in   variable  variable categorical  variable quantitative   A variable in a statistical study is the answer of a question the researcher is asking about each individual. There are two types:   A categorical variable is one whose values have a finite number of possibilities.    A quantitative variable is one whose values are numbers (so, potentially an infinite number of possibilities).       The variable is something which (as the name says) varies , in the sense that it can have a different value for each individual in the population (although that is not necessary).   Variable in Election Study   In , the variable most likely would be who they voted for , a categorical variable with only possible values Mickey Mouse or Daffy Duck (or whoever the names on the ballot were).     Variable in Coin Flip Study   In , the variable most likely would be what face of the coin was facing up after the flip , a categorical variable with values heads and tails.      Variables in Homework Study   There are several variables we might use in . One might be how many homework problems did the student do in that course . Another could be how many hours total did the student spend doing homework over that whole semester, for that course . Both of those would be quantitative variables.  A categorical variable for the same population would be what letter grade did the student get in the course , which has possible values A , A- , B+ , , D- , F .    In many [most?] interesting studies, the population is too large for it to be practical to go observe the values of some interesting variable. Sometimes it is not just impractical, but actually impossible think of the example we gave of all the flips of the coin, even the ones in the future. So instead, we often work with   sample   A sample is a subset of a population under study.    Often we use the variable to indicate the size of a whole population and the variable for the size of a sample; as we have said, usually .  Later we shall discuss how to pick a good sample, and how much we can learn about a population from looking at the values of a variable of interest only for the individuals in a sample. For the rest of this chapter, however, let's just consider what to do with these sample values.  "
},
{
  "id": "def-individual-population",
  "level": "2",
  "url": "sec-TIPVS.html#def-individual-population",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": " individual in a statistical study  population of a statistical study   The units which are the objects of a statistical study are called the individuals in that study, while the collection of all such individuals is called the population of the study.   "
},
{
  "id": "eg-votersind",
  "level": "2",
  "url": "sec-TIPVS.html#eg-votersind",
  "type": "Example",
  "number": "1.1.2",
  "title": "Individuals in Election Study.",
  "body": " Individuals in Election Study  voters   The individuals in a study about a democratic election might be the voters . But if you are going to make an accurate prediction of who will win the election, it is important to be more precise about what exactly is the population of all of those individuals [voters] that you intend to study: is it all eligible voters , all registered voters , the people who actually voted , etc.    "
},
{
  "id": "eg-flipsind",
  "level": "2",
  "url": "sec-TIPVS.html#eg-flipsind",
  "type": "Example",
  "number": "1.1.3",
  "title": "Individuals in Coin Flip Study.",
  "body": " Individuals in Coin Flip Study   If you want to study if a coin is fair or not, you would flip it repeatedly. The individuals would then be flips of that coin , and the population might be something like all the flips ever done in the past and all that will ever be done in the future . These individuals are quite abstract, and in fact it is impossible ever to get your hands on all of them (the ones in the future, for example).   "
},
{
  "id": "eg-studentstakingtestsind",
  "level": "2",
  "url": "sec-TIPVS.html#eg-studentstakingtestsind",
  "type": "Example",
  "number": "1.1.4",
  "title": "Individuals in Homework Study.",
  "body": " Individuals in Homework Study   Suppose we're interested in studying whether doing more homework helps students do better in their studies. So shouldn't the individuals be the students? Well, which students? How about we look only at college students. Which college students? OK, how about students at 4-year colleges and universities in the United States, over the last five years after all, things might be different in other countries and other historical periods.  Wait, a particular student might sometimes do a lot of homework and sometimes do very little. And what exactly does do better in their studies mean? So maybe we should look at each student in each class they take, then we can look at the homework they did for that class and the success they had in it.  Therefore, the individuals in this study would be individual experiences that students in US 4-year colleges and universities had in the last five years , and population of the study would essentially be the collection of all the names on all class rosters of courses in the last five years at all US 4-year colleges and universities.   "
},
{
  "id": "def-variable",
  "level": "2",
  "url": "sec-TIPVS.html#def-variable",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": " variable  variable categorical  variable quantitative   A variable in a statistical study is the answer of a question the researcher is asking about each individual. There are two types:   A categorical variable is one whose values have a finite number of possibilities.    A quantitative variable is one whose values are numbers (so, potentially an infinite number of possibilities).      "
},
{
  "id": "eg-votersvar",
  "level": "2",
  "url": "sec-TIPVS.html#eg-votersvar",
  "type": "Example",
  "number": "1.1.6",
  "title": "Variable in Election Study.",
  "body": " Variable in Election Study   In , the variable most likely would be who they voted for , a categorical variable with only possible values Mickey Mouse or Daffy Duck (or whoever the names on the ballot were).   "
},
{
  "id": "eg-flipsvar",
  "level": "2",
  "url": "sec-TIPVS.html#eg-flipsvar",
  "type": "Example",
  "number": "1.1.7",
  "title": "Variable in Coin Flip Study.",
  "body": " Variable in Coin Flip Study   In , the variable most likely would be what face of the coin was facing up after the flip , a categorical variable with values heads and tails.    "
},
{
  "id": "eg-studentstakingtestsvar",
  "level": "2",
  "url": "sec-TIPVS.html#eg-studentstakingtestsvar",
  "type": "Example",
  "number": "1.1.8",
  "title": "Variables in Homework Study.",
  "body": " Variables in Homework Study   There are several variables we might use in . One might be how many homework problems did the student do in that course . Another could be how many hours total did the student spend doing homework over that whole semester, for that course . Both of those would be quantitative variables.  A categorical variable for the same population would be what letter grade did the student get in the course , which has possible values A , A- , B+ , , D- , F .   "
},
{
  "id": "def-sample",
  "level": "2",
  "url": "sec-TIPVS.html#def-sample",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": " sample   A sample is a subset of a population under study.   "
},
{
  "id": "sec-VRoDICV",
  "level": "1",
  "url": "sec-VRoDICV.html",
  "type": "Section",
  "number": "1.2",
  "title": "Visual Representation of Data, I: Categorical Variables",
  "body": " Visual Representation of Data, I: Categorical Variables  Suppose we have a population and variable in which we are interested. We get a sample, which could be large or small, and look at the values of our variable for the individuals in that sample. We shall informally refer to this collection of values as a dataset .  In this section, we suppose also that the variable we are looking at is categorical. Then we can summarize the dataset by telling which categorical values did we see for the individuals in the sample, and how often we saw those values.  There are two ways we can make pictures of this information: bar charts and pie charts .   Bar Charts I: Frequency Charts  We can take the values which we saw for individuals in the sample along the -axis of a graph, and over each such label make a box whose height indicates how many individuals had that value the frequency of occurrence of that value.  This is called a bar chart . As with all graphs, you should always label all axes. The -axis will be labeled with some description of the variable in question, the -axis label will always be frequency (or some synonym like count or number of times ).   Frequency Bar Chart for Coin Flips   In , suppose we took a sample consisting of the next 10 flips of our coin. Suppose further that 4 of the flips came up heads write it as H and 6 came up tails, T. Then the corresponding bar chart would show bars for H with height 4 and T with height 6.   [Figure showing frequency bar chart with H at 4 and T at 6 would go here]       Bar Charts II: Relative Frequency Charts  There is a variant of the above kind of bar chart which actually looks nearly the same but changes the labels on the -axis. That is, instead of making the height of each bar be how many times each categorical value occurred, we could make it be what fraction of the sample had that categorical value the relative frequency . This fraction is often displayed as a percentage.   Relative Frequency Bar Chart for Coin Flips   The relative frequency version of the above bar chart in would show bars for H at height 0.4 (or 40%) and T at height 0.6 (or 60%).   [Figure showing relative frequency bar chart would go here]       Bar Charts III: Cautions  Notice that with bar charts (of either frequency or relative frequency) the variable values along the -axis can appear in any order whatsoever . This means that any conclusion you draw from looking at the bar chart must not depend upon that order. For example, it would be foolish to say that the graph in  shows an increasing trend, since it would make just as much sense to put the bars in the other order and then show a decreasing trend both are meaningless.  For relative frequency bar charts, in particular, note that the total of the heights of all the bars must be (or ). If it is more, something is weird; if it is less, some data has been lost.  Finally, it makes sense for both kinds of bar charts for the -axis to run from the logical minimum to maximum. For frequency charts, this means it should go from to (the sample size). For relative frequency charts, it should go from to (or ). Skimping on how much of this appropriate -axis is used is a common trick to lie with statistics.   Misleading Bar Chart with Bad Y-Axis   The coin we looked at in and could well be a fair coin it didn't show exactly half heads and half tails, but it was pretty close. Someone who was trying to claim, deceptively, that the coin was not fair might have shown only a portion of the -axis, making the difference appear much more dramatic.   [Figure showing bar chart with restricted y-axis from 0.3 to 0.6 would go here]   This is actually, in a strictly technical sense, a correct graph. But, looking at it, one might conclude that T seems to occur more than twice as often as H, so the coin is probably not fair until a careful examination of the -axis shows that even though the bar for T is more than twice as high as the bar for H, that is an artifact of how much of the -axis is being shown.    In summary, bar charts actually don't have all that much use in sophisticated statistics, but are extremely common in the popular press (and on web sites and so on).    Pie Charts  Another way to make a picture with categorical data is to use the fractions from a relative frequency bar chart, but not for the heights of bars, instead for the sizes of wedges of a pie.   Pie Chart for Coin Flips   Here's a pie chart with the relative frequency data from . It would show a pie divided into two wedges: one for H taking up 40% of the pie, and one for T taking up 60%.   [Figure showing pie chart would go here]     Pie charts are widely used, but actually they are almost never a good choice. In fact, do an Internet search for the phrase pie charts are bad and there will be many hits. Many of the arguments are quite insightful.  When you see a pie chart, it is either an attempt (misguided, though) by someone to be folksy and friendly, or it is a sign that the author is quite unsophisticated with data visualization, or, worst of all, it might be a sign that the author is trying to use mathematical methods in a deceptive way.  In addition, all of the cautions we mentioned above for bar charts of categorical data apply, mostly in exactly the same way, for pie charts.   "
},
{
  "id": "p-24",
  "level": "2",
  "url": "sec-VRoDICV.html#p-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dataset "
},
{
  "id": "p-27",
  "level": "2",
  "url": "sec-VRoDICV.html#p-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "frequency "
},
{
  "id": "p-28",
  "level": "2",
  "url": "sec-VRoDICV.html#p-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bar chart "
},
{
  "id": "eg-flipsbarchartfreq",
  "level": "2",
  "url": "sec-VRoDICV.html#eg-flipsbarchartfreq",
  "type": "Example",
  "number": "1.2.1",
  "title": "Frequency Bar Chart for Coin Flips.",
  "body": " Frequency Bar Chart for Coin Flips   In , suppose we took a sample consisting of the next 10 flips of our coin. Suppose further that 4 of the flips came up heads write it as H and 6 came up tails, T. Then the corresponding bar chart would show bars for H with height 4 and T with height 6.   [Figure showing frequency bar chart with H at 4 and T at 6 would go here]    "
},
{
  "id": "p-31",
  "level": "2",
  "url": "sec-VRoDICV.html#p-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative frequency "
},
{
  "id": "eg-flipsbarchartrelfreq",
  "level": "2",
  "url": "sec-VRoDICV.html#eg-flipsbarchartrelfreq",
  "type": "Example",
  "number": "1.2.2",
  "title": "Relative Frequency Bar Chart for Coin Flips.",
  "body": " Relative Frequency Bar Chart for Coin Flips   The relative frequency version of the above bar chart in would show bars for H at height 0.4 (or 40%) and T at height 0.6 (or 60%).   [Figure showing relative frequency bar chart would go here]    "
},
{
  "id": "eg-flipsbarchartrelfreqbadyaxis",
  "level": "2",
  "url": "sec-VRoDICV.html#eg-flipsbarchartrelfreqbadyaxis",
  "type": "Example",
  "number": "1.2.3",
  "title": "Misleading Bar Chart with Bad Y-Axis.",
  "body": " Misleading Bar Chart with Bad Y-Axis   The coin we looked at in and could well be a fair coin it didn't show exactly half heads and half tails, but it was pretty close. Someone who was trying to claim, deceptively, that the coin was not fair might have shown only a portion of the -axis, making the difference appear much more dramatic.   [Figure showing bar chart with restricted y-axis from 0.3 to 0.6 would go here]   This is actually, in a strictly technical sense, a correct graph. But, looking at it, one might conclude that T seems to occur more than twice as often as H, so the coin is probably not fair until a careful examination of the -axis shows that even though the bar for T is more than twice as high as the bar for H, that is an artifact of how much of the -axis is being shown.   "
},
{
  "id": "eg-flipspiechart",
  "level": "2",
  "url": "sec-VRoDICV.html#eg-flipspiechart",
  "type": "Example",
  "number": "1.2.4",
  "title": "Pie Chart for Coin Flips.",
  "body": " Pie Chart for Coin Flips   Here's a pie chart with the relative frequency data from . It would show a pie divided into two wedges: one for H taking up 40% of the pie, and one for T taking up 60%.   [Figure showing pie chart would go here]    "
},
{
  "id": "sec-VRoDIIQV",
  "level": "1",
  "url": "sec-VRoDIIQV.html",
  "type": "Section",
  "number": "1.3",
  "title": "Visual Representation of Data, II: Quantitative Variables",
  "body": " Visual Representation of Data, II: Quantitative Variables  Now suppose we have a population and quantitative variable in which we are interested. We get a sample, which could be large or small, and look at the values of our variable for the individuals in that sample. There are two ways we tend to make pictures of datasets like this: stem-and-leaf plots and histograms .   Stem-and-leaf Plots  stem, in stemplot  leaf, in stemplot  stem-and-leaf plot, stemplot  One somewhat old-fashioned way to handle a modest amount of quantitative data produces something between simply a list of all the data values and a graph. It's not a bad technique to know about in case one has to write down a dataset by hand, but very tedious and quite unnecessary, if one uses modern electronic tools instead if the dataset has more than a couple dozen values. The easiest case of this technique is where the data are all whole numbers in the range . In that case, one can take off the tens place of each number call it the stem  and put it on the left side of a vertical bar, and then line up all the ones places each is a leaf  to the right of that stem. The whole thing is called a stem-and-leaf plot or, sometimes, just a stemplot .  It's important not to skip any stems which are in the middle of the dataset, even if there are no corresponding leaves. It is also a good idea to allow repeated leaves, if there are repeated numbers in the dataset, so that the length of the row of leaves will give a good representation of how much data is in that general group of data values.   stem-and-leaf plot, stemplot   Here is a list of the scores of 30 students on a statistics test:   As we said, using the tens place (and the hundreds place as well, for the data value ) as the stem and the ones place as the leaf, we get   [Table showing stem-and-leaf plot of students' scores, Key: would go here]     One nice feature stem-and-leaf plots have is that they contain all of the data values , they do not lose anything (unlike our next visualization method, for example).    [Frequency] Histograms  histogram  bins, in a histogram  classes, in a histogram  The most important visual representation of quantitative data is a histogram . Histograms actually look a lot like a stem-and-leaf plot, except turned on its side and with the row of numbers turned into a vertical bar, like a bar graph. The height of each of these bars would be how many  Another way of saying that is that we would be making bars whose heights were determined by how many scores were in each group of ten. Note there is still a question of into which bar a value right on the edge would count: e.g., does the data value count in the bar to the left of that number, or the bar to the right? It doesn't actually matter which side, but it is important to state which choice is being made.   histogram   Continuing with the score data in Example and putting all data values satisfying in the first bar, values satisfying in the second, values satisfying in the third, etc.  that is, put data values on the edges in the bar to the right we get the figure   [Figure showing scores histogram with binwidth 10 would go here]     Actually, there is no reason that the bars always have to be ten units wide: it is important that they are all the same size and that how they handle the edge cases (whether the left or right bar gets a data value on edge), but they could be any size. We call the successive ranges of the coordinates which get put together for each bar bins or classes , and it is up to the statistician to chose whichever bins where they start and how wide they are shows the data best.  Typically, the smaller the bin size, the more variation (precision) can be seen in the bars but sometimes there is so much variation that the result seems to have a lot of random jumps up and down, like static on the radio. On the other hand, using a large bin size makes the picture smoother but sometimes, it is so smooth that very little information is left. Some of this is shown in the following   histogram   Continuing with the score data in Example and now using the bins with satisfying , then , etc. , we get the histogram with bins of width 2:   [Figure showing scores histogram with binwidth 2 would go here]   If we use the bins with satisfying , then , etc. , we get the histogram with bins of width 5:   [Figure showing scores histogram with binwidth 5 would go here]   If we use the bins with satisfying , then , etc. , we get the histogram with bins of width 20:   [Figure showing scores histogram with binwidth 20 would go here]   Finally, if we use the bins with satisfying , then , and then , we get the histogram with bins of width 50:   [Figure showing scores histogram with binwidth 50 would go here]       [Relative Frequency] Histograms  histogram relative frequency  Just as we could have bar charts with absolute ( ) or relative ( ) frequencies, we can do the same for histograms. Above, in , we made absolute frequency histograms. If, instead, we divide each of the counts used to determine the heights of the bars by the total sample size, we will get fractions or percents  relative frequencies. We should then change the label on the -axis and the tick-marks numbers on the -axis, but otherwise the graph will look exactly the same (as it did with relative frequency bar charts compared with absolute frequency bar chars).   histogram relative frequency   Let's make the relative frequency histogram corresponding to the absolute frequency histogram in Example , based on the data from Example  all we have to do is change the numbers used to make heights of the bars in the graph by dividing them by the sample size, 30, and then also change the -axis label and tick mark numbers.   [Figure showing scores relative frequency histogram with binwidth 10 would go here]       How to Talk About Histograms  distribution  shape histogram  center of a histogram, dataset, or distribution  spread of a histogram, dataset, or distribution  symmetric histogram, dataset, or distribution  skewed histogram, dataset, or distribution  unimodal histogram, dataset, or distribution  multimodal histogram, dataset, or distribution  Histograms of course tell us what the data values are the location along the value of a bar is the value of the variable and how many of them have each particular value the height of the bar tells how many data values are in that bin. This is also given a technical name   distribution   Given a variable defined on a population, or at least on a sample, the distribution of that variable is a list of all the values the variable actually takes on and how many times it takes on these values.    The reason we like the visual version of a distribution, its histogram, is that our visual intuition can then help us answer general, qualitative questions about what those data must be telling us. The first questions we usually want to answer quickly about the data are    What is the shape of the histogram?    Where is its center ?    How much variability [also called spread ] does it show?    When we talk about the general shape of a histogram, we often use the terms   symmetric histogram, dataset, or distribution  skewed histogram, dataset, or distribution  unimodal histogram, dataset, or distribution  multimodal histogram, dataset, or distribution   A histogram is symmetric if the left half is (approximately) the mirror image of the right half.  We say a histogram is skewed left if the tail on the left side is longer than on the right. In other words, left skew is when the left half of the histogram half in the sense that the total of the bars in this left part is half of the size of the dataset extends farther to the left than the right does to the right. Conversely, the histogram is skewed right if the right half extends farther to the right than the left does to the left.  If the shape of the histogram has one significant peak, then we say it is unimodal , while if it has several such, we say it is multimodal .    It is often easy to point to where the center of a distribution looks like it lies, but it is hard to be precise. It is particularly difficult if the histogram is noisy, maybe multimodal. Similarly, looking at a histogram, it is often easy to say it is quite spread out or very concentrated in the center, but it is then hard to go beyond this general sense.  Precision in our discussion of the center and spread of a dataset will only be possible in the next section, when we work with numerical measures of these features.   "
},
{
  "id": "p-48",
  "level": "2",
  "url": "sec-VRoDIIQV.html#p-48",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stem leaf stem-and-leaf plot stemplot "
},
{
  "id": "eg-stemandleafplot",
  "level": "2",
  "url": "sec-VRoDIIQV.html#eg-stemandleafplot",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": " stem-and-leaf plot, stemplot   Here is a list of the scores of 30 students on a statistics test:   As we said, using the tens place (and the hundreds place as well, for the data value ) as the stem and the ones place as the leaf, we get   [Table showing stem-and-leaf plot of students' scores, Key: would go here]    "
},
{
  "id": "p-54",
  "level": "2",
  "url": "sec-VRoDIIQV.html#p-54",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "histogram "
},
{
  "id": "eg-scoreshistbytens",
  "level": "2",
  "url": "sec-VRoDIIQV.html#eg-scoreshistbytens",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": " histogram   Continuing with the score data in Example and putting all data values satisfying in the first bar, values satisfying in the second, values satisfying in the third, etc.  that is, put data values on the edges in the bar to the right we get the figure   [Figure showing scores histogram with binwidth 10 would go here]    "
},
{
  "id": "p-58",
  "level": "2",
  "url": "sec-VRoDIIQV.html#p-58",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bins classes "
},
{
  "id": "eg-scoreshistvariousbins",
  "level": "2",
  "url": "sec-VRoDIIQV.html#eg-scoreshistvariousbins",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": " histogram   Continuing with the score data in Example and now using the bins with satisfying , then , etc. , we get the histogram with bins of width 2:   [Figure showing scores histogram with binwidth 2 would go here]   If we use the bins with satisfying , then , etc. , we get the histogram with bins of width 5:   [Figure showing scores histogram with binwidth 5 would go here]   If we use the bins with satisfying , then , etc. , we get the histogram with bins of width 20:   [Figure showing scores histogram with binwidth 20 would go here]   Finally, if we use the bins with satisfying , then , and then , we get the histogram with bins of width 50:   [Figure showing scores histogram with binwidth 50 would go here]    "
},
{
  "id": "eg-scoresRFhistbytens",
  "level": "2",
  "url": "sec-VRoDIIQV.html#eg-scoresRFhistbytens",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": " histogram relative frequency   Let's make the relative frequency histogram corresponding to the absolute frequency histogram in Example , based on the data from Example  all we have to do is change the numbers used to make heights of the bars in the graph by dividing them by the sample size, 30, and then also change the -axis label and tick mark numbers.   [Figure showing scores relative frequency histogram with binwidth 10 would go here]    "
},
{
  "id": "def-distribution",
  "level": "2",
  "url": "sec-VRoDIIQV.html#def-distribution",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": " distribution   Given a variable defined on a population, or at least on a sample, the distribution of that variable is a list of all the values the variable actually takes on and how many times it takes on these values.   "
},
{
  "id": "def-symmskew",
  "level": "2",
  "url": "sec-VRoDIIQV.html#def-symmskew",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": " symmetric histogram, dataset, or distribution  skewed histogram, dataset, or distribution  unimodal histogram, dataset, or distribution  multimodal histogram, dataset, or distribution   A histogram is symmetric if the left half is (approximately) the mirror image of the right half.  We say a histogram is skewed left if the tail on the left side is longer than on the right. In other words, left skew is when the left half of the histogram half in the sense that the total of the bars in this left part is half of the size of the dataset extends farther to the left than the right does to the right. Conversely, the histogram is skewed right if the right half extends farther to the right than the left does to the left.  If the shape of the histogram has one significant peak, then we say it is unimodal , while if it has several such, we say it is multimodal .   "
},
{
  "id": "sec-NDoDIMotC",
  "level": "1",
  "url": "sec-NDoDIMotC.html",
  "type": "Section",
  "number": "1.4",
  "title": "Numerical Descriptions of Data, I: Measures of the Center",
  "body": " Numerical Descriptions of Data, I: Measures of the Center  Oddly enough, there are several measures of central tendency, as ways to define the middle of a dataset are called. There is different work to be done to calculate each of them, and they have different uses, strengths, and weaknesses.  For this whole section we will assume we have collected numerical values, the values of our quantitative variable quantitative variable variable!quantitative for the sample we were able to study. When we write formulæ with these values, we can't give them variable names that look like , because we don't know where to stop (and what would we do if were more than 26?). Instead, we'll use the variables to represent the data values.  One more very convenient bit of notation, once we have started writing an unknown number ( ) of numbers , is a way of writing their sum:   summation notation,  , summation notation  pig, yellow   If we have numbers which we write , then we use the shorthand summation notation  to represent the sum . Sometimes you will see this written instead . Think of the as a little computer program which with , increases it one step at a time until it gets all the way to , and adds up whatever is to the right. So, for example, would be , and so has the value .       If our dataset were , then would be 5 and the variables would be defined with values , , , , and .  In addition no pun intended , we would have .     Mode  Let's first discuss probably the simplest measure of central tendency, and in fact one which was foreshadowed by terms like unimodal.    mode   A mode of a dataset of numbers is one of the values which occurs at least as often in the dataset as any other value.    It would be nice to say this in a simpler way, something like the mode is the value which occurs the most often in the dataset, but there may not be a single such number.    Continuing with the data from , it is easy to see, looking at the stem-and-leaf plot, that both 73 and 90 are modes.  Note that in some of the histograms we made using these data and different bin widths, the bins containing 73 and 90 were of the same height, while in others they were of different heights. This is an example of how it can be quite hard to see on a histogram where the mode is or where the modes are.      Mean  The next measure of central tendency, and certainly the one heard most often in the press, is simply the average. However, in statistics, this is given a different name.   mean  average!see: {mean}   The mean of a dataset of numbers is given by the formula .  If the data come from a sample, we use the notation , sample mean for the sample mean sample mean, mean!sample .  If is all of the data from an entire population, we use the notation [this is the Greek letter mu, pronounced mew, to rhyme with new. ] for the population mean population mean, mean!population , population mean .      Since we've already computed the sum of the data in to be and there were values in the dataset, the mean is sample mean, mean!sample , sample mean .      Again using the data from , we can calculate the mean sample mean, mean!sample , sample mean .    Notice that the mean in the two examples above was not one of the data values. This is true quite often. What that means is that the phrase the average whatever , as in the average American family has or the average student does , is not talking about any particular family, and we should not expect any particular family or student to have or do that thing. Someone with a statistical education should mentally edit every phrase like that they hear to be instead something like the mean of the variable on the population of all American families is ..., or the mean of the variable on the population of all students is ..., or whatever.    Median  Our third measure of central tendency is not the result of arithmetic, but instead of putting the data values in increasing order.   median   Imagine that we have put the values of a dataset of numbers in increasing (or at least non-decreasing) order, so that . Then if is odd, the median of the dataset is the middle value, , while if is even, the median is the mean of the two middle numbers, .      Working with the data in , we must first put them in order, as , so the median of this dataset is the middle value, .      Now let us find the median of the data from . Fortunately, in that example, we made a stem-and-leaf plot and even put the leaves in order, so that starting at the bottom and going along the rows of leaves and then up to the next row, will give us all the values in order! Since there are 30 values, we count up to the and values, being 76 and 77, and from this we find that the median of the dataset is .      Strengths and Weaknesses of These Measures of Central Tendency  The weakest of the three measures above is the mode mode . Yes, it is nice to know which value happened most often in a dataset (or which values all happened equally often and more often then all other values). But this often does not necessarily tell us much about the over-all structure of the data.   mode   Suppose we had the data with corresponding stem-and-leaf plot  [PLACEHOLDER: Table with stem-and-leaf plot showing stems 2-10 with leaves]  This would have a histogram with bins of width 10 that looks exactly like the one in  so the center of the histogram would seem, visually, still to be around the bar over the 80s but now there is a unique mode of 25.    What this example shows is that a small change in some of the data values, small enough not to change the histogram at all, can change the mode(s) drastically. It also shows that the location of the mode says very little about the data in general or its shape, the mode is based entirely on a possibly accidental coincidence of some values in the dataset, no matter if those values are in the center of the histogram or not.  The mean mean has a similar problem: a small change in the data, in the sense of adding only one new data value, but one which is very far away from the others, can change the mean quite a bit. Here is an example.    Suppose we take the data from but change only one value such as by changing the 100 to a 1000, perhaps by a simple typo of the data entry. Then if we calculate the mean, we get sample mean, mean!sample , sample mean , which is quite different from the mean of original dataset.    A data value which seems to be quite different from all (or the great majority of) the rest is called an outlier outlier This is a very informal definition of an outlier. Below we will have an extremely precise one. What we have just seen is that the mean is very sensitive to outliers sensitive to outliers . This is a serious defect, although otherwise it is easy to compute, to work with, and to prove theorems about.  Finally, the median median is somewhat tedious to compute, because the first step is to put all the data values in order, which can be very time-consuming. But, once that is done, throwing in an outlier tends to move the median only a little bit. Here is an example.    If we do as in and change the data value of 100 in the dataset of to 1000, but leave all of the other data values unchanged, it does not change the median at all since the 1000 is the new largest value, and that does not change the two middle values at all.  If instead we take the data of and simply add another value, 1000, without taking away the 100, that does change the median: there are now an odd number of data values, so the median is the middle one after they are put in order, which is 78. So the median has changed by only half a point, from 77.5 to 78. And this would even be true if the value we were adding to the dataset were 1000000 and not just 1000!    In other words, the median is very insensitive to outliers insensitive to outliers . Since, in practice, it is very easy for datasets to have a few random, bad values (typos, mechanical errors, etc. ), which are often outliers, it is usually smarter to use the median than the mean.  As one final point, note that as we mentioned in , the word average, the unsophisticated version of mean, is often incorrectly used as a modifier of the individuals in some population being studied (as in the average American ... ), rather than as a modifier of the variable in the study ( the average income... ), indicating a fundamental misunderstanding of what the mean means . If you look a little harder at this misunderstanding, though, perhaps it is based on the idea that we are looking for the center, the typical value of the variable.  The mode might seem like a good way it's the most frequently occurring value. But we have seen how that is somewhat flawed.  The mean might also seem like a good way it's the average, literally. But we've also seen problems with the mean.  In fact, the median is probably closest to the intuitive idea of the center of the data. It is, after all, a value with the property that both above and below that value lie half of the data values.  One last example to underline this idea:   mean  median  income distribution  Great Recession   The period of economic difficulty for world markets in the late 2000s and early 2010s is sometimes called the Great Recession . Suppose a politician says that we have come out of that time of troubles, and gives as proof the fact that the average family income has increased from the low value it had during the Great Recession back to the values it had before then, and perhaps is even higher than it was in 2005.  It is possible that in fact people are better off, as the increase in this average mean seems to imply. But it is also possible that while the mean income has gone up, the median income is still low. This would happen if the histogram of incomes recently still has most of the tall bars down where the variable (family income) is low, but has a few, very high outliers. In short, if the super-rich have gotten even super-richer, that will make the mean (average) go up, even if most of the population has experienced stagnant or decreasing wages but the median will tell what is happening to most of the population.  So when a politician uses the evidence of the average (mean) as suggested here, it is possible they are trying to hide from the public the reality of what is happening to the rich and the not-so-rich. It is also possible that this politician is simply poorly educated in statistics and doesn't realize what is going on. You be the judge ... but pay attention so you know what to ask about.    The last thing we need to say about the strengths and weaknesses of our different measures of central tendency is a way to use the weaknesses of the mean and median to our advantage. That is, since the mean is sensitive to outliers sensitive to outliers , and pulled in the direction of those outliers, while the median is not, we can use the difference between the two to tell us which way a histogram is skewed.   Fact: If the mean of a dataset is larger than the median, then histograms of that dataset will be right-skewed right-skewed histogram, dataset, or distribution skewed histogram, dataset, or distribution!right . Similarly, if the mean is less than the median, histograms will be left-skewed left-skewed histogram, dataset, or distribution skewed histogram, dataset, or distribution!left . mean median skewed histogram, dataset, or distribution    "
},
{
  "id": "def-summation",
  "level": "2",
  "url": "sec-NDoDIMotC.html#def-summation",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": " summation notation,  , summation notation  pig, yellow   If we have numbers which we write , then we use the shorthand summation notation  to represent the sum . Sometimes you will see this written instead . Think of the as a little computer program which with , increases it one step at a time until it gets all the way to , and adds up whatever is to the right. So, for example, would be , and so has the value .    "
},
{
  "id": "eg-subscriptssums",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-subscriptssums",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": "  If our dataset were , then would be 5 and the variables would be defined with values , , , , and .  In addition no pun intended , we would have .   "
},
{
  "id": "def-mode",
  "level": "2",
  "url": "sec-NDoDIMotC.html#def-mode",
  "type": "Definition",
  "number": "1.4.3",
  "title": "",
  "body": " mode   A mode of a dataset of numbers is one of the values which occurs at least as often in the dataset as any other value.   "
},
{
  "id": "eg-mode",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-mode",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  Continuing with the data from , it is easy to see, looking at the stem-and-leaf plot, that both 73 and 90 are modes.  Note that in some of the histograms we made using these data and different bin widths, the bins containing 73 and 90 were of the same height, while in others they were of different heights. This is an example of how it can be quite hard to see on a histogram where the mode is or where the modes are.   "
},
{
  "id": "def-mean",
  "level": "2",
  "url": "sec-NDoDIMotC.html#def-mean",
  "type": "Definition",
  "number": "1.4.5",
  "title": "",
  "body": " mean  average!see: {mean}   The mean of a dataset of numbers is given by the formula .  If the data come from a sample, we use the notation , sample mean for the sample mean sample mean, mean!sample .  If is all of the data from an entire population, we use the notation [this is the Greek letter mu, pronounced mew, to rhyme with new. ] for the population mean population mean, mean!population , population mean .   "
},
{
  "id": "eg-mean1",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-mean1",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "  Since we've already computed the sum of the data in to be and there were values in the dataset, the mean is sample mean, mean!sample , sample mean .   "
},
{
  "id": "eg-mean2",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-mean2",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  Again using the data from , we can calculate the mean sample mean, mean!sample , sample mean .   "
},
{
  "id": "def-median",
  "level": "2",
  "url": "sec-NDoDIMotC.html#def-median",
  "type": "Definition",
  "number": "1.4.8",
  "title": "",
  "body": " median   Imagine that we have put the values of a dataset of numbers in increasing (or at least non-decreasing) order, so that . Then if is odd, the median of the dataset is the middle value, , while if is even, the median is the mean of the two middle numbers, .   "
},
{
  "id": "eg-median1",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-median1",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": "  Working with the data in , we must first put them in order, as , so the median of this dataset is the middle value, .   "
},
{
  "id": "eg-median2",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-median2",
  "type": "Example",
  "number": "1.4.10",
  "title": "",
  "body": "  Now let us find the median of the data from . Fortunately, in that example, we made a stem-and-leaf plot and even put the leaves in order, so that starting at the bottom and going along the rows of leaves and then up to the next row, will give us all the values in order! Since there are 30 values, we count up to the and values, being 76 and 77, and from this we find that the median of the dataset is .   "
},
{
  "id": "eg-modeweak",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-modeweak",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": " mode   Suppose we had the data with corresponding stem-and-leaf plot  [PLACEHOLDER: Table with stem-and-leaf plot showing stems 2-10 with leaves]  This would have a histogram with bins of width 10 that looks exactly like the one in  so the center of the histogram would seem, visually, still to be around the bar over the 80s but now there is a unique mode of 25.   "
},
{
  "id": "eg-mean3",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-mean3",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "  Suppose we take the data from but change only one value such as by changing the 100 to a 1000, perhaps by a simple typo of the data entry. Then if we calculate the mean, we get sample mean, mean!sample , sample mean , which is quite different from the mean of original dataset.   "
},
{
  "id": "p-112",
  "level": "2",
  "url": "sec-NDoDIMotC.html#p-112",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the mean is very sensitive to outliers "
},
{
  "id": "eg-median3",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-median3",
  "type": "Example",
  "number": "1.4.13",
  "title": "",
  "body": "  If we do as in and change the data value of 100 in the dataset of to 1000, but leave all of the other data values unchanged, it does not change the median at all since the 1000 is the new largest value, and that does not change the two middle values at all.  If instead we take the data of and simply add another value, 1000, without taking away the 100, that does change the median: there are now an odd number of data values, so the median is the middle one after they are put in order, which is 78. So the median has changed by only half a point, from 77.5 to 78. And this would even be true if the value we were adding to the dataset were 1000000 and not just 1000!   "
},
{
  "id": "p-116",
  "level": "2",
  "url": "sec-NDoDIMotC.html#p-116",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the median is very insensitive to outliers "
},
{
  "id": "eg-meanmedianincome",
  "level": "2",
  "url": "sec-NDoDIMotC.html#eg-meanmedianincome",
  "type": "Example",
  "number": "1.4.14",
  "title": "",
  "body": " mean  median  income distribution  Great Recession   The period of economic difficulty for world markets in the late 2000s and early 2010s is sometimes called the Great Recession . Suppose a politician says that we have come out of that time of troubles, and gives as proof the fact that the average family income has increased from the low value it had during the Great Recession back to the values it had before then, and perhaps is even higher than it was in 2005.  It is possible that in fact people are better off, as the increase in this average mean seems to imply. But it is also possible that while the mean income has gone up, the median income is still low. This would happen if the histogram of incomes recently still has most of the tall bars down where the variable (family income) is low, but has a few, very high outliers. In short, if the super-rich have gotten even super-richer, that will make the mean (average) go up, even if most of the population has experienced stagnant or decreasing wages but the median will tell what is happening to most of the population.  So when a politician uses the evidence of the average (mean) as suggested here, it is possible they are trying to hide from the public the reality of what is happening to the rich and the not-so-rich. It is also possible that this politician is simply poorly educated in statistics and doesn't realize what is going on. You be the judge ... but pay attention so you know what to ask about.   "
},
{
  "id": "p-126",
  "level": "2",
  "url": "sec-NDoDIMotC.html#p-126",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fact: "
},
{
  "id": "sec-NDoDIMoS",
  "level": "1",
  "url": "sec-NDoDIMoS.html",
  "type": "Section",
  "number": "1.5",
  "title": "Numerical Descriptions of Data, II: Measures of Spread",
  "body": " Numerical Descriptions of Data, II: Measures of Spread   Range  The simplest and least useful measure of the spread spread of a histogram, dataset, or distribution of some data is literally how much space on the -axis the histogram takes up. To define this, first a bit of convenient notation:   notation , minimum value in dataset  notation , maximum value in dataset   Suppose is some quantitative dataset. We shall write for the smallest and for the largest values in the dataset.    With this, we can define our first measure of spread spread of a histogram, dataset, or distribution    range   Suppose is some quantitative dataset. The range of this data is the number .      Using again the statistics test scores data from , we can read off from the stem-and-leaf plot that and , so the range is .      Working now with the made-up data in , which was put into increasing order in , we can see that and , so the range is .    The thing to notice here is that since the idea of outliers is that they are outside of the normal behavior of the dataset, if there are any outliers they will definitely be what value gets called or (or both). So the range is supremely sensitive to outliers sensitive to outliers : if there are any outliers, the range will be determined exactly by them, and not by what the typical data is doing.    Quartiles and the  Let's try to find a substitute for the range which is not so sensitive to outliers. We want to see how far apart not the maximum and minimum of the whole dataset are, but instead how far apart are the typical larger values in the dataset and the typical smaller values. How can we measure these typical larger and smaller? One way is to define these in terms of the typical central value of the upper half of the data and the typical value of the lower half of the data. Here is the definition we shall use for that concept:   quartile  upper half data  lower half data   Imagine that we have put the values of a dataset of numbers in increasing (or at least non-decreasing) order, so that . If is odd, call the lower half data lower half data all the values and the upper half data upper half data all the values ; if is even, the lower half data will be the values and the upper half data all the values .  Then the first quartile first quartile quartile , written notation , first quartile , is the median of the lower half data, and the third quartile third quartile quartile , written notation , third quartile , is the median of the upper half data.    Note that the first quartile is halfway through the lower half of the data. In other words, it is a value such that one quarter of the data is smaller. Similarly, the third quartile is halfway through the upper half of the data, so it is a value such that three quarters of the data is small. Hence the names first and third quartiles.   We can build a outlier-insensitive insensitive to outliers measure of spread spread of a histogram, dataset, or distribution out of the quartiles.   notation , inter-quartile range  inter-quartile range,   Given a quantitative dataset, its inter-quartile range or is defined by .      Yet again working with the statistics test scores data from , we can count off the lower and upper half datasets from the stem-and-leaf plot, being respectively and It follows that, for these data, and , so .      Working again with the made-up data in , which was put into increasing order in , we can see that the lower half data is , the upper half is , , , and .      Variance and Standard Deviation  We've seen a crude measure of spread spread of a histogram, dataset, or distribution , like the crude measure mode mode of central tendency. We've also seen a better measure of spread, the notation , inter-quartile range , which is insensitive insensitive to outliers to outliers like the median median (and built out of medians). It seems that, to fill out the parallel triple of measures, there should be a measure of spread which is similar to the mean. Let's try to build one.  Suppose the data is sample data. Then how far a particular data value is from the sample mean sample mean, mean sample notation , sample mean is just . So the mean displacement from the mean, the mean of , should be a good measure of variability, shouldn't it?  Unfortunately, it turns out that the mean of sample mean, mean sample notation , sample mean is always 0. This is because when , is positive, while when , is negative, and it turns out that the positives always exactly cancel the negatives (see if you can prove this algebraically, it's not hard).  We therefore need to make the numbers sample mean, mean sample notation , sample mean positive before taking their mean. One way to do this is to square them all. Then we take something which is almost the mean of these squared numbers to get another measure of spread spread of a histogram, dataset, or distribution or variability:   variance  sample variance,  notation , sample variance  notation , sample standard deviation  standard deviation  sample standard deviation,   Given sample data from a sample of size , the sample variance is defined as  notation , sample mean Out of this, we then define the sample standard deviation   notation , sample mean     Why do we take the square root in that sample standard deviation? The answer is that the measure we build should have the property that if all the numbers are made twice as big, then the measure of spread spread of a histogram, dataset, or distribution should also be twice as big. Or, for example, if we first started working with data measured in feet and then at some point decided to work in inches, the numbers would all be 12 times as big, and it would make sense if the measure of spread were also 12 times as big.  The variance does not have this property: if the data are all doubled, the variance increases by a factor of 4. Or if the data are all multiplied by 12, the variance is multiplied by a factor of 144.  If we take the square root of the variance, though, we get back to the nice property of doubling data doubles the measure of spread spread of a histogram, dataset, or distribution , etc. For this reason, while we have defined the variance on its own and some calculators, computers, and on-line tools will tell the variance whenever you ask them to computer 1-variable statistics, we will in this class only consider the variance a stepping stone on the way to the real measure of spread of data, the standard deviation.  One last thing we should define in this section. For technical reasons that we shall not go into now, the definition of standard deviation is slightly different if we are working with population data and not sample data:   variance  population variance,  notation , population variance  notation , population standard deviation  standard deviation  population standard deviation,   Given data from an entire population of size , the population variance is defined as Out of this, we then define the population standard deviation      [This letter is the lower-case Greek letter sigma, whose upper case you've seen elsewhere.]  Now for some examples. Notice that to calculate these values, we shall always use an electronic tool like a calculator calculator or a spreadsheet spreadsheet LibreOffice Calc and MS Excel that has a built-in variance variance and standard deviation standard deviation program experience shows that it is nearly impossible to get all the calculations entered correctly into a non-statistical calculator, so we shall not even try.    For the statistics test scores data from , entering them into a spreadsheet and using VAR.S VAR.S sample variance in spreadsheets and STDEV.S STDEV.S sample standard deviation in spreadsheets for the sample variance and standard deviation notation , sample standard deviation standard deviation sample standard deviation, sample variance, notation , sample variance and VAR.P VAR.P population variance in spreadsheets and STDEV.P STDEV.P population standard deviation in spreadsheets for population variance and population standard deviation variance population variance, notation , population variance notation , population standard deviation standard deviation population standard deviation, , we get       Similarly, for the data in , we find in the same way that       Strengths and Weaknesses of These Measures of Spread  We have already said that the range range is extremely sensitive to outliers sensitive to outliers . outlier   The , notation , inter-quartile range inter-quartile range, however, is built up out of medians median , used in different ways, so the is insensitive to outliers insensitive to outliers . outlier   The variance variance , both sample and population, is built using a process quite like a mean mean , and in fact also has the mean itself in the defining formula. Since the standard deviation standard deviation in both cases is simply the square root of the variance, it follows that the sample and population variances and standard deviations are all sensitive to outliers . sensitive to outliers outlier   This differing sensitivity and insensitivity to outliers outlier is the main difference between the different measures of spread spread of a histogram, dataset, or distribution that we have discussed in this section.  One other weakness, in a certain sense, of the notation , inter-quartile range is that there are several different definitions in use of the quartiles, based upon whether the median value is included or not when dividing up the data. These are called, for example, QUARTILE.INC QUARTILE.INC quartile computation in spreadsheets and QUARTILE.EXC QUARTILE.EXC quartile computation in spreadsheets on some spreadsheets. It can then be confusing which one to use.    A Formal Definition of Outliers the Rule  So far, we have said that outliers outlier are simply data that are atypical . We need a precise definition that can be carefully checked. What we will use is a formula (well, actually two formulæ) that describe that idea of an outlier being far away from the rest of data .  Actually, since outliers should be far away either in being significantly bigger than the rest of the data or in being significantly smaller, we should take a value on the upper side of the rest of the data, and another on the lower side, as the starting points for this far away . We can't pick the notation , maximum value in dataset and notation , minimum value in dataset as those starting points, since they will be the outliers themselves, as we have noticed. So we will use our earlier idea of a value which is typical for the larger part of the data, the quartile quartile  notation , third quartile , and notation , first quartile for the corresponding lower part of the data.  Now we need to decide how far is far enough away from those quartiles to count as an outlier. If the data already has a lot of variation, then a new data value would have to be quite far in order for us to be sure that it is not out there just because of the variation already in the data. So our measure of far enough should be in terms of a measure of spread spread of a histogram, dataset, or distribution of the data.  Looking at the last section, we see that only the notation , inter-quartile range is a measure of spread spread of a histogram, dataset, or distribution which is insensitive to outliers insensitive to outliers and we definitely don't want to use a measure which is sensitive to the outliers sensitive to outliers , one which would have been affected by the very outliers we are trying to define.  All this goes together in the following   outlier  Rule for Outliers  The Rule for Outliers   Starting with a quantitative dataset whose first and third quartiles quartile are notation , first quartile and and whose inter-quartile range is , a data value is [officially, from now on] called an outlier if or .    Notice this means that is not an outlier if it satisfies .    Let's see if there were any outliers in the test score dataset from . We found the quartiles and in , so from the Rule, a data value will be an outlier if or if Looking at the stemplot in , we conclude that the data values , , and are the outliers in this dataset.      Applying the same method to the data in , using the quartiles and from , the condition for an outlier is or Since none of the data values satisfy either of these conditions, there are no outliers in this dataset.      The Five-Number Summary and Boxplots  We have seen that numerical summaries of quantitative data can be very useful for quickly understanding (some things about) the data. It is therefore convenient for a nice package of several of these   five-number summary   Given a quantitative dataset , the five-number summary Which might write 5N ary for short. of this data is the set of values  notation , minimum value in dataset notation , first quartile median quartile notation , third quartile notation , maximum value in dataset       Why not write down the five-number summary for the same test score data we saw in ? We've already done most of the work, such as calculating the min and max in , the quartiles in , and the median in , so the five-number summary is       And, for completeness, the five number summary for the made-up data in is where we got the min and max from , the median from , and the quartiles from .    As we have seen already several times, it is nice to have a both a numeric and a graphical\/visual version of everything. The graphical equivalent of the five-number summary five-number summary is   boxplot, box-and-whisker plot   Given some quantitative data, a boxplot [sometimes box-and-whisker plot ] is a graphical depiction of the five-number summary, as follows:   an axis is drawn, labelled with the variable of the study  tick marks and numbers are put on the axis, enough to allow the following visual features to be located numerically  a rectangle (the box ) is drawn parallel to the axis, stretching from values notation , first quartile to notation , third quartile on the axis  an additional line is drawn, parallel to the sides of the box, at the axis coordinate of the median median of the data  lines are drawn parallel to the axis from the middle of the sides of the box (at the locations and ) out to the axis coordinates notation , minimum value in dataset and notation , maximum value in dataset , where these whiskers terminate in T s.       A boxplot for the test score data we started using in is easy to make after we found the corresponding five-number summary in :  [PLACEHOLDER: Figure showing boxplot for test score data]    Sometimes it is nice to make a version of the boxplot which is less sensitive to outliers sensitive to outliers outlier . Since the endpoints of the whiskers are the only parts of the boxplot which are sensitive in this way, they are all we have to change:   boxplot, box-and-whisker plot showing outliers   Given some quantitative data, a boxplot showing outliers [sometimes box-and-whisker plot showing outliers ] is minor modification of the regular boxplot, as follows   the whiskers only extend as far as the largest and smallest non-outlier data values  dots are put along the lines of the whiskers at the axis coordinates of any outliers in the dataset       A boxplot showing outliers for the test score data we started using in is only a small modification of the one we just made in   [PLACEHOLDER: Figure showing boxplot with outliers for test score data]     "
},
{
  "id": "def-xminxmax",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-xminxmax",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": " notation , minimum value in dataset  notation , maximum value in dataset   Suppose is some quantitative dataset. We shall write for the smallest and for the largest values in the dataset.   "
},
{
  "id": "def-range",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-range",
  "type": "Definition",
  "number": "1.5.2",
  "title": "",
  "body": " range   Suppose is some quantitative dataset. The range of this data is the number .   "
},
{
  "id": "eg-spread1",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-spread1",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": "  Using again the statistics test scores data from , we can read off from the stem-and-leaf plot that and , so the range is .   "
},
{
  "id": "eg-spread2",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-spread2",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": "  Working now with the made-up data in , which was put into increasing order in , we can see that and , so the range is .   "
},
{
  "id": "p-133",
  "level": "2",
  "url": "sec-NDoDIMoS.html#p-133",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the range is supremely sensitive to outliers "
},
{
  "id": "def-quartile",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-quartile",
  "type": "Definition",
  "number": "1.5.5",
  "title": "",
  "body": " quartile  upper half data  lower half data   Imagine that we have put the values of a dataset of numbers in increasing (or at least non-decreasing) order, so that . If is odd, call the lower half data lower half data all the values and the upper half data upper half data all the values ; if is even, the lower half data will be the values and the upper half data all the values .  Then the first quartile first quartile quartile , written notation , first quartile , is the median of the lower half data, and the third quartile third quartile quartile , written notation , third quartile , is the median of the upper half data.   "
},
{
  "id": "def-IQR",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-IQR",
  "type": "Definition",
  "number": "1.5.6",
  "title": "",
  "body": " notation , inter-quartile range  inter-quartile range,   Given a quantitative dataset, its inter-quartile range or is defined by .   "
},
{
  "id": "eg-iqr1",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-iqr1",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": "  Yet again working with the statistics test scores data from , we can count off the lower and upper half datasets from the stem-and-leaf plot, being respectively and It follows that, for these data, and , so .   "
},
{
  "id": "eg-iqr2",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-iqr2",
  "type": "Example",
  "number": "1.5.8",
  "title": "",
  "body": "  Working again with the made-up data in , which was put into increasing order in , we can see that the lower half data is , the upper half is , , , and .   "
},
{
  "id": "def-varstddevsamp",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-varstddevsamp",
  "type": "Definition",
  "number": "1.5.9",
  "title": "",
  "body": " variance  sample variance,  notation , sample variance  notation , sample standard deviation  standard deviation  sample standard deviation,   Given sample data from a sample of size , the sample variance is defined as  notation , sample mean Out of this, we then define the sample standard deviation   notation , sample mean    "
},
{
  "id": "def-varstddevpop",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-varstddevpop",
  "type": "Definition",
  "number": "1.5.10",
  "title": "",
  "body": " variance  population variance,  notation , population variance  notation , population standard deviation  standard deviation  population standard deviation,   Given data from an entire population of size , the population variance is defined as Out of this, we then define the population standard deviation     "
},
{
  "id": "p-153",
  "level": "2",
  "url": "sec-NDoDIMoS.html#p-153",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "LibreOffice Calc MS Excel "
},
{
  "id": "eg-varstd1",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-varstd1",
  "type": "Example",
  "number": "1.5.11",
  "title": "",
  "body": "  For the statistics test scores data from , entering them into a spreadsheet and using VAR.S VAR.S sample variance in spreadsheets and STDEV.S STDEV.S sample standard deviation in spreadsheets for the sample variance and standard deviation notation , sample standard deviation standard deviation sample standard deviation, sample variance, notation , sample variance and VAR.P VAR.P population variance in spreadsheets and STDEV.P STDEV.P population standard deviation in spreadsheets for population variance and population standard deviation variance population variance, notation , population variance notation , population standard deviation standard deviation population standard deviation, , we get    "
},
{
  "id": "eg-varstd2",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-varstd2",
  "type": "Example",
  "number": "1.5.12",
  "title": "",
  "body": "  Similarly, for the data in , we find in the same way that    "
},
{
  "id": "p-156",
  "level": "2",
  "url": "sec-NDoDIMoS.html#p-156",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the range range is extremely sensitive to outliers "
},
{
  "id": "p-157",
  "level": "2",
  "url": "sec-NDoDIMoS.html#p-157",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the is insensitive to outliers "
},
{
  "id": "p-158",
  "level": "2",
  "url": "sec-NDoDIMoS.html#p-158",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the sample and population variances and standard deviations are all sensitive to outliers "
},
{
  "id": "def-outlier",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-outlier",
  "type": "Definition",
  "number": "1.5.13",
  "title": "The <span class=\"process-math\">\\(1.5\\,IQR\\)<\/span> Rule for Outliers.",
  "body": " outlier  Rule for Outliers  The Rule for Outliers   Starting with a quantitative dataset whose first and third quartiles quartile are notation , first quartile and and whose inter-quartile range is , a data value is [officially, from now on] called an outlier if or .   "
},
{
  "id": "eg-outliers1",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-outliers1",
  "type": "Example",
  "number": "1.5.14",
  "title": "",
  "body": "  Let's see if there were any outliers in the test score dataset from . We found the quartiles and in , so from the Rule, a data value will be an outlier if or if Looking at the stemplot in , we conclude that the data values , , and are the outliers in this dataset.   "
},
{
  "id": "eg-outliers2",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-outliers2",
  "type": "Example",
  "number": "1.5.15",
  "title": "",
  "body": "  Applying the same method to the data in , using the quartiles and from , the condition for an outlier is or Since none of the data values satisfy either of these conditions, there are no outliers in this dataset.   "
},
{
  "id": "def-fivenumbersum",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-fivenumbersum",
  "type": "Definition",
  "number": "1.5.16",
  "title": "",
  "body": " five-number summary   Given a quantitative dataset , the five-number summary Which might write 5N ary for short. of this data is the set of values  notation , minimum value in dataset notation , first quartile median quartile notation , third quartile notation , maximum value in dataset    "
},
{
  "id": "eg-5num1",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-5num1",
  "type": "Example",
  "number": "1.5.17",
  "title": "",
  "body": "  Why not write down the five-number summary for the same test score data we saw in ? We've already done most of the work, such as calculating the min and max in , the quartiles in , and the median in , so the five-number summary is    "
},
{
  "id": "eg-5num2",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-5num2",
  "type": "Example",
  "number": "1.5.18",
  "title": "",
  "body": "  And, for completeness, the five number summary for the made-up data in is where we got the min and max from , the median from , and the quartiles from .   "
},
{
  "id": "def-boxplot",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-boxplot",
  "type": "Definition",
  "number": "1.5.19",
  "title": "",
  "body": " boxplot, box-and-whisker plot   Given some quantitative data, a boxplot [sometimes box-and-whisker plot ] is a graphical depiction of the five-number summary, as follows:   an axis is drawn, labelled with the variable of the study  tick marks and numbers are put on the axis, enough to allow the following visual features to be located numerically  a rectangle (the box ) is drawn parallel to the axis, stretching from values notation , first quartile to notation , third quartile on the axis  an additional line is drawn, parallel to the sides of the box, at the axis coordinate of the median median of the data  lines are drawn parallel to the axis from the middle of the sides of the box (at the locations and ) out to the axis coordinates notation , minimum value in dataset and notation , maximum value in dataset , where these whiskers terminate in T s.    "
},
{
  "id": "eg-boxplot1",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-boxplot1",
  "type": "Example",
  "number": "1.5.20",
  "title": "",
  "body": "  A boxplot for the test score data we started using in is easy to make after we found the corresponding five-number summary in :  [PLACEHOLDER: Figure showing boxplot for test score data]   "
},
{
  "id": "def-boxplotwithOLs",
  "level": "2",
  "url": "sec-NDoDIMoS.html#def-boxplotwithOLs",
  "type": "Definition",
  "number": "1.5.21",
  "title": "",
  "body": " boxplot, box-and-whisker plot showing outliers   Given some quantitative data, a boxplot showing outliers [sometimes box-and-whisker plot showing outliers ] is minor modification of the regular boxplot, as follows   the whiskers only extend as far as the largest and smallest non-outlier data values  dots are put along the lines of the whiskers at the axis coordinates of any outliers in the dataset    "
},
{
  "id": "eg-boxplot2",
  "level": "2",
  "url": "sec-NDoDIMoS.html#eg-boxplot2",
  "type": "Example",
  "number": "1.5.22",
  "title": "",
  "body": "  A boxplot showing outliers for the test score data we started using in is only a small modification of the one we just made in   [PLACEHOLDER: Figure showing boxplot with outliers for test score data]   "
},
{
  "id": "sec-one-variable-exercises",
  "level": "1",
  "url": "sec-one-variable-exercises.html",
  "type": "Section",
  "number": "1.6",
  "title": "Exercises",
  "body": " Exercises   A product development manager at the campus bookstore wants to make sure that the backpacks being sold there are strong enough to carry the heavy books students carry around campus. The manager decides she will collect some data on how heavy are the bags\/packs\/suitcases students are carrying around at the moment, by stopping the next 100 people she meets at the center of campus and measuring.  What are the individuals in this study? What is the population? Is there a sample what is it? What is the variable? What kind of variable is this?    During a blood drive on campus, 300 donated blood. Of these, 136 had blood of type , 120 had blood of type , 32 of type , and the rest of type .  Answer the same questions as in the previous exercise for this new situation.  Now make at least two visual representations of these data.    Go to the Wikipedia page for Heights of Presidents and Presidential Candidates of the United States and look only at the heights of the presidents themselves, in centimeters ( cm ).  Make a histogram with these data using bins of width 5. Explain how you are handling the edge cases in your histogram.    Suppose you go to the supermarket every week for a year and buy a bag of flour, packaged by a major national flour brand, which is labelled as weighing . You take the bag home and weigh it on an extremely accurate scale that measures to the nearest of a gram. After the 52 weeks of the year of flour buying, you make a histogram of the accurate weights of the bags. What do you think that histogram will look like? Will it be symmetric or skewed left or right (which one?), where will its center be, will it show a lot of variation\/spread or only a little? Explain why you think each of the things you say.  What about if you buy a loaf of bread from the local artisanal bakery what would the histogram of the accurate weights of those loaves look like (same questions as for histogram of weights of the bags of flour)?  If you said that those histograms were symmetric, can you think of a measurement you would make in a grocery store or bakery which would be skewed; and if you said the histograms for flour and loaf weights were skewed, can you think of one which would be symmetric? (Explain why, always, of course.) [If you think one of the two above histograms was skewed and one was symmetric (with explanation), you don't need to come up with another one here.]    Twenty sacks of grain weigh a total of . What is the mean mean weight per sack?  Can you determine the median median weight per sack from the given information? If so, explain how. If not, give two examples of datasets with the same total weight be different medians.    For the dataset , which we will call , find the mode(s) mode , mean mean , and median median .  Define by adding to each number in . What are the mode(s) mode , mean mean , and median median of ?  Now define by subtracting from each number in . What are the mode mode (s), mean mean , and median median of ?  Next, define by multiplying every number in by 2. What are the mode mode (s), mean mean , and median median of ?  Looking at your answers to the above calculations, how do you think the mode mode (s), mean mean , and median median of datasets must change when you add, subtract, multiply or divide all the numbers by the same constant? Make a specific conjecture!    There is a very hard mathematics competition in which college students in the US and Canada can participate called the William Lowell Putnam Mathematical Competition . It consists of a six-hour long test with twelve problems, graded 0 to 10 on each problem, so the total score could be anything from 0 to 120.  The median median score last year on the Putnam exam was 0 (as it often is, actually). What does this tell you about the scores of the students who took it? Be as precise as you can. Can you tell what fraction (percentage) of students had a certain score or scores? Can you figure out what the quartiles quartile must be?    Find the range range , , inter-quartile range , and standard deviation standard deviation of the following sample dataset:   Now find the range range , , inter-quartile range , and standard deviation standard deviation of the following sample data:   Next find the range range , , inter-quartile range , and standard deviation standard deviation of the following sample data:   Finally, find the range range , , inter-quartile range , and standard deviation standard deviation of sample data , consisting of 98 0s, one .5, and one 1 (so like except with 0 occurring 98 times instead of 9 time).    What must be true about a dataset if its range range is 0? Give the most interesting example of a dataset with range of 0 and the property you just described that you can think of.  What must be true about a dataset if its , inter-quartile range is 0? Give the most interesting example of a dataset with of 0 and the property you just described that you can think of.  What must be true about a dataset if its standard deviation standard deviation is 0? Give the most interesting example of a dataset with standard deviation of 0 and the property you just described that you can think of.    Here are some boxplots boxplot, box-and-whisker plot of test scores, out of 100, on a standardized test given in five different classes the same test, different classes. For each of these plots, , describe qualitatively (in the sense of §1.4.2) but in as much detail as you can, what must have been the histogram histogram for the data behind this boxplot. Also sketch a possible such histogram, for each case.  [Figure: Boxplot showing test scores for classes A through E - placeholder for converted figure]   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-1",
  "type": "Checkpoint",
  "number": "1.6.1",
  "title": "",
  "body": " A product development manager at the campus bookstore wants to make sure that the backpacks being sold there are strong enough to carry the heavy books students carry around campus. The manager decides she will collect some data on how heavy are the bags\/packs\/suitcases students are carrying around at the moment, by stopping the next 100 people she meets at the center of campus and measuring.  What are the individuals in this study? What is the population? Is there a sample what is it? What is the variable? What kind of variable is this?  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-2",
  "type": "Checkpoint",
  "number": "1.6.2",
  "title": "",
  "body": " During a blood drive on campus, 300 donated blood. Of these, 136 had blood of type , 120 had blood of type , 32 of type , and the rest of type .  Answer the same questions as in the previous exercise for this new situation.  Now make at least two visual representations of these data.  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-3",
  "type": "Checkpoint",
  "number": "1.6.3",
  "title": "",
  "body": " Go to the Wikipedia page for Heights of Presidents and Presidential Candidates of the United States and look only at the heights of the presidents themselves, in centimeters ( cm ).  Make a histogram with these data using bins of width 5. Explain how you are handling the edge cases in your histogram.  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-4",
  "type": "Checkpoint",
  "number": "1.6.4",
  "title": "",
  "body": " Suppose you go to the supermarket every week for a year and buy a bag of flour, packaged by a major national flour brand, which is labelled as weighing . You take the bag home and weigh it on an extremely accurate scale that measures to the nearest of a gram. After the 52 weeks of the year of flour buying, you make a histogram of the accurate weights of the bags. What do you think that histogram will look like? Will it be symmetric or skewed left or right (which one?), where will its center be, will it show a lot of variation\/spread or only a little? Explain why you think each of the things you say.  What about if you buy a loaf of bread from the local artisanal bakery what would the histogram of the accurate weights of those loaves look like (same questions as for histogram of weights of the bags of flour)?  If you said that those histograms were symmetric, can you think of a measurement you would make in a grocery store or bakery which would be skewed; and if you said the histograms for flour and loaf weights were skewed, can you think of one which would be symmetric? (Explain why, always, of course.) [If you think one of the two above histograms was skewed and one was symmetric (with explanation), you don't need to come up with another one here.]  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-5",
  "type": "Checkpoint",
  "number": "1.6.5",
  "title": "",
  "body": " Twenty sacks of grain weigh a total of . What is the mean mean weight per sack?  Can you determine the median median weight per sack from the given information? If so, explain how. If not, give two examples of datasets with the same total weight be different medians.  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-6",
  "type": "Checkpoint",
  "number": "1.6.6",
  "title": "",
  "body": " For the dataset , which we will call , find the mode(s) mode , mean mean , and median median .  Define by adding to each number in . What are the mode(s) mode , mean mean , and median median of ?  Now define by subtracting from each number in . What are the mode mode (s), mean mean , and median median of ?  Next, define by multiplying every number in by 2. What are the mode mode (s), mean mean , and median median of ?  Looking at your answers to the above calculations, how do you think the mode mode (s), mean mean , and median median of datasets must change when you add, subtract, multiply or divide all the numbers by the same constant? Make a specific conjecture!  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-7",
  "type": "Checkpoint",
  "number": "1.6.7",
  "title": "",
  "body": " There is a very hard mathematics competition in which college students in the US and Canada can participate called the William Lowell Putnam Mathematical Competition . It consists of a six-hour long test with twelve problems, graded 0 to 10 on each problem, so the total score could be anything from 0 to 120.  The median median score last year on the Putnam exam was 0 (as it often is, actually). What does this tell you about the scores of the students who took it? Be as precise as you can. Can you tell what fraction (percentage) of students had a certain score or scores? Can you figure out what the quartiles quartile must be?  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-8",
  "type": "Checkpoint",
  "number": "1.6.8",
  "title": "",
  "body": " Find the range range , , inter-quartile range , and standard deviation standard deviation of the following sample dataset:   Now find the range range , , inter-quartile range , and standard deviation standard deviation of the following sample data:   Next find the range range , , inter-quartile range , and standard deviation standard deviation of the following sample data:   Finally, find the range range , , inter-quartile range , and standard deviation standard deviation of sample data , consisting of 98 0s, one .5, and one 1 (so like except with 0 occurring 98 times instead of 9 time).  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-9",
  "type": "Checkpoint",
  "number": "1.6.9",
  "title": "",
  "body": " What must be true about a dataset if its range range is 0? Give the most interesting example of a dataset with range of 0 and the property you just described that you can think of.  What must be true about a dataset if its , inter-quartile range is 0? Give the most interesting example of a dataset with of 0 and the property you just described that you can think of.  What must be true about a dataset if its standard deviation standard deviation is 0? Give the most interesting example of a dataset with standard deviation of 0 and the property you just described that you can think of.  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-one-variable-exercises.html#exercise-10",
  "type": "Checkpoint",
  "number": "1.6.10",
  "title": "",
  "body": " Here are some boxplots boxplot, box-and-whisker plot of test scores, out of 100, on a standardized test given in five different classes the same test, different classes. For each of these plots, , describe qualitatively (in the sense of §1.4.2) but in as much detail as you can, what must have been the histogram histogram for the data behind this boxplot. Also sketch a possible such histogram, for each case.  [Figure: Boxplot showing test scores for classes A through E - placeholder for converted figure]  "
},
{
  "id": "sec-TERoID",
  "level": "1",
  "url": "sec-TERoID.html",
  "type": "Section",
  "number": "2.1",
  "title": "Terminology: Explanatory\/Response or Independent\/Dependent",
  "body": " Terminology: Explanatory\/Response or Independent\/Dependent  All of the discussion so far has been for studies which have a single variable. We may collect the values of this variable for a large population, or at least the largest sample we can afford to examine, and we may display the resulting data in a variety of graphical ways, and summarize it in a variety of numerical ways. But in the end all this work can only show a single characteristic of the individuals. If, instead, we want to study a relationship , we need to collect two (at least) variables and develop methods of descriptive statistics which show the relationships between the values of these variables.  Relationships in data require at least two variables. While more complex relationships can involve more, in this chapter we will start the project of understanding bivariate data bivariate data , data where we make two observations for each individual, where we have exactly two variables.  If there is a relationship between the two variables we are studying, the most that we could hope for would be that that relationship is due to the fact that one of the variables causes the other. In this situation, we have special names for these variables    In a situation with bivariate data, if one variable can take on any value without (significant) constraint it is called the independent variable independent variable variable independent , while the second variable, whose value is (at least partially) controlled by the first, is called the dependent variable dependent variable variable dependent .  Since the value of the dependent variable depends upon the value of the independent variable, we could also say that it is explained by the independent variable. Therefore the independent variable is also called the explanatory variable explanatory variable variable explanatory and the dependent variable is then called the response variable response variable variable response   Whenever we have bivariate data and we have made a choice of which variable will be the independent and which the dependent, we write for the independent and for the dependent variable.      Suppose we have a large warehouse of many different boxes of products ready to ship to clients. Perhaps we have packed all the products in boxes which are perfect cubes, because they are stronger and it is easier to stack them efficiently. We could do a study where   the individuals would be the boxes of product;  the population would be all the boxes in our warehouse;  the independent variable would be, for a particular box, the length of its side in cm ;  the dependent variable would be, for a particular box, the cost to the customer of buying that item, in US dollars.   We might think that the size determines the cost, at least approximately, because the larger boxes contain larger products into which went more raw materials and more labor, so the items would be more expensive. So, at least roughly, the size may be anything, it is a free or independent choice, while the cost is (approximately) determined by the size, so the cost is dependent . Otherwise said, the size explains and the cost is the response . Hence the choice of those variables.      Suppose we have exactly the same scenario as above, but now we want to make the different choice where   the dependent variable would be, for a particular box, the volume of that box.     There is one quite important difference between the two examples above: in one case (the cost), knowing the length of the side of a box gives us a hint about how much it costs (bigger boxes cost more, smaller boxes cost less) but this knowledge is imperfect (sometimes a big box is cheap, sometimes a small box is expensive); while in the other case (the volume), knowing the length of the side of the box perfectly tells us the volume. In fact, there is a simple geometric formula that the volume of a cube of side length is given by .  This motivates a last preliminary definition   deterministic   We say that the relationship between two variables is deterministic if knowing the value of one variable completely determines the value of the other. If, instead, knowing one value does not completely determine the other, we say the variables have a non-deterministic relationship . non-deterministic     "
},
{
  "id": "def-explanatoryresponsevars",
  "level": "2",
  "url": "sec-TERoID.html#def-explanatoryresponsevars",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  In a situation with bivariate data, if one variable can take on any value without (significant) constraint it is called the independent variable independent variable variable independent , while the second variable, whose value is (at least partially) controlled by the first, is called the dependent variable dependent variable variable dependent .  Since the value of the dependent variable depends upon the value of the independent variable, we could also say that it is explained by the independent variable. Therefore the independent variable is also called the explanatory variable explanatory variable variable explanatory and the dependent variable is then called the response variable response variable variable response   Whenever we have bivariate data and we have made a choice of which variable will be the independent and which the dependent, we write for the independent and for the dependent variable.   "
},
{
  "id": "eg-depindepvars1",
  "level": "2",
  "url": "sec-TERoID.html#eg-depindepvars1",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  Suppose we have a large warehouse of many different boxes of products ready to ship to clients. Perhaps we have packed all the products in boxes which are perfect cubes, because they are stronger and it is easier to stack them efficiently. We could do a study where   the individuals would be the boxes of product;  the population would be all the boxes in our warehouse;  the independent variable would be, for a particular box, the length of its side in cm ;  the dependent variable would be, for a particular box, the cost to the customer of buying that item, in US dollars.   We might think that the size determines the cost, at least approximately, because the larger boxes contain larger products into which went more raw materials and more labor, so the items would be more expensive. So, at least roughly, the size may be anything, it is a free or independent choice, while the cost is (approximately) determined by the size, so the cost is dependent . Otherwise said, the size explains and the cost is the response . Hence the choice of those variables.   "
},
{
  "id": "eg-depindepvars3",
  "level": "2",
  "url": "sec-TERoID.html#eg-depindepvars3",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  Suppose we have exactly the same scenario as above, but now we want to make the different choice where   the dependent variable would be, for a particular box, the volume of that box.    "
},
{
  "id": "def-deterministic",
  "level": "2",
  "url": "sec-TERoID.html#def-deterministic",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": " deterministic   We say that the relationship between two variables is deterministic if knowing the value of one variable completely determines the value of the other. If, instead, knowing one value does not completely determine the other, we say the variables have a non-deterministic relationship . non-deterministic    "
},
{
  "id": "sec-scatterplots",
  "level": "1",
  "url": "sec-scatterplots.html",
  "type": "Section",
  "number": "2.2",
  "title": "Scatterplots",
  "body": " Scatterplots  When we have bivariate data, the first thing we should always do is draw a graph of this data, to get some feeling about what the data is showing us and what statistical methods it makes sense to try to use. The way to do this is as follows   scatterplot   Given bivariate quantitative data, we make the scatterplot of this data as follows: Draw an - and a -axis, and label them with descriptions of the independent and dependent variables, respectively. Then, for each individual in the dataset, put a dot on the graph at location , if is the value of that individual's independent variable and the value of its dependent variable.    After making a scatterplot, we usually describe it qualitatively in three respects:    If the cloud of data points in a scatterplot generally lies near some curve, we say that the scatterplot has [approximately] that shape shape scatterplot .  A common shape we tend to find in scatterplots is that it is linear linear association   If there is no visible shape, we say the scatterplot is amorphous amorphous, for scatterplots or associations , or has no clear shape .      When a scatterplot has some visible shape so that we do not describe it as amorphous how close the cloud of data points is to that curve is called the strength strength of an association of that association. In this context, a strong strong association [linear, e.g., ] association means that the dots are close to the named curve [line, e.g., ], while a weak weak association association means that the points do not lie particularly close to any of the named curves [line, e.g., ].      In case a scatterplot has a fairly strong linear association, the direction direction of a linear association of the association described whether the line is increasing or decreasing. We say the association is positive positive linear association if the line is increasing and negative negative linear association if it is decreasing.    [Note that the words positive and negative here can be thought of as describing the slope slope of a line of the line which we are saying is the underlying relationship in the scatterplot.]  "
},
{
  "id": "def-scatterplot",
  "level": "2",
  "url": "sec-scatterplots.html#def-scatterplot",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": " scatterplot   Given bivariate quantitative data, we make the scatterplot of this data as follows: Draw an - and a -axis, and label them with descriptions of the independent and dependent variables, respectively. Then, for each individual in the dataset, put a dot on the graph at location , if is the value of that individual's independent variable and the value of its dependent variable.   "
},
{
  "id": "def-scattershape",
  "level": "2",
  "url": "sec-scatterplots.html#def-scattershape",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "  If the cloud of data points in a scatterplot generally lies near some curve, we say that the scatterplot has [approximately] that shape shape scatterplot .  A common shape we tend to find in scatterplots is that it is linear linear association   If there is no visible shape, we say the scatterplot is amorphous amorphous, for scatterplots or associations , or has no clear shape .   "
},
{
  "id": "def-scatterstrength",
  "level": "2",
  "url": "sec-scatterplots.html#def-scatterstrength",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": "  When a scatterplot has some visible shape so that we do not describe it as amorphous how close the cloud of data points is to that curve is called the strength strength of an association of that association. In this context, a strong strong association [linear, e.g., ] association means that the dots are close to the named curve [line, e.g., ], while a weak weak association association means that the points do not lie particularly close to any of the named curves [line, e.g., ].   "
},
{
  "id": "def-scatterdirection",
  "level": "2",
  "url": "sec-scatterplots.html#def-scatterdirection",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  In case a scatterplot has a fairly strong linear association, the direction direction of a linear association of the association described whether the line is increasing or decreasing. We say the association is positive positive linear association if the line is increasing and negative negative linear association if it is decreasing.   "
},
{
  "id": "sec-correlation",
  "level": "1",
  "url": "sec-correlation.html",
  "type": "Section",
  "number": "2.3",
  "title": "Correlation",
  "body": " Correlation  As before (in §§ and ), when we moved from describing histograms with words (like symmetric ) to describing them with numbers (like the mean ), we now will build a numeric measure of the strength and direction of a linear association in a scatterplot.   correlation coefficient,  r, correlation coefficient   Given bivariate quantitative data the [Pearson] correlation coefficient of this dataset is   where and are the standard deviations of the and , respectively, datasets by themselves.     Fact  For any bivariate quantitative dataset with correlation coefficient , we have   is always true;  if is near  meaning that is near  then the linear association between and is strong  if is near  meaning that is positive or negative, but near  then the linear association between and is weak  if then the linear association between and is positive, while if then the linear association between and is negative  is the same no matter what units are used for the variables and  meaning that if we change the units in either variable, will not change  is the same no matter which variable is being used as the explanatory and which as the response variable meaning that if we switch the roles of the and the in our dataset, will not change.    It is also nice to have some examples of correlation coefficients, such as  [Figure: Scatterplot range showing various correlation coefficients - placeholder for converted figure]  Many electronic tools which compute the correlation coefficient of a dataset also report its square, . The reason is explained in the following   Fact  If is the correlation coefficient between two variables and in some quantitative dataset, then its square is the fraction (often described as a percentage) of the variation of which is associated with variation in .     If the square of the correlation coefficient between the independent variable how many hours a week a student studies statistics and the dependent variable how many points the student gets on the statistics final exam is , then 64% of the variation in scores for that class is cause by variation in how much the students study. The remaining 36% of the variation in scores is due to other random factors like whether a student was coming down with a cold on the day of the final, or happened to sleep poorly the night before the final because of neighbors having a party, or some other issues different just from studying time.    "
},
{
  "id": "def-corrcoeff",
  "level": "2",
  "url": "sec-correlation.html#def-corrcoeff",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": " correlation coefficient,  r, correlation coefficient   Given bivariate quantitative data the [Pearson] correlation coefficient of this dataset is   where and are the standard deviations of the and , respectively, datasets by themselves.   "
},
{
  "id": "eg-rsquared",
  "level": "2",
  "url": "sec-correlation.html#eg-rsquared",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  If the square of the correlation coefficient between the independent variable how many hours a week a student studies statistics and the dependent variable how many points the student gets on the statistics final exam is , then 64% of the variation in scores for that class is cause by variation in how much the students study. The remaining 36% of the variation in scores is due to other random factors like whether a student was coming down with a cold on the day of the final, or happened to sleep poorly the night before the final because of neighbors having a party, or some other issues different just from studying time.   "
},
{
  "id": "sec-bivariate-exercises",
  "level": "1",
  "url": "sec-bivariate-exercises.html",
  "type": "Section",
  "number": "2.4",
  "title": "Exercises",
  "body": " Exercises   Suppose you pick 50 random adults across the United States in January 2017 and measure how tall they are. For each of them, you also get accurate information about how tall their (biological) parents are. Now, using as your individuals these 50 adults and as the two variables their heights and the average of their parents' heights, make a sketch of what you think the resulting scatterplot would look like. Explain why you made the choice you did of one variable to be the explanatory and the other the response variable. Tell what are the shape, strength, and direction you see in this scatterplot, if it shows a deterministic or non-deterministic association, and why you think those conclusions would be true if you were to do this exercise with real data.  Is there any time or place other than right now in the United States where you think the data you would collect as above would result in a scatterplot that would look fairly different in some significant way? Explain!    It actually turns out that it is not true that the more a person works, the more they produce at least not always. Data on workers in a wide variety of industries show that working more hours produces more of that business's product for a while, but then after too many hours of work, keeping on working makes for almost no additional production.  Describe how you might collect data to investigate this relationship, by telling what individuals, population, sample, and variables you would use. Then, assuming the truth of the above statement about what other research in this area has found, make an example of a scatterplot that you think might result from your suggested data collection.    Make a scatterplot of the dataset consisting of the following pairs of measurements:   You can do this quite easily by hand (there are only nine points!). Feel free to use an electronic device to make the plot for you, if you have one you know how to use, but copy the resulting picture into the homework you hand in, either by hand or cut-and-paste into an electronic version.  Describe the scatterplot, telling what are the shape, strength, and direction. What do you think would be the correlation coefficient of this dataset? As always, explain all of your reasoning!   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec-bivariate-exercises.html#exercise-11",
  "type": "Checkpoint",
  "number": "2.4.1",
  "title": "",
  "body": " Suppose you pick 50 random adults across the United States in January 2017 and measure how tall they are. For each of them, you also get accurate information about how tall their (biological) parents are. Now, using as your individuals these 50 adults and as the two variables their heights and the average of their parents' heights, make a sketch of what you think the resulting scatterplot would look like. Explain why you made the choice you did of one variable to be the explanatory and the other the response variable. Tell what are the shape, strength, and direction you see in this scatterplot, if it shows a deterministic or non-deterministic association, and why you think those conclusions would be true if you were to do this exercise with real data.  Is there any time or place other than right now in the United States where you think the data you would collect as above would result in a scatterplot that would look fairly different in some significant way? Explain!  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec-bivariate-exercises.html#exercise-12",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "",
  "body": " It actually turns out that it is not true that the more a person works, the more they produce at least not always. Data on workers in a wide variety of industries show that working more hours produces more of that business's product for a while, but then after too many hours of work, keeping on working makes for almost no additional production.  Describe how you might collect data to investigate this relationship, by telling what individuals, population, sample, and variables you would use. Then, assuming the truth of the above statement about what other research in this area has found, make an example of a scatterplot that you think might result from your suggested data collection.  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec-bivariate-exercises.html#exercise-13",
  "type": "Checkpoint",
  "number": "2.4.3",
  "title": "",
  "body": " Make a scatterplot of the dataset consisting of the following pairs of measurements:   You can do this quite easily by hand (there are only nine points!). Feel free to use an electronic device to make the plot for you, if you have one you know how to use, but copy the resulting picture into the homework you hand in, either by hand or cut-and-paste into an electronic version.  Describe the scatterplot, telling what are the shape, strength, and direction. What do you think would be the correlation coefficient of this dataset? As always, explain all of your reasoning!  "
},
{
  "id": "sec-TLSRL",
  "level": "1",
  "url": "sec-TLSRL.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Least Squares Regression Line",
  "body": " The Least Squares Regression Line  Suppose we have some bivariate quantitative data for which the correlation coefficient indicates some linear association. It is natural to want to write down explicitly the equation of the best line through the data the question is what is this line. The most common meaning given to best in this search for the line is the line whose total square error is the smallest possible. We make this notion precise in two steps   residual, for data values and LSRLs   Given a bivariate quantitative dataset and a candidate line passing through this dataset, a residual is the difference in -coordinates of an actual data point and the line's value at the same -coordinate. That is, if the -coordinate of the line when is , then the residual is the measure of error given by .    Note we use the convention here and elsewhere of writing , values on an approximating line for the -coordinate on an approximating line, while the plain variable is left for actual data values, like .  Here is an example of what residuals look like  [Figure: residual.eps - placeholder for residuals illustration]  Now we are in the position to state the   least squares regression line, LSRL  LSRL, least squares regression line   Given a bivariate quantitative dataset the least square regression line , almost always abbreviated to LSRL , is the line for which the sum of the squares of the residuals is the smallest possible.     Fact  If a bivariate quantitative dataset has LSRL given by , then    The slope of the LSRL is given by , where is the correlation coefficient of the dataset.    The LSRL passes through the point sample mean mean sample , sample mean .    It follows that the -intercept of the LSRL is given by sample mean mean sample , sample mean .     It is possible to find the (coefficients of the) LSRL using the above information, but it is often more convenient to use a calculator calculator or other electronic tool. Such tools also make it very easy to graph the LSRL right on top of the scatterplot although it is often fairly easy to sketch what the LSRL will likely look like by just making a good guess, using visual intuition, if the linear association is strong (as will be indicated by the correlation coefficient).    Here is some data where the individuals are 23 students in a statistics class, the independent variable is the students' total score on their homeworks, while the dependent variable is their final total course points, both out of 100.   Here is the resulting scatterplot, made with LibreOffice Calc LibreOffice Calc Calc LibreOffice (a free equivalent of Microsoft Excel Microsoft Excel MS Excel Excel Microsoft )  [Figure: scatter1.eps - placeholder for scatterplot]  It seems pretty clear that there is quite a strong linear association between these two variables, as is born out by the correlation coefficient, (computed with LibreOffice Calc 's CORREL CORREL, correlation coefficient in LibreOffice Calc and MS Excel ). Using then STDEV.S STDEV.S, sample standard deviation in spreadsheets and AVERAGE AVERAGE, sample mean in spreadsheets , we find that the coefficients of the LSRL for this data, are   We can also use LibreOffice Calc LibreOffice Calc Calc LibreOffice 's Insert Trend Line Insert Trend Line, display LSRL in spreadsheet scatterplots , with Show Equation Show Equation, display LSRL equation in spreadsheets , to get all this done automatically. Note that when LibreOffice Calc writes the equation of the LSRL, it uses in place of , as we would.  [Figure: scatter2.eps - placeholder for scatterplot with LSRL]    "
},
{
  "id": "def-residual",
  "level": "2",
  "url": "sec-TLSRL.html#def-residual",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": " residual, for data values and LSRLs   Given a bivariate quantitative dataset and a candidate line passing through this dataset, a residual is the difference in -coordinates of an actual data point and the line's value at the same -coordinate. That is, if the -coordinate of the line when is , then the residual is the measure of error given by .   "
},
{
  "id": "def-LSRL",
  "level": "2",
  "url": "sec-TLSRL.html#def-LSRL",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": " least squares regression line, LSRL  LSRL, least squares regression line   Given a bivariate quantitative dataset the least square regression line , almost always abbreviated to LSRL , is the line for which the sum of the squares of the residuals is the smallest possible.   "
},
{
  "id": "eg-LSRL",
  "level": "2",
  "url": "sec-TLSRL.html#eg-LSRL",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Here is some data where the individuals are 23 students in a statistics class, the independent variable is the students' total score on their homeworks, while the dependent variable is their final total course points, both out of 100.   Here is the resulting scatterplot, made with LibreOffice Calc LibreOffice Calc Calc LibreOffice (a free equivalent of Microsoft Excel Microsoft Excel MS Excel Excel Microsoft )  [Figure: scatter1.eps - placeholder for scatterplot]  It seems pretty clear that there is quite a strong linear association between these two variables, as is born out by the correlation coefficient, (computed with LibreOffice Calc 's CORREL CORREL, correlation coefficient in LibreOffice Calc and MS Excel ). Using then STDEV.S STDEV.S, sample standard deviation in spreadsheets and AVERAGE AVERAGE, sample mean in spreadsheets , we find that the coefficients of the LSRL for this data, are   We can also use LibreOffice Calc LibreOffice Calc Calc LibreOffice 's Insert Trend Line Insert Trend Line, display LSRL in spreadsheet scatterplots , with Show Equation Show Equation, display LSRL equation in spreadsheets , to get all this done automatically. Note that when LibreOffice Calc writes the equation of the LSRL, it uses in place of , as we would.  [Figure: scatter2.eps - placeholder for scatterplot with LSRL]   "
},
{
  "id": "sec-AaIoLSRLs",
  "level": "1",
  "url": "sec-AaIoLSRLs.html",
  "type": "Section",
  "number": "3.2",
  "title": "Applications and Interpretations of LSRLs",
  "body": " Applications and Interpretations of LSRLs  Suppose that we have a bivariate quantitative dataset and we have computed its correlation coefficient and (the coefficients of) its LSRL . What is this information good for?  The main use of the LSRL is described in the following   interpolation   Given a bivariate quantitative dataset and associated LSRL with equation , the process of guessing that the value of the dependent variable in this relationship to have the value , for any value for the independent variable which satisfies , is called interpolation .    The idea of interpolation is that we think the LSRL describes as well as possible the relationship between the independent and dependent variables, so that if we have a new value, we'll use the LSRL equation to predict what would be our best guess of what would be the corresponding . Note we might have a new value of because we simply lost part of our dataset and are trying to fill it in as best we can. Another reason might be that a new individual came along whose value of the independent variable, , was typical of the rest of the dataset so the the very least  and we want to guess what will be the value of the dependent variable for this individual before we measure it. (Or maybe we cannot measure it for some reason.)  A common (but naive) alternate approach to interpolation for a value as above might be to find two values and in the dataset which were as close to as possible, and on either side of it (so ), and simply to guess that the -value for would be the average of and . This is not a terrible idea, but it is not as effective as using the LSRL as described above, since we use the entire dataset when we build the coefficients of the LSRL. So the LSRL will give, by the process of interpolation, the best guess for what should be that missing -value based on everything we know, while the average of and method only pays attention to those two nearest data points and thus may give a very bad guess for the corresponding -value if those two points are not perfectly typical, if they have any randomness, any variation in their -values which is not due to the variation of the .  It is thus always best to use interpolation as described above.    Working with the statistics students' homework and total course points data from Example , suppose the gradebook of the course instructor was somewhat corrupted and the instructor lost the final course points of the student Janet. If Janet's homework points of 77 were not in the corrupted part of the gradebook, the instructor might use interpolation to guess what Janet's total course point probably were. To do this, the instructor would have plugged in into the equation of the LSRL, to get the estimated total course points of .    Another important use of the (coefficients of the) LSRL is to use the underlying meanings of the slope and -intercept. For this, recall that in the equation , the slope tells us how much the line goes up (or down, if the slope is negative) for each increase of the by one unit, while the -intercept tells us what would be the value where the line crosses the -axis, so when the has the value 0. In each particular situation that we have bivariate quantitative data and compute an LSRL, we can then use these interpretations to make statements about the relationship between the independent and dependent variables.    Look one more time at the data on students' homework and total course points in a statistics class from Example , and the the LSRL computed there. We said that the slope of the LSRL was and the -intercept was . In context, what this means, is that On average, each additional point of homework corresponded to an increase of total course points. We may hope that this is actually a causal relationship, that the extra work a student does to earn that additional point of homework score helps the student learn more statistics and therefore get more total course points. But the mathematics here does not require that causation, it merely tells us the increase in is associated with that much increase in .  Likewise, we can also conclude from the LSRL that In general, a student who did no homework at all would earn about total course points. Again, we cannot conclude that doing no homework causes that terrible final course point total, only that there is an association.    "
},
{
  "id": "def-interpolation",
  "level": "2",
  "url": "sec-AaIoLSRLs.html#def-interpolation",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": " interpolation   Given a bivariate quantitative dataset and associated LSRL with equation , the process of guessing that the value of the dependent variable in this relationship to have the value , for any value for the independent variable which satisfies , is called interpolation .   "
},
{
  "id": "eg-interpolation",
  "level": "2",
  "url": "sec-AaIoLSRLs.html#eg-interpolation",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Working with the statistics students' homework and total course points data from Example , suppose the gradebook of the course instructor was somewhat corrupted and the instructor lost the final course points of the student Janet. If Janet's homework points of 77 were not in the corrupted part of the gradebook, the instructor might use interpolation to guess what Janet's total course point probably were. To do this, the instructor would have plugged in into the equation of the LSRL, to get the estimated total course points of .   "
},
{
  "id": "eg-LSRLinterpretation",
  "level": "2",
  "url": "sec-AaIoLSRLs.html#eg-LSRLinterpretation",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Look one more time at the data on students' homework and total course points in a statistics class from Example , and the the LSRL computed there. We said that the slope of the LSRL was and the -intercept was . In context, what this means, is that On average, each additional point of homework corresponded to an increase of total course points. We may hope that this is actually a causal relationship, that the extra work a student does to earn that additional point of homework score helps the student learn more statistics and therefore get more total course points. But the mathematics here does not require that causation, it merely tells us the increase in is associated with that much increase in .  Likewise, we can also conclude from the LSRL that In general, a student who did no homework at all would earn about total course points. Again, we cannot conclude that doing no homework causes that terrible final course point total, only that there is an association.   "
},
{
  "id": "sec-Cs",
  "level": "1",
  "url": "sec-Cs.html",
  "type": "Section",
  "number": "3.3",
  "title": "Cautions",
  "body": " Cautions   Sensitivity to Outliers  The correlation coefficient and the (coefficients of the) LSRL are built out of means and standard deviations and therefore the following fact is completely unsurprising   Fact  The correlation coefficient and the (coefficients of the) LSRL are very sensitive to outliers sensitive to outliers .   What perhaps is surprising here is that the outliers for bivariate data are a little different from those for 1-variable data.   outlier bivariate   An outlier for a bivariate quantitative dataset is one which is far away from the curve which has been identified as underlying the shape of the scatterplot of that data. In particular, a point can be a bivariate outlier even if both is not an outlier for the independent variable data considered alone and is not an outlier for the dependent variable data alone.      Suppose we add one more point to the dataset in Example . Neither the - nor -coordinates of this point are outliers with respect to their respective single-coordinate datasets, but it is nevertheless clearly a bivariate outlier, as can be seen in the new scatterplot  [Figure: scatter3.eps - placeholder for scatterplot with outlier]  In fact recomputing the correlation coefficient and LSRL, we find quite a change from what we found before, in Example :   and   all because of one additional point!      Causation  The attentive reader will have noticed that we started our discussion of bivariate data by saying we hoped to study when one thing causes another. However, what we've actually done instead is find correlation between variables, which is quite a different thing.  Now philosophers have discussed what exactly causation is for millennia, so certainly it is a subtle issue that we will not resolve here. In fact, careful statisticians usually dodge the complexities by talking about relationships , association , and, of course, the correlation coefficient , being careful always not to commit to causation causation  at least based only on an analysis of the statistical data.  As just one example, where we spoke about the meaning of the square of the correlation coefficient (we called it ), we were careful to say that measures the variation of the dependent variable which is associated with the variation of the independent variable. A more reckless description would have been to say that one caused the other but don't fall into that trap!  This would be a bad idea because (among other reasons) the correlation coefficient is symmetric in the choice of explanatory and response variables (meaning is the same no matter which is chosen for which role), while any reasonable notion of causation is asymmetric. E.g., while the correlation is exactly the same very large value with either variable being and which , most people would say that smoking causes cancer and not the other way!  We do need to make one caution about this caution, however. If there is a causal relationship between two variables that are being studied carefully, then there will be correlation. So, to quote the great data scientist Edward Tufte Tufte, Edward ,    Correlation is not causation but it sure is a hint. correlation is not causation but it sure is a hint    The first part of this quote (up to the but ) is much more famous and, as a very first step, is a good slogan to live by. Those with a bit more statistical sophistication might instead learn this version, though. A more sophisticated-sounding version, again due to Tufte, is    Empirically observed covariation is a necessary but not sufficient condition for causality.      Extrapolation  We have said that visual intuition often allows humans to sketch fairly good approximations of the LSRL on a scatterplot, so long as the correlation coefficient tells us there is a strong linear association. If the diligent reader did that with the first scatterplot in Example , probably the resulting line looked much like the line which LibreOffice Calc LibreOffice Calc Calc LibreOffice produced except humans usually sketch their line all the way to the left and right edges of the graphics box. Automatic tools like LibreOffice Calc do not do that, for a reason.   extrapolation   Given a bivariate quantitative dataset and associated LSRL with equation , the process of guessing that the value of the dependent variable in this relationship to have the value , for any value for the independent variable which does not satisfy  [so, instead, either or ], is called extrapolation .    Extrapolation is considered a bad, or at least risky, practice. The idea is that we used the evidence in the dataset to build the LSRL, but, by definition, all of this data lies in the interval on the -axis from to . There is literally no evidence from this dataset about what the relationship between our chosen explanatory and response variables will be for outside of this interval. So in the absence of strong reasons to believe that the precise linear relationship described by the LSRL will continue for more 's, we should not assume that it does, and therefore we should not use the LSRL equation to guess values by extrapolation.  The fact is, however, that often the best thing we can do with available information when we want to make predictions out into uncharted territory on the -axis is extrapolation. So while it is perilous, it is reasonable to extrapolate, so long as you are clear about what exactly you are doing.    Using again the statistics students' homework and total course points data from Example , suppose the course instructor wanted to predict what would be the total course points for a student who had earned a perfect points on their homework. Plugging into the LSRL, this would have yielded a guess of . Of course, this would have been impossible, since the maximum possible total course score was . Moreover, making this guess is an example of extrapolation, since the value of is beyond the largest value of in the dataset. Therefore we should not rely on this guess as makes sense, since it is invalid by virtue of being larger than .      Simpson's Paradox  Our last caution is not so much a way using the LSRL can go wrong, but instead a warning to be ready for something very counter-intuitive to happen so counter-intuitive, in fact, that it is called a paradox.  It usually seems reasonable that if some object is cut into two pieces, both of which have a certain property, then probably the whole object also has that same property. But if the object in question is a population and the property is has positive correlation , then maybe the unreasonable thing happens.   Simpson's Paradox   Suppose we have a population for which we have a bivariate quantitative dataset. Suppose further that the population is broken into two (or more) subpopulations for all of which the correlation between the two variables is positive , but the correlation of the variables for the whole dataset is negative . Then this situation is called Simpson's Paradox . [It's also called Simpson's Paradox if the role of positive and negative is reversed in our assumptions.]    The bad news is that Simpson's paradox can happen.    Let be a bivariate dataset, which is broken into the two subpopulations and . Then the correlation coefficients of both and are , but the correlation of all of is . This is Simpson's Paradox!    Or, in applications, we can have situations like    Suppose we collect data on two sections of a statistics course, in particular on how many hours per week the individual students study for the course and how they do in the course, measured by their total course points at the end of the semester. It is possible that there is a strong positive correlation between these variables for each section by itself, but there is a strong negative correlation when we put all the students into one dataset. In other words, it is possible that the rational advice, based on both individual sections, is study more and you will do better in the course , but that the rational advice based on all the student data put together is study less and you will do better .     "
},
{
  "id": "def-bivariateoutlier",
  "level": "2",
  "url": "sec-Cs.html#def-bivariateoutlier",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": " outlier bivariate   An outlier for a bivariate quantitative dataset is one which is far away from the curve which has been identified as underlying the shape of the scatterplot of that data. In particular, a point can be a bivariate outlier even if both is not an outlier for the independent variable data considered alone and is not an outlier for the dependent variable data alone.   "
},
{
  "id": "eg-LSRLsensitive",
  "level": "2",
  "url": "sec-Cs.html#eg-LSRLsensitive",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Suppose we add one more point to the dataset in Example . Neither the - nor -coordinates of this point are outliers with respect to their respective single-coordinate datasets, but it is nevertheless clearly a bivariate outlier, as can be seen in the new scatterplot  [Figure: scatter3.eps - placeholder for scatterplot with outlier]  In fact recomputing the correlation coefficient and LSRL, we find quite a change from what we found before, in Example :   and   all because of one additional point!   "
},
{
  "id": "p-321",
  "level": "2",
  "url": "sec-Cs.html#p-321",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "LibreOffice Calc LibreOffice Calc "
},
{
  "id": "def-extrapolation",
  "level": "2",
  "url": "sec-Cs.html#def-extrapolation",
  "type": "Definition",
  "number": "3.3.3",
  "title": "",
  "body": " extrapolation   Given a bivariate quantitative dataset and associated LSRL with equation , the process of guessing that the value of the dependent variable in this relationship to have the value , for any value for the independent variable which does not satisfy  [so, instead, either or ], is called extrapolation .   "
},
{
  "id": "eg-extrapolation",
  "level": "2",
  "url": "sec-Cs.html#eg-extrapolation",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Using again the statistics students' homework and total course points data from Example , suppose the course instructor wanted to predict what would be the total course points for a student who had earned a perfect points on their homework. Plugging into the LSRL, this would have yielded a guess of . Of course, this would have been impossible, since the maximum possible total course score was . Moreover, making this guess is an example of extrapolation, since the value of is beyond the largest value of in the dataset. Therefore we should not rely on this guess as makes sense, since it is invalid by virtue of being larger than .   "
},
{
  "id": "def-simpsonsparadox",
  "level": "2",
  "url": "sec-Cs.html#def-simpsonsparadox",
  "type": "Definition",
  "number": "3.3.5",
  "title": "",
  "body": " Simpson's Paradox   Suppose we have a population for which we have a bivariate quantitative dataset. Suppose further that the population is broken into two (or more) subpopulations for all of which the correlation between the two variables is positive , but the correlation of the variables for the whole dataset is negative . Then this situation is called Simpson's Paradox . [It's also called Simpson's Paradox if the role of positive and negative is reversed in our assumptions.]   "
},
{
  "id": "eg-simpsons1",
  "level": "2",
  "url": "sec-Cs.html#eg-simpsons1",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  Let be a bivariate dataset, which is broken into the two subpopulations and . Then the correlation coefficients of both and are , but the correlation of all of is . This is Simpson's Paradox!   "
},
{
  "id": "eg-simpsons2",
  "level": "2",
  "url": "sec-Cs.html#eg-simpsons2",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": "  Suppose we collect data on two sections of a statistics course, in particular on how many hours per week the individual students study for the course and how they do in the course, measured by their total course points at the end of the semester. It is possible that there is a strong positive correlation between these variables for each section by itself, but there is a strong negative correlation when we put all the students into one dataset. In other words, it is possible that the rational advice, based on both individual sections, is study more and you will do better in the course , but that the rational advice based on all the student data put together is study less and you will do better .   "
},
{
  "id": "sec-linear-regression-exercises",
  "level": "1",
  "url": "sec-linear-regression-exercises.html",
  "type": "Section",
  "number": "3.4",
  "title": "Exercises",
  "body": " Exercises   The age ( ) and resting heart rate (RHR, ) were measured for nine men, yielding this dataset:   Make a scatterplot of these data.  Based on the scatterplot, what do you think the correlation coefficient will be?  Now compute .  Compute the LSRL for these data, write down its equation, and sketch it on top of your scatterplot.  [You may, of course, do as much of this with electronic tools as you like. However, you should explain what tool you are using, how you used it, and what it must have been doing behind the scenes to get the results which it displayed and you are turning in.]    Continuing with the data and computations of the previous problem:  What percentage of the variation in RHR is associated with variation in age?  Write the following sentences with blanks filled in: If I measured the RHR of a 55 year-old man, I would expect it to be . Making an estimate like this is called .   Just looking at the equation of the LSRL, what does it suggest should be the RHR of a newborn baby? Explain.  Also explain what an estimate like yours for the RHR of a baby is called. This kind of estimate is considered a bad idea in many cases explain why in general, and also use specifics from this particular case.    Write down a bivariate quantitative dataset for a population of only two individuals whose LSRL is .  What is the correlation coefficient of your dataset?  Next, add one more point to the dataset in such a way that you don't change the LSRL or correlation coefficient.  Finally, can you find a dataset with the same LSRL but having a larger correlation coefficient than you just had?  [Hint: fool around with modifications or additions to the datasets in you already found in this problem, using an electronic tool to do all the computational work. When you find a good one, write it down and explain what you thinking was as you searched for it.]   "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec-linear-regression-exercises.html#exercise-14",
  "type": "Checkpoint",
  "number": "3.4.1",
  "title": "",
  "body": " The age ( ) and resting heart rate (RHR, ) were measured for nine men, yielding this dataset:   Make a scatterplot of these data.  Based on the scatterplot, what do you think the correlation coefficient will be?  Now compute .  Compute the LSRL for these data, write down its equation, and sketch it on top of your scatterplot.  [You may, of course, do as much of this with electronic tools as you like. However, you should explain what tool you are using, how you used it, and what it must have been doing behind the scenes to get the results which it displayed and you are turning in.]  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec-linear-regression-exercises.html#exercise-15",
  "type": "Checkpoint",
  "number": "3.4.2",
  "title": "",
  "body": " Continuing with the data and computations of the previous problem:  What percentage of the variation in RHR is associated with variation in age?  Write the following sentences with blanks filled in: If I measured the RHR of a 55 year-old man, I would expect it to be . Making an estimate like this is called .   Just looking at the equation of the LSRL, what does it suggest should be the RHR of a newborn baby? Explain.  Also explain what an estimate like yours for the RHR of a baby is called. This kind of estimate is considered a bad idea in many cases explain why in general, and also use specifics from this particular case.  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec-linear-regression-exercises.html#exercise-16",
  "type": "Checkpoint",
  "number": "3.4.3",
  "title": "",
  "body": " Write down a bivariate quantitative dataset for a population of only two individuals whose LSRL is .  What is the correlation coefficient of your dataset?  Next, add one more point to the dataset in such a way that you don't change the LSRL or correlation coefficient.  Finally, can you find a dataset with the same LSRL but having a larger correlation coefficient than you just had?  [Hint: fool around with modifications or additions to the datasets in you already found in this problem, using an electronic tool to do all the computational work. When you find a good one, write it down and explain what you thinking was as you searched for it.]  "
},
{
  "id": "sec-defsforprob",
  "level": "1",
  "url": "sec-defsforprob.html",
  "type": "Section",
  "number": "4.1",
  "title": "Definitions for Probability",
  "body": " Definitions for Probability   Sample Spaces, Set Operations, and Probability Models  Let's get right to the definitions.    Suppose we have a repeatable experiment we want to investigate probabilistically. The things that happen when we do the experiment, the results of running it, are called the [ experimental ] outcomes outcome of an experiment . The set of all outcomes is called the sample space sample space of the experiment. We almost always use the symbol for this sample space.      Suppose the experiment we are doing is flip a coin. Then the sample space would be .      For the experiment roll a [normal, six-sided] die, the sample space would be .      For the experiment roll two dice, the sample space would be where the notation means roll resulted in an , in an .      Consider the experiment flip a coin as many times as necessary to see the first Head . This would have the infinite sample space      Finally, suppose the experiment is point a Geiger counter at a lump of radioactive material and see how long you have to wait until the next click. Then the sample space is the set of all positive real numbers, because potentially the waiting time could be any positive amount of time.    As mentioned in the chapter introduction, we are more interested in    Given a repeatable experiment with sample space , an event event is any collection of [some, all, or none of the] outcomes in ; i.e., an event is any subset subset,  of , written subset notation .    There is one special set which is a subset of any other set, and therefore is an event in any sample space.    The set with no elements is called the empty set empty set, empty set notation , for which we use the notation .      Looking at the sample space in , it's pretty clear that the following are all the subsets of :    Two parts of that example are always true: and are always subsets of any set .  Since we are going to be working a lot with events, which are subsets of a larger set, the sample space, it is nice to have a few basic terms from set theory:    Given a subset of a larger set , the complement of complement, complement notation , is the set .    If we describe an event in words as all outcomes satisfies some property , the complementary event, consisting of all the outcomes not in , can be described as all outcomes which don't satisfy . In other words, we often describe the event as the event not  . not, for an event    Given two sets and , their union union, union notation is the set    Now if event is those outcomes having property and is those with property , the event , with all outcomes in together with all outcomes in can be described as all outcomes satisfying or , thus we sometimes pronounce the event as  or or, for events  .    Given two sets and , their intersection intersection, intersection notation is the set    If, as before, event consists of those outcomes having property and is those with property , the event will consist of those outcomes which satisfy both and . In other words, can be described as  and and, for events  .  Putting together the idea of intersection with the idea of that special subset of any set, we get the    Two sets and are called disjoint disjoint events if . In other words, sets are disjoint if they have nothing in common.  A exact synonym for disjoint that some authors prefer is mutually exclusive mutually exclusive events . We will use both terms interchangeably in this book.    Now we are ready for the basic structure of probability.    Given a sample space , a probability model probability model on is a choice of a real number for every event which satisfies  For all events , .  and .  For all events , .  If and are any two disjoint disjoint events events, then . [This is called the addition rule for disjoint events addition rule for disjoint events .]       Venn Diagrams  Venn diagrams Venn diagram are a simple way to display subsets subset, of a fixed set and to show the relationships between these subsets and even the results of various set operations (like complement complement, , union union, , and intersection intersection, ) on them. The primary use we will make of Venn diagrams is for events event in a certain sample space sample space , so we will use that terminology [even though the technique has much wider application].  To make a Venn Diagram Venn diagram , always start out by making a rectangle to represent the whole sample space sample space :  [Figure: Rectangle representing sample space]  Within that rectangle, we make circles, ovals, or just blobs, to indicate that portion of the sample space sample space which is some event :  [Figure: Rectangle with one circle labeled E inside]  Sometimes, if the outcomes in the sample space sample space  and in the event event  might be indicated in the different parts of the Venn diagram Venn diagram . So, if and , we might draw this as  [Figure: Rectangle with circle A containing points a and b, and points c and d outside the circle]  The complement complement,  of an event event  is easy to show on a Venn diagram Venn diagram , since it is simply everything which is not in :  [Figure: Two diagrams side by side - left showing filled circle E, right showing filled exterior region representing E^c]  This can actually be helpful in figuring out what must be in . In the example above with and , by looking at what is in the shaded exterior part for our picture of , we can see that for that , we would get .  Moving now to set operations that work with two events event , suppose we want to make a Venn diagram Venn diagram with events and . If we know these events are disjoint disjoint events , then we would make the diagram as follows:  [Figure: Rectangle with two non-overlapping circles A and B]  while if they are known not to be disjoint, we would use instead this diagram:  [Figure: Rectangle with two overlapping circles A and B]  For example, it , , and , we would have  [Figure: Rectangle with two overlapping circles, A containing a and b, B containing b and c, with b in the overlap]  When in doubt, it is probably best to use the version with overlap, which then could simply not have any points in it (or could have zero probability, when we get to that, below).  Venn diagrams Venn diagram are very good at showing unions union, , and intersection intersection, :  [Figure: Four diagrams showing - left: filled circle A, middle-left: filled circle B, middle-right: both circles filled for A∪B, right: only overlap filled for A∩B]  Another nice thing to do with Venn diagrams Venn diagram is to use them as a visual aid for probability computations. The basic idea is to make a diagram showing the various events event sitting inside the usual rectangle, which stands for the sample space sample space , and to put numbers in various parts of the diagram showing the probabilities of those events, or of the results of operations (unions union, , intersection intersection, , and complement complement, ) on those events.  For example, if we are told that an event event  has probability , then we can immediately fill in the as follows:  [Figure: Rectangle with circle A labeled with .4 inside]  But we can also put a number in the exterior of that circle which represents , taking advantage of the fact that that exterior is and the rule for probabilities of complements (point in ) to conclude that the appropriate number is :  [Figure: Rectangle with circle A showing .4 inside and .6 outside]  We recommend that, in a Venn diagram Venn diagram showing probability values, you always put a number in the region exterior to all of the events event [but inside the rectangle indicating the sample space sample space , of course].  Complicating a little this process of putting probability numbers in the regions of a Venn diagram Venn diagram is the situation where we are giving for both an event event and a subset subset, of that event. This most often happens when we are told probabilities both of some events and of their intersection(s) intersection, . Here is an example:    Suppose we are told that we have two events and in the sample space , which satisfy , , and . First of all, we know that and are not disjoint, since if they were disjoint, that would mean (by definition) that , and since but , that is not possible. So we draw a Venn diagram that we've see before:  [Figure: Two overlapping circles A and B]  However, it would be unwise simply to write those given numbers , , and into the three central regions of this diagram. The reason is that the number is the probability of , which is a part of already, so if we simply write in the rest of , we would be counting that for the twice. Therefore, before we write a number in the rest of , outside of , we have to subtract the for . That means that the number which goes in the rest of should be . A similar reasoning tells us that the number in the part of outside of , should be . That means the Venn diagram with all probabilities written in would be:  [Figure: Venn diagram with .3 in A only, .1 in overlap, .4 in B only, .2 outside both circles]    The approach in the above example is our second important recommendation for who to put numbers in a Venn diagram Venn diagram showing probability values: always put a number in each region which corresponds to the probability of that smallest connected region containing the number, not any larger region .  One last point we should make, using the same argument as in the above example. Suppose we have events event  and in a sample space sample space  (again). Suppose we are not sure if and are disjoint disjoint events , so we cannot use the addition rule for disjoint events to compute . But notice that the events and are disjoint, so that and are also disjoint and is a decomposition of the event into the two disjoint events and . From the addition rule for disjoint events, this means that  Similar reasoning tells us both that and that is a decomposition of into disjoint pieces, so that Combining all of these equations, we conclude that This is important enough to state as a   Fact: The Addition Rule for General Events  Addition Rule for General Events If and are events event in a sample space sample space  then we have the addition rule for their probabilities This rule is true whether or not and are disjoint disjoint events .     Finite Probability Models  Here is a nice situation in which we can easily calculate a lot of probabilities fairly easily: if the sample space of some experiment is finite . finite probability models  So let's suppose the sample space consists of just the outcomes . For each of the outcomes, we can compute the probability: Let's think about what the rules for probability models tell us about these numbers . First of all, since they are each the probability of an event, we see that Furthermore, since and all of the events are disjoint, by the addition rule for disjoint events we have  The final thing to notice about this situation of a finite sample space is that if is any event, then will be just a collection of some of the outcomes from (maybe none, maybe all, maybe an intermediate number). Since, again, the events like and and so on are disjoint, we can compute  In other words   Fact  A probability model on a sample space with a finite number, , of outcomes, is nothing other than a choice of real numbers , all in the range from to and satisfying . For such a choice of numbers, we can compute the probability of any event as     For the coin flip of , there are only the two outcomes and for which we need to pick two probabilities, call them and . In fact, since the total must be , we know that or, in other words, . The the probabilities for all events (which we listed in ) are  What we've described here is, potentially, a biased coin biased coin coin biased , since we are not assuming that  the probabilities of getting a head and a tail are not assumed to be the same. The alternative is to assume that we have a fair coin fair coin coin fair , meaning that . Note that in such a case, since , we have and so . That is, the probability of a head (and, likewise, the probability of a tail) in a single throw of a fair coin is .      As in the previous example, we can consider the die of to a fair die , meaning that the individual face probabilities are all the same. Since they must also total to (as we saw for all finite probability models), it follows that We can then use this basic information and the formula (for ) in to compute the probability of any event of interest, such as    We should immortalize these last two examples with a    When we are talking about dice, coins, individuals for some task, or another small, practical, finite experiment, we use the term fair fair, in general to indicate that the probabilities of all individual outcomes are equal (and therefore all equal to the the number , where is the number of outcomes in the sample space). A more technical term for the same idea is equiprobable equiprobable , while a more casual term which is often used for this in very informal settings is at random at random (such as pick a card at random from this deck or pick a random patient from the study group to give the new treatment to ).      Suppose we look at the experiment of and add the information that the two dice we are rolling are fair . This actually isn't quite enough to figure out the probabilities, since we also have to assure that the fair rolling of the first die doesn't in any way affect the rolling of the second die. This is technically the requirement that the two rolls be independent independent events , but since we won't investigate that carefully until , below, let us instead here simply say that we assume the two rolls are fair and are in fact completely uninfluenced by anything around them in the world including each other.  What this means is that, in the long run, we would expect the first die to show a roughly of the time, and in the very long run, the second die would show a roughly of those times. This means that the outcome of the roll two dice experiment should be with probability  and the same reasoning would show that all of the outcomes have that probability. In other words, this is an equiprobable sample space with outcomes each having probability . Which in turn enables us to compute any probability we might like, such as     "
},
{
  "id": "def-outcomesamplespace",
  "level": "2",
  "url": "sec-defsforprob.html#def-outcomesamplespace",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  Suppose we have a repeatable experiment we want to investigate probabilistically. The things that happen when we do the experiment, the results of running it, are called the [ experimental ] outcomes outcome of an experiment . The set of all outcomes is called the sample space sample space of the experiment. We almost always use the symbol for this sample space.   "
},
{
  "id": "eg-sampspace1",
  "level": "2",
  "url": "sec-defsforprob.html#eg-sampspace1",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Suppose the experiment we are doing is flip a coin. Then the sample space would be .   "
},
{
  "id": "eg-sampspace2",
  "level": "2",
  "url": "sec-defsforprob.html#eg-sampspace2",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  For the experiment roll a [normal, six-sided] die, the sample space would be .   "
},
{
  "id": "eg-sampspace3",
  "level": "2",
  "url": "sec-defsforprob.html#eg-sampspace3",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": "  For the experiment roll two dice, the sample space would be where the notation means roll resulted in an , in an .   "
},
{
  "id": "eg-samspace4",
  "level": "2",
  "url": "sec-defsforprob.html#eg-samspace4",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  Consider the experiment flip a coin as many times as necessary to see the first Head . This would have the infinite sample space   "
},
{
  "id": "eg-sampspace5",
  "level": "2",
  "url": "sec-defsforprob.html#eg-sampspace5",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  Finally, suppose the experiment is point a Geiger counter at a lump of radioactive material and see how long you have to wait until the next click. Then the sample space is the set of all positive real numbers, because potentially the waiting time could be any positive amount of time.   "
},
{
  "id": "def-event",
  "level": "2",
  "url": "sec-defsforprob.html#def-event",
  "type": "Definition",
  "number": "4.1.7",
  "title": "",
  "body": "  Given a repeatable experiment with sample space , an event event is any collection of [some, all, or none of the] outcomes in ; i.e., an event is any subset subset,  of , written subset notation .   "
},
{
  "id": "def-emptyset",
  "level": "2",
  "url": "sec-defsforprob.html#def-emptyset",
  "type": "Definition",
  "number": "4.1.8",
  "title": "",
  "body": "  The set with no elements is called the empty set empty set, empty set notation , for which we use the notation .   "
},
{
  "id": "eg-events1",
  "level": "2",
  "url": "sec-defsforprob.html#eg-events1",
  "type": "Example",
  "number": "4.1.9",
  "title": "",
  "body": "  Looking at the sample space in , it's pretty clear that the following are all the subsets of :   "
},
{
  "id": "def-complement",
  "level": "2",
  "url": "sec-defsforprob.html#def-complement",
  "type": "Definition",
  "number": "4.1.10",
  "title": "",
  "body": "  Given a subset of a larger set , the complement of complement, complement notation , is the set .   "
},
{
  "id": "p-370",
  "level": "2",
  "url": "sec-defsforprob.html#p-370",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "not "
},
{
  "id": "def-union",
  "level": "2",
  "url": "sec-defsforprob.html#def-union",
  "type": "Definition",
  "number": "4.1.11",
  "title": "",
  "body": "  Given two sets and , their union union, union notation is the set   "
},
{
  "id": "p-372",
  "level": "2",
  "url": "sec-defsforprob.html#p-372",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "or "
},
{
  "id": "def-intersection",
  "level": "2",
  "url": "sec-defsforprob.html#def-intersection",
  "type": "Definition",
  "number": "4.1.12",
  "title": "",
  "body": "  Given two sets and , their intersection intersection, intersection notation is the set   "
},
{
  "id": "p-374",
  "level": "2",
  "url": "sec-defsforprob.html#p-374",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "and "
},
{
  "id": "def-disjointME",
  "level": "2",
  "url": "sec-defsforprob.html#def-disjointME",
  "type": "Definition",
  "number": "4.1.13",
  "title": "",
  "body": "  Two sets and are called disjoint disjoint events if . In other words, sets are disjoint if they have nothing in common.  A exact synonym for disjoint that some authors prefer is mutually exclusive mutually exclusive events . We will use both terms interchangeably in this book.   "
},
{
  "id": "def-probmodel",
  "level": "2",
  "url": "sec-defsforprob.html#def-probmodel",
  "type": "Definition",
  "number": "4.1.14",
  "title": "",
  "body": "  Given a sample space , a probability model probability model on is a choice of a real number for every event which satisfies  For all events , .  and .  For all events , .  If and are any two disjoint disjoint events events, then . [This is called the addition rule for disjoint events addition rule for disjoint events .]    "
},
{
  "id": "eg-probnumsinVDs",
  "level": "2",
  "url": "sec-defsforprob.html#eg-probnumsinVDs",
  "type": "Example",
  "number": "4.1.15",
  "title": "",
  "body": "  Suppose we are told that we have two events and in the sample space , which satisfy , , and . First of all, we know that and are not disjoint, since if they were disjoint, that would mean (by definition) that , and since but , that is not possible. So we draw a Venn diagram that we've see before:  [Figure: Two overlapping circles A and B]  However, it would be unwise simply to write those given numbers , , and into the three central regions of this diagram. The reason is that the number is the probability of , which is a part of already, so if we simply write in the rest of , we would be counting that for the twice. Therefore, before we write a number in the rest of , outside of , we have to subtract the for . That means that the number which goes in the rest of should be . A similar reasoning tells us that the number in the part of outside of , should be . That means the Venn diagram with all probabilities written in would be:  [Figure: Venn diagram with .3 in A only, .1 in overlap, .4 in B only, .2 outside both circles]   "
},
{
  "id": "eg-finiteprobmod1",
  "level": "2",
  "url": "sec-defsforprob.html#eg-finiteprobmod1",
  "type": "Example",
  "number": "4.1.16",
  "title": "",
  "body": "  For the coin flip of , there are only the two outcomes and for which we need to pick two probabilities, call them and . In fact, since the total must be , we know that or, in other words, . The the probabilities for all events (which we listed in ) are  What we've described here is, potentially, a biased coin biased coin coin biased , since we are not assuming that  the probabilities of getting a head and a tail are not assumed to be the same. The alternative is to assume that we have a fair coin fair coin coin fair , meaning that . Note that in such a case, since , we have and so . That is, the probability of a head (and, likewise, the probability of a tail) in a single throw of a fair coin is .   "
},
{
  "id": "eg-finiteprobmod2",
  "level": "2",
  "url": "sec-defsforprob.html#eg-finiteprobmod2",
  "type": "Example",
  "number": "4.1.17",
  "title": "",
  "body": "  As in the previous example, we can consider the die of to a fair die , meaning that the individual face probabilities are all the same. Since they must also total to (as we saw for all finite probability models), it follows that We can then use this basic information and the formula (for ) in to compute the probability of any event of interest, such as   "
},
{
  "id": "def-fair",
  "level": "2",
  "url": "sec-defsforprob.html#def-fair",
  "type": "Definition",
  "number": "4.1.18",
  "title": "",
  "body": "  When we are talking about dice, coins, individuals for some task, or another small, practical, finite experiment, we use the term fair fair, in general to indicate that the probabilities of all individual outcomes are equal (and therefore all equal to the the number , where is the number of outcomes in the sample space). A more technical term for the same idea is equiprobable equiprobable , while a more casual term which is often used for this in very informal settings is at random at random (such as pick a card at random from this deck or pick a random patient from the study group to give the new treatment to ).   "
},
{
  "id": "eg-finiteprobmod3",
  "level": "2",
  "url": "sec-defsforprob.html#eg-finiteprobmod3",
  "type": "Example",
  "number": "4.1.19",
  "title": "",
  "body": "  Suppose we look at the experiment of and add the information that the two dice we are rolling are fair . This actually isn't quite enough to figure out the probabilities, since we also have to assure that the fair rolling of the first die doesn't in any way affect the rolling of the second die. This is technically the requirement that the two rolls be independent independent events , but since we won't investigate that carefully until , below, let us instead here simply say that we assume the two rolls are fair and are in fact completely uninfluenced by anything around them in the world including each other.  What this means is that, in the long run, we would expect the first die to show a roughly of the time, and in the very long run, the second die would show a roughly of those times. This means that the outcome of the roll two dice experiment should be with probability  and the same reasoning would show that all of the outcomes have that probability. In other words, this is an equiprobable sample space with outcomes each having probability . Which in turn enables us to compute any probability we might like, such as   "
},
{
  "id": "sec-condprob",
  "level": "1",
  "url": "sec-condprob.html",
  "type": "Section",
  "number": "4.2",
  "title": "Conditional Probability",
  "body": " Conditional Probability  We have described the whole foundation of the theory of probability as coming from imperfect knowledge imperfect knowledge , in the sense that we don't know for sure if an event will happen any particular time we do the experiment but we do know, in the long run, in what fraction of times will happen. Or, at least, we claim that there is some number such that after running the experiment times, out of which of these times are when happened, is approximately (and this ratio gets closer and closer to as gets bigger and bigger).  But what if we have some knowledge? In particular, what happens if we know for sure that the event has happened will that influence our knowledge of whether happens or not? As before, when there is randomness involved, we cannot tell for sure if will happen, but we hope that, given the knowledge that happened, we can make a more accurate guess about the probability of .    If you pick a person at random in a certain country on a particular date, you might be able to estimate the probability that the person had a certain height if you knew enough about the range of heights of the whole population of that country. [In fact, below we will make estimates of this kind.] That is, if we define the event then we might estimate .  But consider the event Because there is a genetic component to height, if you know that happened, it would change your idea of how likely, given that knowledge, that happened. Because genetics are not the only thing which determines a person's height, you would not be certain that happened, even given the knowledge of .    Let us use the frequentist approach to derive a formula for this kind of probability of given that is known to have happened . So think about doing the repeatable experiment many times, say times. Out of all those times, some times happens, say it happens times. Out of those times, the ones where happened, sometimes also happened. These are the cases where both and happened or, converting this to a more mathematical descriptions, the times that happened so we will write it .  We know that the probability of happening in the cases where we know for sure that happened is approximately . Let's do that favorite trick of multiplying and dividing by the same number, so finding that the probability in which we are interested is approximately  Which is why we make the    The conditional probability conditional probability,  of the event given given, the known event in conditional probability  the event is conditional probability notation Here is pronounced the probability of given .    Let's do a simple    Building off of , note that the probability of rolling a is (as is the probability of rolling any other face it's a fair die ). But suppose that you were told that the roll was even, which is the event , and asked for the probability that the roll was a given this prior knowledge. The answer would be In other words, the probability of rolling a on a fair die with no other information is , which the probability of rolling a given that we rolled an even number is . So the probability doubled with the given information.  Sometimes the probability changes even more than merely doubling: the probability that we rolled a with no other knowledge is , while the probability that we rolled a given that we rolled an even number is    But, actually, sometimes the conditional probability for some event is the same as the unconditioned probability. In other words, sometimes knowing that happened doesn't change our estimate of the probability of at all, they are no really related events, at least from the point of view of probability. This motivates the    Two events and are called independent independent events if .    Plugging the defining formula for into the definition of independent , it is easy to see that   Fact  Events and are independent if and only if .     Still using the situation of , we saw in that the events and are not independent since nor are and , since However, look at the events and : which means that they are independent!      We can now fully explain what was going on in . The two fair dice were supposed to be rolled in a way that the first roll had no effect on the second this exactly means that the dice were rolled independently . As we saw, this then means that each individual outcome of sample space had probability . But the first roll having any particular value is independent of the second roll having another, e.g. , if is the event in that sample space of getting a on the first roll and is the event of getting a on the second roll, then events and are independent, as we check by using : On the other hand, the event the sum of the rolls is , which is as a set, is not independent of the value of the first roll, since but .    "
},
{
  "id": "eg-condprob1",
  "level": "2",
  "url": "sec-condprob.html#eg-condprob1",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  If you pick a person at random in a certain country on a particular date, you might be able to estimate the probability that the person had a certain height if you knew enough about the range of heights of the whole population of that country. [In fact, below we will make estimates of this kind.] That is, if we define the event then we might estimate .  But consider the event Because there is a genetic component to height, if you know that happened, it would change your idea of how likely, given that knowledge, that happened. Because genetics are not the only thing which determines a person's height, you would not be certain that happened, even given the knowledge of .   "
},
{
  "id": "def-condprob",
  "level": "2",
  "url": "sec-condprob.html#def-condprob",
  "type": "Definition",
  "number": "4.2.2",
  "title": "",
  "body": "  The conditional probability conditional probability,  of the event given given, the known event in conditional probability  the event is conditional probability notation Here is pronounced the probability of given .   "
},
{
  "id": "eg-condprob2",
  "level": "2",
  "url": "sec-condprob.html#eg-condprob2",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Building off of , note that the probability of rolling a is (as is the probability of rolling any other face it's a fair die ). But suppose that you were told that the roll was even, which is the event , and asked for the probability that the roll was a given this prior knowledge. The answer would be In other words, the probability of rolling a on a fair die with no other information is , which the probability of rolling a given that we rolled an even number is . So the probability doubled with the given information.  Sometimes the probability changes even more than merely doubling: the probability that we rolled a with no other knowledge is , while the probability that we rolled a given that we rolled an even number is   "
},
{
  "id": "def-independent",
  "level": "2",
  "url": "sec-condprob.html#def-independent",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": "  Two events and are called independent independent events if .   "
},
{
  "id": "eg-condprob3",
  "level": "2",
  "url": "sec-condprob.html#eg-condprob3",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "  Still using the situation of , we saw in that the events and are not independent since nor are and , since However, look at the events and : which means that they are independent!   "
},
{
  "id": "eg-condprob4",
  "level": "2",
  "url": "sec-condprob.html#eg-condprob4",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": "  We can now fully explain what was going on in . The two fair dice were supposed to be rolled in a way that the first roll had no effect on the second this exactly means that the dice were rolled independently . As we saw, this then means that each individual outcome of sample space had probability . But the first roll having any particular value is independent of the second roll having another, e.g. , if is the event in that sample space of getting a on the first roll and is the event of getting a on the second roll, then events and are independent, as we check by using : On the other hand, the event the sum of the rolls is , which is as a set, is not independent of the value of the first roll, since but .   "
},
{
  "id": "sec-RVs",
  "level": "1",
  "url": "sec-RVs.html",
  "type": "Section",
  "number": "4.3",
  "title": "Random Variables",
  "body": " Random Variables   Definition and First Examples  Suppose we are doing a random experiment and there is some consequence of the result in which we are interested that can be measured by a number. The experiment might be playing a game of chance and the result could be how much you win or lose depending upon the outcome, or the experiment could be which part of the drivers' manual you randomly choose to study and the result how many points we get on the driver's license test we make the next day, or the experiment might be giving a new drug to a random patient in medical study and the result would be some medical measurement you make after treatment (blood pressure, white blood cell count, whatever), etc. There is a name for this situation in mathematics    A choice of a number for each outcome of a random experiment is called a random variable random variable, RV RV, random variable [ RV ]. If the values an RV takes can be counted, because they are either finite or countably infinite countably infinite in number, the RV is called discrete discrete random variable ; if, instead, the RV takes on all the values in an interval of real numbers, the RV is called continuous continuous random variable .  We usually use capital letters to denote RVs and the corresponding lowercase letter to indicate a particular numerical value the RV might have, like and .      Suppose we play a silly game where you pay me $5 to play, then I flip a fair coin fair coin coin fair and I give you $10 if the coin comes up heads and $0 if it comes up tails. Then your net winnings, which would be +$5 or -$5 each time you play, are a random variable. Having only two possible values, this RV is certainly discrete.      Weather phenomena vary so much, due to such small effects such as the famous butterfly flapping its wings in the Amazon rain forest causing a hurricane in North America that they appear to be a random phenomenon. Therefore, observing the temperature at some weather station is a continuous random variable whose value can be any real number in some range like to (we're doing science , so we use ).      Suppose we look at the roll two fair dice independently experiment from Example and Example , which was based on the probability model in Example and sample space in Example . Let us consider in this situation the random variable whose value for some pair of dice rolls is the sum of the two numbers showing on the dice. So, for example, , , etc.  In fact, let's make a table of all the values of :      Distributions for Discrete RVs  The first thing we do with a random variable, usually, is talk about the probabilities associate with it.    Given a discrete RV , its distribution distribution is a list of all of the values takes on, together with the probability of it taking that value.    [Note this is quite similar to Definition  because it is essentially the same thing.]    Let's look at the RV, which we will call , in the silly betting game of Example . As we noticed when we first defined that game, there are two possible values for this RV, $5 and -$5. We can actually think of as describing an event, consisting of the set of all outcomes of the coin-flipping experiment which give you a net gain of $5. Likewise, describes the event consisting of the set of all outcomes which give you a net gain of -$5. These events are as follows:  [Table showing: column with values 5 and -5, and corresponding outcomes column with {H} and {T}]  Since it is a fair coin fair coin coin fair so the probabilities of these events are known (and very simple), we conclude that the distribution of this RV is the table  [Distribution table: = 5 with , and = -5 with ]      What about the RV on the roll two fair dice, independently random experiment from Example ? We have actually already done most of the work, finding out what values the RV can take and which outcomes cause each of those values. To summarize what we found:  [Table showing outcomes for each sum value from 2 to 12]  But we have seen that this is an equiprobable situation, where the probability of any event contain outcomes is , so we can instantly fill in the distribution table for this RV as  [Distribution table showing probabilities: ]    One thing to notice about distributions is that if we make a preliminary table, as we just did, of the events consisting of all outcomes which give a particular value when plugged into the RV, then we will have a collection of disjoint events which exhausts all of the sample space. What this means is that the sum of the probability values in the distribution table of an RV is the probability of the whole sample space of that RV's experiment. Therefore   Fact  The sum of the probabilities in a distribution table for a random variable must always equal .   It is quite a good idea, whenever you write down a distribution, to check that this Fact is true in your distribution table, simply as a sanity check against simple arithmetic errors.    Expectation for Discrete RVs  Since we cannot predict what exactly will be the outcome each time we perform a random experiment, we cannot predict with precision what will be the value of an RV on that experiment, each time. But, as we did with the basic idea of probability, maybe we can at least learn something from the long-term trends. It turns out that it is relatively easy to figure out the mean value of an RV over a large number of runs of the experiment.  Say is a discrete RV, for which the distribution tells us that takes the values , each with corresponding probability . Then the frequentist view of probability says that the probability that is (approximately) , where is the number of times out of a large number of runs of the experiment. But if then, multiplying both sides by , That means that, out of the runs of the experiment, will have the value in runs, the value in runs, etc. So the sum of over those runs will be Therefore the mean value of over these runs will be the total divided by , which is . This motivates the definition    Given a discrete RV which takes on the values with probabilities , the expectation expectation [sometimes also called the expected value expected value ] of is the value    By what we saw just before this definition, we have the following   Fact  The expectation of a discrete RV is the mean of its values over many runs of the experiment.   Note: The attentive reader will have noticed that we dealt above only with the case of a finite RV, not the case of a countably infinite one. It turns out that all of the above works quite well in that more complex case as well, so long as one is comfortable with a bit of mathematical technology called summing an infinite series . We do not assume such a comfort level in our readers at this time, so we shall pass over the details of expectations of infinite, discrete RVs.    Let's compute the expectation of net profit RV in the silly betting game of Example , whose distribution we computed in Example . Plugging straight into the definition, we see In other words, your average net gain playing this silly game many times will be zero . Note that does not mean anything like if you lose enough times in a row, the chances of starting to win again will go up , as many gamblers seem to believe, it just means that, in the very long run, we can expect the average winnings to be approximately zero but no one knows how long that run has to be before the balancing of wins and losses happens.    A more interesting example is    In Example we computed the distribution of the random variable on the roll two fair dice, independently random experiment from Example . It is therefore easy to plug the values of the probabilities and RV values from the distribution table into the formula for expectation, to get So if you roll two fair dice independently and add the numbers which come up, then do this process many times and take the average, in the long run that average will be the value .      Density Functions for Continuous RVs  What about continuous random variables? Definition of distribution distribution explicitly excluded the case of continuous RVs, so does that mean we cannot do probability calculations in that case?  There is, when we think about it, something of a problem here. A distribution is supposed to be a list of possible values of the RV and the probability of each such value. But if some continuous RV has values which are an interval of real numbers, there is just no way to list all such numbers it has been known since the late 1800s that there is no way to make a list like that. In addition, the chance of some random process producing a real number that is exactly equal to some particular value really is zero: for two real numbers to be precisely equal requires infinite accuracy think of all of those decimal digits, marching off in orderly rows to infinity, which must match between the two numbers.  Rather than a distribution, we do the following:    Let be a continuous random variable whose values are the real interval , where either or or both may be . A [ probability probability density function, for a continuous random variable ] density function density function, for a continuous random variable for is a function defined for in , meaning it is a curve with one value for each in that interval, with the property that    Graphically, what is going on here is  [Figure: A probability density function showing the area under the curve between and representing ]  Because of what we know about probabilities, the following is true (and fairly easy to prove):   Fact  Suppose is a density function for the continuous RV defined on the real interval . Then   For all in , .  The total area under the curve , above the -axis, and between and is .    If we want the idea of picking a real number on the interval at random , where at random at random means that all numbers have the same chance of being picked (along the lines of fair in Definition , the height of the density function must be the same at all . In other words, the density function must be a constant . In fact, because of the above , that constant must have the value . There is a name for this:    The uniform distribution on uniform distribution on is the distribution for the continuous RV whose values are the interval and whose density function is the constant function .      Suppose you take a bus to school every day and because of a chaotic home life (and, let's face it, you don't like mornings), you get to the bus stop at a pretty nearly perfectly random time. The bus also doesn't stick perfectly to its schedule but it is guaranteed to come at least every minutes. What this adds up to is the idea that your waiting time at the bus stop is a uniformly distributed RV on the interval .  If you wonder one morning how likely it then is that you will wait for less than minutes, you can simply compute the area of the rectangle whose base is the interval on the -axis and whose height is , which will be  [Figure: Bus waiting time uniform distribution showing shaded area from 0 to 10 minutes]  where the area of the shaded region represents the probability of having a waiting time from to minutes.    One technical thing that can be confusing about continuous RVs and their density functions is the question of whether we should write or . But if you think about it, we really have three possible events here: Since always takes on exactly one value for any particular outcome, there is no overlap between these events: they are all disjoint. That means that where the last equality is because, as we said above, the probability of a continuous RV taking on exactly one particular value, as it would in events and , is . The same would be true if we added merely one endpoint of the interval . To summarize:   Fact  If is a continuous RV with values forming the interval and and are in this interval, then   As a consequence of this fact, some authors write probability formulæ about continuous RVs with and some with and it makes no difference .  Let's do a slightly more interesting example than the uniform distribution:    Suppose you repeatedly throw darts at a dartboard. You're not a machine, so the darts hit in different places every time and you think of this as a repeatable random experiment whose outcomes are the locations of the dart on the board. You're interested in the probabilities of getting close to the center of the board, so you decide for each experimental outcome (location of a dart you threw) to measure its distance to the center this will be your RV .  Being good at this game, you hit near the center more than near the edge and you never completely miss the board, whose radius is  so is more likely to be near than near , and it is never greater than . What this means is that the RV has values forming the interval and the density function, defined on the same interval, should have its maximum value at and should go down to the value when .  You decide to model this situation with the simplest density function you can think of that has the properties we just noticed: a straight line from the highest point of the density function when down to the point . The figure that will result will be a triangle, and since the total area must be and the base is units long, the height must be units. [To get that, we solved the equation for .] So the graph must be  [Figure: Triangular density function for dart hitting distance]  and the equation of this linear density function would be [why? think about the slope and -intercept!].  To the extent that you trust this model, you can now calculate the probabilities of events like, for example, hitting the board within that center bull's-eye of radius , which probability would be the area of the shaded region in this graph:  [Figure: Dart hitting bull's-eye probability shown as shaded trapezoid]  The upper-right corner of this shaded region is at -coordinate and is on the line, so its -coordinate is . Since the region is a trapezoid, its area is the distance between the two parallel sides times the average of the lengths of the other two sides, giving In other words, the probability of hitting the bull's-eye, assuming this model of your dart-throwing prowess, is about %.  If you don't remember the formula for the area of a trapezoid, you can do this problem another way: compute the probability of the complementary event, and then take one minus that number. The reason to do this would be that the complementary event corresponds to the shaded region here  [Figure: Complementary event showing triangular region]  which is a triangle! Since we surely do remember the formula for the area of a triangle, we find that and therefore . [It's nice that we got the same number this way, too!]      The Normal Distribution  We've seen some examples of continuous RVs, but we have yet to meet the most important one of all.    The Normal distribution with mean and standard deviation Normal distribution with mean and standard deviation is the continuous RV which takes on all real values and is governed by the probability density function probability density function, for a continuous random variable density function, for a continuous random variable  If is a random variable which follows this distribution, then we say that is Normally distributed with mean and standard deviation Normally distributed with mean and standard deviation , or, in symbols, is Normally distributed with mean and standard deviation .    [More technical works also call this the Gaussian distribution Gaussian distribution , named after the great mathematician Carl Friedrich Gauss Gauss, Carl Friedrich . But we will not use that term again in this book after this sentence ends.]  The good news about this complicated formula is that we don't really have to do anything with it. We will collect some properties of the Normal distribution which have been derived from this formula, but these properties are useful enough, and other tools such as modern calculators calculator and computers which can find specific areas we need under the graph of , that we won't need to work directly with the above formula for again. It is nice to know that does correspond to a specific, known density function, though, isn't it?  It helps to start with an image of what the Normal distribution looks like. Here is the density function for and :  [Figure: Normal distribution with mean 17 and standard deviation 3]  Now let's collect some of these useful facts about the Normal distributions.   Fact  The density function for the Normal distribution is a positive function for all values of and the total area under the curve is .   This simply means that is a good candidate for the probability density function for some continuous RV.   Fact  The density function for the Normal distribution is unimodal with maximum at -coordinate .   This means that is a possible model for an RV which tends to have one main, central value, and less often has other values farther away. That center is at the location given by the parameter , so wherever we want to put the center of our model for , we just use that for .   Fact  The density function for the Normal distribution is is symmetric when reflected across the line .   This means that the amount misses its center, , tends to be about the same when it misses above and when it misses below . This would correspond to situations were you hit as much to the right as to the left of the center of a dartboard. Or when randomly picked people are as likely to be taller than the average height as they are to be shorter. Or when the time it takes a student to finish a standardized test is as likely to be less than the average as it is to be more than the average. Or in many, many other useful situations.   Fact  The density function for the Normal distribution has has tails in both directions which are quite thin, in fact get extremely thin as , but never go all the way to .   This means that models situations where the amount deviates from its average has no particular cut-off in the positive or negative direction. So you are throwing darts at a dart board, for example, and there is no way to know how far your dart may hit to the right or left of the center, maybe even way off the board and down the hall although that may be very unlikely. Or perhaps the time it takes to complete some task is usually a certain amount, but every once and a while it might take much more time, so much more that there is really no natural limit you might know ahead of time.  At the same time, those tails of the Normal distribution are so thin, for values far away from , that it can be a good model even for a situation where there is a natural limit to the values of above or below . For example, heights of adult males (in inches) in the United States are fairly well approximated by , even though heights can never be less than and has an infinitely long tail to the left because while that tail is non-zero all the way as , it is very, very thin.  All of the above Facts are clearly true on the first graph we saw of a Normal distribution density function.   Fact  The graph of the density function for the Normal distribution has a taller and narrower peak if is smaller, and a lower and wider peak if is larger.   This allows the statistician to adjust how much variation there typically is in a normally distributed RV: By making small, we are saying that an RV which is is very likely to have values quite close to its center, . If we make large, however, is more likely to have values all over the place still, centered at , but more likely to wander farther away.  Let's make a few versions of the graph we saw for when was and was , but now with different values of . First, if , we get  [Figure: Normal distribution with mean 17 and standard deviation 1]  If, instead, , then we get  [Figure: Normal distribution with mean 17 and standard deviation 5]  Finally, let's superimpose all of the above density functions on each other, for one, combined graph:  [Figure: Three Normal distributions with mean 17 and standard deviations 1, 3, and 5 superimposed]  This variety of Normal distributions (one for each and ) is a bit bewildering, so traditionally, we concentrate on one particularly nice one.    The Normal distribution with mean and standard deviation is called the standard Normal distribution standard Normal distribution, and an RV [often written with the variable ] that is the standard Normal distribution is described as a standard Normal RV standard Normal RV .    Here is what the standard Normal probability density function looks like:  [Figure: Standard Normal distribution with mean 0 and standard deviation 1]  One nice thing about the standard Normal is that all other Normal distributions can be related to the standard.   Fact  If is , then is standard Normal.   This has a name.    The process of replacing a random variable which is with the standard normal RV is called standardizing a Normal RV standardizing a Normal RV .    It used to be that standardization was an important step in solving problems with Normal RVs. A problem would be posed with information about some data that was modelled by a Normal RV with given mean and standardization . Then questions about probabilities for that data could be answered by standardizing the RV and looking up values in a single table of areas under the standard Normal curve.  Today, with electronic tools such as statistical calculators calculator and computers, the standardization step is not really necessary.    As we noted above, the heights of adult men in the United States, when measured in inches, give a RV which is . What percentage of the population, then, is taller than feet?  First of all, the frequentist point of view on probability tells us that what we are interested in is the probability that a randomly chosen adult American male will be taller than feet that will be the same as the percentage of the population this tall. In other words, we must find the probability that , since in inches, feet becomes . As is a continuous RV, we must find the area under its density curve, which is the for , between and .  That is a little intimidating, but since the tails of the Normal distribution are very thin, we can stop measuring area when is some large number and we will have missed only a very tiny amount of area, so we will have a very good approximation. Let's therefore find the area under from up to . This can be done in many ways:   With a wide array of online tools just search for online normal probability calculator. One of these yields the value .  With a TI-8x calculator calculator , by typing  normalcdf the cumulative Normal distribution on a TI-8x calculator which yields the value . The general syntax here is to find when is . Note you get normalcdf by typing [2ND] → [VARS] → 2  Spreadsheets like LibreOffice Calc LibreOffice Calc Calc LibreOffice and Microsoft Excel Microsoft Excel MS Excel Excel Microsoft will compute this by putting the following in a cell  NORM.DIST the cumulative Normal distribution in spreadsheets giving the value 0.1419883859. Here we are using the command which computes the area under the density function for from to . [The last input of 1 to NORM.DIST just tells it that we want to compute the area under the curve. If we used 0 instead, it would simple tell us the particular value of , which is of very direct little use in probability calculations.] Therefore, by doing , we are taking the total area of 1 and subtracting the area to the left of 72, yielding the area to the right, as we wanted.  Therefore, if you want the area between and on an RV using a spreadsheet, you would put in a cell.     While standardizing standardizing a Normal RV a non-standard Normal RV and then looking up values in a table is an old-fashioned method that is tedious and no longer really needed, one old technique still comes in handy some times. It is based on the following:   Fact  The 68-95-99.7 Rule 68-95-99.7 Rule : Let be an RV. Then some special values of the area under the graph of the density curve for are nice to know:   The area under the graph of from to , also known as , is .68 .  The area under the graph of from to , also known as , is .95 .  The area under the graph of from to , also known as , is .997 .    This is also called The Empirical Rule Empirical Rule by some authors. Visually:  [Figure: The 68-95-99.7 Rule illustrated on a Normal distribution curve]  In order to use the 68-95-99.7 Rule 68-95-99.7 Rule in understanding a particular situation, it is helpful to keep an eye out for the numbers that it talks about. Therefore, when looking at a problem, one should notice if the numbers , , , , , or are ever mentioned. If so, perhaps this Rule can help.    In Example , we needed to compute where was known to be . Is 72 one of the numbers for which we should be looking, to use the Rule? Well, it's greater than , so we could hope that it was , , or . But values are none of which is what we need.  Well, it is true that , so we could use that fact and accept that we are only getting an approximate answer an odd choice, given the availability of tools which will give us extremely precise answers, but let's just go with it for a minute.  Let's see, the above Rule tells us that Now since the total area under any density curve is 1, Since the event is disjoint from the event ( only takes on one value at a time, so it cannot be simultaneously less than 66.2 and greater than 71.8), we can use the simple rule for addition of probabilities: Now, since the density function of the Normal distribution is symmetric around the line , the two terms on the right in the above equation are equal, which means that It might help to visualize the symmetry here as the equality of the two shaded areas in the following graph  [Figure: Symmetric shaded areas showing equal tail probabilities]  Now, using the fact that , we may say that which, since we know that in fact , is not a completely terrible approximation.      Let's do one more computation in the context of the heights of adult American males, as in the immediately above Example , but now one in which the 68-95-99.7 Rule 68-95-99.7 Rule gives a more precise answer.  So say we are asked this time what proportion of adult American men are shorter than 63.4 inches. Why that height, in particular? Well, it's how tall archaeologists have determined King Tut was in life. [No, that's made up. It's just a good number for this problem.]  Again, looking through the values , , and , we notice that Therefore, to answer what fraction of adult American males are shorter than 63.4 inches amounts to asking what is the value of .  What we know about is that the probability of being between those two values is . As in the previous Example, the complementary event to , which will have probability , consists of two pieces and , which have the same area by symmetry. Therefore    Just the way finding the particular values , , and in a particular situation would tell us the 68-95-99.7 Rule 68-95-99.7 Rule might be useful, so also would finding the probability values , , , or their complements , , or , or even half of one of those numbers, using the symmetry.    Continuing with the scenario of Example , let us now figure out what is the height above which there will only be .15% of the population.  Notice that .15%, or the proportion .0015, is not one of the numbers in the 68-95-99.7 Rule 68-95-99.7 Rule , nor is it one of their complements but it is half of one of the complements, being half of .003. Now, .003 is the complementary probability to .997, which was the probability in the range . As we have seen already (twice), the complementary area to that in the region between consists of two thin tails which are of equal area, each of these areas being . This all means that the beginning of that upper tail, above which value lies .15% of the population, is the value .  Therefore .15% of adult American males are taller than 77.4 inches.     "
},
{
  "id": "def-RV",
  "level": "2",
  "url": "sec-RVs.html#def-RV",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  A choice of a number for each outcome of a random experiment is called a random variable random variable, RV RV, random variable [ RV ]. If the values an RV takes can be counted, because they are either finite or countably infinite countably infinite in number, the RV is called discrete discrete random variable ; if, instead, the RV takes on all the values in an interval of real numbers, the RV is called continuous continuous random variable .  We usually use capital letters to denote RVs and the corresponding lowercase letter to indicate a particular numerical value the RV might have, like and .   "
},
{
  "id": "eg-RV1",
  "level": "2",
  "url": "sec-RVs.html#eg-RV1",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  Suppose we play a silly game where you pay me $5 to play, then I flip a fair coin fair coin coin fair and I give you $10 if the coin comes up heads and $0 if it comes up tails. Then your net winnings, which would be +$5 or -$5 each time you play, are a random variable. Having only two possible values, this RV is certainly discrete.   "
},
{
  "id": "eg-RV2",
  "level": "2",
  "url": "sec-RVs.html#eg-RV2",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  Weather phenomena vary so much, due to such small effects such as the famous butterfly flapping its wings in the Amazon rain forest causing a hurricane in North America that they appear to be a random phenomenon. Therefore, observing the temperature at some weather station is a continuous random variable whose value can be any real number in some range like to (we're doing science , so we use ).   "
},
{
  "id": "eg-RV3",
  "level": "2",
  "url": "sec-RVs.html#eg-RV3",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Suppose we look at the roll two fair dice independently experiment from Example and Example , which was based on the probability model in Example and sample space in Example . Let us consider in this situation the random variable whose value for some pair of dice rolls is the sum of the two numbers showing on the dice. So, for example, , , etc.  In fact, let's make a table of all the values of :   "
},
{
  "id": "def-RVdistribution",
  "level": "2",
  "url": "sec-RVs.html#def-RVdistribution",
  "type": "Definition",
  "number": "4.3.5",
  "title": "",
  "body": "  Given a discrete RV , its distribution distribution is a list of all of the values takes on, together with the probability of it taking that value.   "
},
{
  "id": "eg-distribution1",
  "level": "2",
  "url": "sec-RVs.html#eg-distribution1",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Let's look at the RV, which we will call , in the silly betting game of Example . As we noticed when we first defined that game, there are two possible values for this RV, $5 and -$5. We can actually think of as describing an event, consisting of the set of all outcomes of the coin-flipping experiment which give you a net gain of $5. Likewise, describes the event consisting of the set of all outcomes which give you a net gain of -$5. These events are as follows:  [Table showing: column with values 5 and -5, and corresponding outcomes column with {H} and {T}]  Since it is a fair coin fair coin coin fair so the probabilities of these events are known (and very simple), we conclude that the distribution of this RV is the table  [Distribution table: = 5 with , and = -5 with ]   "
},
{
  "id": "eg-distribution2",
  "level": "2",
  "url": "sec-RVs.html#eg-distribution2",
  "type": "Example",
  "number": "4.3.7",
  "title": "",
  "body": "  What about the RV on the roll two fair dice, independently random experiment from Example ? We have actually already done most of the work, finding out what values the RV can take and which outcomes cause each of those values. To summarize what we found:  [Table showing outcomes for each sum value from 2 to 12]  But we have seen that this is an equiprobable situation, where the probability of any event contain outcomes is , so we can instantly fill in the distribution table for this RV as  [Distribution table showing probabilities: ]   "
},
{
  "id": "def-expectation",
  "level": "2",
  "url": "sec-RVs.html#def-expectation",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": "  Given a discrete RV which takes on the values with probabilities , the expectation expectation [sometimes also called the expected value expected value ] of is the value   "
},
{
  "id": "eg-expect1",
  "level": "2",
  "url": "sec-RVs.html#eg-expect1",
  "type": "Example",
  "number": "4.3.9",
  "title": "",
  "body": "  Let's compute the expectation of net profit RV in the silly betting game of Example , whose distribution we computed in Example . Plugging straight into the definition, we see In other words, your average net gain playing this silly game many times will be zero . Note that does not mean anything like if you lose enough times in a row, the chances of starting to win again will go up , as many gamblers seem to believe, it just means that, in the very long run, we can expect the average winnings to be approximately zero but no one knows how long that run has to be before the balancing of wins and losses happens.   "
},
{
  "id": "eg-expect2",
  "level": "2",
  "url": "sec-RVs.html#eg-expect2",
  "type": "Example",
  "number": "4.3.10",
  "title": "",
  "body": "  In Example we computed the distribution of the random variable on the roll two fair dice, independently random experiment from Example . It is therefore easy to plug the values of the probabilities and RV values from the distribution table into the formula for expectation, to get So if you roll two fair dice independently and add the numbers which come up, then do this process many times and take the average, in the long run that average will be the value .   "
},
{
  "id": "def-densitycurve",
  "level": "2",
  "url": "sec-RVs.html#def-densitycurve",
  "type": "Definition",
  "number": "4.3.11",
  "title": "",
  "body": "  Let be a continuous random variable whose values are the real interval , where either or or both may be . A [ probability probability density function, for a continuous random variable ] density function density function, for a continuous random variable for is a function defined for in , meaning it is a curve with one value for each in that interval, with the property that   "
},
{
  "id": "def-uniformdistr",
  "level": "2",
  "url": "sec-RVs.html#def-uniformdistr",
  "type": "Definition",
  "number": "4.3.12",
  "title": "",
  "body": "  The uniform distribution on uniform distribution on is the distribution for the continuous RV whose values are the interval and whose density function is the constant function .   "
},
{
  "id": "eg-unifdistr1",
  "level": "2",
  "url": "sec-RVs.html#eg-unifdistr1",
  "type": "Example",
  "number": "4.3.13",
  "title": "",
  "body": "  Suppose you take a bus to school every day and because of a chaotic home life (and, let's face it, you don't like mornings), you get to the bus stop at a pretty nearly perfectly random time. The bus also doesn't stick perfectly to its schedule but it is guaranteed to come at least every minutes. What this adds up to is the idea that your waiting time at the bus stop is a uniformly distributed RV on the interval .  If you wonder one morning how likely it then is that you will wait for less than minutes, you can simply compute the area of the rectangle whose base is the interval on the -axis and whose height is , which will be  [Figure: Bus waiting time uniform distribution showing shaded area from 0 to 10 minutes]  where the area of the shaded region represents the probability of having a waiting time from to minutes.   "
},
{
  "id": "eg-triangleDistr",
  "level": "2",
  "url": "sec-RVs.html#eg-triangleDistr",
  "type": "Example",
  "number": "4.3.14",
  "title": "",
  "body": "  Suppose you repeatedly throw darts at a dartboard. You're not a machine, so the darts hit in different places every time and you think of this as a repeatable random experiment whose outcomes are the locations of the dart on the board. You're interested in the probabilities of getting close to the center of the board, so you decide for each experimental outcome (location of a dart you threw) to measure its distance to the center this will be your RV .  Being good at this game, you hit near the center more than near the edge and you never completely miss the board, whose radius is  so is more likely to be near than near , and it is never greater than . What this means is that the RV has values forming the interval and the density function, defined on the same interval, should have its maximum value at and should go down to the value when .  You decide to model this situation with the simplest density function you can think of that has the properties we just noticed: a straight line from the highest point of the density function when down to the point . The figure that will result will be a triangle, and since the total area must be and the base is units long, the height must be units. [To get that, we solved the equation for .] So the graph must be  [Figure: Triangular density function for dart hitting distance]  and the equation of this linear density function would be [why? think about the slope and -intercept!].  To the extent that you trust this model, you can now calculate the probabilities of events like, for example, hitting the board within that center bull's-eye of radius , which probability would be the area of the shaded region in this graph:  [Figure: Dart hitting bull's-eye probability shown as shaded trapezoid]  The upper-right corner of this shaded region is at -coordinate and is on the line, so its -coordinate is . Since the region is a trapezoid, its area is the distance between the two parallel sides times the average of the lengths of the other two sides, giving In other words, the probability of hitting the bull's-eye, assuming this model of your dart-throwing prowess, is about %.  If you don't remember the formula for the area of a trapezoid, you can do this problem another way: compute the probability of the complementary event, and then take one minus that number. The reason to do this would be that the complementary event corresponds to the shaded region here  [Figure: Complementary event showing triangular region]  which is a triangle! Since we surely do remember the formula for the area of a triangle, we find that and therefore . [It's nice that we got the same number this way, too!]   "
},
{
  "id": "def-generalNormalDist",
  "level": "2",
  "url": "sec-RVs.html#def-generalNormalDist",
  "type": "Definition",
  "number": "4.3.15",
  "title": "",
  "body": "  The Normal distribution with mean and standard deviation Normal distribution with mean and standard deviation is the continuous RV which takes on all real values and is governed by the probability density function probability density function, for a continuous random variable density function, for a continuous random variable  If is a random variable which follows this distribution, then we say that is Normally distributed with mean and standard deviation Normally distributed with mean and standard deviation , or, in symbols, is Normally distributed with mean and standard deviation .   "
},
{
  "id": "def-standardNormalDist",
  "level": "2",
  "url": "sec-RVs.html#def-standardNormalDist",
  "type": "Definition",
  "number": "4.3.16",
  "title": "",
  "body": "  The Normal distribution with mean and standard deviation is called the standard Normal distribution standard Normal distribution, and an RV [often written with the variable ] that is the standard Normal distribution is described as a standard Normal RV standard Normal RV .   "
},
{
  "id": "def-standardization",
  "level": "2",
  "url": "sec-RVs.html#def-standardization",
  "type": "Definition",
  "number": "4.3.17",
  "title": "",
  "body": "  The process of replacing a random variable which is with the standard normal RV is called standardizing a Normal RV standardizing a Normal RV .   "
},
{
  "id": "eg-normalcomp",
  "level": "2",
  "url": "sec-RVs.html#eg-normalcomp",
  "type": "Example",
  "number": "4.3.18",
  "title": "",
  "body": "  As we noted above, the heights of adult men in the United States, when measured in inches, give a RV which is . What percentage of the population, then, is taller than feet?  First of all, the frequentist point of view on probability tells us that what we are interested in is the probability that a randomly chosen adult American male will be taller than feet that will be the same as the percentage of the population this tall. In other words, we must find the probability that , since in inches, feet becomes . As is a continuous RV, we must find the area under its density curve, which is the for , between and .  That is a little intimidating, but since the tails of the Normal distribution are very thin, we can stop measuring area when is some large number and we will have missed only a very tiny amount of area, so we will have a very good approximation. Let's therefore find the area under from up to . This can be done in many ways:   With a wide array of online tools just search for online normal probability calculator. One of these yields the value .  With a TI-8x calculator calculator , by typing  normalcdf the cumulative Normal distribution on a TI-8x calculator which yields the value . The general syntax here is to find when is . Note you get normalcdf by typing [2ND] → [VARS] → 2  Spreadsheets like LibreOffice Calc LibreOffice Calc Calc LibreOffice and Microsoft Excel Microsoft Excel MS Excel Excel Microsoft will compute this by putting the following in a cell  NORM.DIST the cumulative Normal distribution in spreadsheets giving the value 0.1419883859. Here we are using the command which computes the area under the density function for from to . [The last input of 1 to NORM.DIST just tells it that we want to compute the area under the curve. If we used 0 instead, it would simple tell us the particular value of , which is of very direct little use in probability calculations.] Therefore, by doing , we are taking the total area of 1 and subtracting the area to the left of 72, yielding the area to the right, as we wanted.  Therefore, if you want the area between and on an RV using a spreadsheet, you would put in a cell.    "
},
{
  "id": "p-551",
  "level": "2",
  "url": "sec-RVs.html#p-551",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The 68-95-99.7 Rule "
},
{
  "id": "p-552",
  "level": "2",
  "url": "sec-RVs.html#p-552",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ".68 "
},
{
  "id": "p-553",
  "level": "2",
  "url": "sec-RVs.html#p-553",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ".95 "
},
{
  "id": "p-554",
  "level": "2",
  "url": "sec-RVs.html#p-554",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ".997 "
},
{
  "id": "p-555",
  "level": "2",
  "url": "sec-RVs.html#p-555",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Empirical Rule "
},
{
  "id": "eg-use68-95-99-7-1",
  "level": "2",
  "url": "sec-RVs.html#eg-use68-95-99-7-1",
  "type": "Example",
  "number": "4.3.19",
  "title": "",
  "body": "  In Example , we needed to compute where was known to be . Is 72 one of the numbers for which we should be looking, to use the Rule? Well, it's greater than , so we could hope that it was , , or . But values are none of which is what we need.  Well, it is true that , so we could use that fact and accept that we are only getting an approximate answer an odd choice, given the availability of tools which will give us extremely precise answers, but let's just go with it for a minute.  Let's see, the above Rule tells us that Now since the total area under any density curve is 1, Since the event is disjoint from the event ( only takes on one value at a time, so it cannot be simultaneously less than 66.2 and greater than 71.8), we can use the simple rule for addition of probabilities: Now, since the density function of the Normal distribution is symmetric around the line , the two terms on the right in the above equation are equal, which means that It might help to visualize the symmetry here as the equality of the two shaded areas in the following graph  [Figure: Symmetric shaded areas showing equal tail probabilities]  Now, using the fact that , we may say that which, since we know that in fact , is not a completely terrible approximation.   "
},
{
  "id": "eg-use68-95-99-7-2",
  "level": "2",
  "url": "sec-RVs.html#eg-use68-95-99-7-2",
  "type": "Example",
  "number": "4.3.20",
  "title": "",
  "body": "  Let's do one more computation in the context of the heights of adult American males, as in the immediately above Example , but now one in which the 68-95-99.7 Rule 68-95-99.7 Rule gives a more precise answer.  So say we are asked this time what proportion of adult American men are shorter than 63.4 inches. Why that height, in particular? Well, it's how tall archaeologists have determined King Tut was in life. [No, that's made up. It's just a good number for this problem.]  Again, looking through the values , , and , we notice that Therefore, to answer what fraction of adult American males are shorter than 63.4 inches amounts to asking what is the value of .  What we know about is that the probability of being between those two values is . As in the previous Example, the complementary event to , which will have probability , consists of two pieces and , which have the same area by symmetry. Therefore   "
},
{
  "id": "eg-use68-95-99-7-3",
  "level": "2",
  "url": "sec-RVs.html#eg-use68-95-99-7-3",
  "type": "Example",
  "number": "4.3.21",
  "title": "",
  "body": "  Continuing with the scenario of Example , let us now figure out what is the height above which there will only be .15% of the population.  Notice that .15%, or the proportion .0015, is not one of the numbers in the 68-95-99.7 Rule 68-95-99.7 Rule , nor is it one of their complements but it is half of one of the complements, being half of .003. Now, .003 is the complementary probability to .997, which was the probability in the range . As we have seen already (twice), the complementary area to that in the region between consists of two thin tails which are of equal area, each of these areas being . This all means that the beginning of that upper tail, above which value lies .15% of the population, is the value .  Therefore .15% of adult American males are taller than 77.4 inches.   "
},
{
  "id": "sec-probability-exercises",
  "level": "1",
  "url": "sec-probability-exercises.html",
  "type": "Section",
  "number": "4.4",
  "title": "Exercises",
  "body": " Exercises   A basketball player shoots four free throws, and you write down the sequence of hits and misses. Write down the sample space for thinking of this whole thing as a random experiment.  In another game, a basketball player shoots four free throws, and you write down the number of baskets she makes. Write down the sample space for this different random experiment.    You take a normal, six-sided die, paint over all the sides, and then write the letter A on all six sides. You then roll the die. What is the sample space of this experiment? Also, list all the possible events for this experiment. [Hint: it may help to look at .]  Now you paint it over again, and write A on half the sides and B on the other half. Again, say what is the sample space and list all possible events.  One more time you paint over the sides, then write A on one third of the faces, B on one third of the other faces, and C on the remaining third. Again, give the sample space and all events.  Make a conjecture about how many events there will be if the sample space has outcomes in it.    Describe a random experiment whose sample space will be the set of all points on the (standard, 2-dimensional, -) plane.    The most common last [family] name in the world seems to be Wang [or the variant Wong]. Approximately 1.3% of the global population has this last name.  The most common first name in the world seems to be Mohammad [or one of several variants]. Some estimates suggest that perhaps as many as 2% of the global population has this first name.  Can you tell, from the above information, what percentage of the world population has the name Mohammad Wang? If so, why and what would it be? If not, why not, and can you make any guess about what that percentage would be, anyway?  [Hint: think of all the above percentages as probabilities, where the experiment is picking a random person on Earth and asking their name. Carefully describe some events for this experiment, relevant to this problem, and say what their probabilities are. Tell how combining events will or will not compute the probability of the desired event, corresponding to the desired percentage.]  [Note: don't bet on the numbers given in this problem being too accurate they might be, but there is a wide range of published values for them in public information from different sources, so probably they are only a very crude approximation.]    Suppose that when people have kids, the chance of having a boy or a girl is the same. Suppose also that the sexes of successive children in the same family are independent. [Neither of these is exactly true in real life, but let's pretend for this problem.]  The Wang family has two children. If we think of the sexes of these children as the result of a random experiment, what is the sample space? Note that we're interested in birth order as well, so that should be apparent from the sample space.  What are the probabilities of each of the outcomes in your sample space? Why?  Now suppose we know that at least one of the Wang children is a boy. Given this information, what is the probability that the Wangs have two boys?  Suppose instead that we know that the Wangs' older child is a boy. What is the probability, given this different information, that both Wang children are boys?  To solve this, clearly define events in words and with symbols, compute probabilities, and combine these to get the desired probability. Explain everything you do, of course.    Imagine you live on a street with a stop light at both ends of the block. You watch cars driving down the street and notice which ones have to stop at the and\/or light (or none). After counting cars and stops for a year, you have seen what a very large number call it  of cars did. Now imagine you decide to think about the experiment pick a car on this street from the last year at random and notice at which light or lights it has to stop .  Let be the event the car had to stop at the light and be the event the car had to stop at the light . What else would you have to count, over your year of data collection, to estimate the probabilities of and of ? Pick some numbers for all of these variables and show what the probabilities would then be.  Make a Venn diagram of this situation. Label each of the four connected regions of this diagram (the countries, if this were a map) with a number from to , then provide a key which gives, for each of these numbered regions, both a formula in terms of , , unions, intersections, and\/or complements, and then also a description entirely in words which do not mention or or set operations at all. Then put a decimal number in each of the regions indicating the probability of the corresponding event.  Wait for one of the regions, you can't fill in the probability yet, with the information you've collected so far. What else would you have had to count over the data-collection year to estimate this probability? Make up a number and show what the corresponding probability would then be, and add that number to your Venn diagram.  Finally, using the probabilities you have chosen, are the events and independent? Why or why not? Explain in words what this means, in this context.    Here is a table of the prizes for the EnergyCube Lottery:  [Table: Prize | Odds of winning $1,000,000 | 1 in 12,000,000 $50,000 | 1 in 1,000,000 $100 | 1 in 10,000 $7 | 1 in 300 $4 | 1 in 25]  We want to transform the above into the [probability] distribution of a random variable .  First of all, let's make represent the net gain a Lottery player would have for the various outcomes of playing note that the ticket to play costs $2. How would you modify the above numbers to take into account the ticket costs?  Next, notice that the above table gives winning odds , not probabilities. How will you compute the probabilities from those odds? Recall that saying something has odds of 1 in means that it tends to happen about once out of runs of the experiment. You might use the word frequentist somewhere in your answer here.  Finally, something is missing from the above table of outcomes. What prize actually the most common one! is missing from the table, and how will you figure out its probability?  After giving all of the above explanations, now write down the full, formal, probability distribution for this net gain in EnergyCube Lottery plays random variable, .  In this problem, some of the numbers are quite small and will disappear entirely if you round them. So use a calculator calculator or computer to compute everything here and keep as much accuracy as your device shows for each step of the calculation.    Continuing with the same scenario as in the previous , with the EnergyCube Lottery: What would be your expectation of the average gain per play of this Lottery? Explain fully, of course.  So if you were to play every weekday for a school year (so: five days a week for the 15 weeks of each semester, two semesters in the year), how much would you expect to win or lose in total?  Again, use as much accuracy as your computational device has, at every step of these calculations.    Last problem in the situation of the above about the EnergyCube Lottery: Suppose your friend plays the lottery and calls you to tell you that she won but her cell phone runs out of charge in the middle of the call, and you don't know how much she won. Given the information that she won, what is the probability that she won more than $1,000?  Continue to use as much numerical accuracy as you can.    Let's make a modified version of . You are again throwing darts at a dartboard, but you notice that you are very left-handed so your throws pull to the right much more than they pull to the left. What this means is that it is not a very good model of your dart throws just to notice how far they are from the center of the dartboard, it would be better to notice the -coordinate of where the dart hits, measuring (in ) with the center of the board at location . This will be your new choice of RV, which you will still call .  You throw repeatedly at the board, measure , and find out that you never hit more than to the right of the center, while you are more accurate to the left and never hit more than in that direction. You do hit the middle ( ) the most often, and you guess that the probability decreases linearly to those edges where you never hit.  Explain why your is a continuous continuous random variable RV, and what its interval of values is.  Now sketch the graph of the probability density function for . [Hint: it will be a triangle, with one side along the interval of values on the -axis, and its maximum at the center of the dartboard.] Make sure that you put tick marks and numbers on the axes, enough so that the coordinates of the corners of the triangular graph can be seen easily. [Another hint: it is a useful fact that the total area under the graph of any probability density function is .]  What is the probability that your next throw will be in the bull's-eye, whose radius, remember, is and which therefore stretches from coordinate to -coordinate ?    Here's our last discussion of dartboards [maybe?]: One of the problems with the probability density function approaches from and is the assumption that the functions were linear (at least in pieces). It would be much more sensible to assume they were more bell-shaped , maybe like the Normal distribution.  Suppose your friend Mohammad Wang is an excellent dart-player. He throws at a board and you measure the -coordinate of where the dart goes, as in with the center corresponding to . You notice that his darts are rarely only 5% of the time in total! more than from the center of the board.  Fill in the blanks: MW's dart hits' -coordinates are an RV which is Normally distributed with mean ______ and standard deviation ______. Explain, of course.  How often does MW completely miss the dartboard? Its radius is .  How often does he hit the bull's-eye? Remember its radius is , meaning that it stretches from coordinate to -coordinate .   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec-probability-exercises.html#exercise-17",
  "type": "Checkpoint",
  "number": "4.4.1",
  "title": "",
  "body": " A basketball player shoots four free throws, and you write down the sequence of hits and misses. Write down the sample space for thinking of this whole thing as a random experiment.  In another game, a basketball player shoots four free throws, and you write down the number of baskets she makes. Write down the sample space for this different random experiment.  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "sec-probability-exercises.html#exercise-18",
  "type": "Checkpoint",
  "number": "4.4.2",
  "title": "",
  "body": " You take a normal, six-sided die, paint over all the sides, and then write the letter A on all six sides. You then roll the die. What is the sample space of this experiment? Also, list all the possible events for this experiment. [Hint: it may help to look at .]  Now you paint it over again, and write A on half the sides and B on the other half. Again, say what is the sample space and list all possible events.  One more time you paint over the sides, then write A on one third of the faces, B on one third of the other faces, and C on the remaining third. Again, give the sample space and all events.  Make a conjecture about how many events there will be if the sample space has outcomes in it.  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec-probability-exercises.html#exercise-19",
  "type": "Checkpoint",
  "number": "4.4.3",
  "title": "",
  "body": " Describe a random experiment whose sample space will be the set of all points on the (standard, 2-dimensional, -) plane.  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec-probability-exercises.html#exercise-20",
  "type": "Checkpoint",
  "number": "4.4.4",
  "title": "",
  "body": " The most common last [family] name in the world seems to be Wang [or the variant Wong]. Approximately 1.3% of the global population has this last name.  The most common first name in the world seems to be Mohammad [or one of several variants]. Some estimates suggest that perhaps as many as 2% of the global population has this first name.  Can you tell, from the above information, what percentage of the world population has the name Mohammad Wang? If so, why and what would it be? If not, why not, and can you make any guess about what that percentage would be, anyway?  [Hint: think of all the above percentages as probabilities, where the experiment is picking a random person on Earth and asking their name. Carefully describe some events for this experiment, relevant to this problem, and say what their probabilities are. Tell how combining events will or will not compute the probability of the desired event, corresponding to the desired percentage.]  [Note: don't bet on the numbers given in this problem being too accurate they might be, but there is a wide range of published values for them in public information from different sources, so probably they are only a very crude approximation.]  "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "sec-probability-exercises.html#exercise-21",
  "type": "Checkpoint",
  "number": "4.4.5",
  "title": "",
  "body": " Suppose that when people have kids, the chance of having a boy or a girl is the same. Suppose also that the sexes of successive children in the same family are independent. [Neither of these is exactly true in real life, but let's pretend for this problem.]  The Wang family has two children. If we think of the sexes of these children as the result of a random experiment, what is the sample space? Note that we're interested in birth order as well, so that should be apparent from the sample space.  What are the probabilities of each of the outcomes in your sample space? Why?  Now suppose we know that at least one of the Wang children is a boy. Given this information, what is the probability that the Wangs have two boys?  Suppose instead that we know that the Wangs' older child is a boy. What is the probability, given this different information, that both Wang children are boys?  To solve this, clearly define events in words and with symbols, compute probabilities, and combine these to get the desired probability. Explain everything you do, of course.  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "sec-probability-exercises.html#exercise-22",
  "type": "Checkpoint",
  "number": "4.4.6",
  "title": "",
  "body": " Imagine you live on a street with a stop light at both ends of the block. You watch cars driving down the street and notice which ones have to stop at the and\/or light (or none). After counting cars and stops for a year, you have seen what a very large number call it  of cars did. Now imagine you decide to think about the experiment pick a car on this street from the last year at random and notice at which light or lights it has to stop .  Let be the event the car had to stop at the light and be the event the car had to stop at the light . What else would you have to count, over your year of data collection, to estimate the probabilities of and of ? Pick some numbers for all of these variables and show what the probabilities would then be.  Make a Venn diagram of this situation. Label each of the four connected regions of this diagram (the countries, if this were a map) with a number from to , then provide a key which gives, for each of these numbered regions, both a formula in terms of , , unions, intersections, and\/or complements, and then also a description entirely in words which do not mention or or set operations at all. Then put a decimal number in each of the regions indicating the probability of the corresponding event.  Wait for one of the regions, you can't fill in the probability yet, with the information you've collected so far. What else would you have had to count over the data-collection year to estimate this probability? Make up a number and show what the corresponding probability would then be, and add that number to your Venn diagram.  Finally, using the probabilities you have chosen, are the events and independent? Why or why not? Explain in words what this means, in this context.  "
},
{
  "id": "exc-EClottery",
  "level": "2",
  "url": "sec-probability-exercises.html#exc-EClottery",
  "type": "Checkpoint",
  "number": "4.4.7",
  "title": "",
  "body": " Here is a table of the prizes for the EnergyCube Lottery:  [Table: Prize | Odds of winning $1,000,000 | 1 in 12,000,000 $50,000 | 1 in 1,000,000 $100 | 1 in 10,000 $7 | 1 in 300 $4 | 1 in 25]  We want to transform the above into the [probability] distribution of a random variable .  First of all, let's make represent the net gain a Lottery player would have for the various outcomes of playing note that the ticket to play costs $2. How would you modify the above numbers to take into account the ticket costs?  Next, notice that the above table gives winning odds , not probabilities. How will you compute the probabilities from those odds? Recall that saying something has odds of 1 in means that it tends to happen about once out of runs of the experiment. You might use the word frequentist somewhere in your answer here.  Finally, something is missing from the above table of outcomes. What prize actually the most common one! is missing from the table, and how will you figure out its probability?  After giving all of the above explanations, now write down the full, formal, probability distribution for this net gain in EnergyCube Lottery plays random variable, .  In this problem, some of the numbers are quite small and will disappear entirely if you round them. So use a calculator calculator or computer to compute everything here and keep as much accuracy as your device shows for each step of the calculation.  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "sec-probability-exercises.html#exercise-24",
  "type": "Checkpoint",
  "number": "4.4.8",
  "title": "",
  "body": " Continuing with the same scenario as in the previous , with the EnergyCube Lottery: What would be your expectation of the average gain per play of this Lottery? Explain fully, of course.  So if you were to play every weekday for a school year (so: five days a week for the 15 weeks of each semester, two semesters in the year), how much would you expect to win or lose in total?  Again, use as much accuracy as your computational device has, at every step of these calculations.  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec-probability-exercises.html#exercise-25",
  "type": "Checkpoint",
  "number": "4.4.9",
  "title": "",
  "body": " Last problem in the situation of the above about the EnergyCube Lottery: Suppose your friend plays the lottery and calls you to tell you that she won but her cell phone runs out of charge in the middle of the call, and you don't know how much she won. Given the information that she won, what is the probability that she won more than $1,000?  Continue to use as much numerical accuracy as you can.  "
},
{
  "id": "exc-dartboardtriangle",
  "level": "2",
  "url": "sec-probability-exercises.html#exc-dartboardtriangle",
  "type": "Checkpoint",
  "number": "4.4.10",
  "title": "",
  "body": " Let's make a modified version of . You are again throwing darts at a dartboard, but you notice that you are very left-handed so your throws pull to the right much more than they pull to the left. What this means is that it is not a very good model of your dart throws just to notice how far they are from the center of the dartboard, it would be better to notice the -coordinate of where the dart hits, measuring (in ) with the center of the board at location . This will be your new choice of RV, which you will still call .  You throw repeatedly at the board, measure , and find out that you never hit more than to the right of the center, while you are more accurate to the left and never hit more than in that direction. You do hit the middle ( ) the most often, and you guess that the probability decreases linearly to those edges where you never hit.  Explain why your is a continuous continuous random variable RV, and what its interval of values is.  Now sketch the graph of the probability density function for . [Hint: it will be a triangle, with one side along the interval of values on the -axis, and its maximum at the center of the dartboard.] Make sure that you put tick marks and numbers on the axes, enough so that the coordinates of the corners of the triangular graph can be seen easily. [Another hint: it is a useful fact that the total area under the graph of any probability density function is .]  What is the probability that your next throw will be in the bull's-eye, whose radius, remember, is and which therefore stretches from coordinate to -coordinate ?  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec-probability-exercises.html#exercise-27",
  "type": "Checkpoint",
  "number": "4.4.11",
  "title": "",
  "body": " Here's our last discussion of dartboards [maybe?]: One of the problems with the probability density function approaches from and is the assumption that the functions were linear (at least in pieces). It would be much more sensible to assume they were more bell-shaped , maybe like the Normal distribution.  Suppose your friend Mohammad Wang is an excellent dart-player. He throws at a board and you measure the -coordinate of where the dart goes, as in with the center corresponding to . You notice that his darts are rarely only 5% of the time in total! more than from the center of the board.  Fill in the blanks: MW's dart hits' -coordinates are an RV which is Normally distributed with mean ______ and standard deviation ______. Explain, of course.  How often does MW completely miss the dartboard? Its radius is .  How often does he hit the bull's-eye? Remember its radius is , meaning that it stretches from coordinate to -coordinate .  "
},
{
  "id": "sec-SoaSPC",
  "level": "1",
  "url": "sec-SoaSPC.html",
  "type": "Section",
  "number": "5.1",
  "title": "Studies of a Population Parameter",
  "body": " Studies of a Population Parameter   "
},
{
  "id": "sec-SoC",
  "level": "1",
  "url": "sec-SoC.html",
  "type": "Section",
  "number": "5.2",
  "title": "Studies of Causality",
  "body": " Studies of Causality    Control Groups     Human-Subject Experiments: The Placebo Effect     Blinding     Combining it all: RCTs     Confounded Lurking Variables    "
},
{
  "id": "sec-EE",
  "level": "1",
  "url": "sec-EE.html",
  "type": "Section",
  "number": "5.3",
  "title": "Experimental Ethics",
  "body": " Experimental Ethics    \"Do No Harm\"     Informed Consent     Confidentiality     External Oversight [IRB]    "
},
{
  "id": "sec-bringing-home-exercises",
  "level": "1",
  "url": "sec-bringing-home-exercises.html",
  "type": "Section",
  "number": "5.4",
  "title": "Exercises",
  "body": " Exercises   "
},
{
  "id": "sec-CLT",
  "level": "1",
  "url": "sec-CLT.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Central Limit Theorem",
  "body": " The Central Limit Theorem   "
},
{
  "id": "sec-BCIs",
  "level": "1",
  "url": "sec-BCIs.html",
  "type": "Section",
  "number": "6.2",
  "title": "Basic Confidence Intervals",
  "body": " Basic Confidence Intervals    Cautions    "
},
{
  "id": "sec-BHT",
  "level": "1",
  "url": "sec-BHT.html",
  "type": "Section",
  "number": "6.3",
  "title": "Basic Hypothesis Testing",
  "body": " Basic Hypothesis Testing    The Formal Steps of Hypothesis Testing     How Small is Small Enough, for p-values?     Calculations for Hypothesis Testing of Population Means     Cautions    "
},
{
  "id": "sec-basic-inferences-exercises",
  "level": "1",
  "url": "sec-basic-inferences-exercises.html",
  "type": "Section",
  "number": "6.4",
  "title": "Exercises",
  "body": " Exercises   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
