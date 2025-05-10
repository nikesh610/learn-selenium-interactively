"use server";

import { CodeExecutionResponse } from "@/types";

// This is a mock implementation since we can't actually run Docker in this environment
export async function executeCode(code: string): Promise<CodeExecutionResponse> {
  // Simulate delay for execution
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  try {
    // Check if the code contains potentially harmful operations
    if (code.includes("os.system") || code.includes("subprocess") || code.includes("exec(")) {
      throw new Error("Security violation: System calls are not allowed");
    }
    
    // Analyze the code to provide a reasonable mock response
    const output = generateMockOutput(code);
    
    return {
      output,
      success: true
    };
  } catch (error) {
    return {
      output: `Error: ${error instanceof Error ? error.message : String(error)}`,
      error: String(error),
      success: false
    };
  }
}

function generateMockOutput(code: string): string {
  let output = "Python 3.9.7 (default, Sep 16 2021, 13:09:58)\n";
  output += "[Running your Selenium script...]\n\n";
  
  if (code.includes("webdriver.Chrome")) {
    output += "Initializing Chrome WebDriver...\n";
  }
  
  if (code.includes("driver.get(")) {
    const urlMatch = code.match(/driver\.get\(['"](.*?)['"]\)/);
    const url = urlMatch ? urlMatch[1] : "https://example.com";
    output += `Navigating to ${url}...\n`;
    output += `Page loaded successfully\n`;
    
    if (url.includes("python.org")) {
      output += "Page title: Welcome to Python.org\n";
    } else {
      output += `Page title: ${url.replace('https://', '').replace('http://', '').split('/')[0]}\n`;
    }
  }
  
  if (code.includes("find_element")) {
    const elements = [
      "find_element(By.ID",
      "find_element(By.CLASS_NAME",
      "find_element(By.TAG_NAME",
      "find_element(By.XPATH",
      "find_element(By.CSS_SELECTOR",
      "find_element(By.LINK_TEXT",
      "find_element(By.PARTIAL_LINK_TEXT",
      "find_elements("
    ];
    
    const foundElements = elements.filter(el => code.includes(el));
    if (foundElements.length > 0) {
      foundElements.forEach(element => {
        output += `Element found using ${element.replace("find_element(", "").replace("find_elements(", "multiple ")}\n`;
      });
    }
  }
  
  if (code.includes("send_keys")) {
    output += "Text entered into input field\n";
  }
  
  if (code.includes("click()")) {
    output += "Clicked on element\n";
  }
  
  if (code.includes("driver.save_screenshot")) {
    output += "Screenshot saved as screenshot.png\n";
  }
  
  if (code.includes("driver.quit()")) {
    output += "Browser closed successfully\n";
  }
  
  output += "\n[Process completed]";
  return output;
}