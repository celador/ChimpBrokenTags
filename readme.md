```
λ ~/Github/ChimpBrokenTags/ cucumber.js
Feature: Example feature

      As a user of Cucumber.js
        I want to have documentation on Cucumber
          So that I can concentrate on building awesome applications

  @foo
  Scenario: Reading documentation
HOOK
Given
    Given I am on the Cucumber.js GitHub repository
When
    When I go to the README file
Then
    Then I should see "Usage" as the page title

1 scenario (1 passed)
3 steps (3 passed)
0m00.005s
λ ~/Github/ChimpBrokenTags/ chimp

[chimp] Running...
Feature: Example feature

      As a user of Cucumber.js
        I want to have documentation on Cucumber
          So that I can concentrate on building awesome applications

[chimp] Detected an unhandledRejection:
[chimp][hooks] TypeError: tagGroupString.split is not a function
    at Array.map (native)
    at Array.filter (native)
```
