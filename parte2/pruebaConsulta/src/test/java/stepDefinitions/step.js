package stepDefinitions;

import org.openqa.selenium.WebDriver;
import utilerias.InstanciarNavegador;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class steps {
	private WebDriver driver;
	
	@Given("^el usuario está en el buscador de google$")
	public void el_usuario_está_en_el_buscador_google() throws Throwable {
		driver = InstanciarNavegador.getInstance();
		driver.get("https://www.google.com/");   
	}

	@When("^el usuario ingresa los criterios de busqueda$")
	public void el_usuario_ingresa_criterios_busqueda throws Throwable {
	   await t
        .typeText(Selector('#tsf').find('[name="q"]'), 'tottus sucursales')
	}
	
	@When("^presiona enter$")
	public void presiona_enter() throws Throwable {
		await t
		.pressKey('enter')
	}
	
	@When("^selecciona sucursal$")
	public void selecciona_sucursal() throws Throwable {
		await t
		.click(Selector('.XBBs5.z1asCe.GYDk8c').find('svg').find('path'))
	}
	
	@When("^selecciona opción$")
	public void selecciona_opción() throws Throwable {
		await t
		.click(Selector('#new_tottus_nav_cliente_recetas').find('a').find('img'))
	}
	
	@When("^dificultad$")
	public void selecciona_dificultad() throws Throwable {
		await t
		.click(Selector('#myDIV').find('button').nth(3))
	}
	
	@When("^receta$")
	public void selecciona_receta() throws Throwable {
		await t
	.click(Selector('#divRecipes').find('section').find('div').find('div').nth(22).find('div').nth(7).find('div').find('div').find('img').nth(2));
	}
	
	@Then("^visualiza el resultado de la consulta$")
	public void visualizas_el_perfil_de_tu_contacto() throws Throwable {
		//.expect(Selector('div.divRecipe:nth-child(2) > p:nth-child(5)').textContent).contains("– 15g canela en polvo ");
	}
}