from selenium import webdriver
url = "http://opengmsteam.com/news-info-test.html?uid=1a1ec738-751b-49f6-8756-7a460b2e6173"
driver = webdriver.PhantomJS(executable_path=r'E:\software\phantomjs-2.1.1-windows\bin\phantomjs.exe')

driver.get(url)
print(driver.page_source)

with open('news_1.html','w',encoding='utf-8') as f:
    f.write(driver.page_source)
