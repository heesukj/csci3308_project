# TEAM 2 - Milestone 5
Heesuk Jang, Jacob Hallberg, Juan Vargas-Murillo, Seungjeong Park, Hanye Han

## Vision Statement
People use "Grocery With Me," to easily track and manage a grocery list while being connected with friends and families. 

## User Acceptance Test Plans
|   | Edit Quantity of Item |
|---|-----------------------|
|  Edit Quantity Unit Test: |          describe('EditItemQuantityController’', editQuantity() =&gt; { it('It should update the backend with new quantity', editQuantity() =&gt; { expect(this.rename\_status).toEqual(‘OK’); }); }); |
| User Case: | As a user, I want to edit the quantity of an item within a grocery list. |
| User Activity:  |  The user opens the application. The user either logs in with the premade logging information or sign up then log in. The user creates a grocery list then enters the list the user created. Within the selected grocery list, the user creates an item with defined parameters: name and quantity. The user can press the item for a couple of seconds and select “Edit Quantity” in the pop-up selection. By using “Edit Quantity”, the user will be able to enter a new parameter for the quantity and change the quantity of the selected item.  |
| Explanation:  | We don’t have any sort of regex parsing for the quantity as we’d like the Users to have the ability to add any specific quantities they’d like. This means they have free realm over the specifics of the quantity type. However, this information regardless is to be sent off to our update function which if returns successful from the server will have an ‘OK’ response. Any error responses warrant a test failure. |

## Unit Test Output
50.0.2661 (Mac OS X 10.11.4): Executed 3 of 3 SUCCESS (0.023 secs / 0.007 secs)

## Automated Test Cases



|                | Sign Up                                                                                                                                                                                                                                                                                                                                                                                                                                                      |   |   |   |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|---|---|
| Signup Parsing | describe('SignUpController’', signUp() => {,it('should parse signup variables for correct syntax', signUp () => { expect(this.email).toMatch(^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$);expect(this.firstname).toMatch(/^[a-z ,.'-]+$/i);expect(this.lastname).toMatch(/^[a-z ,.'-]+$/i);expect(this.password).toMatch(([a-zA-Z]+[\d]+|[\d]+[a-zA-Z]+)[^\s]*);expect(this.password).toEqual(this.comfirmPassword);expect(this.auth_status).toMatch(’);,}); }); |   |   |   |
| User Case:     | As a User I want to signup with a email, firstname, lastname, and password.                                                                                                                                                                                                                                                                                                                                                                                  |   |   |   |
| User Activity: | The User opens the appThe User clicks the the “Need to signup button”The User fills in the input field with their User information.The user clicks the “Sign up for free” button.                                                                                                                                                                                                                                                                            |   |   |   |


To get automated Test Cases we have to use two different frameworks.  The first framework titled Jasmine, is a popular angular framework which is used to create unit tests. You can find more info at https://jasmine.github.io/. Jasmine uses a very simple unit tests creation process and typically you describe a function, it’s purpose, and your expected/unexpected result. However, Jasmine is a standalone app that creates the unit tests, but does not run them. To run the user tests created by Jasmine we need another framework titled Karma. You can find more info about Karma at http://karma-runner.github.io/0.13/index.html. After installing Karma we run the unit tests through the framework which work for our angular 2 app. Karma opens up the browser and from the specific specified browser we run the angular 2 unit tests

