package org.baseclass;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Baseclass {

	 public static WebDriver d;
	 
	public static WebDriver launchBrowser (String browsername) {

	if (browsername.equals("chrome")) {
		WebDriverManager.chromedriver().setup();
		d = new ChromeDriver();
		d.manage().window().maximize();

	} else if (browsername.equals("firefox")) {

		WebDriverManager.firefoxdriver().setup();
		d = new FirefoxDriver();
		d.manage().window().maximize();

	} else {

		System.out.println("Invalid browser name");
	}
	return d;
}

public static void implicityWait(int sec) {
	d.manage().timeouts().implicitlyWait(sec, TimeUnit.SECONDS);
}

public static void launchUrl(String url) {
	d.get(url);

}

public static void currenturl() {
	d.getCurrentUrl();

}

public static void fillTextBox(WebElement e, String value) {
	e.sendKeys(value);

}

public static void click(WebElement e) {
	e.click();
}

public static Select select(String selectorname, WebElement e, String value) {

	Select s = null;
	if (selectorname.equals("value")) {
		s = new Select(e);
		s.selectByValue(value);

	} else if (selectorname.equals("visibletext")) {

		s = new Select(e);
		s.selectByVisibleText(value);

	} else {

		System.out.println("Invalid selector name");
	}

	return s;

}

public static void javascript(WebElement e, String value) {
	if (value.equals("scrolldown")) {
		JavascriptExecutor js = (JavascriptExecutor) d;
		js.executeScript("arguments[0].scrollIntoView(true)", e);

	} else if (value.equals("scrollup")) {
		JavascriptExecutor js = (JavascriptExecutor) d;
		js.executeScript("arguments[0].scrollIntoView(false)", e);

	} else {

		JavascriptExecutor js = (JavascriptExecutor) d;
		js.executeScript("return arguments[0].getAttribute('value')", e);

	}

}

public static void screenShot(String filename) throws IOException {

	TakesScreenshot ts = (TakesScreenshot) d;
	File src = ts.getScreenshotAs(OutputType.FILE);

	File des = new File("D:\\eclipse-workspace\\BigSample\\ScreenShot\\"+filename+".png");

	FileUtils.copyFile(src, des);

}

public static void quitBrowser() {

	d.quit();
}

public static void windowHandling() {

	String cw = d.getWindowHandle();

	Set<String> aw = d.getWindowHandles();

	for (String ew : aw) {
		if (!cw.equals(ew)) {
			d.switchTo().window(ew);
		}

	}

}

public static void windowhandles(int i) {
	String cw = d.getWindowHandle();
	Set<String> allwindow = d.getWindowHandles();

	List<String> li = new ArrayList<String>();
	li.addAll(allwindow);
	d.switchTo().window(li.get(i));

}

public static void moveto(WebElement e) {
	Actions a = new Actions(d);

	a.moveToElement(e).perform();

}
	
	
}
