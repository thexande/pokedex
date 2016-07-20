![](https://github.com/gSchool/pokemon-node/blob/master/public/images/pokemon-logo.png)


## Background

**Pokemón Node** is a first-come , first-serve Pokemón environment where trainers are in charge of acquiring and developing Pokemón to spar in a gym.

Trainers can come on to the app and acquire Pokemón that will belong exclusively to them.  One trainer can have many Pokemón, but each Pokemón belongs to only one trainer.

You will use cookies to set the names of two Pokemón :  p1 and p2 .  When you visit the Pokemón page, if either p1 or p2 is not set, you can click on "assign" next to a Pokemón and they will be assigned to the gym.

The cookies p1 and p2 should correspond to the database ids of the two Pokemón that they refer to.
For example, if you have a Raichu with an id of 22 in the database, then you would set a cookie p1 with a value of 22.
The combat power is NOT in the cookie. You'll have to look up a Pokemón in the database when they fight to retrieve its combat power based on the id that has been set in the cookie.

When you visit the gym, If both p1 and p2 are assigned, you can click "spar" and the two Pokemón will spar each other.
The one with the highest combat power wins.

On the Trainers page, you should be able to see all trainers and have the ability to CRUD trainers.

On the Pokemón page, you should be able to see all Pokemón and have the ability to CRUD Pokemón.  



## Import stories into Pivotal Tracker

Import this [CSV](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/galvanize_reads_20160104_0559.csv) into a new project in Pivotal Tracker to get the requirements for this story. They are prioritized. You may find it useful to size the stories before you begin.



## Notes

* You can use a raw database driver, a query builder, or an ORM for your database connection. A query builder, such as Knex, is recommended.
* Use feature-branch workflows. You should end up with one commit for each feature.
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

Submit a pull request to the orginal repo with this README.
