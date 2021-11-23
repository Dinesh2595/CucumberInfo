
@BigW
Feature: User validate the Bigw functuinality

Background:
Given User go to bigw home page
@smoke
Scenario: User validate the poduct search functionality

When User click shop by department and move to mens option
And   user click jeans options and navigate to next page
And  User click one product and navigate to next page and select size
Then user add to whishlist and verify that 

@sanity
Scenario Outline: User validate  create Account functionality


When  User click create account icon
And  User fill "<first>" and "<last>" name and  required details
Then User click create account

Examples:

|first | last|
|dinesh|kumar|
|nandha|kumar|