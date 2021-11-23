package org.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",
                  glue= {"org.stepdefinition","org.hooksinfo"},
                dryRun=false,
                  tags= {"@BigW" ,"@sanity"},
                plugin= {"pretty",
                         "html:target\\Report",
                         "json:target\\Report\\jsonreport.json",
                         "junit:target\\Report\\junit.xml"},
            monochrome=true)

public class TestRunnerInfo {
	

}
