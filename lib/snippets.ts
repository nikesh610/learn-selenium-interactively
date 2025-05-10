export const defaultSnippet = `
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run in headless mode
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# Initialize the driver
driver = webdriver.Chrome(options=chrome_options)

# Navigate to a website
driver.get("https://www.python.org")

# Get the page title
title = driver.title
print(f"Page title: {title}")

# Find an element and interact with it
search_box = driver.find_element(By.ID, "id-search-field")
search_box.send_keys("selenium")
search_box.submit()

# Wait for the results
import time
time.sleep(2)

# Get the search results
results = driver.find_elements(By.CSS_SELECTOR, ".list-recent-events li")
print(f"Found {len(results)} search results:")
for i, result in enumerate(results[:3], 1):
    print(f"{i}. {result.text.strip()}")

# Take a screenshot
driver.save_screenshot("screenshot.png")
print("Screenshot saved as screenshot.png")

# Close the browser
driver.quit()
print("Browser closed successfully")
`;