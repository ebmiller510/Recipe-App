const seedItems = 
    [
        {
          recipeType: "food",
          recipeName: "Spaghetti Bolognese",
          description: "Classic Italian dish with tomato sauce and ground beef",
          numOfIng: 9,
          ingredients: [
            "spaghetti",
            " ground beef",
            " tomatoes",
            " onions",
            " garlic",
            " carrots",
            " celery",
            " olive oil",
            " parmesan cheese"
          ],
          quickFinds: false,
          photo: "https://vikalinka.com/wp-content/uploads/2020/03/Spaghetti-Bolognese-16-Edit.jpg",
          instructions: "1. Cook spaghetti according to package instructions. \n2. Heat olive oil in a large pan over medium-high heat. \n3. Add ground beef and cook until browned, breaking it up into small pieces. \n4. Add onions, garlic, carrots, and celery, and cook until vegetables are tender. \n5. Add tomatoes and tomato paste, and simmer for 20 minutes. \n6. Serve sauce over cooked spaghetti, and sprinkle with grated Parmesan cheese."
        },

        //2
        {
            recipeType: "food",
            recipeName: "Beef Stew",
            description: "Hearty stew with beef, vegetables, and spices",
            numOfIng: 11,
            ingredients: [
              "beef chuck",
              " carrots",
              " potatoes",
              " onions",
              " garlic",
              " tomato paste",
              " beef broth",
              " thyme",
              " bay leaves",
              " flour",
              " olive oil"
            ],
            quickFinds: false,
            photo: "https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Classic-beef-stew-3.jpg",
            instructions: "1. Cut beef into 1-inch cubes and season with salt and pepper. \n2. Heat olive oil in a large pot over medium-high heat. \n3. Brown beef in batches, and set aside. \n4. Add onions, garlic, carrots, and potatoes, and cook until vegetables are tender. \n5. Stir in tomato paste and flour, and cook for 2 minutes. \n6. Add beef broth, thyme, and bay leaves, and bring to a boil. \n7. Reduce heat and simmer for 2 hours. \n8. Serve hot."
          },

          //3
          {
            recipeType: "food",
            recipeName: "Chicken Alfredo",
            description: "Creamy pasta dish with chicken and Parmesan cheese",
            numOfIng: 8,
            ingredients: [
              "fettuccine",
              " chicken breasts",
              " heavy cream",
              " Parmesan cheese",
              " butter",
              " garlic",
              " salt",
              " pepper"
            ],
            quickFinds: false,
            photo: "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21-1024x1536.jpg",
            instructions: "1. Cook fettuccine according to package instructions. \n2. Season chicken breasts with salt and pepper, and cook in a large pan over medium-high heat until no longer pink. \n3. Add garlic and cook for 1 minute. \n4. Add heavy cream and Parmesan cheese, and stir until cheese is melted and sauce is thickened. \n5. Drain pasta and add to the pan with the sauce. \n6. Toss to combine, and serve hot."
          },
          
          
          //4
          {
            recipeType: "drink",
            recipeName: "Old Fashioned",
            description: "Classic cocktail with whiskey, sugar, and bitters",
            numOfIng: 4,
            ingredients: [
              "bourbon",
              " sugar",
              " Angostura bitters",
              " orange peel"
            ],
            quickFinds: true,
            photo: "https://www.thespruceeats.com/thmb/ztnL3iwFJ09ut-XAPAhvFgTsgP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-cocktail-recipe-and-history-759328-hero-01-c9002b3aa6d24a3781befa19dc69eb0e.jpg",
            instructions: "1. In a glass, muddle the sugar and bitters with a splash of water. \n2. Add a large ice cube and the bourbon. \n3. Stir until well chilled. \n4. Garnish with an orange peel and serve."
          },


          //5
          {
            recipeType: "drink",
            recipeName: "Mojito",
            description: "Refreshing cocktail with rum, lime juice, and mint",
            numOfIng: 5,
            ingredients: [
              " white rum",
              " lime juice",
              " simple syrup",
              " club soda",
              " mint leaves"
            ],
            quickFinds: true,
            photo: "https://cdn.theliveinkitchen.com/wp-content/uploads/2020/07/28211641/Mojito-Mocktail-The-Live-In-Kitchen-Featured.jpg",
            instructions: "1. In a glass, muddle the mint leaves with the lime juice and simple syrup. \n2. Fill the glass with ice and add the rum. \n3. Top off with club soda and stir. \n4. Garnish with a sprig of mint and serve."
          },

          //6
          {
            recipeType: "food",
            recipeName: "Spicy Shrimp Pad Thai",
            photo: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-shrimp-pad-thai_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1567536801871.jpeg",
            description: "A classic Thai dish with a spicy twist, featuring juicy shrimp, rice noodles, and exotic flavors of tamarind and fish sauce.",
            numOfIng: 12,
            ingredients: ["shrimp", " rice noodles", " bean sprouts", " peanuts", " green onion", " garlic", " tamarind", " fish sauce", " lime", " sugar", " chili pepper", " eggs"],
            quickFinds: false,
            instructions: "1. Soak rice noodles in warm water for 30 minutes.\n2. Heat oil in a wok or large pan over high heat. Add shrimp and stir-fry until cooked through. Remove from pan.\n3. Add garlic and chili pepper to the same pan and sauté until fragrant.\n4. Add eggs and scramble until cooked through.\n5. Add noodles, fish sauce, sugar, and lime juice to the pan and stir-fry for 2-3 minutes until noodles are tender.\n6. Add shrimp, bean sprouts, green onion, and peanuts and toss to combine.\n7. Serve hot."
            
        },

        //7
        {
            recipeType: "drink",
            recipeName: "Mango Lassi",
            photo: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/mango-lassi-recipe-500x500.jpg",
            description: "A refreshing and sweet Indian drink made with yogurt, mango, and pungent spices like cardamom and saffron.",
            numOfIng: 6,
            ingredients: ["mango", " yogurt", " sugar", " cardamom", " saffron", " ice"],
            quickFinds: false,
            instructions: "1. Blend all ingredients together until smooth.\n2. Pour into glasses and serve chilled."

        },

        //8
        {
            recipeType: "food",
            recipeName: "Coconut Curry - Chicken",
            photo: "https://www.jocooks.com/wp-content/uploads/2019/10/coconut-chicken-curry-1-10-730x913.jpg",
            description: "A spicy and creamy coconut curry chicken with exotic flavors of cumin, turmeric, and coriander.",
            numOfIng: 10,
            ingredients: ["chicken", " coconut milk", " onion", " garlic", " ginger", " tomato", " cumin", " turmeric", " coriander", " chili pepper"],
            quickFinds: true,
            instructions: "1. Heat oil in a large pot over medium heat. Add onion, garlic, ginger, and chili pepper and sauté until fragrant.\n2. Add chicken and cook until browned on all sides.\n3. Add tomato and spices and stir to combine.\n4. Add coconut milk and bring to a boil. Reduce heat and simmer for 20-30 minutes until chicken is cooked through and sauce has thickened.\n5. Serve with rice or naan bread."
        },

        //9
        {
          recipeType: "food",
          recipeName: "Croissants",
          photo: "https://i.pinimg.com/564x/be/71/f6/be71f69096dcfa717bc04ac2104ca6c4.jpg",
          description: "A buttery and flaky French pastry that's perfect for breakfast or a snack.",
          numOfIng: 6,
          ingredients: ["all-purpose flour", " water", " milk", " sugar", " salt", " unsalted butter"],
          quickFinds: false,
          instructions: "Instructions:\n1. In a large bowl, mix together 3 cups of all-purpose flour, 1/4 cup of sugar, and 1 tsp of salt.\n2. In a separate bowl, dissolve 2 tsp of active dry yeast in 1/4 cup of warm water. Let it sit for 5 minutes until it becomes frothy.\n3. Add the yeast mixture, 1/2 cup of warm milk, and 1/2 cup of water to the flour mixture. Stir until a dough forms.\n4. On a lightly floured surface, knead the dough for 10-12 minutes until it becomes smooth and elastic.\n5. Cover the dough and let it rest for 1 hour.\n6. Roll out the dough into a rectangle shape, about 1/4 inch thick.\n7. Cut 1 1/2 inch strips of dough, then cut each strip diagonally to create triangles.\n8. Place a small piece of unsalted butter at the base of each triangle, then roll up the dough tightly towards the point.\n9. Place the croissants on a baking sheet lined with parchment paper and let them rise for 2-3 hours until they double in size.\n10. Preheat the oven to 400°F. Brush the croissants with an egg wash and bake them for 15-20 minutes until they turn golden brown.\n11. Remove the croissants from the oven and let them cool for a few minutes before serving. Enjoy your buttery and flaky croissants!"
        },
        //10
        {
            recipeType: "drink",
            recipeName: "Passion Fruit Margarita",
            photo: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/3/31/0/FNM_050110-Margaritas-004_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539319954.jpeg",
            description: "A tropical twist on the classic margarita, featuring exotic passion fruit juice and tangy lime.",
            numOfIng: 5,
            ingredients: ["tequila", " passion fruit juice", " lime juice", " triple sec", " ice"],
            quickFinds: true,
            instructions: "Instructions:\n1. Fill a cocktail shaker halfway with ice.\n2. Pour 2 oz of tequila, 2 oz of passion fruit juice, 1 oz of lime juice, and 1 oz of triple sec into the shaker.\n3. Shake vigorously for 15-20 seconds.\n4. Strain the mixture into a salt-rimmed glass filled with ice.\n5. Garnish with a slice of lime or a wedge of passion fruit, if desired.\n6. Enjoy your tropical twist on the classic margarita!\n\nNote: If you prefer your margaritas less strong, you can adjust the ratio of tequila to juice to taste. You can also use a blender to make a frozen version of this drink by blending all the ingredients with ice until smooth."
        },

        //11
        {
            recipeType: "food",
            recipeName: "Indian Butter Chicken",
            photo: "https://www.aheadofthyme.com/wp-content/uploads/2016/01/indian-butter-chicken-3-1024x683.jpg",
            description: "A creamy and flavorful Indian dish featuring juicy chicken in a rich tomato-based sauce with exotic spices like garam masala and fenugreek.",
            numOfIng: 13,
            ingredients: ["chicken", "tomato", "cream", "onion", "garlic", "ginger", "garam masala", " fenugreek", " cumin", " coriander", " cayenne pepper", " salt", " butter"],
            quickFinds: false,
            instructions: "Instructions:\n1. Cut 1 lb of boneless, skinless chicken breast into bite-sized pieces.\n2. In a large bowl, mix 1/2 cup of plain yogurt, 2 cloves of minced garlic, and 1 tbsp of grated ginger. Add the chicken pieces and toss to coat. Cover the bowl and refrigerate for at least 30 minutes, or overnight if possible.\n3. In a large skillet or saucepan, melt 2 tbsp of butter over medium-high heat. Add 1 cup of diced onion and cook for 3-4 minutes until softened.\n4. Add 2 cups of diced tomato to the pan, and cook for 5-6 minutes until the tomato has broken down and become saucy.\n5. Stir in 1 tsp of garam masala, 1/2 tsp of fenugreek, 1/2 tsp of cumin, 1/2 tsp of coriander, and a pinch of cayenne pepper. Cook for 1-2 minutes until the spices are fragrant.\n6. Add the marinated chicken to the pan, along with any remaining yogurt mixture. Cook for 8-10 minutes until the chicken is cooked through and no longer pink.\n7. Stir in 1/2 cup of heavy cream and 1 tsp of salt. Cook for an additional 1-2 minutes until the sauce has thickened slightly.\n8. Serve hot over rice or with naan bread, garnished with fresh cilantro if desired."

        }        
        
        
]

module.exports = seedItems