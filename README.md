# Event Countdown

## Overview

Built this app back in November 2023 while I, hardworking employee in the Philippines, eagerly awaited for the best part of the year — our bonuses! Whether it’s the 13th Month Pay, Christmas Bonus, or the Individual Performance Bonus, I know the feeling of checking the calendar like it’s the countdown to a holiday. This app’s here to make sure we don’t miss a second of that sweet, sweet bonus time!

You can also use it to create your own countdowns for personal events!

## How to Use

Simply add your events to the `countdownEvents` array, and you're good to go! The app will automatically handle the countdowns and display them in a user-friendly format.

**Example**

`const countdownEvents = [
{ name: "13th Month Pay", date: "12-15-2023" },
{ name: "Christmas Bonus", date: "12-20-2023" },
{ name: "Personal Event", date: "01-01-2024" }
];`

## How to Run Using VSCode Live Server

Quickly preview your scroll animations by following these steps:

1. **Open Your Project in VSCode**.
2. **Install Live Server Extension**:

   - Search for **Live Server** in the VSCode extensions marketplace and install it.

3. **Launch Your Project:**

   - Right-click your `index.html` (or relevant HTML file).
   - Select **Open with Live Server**.

   Your project will open in your browser, and you’ll see the scroll animations as you scroll down the page.

## Using VSCode Sass Extension for SCSS Compilation

For those using SCSS, here’s how to compile it into CSS:

1. **Install the Sass Extension for VSCode:**

   - Search for **Sass** in the VSCode marketplace and click **Install**.

2. Compile SCSS Automatically:

   - Open your `index.scss` file.
   - Click **Watch Sass** in the status bar at the bottom of VSCode.

3. **Check the Output:**

   - Your **animateOnScroll.css** will now be available, ready to be included in your project.

This setup ensures a smooth development experience while working with SCSS.

## Conclusion

And that’s a wrap! With this Event Countdown app, you’re all set to track important events like bonuses or any personal milestones. It’s simple to use—just add your events to the countdownEvents array and watch the countdowns in action. The smooth scroll animations enhance the experience, making it more dynamic and engaging. Whether you're waiting for the next big payout or celebrating a special day, this app ensures you never miss a moment. Ready to go? Let the countdown begin!
