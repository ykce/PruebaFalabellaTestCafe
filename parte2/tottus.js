import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `www.google.com`;

test('New Test', async t => {

    await t
        .typeText(Selector('#tsf').find('[name="q"]'), 'tottus sucursales')
        .pressKey('enter')
        .click(Selector('.XBBs5.z1asCe.GYDk8c').find('svg').find('path'))
        .click(Selector('#new_tottus_nav_cliente_recetas').find('a').find('img'))
        .click(Selector('#myDIV').find('button').nth(3))
        .click(Selector('#divRecipes').find('section').find('div').find('div').nth(22).find('div').nth(7).find('div').find('div').find('img').nth(2));
		//.expect(Selector('div.divRecipe:nth-child(2) > p:nth-child(5)').textContent).contains("– 15g canela en polvo ");
});