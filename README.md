# Angular Form Validation

This repository contain responsive form with **AngularJS** validation.
So, at the `section` we add `ng-app` that initialize Angular application. In the form we add attribute _novalidate_ for don't use browser validation.
So, we have four different inputs fields and on each input we create `ng-model` and by doing this we are created variables that are accessible inside `ng-app`
Also, for all inputs we add Angular attribute `ng-required` that is equal required in HTML, and for password we add attribute `ng-minlength` that is equal minlength in HTML.
With Angular properties `$valid` and `$touched` we show custom error message for each input if input isn't valid using Angular directive `ng-show`.
## How do you know if it worked?
* If you have done everything correctly, your inputs on submit will change border-color to green and display message *Welcome* + *firstname* + *lastname* which you insert inside inputs. 
* Otherwise, your inputs will change border-color to red with message bellow input where input isn't correct.
* Also, using `ng-valid` and `css` background color of button will be gray until we type all the fields properly.

[PREVIEW](https://full-stack-web-developer-and-designer.github.io/Angular_FormValidation/)