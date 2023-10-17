# Web Development Project 5 - *Recipe Dash*

Submitted by: **Sean Craig**

This web app: **This website is meant to access the spoonacular API to grab recipies and allow users to enter queries to search for recipes. With those recipes the site will display data like the mean of calories/servings for that food item as well as the mean for sugar and protein.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [✓] **The list displays a list of data fetched using an API call**
- [✓] **Data uses the useEffect React hook and async/await syntax**
- [ ] **The app dashboard includes at least three summary statistics about the data such as**
  - [ ] *insert details*
- [✓] **A search bar allows the user to search for an item in the fetched data**
- [ ] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of what I have to show as of 10/16/2023:
https://imgur.com/a/bZ90oKU

<img src='https://imgur.com/a/bZ90oKU.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

I underestimated the amount of time I needed to get at least the required features implemented. I spent a good amount of time trying to figure out why useEffect with [] for parameters was being called twice, and so in testing I was depleeting my limited number of free API calls pretty fast. As a result of this I wasn't able to finish everything I wanted to though my pace was starting to pick up. You can see in my walkthrough video how the console exposes me for having run out of API calls. Another thing that was unexpected was that different API querries would give me different objects with different data keys to access. I guess it never occured to me that this might happen. This forced me to revamp my approach 2-3 times. CSS is frustrating as always but ChatGPT is very helpful, though there's nothing I can do about having no more API calls. Frustrating!

## License

    Copyright 2023 Sean Craig

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.