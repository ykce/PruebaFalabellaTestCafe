package utilerias;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class InstanciarNavegador {
	private static WebDriver driver = null;
	//private static String Url = "url";
	
	protected InstanciarNavegador() {
	}
	// Get the only object available.
	public static WebDriver getInstance() {
		ChromeOptions chromeOptions = new ChromeOptions();
		//System.setProperty("webdriver.ie.driver", "src/main/java/drivers/IEDriverServer.exe");

		if (driver == null) {
			if (System.getProperty("os.name").toLowerCase().matches(".*linux.*")) {
				System.out.println("Enter to linux system, setting up chrome driver.");
				System.setProperty("webdriver.chrome.driver", "src/main/java/drivers/chromedriverLinux");
				driver = new ChromeDriver(chromeOptions);
				open();
			} else if (System.getProperty("os.name").toLowerCase().matches(".*mac.*")) {
				System.out.println("Enter to a mac system, setting up chrome driver.");
				System.setProperty("webdriver.chrome.driver", "src/main/java/drivers/chromedriverMac");
				driver = new ChromeDriver(chromeOptions);
				open();
			}
			else if (System.getProperty("os.name").toLowerCase().matches(".*windows.*")) {
				System.out.println("Enter to a windows system, setting up chrome driver.");
				System.setProperty("webdriver.chrome.driver", "src/main/java/drivers/chromedriver.exe");
				driver = new ChromeDriver(chromeOptions);
				open();
			}
		}
		driver.manage().window().maximize();
		driver.manage().window().fullscreen();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		return driver;
	}

	public static void open() {
		//driver.navigate().to(Url);
	}
}
