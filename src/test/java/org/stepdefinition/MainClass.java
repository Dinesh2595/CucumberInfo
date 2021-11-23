package org.stepdefinition;

import java.io.IOException;

import org.baseclass.Baseclass;
import org.openqa.selenium.TakesScreenshot;
import org.pageinfo.CreateAccount;
import org.pageinfo.PageSample;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MainClass extends Baseclass {
	static PageSample p;
	
	 static CreateAccount  c;

	@Given("User go to the bigw homepage")
	public void user_go_to_the_bigw_homepage() throws InterruptedException {
		launchBrowser("chrome");

		implicityWait(20);
		launchUrl("https://www.bigw.com.au/");

		// Thread.sleep(4000);

	}

	@When("User click shop by department and move to mens option")
	public void user_click_shop_by_department_and_move_to_mens_option() {

		p = new PageSample();

		click(p.getShopBy());
		moveto(p.getMen());

	}

	@When("user click jeans options and navigate to next page")
	public void user_click_jeans_options_and_navigate_to_next_page() {
		click(p.getJeans());

	}

	@When("User click one product and navigate to next page and select size")
	public void user_click_one_product_and_navigate_to_next_page_and_select_size() throws InterruptedException {
		// Thread.sleep(3000);

		// javascript(p.getScroll(), "scrolldown");

		windowhandles(0);

		click(p.getProduct());

		windowhandles(0);

		click(p.getSize());

	}

	@Then("user add to whishlist and verify that")
	public void user_add_to_whishlist_and_verify_that() throws IOException {

		click(p.getWhishlist());

		screenShot("BigW");

	}

	// Scenario 2

	@Given("User go to bigw home page")
	public void user_go_to_bigw_home_page() {

		c = new CreateAccount();

	}

	@When("User click create account icon")
	public void user_click_create_account_icon() {
		
		click(c.getLogo());
		
	}

	@When("User fill {string} and {string} name and  required details")
	public void user_fill_and_name_and_required_details(String first, String last) {
		
		fillTextBox(c.getFirst(), first);
		
		fillTextBox(c.getLast(), last);
		
		
		fillTextBox(c.getEmail(), "dinesh@gmail.com");
		
		fillTextBox(c.getPass(), "Dinesh@6666");
		
		fillTextBox(c.getPhno(), "7658765687");
		
	}

	@Then("User click create account")
	public void user_click_create_account() {
		
		click(c.getRadio());
		click(c.getCreate());
		
	}

}
