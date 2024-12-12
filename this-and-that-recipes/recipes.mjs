const recipes = [
    {
        name: 'Beef Stroganoff',
        image: './images/this-and-that-recipes-images/beef-stroganoff.jpg',
        tags: ['main dish', 'pasta', 'beef'],
        rating: 4,
        time: 30,
        description: "I've tried this recipe a few times now, and this is how we like it. I cut this recipe in half for our little family, but use the full recipe when I have company. We like to eat ours with some tasty green beans on the side. It's a perfect, easy meal for a busy day. I do have one picky eater that won't eat it, but the rest of my kids like.",
        instructions: '14 oz pasta noodles <br>1 lb. ground beef <br>1/ 2 tsp. garlic pwd. <br> 1/2 tsp. seasoning salt <br> 2-10oz can cream of mushroom soup <br>2 beef bouillon cube, dissolved in 1 c. warm water <br>2 t. worcestershire sauce <br>1/2 c. sour cream <br><br>Cook noodles according to package directions. In medium saucepan, cook hamburger until completely done, breaking meat in small pieces. Add garlic and seasoning salt. When cooked add soups and stir well. Add bouillon, Worcestershire sauce. Simmer until thickened. Add sour cream and stir till combined and heated through. When noodles are done, drain and add meat sauce. Serve warm.'
    },
    {
        name: 'Cheesy Parmensan Chicken and Rice',
        image: './images/this-and-that-recipes-images/cheesey-parmensan-chicken-and-rice.jpeg',
        tags: ['main dish', 'pasta', 'chicken'],
        rating: 5,
        time: 45,
        description: 'This rice is served in a creamy, cheesy sauce.  It is one of the few ways that several of my kids will enjoy rice.  As a bonus, it is pretty easy to put together. ',
        instructions: '1 lb chicken, cut into small pieces <br>4 Tbsp butter <br>1/2 onion, diced <br>3 cloves garlic, finely chopped <br>2 tsp. Italian seasoning <br>1/2 tsp. pepper <br>1 tsp. salt <br>2 1/2 cups water <br>1 heaping Tbsp. chicken bouillon <br>1 cup rice <br>1/3 cup freeze dried spinach (You can also use fresh, chopped) <br>1/2 cup heavy cream <br>1/2 cup fresh parmesan cheese <br><br>Directions: <br>Melt butter in a large skillet.  Add the onion and cook until onion is softened.  Add the diced chicken and garlic to the skillet and cook until chicken is done.  Add Italian season, salt, and pepper.  Cook and stir until chicken is golden on all sides.  Add the water, chicken bouillon, spinach, and rice to the skillet and stir.  Bring to a boil.  Then reduce heat to medium/low.  Cover with a lid and simmer for 15-20 minutes until rice is done.  <br><br>Turn off heat. Stir in the heavy cream and parmesan. Stir until cheese is melted.  Serve warm. <br><br>I can triple this recipe in my large, deep pan.  This recipe reheats well. '
    },
    {
        name: 'Chocolate Zucchini Bread',
        image: './images/this-and-that-recipes-images/chocolate-zucchini-bread.jpg',
        tags: ['quick bread', 'bread', 'chocolate', 'zucchini', 'quick bread','dessert'],
        rating: 4,
        time: 70,
        description: 'Super rich and chocolatey.  My kids were super excited about this treat.  I didn\'t mention it had zucchini...no one needed to know :) ',
        instructions: '2 1/2 cups all-purpose flour <br>1/2 cup cocoa <br>1 teaspoon baking soda <br>1/2 teaspoon baking powder <br>1 teaspoon salt <br>1 1/2 cups sugar <br>3 eggs1 cup canola oil (or apple sauce) <br>2 teaspoons vanilla <br>2 packed cups grated zucchini (don\’t peel it) <br>1 cup chocolate chips (I used mini) <br><br>Prehat oven at 350 F. Spray two 9×5 inch pans with nonstick spray. In a large bowl, stir together flour, cocoa, baking soda, baking powder and salt. In a medium bowl, beat the sugar and eggs until light and fluffy. Add the oil and vanilla. Add to the dry ingredients along with the zucchini and chocolate chips. Stir just until combined, and divide between the loaf pans. Bake for 50-60 minutes, or until the tops are cracked and springy to the touch. Makes 2 cakes.'
    },   
    {
        name: 'Air Fried Chicken',
        image: './images/this-and-that-recipes-images/air-fried-chicken.jpg',
        tags: ['main dish', 'meat', 'marinated', 'chicken' ],
        rating: 5,
        time: 45,
        description: 'This chicken has a tender and juicy inside that is easy to make.',
        instructions: 'Seasoning of your choice (I used Super Bird Poultry Seasoning) <br>Olive oil <br>4 chicken breasts <br><br> Mix the olive oil and seasoning together. Coat each chicken breast in the olive oil and seasoning mixture. Place on air fryer tray. Cook it in the air fryer at 370 for 25 minutes or until the internal temperature is 165. Remove the chicken from the air fryer and let it sit for 5 minutes. Serve warm.'
    },
    {
        name: 'Monster Cookies',
        image: './images/this-and-that-recipes-images/monster-cookies.JPG',
        tags: ['dessert', 'cookie', 'oats',],
        rating: 5,
        time: 20,
        description: 'This is John\’s favorite cookie. It is the perfect combination of oatmeal, peanut butter, and chocolate in a perfectly chewy cookie.',
        instructions: '1/2 cup softened, unsalted butter <br>1 cup light brown sugar <br>1 cup granulated sugar <br>3 large eggs <br>1 1/2 cups creamy peanut butter <br>1 tablespoon vanilla extract <br>4 1/2 cups old fashioned oats <br>2 teaspoons baking soda <br>1/2 teaspoon salt <br>1 cup M&M\'s <br>1 cup semi-sweet chocolate chips <br>1/2 cup mini chocolate chips <br><br> Preheat the oven to 350°F. Line a baking sheet with silicone mats and set aside. Cream the butter, peanut butter, brown sugar and granulated sugar on medium speed for 1-2 minutes. Add the eggs and vanilla extract and mix for another minute until combined. Scrape down the sides of the bowl with a rubber spatula. Add oats, baking soda, and salt and mix until combined. Add the M&M\’s, chocolate chips, and mini chocolate chips and mix to combine. Scoop cookie dough on the baking sheet, leaving 2 inches between each ball. Using the palm of your hand, gently press dough down. Bake for 9 minutes or until the edges are set and lightly golden. Remove from the oven and let the cookies cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely.'
    },
    {
        name: 'No-bake Cookies',
        image: './images/this-and-that-recipes-images/no-bake-cookies.jpg',
        tags: ['dessert', 'oats', 'chocolate', 'peanut butter'],
        rating: 5,
        time: 15,
        description: 'A delicious cookie, no oven required!  The secret is bringing the first mixture to a slow boil and then boiling  it for exactly one minute--so set a timer.  You\'ll have the perfect texture for these no bake cookies.',
        instructions: '3 tablespoons unsweetened cocoa powder <br>2 cups white sugar <br>1/2 cup milk <br>1/2 cup butter <br>3 cups quick cooking oats <br>1/2 cup peanut butter <br>1 teaspoon vanilla extract <br><br>Dice up the butter into small ½ inch cubes. Put the butter, cocoa powder, sugar, and milk into the saucepan. Heat it up until it starts to turn to a rolling boil. Then, boil for 60 seconds. Turn off the stove. Put the saucepan on the trivet. Add peanut butter and vanilla in the pan. Then fold-in the oats until it is completely mixed. Grab your tray and silicon mats. Put the silicone mats on the tray. Scoop out the mixture and place it on the silicone mats. Continue scooping until the mixture is gone. Finally, let them cool. Store in an airtight container and eat within 1-2 days. '
    },
    {
        name: 'Pancakes',
        image: './images/this-and-that-recipes-images/pancakes.jpg',
        tags: ['quick bread', 'main dish'],
        rating: 4,
        time: 25,
        description: 'A fluffy quick bread that taste amazing with jam or syrup',
        instructions: 'milk <br>lemon juice <br>2 1/2 cup of all-purpose flour <br>2 teaspoons of baking soda and baking powder <br>a pinch of salt <br>1/2 cup of sugar <br>2 eggs <br>1/2 of a cup canola oil <br>cooking oil <br>chocolate chips <br><br>Sift and mix the flour, baking powder, baking soda, and salt together. Pour the butter milk, sugar, dry ingredients, eggs, and oil into a bowl. Pour around 1/4 of a cup of batter onto the pan for each pancake. Add some chocolate chips and flip them when the bottom side is golden. After the other side is done, put on a plate and enjoy.'
    },
    {
        name: 'Tater Tot Casserole',
        image: './images/this-and-that-recipes-images/tater-tot-casserole.jpg',
        tags: ['main dish', 'pasta', 'grean beans'],
        rating: 4,
        time: 45,
        description: 'A delicous combo of ground beef and vegetables preserved from the garden, making it a healthy and tasty meal.',
        instructions: '1 medium onion <br>1 lb ground beef <br>3 cups green beans, chopped <br>2 cups frozen corn <br>¼ cup butter <br>¼ cup flour <br>1 cup milk <br>1 heaping Tablespoon beef bullion <br>Salt and pepper to taste <br>Large bag of tater tots <br>½ cups cheddar cheese (I used a Mexican blend)<br><br>Dice onion and cook with ground beef until fully cooked. Meanwhile, cook your green beans and corn until tender. Melt butter in the pan with the hamburger.  Stir in flour to the melted butter and meat mixture.  Stir until combined.  Quickly stir in the milk.  Add beef bullion and bring to a simmer. Drain vegetables and add them to the meat and sauce mixture. Add meat and vegetable mixture to a greased 9x13 pan. Top the mixture with a layer of tater tots. Bake in a preheated oven at 375 for about 30 minutes or until the tater tots are crisp and golden.  Sprinkle tater tots with a layer of cheddar cheese.  Bake an additional 3-5 minutes or until the cheese is melted. Serve warm.'
    },
    {
        name: 'Strawberry Cream Cheese Wontons',
        image: './images/this-and-that-recipes-images/strawberry-creamcheese-wontons.jpg',
        tags: ['dessert', 'strawberry'],
        rating: 5,
        time: 15,
        description: 'A wonderful treat with a crispy outside and a sweet middle.',
        instructions: 'Wonton wrappers <br>12 oz cream cheese, softened <br>1/2 cup powdered sugar <br>2 cups of diced strawberries <br>Oil, for frying <br><br> Mix the softened cream cheese and powdered sugar until smooth.  Spoon 1 Tbsp of the cream cheese mixture with a half tablespoon of diced strawberries onto a wonton wrapper.  Lightly line the outside edge of the wonton wrapper with water.  Seal the edges of the wonton wrapper together to seal the cream cheese and strawberries inside.  Make sure that all edges are sealed.  (The light coating of water allows the wonton wrapper to seal.) Heat several inches of oil in a medium pan to 350. Fry the filled wontons in hot oil until they are golden brown. Remove from oil and place on a dry paper towel. Let the wontons cool for 5 minutes before eating. The hot cheese can burn your mouth, so be patient! <br><br>Serve warm or cold.'
    },
    {
        name: 'German Pancakes',
        image: './images/this-and-that-recipes-images/german-pancakes.png',
        tags: ['main dish', 'pancake'],
        rating: 4,
        time: 25,
        description: 'It is a really high protien pancake with a rich egg flavor.',
        instructions: '6 eggs <br> 1/2 cup of butter <br>1 cup of flour <br>1 cup of milk <br>1/2 teaspoon <br><br>Heat oven to 450. Melt 1/4 cup butter in 9x13 pan. Blend in VitaMix (or blender) until well mixed. Spread butter around pan and pour batter in. Cook 15 to 20 minutes. Serve Warm.'
    },
    {
        name: 'Cheesy Green Bean Casserole',
        image: './images/this-and-that-recipes-images/cheesey-green-bean-casserole.png',
        tags: ['side', 'green beans'],
        rating: 4,
        time: 25,
        description: 'It is the perfect side dish to go with turkey. Kyla said it was fire.',
        instructions: 'coming soon'
    },
]

export default recipes;