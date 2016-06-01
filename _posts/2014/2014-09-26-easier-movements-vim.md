---
layout: blog/show
title: Easier movements in vim
date: 2014-09-26 09:35:25.000000000 -04:00
---

As a recent adopter of vim, I'll admit I fell into a trap. I removed arrow key support in an attempt to do things the "vim way", only to use `hjkl` the same way as I would have the arrow keys. I missed the point entirely, moving around the editor completely inefficiently. And I suspect others have fallen into the same trap. In an attempt to help others break out of the inefficiencies I'm also guilty of, I'd like to share a couple of ways to force yourself to adopt true vim proficiency.

### Tips before you get started

 One tip I've heard from vim experts is something that anyone coming from a traditional editor is a bit uncomfortable with: stay out of insert mode as often as possible. You should only enter insert mode when you need to type something; after that, escape back into normal mode as quickly as possible. There's a reason it's called "normal" mode; it's vim's normal state! Learning to navigate in normal mode, insert and jump back into normal mode is a quick way to remove dependence on either the arrow keys or `hjkl`. Another thing I did is turn on relative numbers in my `.vimrc` file. Relative numbering ensures that *every* line you are currently on is line 0, so you're never more than 16 or so lines above or below the line you're getting to. This is good for navigating, as instead of having to mentally count how many lines down from your cursor that next method you're shooting for is, you can just look at the line number and type something like `6j`, for instance. 
 
### General tips

#### Use word-wise movements

 Navigating across words can be **much** faster than navigating via `h` or `l`. The basic word-wise movements are `w` and `b`: `w` moves to the beginning of the next word, and `b` moves to the beginning of the previous word. #### Use `f` or `t` to find in a line

 If you're already on a line that you need to edit, you can't do better than the `f` command. `f` finds the first instance of whatever you type next. So, if you're looking for an opening parenthesis, typing `f(` will do it for you. If you'd like to land on the character *before* the parenthesis, `t` is for you: `t(` will bring you to the character before the opening parenthesis.
 
### Tips not for the faint of heart

 These tips might be hardcore, but they aren't without merit. Both of these tips are designed to take you out of your comfort zone, but they also force thought. Because you're no longer *able* to navigate in a way you're comfortable, you'll naturally figure out more efficient ways of moving around in the editor.
 
#### Disable key repeat in your system settings

![Screen Shot 2014-09-26 at 01.10.03](http://res.cloudinary.com/dstrunk/image/upload/v1414083559/Screen-Shot-2014-09-26-at-01_10_03_iohzif.png) If you're used to holding down the `j` key to scroll down 20 or so lines, this one is for you. Disabling the key repeat feature on your computer means if you hold down `j`, it will only register as one press. When you hold your `j` button down this time, your editor will respond once, a lightbulb will go off and you'll say, "Oh yeah! I shouldn't be doing this." 

#### Vim hard mode

 Hard mode is exactly what it sounds like. It not only disables arrow keys, but `hjkl` keys, page up/down keys, and other keys that depend on character-wise navigation. This forces users to push through their anti-patterns and navigate in a more vim-centric fashion. You can find vim hard mode [here](https://github.com/wikitopian/hardmode).
 
### Conclusion

 These tips are by no means exhaustive, and in fact barely even scratch the surface. I didn't even go into some of the plugins that extend vim's already powerful features (fuzzy searching, Rails integration, etc.). But even with this small handful of vim tricks you'll find that your productivity will increase a ton. And better yet, you'll find that your brain will stop treating vim as a text editor similar to what you've been used to and more as a productivity powerhouse that it has the potential to be.
