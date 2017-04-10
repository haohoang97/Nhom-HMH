Feature: Login
	As a user
    	I want to login into website 
    	In order to share my result test with social network
	
	Scenario: Login with true account
        		Given I had account
        		When I click on "Đăng nhập"
       		Then I should see "Tên người dùng" and "Mật khẩu" blank text boxes  
        		When I fill "Tên người dùng"
        		And I fill "Mật khẩu"
        		And I click on "Đăng nhập" button
        		Then I should see notification "Đăng nhập thành công!"
        
    	Scenario: Login with false password
        		Given I had account
        		When I click on "Đăng nhập"
        		Then I should see "Tên người dùng" and "Mật khẩu" blank text boxes  
        		When I fill "Tên người dùng"
        		And I fill "Mật khẩu" 
        		But password false 
        		And I click on "Đăng nhập" button
        		Then I should see notification "Sai mật khẩu! Vui lòng đăng nhập lại"
        		And I have to re-login
    
    
    	Scenario: Login with account that does not exist
        		Given I haven't account 
        		When I click on "Đăng nhập"
        		Then I should see "Tên người dùng" and "Mật khẩu" blank text boxes  
        		When I fill "Tên người dùng" 
        		But it'n exist
        		And I fill "Mật khẩu"
        		But it'n exist
        		And I click on "Đăng nhập" button
        		Then I should see notification "Tài khoản không tồn tại! Đăng nhập lại hoặc Đăng ký"
        		And I see "Đăng nhập" and "Đăng ký" buttons to choose