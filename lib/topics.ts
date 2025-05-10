import { TopicData } from '@/types';

export const topics: TopicData[] = [
  {
    slug: 'introduction',
    title: 'Introduction to Selenium',
    description: 'Learn the basics of Selenium WebDriver and its capabilities.',
    content: `
# Introduction to Selenium

Selenium is an open-source tool that automates web browsers. It provides a single interface that lets you write test scripts in programming languages like Python, Java, C#, etc.

## What is Selenium?

Selenium allows you to:
- Automate browser actions
- Test web applications
- Perform web scraping
- Automate repetitive web-based tasks

## Key Components

1. **Selenium WebDriver**: Communicates directly with the browser using its native support
2. **Selenium Grid**: Runs tests on different machines and browser configurations
3. **Selenium IDE**: Record and playback tool for tests
    `,
    snippet: `
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

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

# Take a screenshot
driver.save_screenshot("screenshot.png")
print("Screenshot saved as screenshot.png")

# Close the browser
driver.quit()
print("Browser closed successfully")
`
  },
  {
    slug: 'locators',
    title: 'Selenium Locators',
    description: 'Master the different ways to locate elements on a web page.',
    content: `
# Selenium Locators

Locators are commands that tell Selenium which HTML elements you want to interact with. Selenium offers several locator strategies to find elements on a web page.

## Common Locator Strategies

### 1. By ID
The most efficient way to locate elements. Every ID should be unique within the page.

### 2. By Name
Locates elements with matching name attribute.

### 3. By Class Name
Finds elements with the specified CSS class.

### 4. By Tag Name
Locates elements by their HTML tag.

### 5. By XPath
The most flexible but usually slower. Can navigate up and down the DOM.

### 6. By CSS Selector
Similar to XPath but generally faster and more readable.

### 7. By Link Text
Finds anchor elements by their visible text.

### 8. By Partial Link Text
Finds anchor elements that contain the specified text.
    `,
    snippet: `
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# Initialize the driver
driver = webdriver.Chrome(options=chrome_options)

# Navigate to a website
driver.get("https://www.python.org")

# Different ways to locate elements:

# 1. By ID
search_box = driver.find_element(By.ID, "id-search-field")
print(f"Search box found by ID: {search_box.tag_name}")

# 2. By Name
# search_box = driver.find_element(By.NAME, "q")
# print(f"Search box found by Name: {search_box.tag_name}")

# 3. By Class Name
menu = driver.find_element(By.CLASS_NAME, "navigation")
print(f"Menu found by Class Name: {menu.tag_name}")

# 4. By Tag Name
links = driver.find_elements(By.TAG_NAME, "a")
print(f"Number of links found by Tag Name: {len(links)}")

# 5. By XPath
logo = driver.find_element(By.XPATH, "//img[@class='python-logo']")
print(f"Logo found by XPath: {logo.get_attribute('alt')}")

# 6. By CSS Selector
downloads = driver.find_element(By.CSS_SELECTOR, "a[title='Python Download']")
print(f"Downloads link found by CSS Selector: {downloads.text}")

# 7. By Link Text
docs_link = driver.find_element(By.LINK_TEXT, "Documentation")
print(f"Documentation link found by Link Text: {docs_link.get_attribute('href')}")

# 8. By Partial Link Text
events = driver.find_element(By.PARTIAL_LINK_TEXT, "Event")
print(f"Events link found by Partial Link Text: {events.text}")

# Close the browser
driver.quit()
print("Browser closed successfully")
`
  },
  {
    slug: 'webdriver',
    title: 'WebDriver API',
    description: 'Explore the core WebDriver API and how to use it effectively.',
    content: `
# WebDriver API

The WebDriver API is the core of Selenium. It provides a programming interface to create and run browser automation scripts.

## Browser Interactions

### Navigation
- **get(url)**: Navigate to a URL
- **back()**: Go back one page
- **forward()**: Go forward one page
- **refresh()**: Refresh the current page

### Information Retrieval
- **title**: Get the page title
- **current_url**: Get the current URL
- **page_source**: Get the page HTML source

### Browser Management
- **maximize_window()**: Maximize the browser window
- **minimize_window()**: Minimize the browser window
- **set_window_size(width, height)**: Set window dimensions
- **close()**: Close the current window
- **quit()**: Close all windows and end the session

### Cookies
- **add_cookie(cookie_dict)**: Add a cookie
- **get_cookies()**: Get all cookies
- **delete_cookie(name)**: Delete a specific cookie
- **delete_all_cookies()**: Delete all cookies
    `,
    snippet: `
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# Initialize the driver
driver = webdriver.Chrome(options=chrome_options)

# Browser Navigation
driver.get("https://www.python.org")
print(f"Initial page title: {driver.title}")

# Get browser information
print(f"Current URL: {driver.current_url}")
print(f"Page source length: {len(driver.page_source)} characters")

# Navigate to another page
driver.find_element(By.LINK_TEXT, "Documentation").click()
print(f"New page title after clicking: {driver.title}")

# Wait a moment to ensure page loads
time.sleep(1)

# Go back to the previous page
driver.back()
print(f"Page title after going back: {driver.title}")

# Go forward
driver.forward()
print(f"Page title after going forward: {driver.title}")

# Window management
current_size = driver.get_window_size()
print(f"Current window size: Width={current_size['width']}, Height={current_size['height']}")

# Set a specific window size
driver.set_window_size(1024, 768)
new_size = driver.get_window_size()
print(f"New window size: Width={new_size['width']}, Height={new_size['height']}")

# Cookie management
print("\\nCookie Management:")
# Add a cookie
driver.add_cookie({"name": "example_cookie", "value": "test_value"})

# Get all cookies
cookies = driver.get_cookies()
print(f"Number of cookies: {len(cookies)}")
for cookie in cookies:
    print(f"Cookie: {cookie['name']} = {cookie['value']}")

# Delete a specific cookie
driver.delete_cookie("example_cookie")
cookies = driver.get_cookies()
print(f"Number of cookies after deletion: {len(cookies)}")

# Delete all cookies
driver.delete_all_cookies()
cookies = driver.get_cookies()
print(f"Number of cookies after deleting all: {len(cookies)}")

# Close the browser
driver.quit()
print("Browser closed successfully")
`
  },
  {
    slug: 'interactions',
    title: 'Element Interactions',
    description: 'Learn how to interact with web elements using Selenium.',
    content: `
# Element Interactions

Once you've located elements on a page, you need to interact with them. Selenium provides various methods to simulate user interactions with web elements.

## Basic Interactions

### Clicking Elements
- **click()**: Click on an element

### Text Input
- **send_keys(text)**: Type text into an input field
- **clear()**: Clear text from an input field

### Form Submission
- **submit()**: Submit a form

## Advanced Interactions

### Drag and Drop
Use the ActionChains class for drag and drop operations

### Hovering
Use ActionChains to hover over elements

### Right-click (Context Menu)
ActionChains can simulate right-clicks

### Keyboard Actions
Send keyboard combinations with ActionChains
    `,
    snippet: `
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import time

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# Initialize the driver
driver = webdriver.Chrome(options=chrome_options)

# Navigate to the Python.org website
driver.get("https://www.python.org")
print(f"Page title: {driver.title}")

# Basic interactions
# 1. Find the search box
search_box = driver.find_element(By.ID, "id-search-field")

# 2. Clear any existing text (if any)
search_box.clear()
print("Search box cleared")

# 3. Type into the search box
search_box.send_keys("selenium python")
print("Typed 'selenium python' in the search box")

# 4. Press Enter to submit the search
search_box.send_keys(Keys.RETURN)
print("Pressed Enter to submit the search")

# Wait for the search results to load
time.sleep(2)
print(f"Search results page title: {driver.title}")

# Get the search results
search_results = driver.find_elements(By.CSS_SELECTOR, ".list-recent-events li")
print(f"Number of search results: {len(search_results)}")

# Print the first few search results
for i, result in enumerate(search_results[:3], 1):
    print(f"Result {i}: {result.text.strip()}")

# Advanced interactions with ActionChains
# Navigate back to the home page
driver.get("https://www.python.org")

# Create an ActionChains object
actions = ActionChains(driver)

# Hover over the 'Downloads' menu
downloads_menu = driver.find_element(By.ID, "downloads")
actions.move_to_element(downloads_menu).perform()
print("Hovered over the Downloads menu")

# Wait for the dropdown to appear
time.sleep(1)

# Click on 'All releases' in the dropdown
all_releases = driver.find_element(By.LINK_TEXT, "All releases")
actions.move_to_element(all_releases).click().perform()
print("Clicked on 'All releases'")

# Wait for the page to load
time.sleep(2)
print(f"All releases page title: {driver.title}")

# Close the browser
driver.quit()
print("Browser closed successfully")
`
  },
  {
    slug: 'waits',
    title: 'Selenium Waits',
    description: 'Learn how to handle timing issues and synchronization in your tests.',
    content: `
# Selenium Waits

When automating web browsers, timing issues are common. Pages may load at different speeds, and elements might not be immediately available. Selenium provides waiting strategies to handle these situations.

## Types of Waits

### 1. Implicit Waits
Sets a default waiting time for the entire session. Selenium will wait for elements to appear before throwing an exception.

### 2. Explicit Waits
More precise waiting for specific conditions. You tell Selenium to wait until a certain condition is met before proceeding.

### 3. Fluent Waits
A more flexible explicit wait that allows you to specify the maximum time to wait and the frequency to check for the condition.

## Common Expected Conditions

- **presence_of_element_located**: Wait until an element is present in the DOM
- **visibility_of_element_located**: Wait until an element is visible
- **element_to_be_clickable**: Wait until an element is visible and enabled
- **text_to_be_present_in_element**: Wait until element contains specific text
- **alert_is_present**: Wait until an alert is present
    `,
    snippet: `
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# Initialize the driver
driver = webdriver.Chrome(options=chrome_options)

# Example 1: Implicit Wait
print("--- Example 1: Implicit Wait ---")
# Set an implicit wait of 10 seconds
driver.implicitly_wait(10)

driver.get("https://www.python.org")
print("Page loaded with implicit wait set")

# Even if we search for an element that takes time to appear, the driver will wait
search_box = driver.find_element(By.ID, "id-search-field")
print(f"Search box found: {search_box.tag_name}")

# Example 2: Explicit Wait
print("\\n--- Example 2: Explicit Wait ---")
driver.get("https://www.python.org")

# Create a WebDriverWait object with a timeout of 10 seconds
wait = WebDriverWait(driver, 10)

# Wait until the search box is visible
search_box = wait.until(
    EC.visibility_of_element_located((By.ID, "id-search-field"))
)
print("Search box is now visible")

# Example 3: Waiting for multiple conditions
print("\\n--- Example 3: Multiple Wait Conditions ---")
driver.get("https://www.python.org")

# Wait until the element is both visible and clickable
download_button = wait.until(
    EC.element_to_be_clickable((By.ID, "downloads"))
)
print("Download button is now clickable")

# Example 4: Fluent Wait with custom polling
print("\\n--- Example 4: Fluent Wait ---")
from selenium.common.exceptions import NoSuchElementException, StaleElementReferenceException

# Create a fluent wait that:
# - Waits up to 15 seconds
# - Checks every 500ms
# - Ignores NoSuchElementException and StaleElementReferenceException
fluent_wait = WebDriverWait(
    driver, 
    timeout=15, 
    poll_frequency=0.5, 
    ignored_exceptions=[NoSuchElementException, StaleElementReferenceException]
)

driver.get("https://www.python.org")

# Use the fluent wait
docs_link = fluent_wait.until(
    EC.presence_of_element_located((By.LINK_TEXT, "Documentation"))
)
print("Documentation link found with fluent wait")

# Example 5: Waiting for text to be present
print("\\n--- Example 5: Waiting for Text ---")
driver.get("https://www.python.org")

# Wait until specific text appears in an element
wait.until(
    EC.text_to_be_present_in_element((By.CSS_SELECTOR, ".introduction"), "Python is")
)
print("Found the expected text in the introduction")

# Close the browser
driver.quit()
print("\\nBrowser closed successfully")
`
  }
];

export const getAllTopics = (): TopicData[] => {
  return topics;
};

export const getTopicBySlug = (slug: string): TopicData | undefined => {
  return topics.find(topic => topic.slug === slug);
};