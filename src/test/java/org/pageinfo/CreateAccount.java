package org.pageinfo;

import org.baseclass.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccount extends Baseclass {
	
             public CreateAccount() {
			PageFactory.initElements(d,this);
			}	
             
             
             @FindBy(xpath="//div[@class='Icon account variant-dark size-normal']")
             private WebElement logo;
             @FindBy(xpath="//div[@id='field-register__firstName']//input")
             private WebElement first;
             @FindBy(xpath="//div[@id='field-register__lastName']//input")
             private WebElement last;
             
             @FindBy(xpath="//div[@id='field-register__email']//input")
             private WebElement email;
           @FindBy(xpath="//div[@id='field-register__password']//div/input")  
           private WebElement pass;
             
             @FindBy(xpath="//div[@id='field-register__mobileNumber']//input")
             private WebElement phno;
             @FindBy(xpath="//div[@id='field-register__termsAndConditions']//input")
             private WebElement radio;
             @FindBy(xpath="//div[@class='FormActions']//button")
             private WebElement create;
             
             
			public WebElement getLogo() {
				return logo;
			}
			public WebElement getFirst() {
				return first;
			}
			public WebElement getLast() {
				return last;
			}
			public WebElement getEmail() {
				return email;
			}
			public WebElement getPhno() {
				return phno;
			}
			public WebElement getRadio() {
				return radio;
			}
			public WebElement getCreate() {
				return create;
			}
			public WebElement getPass() {
				return pass;
			}
             
             
             
             

}
