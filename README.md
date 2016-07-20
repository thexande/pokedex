![](https://github.com/gSchool/pokemon-node/blob/master/public/images/pokemon-logo.png)

## Background

**Pokemón Node** is an app where a user can manage trainers and their corresponding Pokemón to spar in a gym.

Trainers can come on to the app and acquire Pokemón that will belong exclusively to them.  One trainer can have many Pokemón, but each Pokemón belongs to only one trainer.

You will use cookies to set the names of two Pokemón :  p1 and p2 .  When you visit the Pokemón page, if either p1 or p2 is not set, you can click on "assign" next to a Pokemón and they will be assigned to the gym.

The cookies p1 and p2 should correspond to the database ids of the two Pokemón that they refer to.
For example, if you have a Raichu with an id of 22 in the database, then you would set a cookie p1 with a value of 22.

The combat power is NOT in the cookie. You'll have to look up a Pokemón in the database when they fight to retrieve its combat power based on the id that has been set in the cookie.

When you visit the gym, If both p1 and p2 are assigned, you can click "spar" and the two Pokemón will spar each other.
The one with the highest combat power wins.

On the Trainers page, you should be able to see all trainers and have the ability to CRUD trainers.

On the Pokemón page, you should be able to see all Pokemón and have the ability to CRUD Pokemón.

## INSTRUCTIONS:

```
1. Fork and clone this repo.
2. npm install
3. If you are using knex, install knex and pg
4. You'll need to create a database called pokemon-node
5. Write a migration for the pokemon database that creates two tables: pokemon and trainers.
Use the following information to build your migration :

trainers:
id (auto increment)
name (string)

pokemon:
id (auto increment)
name (string)
trainer_id (integer)
CP (integer)  /// CP stands for combat power
in_gym (boolean)


6.  After you run your migration, run the seeds ( knex seed:run )
7.  Inspect your database tables to make sure that you now have trainers and Pokemón
8. Begin development on your project.  Follow the stories below.


```



## Use the following Gherkin stories to guide your development.

As a user, when I visit the root route ("/") , I am redirected to Pokemón index page.

As a user, when I visit the Pokemón index page, I should view all Pokemón.

As a user, when I visit the trainers index page, I should see a list of all trainers.

As a user, when I view the index Pokemón page, if there are less than two Pokemón assigned to the gym, every unassigned Pokemón should have a 'assign to gym' link before the edit and delete links.  

As a user, when I view the Pokemón page, if a Pokemón has already been assigned to a gym, there should be a 'remove from gym' link where the 'assign to gym' link was.

As a user, when I view the Pokemón page, if two Pokemón have been assigned to the gym,
none of the 'assign to gym' links should appear next to any of the Pokemón.  

As a user, when I visit the Pokemón page, when I click on the 'edit' link next to a Pokemón, I should be taken to an edit page.

As a user, when I visit the Pokemón page, when I click on the 'delete' link next to a Pokemón, I should be taken to a page that deletes that Pokemón and then redirected back to the Pokemón page, where I will no longer see the deleted Pokemón in the list.

As a user, when I visit the gym, if there are no Pokemón assigned to the gym, the Pokemón1 and Pokemón2 slots will be empty.

As a user, when I visit the gym, if there is only one Pokemón assigned to the gym, I will see only the Pokemón1 slot populated.

As a user, when I visit the gym, if there are two Pokemón assigned to the gym, I will see both Pokemón1 and Pokemón2 slots populated in the gym.

As a user, when I visit the gym, if there are two Pokemón assigned to the gym, when I click the 'spar' button, the Pokemón with the highest Combat Power will win the fight and the winner's name will be displayed on the page next to the word 'winner'.

STRETCH:

* As a user, when I fight two Pokemón, the winner's CP is incremented by 20.
* Run a migration to add an image field to the Pokemon database that takes an image url,
the image should show on both the gym pages and the Pokemón index page.



## Notes

* You can use a raw database driver, a query builder, or an ORM for your database connection. A query builder, such as Knex, is recommended.
* Deploy your work

## Mockups

You can use these mockups as a reference. Your design does not have to exactly match, but it should look as good or better than the mockups:

## TRAINERS INDEX

![Trainers - Index](https://github.com/gSchool/pokemon-node/blob/master/mockups/trainers-index.png)

## POKEMÓN INDEX

![Pokemon - Index](https://github.com/gSchool/pokemon-node/blob/master/mockups/pokemon-index.png)

## GYM

![Gym](https://github.com/gSchool/pokemon-node/blob/master/mockups/gym.png)



## How to Submit Your Assessment

Fork/clone [this repo](https://github.com/gSchool/pokemon-node).
Add a README to your project that has:

* A link to your deployed site
* Link to your tracker project
* Links to any repos you used with updated code

Submit a pull request to the original repo with this README.
