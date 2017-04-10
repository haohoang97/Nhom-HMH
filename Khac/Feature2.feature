Feature:  Test IQ
  In order to test your IQ
  As a user
  I want to know my result test IQ and share result with social network

  Scenario: Choose test
    Given I am at the "Các bài kiểm tra"
    When I click on "Bài kiểm tra trắc nghiệm"
    Then I see a list of question test
 
  Scenario: Test IQ
    Given I am at the "Bài kiểm tra trắc nghiệm"
    And I see 30 questions
    Then I started with question 1
    When I click on answer "A"
    Then I see answer "A" is checked
    When I click on answer "B" on the same question
    Then I see the answer "A" is unchecked
    When I click on "Nop bai" button
    Then I see the result of the test
  
 Scenario: Share result
    Given I had submit test
    And I see the result of the test
    When I click "Facebook" button
    Then I shared result test IQ with facebook