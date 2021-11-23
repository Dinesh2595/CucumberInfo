package org.hooksinfo;

import java.io.IOException;

import org.baseclass.Baseclass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksSample  extends Baseclass{

	@Before
	public  void beforeCreate() {
	
		launchBrowser("chrome");
		implicityWait(20);
		launchUrl("https://www.bigw.com.au/");
		
		System.out.println("Before Create");
	

	}
	
	
	
	@After
	public void afterCreate(Scenario sc) throws IOException {

		String name = sc.getName();
		
		screenShot(name);
		
		System.out.println("After Create");
		
//		quitBrowser();
		
	}
	
}
