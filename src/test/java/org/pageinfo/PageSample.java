package org.pageinfo;

import org.baseclass.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageSample extends Baseclass {

	public PageSample() {

		PageFactory.initElements(d, this);

	}

	@FindBy(xpath = "//div[@class='Icon hamburger-menu variant-light size-small nav-button-icon']//following::span[1]")
	private WebElement shopBy;

	@FindBy(xpath = "//li[@id='MegaNav-tab-66']")
	private WebElement men;

	@FindBy(xpath = "//span[text()='Jeans']")
	private WebElement jeans;

	@FindBy(xpath = "//a[@data-product-code='1311705-olive']")
	private WebElement product;

	@FindBy(xpath = "//fieldset[@class='Sizes pills']//child::span[2]")
	private WebElement size;

	@FindBy(xpath = "//div[@class='button-group']//button/div")
	private WebElement whishlist;
	
	@FindBy(xpath="//a[@data-product-code='1334410-washedblack']")
	private WebElement scroll;
	
	
	
	
	

	public WebElement getScroll() {
		return scroll;
	}

	public WebElement getShopBy() {
		return shopBy;
	}

	public WebElement getMen() {
		return men;
	}

	public WebElement getJeans() {
		return jeans;
	}

	public WebElement getProduct() {
		return product;
	}

	public WebElement getSize() {
		return size;
	}

	public WebElement getWhishlist() {
		return whishlist;
	}

}
