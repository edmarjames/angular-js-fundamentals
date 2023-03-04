// Angular.js is a MVC style JavaScript framework for creating single page applications

/* 
    Features
        - 2 way data binding
        - templating
        - DOM interaction
        - filters
        - directives
*/

/* 
    MVC architecture
        - models -> json, database, etc
        - views -> display content & data to a user in a browser
        - controllers -> control the functionality of our views, performs interaction between models and view
*/

/* 
    2 way data binding
        ng-model="name" 
            - creates a variable and stores the value to that variable

        {{ name }}
            - outputting the value using 'expressions'
*/

/* 
    Directives
        - in this session we used 'ng-app' and 'ng-model' as an HTML attribute
        but they can also be an actual HTML tag when we create a custom directive
*/ 

/* 
    Expressions
        Using expression in Angular.js we can output a value of a model, concatenate two or more values of a model, conditional statements or an arithmetic expression

        Example
            {{ first_name + " " + last_name }}
            {{ first_name ? 'true': 'false' }}
            {{ 5 * 9 }}
*/

/* 
    ng-init
        - directive used to load data/variables when our application loads
        - but this is not the best practice
        - to declare multiple variables, separate them with a semicolon ';'

        syntax:
            - ng-init="numbers=[1, 2, 3, 4]"
*/